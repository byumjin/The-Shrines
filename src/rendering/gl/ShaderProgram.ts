import {vec2, vec3, vec4, mat4} from 'gl-matrix';
import Drawable from './Drawable';
import Texture from './Texture';
import {gl} from '../../globals';

var activeProgram: WebGLProgram = null;

export class Shader {
  shader: WebGLShader;

  constructor(type: number, source: string) {
    this.shader = gl.createShader(type);
    gl.shaderSource(this.shader, source);
    gl.compileShader(this.shader);

    if (!gl.getShaderParameter(this.shader, gl.COMPILE_STATUS)) {
      throw gl.getShaderInfoLog(this.shader);
    }
  }
};

class ShaderProgram {
  prog: WebGLProgram;

  attrPos: number;
  attrNor: number;
  attrCol: number;
  attrUV: number;
  attrTrans: number;

  //Matrix
  unifModel: WebGLUniformLocation;
  unifModelInvTr: WebGLUniformLocation;
  unifViewProj: WebGLUniformLocation;
  unifInvViewProj: WebGLUniformLocation;
  unifView: WebGLUniformLocation;
  unifProj: WebGLUniformLocation;
  unifInvProj: WebGLUniformLocation;

  unifCameraWPos: WebGLUniformLocation;

  unifDepthMap: WebGLUniformLocation;

  unifSkyCubeMap: WebGLUniformLocation;

  unifAlbedo:  WebGLUniformLocation;
  unifSpecular:  WebGLUniformLocation;
  unifNormal:  WebGLUniformLocation;

  unifColor: WebGLUniformLocation;
  unifTime: WebGLUniformLocation;
  unifdeltaTime: WebGLUniformLocation;

  unifFrame0: WebGLUniformLocation;
	unifFrame1: WebGLUniformLocation;
  unifFrame2: WebGLUniformLocation;
  unifFrame3: WebGLUniformLocation;
  unifFrame4: WebGLUniformLocation;

  unifFrame5: WebGLUniformLocation;
  unifFrame6: WebGLUniformLocation;
  unifFrame7: WebGLUniformLocation;
  unifFrame8: WebGLUniformLocation;
  unifFrame9: WebGLUniformLocation;

  
  unifLightColor: WebGLUniformLocation;
  unifLightDirection: WebGLUniformLocation;

  unifSSRInfo: WebGLUniformLocation;

  unifLightViewProj: WebGLUniformLocation;
  unifShadowMap: WebGLUniformLocation;
  unifCenter: WebGLUniformLocation;

  unifScreenSize: WebGLUniformLocation;
  unifBlurScale: WebGLUniformLocation;
  unifChromaticInfo: WebGLUniformLocation;

  unifParticleInfo: WebGLUniformLocation;

  unifLod: WebGLUniformLocation;

  unifTexUnits: Map<string, WebGLUniformLocation>;
  
  

