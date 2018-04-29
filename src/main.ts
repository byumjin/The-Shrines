import {vec3, mat4, vec4} from 'gl-matrix';
import * as Stats from 'stats-js';
import * as DAT from 'dat-gui';
import Square from './geometry/Square';
import Mesh from './geometry/Mesh';
import OpenGLRenderer from './rendering/gl/OpenGLRenderer';
import Camera from './Camera';
import {setGL} from './globals';
import {readTextFile} from './globals';
import ShaderProgram, {Shader} from './rendering/gl/ShaderProgram';
import Texture from './rendering/gl/Texture';
import {PlyLoader} from './geometry/PlyLoaders';
import Particle from './particle/Particle';
import Quad from './geometry/Quad';
import {LSystem} from './LSystem';
import { lchmod } from 'fs';

// Define an object with application parameters and button callbacks
const controls = {
   
  SSR_MaxStep : 64,
  SSR_Opaque_Intensity : 1.0,
  SSR_Trans_Intensity : 0.8,
  SSR_Threshold : 2.0,

  Bloom_Iteration : 4,
  Bloom_Dispersal : 0.5,
  Bloom_Distortion : 0.5,

  FireFly : false,
  Rain : false,
  Rain_delaytoStartTimer : 0.0,
  Rain_delaytoDieTimer : 3.0,
  Rain_Timer: 3.0,

  Snow : false,
  Snow_delaytoDieTimer : 3.0,
  Snow_delaytoStartTimer : 0.0,
  Snow_Timer: 3.0,

  Lantern : false,
  Lantern_delaytoDieTimer : 10.0,
  Lantern_Timer: 10.0,

  Fire : false,
  Fire_delaytoDieTimer : 3.0,
  Fire_delaytoStartTimer : 0.0,
  Fire_Timer: 3.0,

  Earth : false,
  Earth_delaytoDieTimer : 14.0,
  Earth_Timer: 14.0,

  Clouds : true,

  Temperature : 7000,
  
  Vignette_Effect: true,

  Volume : 0.5,

  ShowFPS : false
};



let square: Square;
let particleQuad: Quad;
let cloudQuad: Quad;
// TODO: replace with your scene's stuff

let obj0: string;
let mesh0: Mesh;
let mesh1: Mesh;
let mesh2: Mesh;

let obj_lake: string;
let mesh_lake: Mesh;

let obj_holodeck: string;
let mesh_holodeck: Mesh;
let mesh_holodeck2: Mesh;

let obj_B_Outter: string;
let mesh_B_Outter: Mesh;

let obj_B_Inner: string;
let mesh_B_Inner: Mesh;

let obj_B_Glass: string;
let mesh_B_Glass: Mesh;

//
let shrines_main: string;
let shrines_poles: string;
let shrines_balconis: string;
let shrines_colums: string;
let shrines_gold: string;

let m_shrines_main: Mesh;
let m_shrines_poles: Mesh;
let m_shrines_balconis: Mesh;
let m_shrines_colums: Mesh;
let m_shrines_gold: Mesh;

//
let shrines_statue: string;
let m_shrines_statue: Mesh;

let obj_Leaf: string;
let obj_Bark: string;
let obj_Leaf2: string;
let obj_Bark2: string;
let ply_Leaf: string;
let ply_Bark: string;
let ply_Leaf2: string;
let ply_Bark2: string;

let obj_Lantern: string;
let obj_Boat: string;
let obj_Leaves: string;

//Road
export let road_Mesh_Map: Map<string, Array<Mesh>>;

let mesh_Leaf: Mesh;
let mesh_Bark: Mesh;
let mesh_Leaf2: Mesh;
let mesh_Bark2: Mesh;
let mesh_Test: Mesh;

let mesh_Lantern: Mesh;
let mesh_Boat: Mesh;
let mesh_Leaves: Mesh;

let skyCubeMap: Texture;
let cloudsTexture: Texture;
let cloudsNormalTexture: Texture;

let numParticle: number = 4096; //Bilboard
let numCloud: number = 256;

let numLatern: number = 1024;

let numBoat: number = 16;
let numLeaves: number = 208;

let LS0: LSystem;
let LS1: LSystem;
let LS2: LSystem;
let LS3: LSystem;

let gainNode: GainNode;

var timer = {
  deltaTime: 0.0,
  startTime: 0.0,
  currentTime: 0.0,
  updateTime: function() {
    var t = Date.now();
    t = (t - timer.startTime) * 0.001;
    timer.deltaTime = t - timer.currentTime;
    timer.currentTime = t;
  },
}

function play_single_sound() {
  var JukeBox = new AudioContext();

  gainNode = JukeBox.createGain(); // Create a gainNode reference.
  gainNode.connect(JukeBox.destination); // Add context to gainNode

  fetch('./src/music/idealism - another perspective.mp3')
    .then(r=>r.arrayBuffer())
    .then(b=>JukeBox.decodeAudioData(b))
    .then(data=>{
        const audio_buf = JukeBox.createBufferSource();
        audio_buf.buffer = data;
        audio_buf.loop = true;
        
        audio_buf.connect(gainNode);
        gainNode.gain.value = controls.Volume;
        audio_buf.start(0);
        });

        //console.log(`Music On!`);
}

function changeVolume(volume : number)
{
  gainNode.gain.value = controls.Volume;
}

