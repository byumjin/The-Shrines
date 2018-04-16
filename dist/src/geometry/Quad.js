import { vec4 } from 'gl-matrix';
import Drawable from '../rendering/gl/Drawable';
import { gl } from '../globals';
class Quad extends Drawable {
    constructor(center) {
        super(); // Call the constructor of the super class. This is required.
        this.center = vec4.fromValues(center[0], center[1], center[2], 1);
    }
    create() {
        this.indices = new Uint32Array([0, 1, 2,
            3, 0, 2]);
        this.normals = new Float32Array([0, 0, 1, 0,
            0, 0, 1, 0,
            0, 0, 1, 0,
            0, 0, 1, 0]);
        this.positions = new Float32Array([-1, -1, 0.0, 1,
            1, -1, 0.0, 1,
            1, 1, 0.0, 1,
            -1, 1, 0.0, 1]);
        this.uvs = new Float32Array([0.0, 1.0,
            1.0, 1.0,
            1.0, 0.0,
            0.0, 0.0]);
        /*
        this.colors = new Float32Array([
          1.0, 0.5, 0.5, 1.0,
          1.0, 0.5, 0.5, 1.0,
          1.0, 0.5, 0.5, 1.0,
          1.0, 0.5, 0.5, 1.0
          ]);
      
          this.trans = new Float32Array([
            0.0, 0.0, 0.0, 0.0,
            0.0, 0.0, 0.0, 0.0,
            0.0, 0.0, 0.0, 0.0,
            0.0, 0.0, 0.0, 0.0,
            ]);
            */
        this.generateIdx();
        this.generatePos();
        this.generateNor();
        this.generateUV();
        this.generateCol();
        this.generateTrans();
        this.count = this.indices.length;
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.bufIdx);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.bufNor);
        gl.bufferData(gl.ARRAY_BUFFER, this.normals, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.bufPos);
        gl.bufferData(gl.ARRAY_BUFFER, this.positions, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.bufUV);
        gl.bufferData(gl.ARRAY_BUFFER, this.uvs, gl.STATIC_DRAW);
    }
    setInstanceVBOs(colors, offsets) {
        this.colors = colors;
        this.trans = offsets;
        gl.bindBuffer(gl.ARRAY_BUFFER, this.bufCol);
        gl.bufferData(gl.ARRAY_BUFFER, this.colors, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.bufTrans);
        gl.bufferData(gl.ARRAY_BUFFER, this.trans, gl.STATIC_DRAW);
    }
    setCopyVBOs(bufferColors, bufferOffsets) {
        this.bufCol = bufferColors;
        this.bufTrans = bufferOffsets;
    }
}
;
export default Quad;
//# sourceMappingURL=Quad.js.map