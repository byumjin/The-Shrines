import {gl} from '../globals';

const POSITION_LOCATION = 0;
const VELOCITY_LOCATION = 1;
const COLOR_LOCATION = 2;
const ATTRACT_LOCATION = 3;

const NUM_OUTPUT = 4;

class Particle
{
  count : number;
  position : Float32Array;
  velocity : Float32Array;
  
  color : Float32Array;

  attract : Float32Array;
  
  currentBufferSetIndex : number;

  VAOs: WebGLVertexArrayObject[];
  transformFeedback: WebGLTransformFeedback[];
  VBOs: WebGLBuffer[][];

  constructor( numParticles: number)
  {    
    this.count = numParticles;

    this.position  = new Float32Array(this.count * 4);
    this.velocity  = new Float32Array(this.count * 4);    
    this.color     = new Float32Array(this.count * 4);

    this.attract     = new Float32Array(this.count * 4);

    //ping-pong
    this.VAOs = [gl.createVertexArray(), gl.createVertexArray()];         
    this.transformFeedback = [gl.createTransformFeedback(), gl.createTransformFeedback()];

    this.currentBufferSetIndex = 0;
  }

  switchBufferSet()
  {
    this.currentBufferSetIndex = (this.currentBufferSetIndex + 1) % 2;
  }

  getVAO(index : number): WebGLVertexArrayObject
  {
    return this.VAOs[index];
  }

  getTransformFeedbacks(index : number): WebGLTransformFeedback
  {
      return this.transformFeedback[index];
  }

  getVBO(index : number): WebGLBuffer[]
  {
      return this.VBOs[index];
  }

  bindBufferBase(index : number)
  {
    gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, this.VBOs[index][POSITION_LOCATION]);
    gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 1, this.VBOs[index][VELOCITY_LOCATION]);
    gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 2, this.VBOs[index][COLOR_LOCATION]);
    gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 3, this.VBOs[index][ATTRACT_LOCATION]);
  }

  setAttribDivisor()
  {
    gl.vertexAttribDivisor(POSITION_LOCATION, 0);
    gl.vertexAttribDivisor(VELOCITY_LOCATION, 0);
    gl.vertexAttribDivisor(COLOR_LOCATION, 0);
    gl.vertexAttribDivisor(ATTRACT_LOCATION, 0);
  }

  initialize()
  {
    
    for (let p = 0; p < this.count; ++p)
    {
      this.position[p * 4] = (Math.random() - 0.5) *  10.0;
      this.position[p * 4 + 1] = (Math.random() - 0.5) *  10.0;
      this.position[p * 4 + 2] = (Math.random() - 0.5) *  10.0;
      this.position[p * 4 + 3] = 1.0;
      
      this.velocity[p * 4] = 0.0;
      this.velocity[p * 4 + 1] = 0.0;
      this.velocity[p * 4 + 2] = 0.0;
      this.velocity[p * 4 + 3] = 0.0;

      this.color[p * 4] = Math.random();
      this.color[p * 4 + 1] = Math.random();
      this.color[p * 4 + 2] = Math.random();
      this.color[p * 4 + 3] = 1.0;
      
      this.attract[p * 4] = (Math.random() - 0.5) *  50.0;
      this.attract[p * 4 + 1] = (Math.random() - 0.5) *  50.0;
      this.attract[p * 4 + 2] = (Math.random() - 0.5) *  50.0;
      this.attract[p * 4 + 3] = 1.0;
    }

    this.VBOs = new Array(this.VAOs.length);

    for (let i = 0; i < this.VAOs.length; ++i)
    {
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

  setBuffers(a : number, b : number)
  {
    gl.bindBuffer(gl.ARRAY_BUFFER, this.VBOs[a][POSITION_LOCATION]);
    gl.vertexAttribPointer(POSITION_LOCATION, 4, gl.FLOAT, false, 0, 0);
    gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, this.VBOs[b][POSITION_LOCATION]);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.VBOs[a][VELOCITY_LOCATION]);
    gl.vertexAttribPointer(VELOCITY_LOCATION, 4, gl.FLOAT, false, 0, 0);
    gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 1, this.VBOs[b][VELOCITY_LOCATION]);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.VBOs[a][COLOR_LOCATION]);
    gl.vertexAttribPointer(COLOR_LOCATION, 4, gl.FLOAT, false, 0, 0);
    gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 2, this.VBOs[b][COLOR_LOCATION]);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.VBOs[a][ATTRACT_LOCATION]);
    gl.vertexAttribPointer(ATTRACT_LOCATION, 4, gl.FLOAT, false, 0, 0);
    gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 3, this.VBOs[b][ATTRACT_LOCATION]);
  }
  
  
};

export default Particle;