function loadOBJText() {
  obj0 = readTextFile('./src/resources/objs/mario/models/wahoo.obj');
  obj_lake = readTextFile('./src/resources/objs/lake/models/lake.obj');
  obj_holodeck = readTextFile('./src/resources/objs/holodeck/models/holodeck.obj');

  //shrines_main = readTextFile('./src/resources/objs/shrines/models/w_main.obj');
  shrines_poles = readTextFile('./src/resources/objs/shrines/models/w_poles.obj');
  shrines_balconis = readTextFile('./src/resources/objs/shrines/models/w_balconis.obj');
  shrines_colums = readTextFile('./src/resources/objs/shrines/models/w_colums.obj');
  shrines_gold = readTextFile('./src/resources/objs/shrines/models/w_golden.obj');

  shrines_statue = readTextFile('./src/resources/objs/shrines/statues/statues.obj');

  obj_B_Outter = readTextFile('./src/resources/objs/B_Side/models/b_Outter_v3.obj');
  obj_B_Inner = readTextFile('./src/resources/objs/B_Side/models/b_Inner_v3.obj');
  obj_B_Glass = readTextFile('./src/resources/objs/B_Side/models/b_Glass_v3.obj');

  ply_Leaf = readTextFile('./src/resources/objs/tree/models/leaf01.ply');
  ply_Bark = readTextFile('./src/resources/objs/tree/models/bark01.ply');
  ply_Leaf2 = readTextFile('./src/resources/objs/tree/models/leaf02.ply');
  ply_Bark2 = readTextFile('./src/resources/objs/tree/models/bark02.ply');

  obj_Leaf = readTextFile('./src/resources/objs/tree/models/leaf01.obj');
  obj_Bark = readTextFile('./src/resources/objs/tree/models/bark01.obj');
  obj_Leaf2 = readTextFile('./src/resources/objs/tree/models/leaf02.obj');
  obj_Bark2 = readTextFile('./src/resources/objs/tree/models/bark02.obj');

  obj_Lantern = readTextFile('./src/resources/objs/lantern/models/lantern.obj');
  obj_Boat = readTextFile('./src/resources/objs/lantern/models/sailboat.obj');
  obj_Leaves = readTextFile('./src/resources/objs/lantern/models/leaves.obj');
}

function loadRoadMap(){
  road_Mesh_Map = new Map();
  let Array_Road = new Array<Mesh>();
  let objText = readTextFile('./src/resources/objs/road/models/road00.obj');
  let mesh = new Mesh(objText, vec3.fromValues(0,0,0),
   new Texture('./src/resources/objs/shrines/textures/marbles_albedo.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_specular.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_normal.png', false));
  mesh.create();
  Array_Road.push(mesh);
  objText = readTextFile('./src/resources/objs/road/models/road01.obj');
  mesh = new Mesh(objText, vec3.fromValues(0,0,0),
   new Texture('./src/resources/objs/shrines/textures/marbles_albedo.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_specular.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_normal.png', false));
  mesh.create();
  Array_Road.push(mesh);
  objText = readTextFile('./src/resources/objs/road/models/road02.obj');
  mesh = new Mesh(objText, vec3.fromValues(0,0,0),
   new Texture('./src/resources/objs/shrines/textures/marbles_albedo.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_specular.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_normal.png', false));
  mesh.create();
  Array_Road.push(mesh);
  objText = readTextFile('./src/resources/objs/road/models/road03.obj');
  mesh = new Mesh(objText, vec3.fromValues(0,0,0),
   new Texture('./src/resources/objs/shrines/textures/marbles_albedo.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_specular.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_normal.png', false));
  mesh.create();
  Array_Road.push(mesh);
  objText = readTextFile('./src/resources/objs/road/models/road04.obj');
  mesh = new Mesh(objText, vec3.fromValues(0,0,0),
   new Texture('./src/resources/objs/shrines/textures/marbles_albedo.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_specular.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_normal.png', false));
  mesh.create();
  Array_Road.push(mesh);
   Array_Road.push(mesh);
  objText = readTextFile('./src/resources/objs/road/models/road05.obj');
  mesh = new Mesh(objText, vec3.fromValues(0,0,0),
   new Texture('./src/resources/objs/shrines/textures/marbles_albedo.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_specular.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_normal.png', false));
  mesh.create();
  Array_Road.push(mesh);
   Array_Road.push(mesh);
  objText = readTextFile('./src/resources/objs/road/models/road06.obj');
  mesh = new Mesh(objText, vec3.fromValues(0,0,0),
   new Texture('./src/resources/objs/shrines/textures/marbles_albedo.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_specular.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_normal.png', false));
  mesh.create();
  Array_Road.push(mesh);

  road_Mesh_Map.set("road", Array_Road);

  let Array_Conn = new Array<Mesh>();
  objText = readTextFile('./src/resources/objs/road/models/conn00.obj');
  mesh = new Mesh(objText, vec3.fromValues(0,0,0),
   new Texture('./src/resources/objs/shrines/textures/marbles_albedo.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_specular.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_normal.png', false));
  mesh.create();
  Array_Conn.push(mesh);
  objText = readTextFile('./src/resources/objs/road/models/conn01.obj');
  mesh = new Mesh(objText, vec3.fromValues(0,0,0),
   new Texture('./src/resources/objs/shrines/textures/marbles_albedo.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_specular.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_normal.png', false));
  mesh.create();
  Array_Conn.push(mesh);
  objText = readTextFile('./src/resources/objs/road/models/conn02.obj');
  mesh = new Mesh(objText, vec3.fromValues(0,0,0),
   new Texture('./src/resources/objs/shrines/textures/marbles_albedo.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_specular.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_normal.png', false));
  mesh.create();
  Array_Conn.push(mesh);
  objText = readTextFile('./src/resources/objs/road/models/conn03.obj');
  mesh = new Mesh(objText, vec3.fromValues(0,0,0),
   new Texture('./src/resources/objs/shrines/textures/marbles_albedo.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_specular.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_normal.png', false));
  mesh.create();
  Array_Conn.push(mesh);
  objText = readTextFile('./src/resources/objs/road/models/conn04.obj');
  mesh = new Mesh(objText, vec3.fromValues(0,0,0),
   new Texture('./src/resources/objs/shrines/textures/marbles_albedo.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_specular.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_normal.png', false));
  mesh.create();
  Array_Conn.push(mesh);
  objText = readTextFile('./src/resources/objs/road/models/conn05.obj');
  mesh = new Mesh(objText, vec3.fromValues(0,0,0),
   new Texture('./src/resources/objs/shrines/textures/marbles_albedo.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_specular.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_normal.png', false));
  mesh.create();
  Array_Conn.push(mesh);
  road_Mesh_Map.set("conn", Array_Conn);
  //console.log(road_Mesh_Map);
}

