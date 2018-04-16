import { vec3, mat4 } from 'gl-matrix';
export class Turtle {
    constructor(pos = vec3.fromValues(0, 0, 0), up = vec3.fromValues(0, 1, 0), forward = vec3.fromValues(0, 0, 1), left = vec3.fromValues(1, 0, 0), height = 0) {
        this.Height = 0;
        this.Depth = 0;
        this.pos = pos;
        this.Up = up;
        this.Forward = forward;
        this.Left = left;
        this.Height = height;
    }
    moveForward(distance) {
        vec3.scaleAndAdd(this.pos, this.pos, this.Forward, distance);
        this.Depth++;
    }
    applyUpRot(degrees) {
        let rad = degrees * Math.PI / 180;
        let rotation = mat4.create();
        mat4.rotate(rotation, rotation, rad, this.Up);
        vec3.transformMat4(this.Forward, this.Forward, rotation);
        vec3.transformMat4(this.Left, this.Left, rotation);
    }
    applyLeftRot(degrees) {
        let rad = degrees * Math.PI / 180;
        let rotation = mat4.create();
        mat4.rotate(rotation, rotation, rad, this.Left);
        vec3.transformMat4(this.Forward, this.Forward, rotation);
        vec3.transformMat4(this.Up, this.Up, rotation);
    }
    applyForwardRot(degrees) {
        let rad = degrees * Math.PI / 180;
        let rotation = mat4.create();
        mat4.rotate(rotation, rotation, rad, this.Forward);
        vec3.transformMat4(this.Left, this.Left, rotation);
        vec3.transformMat4(this.Up, this.Up, rotation);
    }
}
//# sourceMappingURL=Turtle.js.map