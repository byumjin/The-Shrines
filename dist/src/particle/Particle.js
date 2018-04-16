import { gl } from '../globals';
import { vec2 } from 'gl-matrix';
const POSITION_LOCATION = 0;
const VELOCITY_LOCATION = 1;
const COLOR_LOCATION = 2;
const ATTRACT_LOCATION = 3;
const NUM_OUTPUT = 4;
class Particle {
    constructor(numParticles) {
        this.count = numParticles;
        this.position = new Float32Array(this.count * 4);
        this.velocity = new Float32Array(this.count * 4);
        this.color = new Float32Array(this.count * 4);
        this.attract = new Float32Array(this.count * 4);
        //ping-pong
        this.VAOs = [gl.createVertexArray(), gl.createVertexArray()];
        this.transformFeedback = [gl.createTransformFeedback(), gl.createTransformFeedback()];
        this.currentBufferSetIndex = 0;
    }
    switchBufferSet() {
        this.currentBufferSetIndex = (this.currentBufferSetIndex + 1) % 2;
    }
    getVAO(index) {
        return this.VAOs[index];
    }
    getTransformFeedbacks(index) {
        return this.transformFeedback[index];
    }
    getVBO(index) {
        return this.VBOs[index];
    }
    bindBufferBase(index) {
        gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, POSITION_LOCATION, this.VBOs[index][POSITION_LOCATION]);
        gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, VELOCITY_LOCATION, this.VBOs[index][VELOCITY_LOCATION]);
        gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, COLOR_LOCATION, this.VBOs[index][COLOR_LOCATION]);
        gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, ATTRACT_LOCATION, this.VBOs[index][ATTRACT_LOCATION]);
    }
    setAttribDivisor() {
        gl.vertexAttribDivisor(POSITION_LOCATION, 0);
        gl.vertexAttribDivisor(VELOCITY_LOCATION, 0);
        gl.vertexAttribDivisor(COLOR_LOCATION, 0);
        gl.vertexAttribDivisor(ATTRACT_LOCATION, 0);
    }
    squareToDiskConcentric(sample) {
        var M_PI = 3.1415926535897932384626433832795;
        //TODO
        let phi;
        let radius;
        var a = 2.0 * sample[0] - 1.0; // (a,b) is now on [-1,1]ˆ2
        var b = 2.0 * sample[1] - 1.0;
        if (a > -b) // region 1 or 2
         {
            if (a > b) // region 1, also |a| > |b|
             {
                radius = a;
                phi = (M_PI / 4) * (b / a);
            }
            else // region 2, also |b| > |a|
             {
                radius = b;
                phi = (M_PI / 4) * (2 - (a / b));
            }
        }
        else // region 3 or 4
         {
            if (a < b) // region 3, also |a| >= |b|, a != 0
             {
                radius = -a;
                phi = (M_PI / 4) * (4 + (b / a));
            }
            else // region 4, |b| >= |a|, but a==0 and b==0 could occur.
             {
                radius = -b;
                if (b != 0)
                    phi = (M_PI / 4) * (6 - (a / b));
                else
                    phi = 0;
            }
        }
        return vec2.fromValues(radius * Math.cos(phi), radius * Math.sin(phi));
    }
    initialize(width, xOffset, height, yOffset, depth, zOffset, Rrange, Rbias, Grange, Gbias, Brange, Bbias) {
        for (let p = 0; p < this.count; ++p) {
            var posXZ = this.squareToDiskConcentric(vec2.fromValues(Math.random(), Math.random()));
            this.position[p * 4] = posXZ[0] * width + xOffset;
            this.position[p * 4 + 1] = (Math.random()) * height + yOffset;
            this.position[p * 4 + 2] = posXZ[1] * depth + zOffset;
            this.velocity[p * 4] = 0.0;
            this.velocity[p * 4 + 1] = 0.0;
            this.velocity[p * 4 + 2] = 0.0;
            this.color[p * 4] = Math.random() * Rrange + Rbias;
            this.color[p * 4 + 1] = Math.random() * Grange + Gbias;
            this.color[p * 4 + 2] = Math.random() * Brange + Bbias; // Life
            this.color[p * 4 + 3] = 0.0; //Index
            posXZ = this.squareToDiskConcentric(vec2.fromValues(Math.random(), Math.random()));
            this.attract[p * 4] = posXZ[0] * width + xOffset;
            this.attract[p * 4 + 1] = (Math.random()) * height + yOffset;
            this.attract[p * 4 + 2] = posXZ[1] * depth + zOffset;
            //save original Gap
            this.position[p * 4 + 3] = this.attract[p * 4];
            this.velocity[p * 4 + 3] = this.attract[p * 4 + 1];
            this.attract[p * 4 + 3] = this.attract[p * 4 + 2];
        }
        this.VBOs = new Array(this.VAOs.length);
        for (let i = 0; i < this.VAOs.length; ++i) {
            this.VBOs[i] = new Array(NUM_OUTPUT);
            gl.bindVertexArray(this.VAOs[i]);
            this.VBOs[i][POSITION_LOCATION] = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, this.VBOs[i][POSITION_LOCATION]);
            gl.bufferData(gl.ARRAY_BUFFER, this.position, gl.DYNAMIC_COPY);
            gl.vertexAttribPointer(POSITION_LOCATION, 4, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(POSITION_LOCATION);
            this.VBOs[i][VELOCITY_LOCATION] = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, this.VBOs[i][VELOCITY_LOCATION]);
            gl.bufferData(gl.ARRAY_BUFFER, this.velocity, gl.DYNAMIC_COPY);
            gl.vertexAttribPointer(VELOCITY_LOCATION, 4, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(VELOCITY_LOCATION);
            this.VBOs[i][COLOR_LOCATION] = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, this.VBOs[i][COLOR_LOCATION]);
            gl.bufferData(gl.ARRAY_BUFFER, this.color, gl.DYNAMIC_COPY);
            gl.vertexAttribPointer(COLOR_LOCATION, 4, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(COLOR_LOCATION);
            this.VBOs[i][ATTRACT_LOCATION] = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, this.VBOs[i][ATTRACT_LOCATION]);
            gl.bufferData(gl.ARRAY_BUFFER, this.attract, gl.DYNAMIC_COPY);
            gl.vertexAttribPointer(ATTRACT_LOCATION, 4, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(ATTRACT_LOCATION);
            gl.bindBuffer(gl.ARRAY_BUFFER, null);
            gl.bindVertexArray(null);
        }
    }
    setBuffers(a, b) {
        gl.bindBuffer(gl.ARRAY_BUFFER, this.VBOs[a][POSITION_LOCATION]);
        gl.vertexAttribPointer(POSITION_LOCATION, 4, gl.FLOAT, false, 0, 0);
        gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, POSITION_LOCATION, this.VBOs[b][POSITION_LOCATION]);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.VBOs[a][VELOCITY_LOCATION]);
        gl.vertexAttribPointer(VELOCITY_LOCATION, 4, gl.FLOAT, false, 0, 0);
        gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, VELOCITY_LOCATION, this.VBOs[b][VELOCITY_LOCATION]);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.VBOs[a][COLOR_LOCATION]);
        gl.vertexAttribPointer(COLOR_LOCATION, 4, gl.FLOAT, false, 0, 0);
        gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, COLOR_LOCATION, this.VBOs[b][COLOR_LOCATION]);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.VBOs[a][ATTRACT_LOCATION]);
        gl.vertexAttribPointer(ATTRACT_LOCATION, 4, gl.FLOAT, false, 0, 0);
        gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, ATTRACT_LOCATION, this.VBOs[b][ATTRACT_LOCATION]);
    }
}
;
export default Particle;
//# sourceMappingURL=Particle.js.map