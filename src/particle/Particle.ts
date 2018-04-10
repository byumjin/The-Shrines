import {gl} from '../globals';

const POSITION_LOCATION = 0;
const VELOCITY_LOCATION = 1;
const ACCEL_LOCATION = 2;
const COLOR_LOCATION = 3;

const NUM_OUTPUT = 4;

class Particle
{
  count : number;
  position : Float32Array;
  velocity : Float32Array;
  accel : Float32Array;
  color : Float32Array;
  
  VAOs: WebGLVertexArrayObject[];
  transformFeedback: WebGLTransformFeedback[];
  VBOs: WebGLBuffer[][];

  constructor( numParticles: number)
  {    
    this.position  = new Float32Array(this.count * 4);
    this.velocity  = new Float32Array(this.count * 4);
    this.accel     = new Float32Array(this.count * 4);
    this.color     = new Float32Array(this.count * 4);

    //ping-pong
    this.VAOs = [gl.createVertexArray(), gl.createVertexArray()];         
    this.transformFeedback = [gl.createTransformFeedback(), gl.createTransformFeedback()];
  }

  initialize()
  {
    for (let p = 0; p < this.count; ++p)
    {
      this.position[p * 4] = 0.0;
      this.position[p * 4 + 1] = 0.0;
      this.position[p * 4 + 2] = 0.0;
      this.position[p * 4 + 3] = 0.0;
      
      this.velocity[p * 4] = 0.0;
      this.velocity[p * 4 + 1] = 0.0;
      this.velocity[p * 4 + 2] = 0.0;
      this.velocity[p * 4 + 3] = 0.0;
      
      this.accel[p * 4] = 0.0;
      this.accel[p * 4 + 1] = 0.0;
      this.accel[p * 4 + 2] = 0.0;
      this.accel[p * 4 + 3] = 0.0;

      this.color[p * 4] = 1.0;
      this.color[p * 4 + 1] = 1.0;
      this.color[p * 4 + 2] = 1.0;
      this.color[p * 4 + 3] = 1.0;
    }

    this.VBOs = new Array(this.VAOs.length);

    for (let i = 0; i < this.VAOs.length; ++i)
    {
      this.VBOs[i] = new Array(NUM_OUTPUT);

      gl.bindVertexArray(this.VAOs[i]);

      this.VBOs[i][POSITION_LOCATION] = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, this.VBOs[i][POSITION_LOCATION]);
      gl.bufferData(gl.ARRAY_BUFFER, this.position, gl.STREAM_COPY);
      gl.vertexAttribPointer(POSITION_LOCATION, 4, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(POSITION_LOCATION);

      this.VBOs[i][VELOCITY_LOCATION] = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, this.VBOs[i][VELOCITY_LOCATION]);
      gl.bufferData(gl.ARRAY_BUFFER, this.velocity, gl.STREAM_COPY);
      gl.vertexAttribPointer(VELOCITY_LOCATION, 4, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(VELOCITY_LOCATION);

      this.VBOs[i][ACCEL_LOCATION] = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, this.VBOs[i][ACCEL_LOCATION]);
      gl.bufferData(gl.ARRAY_BUFFER, this.accel, gl.STREAM_COPY);
      gl.vertexAttribPointer(VELOCITY_LOCATION, 4, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(VELOCITY_LOCATION);

      this.VBOs[i][COLOR_LOCATION] = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, this.VBOs[i][COLOR_LOCATION]);
      gl.bufferData(gl.ARRAY_BUFFER, this.color, gl.STREAM_COPY);
      gl.vertexAttribPointer(COLOR_LOCATION, 4, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(COLOR_LOCATION);
      
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      
      // Set up output
      gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, this.transformFeedback[i]);
      gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, this.VBOs[i][POSITION_LOCATION]);
      gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 1, this.VBOs[i][VELOCITY_LOCATION]);
      gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 2, this.VBOs[i][ACCEL_LOCATION]);
      gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 3, this.VBOs[i][COLOR_LOCATION]);
      gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, null);
   }
  }
  
};

export default Particle;
