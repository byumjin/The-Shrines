import { mat4 } from 'gl-matrix';
import { gl } from '../../globals';
class Drawable {
    constructor() {
        this.type = 0;
        this.count = 0;
        this.idxBound = false;
        this.posBound = false;
        this.norBound = false;
        this.colBound = false;
        this.uvBound = false;
        this.transBound = false;
        this.modelMat = mat4.create();
    }
    destroy() {
        gl.deleteBuffer(this.bufIdx);
        gl.deleteBuffer(this.bufPos);
        gl.deleteBuffer(this.bufNor);
        gl.deleteBuffer(this.bufCol);
        gl.deleteBuffer(this.bufUV);
        if (this.transBound)
            gl.deleteBuffer(this.bufTrans);
    }
    generateIdx() {
        this.idxBound = true;
        this.bufIdx = gl.createBuffer();
    }
    generatePos() {
        this.posBound = true;
        this.bufPos = gl.createBuffer();
    }
    generateNor() {
        this.norBound = true;
        this.bufNor = gl.createBuffer();
    }
    generateCol() {
        this.colBound = true;
        this.bufCol = gl.createBuffer();
    }
    generateUV() {
        this.uvBound = true;
        this.bufUV = gl.createBuffer();
    }
    generateTrans() {
        this.transBound = true;
        this.bufTrans = gl.createBuffer();
    }
    bindIdx() {
        if (this.idxBound) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.bufIdx);
        }
        return this.idxBound;
    }
    bindPos() {
        if (this.posBound) {
            gl.bindBuffer(gl.ARRAY_BUFFER, this.bufPos);
        }
        return this.posBound;
    }
    bindNor() {
        if (this.norBound) {
            gl.bindBuffer(gl.ARRAY_BUFFER, this.bufNor);
        }
        return this.norBound;
    }
    bindCol() {
        if (this.colBound) {
            gl.bindBuffer(gl.ARRAY_BUFFER, this.bufCol);
        }
        return this.colBound;
    }
    bindUV() {
        if (this.uvBound) {
            gl.bindBuffer(gl.ARRAY_BUFFER, this.bufUV);
        }
        return this.uvBound;
    }
    bindTrans() {
        if (this.transBound) {
            gl.bindBuffer(gl.ARRAY_BUFFER, this.bufTrans);
        }
        return this.transBound;
    }
    elemCount() {
        return this.count;
    }
    drawMode() {
        return gl.TRIANGLES;
    }
    translate(xyz) {
        let tempMat = mat4.create();
        mat4.translate(tempMat, tempMat, xyz);
        mat4.multiply(this.modelMat, this.modelMat, tempMat);
    }
    scale(xyz) {
        let tempMat = mat4.create();
        mat4.scale(tempMat, tempMat, xyz);
        mat4.multiply(this.modelMat, this.modelMat, tempMat);
    }
}
;
export default Drawable;
//# sourceMappingURL=Drawable.js.map