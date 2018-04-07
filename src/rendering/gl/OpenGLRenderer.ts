import {mat4, vec4, vec3} from 'gl-matrix';
import Drawable from './Drawable';
import Camera from '../../Camera';
import {gl} from '../../globals';
import ShaderProgram, {Shader} from './ShaderProgram';
import PostProcess from './PostProcess'
import Square from '../../geometry/Square';
//import { fromValues } from 'gl-matrix/src/gl-matrix/mat2d';


const GbufferEnum = {"Albedo":0, "Specular":1, "Normal":2};

const PipelineEnum = {"SceneImage":0, "SSR":1, "SSR_MIP":2, "TranslucentAdded":3, "SaveFrame": 4, "ShadowPass": 5,
                     "ToneMapping": 0};


var gShadowMapSize = 2048;


class OpenGLRenderer {
  gBuffer: WebGLFramebuffer; // framebuffer for deferred rendering
  tBuffer: WebGLFramebuffer; // framebuffer for translucent rendering

  gbTargets: WebGLTexture[]; // references to different 4-channel outputs of the gbuffer
                             // Note that the constructor of OpenGLRenderer initializes
                             // gbTargets[0] to store 32-bit values, while the rest
                             // of the array stores 8-bit values. You can modify
                             // this if you want more 32-bit storage.

  tTargets: WebGLTexture[]; 

  tDBuffer: WebGLFramebuffer;
  tDTargets: WebGLTexture[];  //0 for transcluent, 1 for composite and update new Depth map

  depthTexture: WebGLTexture; // You don't need to interact with this, it's just
                              // so the OpenGL pipeline can do depth sorting
  shadowDepthTexture: WebGLTexture; // Shadow Depth tex for shadow mapping

  // post-processing buffers pre-tonemapping (32-bit color)
  post32Buffers: WebGLFramebuffer[];
  post32Targets: WebGLTexture[];

  // post-processing buffers post-tonemapping (8-bit color)
  post8Buffers: WebGLFramebuffer[];
  post8Targets: WebGLTexture[];

  // post processing shader lists, try to limit the number for performance reasons
  post8Passes: PostProcess[];
  post32Passes: PostProcess[];

  currentTime: number; // timer number to apply to all drawing shaders
  deltaTime: number;

  SSRDownSampling: number = 0.5;

  // the shader that renders from the gbuffers into the postbuffers
  deferredShader :  PostProcess = new PostProcess(
    new Shader(gl.FRAGMENT_SHADER, require('../../shaders/deferred-render.glsl'))
    );

  translucentAddPass : PostProcess = new PostProcess(
    new Shader(gl.FRAGMENT_SHADER, require('../../shaders/translucentAdd-frag.glsl'))
    );

  // shader that maps 32-bit color to 8-bit color
  SSRPass : PostProcess = new PostProcess(
    new Shader(gl.FRAGMENT_SHADER, require('../../shaders/SSR-frag.glsl'))
    );
  
  // shader that maps 32-bit color to 8-bit color
  SSRMipPass : PostProcess = new PostProcess(
    new Shader(gl.FRAGMENT_SHADER, require('../../shaders/SSRMip-frag.glsl'))
    );

  // shader that maps 32-bit color to 8-bit color
  savePass : PostProcess = new PostProcess(
      new Shader(gl.FRAGMENT_SHADER, require('../../shaders/save-frag.glsl'))
   );

  // shader that maps 32-bit color to 8-bit color
  tonemapPass : PostProcess = new PostProcess(
    new Shader(gl.FRAGMENT_SHADER, require('../../shaders/tonemap-frag.glsl'))
    );

  presentPass : PostProcess = new PostProcess(
      new Shader(gl.FRAGMENT_SHADER, require('../../shaders/present-frag.glsl'))
      );


  add8BitPass(pass: PostProcess) {
    this.post8Passes.push(pass);
  }


  add32BitPass(pass: PostProcess) {
    this.post32Passes.push(pass);
  }