  constructor(shaders: Array<Shader>, isTransformFeedback: boolean = false, varyings: string[] = []) {
    this.prog = gl.createProgram();

    for (let shader of shaders) {
      gl.attachShader(this.prog, shader.shader);
    }

    if(isTransformFeedback){
      gl.transformFeedbackVaryings(this.prog, varyings, gl.SEPARATE_ATTRIBS);
    }

    gl.linkProgram(this.prog);
    if (!gl.getProgramParameter(this.prog, gl.LINK_STATUS)) {
      throw gl.getProgramInfoLog(this.prog);
    }

    this.attrPos = gl.getAttribLocation(this.prog, "vs_Pos");
    this.attrNor = gl.getAttribLocation(this.prog, "vs_Nor");
    this.attrCol = gl.getAttribLocation(this.prog, "vs_Col");
    this.attrUV = gl.getAttribLocation(this.prog, "vs_UV");
    this.attrTrans = gl.getAttribLocation(this.prog, "vs_Translate");

    this.unifModel = gl.getUniformLocation(this.prog, "u_Model");
    this.unifModelInvTr = gl.getUniformLocation(this.prog, "u_ModelInvTr");
    this.unifViewProj = gl.getUniformLocation(this.prog, "u_ViewProj");
    this.unifInvViewProj = gl.getUniformLocation(this.prog, "u_InvViewProj");

    this.unifView = gl.getUniformLocation(this.prog, "u_View");
    this.unifProj = gl.getUniformLocation(this.prog, "u_Proj");
    this.unifInvProj = gl.getUniformLocation(this.prog, "u_InvProj");

    this.unifCameraWPos = gl.getUniformLocation(this.prog, "u_CameraWPos");

    this.unifColor = gl.getUniformLocation(this.prog, "u_Color");
    this.unifTime = gl.getUniformLocation(this.prog, "u_Time")
    this.unifdeltaTime = gl.getUniformLocation(this.prog, "u_deltaTime")

    this.unifDepthMap = gl.getUniformLocation(this.prog, "u_DepthMap");
    this.unifSkyCubeMap = gl.getUniformLocation(this.prog, "u_SkyCubeMap");

    this.unifAlbedo = gl.getUniformLocation(this.prog, "u_Gbuffer_Albedo");
    this.unifSpecular = gl.getUniformLocation(this.prog, "u_Gbuffer_Specular");
    this.unifNormal = gl.getUniformLocation(this.prog, "u_Gbuffer_Normal");

    this.unifFrame0 = gl.getUniformLocation(this.prog, "u_frame0");
		this.unifFrame1 = gl.getUniformLocation(this.prog, "u_frame1");
    this.unifFrame2 = gl.getUniformLocation(this.prog, "u_frame2");
    this.unifFrame3 = gl.getUniformLocation(this.prog, "u_frame3");
    this.unifFrame4 = gl.getUniformLocation(this.prog, "u_frame4");

    this.unifFrame5 = gl.getUniformLocation(this.prog, "u_frame5");
    this.unifFrame6 = gl.getUniformLocation(this.prog, "u_frame6");
    this.unifFrame7 = gl.getUniformLocation(this.prog, "u_frame7");
    this.unifFrame8 = gl.getUniformLocation(this.prog, "u_frame8");
    this.unifFrame9 = gl.getUniformLocation(this.prog, "u_frame9");


  
    
    this.unifLightColor = gl.getUniformLocation(this.prog, "u_lightColor");
    this.unifLightDirection = gl.getUniformLocation(this.prog, "u_lightDirection");
    
    this.unifSSRInfo = gl.getUniformLocation(this.prog, "u_SSRInfo");
    
    this.unifLightViewProj = gl.getUniformLocation(this.prog, "u_LightViewProj");
    this.unifShadowMap = gl.getUniformLocation(this.prog, "u_ShadowMap");
    
    this.unifCenter = gl.getUniformLocation(this.prog, "u_Center");

    this.unifScreenSize = gl.getUniformLocation(this.prog, "u_screenSize");
    this.unifBlurScale = gl.getUniformLocation(this.prog, "u_BlurScale");
    this.unifChromaticInfo = gl.getUniformLocation(this.prog, "u_chromaticInfo");

    this.unifParticleInfo = gl.getUniformLocation(this.prog, "u_particleInfo");
    this.unifLod = gl.getUniformLocation(this.prog, "u_Lod");

    this.unifTexUnits = new Map<string, WebGLUniformLocation>();
  }

  setupTexUnits(handleNames: Array<string>) {
    for (let handle of handleNames) {
      var location = gl.getUniformLocation(this.prog, handle);

      if (location !== -1) {
        this.unifTexUnits.set(handle, location);
      } else {
        console.log("Could not find handle for texture named: \'" + handle + "\'!");
      }
    }
  }

  // Bind the given Texture to the given texture unit
  bindTexToUnit(handleName: string, tex: Texture, unit: number) {
    this.use();
    var location = this.unifTexUnits.get(handleName);
    if (location !== undefined) {
      gl.activeTexture(gl.TEXTURE0 + unit);
      tex.bindTex();
      gl.uniform1i(location, unit);

      //console.log(unit + handleName );

    } else {
      console.log("Texture with handle name: \'" + handleName + "\' was not found");
    }
  }

  use() {
    if (activeProgram !== this.prog) {
      gl.useProgram(this.prog);
      activeProgram = this.prog;
    }
  }



