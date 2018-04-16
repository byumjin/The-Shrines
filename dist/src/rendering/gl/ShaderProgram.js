import { mat4 } from 'gl-matrix';
import { gl } from '../../globals';
var activeProgram = null;
export class Shader {
    constructor(type, source) {
        this.shader = gl.createShader(type);
        gl.shaderSource(this.shader, source);
        gl.compileShader(this.shader);
        if (!gl.getShaderParameter(this.shader, gl.COMPILE_STATUS)) {
            throw gl.getShaderInfoLog(this.shader);
        }
    }
}
;
class ShaderProgram {
    constructor(shaders, isTransformFeedback = false, varyings = []) {
        this.prog = gl.createProgram();
        for (let shader of shaders) {
            gl.attachShader(this.prog, shader.shader);
        }
        if (isTransformFeedback) {
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
        this.unifTime = gl.getUniformLocation(this.prog, "u_Time");
        this.unifdeltaTime = gl.getUniformLocation(this.prog, "u_deltaTime");
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
        this.unifLightColor = gl.getUniformLocation(this.prog, "u_lightColor");
        this.unifLightDirection = gl.getUniformLocation(this.prog, "u_lightDirection");
        this.unifSSRInfo = gl.getUniformLocation(this.prog, "u_SSRInfo");
        this.unifLightViewProj = gl.getUniformLocation(this.prog, "u_LightViewProj");
        this.unifShadowMap = gl.getUniformLocation(this.prog, "u_ShadowMap");
        this.unifCenter = gl.getUniformLocation(this.prog, "u_Center");
        this.unifScreenSize = gl.getUniformLocation(this.prog, "u_screenSize");
        this.unifChromaticInfo = gl.getUniformLocation(this.prog, "u_chromaticInfo");
        this.unifParticleInfo = gl.getUniformLocation(this.prog, "u_particleInfo");
        this.unifTexUnits = new Map();
    }
    setupTexUnits(handleNames) {
        for (let handle of handleNames) {
            var location = gl.getUniformLocation(this.prog, handle);
            if (location !== -1) {
                this.unifTexUnits.set(handle, location);
            }
            else {
                console.log("Could not find handle for texture named: \'" + handle + "\'!");
            }
        }
    }
    // Bind the given Texture to the given texture unit
    bindTexToUnit(handleName, tex, unit) {
        this.use();
        var location = this.unifTexUnits.get(handleName);
        if (location !== undefined) {
            gl.activeTexture(gl.TEXTURE0 + unit);
            tex.bindTex();
            gl.uniform1i(location, unit);
            //console.log(unit + handleName );
        }
        else {
            console.log("Texture with handle name: \'" + handleName + "\' was not found");
        }
    }
    use() {
        if (activeProgram !== this.prog) {
            gl.useProgram(this.prog);
            activeProgram = this.prog;
        }
    }
    setAlbedoMap(texture) {
        this.use();
        if (this.unifAlbedo != -1) {
            gl.activeTexture(gl.TEXTURE3);
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.uniform1i(this.unifAlbedo, 3);
        }
    }
    setSpecularMap(texture) {
        this.use();
        if (this.unifSpecular != -1) {
            gl.activeTexture(gl.TEXTURE4);
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.uniform1i(this.unifSpecular, 4);
        }
    }
    setNormalMap(texture) {
        this.use();
        if (this.unifNormal != -1) {
            gl.activeTexture(gl.TEXTURE5);
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.uniform1i(this.unifNormal, 5);
        }
    }
    setFrame00(texture) {
        this.use();
        if (this.unifFrame0 != -1) {
            gl.activeTexture(gl.TEXTURE6);
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.uniform1i(this.unifFrame0, 6);
        }
    }
    setFrame01(texture) {
        this.use();
        if (this.unifFrame1 != -1) {
            gl.activeTexture(gl.TEXTURE7);
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.uniform1i(this.unifFrame1, 7);
        }
    }
    setFrame02(texture) {
        this.use();
        if (this.unifFrame2 != -1) {
            gl.activeTexture(gl.TEXTURE8);
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.uniform1i(this.unifFrame2, 8);
        }
    }
    setFrame03(texture) {
        this.use();
        if (this.unifFrame3 != -1) {
            gl.activeTexture(gl.TEXTURE9);
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.uniform1i(this.unifFrame3, 9);
        }
    }
    setFrame04(texture) {
        this.use();
        if (this.unifFrame4 != -1) {
            gl.activeTexture(gl.TEXTURE10);
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.uniform1i(this.unifFrame4, 10);
        }
    }
    setDepthMap(texture) {
        this.use();
        if (this.unifDepthMap != -1) {
            gl.uniform1i(this.unifDepthMap, 11);
            gl.activeTexture(gl.TEXTURE11);
            gl.bindTexture(gl.TEXTURE_2D, texture);
        }
    }
    setSkyCubeMap(texture) {
        this.use();
        if (this.unifSkyCubeMap != -1) {
            gl.uniform1i(this.unifSkyCubeMap, 12);
            gl.activeTexture(gl.TEXTURE12);
            gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);
        }
    }
    setShadowMap(texture) {
        this.use();
        if (this.unifShadowMap != -1) {
            gl.uniform1i(this.unifShadowMap, 13);
            gl.activeTexture(gl.TEXTURE13);
            gl.bindTexture(gl.TEXTURE_2D, texture);
        }
    }
    setScreenSize(screenSize) {
        this.use();
        if (this.unifScreenSize !== -1) {
            gl.uniform2fv(this.unifScreenSize, screenSize);
        }
    }
    setChromaticInfo(info) {
        this.use();
        if (this.unifChromaticInfo !== -1) {
            gl.uniform4fv(this.unifChromaticInfo, info);
        }
    }
    setParticleInfo(info) {
        this.use();
        if (this.unifParticleInfo !== -1) {
            gl.uniform4fv(this.unifParticleInfo, info);
        }
    }
    setModelMatrix(model) {
        this.use();
        if (this.unifModel !== -1) {
            gl.uniformMatrix4fv(this.unifModel, false, model);
        }
        if (this.unifModelInvTr !== -1) {
            let modelinvtr = mat4.create();
            mat4.transpose(modelinvtr, model);
            mat4.invert(modelinvtr, modelinvtr);
            gl.uniformMatrix4fv(this.unifModelInvTr, false, modelinvtr);
        }
    }
    setViewProjMatrix(vp) {
        this.use();
        if (this.unifViewProj !== -1) {
            gl.uniformMatrix4fv(this.unifViewProj, false, vp);
        }
    }
    setInvViewProjMatrix(vp) {
        this.use();
        if (this.unifInvViewProj !== -1) {
            gl.uniformMatrix4fv(this.unifInvViewProj, false, vp);
        }
    }
    setViewMatrix(vp) {
        this.use();
        if (this.unifView !== -1) {
            gl.uniformMatrix4fv(this.unifView, false, vp);
        }
    }
    setProjMatrix(vp) {
        this.use();
        if (this.unifProj !== -1) {
            gl.uniformMatrix4fv(this.unifProj, false, vp);
        }
    }
    setInvProjMatrix(vp) {
        this.use();
        if (this.unifInvProj !== -1) {
            gl.uniformMatrix4fv(this.unifInvProj, false, vp);
        }
    }
    setLightViewProjMatrix(vp) {
        this.use();
        if (this.unifLightViewProj !== -1) {
            gl.uniformMatrix4fv(this.unifLightViewProj, false, vp);
        }
    }
    setCameraWPos(pos) {
        this.use();
        if (this.unifCameraWPos !== -1) {
            gl.uniform3fv(this.unifCameraWPos, pos);
        }
    }
    setGeometryColor(color) {
        this.use();
        if (this.unifColor !== -1) {
            gl.uniform4fv(this.unifColor, color);
        }
    }
    setLightColor(color) {
        this.use();
        if (this.unifLightColor !== -1) {
            gl.uniform4fv(this.unifLightColor, color);
        }
    }
    setLightDirection(dir) {
        this.use();
        if (this.unifLightDirection !== -1) {
            gl.uniform4fv(this.unifLightDirection, dir);
        }
    }
    setSSRInfo(info) {
        this.use();
        if (this.unifSSRInfo !== -1) {
            gl.uniform4fv(this.unifSSRInfo, info);
        }
    }
    setCenter(center) {
        this.use();
        if (this.unifCenter !== -1) {
            gl.uniform4fv(this.unifCenter, center);
        }
    }
    setTime(t) {
        this.use();
        if (this.unifTime !== -1) {
            gl.uniform1f(this.unifTime, t);
        }
    }
    setdeltaTime(t) {
        this.use();
        if (this.unifdeltaTime !== -1) {
            gl.uniform1f(this.unifdeltaTime, t);
        }
    }
    draw(d) {
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
        if (this.attrPos != -1)
            gl.disableVertexAttribArray(this.attrPos);
        if (this.attrNor != -1)
            gl.disableVertexAttribArray(this.attrNor);
        if (this.attrCol != -1)
            gl.disableVertexAttribArray(this.attrCol);
        if (this.attrUV != -1)
            gl.disableVertexAttribArray(this.attrUV);
    }
    drawInstance(d, numInstances) {
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
        if (this.attrPos != -1) {
            gl.disableVertexAttribArray(this.attrPos);
        }
        if (this.attrNor != -1) {
            gl.disableVertexAttribArray(this.attrNor);
        }
        if (this.attrCol != -1) {
            gl.disableVertexAttribArray(this.attrCol);
            gl.vertexAttribDivisor(this.attrCol, 0);
        }
        if (this.attrUV != -1) {
            gl.disableVertexAttribArray(this.attrUV);
        }
        if (this.attrTrans != -1) {
            gl.disableVertexAttribArray(this.attrTrans);
            gl.vertexAttribDivisor(this.attrTrans, 0);
        }
    }
}
;
export default ShaderProgram;
//# sourceMappingURL=ShaderProgram.js.map