function loadScene() {
  square && square.destroy();
  mesh0 && mesh0.destroy();

  skyCubeMap = new Texture('./src/resources/objs/skybox/dawnSky_', true);
  skyCubeMap.loadCubeImg('./src/resources/objs/skybox/dawnSky_', 0);
  skyCubeMap.loadCubeImg('./src/resources/objs/skybox/dawnSky_', 1);
  skyCubeMap.loadCubeImg('./src/resources/objs/skybox/dawnSky_', 2);
  skyCubeMap.loadCubeImg('./src/resources/objs/skybox/dawnSky_', 3);
  skyCubeMap.loadCubeImg('./src/resources/objs/skybox/dawnSky_', 4);
  skyCubeMap.loadCubeImg('./src/resources/objs/skybox/dawnSky_', 5);

  cloudsTexture = new Texture('./src/resources/clouds/clouds.png', false);
  cloudsNormalTexture = new Texture('./src/resources/clouds/clouds_Normal.png', false);

  square = new Square(vec3.fromValues(0, 0, 0));
  square.create();

  particleQuad = new Quad(vec3.fromValues(0, 0, 0));
  particleQuad.create();

  cloudQuad = new Quad(vec3.fromValues(0, 0, 0));
  cloudQuad.create();

  var scale = 3.0;

  mesh0 = new Mesh(obj0, vec3.fromValues(0, 0, 0),
   new Texture('./src/resources/objs/mario/textures/wahoo.png', false),
    new Texture('./src/resources/objs/mario/textures/wahoo_Spec.png', false),
     new Texture('./src/resources/objs/mario/textures/wahoo_Norm.png', false));
  
  mesh0.scale( vec3.fromValues(scale, scale, scale));
  mesh0.create();

 
  

  mesh_lake = new Mesh(obj_lake, vec3.fromValues(0, 0, 0),
   new Texture('./src/resources/objs/lake/textures/albedo.png', false),
    new Texture('./src/resources/objs/lake/textures/specular2.png', false),
     new Texture('./src/resources/objs/lake/textures/normal.png', false));
     mesh_lake.scale( vec3.fromValues(scale, scale, scale));
  mesh_lake.create();

  //mesh_lake.translate( vec3.fromValues(0.0, 0.0, 0.0));

  ////////////////

 
  /*
  m_shrines_main = new Mesh(shrines_main, vec3.fromValues(0, 0, 0),
  new Texture('./src/resources/objs/shrines/textures/Uber_Albedo.png', false),
   new Texture('./src/resources/objs/shrines/textures/Uber_Specular.png', false),
    new Texture('./src/resources/objs/shrines/textures/Uber_Normal.png', false));
  m_shrines_main.create();
  m_shrines_main.scale( vec3.fromValues(scale, scale, scale));
  m_shrines_main.translate(vec3.fromValues(0.0, -1.0, 0.0));
  */

  m_shrines_poles = new Mesh(shrines_poles, vec3.fromValues(0, 0, 0),
  new Texture('./src/resources/objs/shrines/textures/marbles_albedo.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_specular.png', false),
    new Texture('./src/resources/objs/shrines/textures/marbles_normal.png', false));
    m_shrines_poles.create();
    m_shrines_poles.scale( vec3.fromValues(scale, scale, scale));
    m_shrines_poles.translate(vec3.fromValues(0.0, -1.0, 0.0));

  m_shrines_balconis = new Mesh(shrines_balconis, vec3.fromValues(0, 0, 0),
  new Texture('./src/resources/objs/shrines/textures/marbles_albedo.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_specular.png', false),
    new Texture('./src/resources/objs/shrines/textures/marbles_normal.png', false));
    m_shrines_balconis.create();
    m_shrines_balconis.scale( vec3.fromValues(scale, scale, scale));
    m_shrines_balconis.translate(vec3.fromValues(0.0, -1.0, 0.0));

  m_shrines_colums = new Mesh(shrines_colums, vec3.fromValues(0, 0, 0),
  new Texture('./src/resources/objs/shrines/textures/marbles_albedo.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_specular.png', false),
    new Texture('./src/resources/objs/shrines/textures/marbles_normal.png', false));
    m_shrines_colums.create();
    m_shrines_colums.scale( vec3.fromValues(scale, scale, scale));
    m_shrines_colums.translate(vec3.fromValues(0.0, -1.0, 0.0));

  m_shrines_gold = new Mesh(shrines_gold, vec3.fromValues(0, 0, 0),
  new Texture('./src/resources/objs/shrines/textures/Gold_Albedo.png', false),
   new Texture('./src/resources/objs/shrines/textures/Gold_Specular.png', false),
    new Texture('./src/resources/objs/shrines/textures/Gold_Normal.png', false));
    m_shrines_gold.create();
    m_shrines_gold.scale( vec3.fromValues(scale, scale, scale));
    m_shrines_gold.translate(vec3.fromValues(0.0, -1.0, 0.0));

  ///////////////
  m_shrines_statue = new Mesh(shrines_statue, vec3.fromValues(0, 0, 0),
  new Texture('./src/resources/objs/shrines/statues/albedo.png', false),
   new Texture('./src/resources/objs/shrines/statues/specular.png', false),
    new Texture('./src/resources/objs/shrines/statues/normal.png', false));
    m_shrines_statue.create();
    m_shrines_statue.scale( vec3.fromValues(scale, scale, scale));
    m_shrines_statue.translate(vec3.fromValues(0.0, -1.0, 0.0));



  mesh_B_Outter = new Mesh(obj_B_Outter, vec3.fromValues(0, 0, 0),
  new Texture('./src/resources/objs/B_Side/textures/Outter_Albedo.png', false),
   new Texture('./src/resources/objs/B_Side/textures/Outter_Specular.png', false),
    new Texture('./src/resources/objs/B_Side/textures/Outter_Normal.png', false));
    mesh_B_Outter.create();

    mesh_B_Outter.scale(vec3.fromValues(scale, scale, scale));
    mesh_B_Outter.translate(vec3.fromValues(0.0,-1.0, 0.0));

  mesh_B_Inner = new Mesh(obj_B_Inner, vec3.fromValues(0, 0, 0),
   new Texture('./src/resources/objs/B_Side/textures/Inner_Albedo.png', false),
   new Texture('./src/resources/objs/B_Side/textures/Inner_Specular.png', false),
   new Texture('./src/resources/objs/B_Side/textures/Inner_Normal.png', false));
   mesh_B_Inner.create();

   mesh_B_Inner.scale(vec3.fromValues(scale, scale, scale));
   mesh_B_Inner.translate(vec3.fromValues(0.0, -1.0, 0.0));

  mesh_B_Glass = new Mesh(obj_B_Glass, vec3.fromValues(0, 0, 0),
    new Texture('./src/resources/objs/B_Side/textures/Glass_Albedo.png', false),
    new Texture('./src/resources/objs/B_Side/textures/Glass_Specular.png', false),
    new Texture('./src/resources/objs/B_Side/textures/Normal.png', false));
    mesh_B_Glass.create();

    mesh_B_Glass.scale(vec3.fromValues(scale, scale, scale));
    mesh_B_Glass.translate(vec3.fromValues(0.0, -1.0, 0.0));

// Create By PLY format
   mesh_Leaf = new Mesh(obj_Leaf, vec3.fromValues(-50, 2, -50),
    new Texture('./src/resources/objs/tree/textures/Leaf_png/leaf_Tex_Tree22.png', false),
    new Texture('./src/resources/objs/tree/textures/Leaf_png/specular.png', false),
    new Texture('./src/resources/objs/tree/textures/Leaf_png/Normal_Tex_Tree0.png', false));
   mesh_Leaf.createByPly(1, ply_Leaf);
   mesh_Leaf.scale(vec3.fromValues(3, 3, 3));
   
   mesh_Bark = new Mesh(obj_Bark, vec3.fromValues(-50, 2, -50),
    new Texture('./src/resources/objs/tree/textures/Bark_png/BroadleafBark_Tex_Tree0.png', false),
    new Texture('./src/resources/objs/tree/textures/Bark_png/specular.png', false),
    new Texture('./src/resources/objs/tree/textures/Bark_png/BroadleafBark_Normal_Tex_Tree0.png', false));
   mesh_Bark.createByPly(2, ply_Bark);
   mesh_Bark.scale(vec3.fromValues(3, 3, 3));

   mesh_Leaf2 = new Mesh(obj_Leaf2, vec3.fromValues(0,9.5,252),
    new Texture('./src/resources/objs/tree/textures/Leaf_png/leaf_Tex_Tree2.png', false),
    new Texture('./src/resources/objs/tree/textures/Leaf_png/specular.png', false),
    new Texture('./src/resources/objs/tree/textures/Leaf_png/Normal_Tex_Tree2.png', false));
   mesh_Leaf2.createByPly(1, ply_Leaf2);
   mesh_Leaf2.scale(vec3.fromValues(3, 3, 3));

   mesh_Bark2 = new Mesh(obj_Bark2, vec3.fromValues(0,9.5,252),
    new Texture('./src/resources/objs/tree/textures/Bark_png/BroadleafBark_Tex_Tree2.png', false),
    new Texture('./src/resources/objs/tree/textures/Bark_png/specular.png', false),
    new Texture('./src/resources/objs/tree/textures/Bark_png/BroadleafBark_Normal_Tex_Tree2.png', false));
   mesh_Bark2.createByPly(2, ply_Bark2);
   mesh_Bark2.scale(vec3.fromValues(3, 3, 3));

   mesh_Lantern  = new Mesh(obj_Lantern, vec3.fromValues(10,0,0),
   new Texture('./src/resources/objs/lantern/textures/lantern.png', false),
    new Texture('./src/resources/objs/lantern/textures/lantern.png', false),
    new Texture('./src/resources/objs/lantern/textures/Normal.png', false));
    mesh_Lantern.create();

    mesh_Boat  = new Mesh(obj_Boat, vec3.fromValues(10,0,0),
    new Texture('./src/resources/objs/B_Side/textures/Outter_Albedo.png', false),
     new Texture('./src/resources/objs/B_Side/textures/Outter_Specular.png', false),
     new Texture('./src/resources/objs/B_Side/textures/Outter_Normal.png', false));
     mesh_Boat.create();

    mesh_Leaves  = new Mesh(obj_Leaves, vec3.fromValues(10,0,0),
    new Texture('./src/resources/objs/lantern/textures/Leaves_Albedo.jpg', false),
     new Texture('./src/resources/objs/lantern/textures/Leaves_Albedo.jpg', false),
     new Texture('./src/resources/objs/lantern/textures/Normal.png', false));
     mesh_Leaves.create();

   loadRoadMap();

   LS0 = new LSystem(vec3.fromValues(55,1.5,0),
   new Texture('./src/resources/objs/shrines/textures/marbles_albedo.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_specular.png', false),
    new Texture('./src/resources/objs/shrines/textures/marbles_normal.png', false));
   let program = "X\nX->FF*[+F][-F]F*[-F][+F]\nF->FFF\n";
   LS0.loadProgramFromString(program);
   LS0.setDefaultStep(13.5);
   LS0.setDefaultAngle(90);
   LS0.setInitialDirection(90);
   LS0.process(1);
   LS0.create();
   //console.log(LS0);

   LS1 = new LSystem(vec3.fromValues(0,1.5,-55),
   new Texture('./src/resources/objs/shrines/textures/marbles_albedo.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_specular.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_normal.png', false));
   program = "X\nX->F+*[[FFX]-FFX]-FF*[-FFX]+FFX\nF->FF\n";
   LS1.loadProgramFromString(program);
   LS1.setDefaultStep(13.5);
   LS1.setDefaultAngle(90);
   LS1.setInitialDirection(180)
   LS1.process(1);
   LS1.create();
   //console.log(LS1);

   LS2 = new LSystem(vec3.fromValues(-55,1.5,0),
   new Texture('./src/resources/objs/shrines/textures/marbles_albedo.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_specular.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_normal.png', false));
   program = "X\nX->FF*[+F][-F]F*[-F][+F]\nF->FFF\n";
   LS2.loadProgramFromString(program);
   LS2.setDefaultStep(13.5);
   LS2.setDefaultAngle(90);
   LS2.setInitialDirection(-90)
   LS2.process(1);
   LS2.create();
   //console.log(LS2);

   LS3 = new LSystem(vec3.fromValues(0,1.5,55),
   new Texture('./src/resources/objs/shrines/textures/marbles_albedo.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_specular.png', false),
   new Texture('./src/resources/objs/shrines/textures/marbles_normal.png', false));
   program = "X\nX->F+*[[FFX]-FFX]-FF*[-FFX]+FFX\nF->FF\n";
   LS3.loadProgramFromString(program);
   LS3.setDefaultStep(13.5);
   LS3.setDefaultAngle(90);
   LS3.setInitialDirection(0)
   LS3.process(1);
   LS3.create();
   //console.log(LS3);
}