  setAlbedoMap(texture: WebGLTexture)
  {
    this.use();
    if (this.unifAlbedo != -1) {
  
      
  
      gl.activeTexture(gl.TEXTURE3);
      gl.bindTexture(gl.TEXTURE_2D, texture); 
      gl.uniform1i(this.unifAlbedo, 3);   
    }
  }

  setSpecularMap(texture: WebGLTexture)
  {
    this.use();
    if (this.unifSpecular != -1) {      
  
      gl.activeTexture(gl.TEXTURE4);
      gl.bindTexture(gl.TEXTURE_2D, texture);  
      gl.uniform1i(this.unifSpecular, 4);  
    }
  }

  setNormalMap(texture: WebGLTexture)
  {
    this.use();
    if (this.unifNormal != -1) {
  
      
  
      gl.activeTexture(gl.TEXTURE5);
      gl.bindTexture(gl.TEXTURE_2D, texture); 
      gl.uniform1i(this.unifNormal, 5);   
    }
  }

  setFrame00(texture: WebGLTexture)
  {
    this.use();
    if (this.unifFrame0 != -1) {
  
      gl.activeTexture(gl.TEXTURE6);
      gl.bindTexture(gl.TEXTURE_2D, texture);  
      gl.uniform1i(this.unifFrame0, 6);  
    }
  }

  setFrame01(texture: WebGLTexture)
  {
    this.use();
    if (this.unifFrame1 != -1) {
  
      gl.activeTexture(gl.TEXTURE7);
      gl.bindTexture(gl.TEXTURE_2D, texture); 
      gl.uniform1i(this.unifFrame1, 7);        
     
    }
  }

  setFrame02(texture: WebGLTexture)
  {
    this.use();
    if (this.unifFrame2 != -1) {
  
      gl.activeTexture(gl.TEXTURE8);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.uniform1i(this.unifFrame2, 8);   
    }
  }

  setFrame03(texture: WebGLTexture)
  {
    this.use();
    if (this.unifFrame3 != -1) {
  
      gl.activeTexture(gl.TEXTURE9);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.uniform1i(this.unifFrame3, 9);   
    }
  }

  setFrame04(texture: WebGLTexture)
  {
    this.use();
    if (this.unifFrame4 != -1) {
  
      gl.activeTexture(gl.TEXTURE10);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.uniform1i(this.unifFrame4, 10);   
    }
  }

  setDepthMap(texture: WebGLTexture)
  {
    this.use();
    if (this.unifDepthMap != -1) {
  
      gl.uniform1i(this.unifDepthMap, 11);  
  
      gl.activeTexture(gl.TEXTURE11);
      gl.bindTexture(gl.TEXTURE_2D, texture);  
    }
  }