  constructor(public canvas: HTMLCanvasElement) {
    this.currentTime = 0.0;
    this.gbTargets = [undefined, undefined, undefined];
    this.tTargets = [undefined, undefined];
    this.tDTargets =  [undefined, undefined];
    this.post8Buffers = [undefined, undefined];
    this.post8Targets = [undefined, undefined];
    this.post8Passes = [];

    this.post32Buffers = [undefined, undefined, undefined, undefined, undefined, undefined];
    this.post32Targets = [undefined, undefined, undefined, undefined, undefined, undefined];
    this.post32Passes = [];

    if (!gl.getExtension("OES_texture_float_linear")) {
      console.error("OES_texture_float_linear not available");
    }

    if (!gl.getExtension("EXT_color_buffer_float")) {
      console.error("FLOAT color buffer not available");
    }

    var gb0loc = gl.getUniformLocation(this.deferredShader.prog, "u_Gbuffer_Albedo");
    var gb1loc = gl.getUniformLocation(this.deferredShader.prog, "u_Gbuffer_Specular");
    var gb2loc = gl.getUniformLocation(this.deferredShader.prog, "u_Gbuffer_Normal");

    this.deferredShader.use();
    gl.uniform1i(gb0loc, 0);
    gl.uniform1i(gb1loc, 1);
    gl.uniform1i(gb2loc, 2);
  }


  setClearColor(r: number, g: number, b: number, a: number) {
    gl.clearColor(r, g, b, a);
  }


  setSize(width: number, height: number) {
    console.log(width, height);
    this.canvas.width = width;
    this.canvas.height = height;

    // --- GBUFFER CREATION START ---
    // refresh the gbuffers
    this.gBuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.gBuffer);
    gl.drawBuffers([gl.COLOR_ATTACHMENT0, gl.COLOR_ATTACHMENT1, gl.COLOR_ATTACHMENT2]);