function CheckTriggers(cam : Camera, camPos: vec3, distance: number, height: number, range: number, deltaTime : number){

  //move first
  var speed = 50.0;
  if(cam.bForward)
    {
      cam.updatePosition(0.0, -deltaTime * speed);
    }
    if(cam.bBackward)
    {
      cam.updatePosition(0.0, deltaTime * speed);
    }
    if(cam.bLeft)
    {
      cam.updatePosition(-deltaTime * speed, 0.0);
    }
    if(cam.bRight)
    {
      cam.updatePosition(deltaTime * speed, 0.0);
    }

  if(camPos[0]<range * 2.0 && camPos[0] > -range * 2.0 
    && camPos[2]<range * 2.0 && camPos[2]>-range * 2.0)
    //Middle Shrine
    controls.Lantern = true;
  else if(camPos[0]<range && camPos[0] > -range 
    && camPos[2]<distance+range && camPos[2]>distance-range)
    controls.Earth = true  ;
  else if(camPos[0]<range && camPos[0] > -range 
    && camPos[2]<-distance+range && camPos[2]>-distance-range)
    controls.Fire = true;
  else if(camPos[0]<distance+range && camPos[0] > distance-range 
    && camPos[2]<range && camPos[2]>-range)
    //Ice Shrine
    controls.Snow = true;
  else if(camPos[0]<-distance+range && camPos[0] > -distance-range 
    && camPos[2]<range && camPos[2]>-range)
    //Water Shrine
    controls.Rain = true;
  else
  {
    controls.Rain = false;
    controls.Snow = false;
    controls.Lantern = false;
    controls.Fire = false;
    controls.Earth = false;
  }

  
}

