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

// Define an object with application parameters and button callbacks
const controls = {
   
  SSR_MaxStep : 128,
  SSR_Opaque_Intensity : 0.05,
  SSR_Trans_Intensity : 0.1,
  SSR_Threshold : 2.0
  
};

let square: Square;

// TODO: replace with your scene's stuff

let obj0: string;
let mesh0: Mesh;

let mesh1: Mesh;

let obj_lake: string;
let mesh_lake: Mesh;

let obj_holodeck: string;
let mesh_holodeck: Mesh;

let obj_B_Outter: string;
let mesh_B_Outter: Mesh;

let obj_B_Inner: string;
let mesh_B_Inner: Mesh;

let obj_B_Glass: string;
let mesh_B_Glass: Mesh;

let skyCubeMap: Texture;

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


function loadOBJText() {
  obj0 = readTextFile('./src/resources/objs/mario/models/wahoo.obj');
  obj_lake = readTextFile('./src/resources/objs/lake/models/lake.obj');
  obj_holodeck = readTextFile('./src/resources/objs/holodeck/models/holodeck.obj');

  obj_B_Outter = readTextFile('./src/resources/objs/B_Side/models/b_Outter.obj');
  obj_B_Inner = readTextFile('./src/resources/objs/B_Side/models/b_Inner.obj');
  obj_B_Glass = readTextFile('./src/resources/objs/B_Side/models/b_Glass.obj');
}


function loadScene() {
  square && square.destroy();
  mesh0 && mesh0.destroy();

  skyCubeMap = new Texture('./src/resources/objs/skybox/middaySky_', true);
  skyCubeMap.loadCubeImg('./src/resources/objs/skybox/middaySky_', 0);
  skyCubeMap.loadCubeImg('./src/resources/objs/skybox/middaySky_', 1);
  skyCubeMap.loadCubeImg('./src/resources/objs/skybox/middaySky_', 2);
  skyCubeMap.loadCubeImg('./src/resources/objs/skybox/middaySky_', 3);
  skyCubeMap.loadCubeImg('./src/resources/objs/skybox/middaySky_', 4);
  skyCubeMap.loadCubeImg('./src/resources/objs/skybox/middaySky_', 5);
  
  square = new Square(vec3.fromValues(0, 0, 0));
  square.create();

  mesh0 = new Mesh(obj0, vec3.fromValues(0, 0, 0),
   new Texture('./src/resources/objs/mario/textures/wahoo.bmp', false),
    new Texture('./src/resources/objs/mario/textures/wahoo_Spec.png', false),
     new Texture('./src/resources/objs/mario/textures/wahoo_Norm.png', false));
  mesh0.create();

  mesh0.translate( vec3.fromValues(-100.0, 0.0, 0.0) );

  mesh1 = new Mesh(obj0, vec3.fromValues(0, 0, 0),
  new Texture('./src/resources/objs/mario/textures/wahoo.bmp', false),
   new Texture('./src/resources/objs/mario/textures/wahoo_Spec.png', false),
    new Texture('./src/resources/objs/mario/textures/wahoo_Norm.png', false));
    mesh1.create();

  mesh_lake = new Mesh(obj_lake, vec3.fromValues(0, 0, 0),
   new Texture('./src/resources/objs/lake/textures/albedo.png', false),
    new Texture('./src/resources/objs/lake/textures/specular2.png', false),
     new Texture('./src/resources/objs/lake/textures/normal.png', false));
     mesh_lake.create();

  mesh_holodeck = new Mesh(obj_holodeck, vec3.fromValues(0, 0, 0),
   new Texture('./src/resources/objs/holodeck/textures/wall.png', false),
    new Texture('./src/resources/objs/holodeck/textures/wall_Specular.png', false),
     new Texture('./src/resources/objs/holodeck/textures/wall_Normal.png', false));
     mesh_holodeck.create();

  mesh_B_Outter = new Mesh(obj_B_Outter, vec3.fromValues(0, 0, 0),
  new Texture('./src/resources/objs/B_Side/textures/Outter_Albedo.png', false),
   new Texture('./src/resources/objs/B_Side/textures/Outter_Specular.png', false),
    new Texture('./src/resources/objs/B_Side/textures/Outter_Normal.png', false));
    mesh_B_Outter.create();

    mesh_B_Outter.scale(vec3.fromValues(10, 10, 10));

  mesh_B_Inner = new Mesh(obj_B_Inner, vec3.fromValues(0, 0, 0),
   new Texture('./src/resources/objs/B_Side/textures/Inner_Albedo.png', false),
   new Texture('./src/resources/objs/B_Side/textures/Inner_Specular.png', false),
   new Texture('./src/resources/objs/B_Side/textures/Normal.png', false));
   mesh_B_Inner.create();

   mesh_B_Inner.scale(vec3.fromValues(10, 10, 10));

  mesh_B_Glass = new Mesh(obj_B_Glass, vec3.fromValues(0, 0, 0),
    new Texture('./src/resources/objs/B_Side/textures/Glass_Albedo.png', false),
    new Texture('./src/resources/objs/B_Side/textures/Glass_Specular.png', false),
    new Texture('./src/resources/objs/B_Side/textures/Normal.png', false));
    mesh_B_Glass.create();

    mesh_B_Glass.scale(vec3.fromValues(10, 10, 10));

 
  
}


