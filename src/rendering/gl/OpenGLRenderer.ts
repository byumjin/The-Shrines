import {mat4, vec4, vec3, vec2} from 'gl-matrix';
import Drawable from './Drawable';
import Camera from '../../Camera';
import {gl} from '../../globals';
import ShaderProgram, {Shader} from './ShaderProgram';
import PostProcess from './PostProcess'
import Square from '../../geometry/Square';
import Quad from '../../geometry/Quad';
import Particle from '../../particle/Particle';
import Mesh from '../../geometry/Mesh';
import Texture from '../../rendering/gl/Texture';

const GbufferEnum = {"Albedo":0, "Specular":1, "Normal":2};

const PipelineEnum = {"SceneImage":0, "SSR":1, "SSR_MIP":2, "SaveFrame": 3, "ShadowPass": 4,
                      "ExtractHighLight" : 5, "HorizonBlur" : 6, "VerticalBlur" : 7, "Particle" : 8, "ParticleMesh" : 9, "Clouds" : 10,
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

  frostNoiseTexture: WebGLTexture;

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

  BloomDownSampling: number = 0.25;

  // the shader that renders from the gbuffers into the postbuffers
  deferredShader :  PostProcess = new PostProcess(
    new Shader(gl.FRAGMENT_SHADER, require('../../shaders/deferred-render.glsl'))
    );

  translucentAddPass : PostProcess = new PostProcess(
    new Shader(gl.FRAGMENT_SHADER, require('../../shaders/translucentAdd-frag.glsl'))
    );

  
  SSRPass : PostProcess = new PostProcess(
    new Shader(gl.FRAGMENT_SHADER, require('../../shaders/SSR-frag.glsl'))
    );
  
 
  SSRMipPass : PostProcess = new PostProcess(
    new Shader(gl.FRAGMENT_SHADER, require('../../shaders/SSRMip-frag.glsl'))
    );


  savePass : PostProcess = new PostProcess(
      new Shader(gl.FRAGMENT_SHADER, require('../../shaders/save-frag.glsl'))
   );

  highLightPass : PostProcess = new PostProcess(
    new Shader(gl.FRAGMENT_SHADER, require('../../shaders/highLight-frag.glsl'))
 );

 VblurPass : PostProcess = new PostProcess(
  new Shader(gl.FRAGMENT_SHADER, require('../../shaders/Blur_Vertical-frag.glsl'))
);

HblurPass : PostProcess = new PostProcess(
  new Shader(gl.FRAGMENT_SHADER, require('../../shaders/Blur_Horizontal-frag.glsl'))
);

  // shader that maps 32-bit color to 8-bit color
  tonemapPass : PostProcess = new PostProcess(
    new Shader(gl.FRAGMENT_SHADER, require('../../shaders/tonemap-frag.glsl'))
    );

  presentPass : PostProcess = new PostProcess(
      new Shader(gl.FRAGMENT_SHADER, require('../../shaders/present-frag.glsl'))
      );

      /*
  couldPass : PostProcess = new PostProcess(
        new Shader(gl.FRAGMENT_SHADER, require('../../shaders/clouds-frag.glsl'))
        );
*/
  
  // Vignette Effects
  frostPass : PostProcess = new PostProcess(
    new Shader(gl.FRAGMENT_SHADER, require('../../shaders/frost-frag.glsl'))
    );

  rainyPass : PostProcess = new PostProcess(
    new Shader(gl.FRAGMENT_SHADER, require('../../shaders/rainy-frag.glsl'))
    );

  add8BitPass(pass: PostProcess) {
    this.post8Passes.push(pass);
  }


  add32BitPass(pass: PostProcess) {
    this.post32Passes.push(pass);
  }

  setFrostNoiseTexture(tex: WebGLTexture){
    this.frostNoiseTexture = tex;
  }

  constructor(public canvas: HTMLCanvasElement) {
    this.currentTime = 0.0;
    this.gbTargets = [undefined, undefined, undefined];
    this.tTargets = [undefined, undefined];
    this.tDTargets =  [undefined, undefined];
    this.post8Buffers = [undefined, undefined];
    this.post8Targets = [undefined, undefined];
    this.post8Passes = [];

    this.post32Buffers = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
    this.post32Targets = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
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
      
      if(i == PipelineEnum.SSR)
      {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, gl.drawingBufferWidth * this.SSRDownSampling, gl.drawingBufferHeight * this.SSRDownSampling, 0, gl.RGBA, gl.FLOAT, null);       
      }
      else if(i == PipelineEnum.SSR_MIP)
      {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, gl.drawingBufferWidth * this.SSRDownSampling, gl.drawingBufferHeight * this.SSRDownSampling, 0, gl.RGBA, gl.FLOAT, null);       
      }
      else if(i == PipelineEnum.ShadowPass){//Shadow Map
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, gShadowMapSize, gShadowMapSize, 0, gl.RGBA, gl.FLOAT, null); 
      }
      else if(i == PipelineEnum.HorizonBlur){
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, gl.drawingBufferWidth * this.BloomDownSampling, gl.drawingBufferHeight * this.BloomDownSampling, 0, gl.RGBA, gl.FLOAT, null); 
      }
      else if(i == PipelineEnum.VerticalBlur){
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, gl.drawingBufferWidth * this.BloomDownSampling, gl.drawingBufferHeight * this.BloomDownSampling, 0, gl.RGBA, gl.FLOAT, null); 
      }     
      else
      {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, gl.drawingBufferWidth, gl.drawingBufferHeight, 0, gl.RGBA, gl.FLOAT, null);
      }

      gl.bindTexture(gl.TEXTURE_2D, null);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.post32Targets[i], 0);

      // depth attachment
      if(i == PipelineEnum.ShadowPass){
         
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
      else if(i == PipelineEnum.ParticleMesh)
      {
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, this.depthTexture, 0);
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
    this.rainyPass.setTime(currentTime);
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


  renderToGBuffer(camera: Camera, gbProg: ShaderProgram, leafProg: ShaderProgram, barkProg: ShaderProgram, drawables: Array<Drawable>) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.gBuffer);
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.enable(gl.DEPTH_TEST);
    gl.clearDepth(1.0);
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

    // Tree Render
    leafProg.setViewProjMatrix(viewProj);
    leafProg.setGeometryColor(color);
    leafProg.setViewMatrix(view);
    leafProg.setProjMatrix(proj);

    leafProg.setTime(this.currentTime);

    barkProg.setViewProjMatrix(viewProj);
    barkProg.setGeometryColor(color);
    barkProg.setViewMatrix(view);
    barkProg.setProjMatrix(proj);

    barkProg.setTime(this.currentTime);

    for (let drawable of drawables) {
      if(drawable.type == 0){
        gbProg.setModelMatrix(drawable.modelMat);
        gbProg.bindTexToUnit("AlbedoMap", drawable.albedoMap, 0);
        gbProg.bindTexToUnit("SpecularMap", drawable.specularMap, 1);
        gbProg.bindTexToUnit("NormalMap", drawable.normalMap, 2);

        gbProg.draw(drawable);
      }
      else if(drawable.type == 1){
        //Leaf
        leafProg.setModelMatrix(drawable.modelMat);
        leafProg.setCenter(drawable.center);
        leafProg.bindTexToUnit("AlbedoMap", drawable.albedoMap, 0);
        leafProg.bindTexToUnit("SpecularMap", drawable.specularMap, 1);
        leafProg.bindTexToUnit("NormalMap", drawable.normalMap, 2);

        leafProg.draw(drawable);
      }
      else if(drawable.type == 2){
        //Bark
        barkProg.setModelMatrix(drawable.modelMat);
        barkProg.setCenter(drawable.center);
        barkProg.bindTexToUnit("AlbedoMap", drawable.albedoMap, 0);
        barkProg.bindTexToUnit("SpecularMap", drawable.specularMap, 1);
        barkProg.bindTexToUnit("NormalMap", drawable.normalMap, 2);

        barkProg.draw(drawable);
      }
    }

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.bindTexture(gl.TEXTURE_2D, null);

  }

  renderToShadowDepth(camera: Camera, shadowProg: ShaderProgram, leafProg: ShaderProgram, barkProg: ShaderProgram, lightViewProjMat : mat4, drawables: Array<Drawable>){
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.post32Buffers[PipelineEnum.ShadowPass]);

    gl.clearDepth(1.0);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.enable(gl.DEPTH_TEST);
    gl.viewport(0, 0, gShadowMapSize, gShadowMapSize);
  
    gl.cullFace(gl.FRONT);

    shadowProg.setViewProjMatrix(lightViewProjMat);
    leafProg.setViewProjMatrix(lightViewProjMat);
    leafProg.setTime(this.currentTime);
    barkProg.setViewProjMatrix(lightViewProjMat);
    barkProg.setTime(this.currentTime);

    for (var i =0; i< drawables.length ; i++)
    {
      if(drawables[i].type == 0){
        shadowProg.setModelMatrix(drawables[i].modelMat);

        shadowProg.setAlbedoMap( drawables[i].albedoMap.texture );
        shadowProg.draw(drawables[i]);
      }
      else if(drawables[i].type == 1){
        //Leaf
        leafProg.setModelMatrix(drawables[i].modelMat);
        leafProg.setCenter(drawables[i].center);

        leafProg.setAlbedoMap( drawables[i].albedoMap.texture );
        leafProg.draw(drawables[i]);
      }
      else if(drawables[i].type == 2){
        //Bark
        barkProg.setModelMatrix(drawables[i].modelMat);

        barkProg.setAlbedoMap( drawables[i].albedoMap.texture );
        barkProg.setCenter(drawables[i].center);

        barkProg.draw(drawables[i]);
      }
    }
    gl.cullFace(gl.BACK);

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
    gl.bindTexture(gl.TEXTURE_2D, null); 
    //gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);
  }

  

  renderAddTranslucent()
  {
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.tDBuffer);    
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

    this.translucentAddPass.setFrame00(this.post32Targets[PipelineEnum.SceneImage]);
    this.translucentAddPass.setFrame01(this.tTargets[0]);
    this.translucentAddPass.setFrame02(this.tTargets[1]);

    this.translucentAddPass.setAlbedoMap(this.gbTargets[GbufferEnum.Albedo]);
    this.translucentAddPass.setSpecularMap(this.gbTargets[GbufferEnum.Specular]);
    this.translucentAddPass.setNormalMap(this.gbTargets[GbufferEnum.Normal]);
    this.translucentAddPass.draw();

    // bind default frame buffer
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.bindTexture(gl.TEXTURE_2D, null); 
  }

  renderSSR(camera: Camera, skyCubeMap: WebGLTexture,
    SSR_MaxStep : number, SSR_Opaque_Intensity : number, SSR_Trans_Intensity : number, SSR_Threshold : number)
  {
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.post32Buffers[PipelineEnum.SSR]);
    gl.viewport(0, 0, gl.drawingBufferWidth * this.SSRDownSampling, gl.drawingBufferHeight* this.SSRDownSampling);
    gl.disable(gl.DEPTH_TEST);
    //gl.enable(gl.BLEND);

    this.setClearColor(0.0, 0.0, 0.0, 0.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    this.SSRPass.setSSRInfo(vec4.fromValues(SSR_MaxStep, SSR_Opaque_Intensity, SSR_Trans_Intensity, SSR_Threshold));
    this.SSRPass.setFrame00(this.post32Targets[PipelineEnum.SaveFrame]); //previous frame
    this.SSRPass.setFrame01(this.tDTargets[0] /*this.post32Targets[PipelineEnum.SceneImage]*/); //current frame
    this.SSRPass.setdeltaTime(this.deltaTime );

    gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);
    this.SSRPass.setSkyCubeMap(skyCubeMap);

    //this.SSRPass.setDepthMap( this.tDTargets[0] /* this.gbTargets[GbufferEnum.Albedo] */);
    
    this.SSRPass.setViewProjMatrix(camera.viewProjectionMatrix);
    this.SSRPass.setInvViewProjMatrix(camera.invViewProjectionMatrix);

    this.SSRPass.setCameraWPos(camera.position);
    //this.SSRPass.setNormalMap(this.gbTargets[GbufferEnum.Normal]);
    this.SSRPass.setSpecularMap( this.tDTargets[1] /*this.gbTargets[GbufferEnum.Specular]*/ );

    this.SSRPass.draw();

    // bind default frame buffer
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.bindTexture(gl.TEXTURE_2D, null); 
  }

  renderSSRMip() {
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.post32Buffers[PipelineEnum.SSR_MIP]);
    gl.viewport(0, 0, gl.drawingBufferWidth * this.SSRDownSampling, gl.drawingBufferHeight * this.SSRDownSampling);
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

  renderParticle(camera: Camera, quad: Quad, particleSystem: Particle, feedbackShader: ShaderProgram, particleRenderShader : ShaderProgram,
    FireFly: boolean, Weather_Rain: boolean)
  {    
    //transformation Feedback
    feedbackShader.use();
    feedbackShader.setdeltaTime(this.deltaTime);
    feedbackShader.setTime(this.currentTime);    
    feedbackShader.setCameraWPos(camera.position);
    feedbackShader.setParticleInfo(vec4.fromValues(Weather_Rain ? 1.0 : 0.0, FireFly ? 1.0 : 0.0, 0.0, 0.0));

    var destinationIdx = (particleSystem.currentBufferSetIndex + 1) == 2 ? 0 : 1;   

    gl.bindVertexArray(particleSystem.getVAO(particleSystem.currentBufferSetIndex));
    
    gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, particleSystem.getTransformFeedbacks(destinationIdx));
    particleSystem.bindBufferBase(destinationIdx);    

    // Turn off rasterization - we are not drawing
    gl.enable(gl.RASTERIZER_DISCARD);

    // Update position and rotation using transform feedback
    gl.beginTransformFeedback(gl.POINTS);
    gl.drawArrays(gl.POINTS, 0, particleSystem.count);
    gl.endTransformFeedback();
    
    // Restore state
    gl.disable(gl.RASTERIZER_DISCARD);
    gl.useProgram(null);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, null);
    gl.bindVertexArray(null);
    
    particleSystem.switchBufferSet();
    
    //render       
    quad.setCopyVBOs(particleSystem.VBOs[particleSystem.currentBufferSetIndex][2], particleSystem.VBOs[particleSystem.currentBufferSetIndex][0]);

    gl.bindFramebuffer(gl.FRAMEBUFFER, this.post32Buffers[PipelineEnum.Particle]);
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    //gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE);
    this.setClearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    particleRenderShader.setViewMatrix(camera.viewMatrix);
    particleRenderShader.setViewProjMatrix(camera.viewProjectionMatrix);
    particleRenderShader.setInvViewProjMatrix(camera.invViewProjectionMatrix);
    particleRenderShader.setFrame00(this.tDTargets[0]);
    particleRenderShader.drawInstance(quad, particleSystem.count);

    // bind default frame buffer
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.blendFunc(gl.ONE, gl.ZERO);    
    gl.disable(gl.BLEND);   
  }


  renderLanternParticle(camera: Camera, mesh: Mesh, particleSystem: Particle, feedbackShader: ShaderProgram, particleRenderShader : ShaderProgram,
    Lantern: boolean)
    {
       //transformation Feedback
      feedbackShader.use();
      feedbackShader.setdeltaTime(this.deltaTime);
      feedbackShader.setTime(this.currentTime);    
      feedbackShader.setCameraWPos(camera.position);
      feedbackShader.setParticleInfo(vec4.fromValues(0.0, 0.0, Lantern ? 1.0 : 0.0, 0.0));

      var destinationIdx = (particleSystem.currentBufferSetIndex + 1) == 2 ? 0 : 1;   

      gl.bindVertexArray(particleSystem.getVAO(particleSystem.currentBufferSetIndex));
      
      gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, particleSystem.getTransformFeedbacks(destinationIdx));
      particleSystem.bindBufferBase(destinationIdx);    

      // Turn off rasterization - we are not drawing
      gl.enable(gl.RASTERIZER_DISCARD);

      // Update position and rotation using transform feedback
      gl.beginTransformFeedback(gl.POINTS);
      gl.drawArrays(gl.POINTS, 0, particleSystem.count);
      gl.endTransformFeedback();
      
      // Restore state
      gl.disable(gl.RASTERIZER_DISCARD);
      gl.useProgram(null);
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, null);
      gl.bindVertexArray(null);
      
      particleSystem.switchBufferSet();
      
      //render       
      mesh.setCopyVBOs(particleSystem.VBOs[particleSystem.currentBufferSetIndex][2], particleSystem.VBOs[particleSystem.currentBufferSetIndex][0]);

      gl.bindFramebuffer(gl.FRAMEBUFFER, this.post32Buffers[PipelineEnum.ParticleMesh]);
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      gl.enable(gl.DEPTH_TEST);
      //gl.enable(gl.BLEND);
      //gl.blendFunc(gl.ONE, gl.ZERO); 
      this.setClearColor(0.0, 0.0, 0.0, 0.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      this.setClearColor(0.0, 0.0, 0.0, 1.0);

      particleRenderShader.setViewMatrix(camera.viewMatrix);
      particleRenderShader.setViewProjMatrix(camera.viewProjectionMatrix);
      particleRenderShader.setInvViewProjMatrix(camera.invViewProjectionMatrix);
      particleRenderShader.setFrame00(this.tDTargets[0]);
      particleRenderShader.setFrame01(mesh.albedoMap.texture);
      particleRenderShader.drawInstance(mesh, particleSystem.count);

      // bind default frame buffer
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      //gl.blendFunc(gl.ONE, gl.ZERO); 
      gl.disable(gl.DEPTH_TEST);   
    }


    renderClouds(camera: Camera, quad: Quad, particleSystem: Particle, lightColor : vec4, lightDir : vec4, cloudTex : WebGLTexture, normalTex : WebGLTexture, noiseTex : WebGLTexture,
       feedbackShader: ShaderProgram, particleRenderShader : ShaderProgram, clouds : Boolean)
  {
    //transformation Feedback
    feedbackShader.use();
    feedbackShader.setdeltaTime(this.deltaTime);
      feedbackShader.setTime(this.currentTime);    
      feedbackShader.setCameraWPos(camera.position);
    feedbackShader.setParticleInfo(vec4.fromValues(0.0, 0.0, 0.0, clouds ? 1.0 : 0.0));

    var destinationIdx = (particleSystem.currentBufferSetIndex + 1) == 2 ? 0 : 1;   

    gl.bindVertexArray(particleSystem.getVAO(particleSystem.currentBufferSetIndex));
    
    gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, particleSystem.getTransformFeedbacks(destinationIdx));
    particleSystem.bindBufferBase(destinationIdx);    

    // Turn off rasterization - we are not drawing
    gl.enable(gl.RASTERIZER_DISCARD);

    // Update position and rotation using transform feedback
    gl.beginTransformFeedback(gl.POINTS);
    gl.drawArrays(gl.POINTS, 0, particleSystem.count);
    gl.endTransformFeedback();
    
    // Restore state
    gl.disable(gl.RASTERIZER_DISCARD);
    gl.useProgram(null);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, null);
    gl.bindVertexArray(null);
    
    particleSystem.switchBufferSet();
    
    //render       
    quad.setCopyVBOs(particleSystem.VBOs[particleSystem.currentBufferSetIndex][2], particleSystem.VBOs[particleSystem.currentBufferSetIndex][0]);

    
      gl.bindFramebuffer(gl.FRAMEBUFFER, this.post32Buffers[PipelineEnum.Clouds]);
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      //gl.enable(gl.DEPTH_TEST);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.ONE, gl.ONE);
      this.setClearColor(0.0, 0.0, 0.0, 0.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      if(clouds)
     {

      particleRenderShader.setViewMatrix(camera.viewMatrix);
      particleRenderShader.setProjMatrix(camera.cloudProjectionMatrix);

        particleRenderShader.setViewProjMatrix(camera.viewProjectionMatrix);
        particleRenderShader.setInvViewProjMatrix(camera.invViewProjectionMatrix);
        particleRenderShader.setFrame00(this.tDTargets[0]);
        particleRenderShader.setFrame01(cloudTex);
        particleRenderShader.setFrame02(normalTex);
        particleRenderShader.setFrame03(noiseTex);

        particleRenderShader.setLightDirection(lightDir);
        particleRenderShader.setCameraWPos(camera.position)

        particleRenderShader.setTime(this.currentTime * 0.6);

      particleRenderShader.drawInstance(quad, particleSystem.count);
    }

    

    // bind default frame buffer
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.blendFunc(gl.ONE, gl.ZERO);    
    gl.disable(gl.BLEND);   

    
  }

  renderforSavingCurrentFrame(camera: Camera) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.post32Buffers[PipelineEnum.SaveFrame]);
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.disable(gl.DEPTH_TEST);
    
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    this.savePass.setAlbedoMap(this.gbTargets[GbufferEnum.Albedo] );
    this.savePass.setSpecularMap(this.tDTargets[1]);

    this.savePass.setFrame00( this.tDTargets[0]);
    this.savePass.setFrame01(this.post32Targets[PipelineEnum.SSR]);
    this.savePass.setFrame02(this.post32Targets[PipelineEnum.SSR_MIP]);
    this.savePass.setFrame03(this.post32Targets[PipelineEnum.Particle]);
    this.savePass.setFrame04(this.post32Targets[PipelineEnum.ParticleMesh]);
    this.savePass.setDepthMap(this.post32Targets[PipelineEnum.Clouds]);
   
    this.savePass.draw();
    // bind default frame buffer
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);    
    gl.bindTexture(gl.TEXTURE_2D, null); 

  }

  renderforHighLightCurrentFrame(camera: Camera) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.post32Buffers[PipelineEnum.ExtractHighLight]);
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.disable(gl.DEPTH_TEST);
    
    gl.clear(gl.COLOR_BUFFER_BIT);

    this.highLightPass.setFrame00(this.post32Targets[PipelineEnum.SaveFrame]);
   
    this.highLightPass.draw();
    // bind default frame buffer
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);    
    gl.bindTexture(gl.TEXTURE_2D, null); 
  }

  renderforHorizontalBlur(camera: Camera, index : number) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.post32Buffers[PipelineEnum.HorizonBlur]);
    gl.viewport(0, 0, gl.drawingBufferWidth * this.BloomDownSampling, gl.drawingBufferHeight * this.BloomDownSampling);
    gl.disable(gl.DEPTH_TEST);
    
    gl.clear(gl.COLOR_BUFFER_BIT);

    this.HblurPass.setScreenSize(vec2.fromValues( gl.drawingBufferWidth * this.BloomDownSampling, gl.drawingBufferHeight * this.BloomDownSampling) )

    if(index == 0)
      this.HblurPass.setFrame00(this.post32Targets[PipelineEnum.ExtractHighLight]);
    else
      this.HblurPass.setFrame00(this.post32Targets[PipelineEnum.VerticalBlur]);

    this.HblurPass.draw();
    // bind default frame buffer
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);    
    gl.bindTexture(gl.TEXTURE_2D, null); 
  }

  renderforVerticalBlur(camera: Camera) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.post32Buffers[PipelineEnum.VerticalBlur]);
    gl.viewport(0, 0, gl.drawingBufferWidth * this.BloomDownSampling, gl.drawingBufferHeight * this.BloomDownSampling);
    gl.disable(gl.DEPTH_TEST);
    
    gl.clear(gl.COLOR_BUFFER_BIT);

    this.VblurPass.setScreenSize(vec2.fromValues( gl.drawingBufferWidth * this.BloomDownSampling, gl.drawingBufferHeight * this.BloomDownSampling) )
    this.VblurPass.setFrame00(this.post32Targets[PipelineEnum.HorizonBlur]);
   
    this.VblurPass.draw();
    // bind default frame buffer
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);    
    gl.bindTexture(gl.TEXTURE_2D, null); 
  }  

  renderTonemapping(camera: Camera, dispersal : number, distortion : number, colorTemp : number) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.post8Buffers[PipelineEnum.ToneMapping]);
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.disable(gl.DEPTH_TEST);
    //gl.enable(gl.BLEND);
    gl.clear(gl.COLOR_BUFFER_BIT);
    

    this.tonemapPass.setFrame00(this.post32Targets[PipelineEnum.SaveFrame]);
    this.tonemapPass.setFrame01(this.post32Targets[PipelineEnum.VerticalBlur]);
    this.tonemapPass.setScreenSize(vec2.fromValues( gl.drawingBufferWidth * this.BloomDownSampling, gl.drawingBufferHeight * this.BloomDownSampling));
    this.tonemapPass.setChromaticInfo( vec4.fromValues(dispersal, distortion, 0.0, colorTemp ) );
    this.tonemapPass.draw();
    // bind default frame buffer
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);    
    gl.bindTexture(gl.TEXTURE_2D, null); 
  }
  
  renderFrost(){
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    
    gl.disable(gl.DEPTH_TEST);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    this.frostPass.setFrame00(this.post8Targets[PipelineEnum.ToneMapping]);
    this.frostPass.setFrame01(this.frostNoiseTexture);
    this.frostPass.setScreenSize(vec2.fromValues( gl.drawingBufferWidth, gl.drawingBufferHeight));
    this.frostPass.draw();
    // bind default frame buffer
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);    
  }

  renderRainy(){
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    
    gl.disable(gl.DEPTH_TEST);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    this.rainyPass.setFrame00(this.post8Targets[PipelineEnum.ToneMapping]);
    this.rainyPass.setScreenSize(vec2.fromValues( gl.drawingBufferWidth, gl.drawingBufferHeight));
    this.rainyPass.draw();
    // bind default frame buffer
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);    
  }

  renderPresent(camera: Camera) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.disable(gl.DEPTH_TEST);
    //gl.enable(gl.BLEND);
    gl.clear(gl.COLOR_BUFFER_BIT);

    this.presentPass.setFrame00(this.post8Targets[PipelineEnum.ToneMapping]);
    //this.presentPass.setFrame00(  this.post32Targets[PipelineEnum.Clouds]);
    //this.presentPass.setFrame01( this.post32Targets[PipelineEnum.SceneImage] );
    this.presentPass.draw();

    // bind default frame buffer
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  }

};

export default OpenGLRenderer;
