import {vec3, vec4, mat3, mat4} from 'gl-matrix';
import {gl} from 'globals';

function mulMatVec3(a : mat3, b : vec3 ) : vec3
{
  return vec3.fromValues( a[0] * b[0] + a[3] * b[1] + a[6] * b[2],
                          a[1] * b[0] + a[4] * b[1] + a[7] * b[2],
                          a[2] * b[0] + a[5] * b[1] + a[8] * b[2]);
}

function mulMatVec4(a : mat4, b : vec4 ) : vec4
{
  return vec4.fromValues( a[0] * b[0] + a[4] * b[1] +  a[8] * b[2] + a[12] * b[3],
                          a[1] * b[0] + a[5] * b[1] +  a[9] * b[2] + a[13] * b[3],
                          a[2] * b[0] + a[6] * b[1] + a[10] * b[2] + a[14] * b[3],
                          a[3] * b[0] + a[7] * b[1] + a[11] * b[2] + a[15] * b[3] );
}

class Camera {
  projectionMatrix: mat4 = mat4.create();
  invProjMatrix: mat4 = mat4.create();

  cloudProjectionMatrix: mat4 = mat4.create();

  viewProjectionMatrix: mat4 = mat4.create();
  invViewProjectionMatrix: mat4 = mat4.create();
  viewMatrix: mat4 = mat4.create();
  fovy: number = 45 * 3.1415962 / 180.0;
  aspectRatio: number = 1;
  near: number = 0.1;
  far: number = 1000.0;
  position: vec3 = vec3.create();
  direction: vec3 = vec3.fromValues(0,0,1);
  target: vec3 = vec3.create();
  up: vec3 = vec3.fromValues(0, 1, 0);

  bForward: boolean = false;
  bBackward: boolean = false;
  bLeft: boolean = false;
  bRight: boolean = false;

  bLeftClick: boolean = false;
  bMiddleClick: boolean = false;
  bRightClick: boolean = false;

  theta: number = 0.0;
  phi: number = 0.0;

  rotMat: mat4 = mat4.create();
  transMat: mat4 = mat4.create();

  constructor() {    
  }

  initialize(position: vec3, target: vec3)
  {
    this.position = position;
    this.target = target;
    vec3.sub(this.direction, this.target, this.position);    
    vec3.normalize(this.direction, this.direction);

    mat4.lookAt(this.viewMatrix, this.position, this.target, this.up);
  }

  setAspectRatio(aspectRatio: number) {
    this.aspectRatio = aspectRatio;
  }

  updateProjectionMatrix() {
    mat4.perspective(this.projectionMatrix, this.fovy, this.aspectRatio, this.near, this.far);
    mat4.invert(this.invProjMatrix, this.projectionMatrix);

    mat4.perspective(this.cloudProjectionMatrix, this.fovy, this.aspectRatio, this.near, this.far * this.far );   
  }

  Translate(delta : number)
  {
    let transVec : vec3 = vec3.create();

    if(this.bBackward)
    {
      transVec = vec3.fromValues( this.viewMatrix[8] * delta, this.viewMatrix[9] * delta, this.viewMatrix[10] * delta);
      vec3.add(this.position, this.position, transVec);
      vec3.add(this.target, this.target, transVec);
    }

    if(this.bForward)
    {
      transVec = vec3.fromValues( -this.viewMatrix[8] * delta, -this.viewMatrix[9] * delta, -this.viewMatrix[10] * delta);
      vec3.add(this.position, this.position, transVec);
      vec3.add(this.target, this.target, transVec);
    }

    if(this.bRight)
    {
      transVec = vec3.fromValues( this.viewMatrix[0] * delta, this.viewMatrix[1] * delta, this.viewMatrix[2] * delta);
      vec3.add(this.position, this.position, transVec);
      vec3.add(this.target, this.target, transVec);
    }

    if(this.bLeft)
    {
      transVec = vec3.fromValues( -this.viewMatrix[0] * delta, -this.viewMatrix[1] * delta, -this.viewMatrix[2] * delta);
      vec3.add(this.position, this.position, transVec);
      vec3.add(this.target, this.target, transVec);
    }   
        
    this.transMat[12] = this.position[0];
    this.transMat[13] = this.position[1];
    this.transMat[14] = this.position[2];
  }

  updateOrbit(deltaX: number, deltaY: number)
  {
    this.theta += deltaX;
    this.phi += deltaY;

    var radTheta =  0.01745329251994329576923690768489 * this.theta;
    var radPhi = 0.01745329251994329576923690768489 * this.phi;
    
    var tempMat0 = mat4.create();
    var tempMat1 = mat4.create();
    
    mat4.mul(this.rotMat, mat4.rotate(tempMat0, mat4.create(), radTheta, vec3.fromValues(0.0, 1.0, 0.0)), mat4.rotate(tempMat1, mat4.create(), radPhi, vec3.fromValues(1.0, 0.0, 0.0)));
  }

  updatePosition(deltaX : number, deltaZ : number)
  {
    var deltaPos = mulMatVec4(this.rotMat, vec4.fromValues(deltaX, 0.0, deltaZ, 0.0));

    this.position[0] += deltaPos[0];
    this.position[1] += deltaPos[1];
    this.position[2] += deltaPos[2];

      //limit camera area
    if(this.position[1] < 10.0)
    {
      this.position[1] = 10.0;
    }
    else if(this.position[1] > 30.0)
    {
      this.position[1] = 30.0;
    }

    var length = Math.sqrt(this.position[0] * this.position[0] + this.position[2] * this.position[2]);

    var cap = 350.0;
    
    if(length > cap)
    {
      this.position[0] /= length;
      this.position[0] *= cap;
      this.position[2] /= length;
      this.position[2] *= cap;
    }

    this.transMat[12] = this.position[0];
    this.transMat[13] = this.position[1];
    this.transMat[14] = this.position[2];
  }

  update() {

    mat4.mul(this.viewMatrix, this.transMat, this.rotMat);
    mat4.invert(this.viewMatrix, this.viewMatrix);

    mat4.mul(this.viewProjectionMatrix, this.projectionMatrix, this.viewMatrix);
    mat4.invert(this.invViewProjectionMatrix, this.viewProjectionMatrix);
  }
};

export default Camera;