  setSkyCubeMap(texture: WebGLTexture)
  {
    this.use();
    if (this.unifSkyCubeMap != -1) {
  
      gl.uniform1i(this.unifSkyCubeMap, 12);  
  
      gl.activeTexture(gl.TEXTURE12);
      gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);  
    }
  }

  setShadowMap(texture: WebGLTexture){
    this.use();
    if (this.unifShadowMap != -1) {
  
      gl.uniform1i(this.unifShadowMap, 13);  
  
      gl.activeTexture(gl.TEXTURE13);
      gl.bindTexture(gl.TEXTURE_2D, texture);  
    }
  }

  setFrame05(texture: WebGLTexture)
  {
    this.use();
    if (this.unifFrame5 != -1) {
  
      gl.activeTexture(gl.TEXTURE14);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.uniform1i(this.unifFrame5, 14);   
    }
  }

  setFrame06(texture: WebGLTexture)
  {
    this.use();
    if (this.unifFrame6 != -1) {
  
      gl.activeTexture(gl.TEXTURE15);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.uniform1i(this.unifFrame6, 15);   
    }
  }

  setFrame07(texture: WebGLTexture)
  {
    this.use();
    if (this.unifFrame7 != -1) {
  
      gl.activeTexture(gl.TEXTURE16);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.uniform1i(this.unifFrame7, 16);   
    }
  }

  setFrame08(texture: WebGLTexture)
  {
    this.use();
    if (this.unifFrame8 != -1) {
  
      gl.activeTexture(gl.TEXTURE17);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.uniform1i(this.unifFrame8, 17);   
    }
  }

  setFrame09(texture: WebGLTexture)
  {
    this.use();
    if (this.unifFrame9 != -1) {
  
      gl.activeTexture(gl.TEXTURE18);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.uniform1i(this.unifFrame9, 18);   
    }
  }

  setScreenSize(screenSize: vec2){
    this.use();
    if (this.unifScreenSize !== -1) {
      gl.uniform2fv(this.unifScreenSize, screenSize);
    }
  }

  setBlurScale(BlurScale: vec2){
    this.use();
    if (this.unifBlurScale !== -1) {
      gl.uniform2fv(this.unifBlurScale, BlurScale);
    }
  }


  

  setChromaticInfo(info: vec4){
    this.use();
    if (this.unifChromaticInfo !== -1) {
      gl.uniform4fv(this.unifChromaticInfo, info);
    }
  }

  setParticleInfo(info: vec4){
    this.use();
    if (this.unifParticleInfo !== -1) {
      gl.uniform4fv(this.unifParticleInfo, info);
    }
  }

  setmipLod(lod: number){
    this.use();
    if (this.unifLod !== -1) {
      gl.uniform1f(this.unifLod, lod);
    }
  }

  setModelMatrix(model: mat4) {
    this.use();
    if (this.unifModel !== -1) {
      gl.uniformMatrix4fv(this.unifModel, false, model);
    }

    if (this.unifModelInvTr !== -1) {
      let modelinvtr: mat4 = mat4.create();
      mat4.transpose(modelinvtr, model);
      mat4.invert(modelinvtr, modelinvtr);
      gl.uniformMatrix4fv(this.unifModelInvTr, false, modelinvtr);
    }
  }

  setViewProjMatrix(vp: mat4) {
    this.use();
    if (this.unifViewProj !== -1) {
      gl.uniformMatrix4fv(this.unifViewProj, false, vp);
    }
  }

  setInvViewProjMatrix(vp: mat4) {
    this.use();
    if (this.unifInvViewProj !== -1) {
      gl.uniformMatrix4fv(this.unifInvViewProj, false, vp);
    }
  }

  setViewMatrix(vp: mat4) {
    this.use();
    if (this.unifView !== -1) {
      gl.uniformMatrix4fv(this.unifView, false, vp);
    }
  }

  setProjMatrix(vp: mat4) {
    this.use();
    if (this.unifProj !== -1) {
      gl.uniformMatrix4fv(this.unifProj, false, vp);
    }
  }

  setInvProjMatrix(vp: mat4) {
    this.use();
    if (this.unifInvProj !== -1) {
      gl.uniformMatrix4fv(this.unifInvProj, false, vp);
    }
  }

  setLightViewProjMatrix(vp: mat4){
    this.use();
    if (this.unifLightViewProj !== -1) {
      gl.uniformMatrix4fv(this.unifLightViewProj, false, vp);
    }
  }

  setCameraWPos(pos: vec3)
  {
    this.use();
    if (this.unifCameraWPos !== -1) {
      gl.uniform3fv(this.unifCameraWPos, pos);
    }
  }

  setGeometryColor(color: vec4) {
    this.use();
    if (this.unifColor !== -1) {
      gl.uniform4fv(this.unifColor, color);
    }
  }

  setLightColor(color: vec4) {
    this.use();
    if (this.unifLightColor !== -1) {
      gl.uniform4fv(this.unifLightColor, color);
    }
  }

  setLightDirection(dir: vec4) {
    this.use();
    if (this.unifLightDirection !== -1) {
      gl.uniform4fv(this.unifLightDirection, dir);
    }
  }

  setSSRInfo(info: vec4) {
    this.use();
    if (this.unifSSRInfo !== -1) {
      gl.uniform4fv(this.unifSSRInfo, info);
    }
  }

  setCenter(center: vec4)
  {
    this.use();
    if (this.unifCenter !== -1) {
      gl.uniform4fv(this.unifCenter, center);
    }
  }

  setTime(t: number) {
    this.use();
    if (this.unifTime !== -1) {
      gl.uniform1f(this.unifTime, t);
    }
  }

  setdeltaTime(t: number) {
    this.use();
    if (this.unifdeltaTime !== -1) {
      gl.uniform1f(this.unifdeltaTime, t);
    }
  }

  draw(d: Drawable) 
  {
    this.use();

    if (this.attrPos != -1 && d.bindPos()) {
      gl.enableVertexAttribArray(this.attrPos);
      gl.vertexAttribPointer(this.attrPos, 4, gl.FLOAT, false, 0, 0);
    }

    if (this.attrNor != -1 && d.bindNor()) {
      gl.enableVertexAttribArray(this.attrNor);
      gl.vertexAttribPointer(this.attrNor, 4, gl.FLOAT, false, 0, 0);
    }

    if (this.attrCol != -1 && d.bindCol()) {
      gl.enableVertexAttribArray(this.attrCol);
      gl.vertexAttribPointer(this.attrCol, 4, gl.FLOAT, false, 0, 0);
    }

    if (this.attrUV != -1 && d.bindUV()) {
      gl.enableVertexAttribArray(this.attrUV);
      gl.vertexAttribPointer(this.attrUV, 2, gl.FLOAT, false, 0, 0);
    }

    d.bindIdx();
    gl.drawElements(d.drawMode(), d.elemCount(), gl.UNSIGNED_INT, 0);

    if (this.attrPos != -1) gl.disableVertexAttribArray(this.attrPos);
    if (this.attrNor != -1) gl.disableVertexAttribArray(this.attrNor);
    if (this.attrCol != -1) gl.disableVertexAttribArray(this.attrCol);
    if (this.attrUV != -1) gl.disableVertexAttribArray(this.attrUV);
  }

  drawInstance(d: Drawable, numInstances: number) 
  {
    this.use();

    if (this.attrPos != -1 && d.bindPos()) {
      gl.enableVertexAttribArray(this.attrPos);
      gl.vertexAttribPointer(this.attrPos, 4, gl.FLOAT, false, 0, 0);
      gl.vertexAttribDivisor(this.attrPos, 0);
    }

    if (this.attrNor != -1 && d.bindNor()) {
      gl.enableVertexAttribArray(this.attrNor);
      gl.vertexAttribPointer(this.attrNor, 4, gl.FLOAT, false, 0, 0);
      gl.vertexAttribDivisor(this.attrNor, 0);
    }

    if (this.attrCol != -1 && d.bindCol()) {
      gl.enableVertexAttribArray(this.attrCol);
      gl.vertexAttribPointer(this.attrCol, 4, gl.FLOAT, false, 0, 0);
      gl.vertexAttribDivisor(this.attrCol, 1);
    }

    if (this.attrUV != -1 && d.bindUV()) {
      gl.enableVertexAttribArray(this.attrUV);
      gl.vertexAttribPointer(this.attrUV, 2, gl.FLOAT, false, 0, 0);
      gl.vertexAttribDivisor(this.attrUV, 0);
    }

    if (this.attrTrans != -1 && d.bindTrans()) {
      gl.enableVertexAttribArray(this.attrTrans);
      gl.vertexAttribPointer(this.attrTrans, 4, gl.FLOAT, false, 0, 0);
      gl.vertexAttribDivisor(this.attrTrans, 1);   
    }

    d.bindIdx();
    gl.drawElementsInstanced(d.drawMode(), d.elemCount(), gl.UNSIGNED_INT, 0, numInstances);

    if (this.attrPos != -1)
    {
     gl.disableVertexAttribArray(this.attrPos);
    }
    if (this.attrNor != -1)
    {
     gl.disableVertexAttribArray(this.attrNor);
    }
    if (this.attrCol != -1)
    {
     gl.disableVertexAttribArray(this.attrCol);
     gl.vertexAttribDivisor(this.attrCol, 0);
    }
    if (this.attrUV != -1)
    {
     gl.disableVertexAttribArray(this.attrUV);
    }
    if (this.attrTrans != -1)
    {
     gl.disableVertexAttribArray(this.attrTrans);
     gl.vertexAttribDivisor(this.attrTrans, 0);      
    }

    
  }

};

export default ShaderProgram;
