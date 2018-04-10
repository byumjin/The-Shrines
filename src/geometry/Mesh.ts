import {vec3, vec4, mat4} from 'gl-matrix';
import Drawable from '../rendering/gl/Drawable';
import {gl} from '../globals';
import Texture from '../rendering/gl/Texture';
import * as Loader from 'webgl-obj-loader';
import {PlyLoader} from './PlyLoaders';

class Mesh extends Drawable {
  indices: Uint32Array;
  positions: Float32Array;
  normals: Float32Array;
  colors: Float32Array;
  uvs: Float32Array;

  objString: string;

  constructor(objString: string, center: vec3, albedoTexture: Texture, specularTexture: Texture, normalTexture: Texture ) {
    super(); // Call the constructor of the super class. This is required.
    this.center = vec4.fromValues(center[0], center[1], center[2], 1);

    this.albedoMap = albedoTexture;
    this.specularMap = specularTexture;
    this.normalMap = normalTexture;

    this.objString = objString;
  }

  create() {  
    //Update Model Matrix
    mat4.translate(this.modelMat, this.modelMat, vec3.fromValues(this.center[0],this.center[1],this.center[2]));
    
    let posTemp: Array<number> = [];
    let norTemp: Array<number> = [];
    let uvsTemp: Array<number> = [];
    let idxTemp: Array<number> = [];

    var loadedMesh = new Loader.Mesh(this.objString);

    //posTemp = loadedMesh.vertices;
    for (var i = 0; i < loadedMesh.vertices.length; i++) {
      posTemp.push(loadedMesh.vertices[i]);
      if (i % 3 == 2) posTemp.push(1.0);
    }

    for (var i = 0; i < loadedMesh.vertexNormals.length; i++) {
      norTemp.push(loadedMesh.vertexNormals[i]);
      if (i % 3 == 2) norTemp.push(0.0);
    }

    for (var i = 0; i < loadedMesh.textures.length; i++) {
      if(i % 2 == 0)
        uvsTemp.push(loadedMesh.textures[i]);
      else
        uvsTemp.push(-loadedMesh.textures[i] + 1.0); //V filpped
    }

    //uvsTemp = loadedMesh.textures;
    idxTemp = loadedMesh.indices;

    // white vert color for now
    this.colors = new Float32Array(posTemp.length);
    for (var i = 0; i < posTemp.length; ++i){
      this.colors[i] = 1.0;
    }

    this.indices = new Uint32Array(idxTemp);
    this.normals = new Float32Array(norTemp);
    this.positions = new Float32Array(posTemp);
    this.uvs = new Float32Array(uvsTemp);

    this.generateIdx();
    this.generatePos();
    this.generateNor();
    this.generateUV();
    this.generateCol();

    this.count = this.indices.length;
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.bufIdx);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.bufNor);
    gl.bufferData(gl.ARRAY_BUFFER, this.normals, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.bufPos);
    gl.bufferData(gl.ARRAY_BUFFER, this.positions, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.bufCol);
    gl.bufferData(gl.ARRAY_BUFFER, this.colors, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.bufUV);
    gl.bufferData(gl.ARRAY_BUFFER, this.uvs, gl.STATIC_DRAW);

    console.log(`Created Mesh from OBJ`);
    this.objString = ""; // hacky clear
  }

  createByPly(type:number, plyText:string){
    this.type = type;
    //Update Model Matrix
    mat4.translate(this.modelMat, this.modelMat, vec3.fromValues(this.center[0],this.center[1],this.center[2]));
    
    let posTemp: Array<number> = [];
    let norTemp: Array<number> = [];
    let colTemp: Array<number> = [];
    let uvsTemp: Array<number> = [];
    let idxTemp: Array<number> = [];

    var loadedMesh = new Loader.Mesh(this.objString);

    var PLYLoader = new PlyLoader();
    PLYLoader.loadColorsOnly(plyText);

    //posTemp = loadedMesh.vertices;
    let idx = 0;
    for (var i = 0; i < loadedMesh.indices.length; i++) {
      posTemp.push(loadedMesh.vertices[3*loadedMesh.indices[i]]);
      posTemp.push(loadedMesh.vertices[3*loadedMesh.indices[i]+1]);
      posTemp.push(loadedMesh.vertices[3*loadedMesh.indices[i]+2]);
      posTemp.push(1.0);
      idxTemp.push(idx);
      idx ++;

      norTemp.push(loadedMesh.vertexNormals[3*loadedMesh.indices[i]]);
      norTemp.push(loadedMesh.vertexNormals[3*loadedMesh.indices[i]+1]);
      norTemp.push(loadedMesh.vertexNormals[3*loadedMesh.indices[i]+2]);
      norTemp.push(0);

      uvsTemp.push(loadedMesh.textures[2*loadedMesh.indices[i]]);
      uvsTemp.push(-loadedMesh.textures[2*loadedMesh.indices[i]+1] + 1.0); //V filpped

    //load colors
      colTemp.push(PLYLoader.arrayColor[3*loadedMesh.indices[i]]/255);
      colTemp.push(PLYLoader.arrayColor[3*loadedMesh.indices[i]+1]/255);
      colTemp.push(PLYLoader.arrayColor[3*loadedMesh.indices[i]+2]/255);
      colTemp.push(1);
    }

    this.indices = new Uint32Array(idxTemp);
    this.normals = new Float32Array(norTemp);
    this.positions = new Float32Array(posTemp);
    this.colors = new Float32Array(colTemp);
    this.uvs = new Float32Array(uvsTemp);

    this.generateIdx();
    this.generatePos();
    this.generateNor();
    this.generateUV();
    this.generateCol();

    this.count = this.indices.length;
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.bufIdx);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.bufNor);
    gl.bufferData(gl.ARRAY_BUFFER, this.normals, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.bufPos);
    gl.bufferData(gl.ARRAY_BUFFER, this.positions, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.bufCol);
    gl.bufferData(gl.ARRAY_BUFFER, this.colors, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.bufUV);
    gl.bufferData(gl.ARRAY_BUFFER, this.uvs, gl.STATIC_DRAW);

    console.log(`Created Mesh from PLY`);
    this.objString = ""; // hacky clear
  }
};

export default Mesh;
