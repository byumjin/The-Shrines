import { vec3, vec4, mat4 } from 'gl-matrix';
function mulMatVec3(a, b) {
    return vec3.fromValues(a[0] * b[0] + a[3] * b[1] + a[6] * b[2], a[1] * b[0] + a[4] * b[1] + a[7] * b[2], a[2] * b[0] + a[5] * b[1] + a[8] * b[2]);
}
function mulMatVec4(a, b) {
    return vec4.fromValues(a[0] * b[0] + a[4] * b[1] + a[8] * b[2] + a[12] * b[3], a[1] * b[0] + a[5] * b[1] + a[9] * b[2] + a[13] * b[3], a[2] * b[0] + a[6] * b[1] + a[10] * b[2] + a[14] * b[3], a[3] * b[0] + a[7] * b[1] + a[11] * b[2] + a[15] * b[3]);
}
class Camera {
    constructor() {
        this.projectionMatrix = mat4.create();
        this.invProjMatrix = mat4.create();
        this.cloudProjectionMatrix = mat4.create();
        this.viewProjectionMatrix = mat4.create();
        this.invViewProjectionMatrix = mat4.create();
        this.viewMatrix = mat4.create();
        this.fovy = 45 * 3.1415962 / 180.0;
        this.aspectRatio = 1;
        this.near = 0.1;
        this.far = 1000.0;
        this.position = vec3.create();
        this.direction = vec3.fromValues(0, 0, 1);
        this.target = vec3.create();
        this.up = vec3.fromValues(0, 1, 0);
        this.bForward = false;
        this.bBackward = false;
        this.bLeft = false;
        this.bRight = false;
        this.bLeftClick = false;
        this.bMiddleClick = false;
        this.bRightClick = false;
        this.theta = 0.0;
        this.phi = 0.0;
        this.rotMat = mat4.create();
        this.transMat = mat4.create();
    }
    initialize(position, target) {
        this.position = position;
        this.target = target;
        vec3.sub(this.direction, this.target, this.position);
        vec3.normalize(this.direction, this.direction);
        mat4.lookAt(this.viewMatrix, this.position, this.target, this.up);
    }
    setAspectRatio(aspectRatio) {
        this.aspectRatio = aspectRatio;
    }
    updateProjectionMatrix() {
        mat4.perspective(this.projectionMatrix, this.fovy, this.aspectRatio, this.near, this.far);
        mat4.invert(this.invProjMatrix, this.projectionMatrix);
        mat4.perspective(this.cloudProjectionMatrix, this.fovy, this.aspectRatio, this.near, this.far * this.far);
    }
    Translate(delta) {
        let transVec = vec3.create();
        if (this.bBackward) {
            transVec = vec3.fromValues(this.viewMatrix[8] * delta, this.viewMatrix[9] * delta, this.viewMatrix[10] * delta);
            vec3.add(this.position, this.position, transVec);
            vec3.add(this.target, this.target, transVec);
        }
        if (this.bForward) {
            transVec = vec3.fromValues(-this.viewMatrix[8] * delta, -this.viewMatrix[9] * delta, -this.viewMatrix[10] * delta);
            vec3.add(this.position, this.position, transVec);
            vec3.add(this.target, this.target, transVec);
        }
        if (this.bRight) {
            transVec = vec3.fromValues(this.viewMatrix[0] * delta, this.viewMatrix[1] * delta, this.viewMatrix[2] * delta);
            vec3.add(this.position, this.position, transVec);
            vec3.add(this.target, this.target, transVec);
        }
        if (this.bLeft) {
            transVec = vec3.fromValues(-this.viewMatrix[0] * delta, -this.viewMatrix[1] * delta, -this.viewMatrix[2] * delta);
            vec3.add(this.position, this.position, transVec);
            vec3.add(this.target, this.target, transVec);
        }
        this.transMat[12] = this.position[0];
        this.transMat[13] = this.position[1];
        this.transMat[14] = this.position[2];
    }
    updateOrbit(deltaX, deltaY) {
        this.theta += deltaX;
        this.phi += deltaY;
        var radTheta = 0.01745329251994329576923690768489 * this.theta;
        var radPhi = 0.01745329251994329576923690768489 * this.phi;
        var tempMat0 = mat4.create();
        var tempMat1 = mat4.create();
        mat4.mul(this.rotMat, mat4.rotate(tempMat0, mat4.create(), radTheta, vec3.fromValues(0.0, 1.0, 0.0)), mat4.rotate(tempMat1, mat4.create(), radPhi, vec3.fromValues(1.0, 0.0, 0.0)));
    }
    updatePosition(deltaX, deltaZ) {
        var deltaPos = mulMatVec4(this.rotMat, vec4.fromValues(deltaX, 0.0, deltaZ, 0.0));
        this.position[0] += deltaPos[0];
        this.position[1] += deltaPos[1];
        this.position[2] += deltaPos[2];
        this.transMat[12] = this.position[0];
        this.transMat[13] = this.position[1];
        this.transMat[14] = this.position[2];
    }
    update(deltaTime) {
        if (this.bForward) {
            this.updatePosition(0.0, -deltaTime * 100.0);
        }
        if (this.bBackward) {
            this.updatePosition(0.0, deltaTime * 100.0);
        }
        if (this.bLeft) {
            this.updatePosition(-deltaTime * 100.0, 0.0);
        }
        if (this.bRight) {
            this.updatePosition(deltaTime * 100.0, 0.0);
        }
        mat4.mul(this.viewMatrix, this.transMat, this.rotMat);
        mat4.invert(this.viewMatrix, this.viewMatrix);
        mat4.mul(this.viewProjectionMatrix, this.projectionMatrix, this.viewMatrix);
        mat4.invert(this.invViewProjectionMatrix, this.viewProjectionMatrix);
    }
}
;
export default Camera;
//# sourceMappingURL=Camera.js.map