import { vec3, mat4, vec4 } from 'gl-matrix';
import * as Stats from 'stats-js';
import * as DAT from 'dat-gui';
import Square from './geometry/Square';
import Mesh from './geometry/Mesh';
import OpenGLRenderer from './rendering/gl/OpenGLRenderer';
import Camera from './Camera';
import { setGL } from './globals';
import { readTextFile } from './globals';
import ShaderProgram, { Shader } from './rendering/gl/ShaderProgram';
import Texture from './rendering/gl/Texture';
import Particle from './particle/Particle';
import Quad from './geometry/Quad';
import { LSystem } from './LSystem';
// Define an object with application parameters and button callbacks
const controls = {
    SSR_MaxStep: 128,
    SSR_Opaque_Intensity: 0.2,
    SSR_Trans_Intensity: 0.2,
    SSR_Threshold: 3.0,
    Bloom_Iteration: 16,
    Bloom_Dispersal: 0.5,
    Bloom_Distortion: 8.0,
    FireFly: false,
    Rain: false,
    Lantern: true,
    Clouds: true,
    Temperature: 10000,
};
let square;
let particleQuad;
let cloudQuad;
// TODO: replace with your scene's stuff
let obj0;
let mesh0;
let mesh1;
let mesh2;
let obj_lake;
let mesh_lake;
let obj_holodeck;
let mesh_holodeck;
let mesh_holodeck2;
let obj_B_Outter;
let mesh_B_Outter;
let obj_B_Inner;
let mesh_B_Inner;
let obj_B_Glass;
let mesh_B_Glass;
let obj_Leaf;
let obj_Bark;
let obj_Leaf2;
let obj_Bark2;
let ply_Leaf;
let ply_Bark;
let ply_Leaf2;
let ply_Bark2;
let obj_Lantern;
//Road
let obj_ExampleRoad;
export let mesh_ExampleRoad;
let obj_ExampleRoad2;
export let mesh_ExampleRoad2;
export let road_Mesh_Map;
let mesh_Leaf;
let mesh_Bark;
let mesh_Leaf2;
let mesh_Bark2;
let mesh_Test;
let mesh_Lantern;
let skyCubeMap;
let cloudsTexture;
let cloudsNormalTexture;
let numParticle = 32768; //Bilboard
let numCloud = 2048;
let numLatern = 1024;
let LS;
let LS1;
let LS2;
var timer = {
    deltaTime: 0.0,
    startTime: 0.0,
    currentTime: 0.0,
    updateTime: function () {
        var t = Date.now();
        t = (t - timer.startTime) * 0.001;
        timer.deltaTime = t - timer.currentTime;
        timer.currentTime = t;
    },
};
function loadOBJText() {
    obj0 = readTextFile('./src/resources/objs/mario/models/wahoo.obj');
    obj_lake = readTextFile('./src/resources/objs/lake/models/lake.obj');
    obj_holodeck = readTextFile('./src/resources/objs/holodeck/models/holodeck.obj');
    obj_B_Outter = readTextFile('./src/resources/objs/B_Side/models/b_Outter_v2.obj');
    obj_B_Inner = readTextFile('./src/resources/objs/B_Side/models/b_Inner_v2.obj');
    obj_B_Glass = readTextFile('./src/resources/objs/B_Side/models/b_Glass_v2.obj');
    ply_Leaf = readTextFile('./src/resources/objs/tree/models/leaf01.ply');
    ply_Bark = readTextFile('./src/resources/objs/tree/models/bark01.ply');
    ply_Leaf2 = readTextFile('./src/resources/objs/tree/models/leaf02.ply');
    ply_Bark2 = readTextFile('./src/resources/objs/tree/models/bark02.ply');
    obj_Leaf = readTextFile('./src/resources/objs/tree/models/leaf01.obj');
    obj_Bark = readTextFile('./src/resources/objs/tree/models/bark01.obj');
    obj_Leaf2 = readTextFile('./src/resources/objs/tree/models/leaf02.obj');
    obj_Bark2 = readTextFile('./src/resources/objs/tree/models/bark02.obj');
    obj_Lantern = readTextFile('./src/resources/objs/lantern/models/lantern.obj');
    obj_ExampleRoad = readTextFile('./src/resources/objs/road/models/example_road.obj');
    obj_ExampleRoad2 = readTextFile('./src/resources/objs/road/models/example_road2.obj');
}
function loadRoadMap() {
    road_Mesh_Map = new Map();
    let objText = readTextFile('./src/resources/objs/road/models/example_road.obj');
    let mesh = new Mesh(objText, vec3.fromValues(0, 0, 0), new Texture('./src/resources/objs/B_Side/textures/Outter_Albedo.png', false), new Texture('./src/resources/objs/B_Side/textures/Outter_Specular.png', false), new Texture('./src/resources/objs/B_Side/textures/Outter_Normal.png', false));
    mesh.create();
    mesh = new Mesh(objText, vec3.fromValues(0, 0, 0), new Texture('./src/resources/objs/B_Side/textures/Outter_Albedo.png', false), new Texture('./src/resources/objs/B_Side/textures/Outter_Specular.png', false), new Texture('./src/resources/objs/B_Side/textures/Outter_Normal.png', false));
    mesh.create();
}
function loadScene() {
    square && square.destroy();
    mesh0 && mesh0.destroy();
    skyCubeMap = new Texture('./src/resources/objs/skybox/nightSky_', true);
    skyCubeMap.loadCubeImg('./src/resources/objs/skybox/nightSky_', 0);
    skyCubeMap.loadCubeImg('./src/resources/objs/skybox/nightSky_', 1);
    skyCubeMap.loadCubeImg('./src/resources/objs/skybox/nightSky_', 2);
    skyCubeMap.loadCubeImg('./src/resources/objs/skybox/nightSky_', 3);
    skyCubeMap.loadCubeImg('./src/resources/objs/skybox/nightSky_', 4);
    skyCubeMap.loadCubeImg('./src/resources/objs/skybox/nightSky_', 5);
    cloudsTexture = new Texture('./src/resources/clouds/clouds.png', false);
    cloudsNormalTexture = new Texture('./src/resources/clouds/clouds_Normal.png', false);
    square = new Square(vec3.fromValues(0, 0, 0));
    square.create();
    particleQuad = new Quad(vec3.fromValues(0, 0, 0));
    particleQuad.create();
    cloudQuad = new Quad(vec3.fromValues(0, 0, 0));
    cloudQuad.create();
    mesh0 = new Mesh(obj0, vec3.fromValues(0, 0, 0), new Texture('./src/resources/objs/mario/textures/wahoo.png', false), new Texture('./src/resources/objs/mario/textures/wahoo_Spec.png', false), new Texture('./src/resources/objs/mario/textures/wahoo_Norm.png', false));
    mesh0.create();
    mesh0.translate(vec3.fromValues(-100.0, 30.0, 0.0));
    mesh1 = new Mesh(obj0, vec3.fromValues(0, 0, 0), new Texture('./src/resources/objs/mario/textures/wahoo.png', false), new Texture('./src/resources/objs/mario/textures/wahoo_Spec.png', false), new Texture('./src/resources/objs/mario/textures/wahoo_Norm.png', false));
    mesh1.create();
    mesh_lake = new Mesh(obj_lake, vec3.fromValues(0, 0, 0), new Texture('./src/resources/objs/lake/textures/albedo.png', false), new Texture('./src/resources/objs/lake/textures/specular2.png', false), new Texture('./src/resources/objs/lake/textures/normal.png', false));
    mesh_lake.create();
    mesh_lake.translate(vec3.fromValues(0.0, -2.0, 0.0));
    mesh_holodeck = new Mesh(obj_holodeck, vec3.fromValues(0, 0, 0), new Texture('./src/resources/objs/holodeck/textures/wall.png', false), new Texture('./src/resources/objs/holodeck/textures/wall_Specular.png', false), new Texture('./src/resources/objs/holodeck/textures/wall_Normal.png', false));
    mesh_holodeck.create();
    mesh_holodeck2 = new Mesh(obj_holodeck, vec3.fromValues(0, 0, 0), new Texture('./src/resources/objs/holodeck/textures/wall02.png', false), new Texture('./src/resources/objs/holodeck/textures/wall_Specular.png', false), new Texture('./src/resources/objs/holodeck/textures/wall_Normal.png', false));
    mesh_holodeck2.create();
    mesh_holodeck2.translate(vec3.fromValues(-100.0, 0.0, 0.0));
    mesh_B_Outter = new Mesh(obj_B_Outter, vec3.fromValues(0, 0, 0), new Texture('./src/resources/objs/B_Side/textures/Outter_Albedo.png', false), new Texture('./src/resources/objs/B_Side/textures/Outter_Specular.png', false), new Texture('./src/resources/objs/B_Side/textures/Outter_Normal.png', false));
    mesh_B_Outter.create();
    mesh_B_Outter.scale(vec3.fromValues(3, 3, 3));
    mesh_B_Inner = new Mesh(obj_B_Inner, vec3.fromValues(0, 0, 0), new Texture('./src/resources/objs/B_Side/textures/Inner_Albedo.png', false), new Texture('./src/resources/objs/B_Side/textures/Inner_Specular.png', false), new Texture('./src/resources/objs/B_Side/textures/Inner_Normal.png', false));
    mesh_B_Inner.create();
    mesh_B_Inner.scale(vec3.fromValues(3, 3, 3));
    mesh_B_Glass = new Mesh(obj_B_Glass, vec3.fromValues(0, 0, 0), new Texture('./src/resources/objs/B_Side/textures/Glass_Albedo.png', false), new Texture('./src/resources/objs/B_Side/textures/Glass_Specular.png', false), new Texture('./src/resources/objs/B_Side/textures/Normal.png', false));
    mesh_B_Glass.create();
    mesh_B_Glass.scale(vec3.fromValues(3, 3, 3));
    // Create By PLY format
    mesh_Leaf = new Mesh(obj_Leaf, vec3.fromValues(-50, 2, 25), new Texture('./src/resources/objs/tree/textures/Leaf_png/leaf_Tex_Tree22.png', false), new Texture('./src/resources/objs/tree/textures/Leaf_png/specular.png', false), new Texture('./src/resources/objs/tree/textures/Leaf_png/Normal_Tex_Tree0.png', false));
    mesh_Leaf.createByPly(1, ply_Leaf);
    mesh_Bark = new Mesh(obj_Bark, vec3.fromValues(-50, 2, 25), new Texture('./src/resources/objs/tree/textures/Bark_png/BroadleafBark_Tex_Tree0.png', false), new Texture('./src/resources/objs/tree/textures/Bark_png/specular.png', false), new Texture('./src/resources/objs/tree/textures/Bark_png/BroadleafBark_Normal_Tex_Tree0.png', false));
    mesh_Bark.createByPly(2, ply_Bark);
    mesh_Leaf2 = new Mesh(obj_Leaf2, vec3.fromValues(10, 0, 0), new Texture('./src/resources/objs/tree/textures/Leaf_png/leaf_Tex_Tree2.png', false), new Texture('./src/resources/objs/tree/textures/Leaf_png/specular.png', false), new Texture('./src/resources/objs/tree/textures/Leaf_png/Normal_Tex_Tree2.png', false));
    mesh_Leaf2.createByPly(1, ply_Leaf2);
    mesh_Bark2 = new Mesh(obj_Bark2, vec3.fromValues(10, 0, 0), new Texture('./src/resources/objs/tree/textures/Bark_png/BroadleafBark_Tex_Tree2.png', false), new Texture('./src/resources/objs/tree/textures/Bark_png/specular.png', false), new Texture('./src/resources/objs/tree/textures/Bark_png/BroadleafBark_Normal_Tex_Tree2.png', false));
    mesh_Bark2.createByPly(2, ply_Bark2);
    mesh_Lantern = new Mesh(obj_Lantern, vec3.fromValues(10, 0, 0), new Texture('./src/resources/objs/lantern/textures/lantern.png', false), new Texture('./src/resources/objs/lantern/textures/lantern.png', false), new Texture('./src/resources/objs/lantern/textures/Normal.png', false));
    mesh_Lantern.create();
    LS = new LSystem(vec3.fromValues(60, 0, 0), new Texture('./src/resources/objs/B_Side/textures/Outter_Albedo.png', false), new Texture('./src/resources/objs/B_Side/textures/Outter_Specular.png', false), new Texture('./src/resources/objs/B_Side/textures/Outter_Normal.png', false));
    let program = "X\nX->F+*[[X]-X]-F*[-FX]+X\nF->FF\n";
    LS.loadProgramFromString(program);
    LS.setDefaultStep(20.5);
    LS.setDefaultAngle(75);
    LS.setInitialDirection(90);
    LS.process(1);
    LS.create();
    console.log(LS);
    LS1 = new LSystem(vec3.fromValues(-50, 0, -10), new Texture('./src/resources/objs/B_Side/textures/Outter_Albedo.png', false), new Texture('./src/resources/objs/B_Side/textures/Outter_Specular.png', false), new Texture('./src/resources/objs/B_Side/textures/Outter_Normal.png', false));
    program = "X\nX->F+*[[X]-X]-F*[-FX]+X\nF->FF\n";
    LS1.loadProgramFromString(program);
    LS1.setDefaultStep(20.5);
    LS1.setDefaultAngle(75);
    LS1.setInitialDirection(-105);
    LS1.process(1);
    LS1.create();
    console.log(LS1);
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
    SSR.add(controls, 'SSR_Opaque_Intensity', 0.0, 1.0).step(0.01);
    SSR.add(controls, 'SSR_Trans_Intensity', 0.0, 1.0).step(0.01);
    SSR.add(controls, 'SSR_Threshold', 0.0, 10.0).step(0.1);
    var BLOOM = gui.addFolder('BLOOM');
    BLOOM.add(controls, 'Bloom_Iteration', 0, 32).step(1);
    BLOOM.add(controls, 'Bloom_Dispersal', 0.0, 20.0).step(0.01);
    BLOOM.add(controls, 'Bloom_Distortion', 0.0, 16.0).step(0.1);
    var PARTICLE = gui.addFolder('Particle');
    PARTICLE.add(controls, 'FireFly');
    PARTICLE.add(controls, 'Rain');
    PARTICLE.add(controls, 'Lantern');
    PARTICLE.add(controls, 'Clouds');
    var ENVIRONMENT = gui.addFolder('Environment');
    ENVIRONMENT.add(controls, 'Temperature', 0, 10000).step(1);
    // get canvas and webgl context
    const canvas = document.getElementById('canvas');
    const gl = canvas.getContext('webgl2');
    if (!gl) {
        alert('WebGL 2 not supported!');
    }
    // `setGL` is a function imported above which sets the value of `gl` in the `globals.ts` module.
    // Later, we can import `gl` from `globals.ts` to access it
    setGL(gl);
    // Initial call to load scene
    loadScene();
    const particleSys = new Particle(numParticle);
    particleSys.initialize(150.0, 0.0, 100.0, 0.0, 150.0, 0.0, 0.5, 0.5, 0.7, 0.3, 1.0, -3.0);
    const particleCloud = new Particle(numCloud);
    particleCloud.initialize(50000.0, 0.0, 3000.0, 3000.0, 50000.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0);
    const particleLanternSys = new Particle(numLatern);
    particleLanternSys.initialize(150.0, 0.0, 100.0, 0.0, 150.0, 0.0, 0.5, 0.5, 0.7, 0.3, 1.0, -3.0);
    const camera = new Camera();
    camera.updateOrbit(0.0, -60.0);
    camera.updatePosition(-10, 6);
    camera.updateOrbit(0.0, 60.0);
    const renderer = new OpenGLRenderer(canvas);
    renderer.setClearColor(0, 0, 0, 1);
    gl.enable(gl.DEPTH_TEST);
    gl.frontFace(gl.CCW);
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
    ], true, ['o_position', 'o_velocity', 'o_color', 'o_attract']);
    const particleRenderShader = new ShaderProgram([
        new Shader(gl.VERTEX_SHADER, require('./shaders/particle-vert.glsl')),
        new Shader(gl.FRAGMENT_SHADER, require('./shaders/particle-frag.glsl')),
    ]);
    const feedBackLanternShader = new ShaderProgram([
        new Shader(gl.VERTEX_SHADER, require('./shaders/state-Lantern-vert.glsl')),
        new Shader(gl.FRAGMENT_SHADER, require('./shaders/dummy-frag.glsl')),
    ], true, ['o_position', 'o_velocity', 'o_color', 'o_attract']);
    const particleLanternRenderShader = new ShaderProgram([
        new Shader(gl.VERTEX_SHADER, require('./shaders/particle-Lantern-vert.glsl')),
        new Shader(gl.FRAGMENT_SHADER, require('./shaders/particle-Lantern-frag.glsl')),
    ]);
    const feedBackCloudShader = new ShaderProgram([
        new Shader(gl.VERTEX_SHADER, require('./shaders/state-Cloud-vert.glsl')),
        new Shader(gl.FRAGMENT_SHADER, require('./shaders/dummy-frag.glsl')),
    ], true, ['o_position', 'o_velocity', 'o_color', 'o_attract']);
    const particleCloudRenderShader = new ShaderProgram([
        new Shader(gl.VERTEX_SHADER, require('./shaders/particle-Cloud-vert.glsl')),
        new Shader(gl.FRAGMENT_SHADER, require('./shaders/particle-Cloud-frag.glsl')),
    ]);
    //let lightColor : vec4 = vec4.fromValues(1.0, 0.4, 0.05, 1.0);
    let lightColor = vec4.fromValues(1.0, 1.0, 1.0, 2.0);
    let lightPosition = vec4.fromValues(0.0, 0.0, 0.0, 1.0);
    let lightD = vec3.create();
    vec3.normalize(lightD, vec3.fromValues(-0.53, 0.2, 1.0));
    let lightDirection = vec4.fromValues(lightD[0], lightD[1], lightD[2], 0.0);
    function getDirLightViewProj(lightDirection, lightPosition, projectionWidth, projectionHeight, near, far) {
        let lightViewProj = mat4.create();
        let halfWidth = projectionWidth / 2;
        let halfHeight = projectionHeight / 2;
        mat4.ortho(lightViewProj, -halfWidth, halfWidth, -halfHeight, halfHeight, near, far);
        let lightViewMat = mat4.create();
        let lightUp = vec3.fromValues(0.0, 1.0, 0.0);
        let lightFocus = vec3.create();
        let lightPos = vec3.fromValues(lightPosition[0], lightPosition[1], lightPosition[2]);
        vec3.add(lightFocus, lightPos, vec3.fromValues(-lightDirection[0], -lightDirection[1], -lightDirection[2]));
        mat4.lookAt(lightViewMat, lightPos, lightFocus, lightUp);
        let lightViewProjMat = mat4.create();
        mat4.multiply(lightViewProjMat, lightViewProj, lightViewMat);
        return lightViewProjMat;
    }
    let lightViewProj = getDirLightViewProj(lightDirection, lightPosition, 400, 400, -100, 300);
    function tick() {
        camera.update(timer.deltaTime);
        stats.begin();
        gl.viewport(0, 0, window.innerWidth, window.innerHeight);
        timer.updateTime();
        renderer.updateTime(timer.deltaTime, timer.currentTime);
        renderer.clear();
        renderer.clearGB();
        renderer.renderToGBuffer(camera, standardDeferred, leafDeferred, barkDeferred, [LS, LS1, mesh1, mesh_B_Outter, mesh_B_Inner, mesh_Leaf, mesh_Bark, mesh_Leaf2, mesh_Bark2]);
        //renderer.renderToGBuffer(camera, standardDeferred, leafDeferred, barkDeferred, [LS]);
        renderer.renderToShadowDepth(camera, standardShadowMapping, leafShadowMapping, barkShadowMapping, lightViewProj, [LS, LS1, mesh1, mesh_B_Outter, mesh_B_Inner, mesh_B_Glass, mesh_Leaf, mesh_Bark, mesh_Leaf2, mesh_Bark2]);
        //renderer.renderToShadowDepth(camera, standardShadowMapping, leafShadowMapping, barkShadowMapping, lightViewProj, [LS]);
        renderer.renderToTranslucent(camera, translucentDeferred, [mesh_lake, mesh_B_Glass], skyCubeMap.cubemap_texture, lightColor, lightDirection);
        //renderer.renderToTranslucent(camera, translucentDeferred, [ mesh_lake], skyCubeMap.cubemap_texture, lightColor, lightDirection);
        renderer.renderFromGBuffer(camera, skyCubeMap.cubemap_texture, lightViewProj, lightColor, lightDirection);
        renderer.renderAddTranslucent();
        renderer.renderSSR(camera, skyCubeMap.cubemap_texture, controls.SSR_MaxStep, controls.SSR_Opaque_Intensity, controls.SSR_Trans_Intensity, controls.SSR_Threshold);
        renderer.renderSSRMip();
        renderer.renderLanternParticle(camera, mesh_Lantern, particleLanternSys, feedBackLanternShader, particleLanternRenderShader, controls.Lantern);
        renderer.renderClouds(camera, cloudQuad, particleCloud, lightColor, lightDirection, cloudsTexture.texture, cloudsNormalTexture.texture, mesh_lake.normalMap.texture, feedBackCloudShader, particleCloudRenderShader, controls.Clouds);
        renderer.renderParticle(camera, particleQuad, particleSys, feedBackShader, particleRenderShader, controls.FireFly, controls.Rain);
        renderer.renderforSavingCurrentFrame(camera);
        renderer.renderforHighLightCurrentFrame(camera);
        for (var i = 0; i < controls.Bloom_Iteration; i++) {
            renderer.renderforHorizontalBlur(camera, i);
            renderer.renderforVerticalBlur(camera);
        }
        renderer.renderTonemapping(camera, controls.Bloom_Dispersal, controls.Bloom_Distortion, controls.Temperature);
        renderer.renderPresent(camera);
        stats.end();
        requestAnimationFrame(tick);
    }
    window.addEventListener('resize', function () {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.setAspectRatio(window.innerWidth / window.innerHeight);
        camera.updateProjectionMatrix();
    }, false);
    window.addEventListener('contextmenu', function (ev) {
        if (ev.button === 2) {
            ev.preventDefault();
            return false;
        }
    }, false);
    window.addEventListener('mousedown', function (ev) {
        if (ev.button == 0)
            camera.bLeftClick = true;
        if (ev.button == 1)
            camera.bMiddleClick = true;
        if (ev.button == 2)
            camera.bRightClick = true;
    }, false);
    window.addEventListener('mousemove', function (ev) {
        if (ev.button == 0 && camera.bLeftClick) {
            camera.updateOrbit(-ev.movementX * timer.deltaTime * 10.0, -ev.movementY * timer.deltaTime * 10.0);
        }
    }, false);
    window.addEventListener('mouseup', function (ev) {
        if (ev.button == 0)
            camera.bLeftClick = false;
        if (ev.button == 1)
            camera.bMiddleClick = false;
        if (ev.button == 2)
            camera.bRightClick = false;
    }, false);
    window.addEventListener('mousewheel', function (ev) {
        camera.updatePosition(0.0, -timer.deltaTime * ev.wheelDeltaY);
    }, false);
    window.addEventListener('keydown', function (ev) {
        if (ev.keyCode !== undefined) {
            if (String.fromCharCode(ev.keyCode) == 'W') {
                camera.bForward = true;
            }
            if (String.fromCharCode(ev.keyCode) == 'A') {
                camera.bLeft = true;
            }
            if (String.fromCharCode(ev.keyCode) == 'S') {
                camera.bBackward = true;
            }
            if (String.fromCharCode(ev.keyCode) == 'D') {
                camera.bRight = true;
            }
        }
    }, false);
    window.addEventListener('keyup', function (ev) {
        if (ev.keyCode !== undefined) {
            if (String.fromCharCode(ev.keyCode) == 'W') {
                camera.bForward = false;
            }
            else if (String.fromCharCode(ev.keyCode) == 'A') {
                camera.bLeft = false;
            }
            else if (String.fromCharCode(ev.keyCode) == 'S') {
                camera.bBackward = false;
            }
            else if (String.fromCharCode(ev.keyCode) == 'D') {
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
//# sourceMappingURL=main.js.map