function UpdateParticle(renderer: any, camera : Camera, particleLanternSys: Particle , feedBackLanternShader: ShaderProgram, particleLanternRenderShader: ShaderProgram, 
  particleLeavesSys: Particle, feedBackLeavesShader: ShaderProgram, particleLeavesRenderShader: ShaderProgram,
  particleSys: Particle, feedBackShader: ShaderProgram, particleRenderShader: ShaderProgram)
{
  if(!controls.Lantern)
    {
      controls.Lantern_Timer += timer.deltaTime;

      if(controls.Lantern_Timer < controls.Lantern_delaytoDieTimer)
      {
        renderer.renderLanternParticle(camera, mesh_Lantern, particleLanternSys, feedBackLanternShader, particleLanternRenderShader,
          controls.Lantern, true);
      }
      else
      {
        renderer.renderLanternParticle(camera, mesh_Lantern, particleLanternSys, feedBackLanternShader, particleLanternRenderShader,
          controls.Lantern, false);
      }
    }
    else
    {
      controls.Lantern_Timer = 0.0;     
      renderer.renderLanternParticle(camera, mesh_Lantern, particleLanternSys, feedBackLanternShader, particleLanternRenderShader,
        controls.Lantern, true);
    }

    if(!controls.Earth)
    {
      controls.Earth_Timer += timer.deltaTime;

      if(controls.Earth_Timer < controls.Earth_delaytoDieTimer)
      {
        renderer.renderLeavesParticle(camera, mesh_Leaves, particleLeavesSys, feedBackLeavesShader, particleLeavesRenderShader,
          controls.Earth, true);
      }
      else
      {
        renderer.renderLeavesParticle(camera, mesh_Leaves, particleLeavesSys, feedBackLeavesShader, particleLeavesRenderShader,
          controls.Earth, false);
      }
    }
    else
    {
      controls.Earth_Timer = 0.0;

      renderer.renderLeavesParticle(camera, mesh_Leaves, particleLeavesSys, feedBackLeavesShader, particleLeavesRenderShader,
        controls.Earth, true);
    }

    if(!controls.Rain)
    {
      controls.Rain_Timer += timer.deltaTime;

      if(controls.Rain_Timer < controls.Rain_delaytoDieTimer)
      {
        renderer.renderParticle(camera, particleQuad, particleSys, feedBackShader, particleRenderShader, controls.FireFly, 1.0, true); 
      }
      else
      {
        renderer.renderParticle(camera, particleQuad, particleSys, feedBackShader, particleRenderShader, controls.FireFly, 0.0, false); 
      }

      controls.Rain_delaytoStartTimer -= timer.deltaTime;
          if(controls.Rain_delaytoStartTimer < 0.0)
          controls.Rain_delaytoStartTimer = 0.0;
    }
    else
    {
      controls.Rain_Timer = 0.0;
      renderer.renderParticle(camera, particleQuad, particleSys, feedBackShader, particleRenderShader, controls.FireFly, 1.0, true);   


      controls.Rain_delaytoStartTimer += timer.deltaTime;
          if(controls.Rain_delaytoStartTimer > 3.0)
          controls.Rain_delaytoStartTimer = 3.0;
    }

    var bbNRain = !controls.Rain && (controls.Rain_Timer >= controls.Rain_delaytoDieTimer);

    if(!controls.Snow)
    {
      controls.Snow_Timer += timer.deltaTime;

          if(controls.Snow_Timer < controls.Snow_delaytoDieTimer)
          {
            renderer.renderParticle(camera, particleQuad, particleSys, feedBackShader, particleRenderShader, controls.FireFly, 2.0, true); 
          }
          else if(bbNRain)
          {
            renderer.renderParticle(camera, particleQuad, particleSys, feedBackShader, particleRenderShader, controls.FireFly, 0.0, false); 
          }


          controls.Snow_delaytoStartTimer -= timer.deltaTime;
          if(controls.Snow_delaytoStartTimer < 0.0)
          controls.Snow_delaytoStartTimer = 0.0;
    }
    else if(bbNRain)
    {
       controls.Snow_Timer = 0.0;
       renderer.renderParticle(camera, particleQuad, particleSys, feedBackShader, particleRenderShader, controls.FireFly, 2.0, true);   


       controls.Snow_delaytoStartTimer += timer.deltaTime;
       if(controls.Snow_delaytoStartTimer > 3.0)
      controls.Snow_delaytoStartTimer = 3.0;
    }


    if(!controls.Fire)
    {

      controls.Fire_delaytoStartTimer -= timer.deltaTime;
      
      if(controls.Fire_delaytoStartTimer < 0.0)
      controls.Fire_delaytoStartTimer = 0.0;

    }
    else
    {

      controls.Fire_delaytoStartTimer += timer.deltaTime;

      if(controls.Fire_delaytoStartTimer > 3.0)
      controls.Fire_delaytoStartTimer = 3.0;

    }
}