    for (let i = 0; i < this.gbTargets.length; i ++) {
      this.gbTargets[i] = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, this.gbTargets[i]);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, gl.drawingBufferWidth, gl.drawingBufferHeight, 0, gl.RGBA, gl.FLOAT, null);
      
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + i, gl.TEXTURE_2D, this.gbTargets[i], 0);
    }
    // depth attachment
    this.depthTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, this.depthTexture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.DEPTH_COMPONENT32F, gl.drawingBufferWidth, gl.drawingBufferHeight, 0, gl.DEPTH_COMPONENT, gl.FLOAT, null);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, this.depthTexture, 0);

    var FBOstatus = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
    if (FBOstatus != gl.FRAMEBUFFER_COMPLETE) {
        console.error("GL_FRAMEBUFFER_COMPLETE failed, CANNOT use FBO[0]\n");
    }

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    // --- TBUFFER CREATION START ---
    // T
     this.tBuffer = gl.createFramebuffer();
     gl.bindFramebuffer(gl.FRAMEBUFFER, this.tBuffer);
     gl.drawBuffers([gl.COLOR_ATTACHMENT0, gl.COLOR_ATTACHMENT1]);
 
     // -- 0
     this.tTargets[0] = gl.createTexture();
     gl.bindTexture(gl.TEXTURE_2D, this.tTargets[0]);
     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
 
     gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, gl.drawingBufferWidth, gl.drawingBufferHeight, 0, gl.RGBA, gl.FLOAT, null);
       
     gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.tTargets[0], 0);    
     gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, this.depthTexture, 0);

     // -- 1
     this.tTargets[1] = gl.createTexture();
     gl.bindTexture(gl.TEXTURE_2D, this.tTargets[1]);
     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
 
     gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, gl.drawingBufferWidth, gl.drawingBufferHeight, 0, gl.RGBA, gl.FLOAT, null);
       
     gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT1, gl.TEXTURE_2D, this.tTargets[1], 0); 

     var FBOstatus = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
     if (FBOstatus != gl.FRAMEBUFFER_COMPLETE) {
         console.error("GL_FRAMEBUFFER_COMPLETE failed, CANNOT use FBO[0]\n");
     }
 
     gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    // TD

     this.tDBuffer = gl.createFramebuffer();
     gl.bindFramebuffer(gl.FRAMEBUFFER, this.tDBuffer);
     gl.drawBuffers([gl.COLOR_ATTACHMENT0, gl.COLOR_ATTACHMENT1]); 
   
     // == 0
     this.tDTargets[0] = gl.createTexture();
     gl.bindTexture(gl.TEXTURE_2D, this.tDTargets[0]);
     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
 
     gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, gl.drawingBufferWidth, gl.drawingBufferHeight, 0, gl.RGBA, gl.FLOAT, null);
       
     gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.tDTargets[0], 0);    
     gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, this.depthTexture, 0);

     // -- 1
     this.tDTargets[1] = gl.createTexture();
     gl.bindTexture(gl.TEXTURE_2D, this.tDTargets[1]);
     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
 
     gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, gl.drawingBufferWidth, gl.drawingBufferHeight, 0, gl.RGBA, gl.FLOAT, null);
       
     gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT1, gl.TEXTURE_2D, this.tDTargets[1], 0);   

     var FBOstatus = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
     if (FBOstatus != gl.FRAMEBUFFER_COMPLETE) {
         console.error("GL_FRAMEBUFFER_COMPLETE failed, CANNOT use FBO[0]\n");
     }
 
     gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    // create the framebuffers for post processing
    for (let i = 0; i < this.post8Buffers.length; i++) {

      // 8 bit buffers have unsigned byte textures of type gl.RGBA8
      this.post8Buffers[i] = gl.createFramebuffer()
      gl.bindFramebuffer(gl.FRAMEBUFFER, this.post8Buffers[i]);
      gl.drawBuffers([gl.COLOR_ATTACHMENT0]);

      this.post8Targets[i] = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, this.post8Targets[i]);

    
     
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      
      
      
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, gl.drawingBufferWidth, gl.drawingBufferHeight, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.post8Targets[i], 0);

      FBOstatus = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
      if (FBOstatus != gl.FRAMEBUFFER_COMPLETE) {
        console.error("GL_FRAMEBUFFER_COMPLETE failed, CANNOT use 8 bit FBO\n");
      }
    }


    for (let i = 0; i < this.post32Buffers.length; i++) {
      // 32 bit buffers have float textures of type gl.RGBA32F
      this.post32Buffers[i] = gl.createFramebuffer()
      gl.bindFramebuffer(gl.FRAMEBUFFER, this.post32Buffers[i]);
      gl.drawBuffers([gl.COLOR_ATTACHMENT0]);

      this.post32Targets[i] = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, this.post32Targets[i]);
     
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      if(i == 1)
      {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, gl.drawingBufferWidth * this.SSRDownSampling, gl.drawingBufferHeight * this.SSRDownSampling, 0, gl.RGBA, gl.FLOAT, null);       
      }
      else if(i == 2)
      {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, gl.drawingBufferWidth, gl.drawingBufferHeight, 0, gl.RGBA, gl.FLOAT, null);       
      }
      else if(i == PipelineEnum.ShadowPass){//Shadow Map
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, gShadowMapSize, gShadowMapSize, 0, gl.RGBA, gl.FLOAT, null); 
      }
      else
      {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, gl.drawingBufferWidth, gl.drawingBufferHeight, 0, gl.RGBA, gl.FLOAT, null);
      }

      gl.bindTexture(gl.TEXTURE_2D, null);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.post32Targets[i], 0);

      if(i == PipelineEnum.ShadowPass){
         // depth attachment
         this.shadowDepthTexture = gl.createTexture();
         gl.bindTexture(gl.TEXTURE_2D, this.shadowDepthTexture);
         gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
         gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
         gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
         gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
         gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
         gl.texImage2D(gl.TEXTURE_2D, 0, gl.DEPTH_COMPONENT32F, gShadowMapSize, gShadowMapSize, 0, gl.DEPTH_COMPONENT, gl.FLOAT, null);
         gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, this.shadowDepthTexture, 0);
      }

      FBOstatus = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
      if (FBOstatus != gl.FRAMEBUFFER_COMPLETE) {
        console.error("GL_FRAMEBUFFER_COMPLETE failed, CANNOT use 8 bit FBO\n");
      }      
    }


    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.bindTexture(gl.TEXTURE_2D, null);
  }


  updateTime(deltaTime: number, currentTime: number) {
    this.deferredShader.setTime(currentTime);
    for (let pass of this.post8Passes) pass.setTime(currentTime);
    for (let pass of this.post32Passes) pass.setTime(currentTime);
    this.currentTime = currentTime;
    this.deltaTime = deltaTime;
  }


  clear() {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  }


  clearGB() {
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.gBuffer);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  }


  renderToGBuffer(camera: Camera, gbProg: ShaderProgram, drawables: Array<Drawable>) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.gBuffer);
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.enable(gl.DEPTH_TEST);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    
    let view = camera.viewMatrix;
    let proj = camera.projectionMatrix;
    let viewProj = camera.viewProjectionMatrix;

    let color = vec4.fromValues(0.5, 0.5, 0.5, 1);

    
    gbProg.setViewProjMatrix(viewProj);
    gbProg.setGeometryColor(color);
    gbProg.setViewMatrix(view);
    gbProg.setProjMatrix(proj);

    gbProg.setTime(this.currentTime);

    for (let drawable of drawables) {

      gbProg.setModelMatrix(drawable.modelMat);
      gbProg.bindTexToUnit("AlbedoMap", drawable.albedoMap, 0);
      gbProg.bindTexToUnit("SpecularMap", drawable.specularMap, 1);
      gbProg.bindTexToUnit("NormalMap", drawable.normalMap, 2);

      gbProg.draw(drawable);
    }

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.bindTexture(gl.TEXTURE_2D, null);

  }

  renderToShadowDepth(camera: Camera, shadowProg: ShaderProgram, lightViewProjMat : mat4, drawables: Array<Drawable>){
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.post32Buffers[PipelineEnum.ShadowPass]);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.enable(gl.DEPTH_TEST);
    gl.viewport(0, 0, gShadowMapSize, gShadowMapSize);
       
    shadowProg.setViewProjMatrix(lightViewProjMat);

    for (var i =0; i< drawables.length ; i++)
    {
      shadowProg.setModelMatrix(drawables[i].modelMat);  
      shadowProg.draw(drawables[i]);
    }

    // bind default frame buffer
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  }

  renderToTranslucent(camera: Camera, tProg: ShaderProgram, drawables: Array<Drawable>, skyCubeMap: WebGLTexture, lightColor : vec4, lightDir : vec4) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.tBuffer);

    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.enable(gl.BLEND);
    gl.enable(gl.DEPTH_TEST);
    this.setClearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    
    let view = camera.viewMatrix;
    let proj = camera.projectionMatrix;
    let viewProj = camera.viewProjectionMatrix;

    let color = vec4.fromValues(0.5, 0.5, 0.5, 1);

    tProg.setLightColor(lightColor);
    tProg.setLightDirection(lightDir);


    
    tProg.setViewProjMatrix(viewProj);
    tProg.setGeometryColor(color);
    tProg.setViewMatrix(view);
    tProg.setProjMatrix(proj);
    tProg.setInvViewProjMatrix(camera.invViewProjectionMatrix);
    tProg.setCameraWPos(camera.position);

    tProg.setTime(this.currentTime);

    gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);
    tProg.setSkyCubeMap(skyCubeMap);

    for (let drawable of drawables) {

      tProg.setModelMatrix(drawable.modelMat);
      tProg.bindTexToUnit("AlbedoMap", drawable.albedoMap, 0);
      tProg.bindTexToUnit("SpecularMap", drawable.specularMap, 1);
      tProg.bindTexToUnit("NormalMap", drawable.normalMap, 2);

      tProg.draw(drawable);
    }

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.bindTexture(gl.TEXTURE_2D, null);

  }

  renderFromGBuffer(camera: Camera, skyCubeMap: WebGLTexture, lightViewProjMat : mat4, lightColor : vec4, lightDir : vec4 ) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.post32Buffers[PipelineEnum.SceneImage]);
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.disable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);

    this.setClearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    let view = camera.viewMatrix;
    let proj = camera.projectionMatrix;
    this.deferredShader.setViewMatrix(view);
    this.deferredShader.setProjMatrix(proj);
    this.deferredShader.setInvViewProjMatrix(camera.invViewProjectionMatrix);
    this.deferredShader.setCameraWPos(camera.position);

    this.deferredShader.setLightColor(lightColor);
    this.deferredShader.setLightDirection(lightDir);

    this.deferredShader.setAlbedoMap(this.gbTargets[GbufferEnum.Albedo]);
    this.deferredShader.setSpecularMap(this.gbTargets[GbufferEnum.Specular]);
    this.deferredShader.setNormalMap(this.gbTargets[GbufferEnum.Normal]);
    
    this.deferredShader.setDepthMap(this.depthTexture);

    this.deferredShader.setShadowMap(this.post32Targets[PipelineEnum.ShadowPass]);
    this.deferredShader.setLightViewProjMatrix(lightViewProjMat);

    gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);
    this.deferredShader.setSkyCubeMap(skyCubeMap);

    this.deferredShader.draw();
     
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    //gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);
  }

  renderAddTranslucent()
  {
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.tDBuffer);
    //gl.enable(gl.BLEND);
    //gl.blendFunc(gl.ONE, gl.ONE);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    //gl.clear(gl.COLOR_BUFFER_BIT);

    this.translucentAddPass.setFrame00(this.post32Targets[PipelineEnum.SceneImage]);
    this.translucentAddPass.setFrame01(this.tTargets[0]);
    this.translucentAddPass.setFrame02(this.tTargets[1]);

    this.translucentAddPass.setAlbedoMap(this.gbTargets[GbufferEnum.Albedo]);
    this.translucentAddPass.setSpecularMap(this.gbTargets[GbufferEnum.Specular]);
    this.translucentAddPass.setNormalMap(this.gbTargets[GbufferEnum.Normal]);
    this.translucentAddPass.draw();

    // bind default frame buffer
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  }

  renderSSR(camera: Camera, skyCubeMap: WebGLTexture,
    SSR_MaxStep : number, SSR_Opaque_Intensity : number, SSR_Trans_Intensity : number, SSR_Threshold : number)
  {
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.post32Buffers[PipelineEnum.SSR]);
    gl.viewport(0, 0, gl.drawingBufferWidth * this.SSRDownSampling, gl.drawingBufferHeight* this.SSRDownSampling);
    gl.disable(gl.DEPTH_TEST);
    //gl.enable(gl.BLEND);

    this.setClearColor(0.0, 0.0, 0.0, 11.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    this.SSRPass.setSSRInfo(vec4.fromValues(SSR_MaxStep, SSR_Opaque_Intensity, SSR_Trans_Intensity, SSR_Threshold));
    this.SSRPass.setFrame00(this.post32Targets[PipelineEnum.SaveFrame]); //previous frame
    this.SSRPass.setFrame01(this.post32Targets[PipelineEnum.SceneImage]); //current frame
    this.SSRPass.setdeltaTime(this.deltaTime );

    gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);
    this.SSRPass.setSkyCubeMap(skyCubeMap);

    this.SSRPass.setDepthMap( this.tDTargets[0] /* this.gbTargets[GbufferEnum.Albedo] */);
    
    this.SSRPass.setViewProjMatrix(camera.viewProjectionMatrix);
    this.SSRPass.setInvViewProjMatrix(camera.invViewProjectionMatrix);

    this.SSRPass.setCameraWPos(camera.position);
    this.SSRPass.setNormalMap(this.gbTargets[GbufferEnum.Normal]);
    this.SSRPass.setSpecularMap( this.tDTargets[1] /*this.gbTargets[GbufferEnum.Specular]*/ );

    this.SSRPass.draw();

    // bind default frame buffer
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  }

  renderSSRMip() {
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.post32Buffers[PipelineEnum.SSR_MIP]);
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.disable(gl.DEPTH_TEST);
    //gl.enable(gl.BLEND);

    this.setClearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    //y is flipped
    this.SSRMipPass.setFrame00(this.post32Targets[PipelineEnum.SSR]);

    this.SSRMipPass.draw();
    // bind default frame buffer
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    gl.bindTexture(gl.TEXTURE_2D, this.post32Targets[PipelineEnum.SSR_MIP]);
    gl.generateMipmap(gl.TEXTURE_2D);

    gl.bindTexture(gl.TEXTURE_2D, null);    
  }

  renderforSavingCurrentFrame(camera: Camera) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.post32Buffers[PipelineEnum.SaveFrame]);
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.disable(gl.DEPTH_TEST);
    
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    this.savePass.setAlbedoMap(this.gbTargets[GbufferEnum.Albedo] );
    this.savePass.setSpecularMap(this.tDTargets[1] /*this.gbTargets[GbufferEnum.Specular]*/ );

    this.savePass.setFrame00( this.tDTargets[0] /* this.post32Targets[(PipelineEnum.TranslucentAdded] */);
    this.savePass.setFrame01(this.post32Targets[PipelineEnum.SSR]);
    this.savePass.setFrame02(this.post32Targets[PipelineEnum.SSR_MIP]);
   
    this.savePass.draw();
    // bind default frame buffer
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);    

  }

  renderTonemapping(camera: Camera) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.post8Buffers[PipelineEnum.ToneMapping]);
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.disable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.clear(gl.COLOR_BUFFER_BIT);
    

    this.tonemapPass.setFrame00(this.post32Targets[PipelineEnum.SaveFrame]);
   
    this.tonemapPass.draw();
    // bind default frame buffer
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);    
  }

  renderPresent(camera: Camera) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.disable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.clear(gl.COLOR_BUFFER_BIT);

    this.presentPass.setFrame00(this.post8Targets[PipelineEnum.ToneMapping]);
    //this.presentPass.setFrame00(this.post32Targets[PipelineEnum.SaveFrame]);
    this.presentPass.draw();

    // bind default frame buffer
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  }

};

export default OpenGLRenderer;