function main() {
  // Initial display for framerate
  const stats = Stats();
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);

  // Add controls to the gui
  // Add controls to the gui
  const gui = new DAT.GUI();

  var SSR = gui.addFolder('SSR');  
  SSR.add(controls, 'SSR_MaxStep', 16.0, 256.0).step(1);
  SSR.add(controls, 'SSR_Opaque_Intensity', 0.0, 0.2).step(0.01);
  SSR.add(controls, 'SSR_Trans_Intensity', 0.0, 1.0).step(0.01);
  SSR.add(controls, 'SSR_Threshold', 1.0, 4.0).step(0.1);

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

  const camera = new Camera();
  camera.updateOrbit(0.0, -30.0);
  camera.updatePosition( 0, 20);
  camera.updateOrbit(0.0, 30.0);
  

  const renderer = new OpenGLRenderer(canvas);
  renderer.setClearColor(0, 0, 0, 1);
  gl.enable(gl.DEPTH_TEST);
  gl.frontFace(gl.CCW);

  const standardDeferred = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/standard-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/standard-frag.glsl')),
    ]);

  standardDeferred.setupTexUnits(["AlbedoMap", "SpecularMap", "NormalMap"]);


  const translucentDeferred = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/standard-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/translucent-frag.glsl')),
    ]);

  translucentDeferred.setupTexUnits(["AlbedoMap", "SpecularMap", "NormalMap"]);

  let lightColor : vec4 = vec4.fromValues(1.0, 1.0, 1.0, 1.0);
  let lightPosition : vec4 = vec4.fromValues(0.0, 0.0, 0.0, 1.0);
  let lightDirection : vec4 = vec4.fromValues(1.0, 1.0, 1.0, 0.0);


  function tick() {

    camera.update(timer.deltaTime);
    stats.begin();
    gl.viewport(0, 0, window.innerWidth, window.innerHeight);
    timer.updateTime();
    renderer.updateTime(timer.deltaTime, timer.currentTime);

    renderer.clear();
    renderer.clearGB();

    renderer.renderToGBuffer(camera, standardDeferred, [mesh_B_Outter, mesh_B_Inner]);
    renderer.renderToTranslucent(camera, translucentDeferred, [mesh_lake, mesh_B_Glass], skyCubeMap.cubemap_texture, lightColor, lightDirection);

    renderer.renderFromGBuffer(camera, skyCubeMap.cubemap_texture, lightColor, lightDirection);

    renderer.renderAddTranslucent();    

    renderer.renderSSR(camera, skyCubeMap.cubemap_texture,
                       controls.SSR_MaxStep, controls.SSR_Opaque_Intensity, controls.SSR_Trans_Intensity, controls.SSR_Threshold);
    renderer.renderSSRMip();

    renderer.renderforSavingCurrentFrame(camera);
    renderer.renderTonemapping(camera);
   
    renderer.renderPresent(camera);
    
    stats.end();
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