/*
function changeStats()
{
  if(controls.ShowFPS)
  stats.set
  else
}
*/

function main() {

  play_single_sound();

  // Initial display for framerate
  
  /*
  const stats = Stats();
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  */

  // Add controls to the gui
  // Add controls to the gui
  const gui = new DAT.GUI();

  /*
  var SSR = gui.addFolder('SSR');  
  SSR.add(controls, 'SSR_MaxStep', 16.0, 512.0).step(1);
  SSR.add(controls, 'SSR_Opaque_Intensity', 0.0, 4.0).step(0.1);
  SSR.add(controls, 'SSR_Trans_Intensity', 0.0, 1.0).step(0.01);
  SSR.add(controls, 'SSR_Threshold', 0.0, 10.0).step(0.1);

  var BLOOM = gui.addFolder('BLOOM');  
  BLOOM.add(controls, 'Bloom_Iteration', 0, 16).step(1);
  BLOOM.add(controls, 'Bloom_Dispersal', 0.0, 20.0).step(0.01);
  BLOOM.add(controls, 'Bloom_Distortion', 0.0, 8.0).step(0.01);
  */

  /*
  var PERFORMANCE = gui.addFolder('Peformance');
  PERFORMANCE.add(controls, 'ShowFPS').onChange(function()
  {
    changeStats();
  });
  */

  var ENVIRONMENT = gui.addFolder('Environment');
  ENVIRONMENT.add(controls, 'Temperature', 3600, 10000).step(1);
  ENVIRONMENT.add(controls, 'Clouds');

  var MUSIC = gui.addFolder('Music');
  MUSIC.add(controls, 'Volume', 0.0, 1.0, ).step(0.01).onChange(function()
  {
    changeVolume(controls.Volume);
  });

  gui.close();
  

  /*
  var VIGNETTE = gui.addFolder('Vignette');
  VIGNETTE.add(controls, 'Vignette_Effect');
  */

  // get canvas and webgl context
  const canvas = <HTMLCanvasElement> document.getElementById('canvas');
  const gl = <WebGL2RenderingContext> canvas.getContext('webgl2');
  if (!gl) {
    alert('WebGL 2 not supported!');
  }
  // `setGL` is a function imported above which sets the value of `gl` in the `globals.ts` module.
  // Later, we can import `gl` from `globals.ts` to access it
  setGL(gl);

  // Initial call to load scene
  loadScene();

  const particleSys = new Particle(numParticle);
  particleSys.initialize(150.0, 0.0, 400.0, 100.0, 150.0, 0.0, 0.5, 0.5, 0.7, 0.3, 1.0, -3.0);
  
  const particleCloud = new Particle(numCloud);
  particleCloud.initialize(50000.0, 0.0, 3000.0, 5000.0, 50000.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0 );

  const particleLanternSys = new Particle(numLatern);
  particleLanternSys.initialize(150.0, 0.0, 100.0, -105.0, 150.0, 0.0, 0.5, 0.5, 0.5, 0.3, 0.4, 0.1);

  const particleBoatSys = new Particle(numBoat);
  particleBoatSys.initialize2(250.0, 0.0, 0.0, 0.0, 250.0, 0.0,
     900.0, 500.0,
     2.0, -1.0, //direction
       2.0, -1.0, //direction
        0.01, 0.005, //speed
        2.0, 3.0); //size

  const particleLeavesSys = new Particle(numLeaves);
  particleLeavesSys.initialize3(10.0, 0.0, 100.0, -100.0, 10.0, 252.0, 0.5, 0.5, 0.5, 0.3, 0.4, 0.1);

  const camera = new Camera();

  camera.updateOrbit(0.0, 3.0);



  camera.updatePosition( -70, -290);  
  camera.updateOrbit(0.0, -3.0);
  camera.updateOrbit(120.0,  0.0);
  

  const renderer = new OpenGLRenderer(canvas);
  renderer.setClearColor(0, 0, 0, 1);
  gl.enable(gl.DEPTH_TEST);
  gl.frontFace(gl.CCW);
  renderer.setFrostNoiseTexture(new Texture("./src/resources/Noise/lichen_noise.jpg", false).texture);
  renderer.setFireNoiseTexture(new Texture("./src/resources/Noise/RGBANoise.jpg", false).texture);

  const standardDeferred = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/standard-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/standard-frag.glsl')),
    ]);

  standardDeferred.setupTexUnits(["AlbedoMap", "SpecularMap", "NormalMap"]);

  const leafDeferred = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/leaf-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/standard-frag.glsl')),
    ]);

  leafDeferred.setupTexUnits(["AlbedoMap", "SpecularMap", "NormalMap"]);

  const barkDeferred = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/bark-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/standard-frag.glsl')),
    ]);

  barkDeferred.setupTexUnits(["AlbedoMap", "SpecularMap", "NormalMap"]);


  const translucentDeferred = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/standard-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/translucent-frag.glsl')),
    ]);

  translucentDeferred.setupTexUnits(["AlbedoMap", "SpecularMap", "NormalMap"]);

  const standardShadowMapping = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/standard-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/shadow-frag.glsl')),
    ]);

  const leafShadowMapping = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/leaf-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/shadow-frag.glsl')),
    ]);


  const barkShadowMapping = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/bark-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/shadow-frag.glsl')),
    ]);

  const feedBackShader = new ShaderProgram([
      new Shader(gl.VERTEX_SHADER, require('./shaders/state-vert.glsl')),
      new Shader(gl.FRAGMENT_SHADER, require('./shaders/dummy-frag.glsl')),
      ],
      true,
      ['o_position', 'o_velocity', 'o_color', 'o_attract']);
  
  const particleRenderShader = new ShaderProgram([
      new Shader(gl.VERTEX_SHADER, require('./shaders/particle-vert.glsl')),
      new Shader(gl.FRAGMENT_SHADER, require('./shaders/particle-frag.glsl')),
        ]);


  const feedBackLanternShader = new ShaderProgram([
      new Shader(gl.VERTEX_SHADER, require('./shaders/state-Lantern-vert.glsl')),
      new Shader(gl.FRAGMENT_SHADER, require('./shaders/dummy-frag.glsl')),
      ],
      true,
      ['o_position', 'o_velocity', 'o_color', 'o_attract']);
      
  const particleLanternRenderShader = new ShaderProgram([
      new Shader(gl.VERTEX_SHADER, require('./shaders/particle-Lantern-vert.glsl')),
      new Shader(gl.FRAGMENT_SHADER, require('./shaders/particle-Lantern-frag.glsl')),
      ]);


      const feedBackBoatShader = new ShaderProgram([
        new Shader(gl.VERTEX_SHADER, require('./shaders/state-Boat-vert.glsl')),
        new Shader(gl.FRAGMENT_SHADER, require('./shaders/dummy-frag.glsl')),
        ],
        true,
        ['o_position', 'o_velocity', 'o_color', 'o_attract']);
        
    const particleBoatRenderShader = new ShaderProgram([
        new Shader(gl.VERTEX_SHADER, require('./shaders/particle-Boat-vert.glsl')),
        new Shader(gl.FRAGMENT_SHADER, require('./shaders/particle-Boat-frag.glsl')),
        ]);

    const feedBackLeavesShader = new ShaderProgram([
      new Shader(gl.VERTEX_SHADER, require('./shaders/state-Leaves-vert.glsl')),
      new Shader(gl.FRAGMENT_SHADER, require('./shaders/dummy-frag.glsl')),
      ],
      true,
      ['o_position', 'o_velocity', 'o_color', 'o_attract']);
      
    const particleLeavesRenderShader = new ShaderProgram([
      new Shader(gl.VERTEX_SHADER, require('./shaders/particle-Leaves-vert.glsl')),
      new Shader(gl.FRAGMENT_SHADER, require('./shaders/particle-Leaves-frag.glsl')),
      ]);

      const feedBackCloudShader = new ShaderProgram([
        new Shader(gl.VERTEX_SHADER, require('./shaders/state-Cloud-vert.glsl')),
        new Shader(gl.FRAGMENT_SHADER, require('./shaders/dummy-frag.glsl')),
        ],
        true,
        ['o_position', 'o_velocity', 'o_color', 'o_attract']);
        
    const particleCloudRenderShader = new ShaderProgram([
        new Shader(gl.VERTEX_SHADER, require('./shaders/particle-Cloud-vert.glsl')),
        new Shader(gl.FRAGMENT_SHADER, require('./shaders/particle-Cloud-frag.glsl')),
        ]);
 



  //let lightColor : vec4 = vec4.fromValues(1.0, 0.4, 0.05, 1.0);
  let lightColor : vec4 = vec4.fromValues(1.0, 1.0, 1.0, 2.0); // this is for shadow complement
  let lightPosition : vec4 = vec4.fromValues(0.0, 50.0, 0.0, 1.0);
  let lightD : vec3 = vec3.create();
  vec3.normalize(lightD, vec3.fromValues(-1.0, 0.4, 1.0));

  let lightDirection : vec4 = vec4.fromValues(lightD[0], lightD[1], lightD[2], 0.0);

  function getDirLightViewProj(lightDirection: vec4, lightPosition: vec4, projectionWidth: number, projectionHeight: number, near:number, far:number){
    let lightViewProj = mat4.create();
    let halfWidth = projectionWidth/2;
    let halfHeight = projectionHeight/2;
    mat4.ortho(lightViewProj, -halfWidth, halfWidth, -halfHeight, halfHeight, near, far);

    let lightViewMat : mat4 = mat4.create();
    let lightUp : vec3 = vec3.fromValues(0.0, 1.0, 0.0);
    let lightFocus : vec3 = vec3.create();
    let lightPos : vec3 = vec3.fromValues(lightPosition[0], lightPosition[1], lightPosition[2]);
    vec3.add(lightFocus, lightPos, vec3.fromValues(-lightDirection[0], -lightDirection[1], -lightDirection[2]));
    mat4.lookAt(lightViewMat, lightPos, lightFocus, lightUp);

    let lightViewProjMat : mat4 = mat4.create();
    mat4.multiply(lightViewProjMat, lightViewProj, lightViewMat); 

    return lightViewProjMat;
  }


  let lightViewProj = getDirLightViewProj(lightDirection, lightPosition, 750, 350, -350, 380);

  function tick() {
  
    //stats.begin();

    CheckTriggers(camera, camera.position, 315, 30, 20, timer.deltaTime);
    camera.update();

    timer.updateTime();
    renderer.updateTime(timer.deltaTime, timer.currentTime);
    
    //renderer.clear();
    renderer.clearGB();

    renderer.renderToGBuffer(camera, standardDeferred, leafDeferred, barkDeferred, [LS0, LS1, LS2, LS3, mesh_Leaf2, mesh_Bark2,m_shrines_balconis, m_shrines_colums, m_shrines_poles, m_shrines_gold, mesh_B_Outter, mesh_B_Inner, mesh0]);
    renderer.renderToShadowDepth(camera, standardShadowMapping, leafShadowMapping, barkShadowMapping, lightViewProj, [LS0, LS1, LS2, LS3, mesh_lake, mesh_Leaf2, mesh_Bark2, m_shrines_balconis, m_shrines_colums, m_shrines_poles, m_shrines_gold, mesh_B_Outter, mesh_B_Inner, mesh_B_Glass ]);

    renderer.renderToTranslucent(camera, translucentDeferred, [mesh_lake, mesh_B_Glass], skyCubeMap.cubemap_texture, lightViewProj, lightColor, lightDirection);
    renderer.renderFromGBuffer(camera, skyCubeMap.cubemap_texture, lightViewProj, lightColor, lightDirection);

    renderer.renderAddTranslucent();  
    renderer.renderSSR(camera, skyCubeMap.cubemap_texture,
                       controls.SSR_MaxStep, controls.SSR_Opaque_Intensity, controls.SSR_Trans_Intensity, controls.SSR_Threshold);

    
    renderer.renderSSRMip();
    
    for(var m = 0; m < 4; m++)
    {
      renderer.renderforHorizontalMipBlur(camera, m);
      renderer.renderforVerticaMipBlur(camera, m);
    } 

    renderer.renderClouds(camera, cloudQuad, particleCloud, lightColor, lightDirection, cloudsTexture.texture, cloudsNormalTexture.texture, mesh_lake.normalMap.texture, feedBackCloudShader, particleCloudRenderShader, controls.Clouds);
    renderer.renderBoatParticle(camera, mesh_Boat, particleBoatSys, feedBackBoatShader, particleBoatRenderShader);
    
    UpdateParticle(renderer, camera, particleLanternSys, feedBackLanternShader, particleLanternRenderShader, particleLeavesSys, feedBackLeavesShader, particleLeavesRenderShader, particleSys, feedBackShader, particleRenderShader);

    var bNRain = (0.0 >= controls.Rain_delaytoStartTimer);
    var bNSnow = (0.0 >= controls.Snow_delaytoStartTimer);
    var bNFire = (0.0 >= controls.Fire_delaytoStartTimer);

    renderer.renderforSavingCurrentFrame(camera);

    renderer.renderforHighLightCurrentFrame(camera);
    renderer.renderforHighLightLensFlare(camera);

    for(var  i = 0; i< controls.Bloom_Iteration; i++)
    {
      renderer.renderforHorizontalBlur(camera, i);
      renderer.renderforVerticalBlur(camera);
    }

    renderer.renderforLensFlare(camera, controls.Bloom_Dispersal, controls.Bloom_Distortion);

    for(var  i = 0; i< 2; i++)
    {
      renderer.renderforLensflareHorizontalBlur(camera, i);
      renderer.renderforLensflareVerticalBlur(camera);
    }

    renderer.renderTonemapping(camera, controls.Bloom_Dispersal, controls.Bloom_Distortion, controls.Temperature );
    
    if(!bNRain)
      renderer.renderRainy(controls.Rain_delaytoStartTimer);   
    else if(!bNSnow)
      renderer.renderFrost(controls.Snow_delaytoStartTimer);
    else if (!bNFire)
      renderer.renderFire(controls.Fire_delaytoStartTimer);
    else
      renderer.renderPresent(camera);

    //stats.end();
    
    requestAnimationFrame(tick);
  }

  window.addEventListener('resize', function() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.setAspectRatio(window.innerWidth / window.innerHeight);
    camera.updateProjectionMatrix();
  }, false);

  window.addEventListener('contextmenu', function(ev) {
    if (ev.button === 2) {
     ev.preventDefault();
      return false;
    }
}, false);

  window.addEventListener('mousedown', function(ev) {
    
    if (ev.button == 0)
      camera.bLeftClick = true;
    if (ev.button == 1)
      camera.bMiddleClick = true;
    if (ev.button == 2)
      camera.bRightClick = true;

  }, false);

  window.addEventListener('mousemove', function(ev) {
    
    if (ev.button == 0 && camera.bLeftClick)
    {
      camera.updateOrbit(-ev.movementX * timer.deltaTime * 10.0, -ev.movementY * timer.deltaTime * 10.0);
    }

  }, false);

  window.addEventListener('mouseup', function(ev) {
    
    if (ev.button == 0)
      camera.bLeftClick = false;
    if (ev.button == 1)
      camera.bMiddleClick = false;
     if (ev.button == 2)
      camera.bRightClick = false;

  }, false);

  window.addEventListener('mousewheel', function(ev) {
    
    camera.updatePosition(0.0, -timer.deltaTime * ev.wheelDeltaY);

  }, false);

  window.addEventListener('keydown', function(ev) {
    
    if (ev.keyCode !== undefined) {      
      
      if (String.fromCharCode(ev.keyCode) == 'W')
      {
        camera.bForward = true;
      }
      if (String.fromCharCode(ev.keyCode) == 'A')
      {
        camera.bLeft = true;
      }
      if (String.fromCharCode(ev.keyCode) == 'S')
      {
        camera.bBackward = true;
      }
      if (String.fromCharCode(ev.keyCode) == 'D')
      {
        camera.bRight = true;
      }
    }

  }, false);

  window.addEventListener('keyup', function(ev) {
    
    if (ev.keyCode !== undefined) {      

      if (String.fromCharCode(ev.keyCode) == 'W')
      {
        camera.bForward = false;
      }
      else if (String.fromCharCode(ev.keyCode) == 'A')
      {
        camera.bLeft = false;
      }
      else if (String.fromCharCode(ev.keyCode) == 'S')
      {
        camera.bBackward = false;
      }
      else if (String.fromCharCode(ev.keyCode) == 'D')
      {
        camera.bRight = false;
      }
    }

  }, false);

  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.setAspectRatio(window.innerWidth / window.innerHeight);
  camera.updateProjectionMatrix();

  // Start the render loop
  tick();
}


  

function setup() {
  timer.startTime = Date.now();
  loadOBJText();
  main();
}

setup();
