import { vec3, vec4, mat4, quat } from 'gl-matrix';
import { Turtle } from './Turtle';
import Drawable from './rendering/gl/Drawable';
import { gl } from './globals';
import { mesh_ExampleRoad, mesh_ExampleRoad2 } from './main';
export class Branch {
    constructor(sPos, ePos, bRadius = 0.1, tRadius = 0.1) {
        this.startPos = sPos;
        this.endPos = ePos;
        this.bottomRadius = bRadius;
        this.topRadius = tRadius;
    }
}
export class Geometry {
    constructor(pos, type) {
        this.position = pos;
        this.type = type;
    }
}
export class LSystem extends Drawable {
    constructor(center, albedoTexture, specularTexture, normalTexture) {
        super();
        this.Branches = [];
        this.Geometries = [];
        this.DefaultAngle = 22.5;
        this.DefaultStep = 1.0;
        this.Iterations = [];
        this.posArray = [];
        this.norArray = [];
        this.uvsArray = [];
        this.idxArray = [];
        this.Productions = new Map();
        this.center = vec4.fromValues(center[0], center[1], center[2], 1);
        this.albedoMap = albedoTexture;
        this.specularMap = specularTexture;
        this.normalMap = normalTexture;
    }
    create() {
        this.indices = new Uint32Array(this.idxArray);
        this.normals = new Float32Array(this.norArray);
        this.positions = new Float32Array(this.posArray);
        this.uvs = new Float32Array(this.uvsArray);
        this.generateIdx();
        this.generatePos();
        this.generateNor();
        this.generateUV();
        this.count = this.indices.length;
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.bufIdx);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.bufNor);
        gl.bufferData(gl.ARRAY_BUFFER, this.normals, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.bufPos);
        gl.bufferData(gl.ARRAY_BUFFER, this.positions, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.bufUV);
        gl.bufferData(gl.ARRAY_BUFFER, this.uvs, gl.STATIC_DRAW);
    }
    add(mesh, model) {
        let modelinvtr = mat4.create();
        mat4.transpose(modelinvtr, model);
        mat4.invert(modelinvtr, modelinvtr);
        let indicesCount = this.idxArray.length;
        for (let i = 0; i < mesh.indices.length; i++) {
            this.idxArray.push(mesh.indices[i] + indicesCount);
            let thisPos = vec4.fromValues(mesh.positions[4 * i], mesh.positions[4 * i + 1], mesh.positions[4 * i + 2], mesh.positions[4 * i + 3]);
            vec4.transformMat4(thisPos, thisPos, model);
            this.posArray.push(thisPos[0], thisPos[1], thisPos[2], thisPos[3]);
            let thisNor = vec4.fromValues(mesh.normals[4 * i], mesh.normals[4 * i + 1], mesh.normals[4 * i + 2], mesh.normals[4 * i + 3]);
            vec4.transformMat4(thisNor, thisNor, modelinvtr);
            vec4.normalize(thisNor, thisNor);
            this.norArray.push(thisNor[0], thisNor[1], thisNor[2], thisNor[3]);
            this.uvsArray.push(mesh.uvs[2 * i], mesh.uvs[2 * i + 1]);
        }
    }
    setInitialDirection(angle) {
        this.InitAngle = angle;
    }
    loadProgramFromString(program) {
        this.reset();
        this.Grammar = program;
        let index = 0;
        while (index < program.length) {
            let nextIndex = program.indexOf("\n", index);
            let line = program.substr(index, nextIndex - index).trim();
            this.addProduction(line);
            if (nextIndex == -1)
                break;
            index = nextIndex + 1;
        }
    }
    setDefaultAngle(degrees) {
        this.DefaultAngle = degrees;
    }
    setDefaultStep(distance) {
        this.DefaultStep = distance;
    }
    //Iterate Grammar
    getIteration(n) {
        if (n >= this.Iterations.length) {
            for (let i = this.Iterations.length; i <= n; i++) {
                this.Current = this.iterate(this.Current);
                this.Iterations.push(this.Current);
            }
        }
        return this.Iterations[n];
    }
    //Get Geometry from running the turtle
    process(n) {
        let turtle = new Turtle();
        let stack = new Array();
        let insn = this.getIteration(n);
        //insn = "FF" + insn;
        //console.log(insn);
        turtle.applyUpRot(this.InitAngle);
        let initialForward = vec3.fromValues(turtle.Forward[0], turtle.Forward[1], turtle.Forward[2]);
        for (let i = 0; i < insn.length; i++) {
            let sym = insn.substr(i, 1);
            if (sym == "F") {
                let start = vec3.fromValues(turtle.pos[0], turtle.pos[1], turtle.pos[2]);
                turtle.moveForward(this.DefaultStep);
                let end = vec3.fromValues(turtle.pos[0], turtle.pos[1], turtle.pos[2]);
                let model = mat4.create(), transMat = mat4.create(), rotMat = mat4.create(), scaleMat = mat4.create();
                let midpos = vec3.fromValues((start[0] + end[0]) * 0.5 + this.center[0], (start[1] + end[1]) * 0.5 + this.center[1], (start[2] + end[2]) * 0.5 + this.center[2]);
                mat4.translate(transMat, transMat, midpos);
                let rotQuat = quat.create();
                quat.rotationTo(rotQuat, vec3.fromValues(1, 0, 0), turtle.Forward);
                mat4.fromQuat(rotMat, rotQuat);
                mat4.multiply(model, rotMat, model);
                mat4.multiply(model, transMat, model);
                this.add(mesh_ExampleRoad, model);
                //this.Branches.push(new Branch(start, end, Math.max(1.0*Math.pow(1.0,turtle.Depth), 0.05), Math.max(1.0*Math.pow(1.0,turtle.Depth+1), 0.05)));
            }
            else if (sym == "f") {
                turtle.moveForward(this.DefaultStep);
            }
            else if (sym == "+") {
                turtle.applyUpRot(this.DefaultAngle);
            }
            else if (sym == "-") {
                turtle.applyUpRot(-this.DefaultAngle);
            }
            else if (sym == "&") {
                turtle.applyLeftRot(this.DefaultAngle);
            }
            else if (sym == "^") {
                turtle.applyLeftRot(-this.DefaultAngle);
            }
            else if (sym == "\\") {
                turtle.applyForwardRot(this.DefaultAngle);
            }
            else if (sym == "/") {
                turtle.applyForwardRot(-this.DefaultAngle);
            }
            else if (sym == "|") {
                turtle.applyUpRot(180);
            }
            else if (sym == "[") {
                let curTurtle = new Turtle();
                curTurtle.pos = vec3.fromValues(turtle.pos[0], turtle.pos[1], turtle.pos[2]);
                curTurtle.Up = vec3.fromValues(turtle.Up[0], turtle.Up[1], turtle.Up[2]);
                curTurtle.Forward = vec3.fromValues(turtle.Forward[0], turtle.Forward[1], turtle.Forward[2]);
                curTurtle.Left = vec3.fromValues(turtle.Left[0], turtle.Left[1], turtle.Left[2]);
                curTurtle.Depth = turtle.Depth;
                stack.push(curTurtle);
                //let model = mat4.create(), transMat = mat4.create(), rotMat = mat4.create(), scaleMat = mat4.create();
                // let midpos = vec3.fromValues(
                // 	this.DefaultStep*0.5*curTurtle.Forward[0]+curTurtle.pos[0]+this.center[0], 
                // 	this.DefaultStep*0.5*curTurtle.Forward[1]+curTurtle.pos[1]+this.center[1], 
                // 	this.DefaultStep*0.5*curTurtle.Forward[2]+curTurtle.pos[2]+this.center[2]);
                // mat4.translate(transMat, transMat, midpos);
                //    mat4.multiply(model, transMat, model);
                //    this.add(mesh_ExampleRoad2, model);
            }
            else if (sym == "]") {
                turtle = stack.pop();
            }
            else if (sym == "*") {
                let geoPos = vec3.fromValues(turtle.pos[0], turtle.pos[1], turtle.pos[2]);
                this.Geometries.push(new Geometry(geoPos, sym));
                let model = mat4.create(), transMat = mat4.create(), rotMat = mat4.create(), scaleMat = mat4.create();
                let midpos = vec3.fromValues(turtle.pos[0] + this.center[0], turtle.pos[1] + this.center[1], turtle.pos[2] + this.center[2]);
                mat4.translate(transMat, transMat, midpos);
                mat4.multiply(model, transMat, model);
                this.add(mesh_ExampleRoad2, model);
            }
            else {
                //let geoPos = vec3.fromValues(turtle.pos[0],turtle.pos[1],turtle.pos[2]);
                //this.Geometries.push(new Geometry(geoPos, sym));
            }
        }
    }
    reset() {
        this.Current = "";
        this.Branches = [];
        this.Iterations = [];
        this.Geometries = [];
        this.Productions.clear();
    }
    addProduction(line) {
        let index;
        // Strip whitespace
        line.replace(" ", "");
        if (line.length == 0)
            return;
        // Split productions
        index = line.indexOf("->");
        if (index != -1) {
            let symFrom = line.substr(0, index);
            let symTo = line.substr(index + 2);
            this.Productions.set(symFrom, symTo);
        }
        else {
            this.Current = line;
        }
    }
    iterate(input) {
        let output = "";
        for (let i = 0; i < input.length; i++) {
            let sym = input.substr(i, 1);
            let next = "";
            if (this.Productions.has(sym)) {
                next = this.Productions.get(sym);
            }
            else {
                next = sym;
            }
            output = output + next;
        }
        return output;
    }
}
//# sourceMappingURL=LSystem.js.map