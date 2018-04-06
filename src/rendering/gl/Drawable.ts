import {vec3, mat4} from 'gl-matrix';
import {gl} from '../../globals';
import Texture from '../../rendering/gl/Texture';

abstract class Drawable {
  count: number = 0;

  bufIdx: WebGLBuffer;
  bufPos: WebGLBuffer;
  bufNor: WebGLBuffer;
  bufCol: WebGLBuffer;
  bufUV: WebGLBuffer;

  idxBound: boolean = false;
  posBound: boolean = false;
  norBound: boolean = false;
  colBound: boolean = false;
  uvBound: boolean = false;

  modelMat: mat4 = mat4.create();

  albedoMap: Texture;
  specularMap: Texture;
  normalMap: Texture;

  abstract create() : void;

  destroy() {
    gl.deleteBuffer(this.bufIdx);
    gl.deleteBuffer(this.bufPos);
    gl.deleteBuffer(this.bufNor);
    gl.deleteBuffer(this.bufCol);
    gl.deleteBuffer(this.bufUV);
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

  bindIdx(): boolean {
    if (this.idxBound) {
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.bufIdx);
    }
    return this.idxBound;
  }

  bindPos(): boolean {
    if (this.posBound) {
      gl.bindBuffer(gl.ARRAY_BUFFER, this.bufPos);
    }
    return this.posBound;
  }

  bindNor(): boolean {
    if (this.norBound) {
      gl.bindBuffer(gl.ARRAY_BUFFER, this.bufNor);
    }
    return this.norBound;
  }

  bindCol() : boolean {
    if (this.colBound) {
      gl.bindBuffer(gl.ARRAY_BUFFER, this.bufCol);
    }
    return this.colBound;
  }

  bindUV() : boolean {
    if (this.uvBound) {
      gl.bindBuffer(gl.ARRAY_BUFFER, this.bufUV);
    }
    return this.uvBound;
  }

  elemCount(): number {
    return this.count;
  }

  drawMode(): GLenum {
    return gl.TRIANGLES;
  }

  translate( xyz: vec3)
  {
    let tempMat:mat4 = mat4.create();
    mat4.translate( tempMat, tempMat, xyz );
    mat4.multiply(this.modelMat, this.modelMat, tempMat );
  }

  scale( xyz: vec3)
  {
    let tempMat:mat4 = mat4.create();
    mat4.scale( tempMat, tempMat, xyz );
    mat4.multiply(this.modelMat, this.modelMat, tempMat );
  }
};

export default Drawable;
