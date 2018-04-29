/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gl_matrix_common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gl_matrix_mat2__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gl_matrix_mat2d__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gl_matrix_mat3__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gl_matrix_mat4__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gl_matrix_quat__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gl_matrix_vec2__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gl_matrix_vec3__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gl_matrix_vec4__ = __webpack_require__(12);
/* unused harmony reexport glMatrix */
/* unused harmony reexport mat2 */
/* unused harmony reexport mat2d */
/* unused harmony reexport mat3 */
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__gl_matrix_mat4__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__gl_matrix_quat__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__gl_matrix_vec2__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__gl_matrix_vec3__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_8__gl_matrix_vec4__; });
/**
 * @fileoverview gl-matrix - High performance matrix and vector operations
 * @author Brandon Jones
 * @author Colin MacKenzie IV
 * @version 2.4.0
 */

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */
// END HEADER













/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gl; });
/* harmony export (immutable) */ __webpack_exports__["c"] = setGL;
/* harmony export (immutable) */ __webpack_exports__["b"] = readTextFile;
var gl;
function setGL(_gl) {
    gl = _gl;
}
function readTextFile(file) {
    var text = "";
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                text = allText;
            }
        }
    };
    rawFile.send(null);
    return text;
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ARRAY_TYPE; });
/* unused harmony export setMatrixArrayType */
/* unused harmony export toRadian */
/* unused harmony export equals */
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

/**
 * Common utilities
 * @module glMatrix
 */

// Configuration Constants
const EPSILON = 0.000001;
/* harmony export (immutable) */ __webpack_exports__["b"] = EPSILON;

let ARRAY_TYPE = (typeof Float32Array !== 'undefined') ? Float32Array : Array;
const RANDOM = Math.random;
/* harmony export (immutable) */ __webpack_exports__["c"] = RANDOM;


/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */
function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}

const degree = Math.PI / 180;

/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */
function toRadian(a) {
  return a * degree;
}

/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */
function equals(a, b) {
  return Math.abs(a - b) <= EPSILON*Math.max(1.0, Math.abs(a), Math.abs(b));
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\nprecision highp float;\n\nin vec4 fs_Pos;\nin vec4 fs_Nor;\nin vec4 fs_Col;\nin vec2 fs_UV;\n\nvoid main() {\n \n   \n}\n"

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__(1);


class Drawable {
    constructor() {
        this.type = 0;
        this.count = 0;
        this.idxBound = false;
        this.posBound = false;
        this.norBound = false;
        this.colBound = false;
        this.uvBound = false;
        this.transBound = false;
        this.modelMat = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create();
    }
    destroy() {
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].deleteBuffer(this.bufIdx);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].deleteBuffer(this.bufPos);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].deleteBuffer(this.bufNor);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].deleteBuffer(this.bufCol);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].deleteBuffer(this.bufUV);
        if (this.transBound)
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].deleteBuffer(this.bufTrans);
    }
    generateIdx() {
        this.idxBound = true;
        this.bufIdx = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].createBuffer();
    }
    generatePos() {
        this.posBound = true;
        this.bufPos = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].createBuffer();
    }
    generateNor() {
        this.norBound = true;
        this.bufNor = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].createBuffer();
    }
    generateCol() {
        this.colBound = true;
        this.bufCol = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].createBuffer();
    }
    generateUV() {
        this.uvBound = true;
        this.bufUV = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].createBuffer();
    }
    generateTrans() {
        this.transBound = true;
        this.bufTrans = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].createBuffer();
    }
    bindIdx() {
        if (this.idxBound) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.bufIdx);
        }
        return this.idxBound;
    }
    bindPos() {
        if (this.posBound) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.bufPos);
        }
        return this.posBound;
    }
    bindNor() {
        if (this.norBound) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.bufNor);
        }
        return this.norBound;
    }
    bindCol() {
        if (this.colBound) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.bufCol);
        }
        return this.colBound;
    }
    bindUV() {
        if (this.uvBound) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.bufUV);
        }
        return this.uvBound;
    }
    bindTrans() {
        if (this.transBound) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, this.bufTrans);
        }
        return this.transBound;
    }
    elemCount() {
        return this.count;
    }
    drawMode() {
        return __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TRIANGLES;
    }
    translate(xyz) {
        let tempMat = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create();
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].translate(tempMat, tempMat, xyz);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].multiply(this.modelMat, this.modelMat, tempMat);
    }
    scale(xyz) {
        let tempMat = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create();
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].scale(tempMat, tempMat, xyz);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].multiply(this.modelMat, this.modelMat, tempMat);
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (Drawable);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__(1);


var activeProgram = null;
class Shader {
    constructor(type, source) {
        this.shader = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].createShader(type);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].shaderSource(this.shader, source);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].compileShader(this.shader);
        if (!__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getShaderParameter(this.shader, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COMPILE_STATUS)) {
            throw __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getShaderInfoLog(this.shader);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Shader;

;
class ShaderProgram {
    constructor(shaders, isTransformFeedback = false, varyings = []) {
        this.prog = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].createProgram();
        for (let shader of shaders) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].attachShader(this.prog, shader.shader);
        }
        if (isTransformFeedback) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].transformFeedbackVaryings(this.prog, varyings, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].SEPARATE_ATTRIBS);
        }
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].linkProgram(this.prog);
        if (!__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getProgramParameter(this.prog, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].LINK_STATUS)) {
            throw __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getProgramInfoLog(this.prog);
        }
        this.attrPos = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getAttribLocation(this.prog, "vs_Pos");
        this.attrNor = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getAttribLocation(this.prog, "vs_Nor");
        this.attrCol = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getAttribLocation(this.prog, "vs_Col");
        this.attrUV = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getAttribLocation(this.prog, "vs_UV");
        this.attrTrans = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getAttribLocation(this.prog, "vs_Translate");
        this.unifModel = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_Model");
        this.unifModelInvTr = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_ModelInvTr");
        this.unifViewProj = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_ViewProj");
        this.unifInvViewProj = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_InvViewProj");
        this.unifView = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_View");
        this.unifProj = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_Proj");
        this.unifInvProj = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_InvProj");
        this.unifCameraWPos = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_CameraWPos");
        this.unifColor = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_Color");
        this.unifTime = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_Time");
        this.unifdeltaTime = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_deltaTime");
        this.unifDepthMap = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_DepthMap");
        this.unifSkyCubeMap = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_SkyCubeMap");
        this.unifAlbedo = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_Gbuffer_Albedo");
        this.unifSpecular = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_Gbuffer_Specular");
        this.unifNormal = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_Gbuffer_Normal");
        this.unifFrame0 = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_frame0");
        this.unifFrame1 = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_frame1");
        this.unifFrame2 = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_frame2");
        this.unifFrame3 = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_frame3");
        this.unifFrame4 = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_frame4");
        this.unifFrame5 = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_frame5");
        this.unifFrame6 = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_frame6");
        this.unifFrame7 = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_frame7");
        this.unifFrame8 = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_frame8");
        this.unifFrame9 = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_frame9");
        this.unifLightColor = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_lightColor");
        this.unifLightDirection = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_lightDirection");
        this.unifSSRInfo = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_SSRInfo");
        this.unifLightViewProj = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_LightViewProj");
        this.unifShadowMap = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_ShadowMap");
        this.unifCenter = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_Center");
        this.unifScreenSize = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_screenSize");
        this.unifBlurScale = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_BlurScale");
        this.unifChromaticInfo = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_chromaticInfo");
        this.unifParticleInfo = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_particleInfo");
        this.unifLod = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, "u_Lod");
        this.unifTexUnits = new Map();
    }
    setupTexUnits(handleNames) {
        for (let handle of handleNames) {
            var location = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.prog, handle);
            if (location !== -1) {
                this.unifTexUnits.set(handle, location);
            }
            else {
                console.log("Could not find handle for texture named: \'" + handle + "\'!");
            }
        }
    }
    // Bind the given Texture to the given texture unit
    bindTexToUnit(handleName, tex, unit) {
        this.use();
        var location = this.unifTexUnits.get(handleName);
        if (location !== undefined) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].activeTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE0 + unit);
            tex.bindTex();
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform1i(location, unit);
            //console.log(unit + handleName );
        }
        else {
            console.log("Texture with handle name: \'" + handleName + "\' was not found");
        }
    }
    use() {
        if (activeProgram !== this.prog) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].useProgram(this.prog);
            activeProgram = this.prog;
        }
    }
    setAlbedoMap(texture) {
        this.use();
        if (this.unifAlbedo != -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].activeTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE3);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, texture);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform1i(this.unifAlbedo, 3);
        }
    }
    setSpecularMap(texture) {
        this.use();
        if (this.unifSpecular != -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].activeTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE4);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, texture);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform1i(this.unifSpecular, 4);
        }
    }
    setNormalMap(texture) {
        this.use();
        if (this.unifNormal != -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].activeTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE5);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, texture);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform1i(this.unifNormal, 5);
        }
    }
    setFrame00(texture) {
        this.use();
        if (this.unifFrame0 != -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].activeTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE6);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, texture);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform1i(this.unifFrame0, 6);
        }
    }
    setFrame01(texture) {
        this.use();
        if (this.unifFrame1 != -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].activeTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE7);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, texture);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform1i(this.unifFrame1, 7);
        }
    }
    setFrame02(texture) {
        this.use();
        if (this.unifFrame2 != -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].activeTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE8);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, texture);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform1i(this.unifFrame2, 8);
        }
    }
    setFrame03(texture) {
        this.use();
        if (this.unifFrame3 != -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].activeTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE9);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, texture);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform1i(this.unifFrame3, 9);
        }
    }
    setFrame04(texture) {
        this.use();
        if (this.unifFrame4 != -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].activeTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE10);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, texture);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform1i(this.unifFrame4, 10);
        }
    }
    setDepthMap(texture) {
        this.use();
        if (this.unifDepthMap != -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform1i(this.unifDepthMap, 11);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].activeTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE11);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, texture);
        }
    }
    setSkyCubeMap(texture) {
        this.use();
        if (this.unifSkyCubeMap != -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform1i(this.unifSkyCubeMap, 12);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].activeTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE12);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_CUBE_MAP, texture);
        }
    }
    setShadowMap(texture) {
        this.use();
        if (this.unifShadowMap != -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform1i(this.unifShadowMap, 13);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].activeTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE13);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, texture);
        }
    }
    setFrame05(texture) {
        this.use();
        if (this.unifFrame5 != -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].activeTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE14);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, texture);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform1i(this.unifFrame5, 14);
        }
    }
    setFrame06(texture) {
        this.use();
        if (this.unifFrame6 != -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].activeTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE15);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, texture);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform1i(this.unifFrame6, 15);
        }
    }
    setFrame07(texture) {
        this.use();
        if (this.unifFrame7 != -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].activeTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE16);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, texture);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform1i(this.unifFrame7, 16);
        }
    }
    setFrame08(texture) {
        this.use();
        if (this.unifFrame8 != -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].activeTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE17);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, texture);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform1i(this.unifFrame8, 17);
        }
    }
    setFrame09(texture) {
        this.use();
        if (this.unifFrame9 != -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].activeTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE18);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, texture);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform1i(this.unifFrame9, 18);
        }
    }
    setScreenSize(screenSize) {
        this.use();
        if (this.unifScreenSize !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform2fv(this.unifScreenSize, screenSize);
        }
    }
    setBlurScale(BlurScale) {
        this.use();
        if (this.unifBlurScale !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform2fv(this.unifBlurScale, BlurScale);
        }
    }
    setChromaticInfo(info) {
        this.use();
        if (this.unifChromaticInfo !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform4fv(this.unifChromaticInfo, info);
        }
    }
    setParticleInfo(info) {
        this.use();
        if (this.unifParticleInfo !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform4fv(this.unifParticleInfo, info);
        }
    }
    setmipLod(lod) {
        this.use();
        if (this.unifLod !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform1f(this.unifLod, lod);
        }
    }
    setModelMatrix(model) {
        this.use();
        if (this.unifModel !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniformMatrix4fv(this.unifModel, false, model);
        }
        if (this.unifModelInvTr !== -1) {
            let modelinvtr = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create();
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].transpose(modelinvtr, model);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].invert(modelinvtr, modelinvtr);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniformMatrix4fv(this.unifModelInvTr, false, modelinvtr);
        }
    }
    setViewProjMatrix(vp) {
        this.use();
        if (this.unifViewProj !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniformMatrix4fv(this.unifViewProj, false, vp);
        }
    }
    setInvViewProjMatrix(vp) {
        this.use();
        if (this.unifInvViewProj !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniformMatrix4fv(this.unifInvViewProj, false, vp);
        }
    }
    setViewMatrix(vp) {
        this.use();
        if (this.unifView !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniformMatrix4fv(this.unifView, false, vp);
        }
    }
    setProjMatrix(vp) {
        this.use();
        if (this.unifProj !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniformMatrix4fv(this.unifProj, false, vp);
        }
    }
    setInvProjMatrix(vp) {
        this.use();
        if (this.unifInvProj !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniformMatrix4fv(this.unifInvProj, false, vp);
        }
    }
    setLightViewProjMatrix(vp) {
        this.use();
        if (this.unifLightViewProj !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniformMatrix4fv(this.unifLightViewProj, false, vp);
        }
    }
    setCameraWPos(pos) {
        this.use();
        if (this.unifCameraWPos !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform3fv(this.unifCameraWPos, pos);
        }
    }
    setGeometryColor(color) {
        this.use();
        if (this.unifColor !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform4fv(this.unifColor, color);
        }
    }
    setLightColor(color) {
        this.use();
        if (this.unifLightColor !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform4fv(this.unifLightColor, color);
        }
    }
    setLightDirection(dir) {
        this.use();
        if (this.unifLightDirection !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform4fv(this.unifLightDirection, dir);
        }
    }
    setSSRInfo(info) {
        this.use();
        if (this.unifSSRInfo !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform4fv(this.unifSSRInfo, info);
        }
    }
    setCenter(center) {
        this.use();
        if (this.unifCenter !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform4fv(this.unifCenter, center);
        }
    }
    setTime(t) {
        this.use();
        if (this.unifTime !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform1f(this.unifTime, t);
        }
    }
    setdeltaTime(t) {
        this.use();
        if (this.unifdeltaTime !== -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform1f(this.unifdeltaTime, t);
        }
    }
    draw(d) {
        this.use();
        if (this.attrPos != -1 && d.bindPos()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enableVertexAttribArray(this.attrPos);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribPointer(this.attrPos, 4, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, false, 0, 0);
        }
        if (this.attrNor != -1 && d.bindNor()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enableVertexAttribArray(this.attrNor);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribPointer(this.attrNor, 4, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, false, 0, 0);
        }
        if (this.attrCol != -1 && d.bindCol()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enableVertexAttribArray(this.attrCol);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribPointer(this.attrCol, 4, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, false, 0, 0);
        }
        if (this.attrUV != -1 && d.bindUV()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enableVertexAttribArray(this.attrUV);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribPointer(this.attrUV, 2, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, false, 0, 0);
        }
        d.bindIdx();
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawElements(d.drawMode(), d.elemCount(), __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].UNSIGNED_INT, 0);
        if (this.attrPos != -1)
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disableVertexAttribArray(this.attrPos);
        if (this.attrNor != -1)
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disableVertexAttribArray(this.attrNor);
        if (this.attrCol != -1)
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disableVertexAttribArray(this.attrCol);
        if (this.attrUV != -1)
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disableVertexAttribArray(this.attrUV);
    }
    drawInstance(d, numInstances) {
        this.use();
        if (this.attrPos != -1 && d.bindPos()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enableVertexAttribArray(this.attrPos);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribPointer(this.attrPos, 4, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribDivisor(this.attrPos, 0);
        }
        if (this.attrNor != -1 && d.bindNor()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enableVertexAttribArray(this.attrNor);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribPointer(this.attrNor, 4, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribDivisor(this.attrNor, 0);
        }
        if (this.attrCol != -1 && d.bindCol()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enableVertexAttribArray(this.attrCol);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribPointer(this.attrCol, 4, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribDivisor(this.attrCol, 1);
        }
        if (this.attrUV != -1 && d.bindUV()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enableVertexAttribArray(this.attrUV);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribPointer(this.attrUV, 2, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribDivisor(this.attrUV, 0);
        }
        if (this.attrTrans != -1 && d.bindTrans()) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enableVertexAttribArray(this.attrTrans);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribPointer(this.attrTrans, 4, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribDivisor(this.attrTrans, 1);
        }
        d.bindIdx();
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawElementsInstanced(d.drawMode(), d.elemCount(), __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].UNSIGNED_INT, 0, numInstances);
        if (this.attrPos != -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disableVertexAttribArray(this.attrPos);
        }
        if (this.attrNor != -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disableVertexAttribArray(this.attrNor);
        }
        if (this.attrCol != -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disableVertexAttribArray(this.attrCol);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribDivisor(this.attrCol, 0);
        }
        if (this.attrUV != -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disableVertexAttribArray(this.attrUV);
        }
        if (this.attrTrans != -1) {
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disableVertexAttribArray(this.attrTrans);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].vertexAttribDivisor(this.attrTrans, 0);
        }
    }
}
;
/* harmony default export */ __webpack_exports__["b"] = (ShaderProgram);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\nprecision highp float;\n\nuniform mat4 u_Model;\nuniform mat4 u_ModelInvTr;  \n\nuniform mat4 u_View;   \nuniform mat4 u_Proj; \nuniform mat4 u_ViewProj;\n\nin vec4 vs_Pos;\nin vec4 vs_Nor;\nin vec4 vs_Col;\nin vec2 vs_UV;\n\nout vec4 fs_Pos;\nout vec4 fs_Nor;            \nout vec4 fs_Col;           \nout vec2 fs_UV;\n\nvoid main()\n{\n    fs_Col = vs_Col;\n    fs_UV = vs_UV;\n    fs_UV.y = fs_UV.y;\n  \n    fs_Nor = vs_Nor;\n    fs_Pos = vs_Pos;    \n    gl_Position = u_ViewProj * u_Model * vs_Pos;\n}\n"

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\nprecision highp float;\n\nin vec4 fs_Pos;\nin vec4 fs_Nor;\nin vec4 fs_Col;\nin vec2 fs_UV;\n\nout vec4 fragColor[3]; // The data in the ith index of this array of outputs\n                       // is passed to the ith index of OpenGLRenderer's\n                       // gbTargets array, which is an array of textures.\n                       // This lets us output different types of data,\n                       // such as albedo, normal, and position, as\n                       // separate images from a single render pass.\n\nuniform sampler2D AlbedoMap;\nuniform sampler2D SpecularMap;\nuniform sampler2D NormalMap;\n\n\nuniform mat4 u_Model;\nuniform mat4 u_ModelInvTr;  \nuniform mat4 u_ViewProj;\n\nuniform float u_Time;\n\nvec3 applyNormalMap(vec3 geomnor, vec3 normap) {\n    \n    vec3 up = normalize(vec3(0.01, 1, 0.01));\n    vec3 surftan = normalize(cross(geomnor, up));\n    vec3 surfbinor = cross(geomnor, surftan);\n    return normalize(normap.y * surftan + normap.x * surfbinor + normap.z * geomnor);\n}\n\nvoid main() {\n\n    vec4 Albedo = texture(AlbedoMap, fs_UV);\n\n    if(Albedo.a < 0.2)\n        discard;\n\n    mat3 invTranspose = mat3(u_ModelInvTr);\n    vec4 vertexNormal = vec4(invTranspose * vec3(fs_Nor), 0);\n\n    vec4 Pos_SS = u_ViewProj * u_Model * fs_Pos;\n    Pos_SS /= Pos_SS.w;\n\n    vec3 col = Albedo.rgb;\n\n    //inverse gamma correct\n    col = pow(col, vec3(2.2));\n\n    fragColor[0] = vec4(col, Pos_SS.z);\n    fragColor[1] = texture(SpecularMap, fs_UV);\n\n    vec4 normalInfo = texture(NormalMap, fs_UV);     \n    normalInfo.xyz = normalize(normalInfo.xyz*2.0 - vec3(1.0)); \n    \n\n    vec3 worldNormal = applyNormalMap(vertexNormal.xyz, normalInfo.xyz);\n\n    fragColor[2] = vec4(worldNormal, normalInfo.w);\n}\n"

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\nprecision highp float;\n\nin vec4 fs_Pos;\nin vec4 fs_Nor;\nin vec4 fs_Col;\nin vec2 fs_UV;\n\nout vec4 out_Color; \n\nuniform sampler2D u_Gbuffer_Albedo;\n\nuniform mat4 u_Model;\nuniform mat4 u_ViewProj;\n\nvoid main() {   \n\n    if( texture(u_Gbuffer_Albedo, fs_UV).a < 0.2)\n        discard;\n        \n    vec4 POS = u_ViewProj * u_Model * vec4(fs_Pos.xyz, 1.0);\n    POS /= POS.w;\n\n    \n\n    float depth = POS.z;\n    // VSM\n    float dx = dFdx(POS.z);\n\tfloat dy = dFdy(POS.z);\n    out_Color = vec4(depth, dx, dy, 1.0);\n \t// out_Color = vec4(depth, 0.0, 0.0, 1.0);\n}"

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "road_Mesh_Map", function() { return road_Mesh_Map; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stats_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stats_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_stats_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dat_gui__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dat_gui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_dat_gui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geometry_Square__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geometry_Mesh__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rendering_gl_OpenGLRenderer__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Camera__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__globals__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__particle_Particle__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__geometry_Quad__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__LSystem__ = __webpack_require__(52);














// Define an object with application parameters and button callbacks
const controls = {
    SSR_MaxStep: 64,
    SSR_Opaque_Intensity: 1.0,
    SSR_Trans_Intensity: 0.8,
    SSR_Threshold: 2.0,
    Bloom_Iteration: 4,
    Bloom_Dispersal: 0.5,
    Bloom_Distortion: 0.5,
    FireFly: false,
    Rain: false,
    Rain_delaytoStartTimer: 0.0,
    Rain_delaytoDieTimer: 3.0,
    Rain_Timer: 3.0,
    Snow: false,
    Snow_delaytoDieTimer: 3.0,
    Snow_delaytoStartTimer: 0.0,
    Snow_Timer: 3.0,
    Lantern: false,
    Lantern_delaytoDieTimer: 10.0,
    Lantern_Timer: 10.0,
    Fire: false,
    Fire_delaytoDieTimer: 3.0,
    Fire_delaytoStartTimer: 0.0,
    Fire_Timer: 3.0,
    Earth: false,
    Earth_delaytoDieTimer: 14.0,
    Earth_Timer: 14.0,
    Clouds: true,
    Temperature: 7000,
    Vignette_Effect: true,
    Volume: 0.5,
    ShowFPS: false
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
//
let shrines_main;
let shrines_poles;
let shrines_balconis;
let shrines_colums;
let shrines_gold;
let m_shrines_main;
let m_shrines_poles;
let m_shrines_balconis;
let m_shrines_colums;
let m_shrines_gold;
//
let shrines_statue;
let m_shrines_statue;
let obj_Leaf;
let obj_Bark;
let obj_Leaf2;
let obj_Bark2;
let ply_Leaf;
let ply_Bark;
let ply_Leaf2;
let ply_Bark2;
let obj_Lantern;
let obj_Boat;
let obj_Leaves;
//Road
let road_Mesh_Map;
let mesh_Leaf;
let mesh_Bark;
let mesh_Leaf2;
let mesh_Bark2;
let mesh_Test;
let mesh_Lantern;
let mesh_Boat;
let mesh_Leaves;
let skyCubeMap;
let cloudsTexture;
let cloudsNormalTexture;
let numParticle = 4096; //Bilboard
let numCloud = 256;
let numLatern = 1024;
let numBoat = 16;
let numLeaves = 208;
let LS0;
let LS1;
let LS2;
let LS3;
let gainNode;
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
function play_single_sound() {
    var JukeBox = new AudioContext();
    gainNode = JukeBox.createGain(); // Create a gainNode reference.
    gainNode.connect(JukeBox.destination); // Add context to gainNode
    fetch('./src/music/idealism - another perspective.mp3')
        .then(r => r.arrayBuffer())
        .then(b => JukeBox.decodeAudioData(b))
        .then(data => {
        const audio_buf = JukeBox.createBufferSource();
        audio_buf.buffer = data;
        audio_buf.loop = true;
        audio_buf.connect(gainNode);
        gainNode.gain.value = controls.Volume;
        audio_buf.start(0);
    });
    //console.log(`Music On!`);
}
function changeVolume(volume) {
    gainNode.gain.value = controls.Volume;
}
function loadOBJText() {
    obj0 = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/mario/models/wahoo.obj');
    obj_lake = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/lake/models/lake.obj');
    obj_holodeck = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/holodeck/models/holodeck.obj');
    //shrines_main = readTextFile('./src/resources/objs/shrines/models/w_main.obj');
    shrines_poles = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/shrines/models/w_poles.obj');
    shrines_balconis = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/shrines/models/w_balconis.obj');
    shrines_colums = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/shrines/models/w_colums.obj');
    shrines_gold = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/shrines/models/w_golden.obj');
    shrines_statue = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/shrines/statues/statues.obj');
    obj_B_Outter = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/B_Side/models/b_Outter_v3.obj');
    obj_B_Inner = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/B_Side/models/b_Inner_v3.obj');
    obj_B_Glass = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/B_Side/models/b_Glass_v3.obj');
    ply_Leaf = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/tree/models/leaf01.ply');
    ply_Bark = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/tree/models/bark01.ply');
    ply_Leaf2 = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/tree/models/leaf02.ply');
    ply_Bark2 = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/tree/models/bark02.ply');
    obj_Leaf = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/tree/models/leaf01.obj');
    obj_Bark = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/tree/models/bark01.obj');
    obj_Leaf2 = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/tree/models/leaf02.obj');
    obj_Bark2 = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/tree/models/bark02.obj');
    obj_Lantern = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/lantern/models/lantern.obj');
    obj_Boat = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/lantern/models/sailboat.obj');
    obj_Leaves = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/lantern/models/leaves.obj');
}
function loadRoadMap() {
    road_Mesh_Map = new Map();
    let Array_Road = new Array();
    let objText = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/road/models/road00.obj');
    let mesh = new __WEBPACK_IMPORTED_MODULE_4__geometry_Mesh__["a" /* default */](objText, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_albedo.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_specular.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_normal.png', false));
    mesh.create();
    Array_Road.push(mesh);
    objText = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/road/models/road01.obj');
    mesh = new __WEBPACK_IMPORTED_MODULE_4__geometry_Mesh__["a" /* default */](objText, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_albedo.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_specular.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_normal.png', false));
    mesh.create();
    Array_Road.push(mesh);
    objText = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/road/models/road02.obj');
    mesh = new __WEBPACK_IMPORTED_MODULE_4__geometry_Mesh__["a" /* default */](objText, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_albedo.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_specular.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_normal.png', false));
    mesh.create();
    Array_Road.push(mesh);
    objText = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/road/models/road03.obj');
    mesh = new __WEBPACK_IMPORTED_MODULE_4__geometry_Mesh__["a" /* default */](objText, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_albedo.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_specular.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_normal.png', false));
    mesh.create();
    Array_Road.push(mesh);
    objText = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/road/models/road04.obj');
    mesh = new __WEBPACK_IMPORTED_MODULE_4__geometry_Mesh__["a" /* default */](objText, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_albedo.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_specular.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_normal.png', false));
    mesh.create();
    Array_Road.push(mesh);
    Array_Road.push(mesh);
    objText = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/road/models/road05.obj');
    mesh = new __WEBPACK_IMPORTED_MODULE_4__geometry_Mesh__["a" /* default */](objText, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_albedo.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_specular.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_normal.png', false));
    mesh.create();
    Array_Road.push(mesh);
    Array_Road.push(mesh);
    objText = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/road/models/road06.obj');
    mesh = new __WEBPACK_IMPORTED_MODULE_4__geometry_Mesh__["a" /* default */](objText, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_albedo.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_specular.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_normal.png', false));
    mesh.create();
    Array_Road.push(mesh);
    road_Mesh_Map.set("road", Array_Road);
    let Array_Conn = new Array();
    objText = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/road/models/conn00.obj');
    mesh = new __WEBPACK_IMPORTED_MODULE_4__geometry_Mesh__["a" /* default */](objText, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_albedo.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_specular.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_normal.png', false));
    mesh.create();
    Array_Conn.push(mesh);
    objText = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/road/models/conn01.obj');
    mesh = new __WEBPACK_IMPORTED_MODULE_4__geometry_Mesh__["a" /* default */](objText, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_albedo.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_specular.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_normal.png', false));
    mesh.create();
    Array_Conn.push(mesh);
    objText = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/road/models/conn02.obj');
    mesh = new __WEBPACK_IMPORTED_MODULE_4__geometry_Mesh__["a" /* default */](objText, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_albedo.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_specular.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_normal.png', false));
    mesh.create();
    Array_Conn.push(mesh);
    objText = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/road/models/conn03.obj');
    mesh = new __WEBPACK_IMPORTED_MODULE_4__geometry_Mesh__["a" /* default */](objText, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_albedo.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_specular.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_normal.png', false));
    mesh.create();
    Array_Conn.push(mesh);
    objText = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/road/models/conn04.obj');
    mesh = new __WEBPACK_IMPORTED_MODULE_4__geometry_Mesh__["a" /* default */](objText, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_albedo.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_specular.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_normal.png', false));
    mesh.create();
    Array_Conn.push(mesh);
    objText = Object(__WEBPACK_IMPORTED_MODULE_7__globals__["b" /* readTextFile */])('./src/resources/objs/road/models/conn05.obj');
    mesh = new __WEBPACK_IMPORTED_MODULE_4__geometry_Mesh__["a" /* default */](objText, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_albedo.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_specular.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_normal.png', false));
    mesh.create();
    Array_Conn.push(mesh);
    road_Mesh_Map.set("conn", Array_Conn);
    //console.log(road_Mesh_Map);
}
function loadScene() {
    square && square.destroy();
    mesh0 && mesh0.destroy();
    skyCubeMap = new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/skybox/dawnSky_', true);
    skyCubeMap.loadCubeImg('./src/resources/objs/skybox/dawnSky_', 0);
    skyCubeMap.loadCubeImg('./src/resources/objs/skybox/dawnSky_', 1);
    skyCubeMap.loadCubeImg('./src/resources/objs/skybox/dawnSky_', 2);
    skyCubeMap.loadCubeImg('./src/resources/objs/skybox/dawnSky_', 3);
    skyCubeMap.loadCubeImg('./src/resources/objs/skybox/dawnSky_', 4);
    skyCubeMap.loadCubeImg('./src/resources/objs/skybox/dawnSky_', 5);
    cloudsTexture = new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/clouds/clouds.png', false);
    cloudsNormalTexture = new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/clouds/clouds_Normal.png', false);
    square = new __WEBPACK_IMPORTED_MODULE_3__geometry_Square__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0));
    square.create();
    particleQuad = new __WEBPACK_IMPORTED_MODULE_11__geometry_Quad__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0));
    particleQuad.create();
    cloudQuad = new __WEBPACK_IMPORTED_MODULE_11__geometry_Quad__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0));
    cloudQuad.create();
    var scale = 3.0;
    mesh0 = new __WEBPACK_IMPORTED_MODULE_4__geometry_Mesh__["a" /* default */](obj0, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/mario/textures/wahoo.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/mario/textures/wahoo_Spec.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/mario/textures/wahoo_Norm.png', false));
    mesh0.scale(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(scale, scale, scale));
    mesh0.create();
    mesh_lake = new __WEBPACK_IMPORTED_MODULE_4__geometry_Mesh__["a" /* default */](obj_lake, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/lake/textures/albedo.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/lake/textures/specular2.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/lake/textures/normal.png', false));
    mesh_lake.scale(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(scale, scale, scale));
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
    m_shrines_poles = new __WEBPACK_IMPORTED_MODULE_4__geometry_Mesh__["a" /* default */](shrines_poles, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_albedo.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_specular.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_normal.png', false));
    m_shrines_poles.create();
    m_shrines_poles.scale(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(scale, scale, scale));
    m_shrines_poles.translate(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0.0, -1.0, 0.0));
    m_shrines_balconis = new __WEBPACK_IMPORTED_MODULE_4__geometry_Mesh__["a" /* default */](shrines_balconis, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_albedo.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_specular.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_normal.png', false));
    m_shrines_balconis.create();
    m_shrines_balconis.scale(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(scale, scale, scale));
    m_shrines_balconis.translate(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0.0, -1.0, 0.0));
    m_shrines_colums = new __WEBPACK_IMPORTED_MODULE_4__geometry_Mesh__["a" /* default */](shrines_colums, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_albedo.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_specular.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_normal.png', false));
    m_shrines_colums.create();
    m_shrines_colums.scale(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(scale, scale, scale));
    m_shrines_colums.translate(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0.0, -1.0, 0.0));
    m_shrines_gold = new __WEBPACK_IMPORTED_MODULE_4__geometry_Mesh__["a" /* default */](shrines_gold, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/Gold_Albedo.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/Gold_Specular.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/Gold_Normal.png', false));
    m_shrines_gold.create();
    m_shrines_gold.scale(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(scale, scale, scale));
    m_shrines_gold.translate(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0.0, -1.0, 0.0));
    ///////////////
    m_shrines_statue = new __WEBPACK_IMPORTED_MODULE_4__geometry_Mesh__["a" /* default */](shrines_statue, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/statues/albedo.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/statues/specular.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/statues/normal.png', false));
    m_shrines_statue.create();
    m_shrines_statue.scale(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(scale, scale, scale));
    m_shrines_statue.translate(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0.0, -1.0, 0.0));
    mesh_B_Outter = new __WEBPACK_IMPORTED_MODULE_4__geometry_Mesh__["a" /* default */](obj_B_Outter, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/B_Side/textures/Outter_Albedo.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/B_Side/textures/Outter_Specular.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/B_Side/textures/Outter_Normal.png', false));
    mesh_B_Outter.create();
    mesh_B_Outter.scale(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(scale, scale, scale));
    mesh_B_Outter.translate(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0.0, -1.0, 0.0));
    mesh_B_Inner = new __WEBPACK_IMPORTED_MODULE_4__geometry_Mesh__["a" /* default */](obj_B_Inner, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/B_Side/textures/Inner_Albedo.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/B_Side/textures/Inner_Specular.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/B_Side/textures/Inner_Normal.png', false));
    mesh_B_Inner.create();
    mesh_B_Inner.scale(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(scale, scale, scale));
    mesh_B_Inner.translate(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0.0, -1.0, 0.0));
    mesh_B_Glass = new __WEBPACK_IMPORTED_MODULE_4__geometry_Mesh__["a" /* default */](obj_B_Glass, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/B_Side/textures/Glass_Albedo.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/B_Side/textures/Glass_Specular.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/B_Side/textures/Normal.png', false));
    mesh_B_Glass.create();
    mesh_B_Glass.scale(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(scale, scale, scale));
    mesh_B_Glass.translate(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0.0, -1.0, 0.0));
    // Create By PLY format
    mesh_Leaf = new __WEBPACK_IMPORTED_MODULE_4__geometry_Mesh__["a" /* default */](obj_Leaf, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(-50, 2, -50), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/tree/textures/Leaf_png/leaf_Tex_Tree22.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/tree/textures/Leaf_png/specular.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/tree/textures/Leaf_png/Normal_Tex_Tree0.png', false));
    mesh_Leaf.createByPly(1, ply_Leaf);
    mesh_Leaf.scale(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(3, 3, 3));
    mesh_Bark = new __WEBPACK_IMPORTED_MODULE_4__geometry_Mesh__["a" /* default */](obj_Bark, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(-50, 2, -50), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/tree/textures/Bark_png/BroadleafBark_Tex_Tree0.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/tree/textures/Bark_png/specular.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/tree/textures/Bark_png/BroadleafBark_Normal_Tex_Tree0.png', false));
    mesh_Bark.createByPly(2, ply_Bark);
    mesh_Bark.scale(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(3, 3, 3));
    mesh_Leaf2 = new __WEBPACK_IMPORTED_MODULE_4__geometry_Mesh__["a" /* default */](obj_Leaf2, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 9.5, 252), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/tree/textures/Leaf_png/leaf_Tex_Tree2.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/tree/textures/Leaf_png/specular.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/tree/textures/Leaf_png/Normal_Tex_Tree2.png', false));
    mesh_Leaf2.createByPly(1, ply_Leaf2);
    mesh_Leaf2.scale(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(3, 3, 3));
    mesh_Bark2 = new __WEBPACK_IMPORTED_MODULE_4__geometry_Mesh__["a" /* default */](obj_Bark2, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 9.5, 252), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/tree/textures/Bark_png/BroadleafBark_Tex_Tree2.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/tree/textures/Bark_png/specular.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/tree/textures/Bark_png/BroadleafBark_Normal_Tex_Tree2.png', false));
    mesh_Bark2.createByPly(2, ply_Bark2);
    mesh_Bark2.scale(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(3, 3, 3));
    mesh_Lantern = new __WEBPACK_IMPORTED_MODULE_4__geometry_Mesh__["a" /* default */](obj_Lantern, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(10, 0, 0), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/lantern/textures/lantern.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/lantern/textures/lantern.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/lantern/textures/Normal.png', false));
    mesh_Lantern.create();
    mesh_Boat = new __WEBPACK_IMPORTED_MODULE_4__geometry_Mesh__["a" /* default */](obj_Boat, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(10, 0, 0), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/B_Side/textures/Outter_Albedo.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/B_Side/textures/Outter_Specular.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/B_Side/textures/Outter_Normal.png', false));
    mesh_Boat.create();
    mesh_Leaves = new __WEBPACK_IMPORTED_MODULE_4__geometry_Mesh__["a" /* default */](obj_Leaves, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(10, 0, 0), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/lantern/textures/Leaves_Albedo.jpg', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/lantern/textures/Leaves_Albedo.jpg', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/lantern/textures/Normal.png', false));
    mesh_Leaves.create();
    loadRoadMap();
    LS0 = new __WEBPACK_IMPORTED_MODULE_12__LSystem__["a" /* LSystem */](__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(55, 1.5, 0), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_albedo.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_specular.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_normal.png', false));
    let program = "X\nX->FF*[+F][-F]F*[-F][+F]\nF->FFF\n";
    LS0.loadProgramFromString(program);
    LS0.setDefaultStep(13.5);
    LS0.setDefaultAngle(90);
    LS0.setInitialDirection(90);
    LS0.process(1);
    LS0.create();
    //console.log(LS0);
    LS1 = new __WEBPACK_IMPORTED_MODULE_12__LSystem__["a" /* LSystem */](__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 1.5, -55), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_albedo.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_specular.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_normal.png', false));
    program = "X\nX->F+*[[FFX]-FFX]-FF*[-FFX]+FFX\nF->FF\n";
    LS1.loadProgramFromString(program);
    LS1.setDefaultStep(13.5);
    LS1.setDefaultAngle(90);
    LS1.setInitialDirection(180);
    LS1.process(1);
    LS1.create();
    //console.log(LS1);
    LS2 = new __WEBPACK_IMPORTED_MODULE_12__LSystem__["a" /* LSystem */](__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(-55, 1.5, 0), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_albedo.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_specular.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_normal.png', false));
    program = "X\nX->FF*[+F][-F]F*[-F][+F]\nF->FFF\n";
    LS2.loadProgramFromString(program);
    LS2.setDefaultStep(13.5);
    LS2.setDefaultAngle(90);
    LS2.setInitialDirection(-90);
    LS2.process(1);
    LS2.create();
    //console.log(LS2);
    LS3 = new __WEBPACK_IMPORTED_MODULE_12__LSystem__["a" /* LSystem */](__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 1.5, 55), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_albedo.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_specular.png', false), new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]('./src/resources/objs/shrines/textures/marbles_normal.png', false));
    program = "X\nX->F+*[[FFX]-FFX]-FF*[-FFX]+FFX\nF->FF\n";
    LS3.loadProgramFromString(program);
    LS3.setDefaultStep(13.5);
    LS3.setDefaultAngle(90);
    LS3.setInitialDirection(0);
    LS3.process(1);
    LS3.create();
    //console.log(LS3);
}
function CheckTriggers(cam, camPos, distance, height, range, deltaTime) {
    //move first
    var speed = 50.0;
    if (cam.bForward) {
        cam.updatePosition(0.0, -deltaTime * speed);
    }
    if (cam.bBackward) {
        cam.updatePosition(0.0, deltaTime * speed);
    }
    if (cam.bLeft) {
        cam.updatePosition(-deltaTime * speed, 0.0);
    }
    if (cam.bRight) {
        cam.updatePosition(deltaTime * speed, 0.0);
    }
    if (camPos[0] < range * 2.0 && camPos[0] > -range * 2.0
        && camPos[2] < range * 2.0 && camPos[2] > -range * 2.0)
        //Middle Shrine
        controls.Lantern = true;
    else if (camPos[0] < range && camPos[0] > -range
        && camPos[2] < distance + range && camPos[2] > distance - range)
        controls.Earth = true;
    else if (camPos[0] < range && camPos[0] > -range
        && camPos[2] < -distance + range && camPos[2] > -distance - range)
        controls.Fire = true;
    else if (camPos[0] < distance + range && camPos[0] > distance - range
        && camPos[2] < range && camPos[2] > -range)
        //Ice Shrine
        controls.Snow = true;
    else if (camPos[0] < -distance + range && camPos[0] > -distance - range
        && camPos[2] < range && camPos[2] > -range)
        //Water Shrine
        controls.Rain = true;
    else {
        controls.Rain = false;
        controls.Snow = false;
        controls.Lantern = false;
        controls.Fire = false;
        controls.Earth = false;
    }
}
function UpdateParticle(renderer, camera, particleLanternSys, feedBackLanternShader, particleLanternRenderShader, particleLeavesSys, feedBackLeavesShader, particleLeavesRenderShader, particleSys, feedBackShader, particleRenderShader) {
    if (!controls.Lantern) {
        controls.Lantern_Timer += timer.deltaTime;
        if (controls.Lantern_Timer < controls.Lantern_delaytoDieTimer) {
            renderer.renderLanternParticle(camera, mesh_Lantern, particleLanternSys, feedBackLanternShader, particleLanternRenderShader, controls.Lantern, true);
        }
        else {
            renderer.renderLanternParticle(camera, mesh_Lantern, particleLanternSys, feedBackLanternShader, particleLanternRenderShader, controls.Lantern, false);
        }
    }
    else {
        controls.Lantern_Timer = 0.0;
        renderer.renderLanternParticle(camera, mesh_Lantern, particleLanternSys, feedBackLanternShader, particleLanternRenderShader, controls.Lantern, true);
    }
    if (!controls.Earth) {
        controls.Earth_Timer += timer.deltaTime;
        if (controls.Earth_Timer < controls.Earth_delaytoDieTimer) {
            renderer.renderLeavesParticle(camera, mesh_Leaves, particleLeavesSys, feedBackLeavesShader, particleLeavesRenderShader, controls.Earth, true);
        }
        else {
            renderer.renderLeavesParticle(camera, mesh_Leaves, particleLeavesSys, feedBackLeavesShader, particleLeavesRenderShader, controls.Earth, false);
        }
    }
    else {
        controls.Earth_Timer = 0.0;
        renderer.renderLeavesParticle(camera, mesh_Leaves, particleLeavesSys, feedBackLeavesShader, particleLeavesRenderShader, controls.Earth, true);
    }
    if (!controls.Rain) {
        controls.Rain_Timer += timer.deltaTime;
        if (controls.Rain_Timer < controls.Rain_delaytoDieTimer) {
            renderer.renderParticle(camera, particleQuad, particleSys, feedBackShader, particleRenderShader, controls.FireFly, 1.0, true);
        }
        else {
            renderer.renderParticle(camera, particleQuad, particleSys, feedBackShader, particleRenderShader, controls.FireFly, 0.0, false);
        }
        controls.Rain_delaytoStartTimer -= timer.deltaTime;
        if (controls.Rain_delaytoStartTimer < 0.0)
            controls.Rain_delaytoStartTimer = 0.0;
    }
    else {
        controls.Rain_Timer = 0.0;
        renderer.renderParticle(camera, particleQuad, particleSys, feedBackShader, particleRenderShader, controls.FireFly, 1.0, true);
        controls.Rain_delaytoStartTimer += timer.deltaTime;
        if (controls.Rain_delaytoStartTimer > 3.0)
            controls.Rain_delaytoStartTimer = 3.0;
    }
    var bbNRain = !controls.Rain && (controls.Rain_Timer >= controls.Rain_delaytoDieTimer);
    if (!controls.Snow) {
        controls.Snow_Timer += timer.deltaTime;
        if (controls.Snow_Timer < controls.Snow_delaytoDieTimer) {
            renderer.renderParticle(camera, particleQuad, particleSys, feedBackShader, particleRenderShader, controls.FireFly, 2.0, true);
        }
        else if (bbNRain) {
            renderer.renderParticle(camera, particleQuad, particleSys, feedBackShader, particleRenderShader, controls.FireFly, 0.0, false);
        }
        controls.Snow_delaytoStartTimer -= timer.deltaTime;
        if (controls.Snow_delaytoStartTimer < 0.0)
            controls.Snow_delaytoStartTimer = 0.0;
    }
    else if (bbNRain) {
        controls.Snow_Timer = 0.0;
        renderer.renderParticle(camera, particleQuad, particleSys, feedBackShader, particleRenderShader, controls.FireFly, 2.0, true);
        controls.Snow_delaytoStartTimer += timer.deltaTime;
        if (controls.Snow_delaytoStartTimer > 3.0)
            controls.Snow_delaytoStartTimer = 3.0;
    }
    if (!controls.Fire) {
        controls.Fire_delaytoStartTimer -= timer.deltaTime;
        if (controls.Fire_delaytoStartTimer < 0.0)
            controls.Fire_delaytoStartTimer = 0.0;
    }
    else {
        controls.Fire_delaytoStartTimer += timer.deltaTime;
        if (controls.Fire_delaytoStartTimer > 3.0)
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
    const stats = __WEBPACK_IMPORTED_MODULE_1_stats_js__();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
    // Add controls to the gui
    // Add controls to the gui
    const gui = new __WEBPACK_IMPORTED_MODULE_2_dat_gui__["GUI"]();
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
    MUSIC.add(controls, 'Volume', 0.0, 1.0).step(0.01).onChange(function () {
        changeVolume(controls.Volume);
    });
    gui.close();
    /*
    var VIGNETTE = gui.addFolder('Vignette');
    VIGNETTE.add(controls, 'Vignette_Effect');
    */
    // get canvas and webgl context
    const canvas = document.getElementById('canvas');
    const gl = canvas.getContext('webgl2');
    if (!gl) {
        alert('WebGL 2 not supported!');
    }
    // `setGL` is a function imported above which sets the value of `gl` in the `globals.ts` module.
    // Later, we can import `gl` from `globals.ts` to access it
    Object(__WEBPACK_IMPORTED_MODULE_7__globals__["c" /* setGL */])(gl);
    // Initial call to load scene
    loadScene();
    const particleSys = new __WEBPACK_IMPORTED_MODULE_10__particle_Particle__["a" /* default */](numParticle);
    particleSys.initialize(150.0, 0.0, 400.0, 100.0, 150.0, 0.0, 0.5, 0.5, 0.7, 0.3, 1.0, -3.0);
    const particleCloud = new __WEBPACK_IMPORTED_MODULE_10__particle_Particle__["a" /* default */](numCloud);
    particleCloud.initialize(50000.0, 0.0, 3000.0, 5000.0, 50000.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0);
    const particleLanternSys = new __WEBPACK_IMPORTED_MODULE_10__particle_Particle__["a" /* default */](numLatern);
    particleLanternSys.initialize(150.0, 0.0, 100.0, -105.0, 150.0, 0.0, 0.5, 0.5, 0.5, 0.3, 0.4, 0.1);
    const particleBoatSys = new __WEBPACK_IMPORTED_MODULE_10__particle_Particle__["a" /* default */](numBoat);
    particleBoatSys.initialize2(250.0, 0.0, 0.0, 0.0, 250.0, 0.0, 900.0, 500.0, 2.0, -1.0, //direction
    2.0, -1.0, //direction
    0.01, 0.005, //speed
    2.0, 3.0); //size
    const particleLeavesSys = new __WEBPACK_IMPORTED_MODULE_10__particle_Particle__["a" /* default */](numLeaves);
    particleLeavesSys.initialize3(10.0, 0.0, 100.0, -100.0, 10.0, 252.0, 0.5, 0.5, 0.5, 0.3, 0.4, 0.1);
    const camera = new __WEBPACK_IMPORTED_MODULE_6__Camera__["a" /* default */]();
    camera.updateOrbit(0.0, 3.0);
    camera.updatePosition(-70, -290);
    camera.updateOrbit(0.0, -3.0);
    camera.updateOrbit(120.0, 0.0);
    const renderer = new __WEBPACK_IMPORTED_MODULE_5__rendering_gl_OpenGLRenderer__["a" /* default */](canvas);
    renderer.setClearColor(0, 0, 0, 1);
    gl.enable(gl.DEPTH_TEST);
    gl.frontFace(gl.CCW);
    renderer.setFrostNoiseTexture(new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]("./src/resources/Noise/lichen_noise.jpg", false).texture);
    renderer.setFireNoiseTexture(new __WEBPACK_IMPORTED_MODULE_9__rendering_gl_Texture__["a" /* default */]("./src/resources/Noise/RGBANoise.jpg", false).texture);
    const standardDeferred = new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(6)),
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(7)),
    ]);
    standardDeferred.setupTexUnits(["AlbedoMap", "SpecularMap", "NormalMap"]);
    const leafDeferred = new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(14)),
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(7)),
    ]);
    leafDeferred.setupTexUnits(["AlbedoMap", "SpecularMap", "NormalMap"]);
    const barkDeferred = new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(15)),
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(7)),
    ]);
    barkDeferred.setupTexUnits(["AlbedoMap", "SpecularMap", "NormalMap"]);
    const translucentDeferred = new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(6)),
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(54)),
    ]);
    translucentDeferred.setupTexUnits(["AlbedoMap", "SpecularMap", "NormalMap"]);
    const standardShadowMapping = new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(6)),
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(8)),
    ]);
    const leafShadowMapping = new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(14)),
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(8)),
    ]);
    const barkShadowMapping = new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(15)),
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(8)),
    ]);
    const feedBackShader = new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(55)),
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(3)),
    ], true, ['o_position', 'o_velocity', 'o_color', 'o_attract']);
    const particleRenderShader = new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(56)),
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(57)),
    ]);
    const feedBackLanternShader = new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(58)),
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(3)),
    ], true, ['o_position', 'o_velocity', 'o_color', 'o_attract']);
    const particleLanternRenderShader = new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(59)),
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(60)),
    ]);
    const feedBackBoatShader = new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(61)),
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(3)),
    ], true, ['o_position', 'o_velocity', 'o_color', 'o_attract']);
    const particleBoatRenderShader = new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(62)),
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(63)),
    ]);
    const feedBackLeavesShader = new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(64)),
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(3)),
    ], true, ['o_position', 'o_velocity', 'o_color', 'o_attract']);
    const particleLeavesRenderShader = new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(65)),
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(66)),
    ]);
    const feedBackCloudShader = new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(67)),
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(3)),
    ], true, ['o_position', 'o_velocity', 'o_color', 'o_attract']);
    const particleCloudRenderShader = new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["b" /* default */]([
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.VERTEX_SHADER, __webpack_require__(68)),
        new __WEBPACK_IMPORTED_MODULE_8__rendering_gl_ShaderProgram__["a" /* Shader */](gl.FRAGMENT_SHADER, __webpack_require__(69)),
    ]);
    //let lightColor : vec4 = vec4.fromValues(1.0, 0.4, 0.05, 1.0);
    let lightColor = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec4 */].fromValues(1.0, 1.0, 1.0, 2.0); // this is for shadow complement
    let lightPosition = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec4 */].fromValues(0.0, 50.0, 0.0, 1.0);
    let lightD = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].create();
    __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].normalize(lightD, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(-1.0, 0.4, 1.0));
    let lightDirection = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec4 */].fromValues(lightD[0], lightD[1], lightD[2], 0.0);
    function getDirLightViewProj(lightDirection, lightPosition, projectionWidth, projectionHeight, near, far) {
        let lightViewProj = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create();
        let halfWidth = projectionWidth / 2;
        let halfHeight = projectionHeight / 2;
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].ortho(lightViewProj, -halfWidth, halfWidth, -halfHeight, halfHeight, near, far);
        let lightViewMat = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create();
        let lightUp = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0.0, 1.0, 0.0);
        let lightFocus = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].create();
        let lightPos = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(lightPosition[0], lightPosition[1], lightPosition[2]);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].add(lightFocus, lightPos, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(-lightDirection[0], -lightDirection[1], -lightDirection[2]));
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].lookAt(lightViewMat, lightPos, lightFocus, lightUp);
        let lightViewProjMat = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create();
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].multiply(lightViewProjMat, lightViewProj, lightViewMat);
        return lightViewProjMat;
    }
    let lightViewProj = getDirLightViewProj(lightDirection, lightPosition, 750, 350, -350, 380);
    function tick() {
        stats.begin();
        CheckTriggers(camera, camera.position, 315, 30, 20, timer.deltaTime);
        camera.update();
        timer.updateTime();
        renderer.updateTime(timer.deltaTime, timer.currentTime);
        //renderer.clear();
        renderer.clearGB();
        renderer.renderToGBuffer(camera, standardDeferred, leafDeferred, barkDeferred, [LS0, LS1, LS2, LS3, mesh_Leaf2, mesh_Bark2, m_shrines_balconis, m_shrines_colums, m_shrines_poles, m_shrines_gold, mesh_B_Outter, mesh_B_Inner, mesh0]);
        renderer.renderToShadowDepth(camera, standardShadowMapping, leafShadowMapping, barkShadowMapping, lightViewProj, [LS0, LS1, LS2, LS3, mesh_lake, mesh_Leaf2, mesh_Bark2, m_shrines_balconis, m_shrines_colums, m_shrines_poles, m_shrines_gold, mesh_B_Outter, mesh_B_Inner, mesh_B_Glass]);
        renderer.renderToTranslucent(camera, translucentDeferred, [mesh_lake, mesh_B_Glass], skyCubeMap.cubemap_texture, lightViewProj, lightColor, lightDirection);
        renderer.renderFromGBuffer(camera, skyCubeMap.cubemap_texture, lightViewProj, lightColor, lightDirection);
        renderer.renderAddTranslucent();
        renderer.renderSSR(camera, skyCubeMap.cubemap_texture, controls.SSR_MaxStep, controls.SSR_Opaque_Intensity, controls.SSR_Trans_Intensity, controls.SSR_Threshold);
        renderer.renderSSRMip();
        for (var m = 0; m < 4; m++) {
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
        for (var i = 0; i < controls.Bloom_Iteration; i++) {
            renderer.renderforHorizontalBlur(camera, i);
            renderer.renderforVerticalBlur(camera);
        }
        renderer.renderforLensFlare(camera, controls.Bloom_Dispersal, controls.Bloom_Distortion);
        for (var i = 0; i < 2; i++) {
            renderer.renderforLensflareHorizontalBlur(camera, i);
            renderer.renderforLensflareVerticalBlur(camera);
        }
        renderer.renderTonemapping(camera, controls.Bloom_Dispersal, controls.Bloom_Distortion, controls.Temperature);
        if (!bNRain)
            renderer.renderRainy(controls.Rain_delaytoStartTimer);
        else if (!bNSnow)
            renderer.renderFrost(controls.Snow_delaytoStartTimer);
        else if (!bNFire)
            renderer.renderFire(controls.Fire_delaytoStartTimer);
        else
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


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/* unused harmony export fromMat4 */
/* unused harmony export clone */
/* unused harmony export copy */
/* unused harmony export fromValues */
/* unused harmony export set */
/* unused harmony export identity */
/* unused harmony export transpose */
/* unused harmony export invert */
/* unused harmony export adjoint */
/* unused harmony export determinant */
/* unused harmony export multiply */
/* unused harmony export translate */
/* unused harmony export rotate */
/* unused harmony export scale */
/* unused harmony export fromTranslation */
/* unused harmony export fromRotation */
/* unused harmony export fromScaling */
/* unused harmony export fromMat2d */
/* unused harmony export fromQuat */
/* unused harmony export normalFromMat4 */
/* unused harmony export projection */
/* unused harmony export str */
/* unused harmony export frob */
/* unused harmony export add */
/* unused harmony export subtract */
/* unused harmony export multiplyScalar */
/* unused harmony export multiplyScalarAndAdd */
/* unused harmony export exactEquals */
/* unused harmony export equals */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(2);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* ARRAY_TYPE */](9);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */
function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}

/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* ARRAY_TYPE */](9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */
function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* ARRAY_TYPE */](9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}

/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */
function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}

/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    let a01 = a[1], a02 = a[2], a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}

/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function invert(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];

  let b01 = a22 * a11 - a12 * a21;
  let b11 = -a22 * a10 + a12 * a20;
  let b21 = a21 * a10 - a11 * a20;

  // Calculate the determinant
  let det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}

/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function adjoint(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];

  out[0] = (a11 * a22 - a12 * a21);
  out[1] = (a02 * a21 - a01 * a22);
  out[2] = (a01 * a12 - a02 * a11);
  out[3] = (a12 * a20 - a10 * a22);
  out[4] = (a00 * a22 - a02 * a20);
  out[5] = (a02 * a10 - a00 * a12);
  out[6] = (a10 * a21 - a11 * a20);
  out[7] = (a01 * a20 - a00 * a21);
  out[8] = (a00 * a11 - a01 * a10);
  return out;
}

/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];

  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}

/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function multiply(out, a, b) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];

  let b00 = b[0], b01 = b[1], b02 = b[2];
  let b10 = b[3], b11 = b[4], b12 = b[5];
  let b20 = b[6], b21 = b[7], b22 = b[8];

  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;

  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;

  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}

/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */
function translate(out, a, v) {
  let a00 = a[0], a01 = a[1], a02 = a[2],
    a10 = a[3], a11 = a[4], a12 = a[5],
    a20 = a[6], a21 = a[7], a22 = a[8],
    x = v[0], y = v[1];

  out[0] = a00;
  out[1] = a01;
  out[2] = a02;

  out[3] = a10;
  out[4] = a11;
  out[5] = a12;

  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}

/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function rotate(out, a, rad) {
  let a00 = a[0], a01 = a[1], a02 = a[2],
    a10 = a[3], a11 = a[4], a12 = a[5],
    a20 = a[6], a21 = a[7], a22 = a[8],

    s = Math.sin(rad),
    c = Math.cos(rad);

  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;

  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;

  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
};

/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/
function scale(out, a, v) {
  let x = v[0], y = v[1];

  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];

  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];

  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat3} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function fromRotation(out, rad) {
  let s = Math.sin(rad), c = Math.cos(rad);

  out[0] = c;
  out[1] = s;
  out[2] = 0;

  out[3] = -s;
  out[4] = c;
  out[5] = 0;

  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat3} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;

  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;

  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/
function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;

  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;

  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}

/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/
function fromQuat(out, q) {
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let yx = y * x2;
  let yy = y * y2;
  let zx = z * x2;
  let zy = z * y2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;

  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;

  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;

  return out;
}

/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/
function normalFromMat4(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

  return out;
}

/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */
function projection(out, width, height) {
    out[0] = 2 / width;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = -2 / height;
    out[5] = 0;
    out[6] = -1;
    out[7] = 1;
    out[8] = 1;
    return out;
}

/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' +
          a[3] + ', ' + a[4] + ', ' + a[5] + ', ' +
          a[6] + ', ' + a[7] + ', ' + a[8] + ')';
}

/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2)))
}

/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}



/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}

/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  out[4] = a[4] + (b[4] * scale);
  out[5] = a[5] + (b[5] * scale);
  out[6] = a[6] + (b[6] * scale);
  out[7] = a[7] + (b[7] * scale);
  out[8] = a[8] + (b[8] * scale);
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] &&
         a[3] === b[3] && a[4] === b[4] && a[5] === b[5] &&
         a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7], a8 = a[8];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
          Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
          Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
          Math.abs(a6 - b6) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
          Math.abs(a7 - b7) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
          Math.abs(a8 - b8) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a8), Math.abs(b8)));
}

/**
 * Alias for {@link mat3.multiply}
 * @function
 */
const mul = multiply;
/* unused harmony export mul */


/**
 * Alias for {@link mat3.subtract}
 * @function
 */
const sub = subtract;
/* unused harmony export sub */



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["length"] = length;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["divide"] = divide;
/* harmony export (immutable) */ __webpack_exports__["ceil"] = ceil;
/* harmony export (immutable) */ __webpack_exports__["floor"] = floor;
/* harmony export (immutable) */ __webpack_exports__["min"] = min;
/* harmony export (immutable) */ __webpack_exports__["max"] = max;
/* harmony export (immutable) */ __webpack_exports__["round"] = round;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["scaleAndAdd"] = scaleAndAdd;
/* harmony export (immutable) */ __webpack_exports__["distance"] = distance;
/* harmony export (immutable) */ __webpack_exports__["squaredDistance"] = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["negate"] = negate;
/* harmony export (immutable) */ __webpack_exports__["inverse"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;
/* harmony export (immutable) */ __webpack_exports__["cross"] = cross;
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["hermite"] = hermite;
/* harmony export (immutable) */ __webpack_exports__["bezier"] = bezier;
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["transformMat4"] = transformMat4;
/* harmony export (immutable) */ __webpack_exports__["transformMat3"] = transformMat3;
/* harmony export (immutable) */ __webpack_exports__["transformQuat"] = transformQuat;
/* harmony export (immutable) */ __webpack_exports__["rotateX"] = rotateX;
/* harmony export (immutable) */ __webpack_exports__["rotateY"] = rotateY;
/* harmony export (immutable) */ __webpack_exports__["rotateZ"] = rotateZ;
/* harmony export (immutable) */ __webpack_exports__["angle"] = angle;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(2);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* ARRAY_TYPE */](3);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  return out;
}

/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */
function clone(a) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* ARRAY_TYPE */](3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  return Math.sqrt(x*x + y*y + z*z);
}

/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
function fromValues(x, y, z) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* ARRAY_TYPE */](3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}

/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to ceil
 * @returns {vec3} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}

/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to floor
 * @returns {vec3} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}

/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}

/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}

/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to round
 * @returns {vec3} out
 */
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  return out;
}

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  return Math.sqrt(x*x + y*y + z*z);
}

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  return x*x + y*y + z*z;
}

/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  return x*x + y*y + z*z;
}

/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}

/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize(out, a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let len = x*x + y*y + z*z;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    out[2] = a[2] * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
  let ax = a[0], ay = a[1], az = a[2];
  let bx = b[0], by = b[1], bz = b[2];

  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function lerp(out, a, b, t) {
  let ax = a[0];
  let ay = a[1];
  let az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}

/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function hermite(out, a, b, c, d, t) {
  let factorTimes2 = t * t;
  let factor1 = factorTimes2 * (2 * t - 3) + 1;
  let factor2 = factorTimes2 * (t - 2) + t;
  let factor3 = factorTimes2 * (t - 1);
  let factor4 = factorTimes2 * (3 - 2 * t);

  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

  return out;
}

/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function bezier(out, a, b, c, d, t) {
  let inverseFactor = 1 - t;
  let inverseFactorTimesTwo = inverseFactor * inverseFactor;
  let factorTimes2 = t * t;
  let factor1 = inverseFactorTimesTwo * inverseFactor;
  let factor2 = 3 * t * inverseFactorTimesTwo;
  let factor3 = 3 * factorTimes2 * inverseFactor;
  let factor4 = factorTimes2 * t;

  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */
function random(out, scale) {
  scale = scale || 1.0;

  let r = __WEBPACK_IMPORTED_MODULE_0__common__["c" /* RANDOM */]() * 2.0 * Math.PI;
  let z = (__WEBPACK_IMPORTED_MODULE_0__common__["c" /* RANDOM */]() * 2.0) - 1.0;
  let zScale = Math.sqrt(1.0-z*z) * scale;

  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
function transformMat4(out, a, m) {
  let x = a[0], y = a[1], z = a[2];
  let w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}

/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
function transformMat3(out, a, m) {
  let x = a[0], y = a[1], z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}

/**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */
function transformQuat(out, a, q) {
  // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations

  let x = a[0], y = a[1], z = a[2];
  let qx = q[0], qy = q[1], qz = q[2], qw = q[3];

  // calculate quat * vec
  let ix = qw * x + qy * z - qz * y;
  let iy = qw * y + qz * x - qx * z;
  let iz = qw * z + qx * y - qy * x;
  let iw = -qx * x - qy * y - qz * z;

  // calculate result * inverse quat
  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  return out;
}

/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateX(out, a, b, c){
  let p = [], r=[];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[0];
  r[1] = p[1]*Math.cos(c) - p[2]*Math.sin(c);
  r[2] = p[1]*Math.sin(c) + p[2]*Math.cos(c);

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateY(out, a, b, c){
  let p = [], r=[];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[2]*Math.sin(c) + p[0]*Math.cos(c);
  r[1] = p[1];
  r[2] = p[2]*Math.cos(c) - p[0]*Math.sin(c);

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateZ(out, a, b, c){
  let p = [], r=[];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[0]*Math.cos(c) - p[1]*Math.sin(c);
  r[1] = p[0]*Math.sin(c) + p[1]*Math.cos(c);
  r[2] = p[2];

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */
function angle(a, b) {
  let tempA = fromValues(a[0], a[1], a[2]);
  let tempB = fromValues(b[0], b[1], b[2]);

  normalize(tempA, tempA);
  normalize(tempB, tempB);

  let cosine = dot(tempA, tempB);

  if(cosine > 1.0) {
    return 0;
  }
  else if(cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2];
  let b0 = b[0], b1 = b[1], b2 = b[2];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a2), Math.abs(b2)));
}

/**
 * Alias for {@link vec3.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;


/**
 * Alias for {@link vec3.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link vec3.divide}
 * @function
 */
const div = divide;
/* harmony export (immutable) */ __webpack_exports__["div"] = div;


/**
 * Alias for {@link vec3.distance}
 * @function
 */
const dist = distance;
/* harmony export (immutable) */ __webpack_exports__["dist"] = dist;


/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */
const sqrDist = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["sqrDist"] = sqrDist;


/**
 * Alias for {@link vec3.length}
 * @function
 */
const len = length;
/* harmony export (immutable) */ __webpack_exports__["len"] = len;


/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */
const sqrLen = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["sqrLen"] = sqrLen;


/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach = (function() {
  let vec = create();

  return function(a, stride, offset, count, fn, arg) {
    let i, l;
    if(!stride) {
      stride = 3;
    }

    if(!offset) {
      offset = 0;
    }

    if(count) {
      l = Math.min((count * stride) + offset, a.length);
    } else {
      l = a.length;
    }

    for(i = offset; i < l; i += stride) {
      vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2];
      fn(vec, vec, arg);
      a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2];
    }

    return a;
  };
})();
/* harmony export (immutable) */ __webpack_exports__["forEach"] = forEach;



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["divide"] = divide;
/* harmony export (immutable) */ __webpack_exports__["ceil"] = ceil;
/* harmony export (immutable) */ __webpack_exports__["floor"] = floor;
/* harmony export (immutable) */ __webpack_exports__["min"] = min;
/* harmony export (immutable) */ __webpack_exports__["max"] = max;
/* harmony export (immutable) */ __webpack_exports__["round"] = round;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["scaleAndAdd"] = scaleAndAdd;
/* harmony export (immutable) */ __webpack_exports__["distance"] = distance;
/* harmony export (immutable) */ __webpack_exports__["squaredDistance"] = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["length"] = length;
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["negate"] = negate;
/* harmony export (immutable) */ __webpack_exports__["inverse"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["transformMat4"] = transformMat4;
/* harmony export (immutable) */ __webpack_exports__["transformQuat"] = transformQuat;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(2);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* ARRAY_TYPE */](4);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  return out;
}

/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* ARRAY_TYPE */](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */
function fromValues(x, y, z, w) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* ARRAY_TYPE */](4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}

/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}

/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}

/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}

/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}

/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to ceil
 * @returns {vec4} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}

/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to floor
 * @returns {vec4} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}

/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}

/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}

/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to round
 * @returns {vec4} out
 */
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}

/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}

/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  return out;
}

/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  let w = b[3] - a[3];
  return Math.sqrt(x*x + y*y + z*z + w*w);
}

/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  let w = b[3] - a[3];
  return x*x + y*y + z*z + w*w;
}

/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  return Math.sqrt(x*x + y*y + z*z + w*w);
}

/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  return x*x + y*y + z*z + w*w;
}

/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}

/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
}

/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */
function normalize(out, a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  let len = x*x + y*y + z*z + w*w;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    out[0] = x * len;
    out[1] = y * len;
    out[2] = z * len;
    out[3] = w * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}

/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */
function lerp(out, a, b, t) {
  let ax = a[0];
  let ay = a[1];
  let az = a[2];
  let aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */
function random(out, vectorScale) {
  vectorScale = vectorScale || 1.0;

  //TODO: This is a pretty awful way of doing this. Find something better.
  out[0] = __WEBPACK_IMPORTED_MODULE_0__common__["c" /* RANDOM */]();
  out[1] = __WEBPACK_IMPORTED_MODULE_0__common__["c" /* RANDOM */]();
  out[2] = __WEBPACK_IMPORTED_MODULE_0__common__["c" /* RANDOM */]();
  out[3] = __WEBPACK_IMPORTED_MODULE_0__common__["c" /* RANDOM */]();
  normalize(out, out);
  scale(out, out, vectorScale);
  return out;
}

/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */
function transformMat4(out, a, m) {
  let x = a[0], y = a[1], z = a[2], w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}

/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */
function transformQuat(out, a, q) {
  let x = a[0], y = a[1], z = a[2];
  let qx = q[0], qy = q[1], qz = q[2], qw = q[3];

  // calculate quat * vec
  let ix = qw * x + qy * z - qz * y;
  let iy = qw * y + qz * x - qx * z;
  let iz = qw * z + qx * y - qy * x;
  let iw = -qx * x - qy * y - qz * z;

  // calculate result * inverse quat
  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a3), Math.abs(b3)));
}

/**
 * Alias for {@link vec4.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;


/**
 * Alias for {@link vec4.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link vec4.divide}
 * @function
 */
const div = divide;
/* harmony export (immutable) */ __webpack_exports__["div"] = div;


/**
 * Alias for {@link vec4.distance}
 * @function
 */
const dist = distance;
/* harmony export (immutable) */ __webpack_exports__["dist"] = dist;


/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */
const sqrDist = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["sqrDist"] = sqrDist;


/**
 * Alias for {@link vec4.length}
 * @function
 */
const len = length;
/* harmony export (immutable) */ __webpack_exports__["len"] = len;


/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */
const sqrLen = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["sqrLen"] = sqrLen;


/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach = (function() {
  let vec = create();

  return function(a, stride, offset, count, fn, arg) {
    let i, l;
    if(!stride) {
      stride = 4;
    }

    if(!offset) {
      offset = 0;
    }

    if(count) {
      l = Math.min((count * stride) + offset, a.length);
    } else {
      l = a.length;
    }

    for(i = offset; i < l; i += stride) {
      vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2]; vec[3] = a[i+3];
      fn(vec, vec, arg);
      a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2]; a[i+3] = vec[3];
    }

    return a;
  };
})();
/* harmony export (immutable) */ __webpack_exports__["forEach"] = forEach;



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rendering_gl_Drawable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__(1);



class Square extends __WEBPACK_IMPORTED_MODULE_1__rendering_gl_Drawable__["a" /* default */] {
    constructor(center) {
        super(); // Call the constructor of the super class. This is required.
        this.center = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec4 */].fromValues(center[0], center[1], center[2], 1);
    }
    create() {
        this.indices = new Uint32Array([0, 1, 2]);
        this.normals = new Float32Array([0, 0, 1, 0,
            0, 0, 1, 0,
            0, 0, 1, 0]);
        this.positions = new Float32Array([-1, -1, 0.999999, 1,
            3, -1, 0.999999, 1,
            -1, 3, 0.999999, 1]);
        this.uvs = new Float32Array([0.0, 1.0,
            2.0, 1.0,
            0.0, -1.0]);
        this.colors = new Float32Array([
            1.0, 0.5, 0.5, 1.0,
            1.0, 0.5, 0.5, 1.0,
            1.0, 0.5, 0.5, 1.0
        ]);
        this.generateIdx();
        this.generatePos();
        this.generateNor();
        this.generateUV();
        this.generateCol();
        this.count = this.indices.length;
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.bufIdx);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.indices, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufNor);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.normals, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufPos);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.positions, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufCol);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.colors, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufUV);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.uvs, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (Square);


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\nuniform mat4 u_Model;\r\nuniform mat4 u_ModelInvTr;  \r\n\r\nuniform mat4 u_View;   \r\nuniform mat4 u_Proj; \r\nuniform mat4 u_ViewProj;\r\n\r\nuniform float u_Time;\r\nuniform vec4 u_Center;\r\n\r\nin vec4 vs_Pos;\r\nin vec4 vs_Nor;\r\nin vec4 vs_Col;\r\nin vec2 vs_UV;\r\n\r\nout vec4 fs_Pos;\r\nout vec4 fs_Nor;            \r\nout vec4 fs_Col;           \r\nout vec2 fs_UV;\r\n\r\n#define SIDE_TO_SIDE_FREQ1 0.475\r\n#define SIDE_TO_SIDE_FREQ2 0.193\r\n#define UP_AND_DOWN_FREQ1 0.095\r\n#define UP_AND_DOWN_FREQ2 0.043\r\n\r\nvec4 SmoothCurve( vec4 x ) {\r\n  return x * x * ( vec4(3.0f,3.0f,3.0f,3.0f) - 2.0 * x ) ;\r\n}\r\nvec4 TriangleWave( vec4 x ) {\r\n  return abs( fract( x + 0.5 ) * 2.0 - 1.0 );\r\n}\r\nvec4 SmoothTriangleWave( vec4 x ) {\r\n  return SmoothCurve( TriangleWave( x ) );\r\n}\r\n\r\nvoid ApplyMainBending(inout vec3 vPos, vec2 vWind, float fBendScale){\r\n\t// Calculate the length from the ground, since we'll need it.\r\n\tfloat fLength = length(vPos);\r\n\t// Bend factor - Wind variation is done on the CPU.\r\n\tfloat fBF = vPos.y * fBendScale;\r\n\t// Smooth bending factor and increase its nearby height limit.\r\n\tfBF += 1.0;\r\n\tfBF *= fBF;\r\n\tfBF = fBF * fBF - fBF;\r\n\tfBF = fBF * fBF;\r\n\t// Displace position\r\n\tvec3 vNewPos = vPos;\r\n\tvNewPos.xz += vWind.xy * fBF;\r\n\tvPos.xyz = normalize(vNewPos.xyz)* fLength;\r\n}\r\n\r\nvoid ApplyDetailBending(\r\n\tinout vec3 vPos,\t\t// The final world position of the vertex being modified\r\n\tvec2 Wind,\r\n\tvec3 vNormal,\t\t\t// The world normal for this vertex\r\n\tvec3 objectPosition,\t        // The world position of the plant instance (same for all vertices)\r\n\tfloat fDetailPhase,\t\t// Optional phase for side-to-side. This is used to vary the phase for side-to-side motion\r\n\tfloat fBranchPhase,\t\t// The green vertex channel per Crytek's convention\r\n\tfloat fTime,\t\t\t// Ever-increasing time value (e.g. seconds ellapsed)\r\n\tfloat fEdgeAtten,\t\t// \"Leaf stiffness\", red vertex channel per Crytek's convention\r\n\tfloat fBranchAtten,\t\t// \"Overall stiffness\", *inverse* of blue channel per Crytek's convention\r\n\tfloat fBranchAmp,\t\t// Controls how much up and down\r\n\tfloat fSpeed,\t\t\t// Controls how quickly the leaf oscillates\r\n\tfloat fDetailFreq,\t\t// Same thing as fSpeed (they could really be combined, but I suspect\r\n\t\t// this could be used to let you additionally control the speed per vertex).\r\n\tfloat fDetailAmp\t\t// Controls how much back and forth\r\n\t)\t\t\r\n{\r\n\t// Phases (object, vertex, branch)\r\n\t// fObjPhase: This ensures phase is different for different plant instances, but it should be\r\n\t// the same value for all vertices of the same plant.\r\n\tfloat fObjPhase = dot(objectPosition.xyz, vec3(1));  \r\n\tfBranchPhase += fObjPhase;\r\n\tfloat fVtxPhase = dot(vPos.xyz, vec3(fDetailPhase + fBranchPhase));  \r\n\r\n\tvec2 vWavesIn = vec2(fTime) + vec2(fVtxPhase, fBranchPhase );\r\n\tvec4 vWaves = (fract( vWavesIn.xxyy *\r\n\t\t\t\t\t   vec4(SIDE_TO_SIDE_FREQ1, SIDE_TO_SIDE_FREQ2, UP_AND_DOWN_FREQ1, UP_AND_DOWN_FREQ2) ) *\r\n\t\t\t\t\t   2.0 - 1.0 ) * fSpeed * fDetailFreq;\r\n\tvWaves = SmoothTriangleWave( vWaves );\r\n\tvec2 vWavesSum = vWaves.xz + vWaves.yw;  \r\n\r\n\t// -fBranchAtten is how restricted this vertex of the leaf/branch is. e.g. close to the stem\r\n\t//  it should be 0 (maximum stiffness). At the far outer edge it might be 1.\r\n\t//  In this sample, this is controlled by the blue vertex color.\r\n\t// -fEdgeAtten controls movement in the plane of the leaf/branch. It is controlled by the\r\n\t//  red vertex color in this sample. It is supposed to represent \"leaf stiffness\". Generally, it\r\n\t//  should be 0 in the middle of the leaf (maximum stiffness), and 1 on the outer edges.\r\n\t// -Note that this is different from the Crytek code, in that we use vPos.xzy instead of vPos.xyz,\r\n\t//  because I treat y as the up-and-down direction.\r\n    // vPos.xyz += vWavesSum.x * vec3(fEdgeAtten * fDetailAmp * vNormal.xyz);\r\n    // vPos.y += vWavesSum.y * fBranchAtten * fBranchAmp;\r\n    vPos.xyz +=  vWavesSum.xxy * vec3(fEdgeAtten * fDetailAmp *\r\n                            vNormal.xy, fBranchAtten * fBranchAmp);\r\n}\r\n\r\nvoid main()\r\n{\r\n\tvec3 vPos=vec3(u_Model * vs_Pos);\r\n\tvec3 normalDir=normalize(vec3(u_ModelInvTr * vs_Nor));\r\n\r\n\tvec3 objectPosition = vec3(u_Center);\r\n\tvPos -= objectPosition;\t// Reset the vertex to base-zero\r\n\t//Wind\r\n\tvec3 wind_dir = normalize(vec3(0.5, 0, 0));\r\n    float wind_speed = 1.0;\r\n    float wave_division_width = 1.0;\r\n    float wave_info = (cos((dot(objectPosition, wind_dir) - wind_speed * u_Time) / wave_division_width) + 0.7);\r\n\t\r\n\tfloat wind_power = 15.0f;\r\n    //vec3 w = wind_dir * wind_power * wave_info * fd * fr;\r\n\tvec3 w=wind_dir * wind_power * wave_info;\r\n\tvec2 Wind=vec2(w.x*0.05,w.z*0.05);\r\n\r\n\tfloat BendScale=0.0125;\r\n\tApplyMainBending(vPos, Wind, BendScale);\r\n\tvPos += objectPosition;\r\n\r\n\r\n\tfloat BranchAmp=0.2;\r\n\tfloat DetailAmp=0.1;\r\n\tvec2 WindDetail = vec2(w.x * 0.5,w.z*0.5);\r\n\tfloat windStrength = length(WindDetail);\r\n\tApplyDetailBending(\r\n\t\tvPos,\r\n\t\tWindDetail,\r\n\t\tnormalDir,\r\n\t\tobjectPosition,\r\n\t\t0.0,\t\t\t\t\t// Leaf phase - not used in this scenario, but would allow for variation in side-to-side motion\r\n\t\tvs_Col.g,\t\t// Branch phase - should be the same for all verts in a leaf/branch.\r\n\t\tu_Time,\r\n\t\tvs_Col.r,\t\t// edge attenuation, leaf stiffness\r\n\t\t1.0 - vs_Col.b,  // branch attenuation. High values close to stem, low values furthest from stem.\r\n\t\t\t\t// For some reason, Crysis uses solid blue for non-moving, and black for most movement.\r\n\t\t\t\t// So we invert the blue value here.\r\n\t\tBranchAmp * windStrength, // branch amplitude. Play with this until it looks good.\r\n\t\t0.5f,\t\t\t\t\t// Speed. Play with this until it looks good.\r\n\t\t0.13f,\t\t\t\t\t// Detail frequency. Keep this at 1 unless you want to have different per-leaf frequency\r\n\t\tDetailAmp * windStrength\t// Detail amplitude. Play with this until it looks good.\r\n\t\t);\r\n\r\n\tfs_Col = vs_Col;\r\n    fs_UV = vs_UV;\r\n    fs_UV.y = fs_UV.y;\r\n  \r\n    fs_Nor = vs_Nor;\r\n    vec4 new_localPos = inverse(u_Model) * vec4(vPos, 1.0);\r\n    new_localPos /= new_localPos.w;\r\n    fs_Pos = new_localPos;    \r\n\r\n    gl_Position = u_ViewProj * vec4(vPos, 1.0);\r\n}\r\n"

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\nprecision highp float;\n\nuniform mat4 u_Model;\nuniform mat4 u_ModelInvTr;  \n\nuniform mat4 u_View;   \nuniform mat4 u_Proj; \nuniform mat4 u_ViewProj;\n\nuniform float u_Time;\nuniform vec4 u_Center;\n\nin vec4 vs_Pos;\nin vec4 vs_Nor;\nin vec4 vs_Col;\nin vec2 vs_UV;\n\nout vec4 fs_Pos;\nout vec4 fs_Nor;            \nout vec4 fs_Col;           \nout vec2 fs_UV;\n\nvoid ApplyMainBending(inout vec3 vPos, vec2 vWind, float fBendScale){\n\t// Calculate the length from the ground, since we'll need it.\n\tfloat fLength = length(vPos);\n\t// Bend factor - Wind variation is done on the CPU.\n\tfloat fBF = vPos.y * fBendScale;\n\t// Smooth bending factor and increase its nearby height limit.\n\tfBF += 1.0;\n\tfBF *= fBF;\n\tfBF = fBF * fBF - fBF;\n\tfBF = fBF * fBF;\n\t// Displace position\n\tvec3 vNewPos = vPos;\n\tvNewPos.xz += vWind.xy * fBF;\n\tvPos.xyz = normalize(vNewPos.xyz)* fLength;\n}\n\n\nvoid main()\n{\n\tvec3 vPos=vec3(u_Model * vs_Pos);\t\n\n    \n\tvec3 objectPosition = vec3(u_Center);\n\tvPos -= objectPosition;\t// Reset the vertex to base-zero\n\t//Wind\n\tvec3 wind_dir = normalize(vec3(0.5, 0, 0));\n    float wind_speed = 1.0;\n    float wave_division_width = 1.0;\n    float wave_info = (cos((dot(objectPosition, wind_dir) - wind_speed * u_Time) / wave_division_width) + 0.7);\n\t\n\tfloat wind_power = 15.0f;\n    //vec3 w = wind_dir * wind_power * wave_info * fd * fr;\n\tvec3 w=wind_dir * wind_power * wave_info*0.05;\n\tvec2 Wind=vec2(w.x,w.z);\n\n\tfloat BendScale=0.0125;\n\tApplyMainBending(vPos, Wind, BendScale);\n\tvPos += objectPosition;\n\n\tfs_Col = vs_Col;\n    fs_UV = vs_UV;\n    fs_UV.y = fs_UV.y;\n  \n    fs_Nor = vs_Nor;\n    vec4 new_localPos = inverse(u_Model) * vec4(vPos, 1.0);\n    new_localPos /= new_localPos.w;\n    fs_Pos = new_localPos;     \n\n    gl_Position = u_ViewProj * vec4(vPos, 1.0);\n}\n"

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create */
/* unused harmony export clone */
/* unused harmony export copy */
/* unused harmony export identity */
/* unused harmony export fromValues */
/* unused harmony export set */
/* unused harmony export transpose */
/* unused harmony export invert */
/* unused harmony export adjoint */
/* unused harmony export determinant */
/* unused harmony export multiply */
/* unused harmony export rotate */
/* unused harmony export scale */
/* unused harmony export fromRotation */
/* unused harmony export fromScaling */
/* unused harmony export str */
/* unused harmony export frob */
/* unused harmony export LDU */
/* unused harmony export add */
/* unused harmony export subtract */
/* unused harmony export exactEquals */
/* unused harmony export equals */
/* unused harmony export multiplyScalar */
/* unused harmony export multiplyScalarAndAdd */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(2);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 2x2 Matrix
 * @module mat2
 */

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* ARRAY_TYPE */](4);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {mat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* ARRAY_TYPE */](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */
function fromValues(m00, m01, m10, m11) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* ARRAY_TYPE */](4);
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}

/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */
function set(out, m00, m01, m10, m11) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}

/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache
  // some values
  if (out === a) {
    let a1 = a[1];
    out[1] = a[2];
    out[2] = a1;
  } else {
    out[0] = a[0];
    out[1] = a[2];
    out[2] = a[1];
    out[3] = a[3];
  }

  return out;
}

/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function invert(out, a) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];

  // Calculate the determinant
  let det = a0 * a3 - a2 * a1;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] =  a3 * det;
  out[1] = -a1 * det;
  out[2] = -a2 * det;
  out[3] =  a0 * det;

  return out;
}

/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function adjoint(out, a) {
  // Caching this value is nessecary if out == a
  let a0 = a[0];
  out[0] =  a[3];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] =  a0;

  return out;
}

/**
 * Calculates the determinant of a mat2
 *
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  return a[0] * a[3] - a[2] * a[1];
}

/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function multiply(out, a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  return out;
}

/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
function rotate(out, a, rad) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  out[0] = a0 *  c + a2 * s;
  out[1] = a1 *  c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  return out;
}

/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/
function scale(out, a, v) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let v0 = v[0], v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
function fromRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  return out;
}

/**
 * Returns a string representation of a mat2
 *
 * @param {mat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Returns Frobenius norm of a mat2
 *
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2)))
}

/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {mat2} L the lower triangular matrix
 * @param {mat2} D the diagonal matrix
 * @param {mat2} U the upper triangular matrix
 * @param {mat2} a the input matrix to factorize
 */

function LDU(L, D, U, a) {
  L[2] = a[2]/a[0];
  U[0] = a[0];
  U[1] = a[1];
  U[3] = a[3] - L[2] * U[1];
  return [L, D, U];
}

/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a3), Math.abs(b3)));
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}

/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  return out;
}

/**
 * Alias for {@link mat2.multiply}
 * @function
 */
const mul = multiply;
/* unused harmony export mul */


/**
 * Alias for {@link mat2.subtract}
 * @function
 */
const sub = subtract;
/* unused harmony export sub */



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create */
/* unused harmony export clone */
/* unused harmony export copy */
/* unused harmony export identity */
/* unused harmony export fromValues */
/* unused harmony export set */
/* unused harmony export invert */
/* unused harmony export determinant */
/* unused harmony export multiply */
/* unused harmony export rotate */
/* unused harmony export scale */
/* unused harmony export translate */
/* unused harmony export fromRotation */
/* unused harmony export fromScaling */
/* unused harmony export fromTranslation */
/* unused harmony export str */
/* unused harmony export frob */
/* unused harmony export add */
/* unused harmony export subtract */
/* unused harmony export multiplyScalar */
/* unused harmony export multiplyScalarAndAdd */
/* unused harmony export exactEquals */
/* unused harmony export equals */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(2);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 2x3 Matrix
 * @module mat2d
 *
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, c, tx,
 *  b, d, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, c, tx,
 *  b, d, ty,
 *  0, 0, 1]
 * </pre>
 * The last row is ignored so the array is shorter and operations are faster.
 */

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* ARRAY_TYPE */](6);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {mat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* ARRAY_TYPE */](6);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}

/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}

/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */
function fromValues(a, b, c, d, tx, ty) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* ARRAY_TYPE */](6);
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}

/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */
function set(out, a, b, c, d, tx, ty) {
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}

/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
function invert(out, a) {
  let aa = a[0], ab = a[1], ac = a[2], ad = a[3];
  let atx = a[4], aty = a[5];

  let det = aa * ad - ab * ac;
  if(!det){
    return null;
  }
  det = 1.0 / det;

  out[0] = ad * det;
  out[1] = -ab * det;
  out[2] = -ac * det;
  out[3] = aa * det;
  out[4] = (ac * aty - ad * atx) * det;
  out[5] = (ab * atx - aa * aty) * det;
  return out;
}

/**
 * Calculates the determinant of a mat2d
 *
 * @param {mat2d} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  return a[0] * a[3] - a[1] * a[2];
}

/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function multiply(out, a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  out[4] = a0 * b4 + a2 * b5 + a4;
  out[5] = a1 * b4 + a3 * b5 + a5;
  return out;
}

/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
function rotate(out, a, rad) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  out[0] = a0 *  c + a2 * s;
  out[1] = a1 *  c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  out[4] = a4;
  out[5] = a5;
  return out;
}

/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/
function scale(out, a, v) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let v0 = v[0], v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  out[4] = a4;
  out[5] = a5;
  return out;
}

/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/
function translate(out, a, v) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let v0 = v[0], v1 = v[1];
  out[0] = a0;
  out[1] = a1;
  out[2] = a2;
  out[3] = a3;
  out[4] = a0 * v0 + a2 * v1 + a4;
  out[5] = a1 * v0 + a3 * v1 + a5;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
function fromRotation(out, rad) {
  let s = Math.sin(rad), c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2d} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat2d} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = v[0];
  out[5] = v[1];
  return out;
}

/**
 * Returns a string representation of a mat2d
 *
 * @param {mat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' +
          a[3] + ', ' + a[4] + ', ' + a[5] + ')';
}

/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {mat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1))
}

/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  return out;
}

/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  out[4] = a[4] + (b[4] * scale);
  out[5] = a[5] + (b[5] * scale);
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
          Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
          Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a5), Math.abs(b5)));
}

/**
 * Alias for {@link mat2d.multiply}
 * @function
 */
const mul = multiply;
/* unused harmony export mul */


/**
 * Alias for {@link mat2d.subtract}
 * @function
 */
const sub = subtract;
/* unused harmony export sub */



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["transpose"] = transpose;
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;
/* harmony export (immutable) */ __webpack_exports__["adjoint"] = adjoint;
/* harmony export (immutable) */ __webpack_exports__["determinant"] = determinant;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["translate"] = translate;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["rotate"] = rotate;
/* harmony export (immutable) */ __webpack_exports__["rotateX"] = rotateX;
/* harmony export (immutable) */ __webpack_exports__["rotateY"] = rotateY;
/* harmony export (immutable) */ __webpack_exports__["rotateZ"] = rotateZ;
/* harmony export (immutable) */ __webpack_exports__["fromTranslation"] = fromTranslation;
/* harmony export (immutable) */ __webpack_exports__["fromScaling"] = fromScaling;
/* harmony export (immutable) */ __webpack_exports__["fromRotation"] = fromRotation;
/* harmony export (immutable) */ __webpack_exports__["fromXRotation"] = fromXRotation;
/* harmony export (immutable) */ __webpack_exports__["fromYRotation"] = fromYRotation;
/* harmony export (immutable) */ __webpack_exports__["fromZRotation"] = fromZRotation;
/* harmony export (immutable) */ __webpack_exports__["fromRotationTranslation"] = fromRotationTranslation;
/* harmony export (immutable) */ __webpack_exports__["getTranslation"] = getTranslation;
/* harmony export (immutable) */ __webpack_exports__["getScaling"] = getScaling;
/* harmony export (immutable) */ __webpack_exports__["getRotation"] = getRotation;
/* harmony export (immutable) */ __webpack_exports__["fromRotationTranslationScale"] = fromRotationTranslationScale;
/* harmony export (immutable) */ __webpack_exports__["fromRotationTranslationScaleOrigin"] = fromRotationTranslationScaleOrigin;
/* harmony export (immutable) */ __webpack_exports__["fromQuat"] = fromQuat;
/* harmony export (immutable) */ __webpack_exports__["frustum"] = frustum;
/* harmony export (immutable) */ __webpack_exports__["perspective"] = perspective;
/* harmony export (immutable) */ __webpack_exports__["perspectiveFromFieldOfView"] = perspectiveFromFieldOfView;
/* harmony export (immutable) */ __webpack_exports__["ortho"] = ortho;
/* harmony export (immutable) */ __webpack_exports__["lookAt"] = lookAt;
/* harmony export (immutable) */ __webpack_exports__["targetTo"] = targetTo;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["frob"] = frob;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalar"] = multiplyScalar;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalarAndAdd"] = multiplyScalarAndAdd;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(2);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 4x4 Matrix
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* ARRAY_TYPE */](16);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* ARRAY_TYPE */](16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */
function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* ARRAY_TYPE */](16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}

/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */
function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}


/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    let a01 = a[1], a02 = a[2], a03 = a[3];
    let a12 = a[6], a13 = a[7];
    let a23 = a[11];

    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function invert(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

  return out;
}

/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function adjoint(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  out[0]  =  (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22));
  out[1]  = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2]  =  (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12));
  out[3]  = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4]  = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5]  =  (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22));
  out[6]  = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7]  =  (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12));
  out[8]  =  (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21));
  out[9]  = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] =  (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11));
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] =  (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21));
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] =  (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11));
  return out;
}

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}

/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function multiply(out, a, b) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  // Cache only the current line of the second matrix
  let b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

  b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
  out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

  b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
  out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

  b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
  out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
  return out;
}

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
function translate(out, a, v) {
  let x = v[0], y = v[1], z = v[2];
  let a00, a01, a02, a03;
  let a10, a11, a12, a13;
  let a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
    a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
    a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

    out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
    out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
    out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;

    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}

/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
function scale(out, a, v) {
  let x = v[0], y = v[1], z = v[2];

  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function rotate(out, a, rad, axis) {
  let x = axis[0], y = axis[1], z = axis[2];
  let len = Math.sqrt(x * x + y * y + z * z);
  let s, c, t;
  let a00, a01, a02, a03;
  let a10, a11, a12, a13;
  let a20, a21, a22, a23;
  let b00, b01, b02;
  let b10, b11, b12;
  let b20, b21, b22;

  if (Math.abs(len) < __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]) { return null; }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;

  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;

  a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
  a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
  a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

  // Construct the elements of the rotation matrix
  b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
  b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
  b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;

  // Perform rotation-specific matrix multiplication
  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) { // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  return out;
}

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateX(out, a, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  let a10 = a[4];
  let a11 = a[5];
  let a12 = a[6];
  let a13 = a[7];
  let a20 = a[8];
  let a21 = a[9];
  let a22 = a[10];
  let a23 = a[11];

  if (a !== out) { // If the source and destination differ, copy the unchanged rows
    out[0]  = a[0];
    out[1]  = a[1];
    out[2]  = a[2];
    out[3]  = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}

/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateY(out, a, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  let a00 = a[0];
  let a01 = a[1];
  let a02 = a[2];
  let a03 = a[3];
  let a20 = a[8];
  let a21 = a[9];
  let a22 = a[10];
  let a23 = a[11];

  if (a !== out) { // If the source and destination differ, copy the unchanged rows
    out[4]  = a[4];
    out[5]  = a[5];
    out[6]  = a[6];
    out[7]  = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}

/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateZ(out, a, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  let a00 = a[0];
  let a01 = a[1];
  let a02 = a[2];
  let a03 = a[3];
  let a10 = a[4];
  let a11 = a[5];
  let a12 = a[6];
  let a13 = a[7];

  if (a !== out) { // If the source and destination differ, copy the unchanged last row
    out[8]  = a[8];
    out[9]  = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Scaling vector
 * @returns {mat4} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function fromRotation(out, rad, axis) {
  let x = axis[0], y = axis[1], z = axis[2];
  let len = Math.sqrt(x * x + y * y + z * z);
  let s, c, t;

  if (Math.abs(len) < __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]) { return null; }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;

  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;

  // Perform rotation-specific matrix multiplication
  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromXRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0]  = 1;
  out[1]  = 0;
  out[2]  = 0;
  out[3]  = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromYRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0]  = c;
  out[1]  = 0;
  out[2]  = -s;
  out[3]  = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromZRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0]  = c;
  out[1]  = s;
  out[2]  = 0;
  out[3]  = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromRotationTranslation(out, q, v) {
  // Quaternion math
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;

  return out;
}

/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];

  return out;
}

/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getScaling(out, mat) {
  let m11 = mat[0];
  let m12 = mat[1];
  let m13 = mat[2];
  let m21 = mat[4];
  let m22 = mat[5];
  let m23 = mat[6];
  let m31 = mat[8];
  let m32 = mat[9];
  let m33 = mat[10];

  out[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
  out[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
  out[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);

  return out;
}

/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */
function getRotation(out, mat) {
  // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
  let trace = mat[0] + mat[5] + mat[10];
  let S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (mat[6] - mat[9]) / S;
    out[1] = (mat[8] - mat[2]) / S;
    out[2] = (mat[1] - mat[4]) / S;
  } else if ((mat[0] > mat[5])&(mat[0] > mat[10])) {
    S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
    out[3] = (mat[6] - mat[9]) / S;
    out[0] = 0.25 * S;
    out[1] = (mat[1] + mat[4]) / S;
    out[2] = (mat[8] + mat[2]) / S;
  } else if (mat[5] > mat[10]) {
    S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
    out[3] = (mat[8] - mat[2]) / S;
    out[0] = (mat[1] + mat[4]) / S;
    out[1] = 0.25 * S;
    out[2] = (mat[6] + mat[9]) / S;
  } else {
    S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
    out[3] = (mat[1] - mat[4]) / S;
    out[0] = (mat[8] + mat[2]) / S;
    out[1] = (mat[6] + mat[9]) / S;
    out[2] = 0.25 * S;
  }

  return out;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */
function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;
  let sx = s[0];
  let sy = s[1];
  let sz = s[2];

  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;

  return out;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @param {vec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */
function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  let sx = s[0];
  let sy = s[1];
  let sz = s[2];

  let ox = o[0];
  let oy = o[1];
  let oz = o[2];

  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0] + ox - (out[0] * ox + out[4] * oy + out[8] * oz);
  out[13] = v[1] + oy - (out[1] * ox + out[5] * oy + out[9] * oz);
  out[14] = v[2] + oz - (out[2] * ox + out[6] * oy + out[10] * oz);
  out[15] = 1;

  return out;
}

/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */
function fromQuat(out, q) {
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let yx = y * x2;
  let yy = y * y2;
  let zx = z * x2;
  let zy = z * y2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;

  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;

  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;

  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;

  return out;
}

/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */
function frustum(out, left, right, bottom, top, near, far) {
  let rl = 1 / (right - left);
  let tb = 1 / (top - bottom);
  let nf = 1 / (near - far);
  out[0] = (near * 2) * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = (near * 2) * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = (far * near * 2) * nf;
  out[15] = 0;
  return out;
}

/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspective(out, fovy, aspect, near, far) {
  let f = 1.0 / Math.tan(fovy / 2);
  let nf = 1 / (near - far);
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = (2 * far * near) * nf;
  out[15] = 0;
  return out;
}

/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspectiveFromFieldOfView(out, fov, near, far) {
  let upTan = Math.tan(fov.upDegrees * Math.PI/180.0);
  let downTan = Math.tan(fov.downDegrees * Math.PI/180.0);
  let leftTan = Math.tan(fov.leftDegrees * Math.PI/180.0);
  let rightTan = Math.tan(fov.rightDegrees * Math.PI/180.0);
  let xScale = 2.0 / (leftTan + rightTan);
  let yScale = 2.0 / (upTan + downTan);

  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = ((upTan - downTan) * yScale * 0.5);
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = (far * near) / (near - far);
  out[15] = 0.0;
  return out;
}

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function ortho(out, left, right, bottom, top, near, far) {
  let lr = 1 / (left - right);
  let bt = 1 / (bottom - top);
  let nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function lookAt(out, eye, center, up) {
  let x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  let eyex = eye[0];
  let eyey = eye[1];
  let eyez = eye[2];
  let upx = up[0];
  let upy = up[1];
  let upz = up[2];
  let centerx = center[0];
  let centery = center[1];
  let centerz = center[2];

  if (Math.abs(eyex - centerx) < __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */] &&
      Math.abs(eyey - centery) < __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */] &&
      Math.abs(eyez - centerz) < __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]) {
    return mat4.identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;

  len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;

  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;

  len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;

  return out;
}

/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function targetTo(out, eye, target, up) {
  let eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];

  let z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];

  let len = z0*z0 + z1*z1 + z2*z2;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  let x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
};

/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' +
          a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' +
          a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' +
          a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
}

/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2) ))
}

/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}

/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  out[4] = a[4] + (b[4] * scale);
  out[5] = a[5] + (b[5] * scale);
  out[6] = a[6] + (b[6] * scale);
  out[7] = a[7] + (b[7] * scale);
  out[8] = a[8] + (b[8] * scale);
  out[9] = a[9] + (b[9] * scale);
  out[10] = a[10] + (b[10] * scale);
  out[11] = a[11] + (b[11] * scale);
  out[12] = a[12] + (b[12] * scale);
  out[13] = a[13] + (b[13] * scale);
  out[14] = a[14] + (b[14] * scale);
  out[15] = a[15] + (b[15] * scale);
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] &&
         a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] &&
         a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] &&
         a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0  = a[0],  a1  = a[1],  a2  = a[2],  a3  = a[3];
  let a4  = a[4],  a5  = a[5],  a6  = a[6],  a7  = a[7];
  let a8  = a[8],  a9  = a[9],  a10 = a[10], a11 = a[11];
  let a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];

  let b0  = b[0],  b1  = b[1],  b2  = b[2],  b3  = b[3];
  let b4  = b[4],  b5  = b[5],  b6  = b[6],  b7  = b[7];
  let b8  = b[8],  b9  = b[9],  b10 = b[10], b11 = b[11];
  let b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];

  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
          Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
          Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
          Math.abs(a6 - b6) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
          Math.abs(a7 - b7) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
          Math.abs(a8 - b8) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a8), Math.abs(b8)) &&
          Math.abs(a9 - b9) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a9), Math.abs(b9)) &&
          Math.abs(a10 - b10) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a10), Math.abs(b10)) &&
          Math.abs(a11 - b11) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a11), Math.abs(b11)) &&
          Math.abs(a12 - b12) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a12), Math.abs(b12)) &&
          Math.abs(a13 - b13) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a13), Math.abs(b13)) &&
          Math.abs(a14 - b14) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a14), Math.abs(b14)) &&
          Math.abs(a15 - b15) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a15), Math.abs(b15)));
}

/**
 * Alias for {@link mat4.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link mat4.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["setAxisAngle"] = setAxisAngle;
/* harmony export (immutable) */ __webpack_exports__["getAxisAngle"] = getAxisAngle;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["rotateX"] = rotateX;
/* harmony export (immutable) */ __webpack_exports__["rotateY"] = rotateY;
/* harmony export (immutable) */ __webpack_exports__["rotateZ"] = rotateZ;
/* harmony export (immutable) */ __webpack_exports__["calculateW"] = calculateW;
/* harmony export (immutable) */ __webpack_exports__["slerp"] = slerp;
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;
/* harmony export (immutable) */ __webpack_exports__["conjugate"] = conjugate;
/* harmony export (immutable) */ __webpack_exports__["fromMat3"] = fromMat3;
/* harmony export (immutable) */ __webpack_exports__["fromEuler"] = fromEuler;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mat3__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vec3__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vec4__ = __webpack_require__(12);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */






/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* ARRAY_TYPE */](4);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/
function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  let s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}

/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {quat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */
function getAxisAngle(out_axis, q) {
  let rad = Math.acos(q[3]) * 2.0;
  let s = Math.sin(rad / 2.0);
  if (s != 0.0) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }
  return rad;
}

/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */
function multiply(out, a, b) {
  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bx = b[0], by = b[1], bz = b[2], bw = b[3];

  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateX(out, a, rad) {
  rad *= 0.5;

  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bx = Math.sin(rad), bw = Math.cos(rad);

  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateY(out, a, rad) {
  rad *= 0.5;

  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let by = Math.sin(rad), bw = Math.cos(rad);

  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateZ(out, a, rad) {
  rad *= 0.5;

  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bz = Math.sin(rad), bw = Math.cos(rad);

  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}

/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */
function calculateW(out, a) {
  let x = a[0], y = a[1], z = a[2];

  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */
function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bx = b[0], by = b[1], bz = b[2], bw = b[3];

  let omega, cosom, sinom, scale0, scale1;

  // calc cosine
  cosom = ax * bx + ay * by + az * bz + aw * bw;
  // adjust signs (if necessary)
  if ( cosom < 0.0 ) {
    cosom = -cosom;
    bx = - bx;
    by = - by;
    bz = - bz;
    bw = - bw;
  }
  // calculate coefficients
  if ( (1.0 - cosom) > 0.000001 ) {
    // standard case (slerp)
    omega  = Math.acos(cosom);
    sinom  = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  }
  // calculate final values
  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;

  return out;
}

/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */
function invert(out, a) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let dot = a0*a0 + a1*a1 + a2*a2 + a3*a3;
  let invDot = dot ? 1.0/dot : 0;

  // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0*invDot;
  out[1] = -a1*invDot;
  out[2] = -a2*invDot;
  out[3] = a3*invDot;
  return out;
}

/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */
function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  let fTrace = m[0] + m[4] + m[8];
  let fRoot;

  if ( fTrace > 0.0 ) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0);  // 2w
    out[3] = 0.5 * fRoot;
    fRoot = 0.5/fRoot;  // 1/(4w)
    out[0] = (m[5]-m[7])*fRoot;
    out[1] = (m[6]-m[2])*fRoot;
    out[2] = (m[1]-m[3])*fRoot;
  } else {
    // |w| <= 1/2
    let i = 0;
    if ( m[4] > m[0] )
      i = 1;
    if ( m[8] > m[i*3+i] )
      i = 2;
    let j = (i+1)%3;
    let k = (i+2)%3;

    fRoot = Math.sqrt(m[i*3+i]-m[j*3+j]-m[k*3+k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j*3+k] - m[k*3+j]) * fRoot;
    out[j] = (m[j*3+i] + m[i*3+j]) * fRoot;
    out[k] = (m[k*3+i] + m[i*3+k]) * fRoot;
  }

  return out;
}

/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */
function fromEuler(out, x, y, z) {
    let halfToRad = 0.5 * Math.PI / 180.0;
    x *= halfToRad;
    y *= halfToRad;
    z *= halfToRad;

    let sx = Math.sin(x);
    let cx = Math.cos(x);
    let sy = Math.sin(y);
    let cy = Math.cos(y);
    let sz = Math.sin(z);
    let cz = Math.cos(z);

    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;

    return out;
}

/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */
const clone = __WEBPACK_IMPORTED_MODULE_3__vec4__["clone"];
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;


/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */
const fromValues = __WEBPACK_IMPORTED_MODULE_3__vec4__["fromValues"];
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;


/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */
const copy = __WEBPACK_IMPORTED_MODULE_3__vec4__["copy"];
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;


/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */
const set = __WEBPACK_IMPORTED_MODULE_3__vec4__["set"];
/* harmony export (immutable) */ __webpack_exports__["set"] = set;


/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */
const add = __WEBPACK_IMPORTED_MODULE_3__vec4__["add"];
/* harmony export (immutable) */ __webpack_exports__["add"] = add;


/**
 * Alias for {@link quat.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */
const scale = __WEBPACK_IMPORTED_MODULE_3__vec4__["scale"];
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;


/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
const dot = __WEBPACK_IMPORTED_MODULE_3__vec4__["dot"];
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;


/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 * @function
 */
const lerp = __WEBPACK_IMPORTED_MODULE_3__vec4__["lerp"];
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;


/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 */
const length = __WEBPACK_IMPORTED_MODULE_3__vec4__["length"];
/* harmony export (immutable) */ __webpack_exports__["length"] = length;


/**
 * Alias for {@link quat.length}
 * @function
 */
const len = length;
/* harmony export (immutable) */ __webpack_exports__["len"] = len;


/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
const squaredLength = __WEBPACK_IMPORTED_MODULE_3__vec4__["squaredLength"];
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;


/**
 * Alias for {@link quat.squaredLength}
 * @function
 */
const sqrLen = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["sqrLen"] = sqrLen;


/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */
const normalize = __WEBPACK_IMPORTED_MODULE_3__vec4__["normalize"];
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;


/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat} a The first quaternion.
 * @param {quat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
const exactEquals = __WEBPACK_IMPORTED_MODULE_3__vec4__["exactEquals"];
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;


/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {quat} a The first vector.
 * @param {quat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
const equals = __WEBPACK_IMPORTED_MODULE_3__vec4__["equals"];
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;


/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */
const rotationTo = (function() {
  let tmpvec3 = __WEBPACK_IMPORTED_MODULE_2__vec3__["create"]();
  let xUnitVec3 = __WEBPACK_IMPORTED_MODULE_2__vec3__["fromValues"](1,0,0);
  let yUnitVec3 = __WEBPACK_IMPORTED_MODULE_2__vec3__["fromValues"](0,1,0);

  return function(out, a, b) {
    let dot = __WEBPACK_IMPORTED_MODULE_2__vec3__["dot"](a, b);
    if (dot < -0.999999) {
      __WEBPACK_IMPORTED_MODULE_2__vec3__["cross"](tmpvec3, xUnitVec3, a);
      if (__WEBPACK_IMPORTED_MODULE_2__vec3__["len"](tmpvec3) < 0.000001)
        __WEBPACK_IMPORTED_MODULE_2__vec3__["cross"](tmpvec3, yUnitVec3, a);
      __WEBPACK_IMPORTED_MODULE_2__vec3__["normalize"](tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      __WEBPACK_IMPORTED_MODULE_2__vec3__["cross"](tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      return normalize(out, out);
    }
  };
})();
/* harmony export (immutable) */ __webpack_exports__["rotationTo"] = rotationTo;


/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {quat} c the third operand
 * @param {quat} d the fourth operand
 * @param {Number} t interpolation amount
 * @returns {quat} out
 */
const sqlerp = (function () {
  let temp1 = create();
  let temp2 = create();

  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));

    return out;
  };
}());
/* harmony export (immutable) */ __webpack_exports__["sqlerp"] = sqlerp;


/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */
const setAxes = (function() {
  let matr = __WEBPACK_IMPORTED_MODULE_1__mat3__["a" /* create */]();

  return function(out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];

    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];

    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];

    return normalize(out, fromMat3(out, matr));
  };
})();
/* harmony export (immutable) */ __webpack_exports__["setAxes"] = setAxes;



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["divide"] = divide;
/* harmony export (immutable) */ __webpack_exports__["ceil"] = ceil;
/* harmony export (immutable) */ __webpack_exports__["floor"] = floor;
/* harmony export (immutable) */ __webpack_exports__["min"] = min;
/* harmony export (immutable) */ __webpack_exports__["max"] = max;
/* harmony export (immutable) */ __webpack_exports__["round"] = round;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["scaleAndAdd"] = scaleAndAdd;
/* harmony export (immutable) */ __webpack_exports__["distance"] = distance;
/* harmony export (immutable) */ __webpack_exports__["squaredDistance"] = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["length"] = length;
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["negate"] = negate;
/* harmony export (immutable) */ __webpack_exports__["inverse"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;
/* harmony export (immutable) */ __webpack_exports__["cross"] = cross;
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["transformMat2"] = transformMat2;
/* harmony export (immutable) */ __webpack_exports__["transformMat2d"] = transformMat2d;
/* harmony export (immutable) */ __webpack_exports__["transformMat3"] = transformMat3;
/* harmony export (immutable) */ __webpack_exports__["transformMat4"] = transformMat4;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(2);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* ARRAY_TYPE */](2);
  out[0] = 0;
  out[1] = 0;
  return out;
}

/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* ARRAY_TYPE */](2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}

/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */
function fromValues(x, y) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* ARRAY_TYPE */](2);
  out[0] = x;
  out[1] = y;
  return out;
}

/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
};

/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
};

/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to ceil
 * @returns {vec2} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
};

/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to floor
 * @returns {vec2} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
};

/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
};

/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
};

/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to round
 * @returns {vec2} out
 */
function round (out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
};

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
};

/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  return out;
};

/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  var x = b[0] - a[0],
    y = b[1] - a[1];
  return Math.sqrt(x*x + y*y);
};

/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  var x = b[0] - a[0],
    y = b[1] - a[1];
  return x*x + y*y;
};

/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  var x = a[0],
    y = a[1];
  return Math.sqrt(x*x + y*y);
};

/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength (a) {
  var x = a[0],
    y = a[1];
  return x*x + y*y;
};

/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
};

/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
};

/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */
function normalize(out, a) {
  var x = a[0],
    y = a[1];
  var len = x*x + y*y;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
  }
  return out;
};

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
};

/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
};

/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */
function lerp(out, a, b, t) {
  var ax = a[0],
    ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */
function random(out, scale) {
  scale = scale || 1.0;
  var r = __WEBPACK_IMPORTED_MODULE_0__common__["c" /* RANDOM */]() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
};

/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2(out, a, m) {
  var x = a[0],
    y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
};

/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2d(out, a, m) {
  var x = a[0],
    y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
};

/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat3(out, a, m) {
  var x = a[0],
    y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
};

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat4(out, a, m) {
  let x = a[0];
  let y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec2(' + a[0] + ', ' + a[1] + ')';
}

/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1];
  let b0 = b[0], b1 = b[1];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a1), Math.abs(b1)));
}

/**
 * Alias for {@link vec2.length}
 * @function
 */
const len = length;
/* harmony export (immutable) */ __webpack_exports__["len"] = len;


/**
 * Alias for {@link vec2.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;


/**
 * Alias for {@link vec2.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link vec2.divide}
 * @function
 */
const div = divide;
/* harmony export (immutable) */ __webpack_exports__["div"] = div;


/**
 * Alias for {@link vec2.distance}
 * @function
 */
const dist = distance;
/* harmony export (immutable) */ __webpack_exports__["dist"] = dist;


/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */
const sqrDist = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["sqrDist"] = sqrDist;


/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */
const sqrLen = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["sqrLen"] = sqrLen;


/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach = (function() {
  let vec = create();

  return function(a, stride, offset, count, fn, arg) {
    let i, l;
    if(!stride) {
      stride = 2;
    }

    if(!offset) {
      offset = 0;
    }

    if(count) {
      l = Math.min((count * stride) + offset, a.length);
    } else {
      l = a.length;
    }

    for(i = offset; i < l; i += stride) {
      vec[0] = a[i]; vec[1] = a[i+1];
      fn(vec, vec, arg);
      a[i] = vec[0]; a[i+1] = vec[1];
    }

    return a;
  };
})();
/* harmony export (immutable) */ __webpack_exports__["forEach"] = forEach;



/***/ }),
/* 21 */
/***/ (function(module, exports) {

// stats.js - http://github.com/mrdoob/stats.js
var Stats=function(){var l=Date.now(),m=l,g=0,n=Infinity,o=0,h=0,p=Infinity,q=0,r=0,s=0,f=document.createElement("div");f.id="stats";f.addEventListener("mousedown",function(b){b.preventDefault();t(++s%2)},!1);f.style.cssText="width:80px;opacity:0.9;cursor:pointer";var a=document.createElement("div");a.id="fps";a.style.cssText="padding:0 0 3px 3px;text-align:left;background-color:#002";f.appendChild(a);var i=document.createElement("div");i.id="fpsText";i.style.cssText="color:#0ff;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px";
i.innerHTML="FPS";a.appendChild(i);var c=document.createElement("div");c.id="fpsGraph";c.style.cssText="position:relative;width:74px;height:30px;background-color:#0ff";for(a.appendChild(c);74>c.children.length;){var j=document.createElement("span");j.style.cssText="width:1px;height:30px;float:left;background-color:#113";c.appendChild(j)}var d=document.createElement("div");d.id="ms";d.style.cssText="padding:0 0 3px 3px;text-align:left;background-color:#020;display:none";f.appendChild(d);var k=document.createElement("div");
k.id="msText";k.style.cssText="color:#0f0;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px";k.innerHTML="MS";d.appendChild(k);var e=document.createElement("div");e.id="msGraph";e.style.cssText="position:relative;width:74px;height:30px;background-color:#0f0";for(d.appendChild(e);74>e.children.length;)j=document.createElement("span"),j.style.cssText="width:1px;height:30px;float:left;background-color:#131",e.appendChild(j);var t=function(b){s=b;switch(s){case 0:a.style.display=
"block";d.style.display="none";break;case 1:a.style.display="none",d.style.display="block"}};return{REVISION:12,domElement:f,setMode:t,begin:function(){l=Date.now()},end:function(){var b=Date.now();g=b-l;n=Math.min(n,g);o=Math.max(o,g);k.textContent=g+" MS ("+n+"-"+o+")";var a=Math.min(30,30-30*(g/200));e.appendChild(e.firstChild).style.height=a+"px";r++;b>m+1E3&&(h=Math.round(1E3*r/(b-m)),p=Math.min(p,h),q=Math.max(q,h),i.textContent=h+" FPS ("+p+"-"+q+")",a=Math.min(30,30-30*(h/100)),c.appendChild(c.firstChild).style.height=
a+"px",m=b,r=0);return b},update:function(){l=this.end()}}};"object"===typeof module&&(module.exports=Stats);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23)
module.exports.color = __webpack_require__(24)

/***/ }),
/* 23 */
/***/ (function(module, exports) {

/**
 * dat-gui JavaScript Controller Library
 * http://code.google.com/p/dat-gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

/** @namespace */
var dat = module.exports = dat || {};

/** @namespace */
dat.gui = dat.gui || {};

/** @namespace */
dat.utils = dat.utils || {};

/** @namespace */
dat.controllers = dat.controllers || {};

/** @namespace */
dat.dom = dat.dom || {};

/** @namespace */
dat.color = dat.color || {};

dat.utils.css = (function () {
  return {
    load: function (url, doc) {
      doc = doc || document;
      var link = doc.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = url;
      doc.getElementsByTagName('head')[0].appendChild(link);
    },
    inject: function(css, doc) {
      doc = doc || document;
      var injected = document.createElement('style');
      injected.type = 'text/css';
      injected.innerHTML = css;
      doc.getElementsByTagName('head')[0].appendChild(injected);
    }
  }
})();


dat.utils.common = (function () {
  
  var ARR_EACH = Array.prototype.forEach;
  var ARR_SLICE = Array.prototype.slice;

  /**
   * Band-aid methods for things that should be a lot easier in JavaScript.
   * Implementation and structure inspired by underscore.js
   * http://documentcloud.github.com/underscore/
   */

  return { 
    
    BREAK: {},
  
    extend: function(target) {
      
      this.each(ARR_SLICE.call(arguments, 1), function(obj) {
        
        for (var key in obj)
          if (!this.isUndefined(obj[key])) 
            target[key] = obj[key];
        
      }, this);
      
      return target;
      
    },
    
    defaults: function(target) {
      
      this.each(ARR_SLICE.call(arguments, 1), function(obj) {
        
        for (var key in obj)
          if (this.isUndefined(target[key])) 
            target[key] = obj[key];
        
      }, this);
      
      return target;
    
    },
    
    compose: function() {
      var toCall = ARR_SLICE.call(arguments);
            return function() {
              var args = ARR_SLICE.call(arguments);
              for (var i = toCall.length -1; i >= 0; i--) {
                args = [toCall[i].apply(this, args)];
              }
              return args[0];
            }
    },
    
    each: function(obj, itr, scope) {

      
      if (ARR_EACH && obj.forEach === ARR_EACH) { 
        
        obj.forEach(itr, scope);
        
      } else if (obj.length === obj.length + 0) { // Is number but not NaN
        
        for (var key = 0, l = obj.length; key < l; key++)
          if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) 
            return;
            
      } else {

        for (var key in obj) 
          if (itr.call(scope, obj[key], key) === this.BREAK)
            return;
            
      }
            
    },
    
    defer: function(fnc) {
      setTimeout(fnc, 0);
    },
    
    toArray: function(obj) {
      if (obj.toArray) return obj.toArray();
      return ARR_SLICE.call(obj);
    },

    isUndefined: function(obj) {
      return obj === undefined;
    },
    
    isNull: function(obj) {
      return obj === null;
    },
    
    isNaN: function(obj) {
      return obj !== obj;
    },
    
    isArray: Array.isArray || function(obj) {
      return obj.constructor === Array;
    },
    
    isObject: function(obj) {
      return obj === Object(obj);
    },
    
    isNumber: function(obj) {
      return obj === obj+0;
    },
    
    isString: function(obj) {
      return obj === obj+'';
    },
    
    isBoolean: function(obj) {
      return obj === false || obj === true;
    },
    
    isFunction: function(obj) {
      return Object.prototype.toString.call(obj) === '[object Function]';
    }
  
  };
    
})();


dat.controllers.Controller = (function (common) {

  /**
   * @class An "abstract" class that represents a given property of an object.
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   *
   * @member dat.controllers
   */
  var Controller = function(object, property) {

    this.initialValue = object[property];

    /**
     * Those who extend this class will put their DOM elements in here.
     * @type {DOMElement}
     */
    this.domElement = document.createElement('div');

    /**
     * The object to manipulate
     * @type {Object}
     */
    this.object = object;

    /**
     * The name of the property to manipulate
     * @type {String}
     */
    this.property = property;

    /**
     * The function to be called on change.
     * @type {Function}
     * @ignore
     */
    this.__onChange = undefined;

    /**
     * The function to be called on finishing change.
     * @type {Function}
     * @ignore
     */
    this.__onFinishChange = undefined;

  };

  common.extend(

      Controller.prototype,

      /** @lends dat.controllers.Controller.prototype */
      {

        /**
         * Specify that a function fire every time someone changes the value with
         * this Controller.
         *
         * @param {Function} fnc This function will be called whenever the value
         * is modified via this Controller.
         * @returns {dat.controllers.Controller} this
         */
        onChange: function(fnc) {
          this.__onChange = fnc;
          return this;
        },

        /**
         * Specify that a function fire every time someone "finishes" changing
         * the value wih this Controller. Useful for values that change
         * incrementally like numbers or strings.
         *
         * @param {Function} fnc This function will be called whenever
         * someone "finishes" changing the value via this Controller.
         * @returns {dat.controllers.Controller} this
         */
        onFinishChange: function(fnc) {
          this.__onFinishChange = fnc;
          return this;
        },

        /**
         * Change the value of <code>object[property]</code>
         *
         * @param {Object} newValue The new value of <code>object[property]</code>
         */
        setValue: function(newValue) {
          this.object[this.property] = newValue;
          if (this.__onChange) {
            this.__onChange.call(this, newValue);
          }
          this.updateDisplay();
          return this;
        },

        /**
         * Gets the value of <code>object[property]</code>
         *
         * @returns {Object} The current value of <code>object[property]</code>
         */
        getValue: function() {
          return this.object[this.property];
        },

        /**
         * Refreshes the visual display of a Controller in order to keep sync
         * with the object's current value.
         * @returns {dat.controllers.Controller} this
         */
        updateDisplay: function() {
          return this;
        },

        /**
         * @returns {Boolean} true if the value has deviated from initialValue
         */
        isModified: function() {
          return this.initialValue !== this.getValue()
        }

      }

  );

  return Controller;


})(dat.utils.common);


dat.dom.dom = (function (common) {

  var EVENT_MAP = {
    'HTMLEvents': ['change'],
    'MouseEvents': ['click','mousemove','mousedown','mouseup', 'mouseover'],
    'KeyboardEvents': ['keydown']
  };

  var EVENT_MAP_INV = {};
  common.each(EVENT_MAP, function(v, k) {
    common.each(v, function(e) {
      EVENT_MAP_INV[e] = k;
    });
  });

  var CSS_VALUE_PIXELS = /(\d+(\.\d+)?)px/;

  function cssValueToPixels(val) {

    if (val === '0' || common.isUndefined(val)) return 0;

    var match = val.match(CSS_VALUE_PIXELS);

    if (!common.isNull(match)) {
      return parseFloat(match[1]);
    }

    // TODO ...ems? %?

    return 0;

  }

  /**
   * @namespace
   * @member dat.dom
   */
  var dom = {

    /**
     * 
     * @param elem
     * @param selectable
     */
    makeSelectable: function(elem, selectable) {

      if (elem === undefined || elem.style === undefined) return;

      elem.onselectstart = selectable ? function() {
        return false;
      } : function() {
      };

      elem.style.MozUserSelect = selectable ? 'auto' : 'none';
      elem.style.KhtmlUserSelect = selectable ? 'auto' : 'none';
      elem.unselectable = selectable ? 'on' : 'off';

    },

    /**
     *
     * @param elem
     * @param horizontal
     * @param vertical
     */
    makeFullscreen: function(elem, horizontal, vertical) {

      if (common.isUndefined(horizontal)) horizontal = true;
      if (common.isUndefined(vertical)) vertical = true;

      elem.style.position = 'absolute';

      if (horizontal) {
        elem.style.left = 0;
        elem.style.right = 0;
      }
      if (vertical) {
        elem.style.top = 0;
        elem.style.bottom = 0;
      }

    },

    /**
     *
     * @param elem
     * @param eventType
     * @param params
     */
    fakeEvent: function(elem, eventType, params, aux) {
      params = params || {};
      var className = EVENT_MAP_INV[eventType];
      if (!className) {
        throw new Error('Event type ' + eventType + ' not supported.');
      }
      var evt = document.createEvent(className);
      switch (className) {
        case 'MouseEvents':
          var clientX = params.x || params.clientX || 0;
          var clientY = params.y || params.clientY || 0;
          evt.initMouseEvent(eventType, params.bubbles || false,
              params.cancelable || true, window, params.clickCount || 1,
              0, //screen X
              0, //screen Y
              clientX, //client X
              clientY, //client Y
              false, false, false, false, 0, null);
          break;
        case 'KeyboardEvents':
          var init = evt.initKeyboardEvent || evt.initKeyEvent; // webkit || moz
          common.defaults(params, {
            cancelable: true,
            ctrlKey: false,
            altKey: false,
            shiftKey: false,
            metaKey: false,
            keyCode: undefined,
            charCode: undefined
          });
          init(eventType, params.bubbles || false,
              params.cancelable, window,
              params.ctrlKey, params.altKey,
              params.shiftKey, params.metaKey,
              params.keyCode, params.charCode);
          break;
        default:
          evt.initEvent(eventType, params.bubbles || false,
              params.cancelable || true);
          break;
      }
      common.defaults(evt, aux);
      elem.dispatchEvent(evt);
    },

    /**
     *
     * @param elem
     * @param event
     * @param func
     * @param bool
     */
    bind: function(elem, event, func, bool) {
      bool = bool || false;
      if (elem.addEventListener)
        elem.addEventListener(event, func, bool);
      else if (elem.attachEvent)
        elem.attachEvent('on' + event, func);
      return dom;
    },

    /**
     *
     * @param elem
     * @param event
     * @param func
     * @param bool
     */
    unbind: function(elem, event, func, bool) {
      bool = bool || false;
      if (elem.removeEventListener)
        elem.removeEventListener(event, func, bool);
      else if (elem.detachEvent)
        elem.detachEvent('on' + event, func);
      return dom;
    },

    /**
     *
     * @param elem
     * @param className
     */
    addClass: function(elem, className) {
      if (elem.className === undefined) {
        elem.className = className;
      } else if (elem.className !== className) {
        var classes = elem.className.split(/ +/);
        if (classes.indexOf(className) == -1) {
          classes.push(className);
          elem.className = classes.join(' ').replace(/^\s+/, '').replace(/\s+$/, '');
        }
      }
      return dom;
    },

    /**
     *
     * @param elem
     * @param className
     */
    removeClass: function(elem, className) {
      if (className) {
        if (elem.className === undefined) {
          // elem.className = className;
        } else if (elem.className === className) {
          elem.removeAttribute('class');
        } else {
          var classes = elem.className.split(/ +/);
          var index = classes.indexOf(className);
          if (index != -1) {
            classes.splice(index, 1);
            elem.className = classes.join(' ');
          }
        }
      } else {
        elem.className = undefined;
      }
      return dom;
    },

    hasClass: function(elem, className) {
      return new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)').test(elem.className) || false;
    },

    /**
     *
     * @param elem
     */
    getWidth: function(elem) {

      var style = getComputedStyle(elem);

      return cssValueToPixels(style['border-left-width']) +
          cssValueToPixels(style['border-right-width']) +
          cssValueToPixels(style['padding-left']) +
          cssValueToPixels(style['padding-right']) +
          cssValueToPixels(style['width']);
    },

    /**
     *
     * @param elem
     */
    getHeight: function(elem) {

      var style = getComputedStyle(elem);

      return cssValueToPixels(style['border-top-width']) +
          cssValueToPixels(style['border-bottom-width']) +
          cssValueToPixels(style['padding-top']) +
          cssValueToPixels(style['padding-bottom']) +
          cssValueToPixels(style['height']);
    },

    /**
     *
     * @param elem
     */
    getOffset: function(elem) {
      var offset = {left: 0, top:0};
      if (elem.offsetParent) {
        do {
          offset.left += elem.offsetLeft;
          offset.top += elem.offsetTop;
        } while (elem = elem.offsetParent);
      }
      return offset;
    },

    // http://stackoverflow.com/posts/2684561/revisions
    /**
     * 
     * @param elem
     */
    isActive: function(elem) {
      return elem === document.activeElement && ( elem.type || elem.href );
    }

  };

  return dom;

})(dat.utils.common);


dat.controllers.OptionController = (function (Controller, dom, common) {

  /**
   * @class Provides a select input to alter the property of an object, using a
   * list of accepted values.
   *
   * @extends dat.controllers.Controller
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   * @param {Object|string[]} options A map of labels to acceptable values, or
   * a list of acceptable string values.
   *
   * @member dat.controllers
   */
  var OptionController = function(object, property, options) {

    OptionController.superclass.call(this, object, property);

    var _this = this;

    /**
     * The drop down menu
     * @ignore
     */
    this.__select = document.createElement('select');

    if (common.isArray(options)) {
      var map = {};
      common.each(options, function(element) {
        map[element] = element;
      });
      options = map;
    }

    common.each(options, function(value, key) {

      var opt = document.createElement('option');
      opt.innerHTML = key;
      opt.setAttribute('value', value);
      _this.__select.appendChild(opt);

    });

    // Acknowledge original value
    this.updateDisplay();

    dom.bind(this.__select, 'change', function() {
      var desiredValue = this.options[this.selectedIndex].value;
      _this.setValue(desiredValue);
    });

    this.domElement.appendChild(this.__select);

  };

  OptionController.superclass = Controller;

  common.extend(

      OptionController.prototype,
      Controller.prototype,

      {

        setValue: function(v) {
          var toReturn = OptionController.superclass.prototype.setValue.call(this, v);
          if (this.__onFinishChange) {
            this.__onFinishChange.call(this, this.getValue());
          }
          return toReturn;
        },

        updateDisplay: function() {
          this.__select.value = this.getValue();
          return OptionController.superclass.prototype.updateDisplay.call(this);
        }

      }

  );

  return OptionController;

})(dat.controllers.Controller,
dat.dom.dom,
dat.utils.common);


dat.controllers.NumberController = (function (Controller, common) {

  /**
   * @class Represents a given property of an object that is a number.
   *
   * @extends dat.controllers.Controller
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   * @param {Object} [params] Optional parameters
   * @param {Number} [params.min] Minimum allowed value
   * @param {Number} [params.max] Maximum allowed value
   * @param {Number} [params.step] Increment by which to change value
   *
   * @member dat.controllers
   */
  var NumberController = function(object, property, params) {

    NumberController.superclass.call(this, object, property);

    params = params || {};

    this.__min = params.min;
    this.__max = params.max;
    this.__step = params.step;

    if (common.isUndefined(this.__step)) {

      if (this.initialValue == 0) {
        this.__impliedStep = 1; // What are we, psychics?
      } else {
        // Hey Doug, check this out.
        this.__impliedStep = Math.pow(10, Math.floor(Math.log(this.initialValue)/Math.LN10))/10;
      }

    } else {

      this.__impliedStep = this.__step;

    }

    this.__precision = numDecimals(this.__impliedStep);


  };

  NumberController.superclass = Controller;

  common.extend(

      NumberController.prototype,
      Controller.prototype,

      /** @lends dat.controllers.NumberController.prototype */
      {

        setValue: function(v) {

          if (this.__min !== undefined && v < this.__min) {
            v = this.__min;
          } else if (this.__max !== undefined && v > this.__max) {
            v = this.__max;
          }

          if (this.__step !== undefined && v % this.__step != 0) {
            v = Math.round(v / this.__step) * this.__step;
          }

          return NumberController.superclass.prototype.setValue.call(this, v);

        },

        /**
         * Specify a minimum value for <code>object[property]</code>.
         *
         * @param {Number} minValue The minimum value for
         * <code>object[property]</code>
         * @returns {dat.controllers.NumberController} this
         */
        min: function(v) {
          this.__min = v;
          return this;
        },

        /**
         * Specify a maximum value for <code>object[property]</code>.
         *
         * @param {Number} maxValue The maximum value for
         * <code>object[property]</code>
         * @returns {dat.controllers.NumberController} this
         */
        max: function(v) {
          this.__max = v;
          return this;
        },

        /**
         * Specify a step value that dat.controllers.NumberController
         * increments by.
         *
         * @param {Number} stepValue The step value for
         * dat.controllers.NumberController
         * @default if minimum and maximum specified increment is 1% of the
         * difference otherwise stepValue is 1
         * @returns {dat.controllers.NumberController} this
         */
        step: function(v) {
          this.__step = v;
          return this;
        }

      }

  );

  function numDecimals(x) {
    x = x.toString();
    if (x.indexOf('.') > -1) {
      return x.length - x.indexOf('.') - 1;
    } else {
      return 0;
    }
  }

  return NumberController;

})(dat.controllers.Controller,
dat.utils.common);


dat.controllers.NumberControllerBox = (function (NumberController, dom, common) {

  /**
   * @class Represents a given property of an object that is a number and
   * provides an input element with which to manipulate it.
   *
   * @extends dat.controllers.Controller
   * @extends dat.controllers.NumberController
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   * @param {Object} [params] Optional parameters
   * @param {Number} [params.min] Minimum allowed value
   * @param {Number} [params.max] Maximum allowed value
   * @param {Number} [params.step] Increment by which to change value
   *
   * @member dat.controllers
   */
  var NumberControllerBox = function(object, property, params) {

    this.__truncationSuspended = false;

    NumberControllerBox.superclass.call(this, object, property, params);

    var _this = this;

    /**
     * {Number} Previous mouse y position
     * @ignore
     */
    var prev_y;

    this.__input = document.createElement('input');
    this.__input.setAttribute('type', 'text');

    // Makes it so manually specified values are not truncated.

    dom.bind(this.__input, 'change', onChange);
    dom.bind(this.__input, 'blur', onBlur);
    dom.bind(this.__input, 'mousedown', onMouseDown);
    dom.bind(this.__input, 'keydown', function(e) {

      // When pressing entire, you can be as precise as you want.
      if (e.keyCode === 13) {
        _this.__truncationSuspended = true;
        this.blur();
        _this.__truncationSuspended = false;
      }

    });

    function onChange() {
      var attempted = parseFloat(_this.__input.value);
      if (!common.isNaN(attempted)) _this.setValue(attempted);
    }

    function onBlur() {
      onChange();
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }

    function onMouseDown(e) {
      dom.bind(window, 'mousemove', onMouseDrag);
      dom.bind(window, 'mouseup', onMouseUp);
      prev_y = e.clientY;
    }

    function onMouseDrag(e) {

      var diff = prev_y - e.clientY;
      _this.setValue(_this.getValue() + diff * _this.__impliedStep);

      prev_y = e.clientY;

    }

    function onMouseUp() {
      dom.unbind(window, 'mousemove', onMouseDrag);
      dom.unbind(window, 'mouseup', onMouseUp);
    }

    this.updateDisplay();

    this.domElement.appendChild(this.__input);

  };

  NumberControllerBox.superclass = NumberController;

  common.extend(

      NumberControllerBox.prototype,
      NumberController.prototype,

      {

        updateDisplay: function() {

          this.__input.value = this.__truncationSuspended ? this.getValue() : roundToDecimal(this.getValue(), this.__precision);
          return NumberControllerBox.superclass.prototype.updateDisplay.call(this);
        }

      }

  );

  function roundToDecimal(value, decimals) {
    var tenTo = Math.pow(10, decimals);
    return Math.round(value * tenTo) / tenTo;
  }

  return NumberControllerBox;

})(dat.controllers.NumberController,
dat.dom.dom,
dat.utils.common);


dat.controllers.NumberControllerSlider = (function (NumberController, dom, css, common, styleSheet) {

  /**
   * @class Represents a given property of an object that is a number, contains
   * a minimum and maximum, and provides a slider element with which to
   * manipulate it. It should be noted that the slider element is made up of
   * <code>&lt;div&gt;</code> tags, <strong>not</strong> the html5
   * <code>&lt;slider&gt;</code> element.
   *
   * @extends dat.controllers.Controller
   * @extends dat.controllers.NumberController
   * 
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   * @param {Number} minValue Minimum allowed value
   * @param {Number} maxValue Maximum allowed value
   * @param {Number} stepValue Increment by which to change value
   *
   * @member dat.controllers
   */
  var NumberControllerSlider = function(object, property, min, max, step) {

    NumberControllerSlider.superclass.call(this, object, property, { min: min, max: max, step: step });

    var _this = this;

    this.__background = document.createElement('div');
    this.__foreground = document.createElement('div');
    


    dom.bind(this.__background, 'mousedown', onMouseDown);
    
    dom.addClass(this.__background, 'slider');
    dom.addClass(this.__foreground, 'slider-fg');

    function onMouseDown(e) {

      dom.bind(window, 'mousemove', onMouseDrag);
      dom.bind(window, 'mouseup', onMouseUp);

      onMouseDrag(e);
    }

    function onMouseDrag(e) {

      e.preventDefault();

      var offset = dom.getOffset(_this.__background);
      var width = dom.getWidth(_this.__background);
      
      _this.setValue(
        map(e.clientX, offset.left, offset.left + width, _this.__min, _this.__max)
      );

      return false;

    }

    function onMouseUp() {
      dom.unbind(window, 'mousemove', onMouseDrag);
      dom.unbind(window, 'mouseup', onMouseUp);
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }

    this.updateDisplay();

    this.__background.appendChild(this.__foreground);
    this.domElement.appendChild(this.__background);

  };

  NumberControllerSlider.superclass = NumberController;

  /**
   * Injects default stylesheet for slider elements.
   */
  NumberControllerSlider.useDefaultStyles = function() {
    css.inject(styleSheet);
  };

  common.extend(

      NumberControllerSlider.prototype,
      NumberController.prototype,

      {

        updateDisplay: function() {
          var pct = (this.getValue() - this.__min)/(this.__max - this.__min);
          this.__foreground.style.width = pct*100+'%';
          return NumberControllerSlider.superclass.prototype.updateDisplay.call(this);
        }

      }



  );

  function map(v, i1, i2, o1, o2) {
    return o1 + (o2 - o1) * ((v - i1) / (i2 - i1));
  }

  return NumberControllerSlider;
  
})(dat.controllers.NumberController,
dat.dom.dom,
dat.utils.css,
dat.utils.common,
".slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}");


dat.controllers.FunctionController = (function (Controller, dom, common) {

  /**
   * @class Provides a GUI interface to fire a specified method, a property of an object.
   *
   * @extends dat.controllers.Controller
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   *
   * @member dat.controllers
   */
  var FunctionController = function(object, property, text) {

    FunctionController.superclass.call(this, object, property);

    var _this = this;

    this.__button = document.createElement('div');
    this.__button.innerHTML = text === undefined ? 'Fire' : text;
    dom.bind(this.__button, 'click', function(e) {
      e.preventDefault();
      _this.fire();
      return false;
    });

    dom.addClass(this.__button, 'button');

    this.domElement.appendChild(this.__button);


  };

  FunctionController.superclass = Controller;

  common.extend(

      FunctionController.prototype,
      Controller.prototype,
      {
        
        fire: function() {
          if (this.__onChange) {
            this.__onChange.call(this);
          }
          if (this.__onFinishChange) {
            this.__onFinishChange.call(this, this.getValue());
          }
          this.getValue().call(this.object);
        }
      }

  );

  return FunctionController;

})(dat.controllers.Controller,
dat.dom.dom,
dat.utils.common);


dat.controllers.BooleanController = (function (Controller, dom, common) {

  /**
   * @class Provides a checkbox input to alter the boolean property of an object.
   * @extends dat.controllers.Controller
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   *
   * @member dat.controllers
   */
  var BooleanController = function(object, property) {

    BooleanController.superclass.call(this, object, property);

    var _this = this;
    this.__prev = this.getValue();

    this.__checkbox = document.createElement('input');
    this.__checkbox.setAttribute('type', 'checkbox');


    dom.bind(this.__checkbox, 'change', onChange, false);

    this.domElement.appendChild(this.__checkbox);

    // Match original value
    this.updateDisplay();

    function onChange() {
      _this.setValue(!_this.__prev);
    }

  };

  BooleanController.superclass = Controller;

  common.extend(

      BooleanController.prototype,
      Controller.prototype,

      {

        setValue: function(v) {
          var toReturn = BooleanController.superclass.prototype.setValue.call(this, v);
          if (this.__onFinishChange) {
            this.__onFinishChange.call(this, this.getValue());
          }
          this.__prev = this.getValue();
          return toReturn;
        },

        updateDisplay: function() {
          
          if (this.getValue() === true) {
            this.__checkbox.setAttribute('checked', 'checked');
            this.__checkbox.checked = true;    
          } else {
              this.__checkbox.checked = false;
          }

          return BooleanController.superclass.prototype.updateDisplay.call(this);

        }


      }

  );

  return BooleanController;

})(dat.controllers.Controller,
dat.dom.dom,
dat.utils.common);


dat.color.toString = (function (common) {

  return function(color) {

    if (color.a == 1 || common.isUndefined(color.a)) {

      var s = color.hex.toString(16);
      while (s.length < 6) {
        s = '0' + s;
      }

      return '#' + s;

    } else {

      return 'rgba(' + Math.round(color.r) + ',' + Math.round(color.g) + ',' + Math.round(color.b) + ',' + color.a + ')';

    }

  }

})(dat.utils.common);


dat.color.interpret = (function (toString, common) {

  var result, toReturn;

  var interpret = function() {

    toReturn = false;

    var original = arguments.length > 1 ? common.toArray(arguments) : arguments[0];

    common.each(INTERPRETATIONS, function(family) {

      if (family.litmus(original)) {

        common.each(family.conversions, function(conversion, conversionName) {

          result = conversion.read(original);

          if (toReturn === false && result !== false) {
            toReturn = result;
            result.conversionName = conversionName;
            result.conversion = conversion;
            return common.BREAK;

          }

        });

        return common.BREAK;

      }

    });

    return toReturn;

  };

  var INTERPRETATIONS = [

    // Strings
    {

      litmus: common.isString,

      conversions: {

        THREE_CHAR_HEX: {

          read: function(original) {

            var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
            if (test === null) return false;

            return {
              space: 'HEX',
              hex: parseInt(
                  '0x' +
                      test[1].toString() + test[1].toString() +
                      test[2].toString() + test[2].toString() +
                      test[3].toString() + test[3].toString())
            };

          },

          write: toString

        },

        SIX_CHAR_HEX: {

          read: function(original) {

            var test = original.match(/^#([A-F0-9]{6})$/i);
            if (test === null) return false;

            return {
              space: 'HEX',
              hex: parseInt('0x' + test[1].toString())
            };

          },

          write: toString

        },

        CSS_RGB: {

          read: function(original) {

            var test = original.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
            if (test === null) return false;

            return {
              space: 'RGB',
              r: parseFloat(test[1]),
              g: parseFloat(test[2]),
              b: parseFloat(test[3])
            };

          },

          write: toString

        },

        CSS_RGBA: {

          read: function(original) {

            var test = original.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
            if (test === null) return false;

            return {
              space: 'RGB',
              r: parseFloat(test[1]),
              g: parseFloat(test[2]),
              b: parseFloat(test[3]),
              a: parseFloat(test[4])
            };

          },

          write: toString

        }

      }

    },

    // Numbers
    {

      litmus: common.isNumber,

      conversions: {

        HEX: {
          read: function(original) {
            return {
              space: 'HEX',
              hex: original,
              conversionName: 'HEX'
            }
          },

          write: function(color) {
            return color.hex;
          }
        }

      }

    },

    // Arrays
    {

      litmus: common.isArray,

      conversions: {

        RGB_ARRAY: {
          read: function(original) {
            if (original.length != 3) return false;
            return {
              space: 'RGB',
              r: original[0],
              g: original[1],
              b: original[2]
            };
          },

          write: function(color) {
            return [color.r, color.g, color.b];
          }

        },

        RGBA_ARRAY: {
          read: function(original) {
            if (original.length != 4) return false;
            return {
              space: 'RGB',
              r: original[0],
              g: original[1],
              b: original[2],
              a: original[3]
            };
          },

          write: function(color) {
            return [color.r, color.g, color.b, color.a];
          }

        }

      }

    },

    // Objects
    {

      litmus: common.isObject,

      conversions: {

        RGBA_OBJ: {
          read: function(original) {
            if (common.isNumber(original.r) &&
                common.isNumber(original.g) &&
                common.isNumber(original.b) &&
                common.isNumber(original.a)) {
              return {
                space: 'RGB',
                r: original.r,
                g: original.g,
                b: original.b,
                a: original.a
              }
            }
            return false;
          },

          write: function(color) {
            return {
              r: color.r,
              g: color.g,
              b: color.b,
              a: color.a
            }
          }
        },

        RGB_OBJ: {
          read: function(original) {
            if (common.isNumber(original.r) &&
                common.isNumber(original.g) &&
                common.isNumber(original.b)) {
              return {
                space: 'RGB',
                r: original.r,
                g: original.g,
                b: original.b
              }
            }
            return false;
          },

          write: function(color) {
            return {
              r: color.r,
              g: color.g,
              b: color.b
            }
          }
        },

        HSVA_OBJ: {
          read: function(original) {
            if (common.isNumber(original.h) &&
                common.isNumber(original.s) &&
                common.isNumber(original.v) &&
                common.isNumber(original.a)) {
              return {
                space: 'HSV',
                h: original.h,
                s: original.s,
                v: original.v,
                a: original.a
              }
            }
            return false;
          },

          write: function(color) {
            return {
              h: color.h,
              s: color.s,
              v: color.v,
              a: color.a
            }
          }
        },

        HSV_OBJ: {
          read: function(original) {
            if (common.isNumber(original.h) &&
                common.isNumber(original.s) &&
                common.isNumber(original.v)) {
              return {
                space: 'HSV',
                h: original.h,
                s: original.s,
                v: original.v
              }
            }
            return false;
          },

          write: function(color) {
            return {
              h: color.h,
              s: color.s,
              v: color.v
            }
          }

        }

      }

    }


  ];

  return interpret;


})(dat.color.toString,
dat.utils.common);


dat.GUI = dat.gui.GUI = (function (css, saveDialogueContents, styleSheet, controllerFactory, Controller, BooleanController, FunctionController, NumberControllerBox, NumberControllerSlider, OptionController, ColorController, requestAnimationFrame, CenteredDiv, dom, common) {

  css.inject(styleSheet);

  /** Outer-most className for GUI's */
  var CSS_NAMESPACE = 'dg';

  var HIDE_KEY_CODE = 72;

  /** The only value shared between the JS and SCSS. Use caution. */
  var CLOSE_BUTTON_HEIGHT = 20;

  var DEFAULT_DEFAULT_PRESET_NAME = 'Default';

  var SUPPORTS_LOCAL_STORAGE = (function() {
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
      return false;
    }
  })();

  var SAVE_DIALOGUE;

  /** Have we yet to create an autoPlace GUI? */
  var auto_place_virgin = true;

  /** Fixed position div that auto place GUI's go inside */
  var auto_place_container;

  /** Are we hiding the GUI's ? */
  var hide = false;

  /** GUI's which should be hidden */
  var hideable_guis = [];

  /**
   * A lightweight controller library for JavaScript. It allows you to easily
   * manipulate variables and fire functions on the fly.
   * @class
   *
   * @member dat.gui
   *
   * @param {Object} [params]
   * @param {String} [params.name] The name of this GUI.
   * @param {Object} [params.load] JSON object representing the saved state of
   * this GUI.
   * @param {Boolean} [params.auto=true]
   * @param {dat.gui.GUI} [params.parent] The GUI I'm nested in.
   * @param {Boolean} [params.closed] If true, starts closed
   */
  var GUI = function(params) {

    var _this = this;

    /**
     * Outermost DOM Element
     * @type DOMElement
     */
    this.domElement = document.createElement('div');
    this.__ul = document.createElement('ul');
    this.domElement.appendChild(this.__ul);

    dom.addClass(this.domElement, CSS_NAMESPACE);

    /**
     * Nested GUI's by name
     * @ignore
     */
    this.__folders = {};

    this.__controllers = [];

    /**
     * List of objects I'm remembering for save, only used in top level GUI
     * @ignore
     */
    this.__rememberedObjects = [];

    /**
     * Maps the index of remembered objects to a map of controllers, only used
     * in top level GUI.
     *
     * @private
     * @ignore
     *
     * @example
     * [
     *  {
     *    propertyName: Controller,
     *    anotherPropertyName: Controller
     *  },
     *  {
     *    propertyName: Controller
     *  }
     * ]
     */
    this.__rememberedObjectIndecesToControllers = [];

    this.__listening = [];

    params = params || {};

    // Default parameters
    params = common.defaults(params, {
      autoPlace: true,
      width: GUI.DEFAULT_WIDTH
    });

    params = common.defaults(params, {
      resizable: params.autoPlace,
      hideable: params.autoPlace
    });


    if (!common.isUndefined(params.load)) {

      // Explicit preset
      if (params.preset) params.load.preset = params.preset;

    } else {

      params.load = { preset: DEFAULT_DEFAULT_PRESET_NAME };

    }

    if (common.isUndefined(params.parent) && params.hideable) {
      hideable_guis.push(this);
    }

    // Only root level GUI's are resizable.
    params.resizable = common.isUndefined(params.parent) && params.resizable;


    if (params.autoPlace && common.isUndefined(params.scrollable)) {
      params.scrollable = true;
    }
//    params.scrollable = common.isUndefined(params.parent) && params.scrollable === true;

    // Not part of params because I don't want people passing this in via
    // constructor. Should be a 'remembered' value.
    var use_local_storage =
        SUPPORTS_LOCAL_STORAGE &&
            localStorage.getItem(getLocalStorageHash(this, 'isLocal')) === 'true';

    Object.defineProperties(this,

        /** @lends dat.gui.GUI.prototype */
        {

          /**
           * The parent <code>GUI</code>
           * @type dat.gui.GUI
           */
          parent: {
            get: function() {
              return params.parent;
            }
          },

          scrollable: {
            get: function() {
              return params.scrollable;
            }
          },

          /**
           * Handles <code>GUI</code>'s element placement for you
           * @type Boolean
           */
          autoPlace: {
            get: function() {
              return params.autoPlace;
            }
          },

          /**
           * The identifier for a set of saved values
           * @type String
           */
          preset: {

            get: function() {
              if (_this.parent) {
                return _this.getRoot().preset;
              } else {
                return params.load.preset;
              }
            },

            set: function(v) {
              if (_this.parent) {
                _this.getRoot().preset = v;
              } else {
                params.load.preset = v;
              }
              setPresetSelectIndex(this);
              _this.revert();
            }

          },

          /**
           * The width of <code>GUI</code> element
           * @type Number
           */
          width: {
            get: function() {
              return params.width;
            },
            set: function(v) {
              params.width = v;
              setWidth(_this, v);
            }
          },

          /**
           * The name of <code>GUI</code>. Used for folders. i.e
           * a folder's name
           * @type String
           */
          name: {
            get: function() {
              return params.name;
            },
            set: function(v) {
              // TODO Check for collisions among sibling folders
              params.name = v;
              if (title_row_name) {
                title_row_name.innerHTML = params.name;
              }
            }
          },

          /**
           * Whether the <code>GUI</code> is collapsed or not
           * @type Boolean
           */
          closed: {
            get: function() {
              return params.closed;
            },
            set: function(v) {
              params.closed = v;
              if (params.closed) {
                dom.addClass(_this.__ul, GUI.CLASS_CLOSED);
              } else {
                dom.removeClass(_this.__ul, GUI.CLASS_CLOSED);
              }
              // For browsers that aren't going to respect the CSS transition,
              // Lets just check our height against the window height right off
              // the bat.
              this.onResize();

              if (_this.__closeButton) {
                _this.__closeButton.innerHTML = v ? GUI.TEXT_OPEN : GUI.TEXT_CLOSED;
              }
            }
          },

          /**
           * Contains all presets
           * @type Object
           */
          load: {
            get: function() {
              return params.load;
            }
          },

          /**
           * Determines whether or not to use <a href="https://developer.mozilla.org/en/DOM/Storage#localStorage">localStorage</a> as the means for
           * <code>remember</code>ing
           * @type Boolean
           */
          useLocalStorage: {

            get: function() {
              return use_local_storage;
            },
            set: function(bool) {
              if (SUPPORTS_LOCAL_STORAGE) {
                use_local_storage = bool;
                if (bool) {
                  dom.bind(window, 'unload', saveToLocalStorage);
                } else {
                  dom.unbind(window, 'unload', saveToLocalStorage);
                }
                localStorage.setItem(getLocalStorageHash(_this, 'isLocal'), bool);
              }
            }

          }

        });

    // Are we a root level GUI?
    if (common.isUndefined(params.parent)) {

      params.closed = false;

      dom.addClass(this.domElement, GUI.CLASS_MAIN);
      dom.makeSelectable(this.domElement, false);

      // Are we supposed to be loading locally?
      if (SUPPORTS_LOCAL_STORAGE) {

        if (use_local_storage) {

          _this.useLocalStorage = true;

          var saved_gui = localStorage.getItem(getLocalStorageHash(this, 'gui'));

          if (saved_gui) {
            params.load = JSON.parse(saved_gui);
          }

        }

      }

      this.__closeButton = document.createElement('div');
      this.__closeButton.innerHTML = GUI.TEXT_CLOSED;
      dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BUTTON);
      this.domElement.appendChild(this.__closeButton);

      dom.bind(this.__closeButton, 'click', function() {

        _this.closed = !_this.closed;


      });


      // Oh, you're a nested GUI!
    } else {

      if (params.closed === undefined) {
        params.closed = true;
      }

      var title_row_name = document.createTextNode(params.name);
      dom.addClass(title_row_name, 'controller-name');

      var title_row = addRow(_this, title_row_name);

      var on_click_title = function(e) {
        e.preventDefault();
        _this.closed = !_this.closed;
        return false;
      };

      dom.addClass(this.__ul, GUI.CLASS_CLOSED);

      dom.addClass(title_row, 'title');
      dom.bind(title_row, 'click', on_click_title);

      if (!params.closed) {
        this.closed = false;
      }

    }

    if (params.autoPlace) {

      if (common.isUndefined(params.parent)) {

        if (auto_place_virgin) {
          auto_place_container = document.createElement('div');
          dom.addClass(auto_place_container, CSS_NAMESPACE);
          dom.addClass(auto_place_container, GUI.CLASS_AUTO_PLACE_CONTAINER);
          document.body.appendChild(auto_place_container);
          auto_place_virgin = false;
        }

        // Put it in the dom for you.
        auto_place_container.appendChild(this.domElement);

        // Apply the auto styles
        dom.addClass(this.domElement, GUI.CLASS_AUTO_PLACE);

      }


      // Make it not elastic.
      if (!this.parent) setWidth(_this, params.width);

    }

    dom.bind(window, 'resize', function() { _this.onResize() });
    dom.bind(this.__ul, 'webkitTransitionEnd', function() { _this.onResize(); });
    dom.bind(this.__ul, 'transitionend', function() { _this.onResize() });
    dom.bind(this.__ul, 'oTransitionEnd', function() { _this.onResize() });
    this.onResize();


    if (params.resizable) {
      addResizeHandle(this);
    }

    function saveToLocalStorage() {
      localStorage.setItem(getLocalStorageHash(_this, 'gui'), JSON.stringify(_this.getSaveObject()));
    }

    var root = _this.getRoot();
    function resetWidth() {
        var root = _this.getRoot();
        root.width += 1;
        common.defer(function() {
          root.width -= 1;
        });
      }

      if (!params.parent) {
        resetWidth();
      }

  };

  GUI.toggleHide = function() {

    hide = !hide;
    common.each(hideable_guis, function(gui) {
      gui.domElement.style.zIndex = hide ? -999 : 999;
      gui.domElement.style.opacity = hide ? 0 : 1;
    });
  };

  GUI.CLASS_AUTO_PLACE = 'a';
  GUI.CLASS_AUTO_PLACE_CONTAINER = 'ac';
  GUI.CLASS_MAIN = 'main';
  GUI.CLASS_CONTROLLER_ROW = 'cr';
  GUI.CLASS_TOO_TALL = 'taller-than-window';
  GUI.CLASS_CLOSED = 'closed';
  GUI.CLASS_CLOSE_BUTTON = 'close-button';
  GUI.CLASS_DRAG = 'drag';

  GUI.DEFAULT_WIDTH = 245;
  GUI.TEXT_CLOSED = 'Close Controls';
  GUI.TEXT_OPEN = 'Open Controls';

  dom.bind(window, 'keydown', function(e) {

    if (document.activeElement.type !== 'text' &&
        (e.which === HIDE_KEY_CODE || e.keyCode == HIDE_KEY_CODE)) {
      GUI.toggleHide();
    }

  }, false);

  common.extend(

      GUI.prototype,

      /** @lends dat.gui.GUI */
      {

        /**
         * @param object
         * @param property
         * @returns {dat.controllers.Controller} The new controller that was added.
         * @instance
         */
        add: function(object, property) {

          return add(
              this,
              object,
              property,
              {
                factoryArgs: Array.prototype.slice.call(arguments, 2)
              }
          );

        },

        /**
         * @param object
         * @param property
         * @returns {dat.controllers.ColorController} The new controller that was added.
         * @instance
         */
        addColor: function(object, property) {

          return add(
              this,
              object,
              property,
              {
                color: true
              }
          );

        },

        /**
         * @param controller
         * @instance
         */
        remove: function(controller) {

          // TODO listening?
          this.__ul.removeChild(controller.__li);
          this.__controllers.slice(this.__controllers.indexOf(controller), 1);
          var _this = this;
          common.defer(function() {
            _this.onResize();
          });

        },

        destroy: function() {

          if (this.autoPlace) {
            auto_place_container.removeChild(this.domElement);
          }

        },

        /**
         * @param name
         * @returns {dat.gui.GUI} The new folder.
         * @throws {Error} if this GUI already has a folder by the specified
         * name
         * @instance
         */
        addFolder: function(name) {

          // We have to prevent collisions on names in order to have a key
          // by which to remember saved values
          if (this.__folders[name] !== undefined) {
            throw new Error('You already have a folder in this GUI by the' +
                ' name "' + name + '"');
          }

          var new_gui_params = { name: name, parent: this };

          // We need to pass down the autoPlace trait so that we can
          // attach event listeners to open/close folder actions to
          // ensure that a scrollbar appears if the window is too short.
          new_gui_params.autoPlace = this.autoPlace;

          // Do we have saved appearance data for this folder?

          if (this.load && // Anything loaded?
              this.load.folders && // Was my parent a dead-end?
              this.load.folders[name]) { // Did daddy remember me?

            // Start me closed if I was closed
            new_gui_params.closed = this.load.folders[name].closed;

            // Pass down the loaded data
            new_gui_params.load = this.load.folders[name];

          }

          var gui = new GUI(new_gui_params);
          this.__folders[name] = gui;

          var li = addRow(this, gui.domElement);
          dom.addClass(li, 'folder');
          return gui;

        },

        open: function() {
          this.closed = false;
        },

        close: function() {
          this.closed = true;
        },

        onResize: function() {

          var root = this.getRoot();

          if (root.scrollable) {

            var top = dom.getOffset(root.__ul).top;
            var h = 0;

            common.each(root.__ul.childNodes, function(node) {
              if (! (root.autoPlace && node === root.__save_row))
                h += dom.getHeight(node);
            });

            if (window.innerHeight - top - CLOSE_BUTTON_HEIGHT < h) {
              dom.addClass(root.domElement, GUI.CLASS_TOO_TALL);
              root.__ul.style.height = window.innerHeight - top - CLOSE_BUTTON_HEIGHT + 'px';
            } else {
              dom.removeClass(root.domElement, GUI.CLASS_TOO_TALL);
              root.__ul.style.height = 'auto';
            }

          }

          if (root.__resize_handle) {
            common.defer(function() {
              root.__resize_handle.style.height = root.__ul.offsetHeight + 'px';
            });
          }

          if (root.__closeButton) {
            root.__closeButton.style.width = root.width + 'px';
          }

        },

        /**
         * Mark objects for saving. The order of these objects cannot change as
         * the GUI grows. When remembering new objects, append them to the end
         * of the list.
         *
         * @param {Object...} objects
         * @throws {Error} if not called on a top level GUI.
         * @instance
         */
        remember: function() {

          if (common.isUndefined(SAVE_DIALOGUE)) {
            SAVE_DIALOGUE = new CenteredDiv();
            SAVE_DIALOGUE.domElement.innerHTML = saveDialogueContents;
          }

          if (this.parent) {
            throw new Error("You can only call remember on a top level GUI.");
          }

          var _this = this;

          common.each(Array.prototype.slice.call(arguments), function(object) {
            if (_this.__rememberedObjects.length == 0) {
              addSaveMenu(_this);
            }
            if (_this.__rememberedObjects.indexOf(object) == -1) {
              _this.__rememberedObjects.push(object);
            }
          });

          if (this.autoPlace) {
            // Set save row width
            setWidth(this, this.width);
          }

        },

        /**
         * @returns {dat.gui.GUI} the topmost parent GUI of a nested GUI.
         * @instance
         */
        getRoot: function() {
          var gui = this;
          while (gui.parent) {
            gui = gui.parent;
          }
          return gui;
        },

        /**
         * @returns {Object} a JSON object representing the current state of
         * this GUI as well as its remembered properties.
         * @instance
         */
        getSaveObject: function() {

          var toReturn = this.load;

          toReturn.closed = this.closed;

          // Am I remembering any values?
          if (this.__rememberedObjects.length > 0) {

            toReturn.preset = this.preset;

            if (!toReturn.remembered) {
              toReturn.remembered = {};
            }

            toReturn.remembered[this.preset] = getCurrentPreset(this);

          }

          toReturn.folders = {};
          common.each(this.__folders, function(element, key) {
            toReturn.folders[key] = element.getSaveObject();
          });

          return toReturn;

        },

        save: function() {

          if (!this.load.remembered) {
            this.load.remembered = {};
          }

          this.load.remembered[this.preset] = getCurrentPreset(this);
          markPresetModified(this, false);

        },

        saveAs: function(presetName) {

          if (!this.load.remembered) {

            // Retain default values upon first save
            this.load.remembered = {};
            this.load.remembered[DEFAULT_DEFAULT_PRESET_NAME] = getCurrentPreset(this, true);

          }

          this.load.remembered[presetName] = getCurrentPreset(this);
          this.preset = presetName;
          addPresetOption(this, presetName, true);

        },

        revert: function(gui) {

          common.each(this.__controllers, function(controller) {
            // Make revert work on Default.
            if (!this.getRoot().load.remembered) {
              controller.setValue(controller.initialValue);
            } else {
              recallSavedValue(gui || this.getRoot(), controller);
            }
          }, this);

          common.each(this.__folders, function(folder) {
            folder.revert(folder);
          });

          if (!gui) {
            markPresetModified(this.getRoot(), false);
          }


        },

        listen: function(controller) {

          var init = this.__listening.length == 0;
          this.__listening.push(controller);
          if (init) updateDisplays(this.__listening);

        }

      }

  );

  function add(gui, object, property, params) {

    if (object[property] === undefined) {
      throw new Error("Object " + object + " has no property \"" + property + "\"");
    }

    var controller;

    if (params.color) {

      controller = new ColorController(object, property);

    } else {

      var factoryArgs = [object,property].concat(params.factoryArgs);
      controller = controllerFactory.apply(gui, factoryArgs);

    }

    if (params.before instanceof Controller) {
      params.before = params.before.__li;
    }

    recallSavedValue(gui, controller);

    dom.addClass(controller.domElement, 'c');

    var name = document.createElement('span');
    dom.addClass(name, 'property-name');
    name.innerHTML = controller.property;

    var container = document.createElement('div');
    container.appendChild(name);
    container.appendChild(controller.domElement);

    var li = addRow(gui, container, params.before);

    dom.addClass(li, GUI.CLASS_CONTROLLER_ROW);
    dom.addClass(li, typeof controller.getValue());

    augmentController(gui, li, controller);

    gui.__controllers.push(controller);

    return controller;

  }

  /**
   * Add a row to the end of the GUI or before another row.
   *
   * @param gui
   * @param [dom] If specified, inserts the dom content in the new row
   * @param [liBefore] If specified, places the new row before another row
   */
  function addRow(gui, dom, liBefore) {
    var li = document.createElement('li');
    if (dom) li.appendChild(dom);
    if (liBefore) {
      gui.__ul.insertBefore(li, params.before);
    } else {
      gui.__ul.appendChild(li);
    }
    gui.onResize();
    return li;
  }

  function augmentController(gui, li, controller) {

    controller.__li = li;
    controller.__gui = gui;

    common.extend(controller, {

      options: function(options) {

        if (arguments.length > 1) {
          controller.remove();

          return add(
              gui,
              controller.object,
              controller.property,
              {
                before: controller.__li.nextElementSibling,
                factoryArgs: [common.toArray(arguments)]
              }
          );

        }

        if (common.isArray(options) || common.isObject(options)) {
          controller.remove();

          return add(
              gui,
              controller.object,
              controller.property,
              {
                before: controller.__li.nextElementSibling,
                factoryArgs: [options]
              }
          );

        }

      },

      name: function(v) {
        controller.__li.firstElementChild.firstElementChild.innerHTML = v;
        return controller;
      },

      listen: function() {
        controller.__gui.listen(controller);
        return controller;
      },

      remove: function() {
        controller.__gui.remove(controller);
        return controller;
      }

    });

    // All sliders should be accompanied by a box.
    if (controller instanceof NumberControllerSlider) {

      var box = new NumberControllerBox(controller.object, controller.property,
          { min: controller.__min, max: controller.__max, step: controller.__step });

      common.each(['updateDisplay', 'onChange', 'onFinishChange'], function(method) {
        var pc = controller[method];
        var pb = box[method];
        controller[method] = box[method] = function() {
          var args = Array.prototype.slice.call(arguments);
          pc.apply(controller, args);
          return pb.apply(box, args);
        }
      });

      dom.addClass(li, 'has-slider');
      controller.domElement.insertBefore(box.domElement, controller.domElement.firstElementChild);

    }
    else if (controller instanceof NumberControllerBox) {

      var r = function(returned) {

        // Have we defined both boundaries?
        if (common.isNumber(controller.__min) && common.isNumber(controller.__max)) {

          // Well, then lets just replace this with a slider.
          controller.remove();
          return add(
              gui,
              controller.object,
              controller.property,
              {
                before: controller.__li.nextElementSibling,
                factoryArgs: [controller.__min, controller.__max, controller.__step]
              });

        }

        return returned;

      };

      controller.min = common.compose(r, controller.min);
      controller.max = common.compose(r, controller.max);

    }
    else if (controller instanceof BooleanController) {

      dom.bind(li, 'click', function() {
        dom.fakeEvent(controller.__checkbox, 'click');
      });

      dom.bind(controller.__checkbox, 'click', function(e) {
        e.stopPropagation(); // Prevents double-toggle
      })

    }
    else if (controller instanceof FunctionController) {

      dom.bind(li, 'click', function() {
        dom.fakeEvent(controller.__button, 'click');
      });

      dom.bind(li, 'mouseover', function() {
        dom.addClass(controller.__button, 'hover');
      });

      dom.bind(li, 'mouseout', function() {
        dom.removeClass(controller.__button, 'hover');
      });

    }
    else if (controller instanceof ColorController) {

      dom.addClass(li, 'color');
      controller.updateDisplay = common.compose(function(r) {
        li.style.borderLeftColor = controller.__color.toString();
        return r;
      }, controller.updateDisplay);

      controller.updateDisplay();

    }

    controller.setValue = common.compose(function(r) {
      if (gui.getRoot().__preset_select && controller.isModified()) {
        markPresetModified(gui.getRoot(), true);
      }
      return r;
    }, controller.setValue);

  }

  function recallSavedValue(gui, controller) {

    // Find the topmost GUI, that's where remembered objects live.
    var root = gui.getRoot();

    // Does the object we're controlling match anything we've been told to
    // remember?
    var matched_index = root.__rememberedObjects.indexOf(controller.object);

    // Why yes, it does!
    if (matched_index != -1) {

      // Let me fetch a map of controllers for thcommon.isObject.
      var controller_map =
          root.__rememberedObjectIndecesToControllers[matched_index];

      // Ohp, I believe this is the first controller we've created for this
      // object. Lets make the map fresh.
      if (controller_map === undefined) {
        controller_map = {};
        root.__rememberedObjectIndecesToControllers[matched_index] =
            controller_map;
      }

      // Keep track of this controller
      controller_map[controller.property] = controller;

      // Okay, now have we saved any values for this controller?
      if (root.load && root.load.remembered) {

        var preset_map = root.load.remembered;

        // Which preset are we trying to load?
        var preset;

        if (preset_map[gui.preset]) {

          preset = preset_map[gui.preset];

        } else if (preset_map[DEFAULT_DEFAULT_PRESET_NAME]) {

          // Uhh, you can have the default instead?
          preset = preset_map[DEFAULT_DEFAULT_PRESET_NAME];

        } else {

          // Nada.

          return;

        }


        // Did the loaded object remember thcommon.isObject?
        if (preset[matched_index] &&

          // Did we remember this particular property?
            preset[matched_index][controller.property] !== undefined) {

          // We did remember something for this guy ...
          var value = preset[matched_index][controller.property];

          // And that's what it is.
          controller.initialValue = value;
          controller.setValue(value);

        }

      }

    }

  }

  function getLocalStorageHash(gui, key) {
    // TODO how does this deal with multiple GUI's?
    return document.location.href + '.' + key;

  }

  function addSaveMenu(gui) {

    var div = gui.__save_row = document.createElement('li');

    dom.addClass(gui.domElement, 'has-save');

    gui.__ul.insertBefore(div, gui.__ul.firstChild);

    dom.addClass(div, 'save-row');

    var gears = document.createElement('span');
    gears.innerHTML = '&nbsp;';
    dom.addClass(gears, 'button gears');

    // TODO replace with FunctionController
    var button = document.createElement('span');
    button.innerHTML = 'Save';
    dom.addClass(button, 'button');
    dom.addClass(button, 'save');

    var button2 = document.createElement('span');
    button2.innerHTML = 'New';
    dom.addClass(button2, 'button');
    dom.addClass(button2, 'save-as');

    var button3 = document.createElement('span');
    button3.innerHTML = 'Revert';
    dom.addClass(button3, 'button');
    dom.addClass(button3, 'revert');

    var select = gui.__preset_select = document.createElement('select');

    if (gui.load && gui.load.remembered) {

      common.each(gui.load.remembered, function(value, key) {
        addPresetOption(gui, key, key == gui.preset);
      });

    } else {
      addPresetOption(gui, DEFAULT_DEFAULT_PRESET_NAME, false);
    }

    dom.bind(select, 'change', function() {


      for (var index = 0; index < gui.__preset_select.length; index++) {
        gui.__preset_select[index].innerHTML = gui.__preset_select[index].value;
      }

      gui.preset = this.value;

    });

    div.appendChild(select);
    div.appendChild(gears);
    div.appendChild(button);
    div.appendChild(button2);
    div.appendChild(button3);

    if (SUPPORTS_LOCAL_STORAGE) {

      var saveLocally = document.getElementById('dg-save-locally');
      var explain = document.getElementById('dg-local-explain');

      saveLocally.style.display = 'block';

      var localStorageCheckBox = document.getElementById('dg-local-storage');

      if (localStorage.getItem(getLocalStorageHash(gui, 'isLocal')) === 'true') {
        localStorageCheckBox.setAttribute('checked', 'checked');
      }

      function showHideExplain() {
        explain.style.display = gui.useLocalStorage ? 'block' : 'none';
      }

      showHideExplain();

      // TODO: Use a boolean controller, fool!
      dom.bind(localStorageCheckBox, 'change', function() {
        gui.useLocalStorage = !gui.useLocalStorage;
        showHideExplain();
      });

    }

    var newConstructorTextArea = document.getElementById('dg-new-constructor');

    dom.bind(newConstructorTextArea, 'keydown', function(e) {
      if (e.metaKey && (e.which === 67 || e.keyCode == 67)) {
        SAVE_DIALOGUE.hide();
      }
    });

    dom.bind(gears, 'click', function() {
      newConstructorTextArea.innerHTML = JSON.stringify(gui.getSaveObject(), undefined, 2);
      SAVE_DIALOGUE.show();
      newConstructorTextArea.focus();
      newConstructorTextArea.select();
    });

    dom.bind(button, 'click', function() {
      gui.save();
    });

    dom.bind(button2, 'click', function() {
      var presetName = prompt('Enter a new preset name.');
      if (presetName) gui.saveAs(presetName);
    });

    dom.bind(button3, 'click', function() {
      gui.revert();
    });

//    div.appendChild(button2);

  }

  function addResizeHandle(gui) {

    gui.__resize_handle = document.createElement('div');

    common.extend(gui.__resize_handle.style, {

      width: '6px',
      marginLeft: '-3px',
      height: '200px',
      cursor: 'ew-resize',
      position: 'absolute'
//      border: '1px solid blue'

    });

    var pmouseX;

    dom.bind(gui.__resize_handle, 'mousedown', dragStart);
    dom.bind(gui.__closeButton, 'mousedown', dragStart);

    gui.domElement.insertBefore(gui.__resize_handle, gui.domElement.firstElementChild);

    function dragStart(e) {

      e.preventDefault();

      pmouseX = e.clientX;

      dom.addClass(gui.__closeButton, GUI.CLASS_DRAG);
      dom.bind(window, 'mousemove', drag);
      dom.bind(window, 'mouseup', dragStop);

      return false;

    }

    function drag(e) {

      e.preventDefault();

      gui.width += pmouseX - e.clientX;
      gui.onResize();
      pmouseX = e.clientX;

      return false;

    }

    function dragStop() {

      dom.removeClass(gui.__closeButton, GUI.CLASS_DRAG);
      dom.unbind(window, 'mousemove', drag);
      dom.unbind(window, 'mouseup', dragStop);

    }

  }

  function setWidth(gui, w) {
    gui.domElement.style.width = w + 'px';
    // Auto placed save-rows are position fixed, so we have to
    // set the width manually if we want it to bleed to the edge
    if (gui.__save_row && gui.autoPlace) {
      gui.__save_row.style.width = w + 'px';
    }if (gui.__closeButton) {
      gui.__closeButton.style.width = w + 'px';
    }
  }

  function getCurrentPreset(gui, useInitialValues) {

    var toReturn = {};

    // For each object I'm remembering
    common.each(gui.__rememberedObjects, function(val, index) {

      var saved_values = {};

      // The controllers I've made for thcommon.isObject by property
      var controller_map =
          gui.__rememberedObjectIndecesToControllers[index];

      // Remember each value for each property
      common.each(controller_map, function(controller, property) {
        saved_values[property] = useInitialValues ? controller.initialValue : controller.getValue();
      });

      // Save the values for thcommon.isObject
      toReturn[index] = saved_values;

    });

    return toReturn;

  }

  function addPresetOption(gui, name, setSelected) {
    var opt = document.createElement('option');
    opt.innerHTML = name;
    opt.value = name;
    gui.__preset_select.appendChild(opt);
    if (setSelected) {
      gui.__preset_select.selectedIndex = gui.__preset_select.length - 1;
    }
  }

  function setPresetSelectIndex(gui) {
    for (var index = 0; index < gui.__preset_select.length; index++) {
      if (gui.__preset_select[index].value == gui.preset) {
        gui.__preset_select.selectedIndex = index;
      }
    }
  }

  function markPresetModified(gui, modified) {
    var opt = gui.__preset_select[gui.__preset_select.selectedIndex];
//    console.log('mark', modified, opt);
    if (modified) {
      opt.innerHTML = opt.value + "*";
    } else {
      opt.innerHTML = opt.value;
    }
  }

  function updateDisplays(controllerArray) {


    if (controllerArray.length != 0) {

      requestAnimationFrame(function() {
        updateDisplays(controllerArray);
      });

    }

    common.each(controllerArray, function(c) {
      c.updateDisplay();
    });

  }

  return GUI;

})(dat.utils.css,
"<div id=\"dg-save\" class=\"dg dialogue\">\n\n  Here's the new load parameter for your <code>GUI</code>'s constructor:\n\n  <textarea id=\"dg-new-constructor\"></textarea>\n\n  <div id=\"dg-save-locally\">\n\n    <input id=\"dg-local-storage\" type=\"checkbox\"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id=\"dg-local-explain\">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>",
".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear;border:0;position:absolute;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-x:hidden}.dg.a.has-save ul{margin-top:27px}.dg.a.has-save ul.closed{margin-top:0}.dg.a .save-row{position:fixed;top:0;z-index:1002}.dg li{-webkit-transition:height 0.1s ease-out;-o-transition:height 0.1s ease-out;-moz-transition:height 0.1s ease-out;transition:height 0.1s ease-out}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;overflow:hidden;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li > *{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:9px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2fa1d6}.dg .cr.number input[type=text]{color:#2fa1d6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2fa1d6}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n",
dat.controllers.factory = (function (OptionController, NumberControllerBox, NumberControllerSlider, StringController, FunctionController, BooleanController, common) {

      return function(object, property) {

        var initialValue = object[property];

        // Providing options?
        if (common.isArray(arguments[2]) || common.isObject(arguments[2])) {
          return new OptionController(object, property, arguments[2]);
        }

        // Providing a map?

        if (common.isNumber(initialValue)) {

          if (common.isNumber(arguments[2]) && common.isNumber(arguments[3])) {

            // Has min and max.
            return new NumberControllerSlider(object, property, arguments[2], arguments[3]);

          } else {

            return new NumberControllerBox(object, property, { min: arguments[2], max: arguments[3] });

          }

        }

        if (common.isString(initialValue)) {
          return new StringController(object, property);
        }

        if (common.isFunction(initialValue)) {
          return new FunctionController(object, property, '');
        }

        if (common.isBoolean(initialValue)) {
          return new BooleanController(object, property);
        }

      }

    })(dat.controllers.OptionController,
dat.controllers.NumberControllerBox,
dat.controllers.NumberControllerSlider,
dat.controllers.StringController = (function (Controller, dom, common) {

  /**
   * @class Provides a text input to alter the string property of an object.
   *
   * @extends dat.controllers.Controller
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   *
   * @member dat.controllers
   */
  var StringController = function(object, property) {

    StringController.superclass.call(this, object, property);

    var _this = this;

    this.__input = document.createElement('input');
    this.__input.setAttribute('type', 'text');

    dom.bind(this.__input, 'keyup', onChange);
    dom.bind(this.__input, 'change', onChange);
    dom.bind(this.__input, 'blur', onBlur);
    dom.bind(this.__input, 'keydown', function(e) {
      if (e.keyCode === 13) {
        this.blur();
      }
    });
    

    function onChange() {
      _this.setValue(_this.__input.value);
    }

    function onBlur() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }

    this.updateDisplay();

    this.domElement.appendChild(this.__input);

  };

  StringController.superclass = Controller;

  common.extend(

      StringController.prototype,
      Controller.prototype,

      {

        updateDisplay: function() {
          // Stops the caret from moving on account of:
          // keyup -> setValue -> updateDisplay
          if (!dom.isActive(this.__input)) {
            this.__input.value = this.getValue();
          }
          return StringController.superclass.prototype.updateDisplay.call(this);
        }

      }

  );

  return StringController;

})(dat.controllers.Controller,
dat.dom.dom,
dat.utils.common),
dat.controllers.FunctionController,
dat.controllers.BooleanController,
dat.utils.common),
dat.controllers.Controller,
dat.controllers.BooleanController,
dat.controllers.FunctionController,
dat.controllers.NumberControllerBox,
dat.controllers.NumberControllerSlider,
dat.controllers.OptionController,
dat.controllers.ColorController = (function (Controller, dom, Color, interpret, common) {

  var ColorController = function(object, property) {

    ColorController.superclass.call(this, object, property);

    this.__color = new Color(this.getValue());
    this.__temp = new Color(0);

    var _this = this;

    this.domElement = document.createElement('div');

    dom.makeSelectable(this.domElement, false);

    this.__selector = document.createElement('div');
    this.__selector.className = 'selector';

    this.__saturation_field = document.createElement('div');
    this.__saturation_field.className = 'saturation-field';

    this.__field_knob = document.createElement('div');
    this.__field_knob.className = 'field-knob';
    this.__field_knob_border = '2px solid ';

    this.__hue_knob = document.createElement('div');
    this.__hue_knob.className = 'hue-knob';

    this.__hue_field = document.createElement('div');
    this.__hue_field.className = 'hue-field';

    this.__input = document.createElement('input');
    this.__input.type = 'text';
    this.__input_textShadow = '0 1px 1px ';

    dom.bind(this.__input, 'keydown', function(e) {
      if (e.keyCode === 13) { // on enter
        onBlur.call(this);
      }
    });

    dom.bind(this.__input, 'blur', onBlur);

    dom.bind(this.__selector, 'mousedown', function(e) {

      dom
        .addClass(this, 'drag')
        .bind(window, 'mouseup', function(e) {
          dom.removeClass(_this.__selector, 'drag');
        });

    });

    var value_field = document.createElement('div');

    common.extend(this.__selector.style, {
      width: '122px',
      height: '102px',
      padding: '3px',
      backgroundColor: '#222',
      boxShadow: '0px 1px 3px rgba(0,0,0,0.3)'
    });

    common.extend(this.__field_knob.style, {
      position: 'absolute',
      width: '12px',
      height: '12px',
      border: this.__field_knob_border + (this.__color.v < .5 ? '#fff' : '#000'),
      boxShadow: '0px 1px 3px rgba(0,0,0,0.5)',
      borderRadius: '12px',
      zIndex: 1
    });
    
    common.extend(this.__hue_knob.style, {
      position: 'absolute',
      width: '15px',
      height: '2px',
      borderRight: '4px solid #fff',
      zIndex: 1
    });

    common.extend(this.__saturation_field.style, {
      width: '100px',
      height: '100px',
      border: '1px solid #555',
      marginRight: '3px',
      display: 'inline-block',
      cursor: 'pointer'
    });

    common.extend(value_field.style, {
      width: '100%',
      height: '100%',
      background: 'none'
    });
    
    linearGradient(value_field, 'top', 'rgba(0,0,0,0)', '#000');

    common.extend(this.__hue_field.style, {
      width: '15px',
      height: '100px',
      display: 'inline-block',
      border: '1px solid #555',
      cursor: 'ns-resize'
    });

    hueGradient(this.__hue_field);

    common.extend(this.__input.style, {
      outline: 'none',
//      width: '120px',
      textAlign: 'center',
//      padding: '4px',
//      marginBottom: '6px',
      color: '#fff',
      border: 0,
      fontWeight: 'bold',
      textShadow: this.__input_textShadow + 'rgba(0,0,0,0.7)'
    });

    dom.bind(this.__saturation_field, 'mousedown', fieldDown);
    dom.bind(this.__field_knob, 'mousedown', fieldDown);

    dom.bind(this.__hue_field, 'mousedown', function(e) {
      setH(e);
      dom.bind(window, 'mousemove', setH);
      dom.bind(window, 'mouseup', unbindH);
    });

    function fieldDown(e) {
      setSV(e);
      // document.body.style.cursor = 'none';
      dom.bind(window, 'mousemove', setSV);
      dom.bind(window, 'mouseup', unbindSV);
    }

    function unbindSV() {
      dom.unbind(window, 'mousemove', setSV);
      dom.unbind(window, 'mouseup', unbindSV);
      // document.body.style.cursor = 'default';
    }

    function onBlur() {
      var i = interpret(this.value);
      if (i !== false) {
        _this.__color.__state = i;
        _this.setValue(_this.__color.toOriginal());
      } else {
        this.value = _this.__color.toString();
      }
    }

    function unbindH() {
      dom.unbind(window, 'mousemove', setH);
      dom.unbind(window, 'mouseup', unbindH);
    }

    this.__saturation_field.appendChild(value_field);
    this.__selector.appendChild(this.__field_knob);
    this.__selector.appendChild(this.__saturation_field);
    this.__selector.appendChild(this.__hue_field);
    this.__hue_field.appendChild(this.__hue_knob);

    this.domElement.appendChild(this.__input);
    this.domElement.appendChild(this.__selector);

    this.updateDisplay();

    function setSV(e) {

      e.preventDefault();

      var w = dom.getWidth(_this.__saturation_field);
      var o = dom.getOffset(_this.__saturation_field);
      var s = (e.clientX - o.left + document.body.scrollLeft) / w;
      var v = 1 - (e.clientY - o.top + document.body.scrollTop) / w;

      if (v > 1) v = 1;
      else if (v < 0) v = 0;

      if (s > 1) s = 1;
      else if (s < 0) s = 0;

      _this.__color.v = v;
      _this.__color.s = s;

      _this.setValue(_this.__color.toOriginal());


      return false;

    }

    function setH(e) {

      e.preventDefault();

      var s = dom.getHeight(_this.__hue_field);
      var o = dom.getOffset(_this.__hue_field);
      var h = 1 - (e.clientY - o.top + document.body.scrollTop) / s;

      if (h > 1) h = 1;
      else if (h < 0) h = 0;

      _this.__color.h = h * 360;

      _this.setValue(_this.__color.toOriginal());

      return false;

    }

  };

  ColorController.superclass = Controller;

  common.extend(

      ColorController.prototype,
      Controller.prototype,

      {

        updateDisplay: function() {

          var i = interpret(this.getValue());

          if (i !== false) {

            var mismatch = false;

            // Check for mismatch on the interpreted value.

            common.each(Color.COMPONENTS, function(component) {
              if (!common.isUndefined(i[component]) &&
                  !common.isUndefined(this.__color.__state[component]) &&
                  i[component] !== this.__color.__state[component]) {
                mismatch = true;
                return {}; // break
              }
            }, this);

            // If nothing diverges, we keep our previous values
            // for statefulness, otherwise we recalculate fresh
            if (mismatch) {
              common.extend(this.__color.__state, i);
            }

          }

          common.extend(this.__temp.__state, this.__color.__state);

          this.__temp.a = 1;

          var flip = (this.__color.v < .5 || this.__color.s > .5) ? 255 : 0;
          var _flip = 255 - flip;

          common.extend(this.__field_knob.style, {
            marginLeft: 100 * this.__color.s - 7 + 'px',
            marginTop: 100 * (1 - this.__color.v) - 7 + 'px',
            backgroundColor: this.__temp.toString(),
            border: this.__field_knob_border + 'rgb(' + flip + ',' + flip + ',' + flip +')'
          });

          this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + 'px'

          this.__temp.s = 1;
          this.__temp.v = 1;

          linearGradient(this.__saturation_field, 'left', '#fff', this.__temp.toString());

          common.extend(this.__input.style, {
            backgroundColor: this.__input.value = this.__color.toString(),
            color: 'rgb(' + flip + ',' + flip + ',' + flip +')',
            textShadow: this.__input_textShadow + 'rgba(' + _flip + ',' + _flip + ',' + _flip +',.7)'
          });

        }

      }

  );
  
  var vendors = ['-moz-','-o-','-webkit-','-ms-',''];
  
  function linearGradient(elem, x, a, b) {
    elem.style.background = '';
    common.each(vendors, function(vendor) {
      elem.style.cssText += 'background: ' + vendor + 'linear-gradient('+x+', '+a+' 0%, ' + b + ' 100%); ';
    });
  }
  
  function hueGradient(elem) {
    elem.style.background = '';
    elem.style.cssText += 'background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);'
    elem.style.cssText += 'background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'
    elem.style.cssText += 'background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'
    elem.style.cssText += 'background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'
    elem.style.cssText += 'background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'
  }


  return ColorController;

})(dat.controllers.Controller,
dat.dom.dom,
dat.color.Color = (function (interpret, math, toString, common) {

  var Color = function() {

    this.__state = interpret.apply(this, arguments);

    if (this.__state === false) {
      throw 'Failed to interpret color arguments';
    }

    this.__state.a = this.__state.a || 1;


  };

  Color.COMPONENTS = ['r','g','b','h','s','v','hex','a'];

  common.extend(Color.prototype, {

    toString: function() {
      return toString(this);
    },

    toOriginal: function() {
      return this.__state.conversion.write(this);
    }

  });

  defineRGBComponent(Color.prototype, 'r', 2);
  defineRGBComponent(Color.prototype, 'g', 1);
  defineRGBComponent(Color.prototype, 'b', 0);

  defineHSVComponent(Color.prototype, 'h');
  defineHSVComponent(Color.prototype, 's');
  defineHSVComponent(Color.prototype, 'v');

  Object.defineProperty(Color.prototype, 'a', {

    get: function() {
      return this.__state.a;
    },

    set: function(v) {
      this.__state.a = v;
    }

  });

  Object.defineProperty(Color.prototype, 'hex', {

    get: function() {

      if (!this.__state.space !== 'HEX') {
        this.__state.hex = math.rgb_to_hex(this.r, this.g, this.b);
      }

      return this.__state.hex;

    },

    set: function(v) {

      this.__state.space = 'HEX';
      this.__state.hex = v;

    }

  });

  function defineRGBComponent(target, component, componentHexIndex) {

    Object.defineProperty(target, component, {

      get: function() {

        if (this.__state.space === 'RGB') {
          return this.__state[component];
        }

        recalculateRGB(this, component, componentHexIndex);

        return this.__state[component];

      },

      set: function(v) {

        if (this.__state.space !== 'RGB') {
          recalculateRGB(this, component, componentHexIndex);
          this.__state.space = 'RGB';
        }

        this.__state[component] = v;

      }

    });

  }

  function defineHSVComponent(target, component) {

    Object.defineProperty(target, component, {

      get: function() {

        if (this.__state.space === 'HSV')
          return this.__state[component];

        recalculateHSV(this);

        return this.__state[component];

      },

      set: function(v) {

        if (this.__state.space !== 'HSV') {
          recalculateHSV(this);
          this.__state.space = 'HSV';
        }

        this.__state[component] = v;

      }

    });

  }

  function recalculateRGB(color, component, componentHexIndex) {

    if (color.__state.space === 'HEX') {

      color.__state[component] = math.component_from_hex(color.__state.hex, componentHexIndex);

    } else if (color.__state.space === 'HSV') {

      common.extend(color.__state, math.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));

    } else {

      throw 'Corrupted color state';

    }

  }

  function recalculateHSV(color) {

    var result = math.rgb_to_hsv(color.r, color.g, color.b);

    common.extend(color.__state,
        {
          s: result.s,
          v: result.v
        }
    );

    if (!common.isNaN(result.h)) {
      color.__state.h = result.h;
    } else if (common.isUndefined(color.__state.h)) {
      color.__state.h = 0;
    }

  }

  return Color;

})(dat.color.interpret,
dat.color.math = (function () {

  var tmpComponent;

  return {

    hsv_to_rgb: function(h, s, v) {

      var hi = Math.floor(h / 60) % 6;

      var f = h / 60 - Math.floor(h / 60);
      var p = v * (1.0 - s);
      var q = v * (1.0 - (f * s));
      var t = v * (1.0 - ((1.0 - f) * s));
      var c = [
        [v, t, p],
        [q, v, p],
        [p, v, t],
        [p, q, v],
        [t, p, v],
        [v, p, q]
      ][hi];

      return {
        r: c[0] * 255,
        g: c[1] * 255,
        b: c[2] * 255
      };

    },

    rgb_to_hsv: function(r, g, b) {

      var min = Math.min(r, g, b),
          max = Math.max(r, g, b),
          delta = max - min,
          h, s;

      if (max != 0) {
        s = delta / max;
      } else {
        return {
          h: NaN,
          s: 0,
          v: 0
        };
      }

      if (r == max) {
        h = (g - b) / delta;
      } else if (g == max) {
        h = 2 + (b - r) / delta;
      } else {
        h = 4 + (r - g) / delta;
      }
      h /= 6;
      if (h < 0) {
        h += 1;
      }

      return {
        h: h * 360,
        s: s,
        v: max / 255
      };
    },

    rgb_to_hex: function(r, g, b) {
      var hex = this.hex_with_component(0, 2, r);
      hex = this.hex_with_component(hex, 1, g);
      hex = this.hex_with_component(hex, 0, b);
      return hex;
    },

    component_from_hex: function(hex, componentIndex) {
      return (hex >> (componentIndex * 8)) & 0xFF;
    },

    hex_with_component: function(hex, componentIndex, value) {
      return value << (tmpComponent = componentIndex * 8) | (hex & ~ (0xFF << tmpComponent));
    }

  }

})(),
dat.color.toString,
dat.utils.common),
dat.color.interpret,
dat.utils.common),
dat.utils.requestAnimationFrame = (function () {

  /**
   * requirejs version of Paul Irish's RequestAnimationFrame
   * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
   */

  return window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback, element) {

        window.setTimeout(callback, 1000 / 60);

      };
})(),
dat.dom.CenteredDiv = (function (dom, common) {


  var CenteredDiv = function() {

    this.backgroundElement = document.createElement('div');
    common.extend(this.backgroundElement.style, {
      backgroundColor: 'rgba(0,0,0,0.8)',
      top: 0,
      left: 0,
      display: 'none',
      zIndex: '1000',
      opacity: 0,
      WebkitTransition: 'opacity 0.2s linear'
    });

    dom.makeFullscreen(this.backgroundElement);
    this.backgroundElement.style.position = 'fixed';

    this.domElement = document.createElement('div');
    common.extend(this.domElement.style, {
      position: 'fixed',
      display: 'none',
      zIndex: '1001',
      opacity: 0,
      WebkitTransition: '-webkit-transform 0.2s ease-out, opacity 0.2s linear'
    });


    document.body.appendChild(this.backgroundElement);
    document.body.appendChild(this.domElement);

    var _this = this;
    dom.bind(this.backgroundElement, 'click', function() {
      _this.hide();
    });


  };

  CenteredDiv.prototype.show = function() {

    var _this = this;
    


    this.backgroundElement.style.display = 'block';

    this.domElement.style.display = 'block';
    this.domElement.style.opacity = 0;
//    this.domElement.style.top = '52%';
    this.domElement.style.webkitTransform = 'scale(1.1)';

    this.layout();

    common.defer(function() {
      _this.backgroundElement.style.opacity = 1;
      _this.domElement.style.opacity = 1;
      _this.domElement.style.webkitTransform = 'scale(1)';
    });

  };

  CenteredDiv.prototype.hide = function() {

    var _this = this;

    var hide = function() {

      _this.domElement.style.display = 'none';
      _this.backgroundElement.style.display = 'none';

      dom.unbind(_this.domElement, 'webkitTransitionEnd', hide);
      dom.unbind(_this.domElement, 'transitionend', hide);
      dom.unbind(_this.domElement, 'oTransitionEnd', hide);

    };

    dom.bind(this.domElement, 'webkitTransitionEnd', hide);
    dom.bind(this.domElement, 'transitionend', hide);
    dom.bind(this.domElement, 'oTransitionEnd', hide);

    this.backgroundElement.style.opacity = 0;
//    this.domElement.style.top = '48%';
    this.domElement.style.opacity = 0;
    this.domElement.style.webkitTransform = 'scale(1.1)';

  };

  CenteredDiv.prototype.layout = function() {
    this.domElement.style.left = window.innerWidth/2 - dom.getWidth(this.domElement) / 2 + 'px';
    this.domElement.style.top = window.innerHeight/2 - dom.getHeight(this.domElement) / 2 + 'px';
  };
  
  function lockScroll(e) {
    console.log(e);
  }

  return CenteredDiv;

})(dat.dom.dom,
dat.utils.common),
dat.dom.dom,
dat.utils.common);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

/**
 * dat-gui JavaScript Controller Library
 * http://code.google.com/p/dat-gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

/** @namespace */
var dat = module.exports = dat || {};

/** @namespace */
dat.color = dat.color || {};

/** @namespace */
dat.utils = dat.utils || {};

dat.utils.common = (function () {
  
  var ARR_EACH = Array.prototype.forEach;
  var ARR_SLICE = Array.prototype.slice;

  /**
   * Band-aid methods for things that should be a lot easier in JavaScript.
   * Implementation and structure inspired by underscore.js
   * http://documentcloud.github.com/underscore/
   */

  return { 
    
    BREAK: {},
  
    extend: function(target) {
      
      this.each(ARR_SLICE.call(arguments, 1), function(obj) {
        
        for (var key in obj)
          if (!this.isUndefined(obj[key])) 
            target[key] = obj[key];
        
      }, this);
      
      return target;
      
    },
    
    defaults: function(target) {
      
      this.each(ARR_SLICE.call(arguments, 1), function(obj) {
        
        for (var key in obj)
          if (this.isUndefined(target[key])) 
            target[key] = obj[key];
        
      }, this);
      
      return target;
    
    },
    
    compose: function() {
      var toCall = ARR_SLICE.call(arguments);
            return function() {
              var args = ARR_SLICE.call(arguments);
              for (var i = toCall.length -1; i >= 0; i--) {
                args = [toCall[i].apply(this, args)];
              }
              return args[0];
            }
    },
    
    each: function(obj, itr, scope) {

      
      if (ARR_EACH && obj.forEach === ARR_EACH) { 
        
        obj.forEach(itr, scope);
        
      } else if (obj.length === obj.length + 0) { // Is number but not NaN
        
        for (var key = 0, l = obj.length; key < l; key++)
          if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) 
            return;
            
      } else {

        for (var key in obj) 
          if (itr.call(scope, obj[key], key) === this.BREAK)
            return;
            
      }
            
    },
    
    defer: function(fnc) {
      setTimeout(fnc, 0);
    },
    
    toArray: function(obj) {
      if (obj.toArray) return obj.toArray();
      return ARR_SLICE.call(obj);
    },

    isUndefined: function(obj) {
      return obj === undefined;
    },
    
    isNull: function(obj) {
      return obj === null;
    },
    
    isNaN: function(obj) {
      return obj !== obj;
    },
    
    isArray: Array.isArray || function(obj) {
      return obj.constructor === Array;
    },
    
    isObject: function(obj) {
      return obj === Object(obj);
    },
    
    isNumber: function(obj) {
      return obj === obj+0;
    },
    
    isString: function(obj) {
      return obj === obj+'';
    },
    
    isBoolean: function(obj) {
      return obj === false || obj === true;
    },
    
    isFunction: function(obj) {
      return Object.prototype.toString.call(obj) === '[object Function]';
    }
  
  };
    
})();


dat.color.toString = (function (common) {

  return function(color) {

    if (color.a == 1 || common.isUndefined(color.a)) {

      var s = color.hex.toString(16);
      while (s.length < 6) {
        s = '0' + s;
      }

      return '#' + s;

    } else {

      return 'rgba(' + Math.round(color.r) + ',' + Math.round(color.g) + ',' + Math.round(color.b) + ',' + color.a + ')';

    }

  }

})(dat.utils.common);


dat.Color = dat.color.Color = (function (interpret, math, toString, common) {

  var Color = function() {

    this.__state = interpret.apply(this, arguments);

    if (this.__state === false) {
      throw 'Failed to interpret color arguments';
    }

    this.__state.a = this.__state.a || 1;


  };

  Color.COMPONENTS = ['r','g','b','h','s','v','hex','a'];

  common.extend(Color.prototype, {

    toString: function() {
      return toString(this);
    },

    toOriginal: function() {
      return this.__state.conversion.write(this);
    }

  });

  defineRGBComponent(Color.prototype, 'r', 2);
  defineRGBComponent(Color.prototype, 'g', 1);
  defineRGBComponent(Color.prototype, 'b', 0);

  defineHSVComponent(Color.prototype, 'h');
  defineHSVComponent(Color.prototype, 's');
  defineHSVComponent(Color.prototype, 'v');

  Object.defineProperty(Color.prototype, 'a', {

    get: function() {
      return this.__state.a;
    },

    set: function(v) {
      this.__state.a = v;
    }

  });

  Object.defineProperty(Color.prototype, 'hex', {

    get: function() {

      if (!this.__state.space !== 'HEX') {
        this.__state.hex = math.rgb_to_hex(this.r, this.g, this.b);
      }

      return this.__state.hex;

    },

    set: function(v) {

      this.__state.space = 'HEX';
      this.__state.hex = v;

    }

  });

  function defineRGBComponent(target, component, componentHexIndex) {

    Object.defineProperty(target, component, {

      get: function() {

        if (this.__state.space === 'RGB') {
          return this.__state[component];
        }

        recalculateRGB(this, component, componentHexIndex);

        return this.__state[component];

      },

      set: function(v) {

        if (this.__state.space !== 'RGB') {
          recalculateRGB(this, component, componentHexIndex);
          this.__state.space = 'RGB';
        }

        this.__state[component] = v;

      }

    });

  }

  function defineHSVComponent(target, component) {

    Object.defineProperty(target, component, {

      get: function() {

        if (this.__state.space === 'HSV')
          return this.__state[component];

        recalculateHSV(this);

        return this.__state[component];

      },

      set: function(v) {

        if (this.__state.space !== 'HSV') {
          recalculateHSV(this);
          this.__state.space = 'HSV';
        }

        this.__state[component] = v;

      }

    });

  }

  function recalculateRGB(color, component, componentHexIndex) {

    if (color.__state.space === 'HEX') {

      color.__state[component] = math.component_from_hex(color.__state.hex, componentHexIndex);

    } else if (color.__state.space === 'HSV') {

      common.extend(color.__state, math.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));

    } else {

      throw 'Corrupted color state';

    }

  }

  function recalculateHSV(color) {

    var result = math.rgb_to_hsv(color.r, color.g, color.b);

    common.extend(color.__state,
        {
          s: result.s,
          v: result.v
        }
    );

    if (!common.isNaN(result.h)) {
      color.__state.h = result.h;
    } else if (common.isUndefined(color.__state.h)) {
      color.__state.h = 0;
    }

  }

  return Color;

})(dat.color.interpret = (function (toString, common) {

  var result, toReturn;

  var interpret = function() {

    toReturn = false;

    var original = arguments.length > 1 ? common.toArray(arguments) : arguments[0];

    common.each(INTERPRETATIONS, function(family) {

      if (family.litmus(original)) {

        common.each(family.conversions, function(conversion, conversionName) {

          result = conversion.read(original);

          if (toReturn === false && result !== false) {
            toReturn = result;
            result.conversionName = conversionName;
            result.conversion = conversion;
            return common.BREAK;

          }

        });

        return common.BREAK;

      }

    });

    return toReturn;

  };

  var INTERPRETATIONS = [

    // Strings
    {

      litmus: common.isString,

      conversions: {

        THREE_CHAR_HEX: {

          read: function(original) {

            var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
            if (test === null) return false;

            return {
              space: 'HEX',
              hex: parseInt(
                  '0x' +
                      test[1].toString() + test[1].toString() +
                      test[2].toString() + test[2].toString() +
                      test[3].toString() + test[3].toString())
            };

          },

          write: toString

        },

        SIX_CHAR_HEX: {

          read: function(original) {

            var test = original.match(/^#([A-F0-9]{6})$/i);
            if (test === null) return false;

            return {
              space: 'HEX',
              hex: parseInt('0x' + test[1].toString())
            };

          },

          write: toString

        },

        CSS_RGB: {

          read: function(original) {

            var test = original.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
            if (test === null) return false;

            return {
              space: 'RGB',
              r: parseFloat(test[1]),
              g: parseFloat(test[2]),
              b: parseFloat(test[3])
            };

          },

          write: toString

        },

        CSS_RGBA: {

          read: function(original) {

            var test = original.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
            if (test === null) return false;

            return {
              space: 'RGB',
              r: parseFloat(test[1]),
              g: parseFloat(test[2]),
              b: parseFloat(test[3]),
              a: parseFloat(test[4])
            };

          },

          write: toString

        }

      }

    },

    // Numbers
    {

      litmus: common.isNumber,

      conversions: {

        HEX: {
          read: function(original) {
            return {
              space: 'HEX',
              hex: original,
              conversionName: 'HEX'
            }
          },

          write: function(color) {
            return color.hex;
          }
        }

      }

    },

    // Arrays
    {

      litmus: common.isArray,

      conversions: {

        RGB_ARRAY: {
          read: function(original) {
            if (original.length != 3) return false;
            return {
              space: 'RGB',
              r: original[0],
              g: original[1],
              b: original[2]
            };
          },

          write: function(color) {
            return [color.r, color.g, color.b];
          }

        },

        RGBA_ARRAY: {
          read: function(original) {
            if (original.length != 4) return false;
            return {
              space: 'RGB',
              r: original[0],
              g: original[1],
              b: original[2],
              a: original[3]
            };
          },

          write: function(color) {
            return [color.r, color.g, color.b, color.a];
          }

        }

      }

    },

    // Objects
    {

      litmus: common.isObject,

      conversions: {

        RGBA_OBJ: {
          read: function(original) {
            if (common.isNumber(original.r) &&
                common.isNumber(original.g) &&
                common.isNumber(original.b) &&
                common.isNumber(original.a)) {
              return {
                space: 'RGB',
                r: original.r,
                g: original.g,
                b: original.b,
                a: original.a
              }
            }
            return false;
          },

          write: function(color) {
            return {
              r: color.r,
              g: color.g,
              b: color.b,
              a: color.a
            }
          }
        },

        RGB_OBJ: {
          read: function(original) {
            if (common.isNumber(original.r) &&
                common.isNumber(original.g) &&
                common.isNumber(original.b)) {
              return {
                space: 'RGB',
                r: original.r,
                g: original.g,
                b: original.b
              }
            }
            return false;
          },

          write: function(color) {
            return {
              r: color.r,
              g: color.g,
              b: color.b
            }
          }
        },

        HSVA_OBJ: {
          read: function(original) {
            if (common.isNumber(original.h) &&
                common.isNumber(original.s) &&
                common.isNumber(original.v) &&
                common.isNumber(original.a)) {
              return {
                space: 'HSV',
                h: original.h,
                s: original.s,
                v: original.v,
                a: original.a
              }
            }
            return false;
          },

          write: function(color) {
            return {
              h: color.h,
              s: color.s,
              v: color.v,
              a: color.a
            }
          }
        },

        HSV_OBJ: {
          read: function(original) {
            if (common.isNumber(original.h) &&
                common.isNumber(original.s) &&
                common.isNumber(original.v)) {
              return {
                space: 'HSV',
                h: original.h,
                s: original.s,
                v: original.v
              }
            }
            return false;
          },

          write: function(color) {
            return {
              h: color.h,
              s: color.s,
              v: color.v
            }
          }

        }

      }

    }


  ];

  return interpret;


})(dat.color.toString,
dat.utils.common),
dat.color.math = (function () {

  var tmpComponent;

  return {

    hsv_to_rgb: function(h, s, v) {

      var hi = Math.floor(h / 60) % 6;

      var f = h / 60 - Math.floor(h / 60);
      var p = v * (1.0 - s);
      var q = v * (1.0 - (f * s));
      var t = v * (1.0 - ((1.0 - f) * s));
      var c = [
        [v, t, p],
        [q, v, p],
        [p, v, t],
        [p, q, v],
        [t, p, v],
        [v, p, q]
      ][hi];

      return {
        r: c[0] * 255,
        g: c[1] * 255,
        b: c[2] * 255
      };

    },

    rgb_to_hsv: function(r, g, b) {

      var min = Math.min(r, g, b),
          max = Math.max(r, g, b),
          delta = max - min,
          h, s;

      if (max != 0) {
        s = delta / max;
      } else {
        return {
          h: NaN,
          s: 0,
          v: 0
        };
      }

      if (r == max) {
        h = (g - b) / delta;
      } else if (g == max) {
        h = 2 + (b - r) / delta;
      } else {
        h = 4 + (r - g) / delta;
      }
      h /= 6;
      if (h < 0) {
        h += 1;
      }

      return {
        h: h * 360,
        s: s,
        v: max / 255
      };
    },

    rgb_to_hex: function(r, g, b) {
      var hex = this.hex_with_component(0, 2, r);
      hex = this.hex_with_component(hex, 1, g);
      hex = this.hex_with_component(hex, 0, b);
      return hex;
    },

    component_from_hex: function(hex, componentIndex) {
      return (hex >> (componentIndex * 8)) & 0xFF;
    },

    hex_with_component: function(hex, componentIndex, value) {
      return value << (tmpComponent = componentIndex * 8) | (hex & ~ (0xFF << tmpComponent));
    }

  }

})(),
dat.color.toString,
dat.utils.common);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rendering_gl_Drawable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_webgl_obj_loader__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_webgl_obj_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_webgl_obj_loader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PlyLoaders__ = __webpack_require__(27);





class Mesh extends __WEBPACK_IMPORTED_MODULE_1__rendering_gl_Drawable__["a" /* default */] {
    constructor(objString, center, albedoTexture, specularTexture, normalTexture) {
        super(); // Call the constructor of the super class. This is required.
        this.posArray = [];
        this.norArray = [];
        this.uvsArray = [];
        this.idxArray = [];
        this.center = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec4 */].fromValues(center[0], center[1], center[2], 1);
        this.albedoMap = albedoTexture;
        this.specularMap = specularTexture;
        this.normalMap = normalTexture;
        this.objString = objString;
    }
    create() {
        //Update Model Matrix
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].translate(this.modelMat, this.modelMat, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(this.center[0], this.center[1], this.center[2]));
        let posTemp = [];
        let norTemp = [];
        let uvsTemp = [];
        let idxTemp = [];
        var loadedMesh = new __WEBPACK_IMPORTED_MODULE_3_webgl_obj_loader__["Mesh"](this.objString);
        //posTemp = loadedMesh.vertices;
        for (var i = 0; i < loadedMesh.vertices.length; i++) {
            posTemp.push(loadedMesh.vertices[i]);
            if (i % 3 == 2)
                posTemp.push(1.0);
        }
        for (var i = 0; i < loadedMesh.vertexNormals.length; i++) {
            norTemp.push(loadedMesh.vertexNormals[i]);
            if (i % 3 == 2)
                norTemp.push(0.0);
        }
        for (var i = 0; i < loadedMesh.textures.length; i++) {
            if (i % 2 == 0)
                uvsTemp.push(loadedMesh.textures[i]);
            else
                uvsTemp.push(-loadedMesh.textures[i] + 1.0); //V filpped
        }
        //uvsTemp = loadedMesh.textures;
        idxTemp = loadedMesh.indices;
        // white vert color for now
        this.colors = new Float32Array(posTemp.length);
        for (var i = 0; i < posTemp.length; ++i) {
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
        this.generateTrans();
        this.count = this.indices.length;
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.bufIdx);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.indices, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufNor);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.normals, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufPos);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.positions, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufCol);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.colors, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufUV);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.uvs, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        //console.log(`Created Mesh from OBJ`);
        this.objString = ""; // hacky clear
    }
    setCopyVBOs(bufferColors, bufferOffsets) {
        this.bufCol = bufferColors;
        this.bufTrans = bufferOffsets;
    }
    createByPly(type, plyText) {
        this.type = type;
        //Update Model Matrix
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].translate(this.modelMat, this.modelMat, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(this.center[0], this.center[1], this.center[2]));
        let posTemp = [];
        let norTemp = [];
        let colTemp = [];
        let uvsTemp = [];
        let idxTemp = [];
        var loadedMesh = new __WEBPACK_IMPORTED_MODULE_3_webgl_obj_loader__["Mesh"](this.objString);
        var PLYLoader = new __WEBPACK_IMPORTED_MODULE_4__PlyLoaders__["a" /* PlyLoader */]();
        PLYLoader.load(plyText);
        //posTemp = loadedMesh.vertices;
        let idx = 0;
        for (var i = 0; i < loadedMesh.indices.length; i++) {
            posTemp.push(loadedMesh.vertices[3 * loadedMesh.indices[i]]);
            posTemp.push(loadedMesh.vertices[3 * loadedMesh.indices[i] + 1]);
            posTemp.push(loadedMesh.vertices[3 * loadedMesh.indices[i] + 2]);
            posTemp.push(1.0);
            idxTemp.push(idx);
            idx++;
            norTemp.push(loadedMesh.vertexNormals[3 * loadedMesh.indices[i]]);
            norTemp.push(loadedMesh.vertexNormals[3 * loadedMesh.indices[i] + 1]);
            norTemp.push(loadedMesh.vertexNormals[3 * loadedMesh.indices[i] + 2]);
            norTemp.push(0);
            uvsTemp.push(loadedMesh.textures[2 * loadedMesh.indices[i]]);
            uvsTemp.push(-loadedMesh.textures[2 * loadedMesh.indices[i] + 1] + 1.0); //V filpped
            //load colors
            colTemp.push(PLYLoader.arrayColor[3 * loadedMesh.indices[i]] / 255);
            colTemp.push(PLYLoader.arrayColor[3 * loadedMesh.indices[i] + 1] / 255);
            colTemp.push(PLYLoader.arrayColor[3 * loadedMesh.indices[i] + 2] / 255);
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
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.bufIdx);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.indices, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufNor);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.normals, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufPos);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.positions, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufCol);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.colors, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufUV);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.uvs, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        console.log(`Created Mesh from PLY`);
        this.objString = ""; // hacky clear
    }
    loadMeshData() {
        //Update Model Matrix
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].translate(this.modelMat, this.modelMat, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(this.center[0], this.center[1], this.center[2]));
        var loadedMesh = new __WEBPACK_IMPORTED_MODULE_3_webgl_obj_loader__["Mesh"](this.objString);
        //posTemp = loadedMesh.vertices;
        for (var i = 0; i < loadedMesh.vertices.length; i++) {
            this.posArray.push(loadedMesh.vertices[i]);
            if (i % 3 == 2)
                this.posArray.push(1.0);
        }
        for (var i = 0; i < loadedMesh.vertexNormals.length; i++) {
            this.norArray.push(loadedMesh.vertexNormals[i]);
            if (i % 3 == 2)
                this.norArray.push(0.0);
        }
        for (var i = 0; i < loadedMesh.textures.length; i++) {
            if (i % 2 == 0)
                this.uvsArray.push(loadedMesh.textures[i]);
            else
                this.uvsArray.push(-loadedMesh.textures[i] + 1.0); //V filpped
        }
        //uvsTemp = loadedMesh.textures;
        this.idxArray = loadedMesh.indices;
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (Mesh);


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define("OBJ",[],t):"object"==typeof exports?exports.OBJ=t():e.OBJ=t()}(this,function(){return function(e){function t(a){if(r[a])return r[a].exports;var i=r[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.d=function(exports,e,r){t.o(exports,e)||Object.defineProperty(exports,e,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=3)}([function(e,exports,t){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e){switch(e){case"BYTE":case"UNSIGNED_BYTE":return 1;case"SHORT":case"UNSIGNED_SHORT":return 2;case"FLOAT":return 4}}Object.defineProperty(exports,"__esModule",{value:!0});var i=exports.Layout=function e(){r(this,e);for(var t=arguments.length,a=Array(t),i=0;i<t;i++)a[i]=arguments[i];this.attributes=a;var s=0,l=0,o=!0,u=!1,f=void 0;try{for(var c,p=a[Symbol.iterator]();!(o=(c=p.next()).done);o=!0){var h=c.value;if(this[h.key])throw new n(h);s%h.sizeOfType!=0&&(s+=h.sizeOfType-s%h.sizeOfType),this[h.key]={attribute:h,size:h.size,type:h.type,normalized:h.normalized,offset:s},s+=h.sizeInBytes,l=Math.max(l,h.sizeOfType)}}catch(e){u=!0,f=e}finally{try{!o&&p.return&&p.return()}finally{if(u)throw f}}s%l!=0&&(s+=l-s%l),this.stride=s;var v=!0,m=!1,y=void 0;try{for(var d,M=a[Symbol.iterator]();!(v=(d=M.next()).done);v=!0){this[d.value.key].stride=this.stride}}catch(e){m=!0,y=e}finally{try{!v&&M.return&&M.return()}finally{if(m)throw y}}},n=function e(t){r(this,e),this.message="found duplicate attribute: "+t.key},s=function e(t,i,n){arguments.length>3&&void 0!==arguments[3]&&arguments[3];r(this,e),this.key=t,this.size=i,this.type=n,this.normalized=!1,this.sizeOfType=a(n),this.sizeInBytes=this.sizeOfType*i};i.POSITION=new s("position",3,"FLOAT"),i.NORMAL=new s("normal",3,"FLOAT"),i.TANGENT=new s("tangent",3,"FLOAT"),i.BITANGENT=new s("bitangent",3,"FLOAT"),i.UV=new s("uv",2,"FLOAT"),i.MATERIAL_INDEX=new s("materialIndex",1,"SHORT"),i.MATERIAL_ENABLED=new s("materialEnabled",1,"UNSIGNED_SHORT"),i.AMBIENT=new s("ambient",3,"FLOAT"),i.DIFFUSE=new s("diffuse",3,"FLOAT"),i.SPECULAR=new s("specular",3,"FLOAT"),i.SPECULAR_EXPONENT=new s("specularExponent",3,"FLOAT"),i.EMISSIVE=new s("emissive",3,"FLOAT"),i.TRANSMISSION_FILTER=new s("transmissionFilter",3,"FLOAT"),i.DISSOLVE=new s("dissolve",1,"FLOAT"),i.ILLUMINATION=new s("illumination",1,"UNSIGNED_SHORT"),i.REFRACTION_INDEX=new s("refractionIndex",1,"FLOAT"),i.SHARPNESS=new s("sharpness",1,"FLOAT"),i.MAP_DIFFUSE=new s("mapDiffuse",1,"SHORT"),i.MAP_AMBIENT=new s("mapAmbient",1,"SHORT"),i.MAP_SPECULAR=new s("mapSpecular",1,"SHORT"),i.MAP_SPECULAR_EXPONENT=new s("mapSpecularExponent",1,"SHORT"),i.MAP_DISSOLVE=new s("mapDissolve",1,"SHORT"),i.ANTI_ALIASING=new s("antiAliasing",1,"UNSIGNED_SHORT"),i.MAP_BUMP=new s("mapBump",1,"SHORT"),i.MAP_DISPLACEMENT=new s("mapDisplacement",1,"SHORT"),i.MAP_DECAL=new s("mapDecal",1,"SHORT"),i.MAP_EMISSIVE=new s("mapEmissive",1,"SHORT")},function(e,exports,t){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),n=t(0),s=function(){function e(t,i){a(this,e),i=i||{},i.materials=i.materials||[];var n=this;n.has_materials=!!i.materials,n.materials={},n.vertices=[],n.vertexNormals=[],n.textures=[],n.indices=[],this.name="";var s=[],l=[],o=[],u={},f=[],c={},p=-1;u.verts=[],u.norms=[],u.textures=[],u.hashindices={},u.indices=[],u.materialIndices=[],u.index=0;for(var h=/^v\s/,v=/^vn\s/,m=/^vt\s/,y=/^f\s/,d=/\s+/,M=/^usemtl/,b=t.split("\n"),I=0;I<b.length;I++){var _=b[I].trim();if(_&&!_.startsWith("#")){var x=_.split(d);if(x.shift(),h.test(_))s.push.apply(s,r(x));else if(v.test(_))l.push.apply(l,r(x));else if(m.test(_))o.push.apply(o,r(x));else if(M.test(_)){var k=x[0];k in c||(f.push(k),c[k]=f.length-1),p=c[k]}else if(y.test(_))for(var A=!1,w=0,F=x.length;w<F;w++){3!==w||A||(w=2,A=!0);var E=x[0]+","+p,S=x[w]+","+p;if(S in u.hashindices)u.indices.push(u.hashindices[S]);else{var T=x[w].split("/"),O=T.length-1;u.verts.push(+s[3*(T[0]-1)+0]),u.verts.push(+s[3*(T[0]-1)+1]),u.verts.push(+s[3*(T[0]-1)+2]),o.length&&(u.textures.push(+o[2*(T[1]-1)+0]),u.textures.push(+o[2*(T[1]-1)+1])),u.norms.push(+l[3*(T[O]-1)+0]),u.norms.push(+l[3*(T[O]-1)+1]),u.norms.push(+l[3*(T[O]-1)+2]),u.materialIndices.push(p),u.hashindices[S]=u.index,u.indices.push(u.index),u.index+=1}3===w&&A&&u.indices.push(u.hashindices[E])}}}n.vertices=u.verts,n.vertexNormals=u.norms,n.textures=u.textures,n.vertexMaterialIndices=u.materialIndices,n.indices=u.indices,n.materialNames=f,n.materialIndices=c,n.materialsByIndex={}}return i(e,[{key:"makeBufferData",value:function(e){var t=this.vertices.length/3,r=new ArrayBuffer(e.stride*t);r.numItems=t;for(var a=new DataView(r),i=0,s=0;i<t;i++){s=i*e.stride;var l=!0,o=!1,u=void 0;try{for(var f,c=e.attributes[Symbol.iterator]();!(l=(f=c.next()).done);l=!0){var p=f.value,h=s+e[p.key].offset;switch(p.key){case n.Layout.POSITION.key:a.setFloat32(h,this.vertices[3*i],!0),a.setFloat32(h+4,this.vertices[3*i+1],!0),a.setFloat32(h+8,this.vertices[3*i+2],!0);break;case n.Layout.UV.key:a.setFloat32(h,this.textures[2*i],!0),a.setFloat32(h+4,this.vertices[2*i+1],!0);break;case n.Layout.NORMAL.key:a.setFloat32(h,this.vertexNormals[3*i],!0),a.setFloat32(h+4,this.vertexNormals[3*i+1],!0),a.setFloat32(h+8,this.vertexNormals[3*i+2],!0);break;case n.Layout.MATERIAL_INDEX.key:a.setInt16(h,this.vertexMaterialIndices[i],!0);break;case n.Layout.AMBIENT.key:var v=this.vertexMaterialIndices[i],m=this.materialsByIndex[v];if(!m)break;a.setFloat32(h,m.ambient[0],!0),a.setFloat32(h+4,m.ambient[1],!0),a.setFloat32(h+8,m.ambient[2],!0);break;case n.Layout.DIFFUSE.key:var y=this.vertexMaterialIndices[i],d=this.materialsByIndex[y];if(!d)break;a.setFloat32(h,d.diffuse[0],!0),a.setFloat32(h+4,d.diffuse[1],!0),a.setFloat32(h+8,d.diffuse[2],!0);break;case n.Layout.SPECULAR.key:var M=this.vertexMaterialIndices[i],b=this.materialsByIndex[M];if(!b)break;a.setFloat32(h,b.specular[0],!0),a.setFloat32(h+4,b.specular[1],!0),a.setFloat32(h+8,b.specular[2],!0);break;case n.Layout.SPECULAR_EXPONENT.key:var I=this.vertexMaterialIndices[i],_=this.materialsByIndex[I];if(!_)break;a.setFloat32(h,_.specularExponent,!0);break;case n.Layout.EMISSIVE.key:var x=this.vertexMaterialIndices[i],k=this.materialsByIndex[x];if(!k)break;a.setFloat32(h,k.emissive[0],!0),a.setFloat32(h+4,k.emissive[1],!0),a.setFloat32(h+8,k.emissive[2],!0);break;case n.Layout.TRANSMISSION_FILTER.key:var A=this.vertexMaterialIndices[i],w=this.materialsByIndex[A];if(!w)break;a.setFloat32(h,w.transmissionFilter[0],!0),a.setFloat32(h+4,w.transmissionFilter[1],!0),a.setFloat32(h+8,w.transmissionFilter[2],!0);break;case n.Layout.DISSOLVE.key:var F=this.vertexMaterialIndices[i],E=this.materialsByIndex[F];if(!E)break;a.setFloat32(h,E.dissolve,!0);break;case n.Layout.ILLUMINATION.key:var S=this.vertexMaterialIndices[i],T=this.materialsByIndex[S];if(!T)break;a.setInt16(h,T.illumination,!0);break;case n.Layout.REFRACTION_INDEX.key:var O=this.vertexMaterialIndices[i],L=this.materialsByIndex[O];if(!L)break;a.setFloat32(h,L.refractionIndex,!0);break;case n.Layout.SHARPNESS.key:var B=this.vertexMaterialIndices[i],N=this.materialsByIndex[B];if(!N)break;a.setFloat32(h,N.sharpness,!0);break;case n.Layout.ANTI_ALIASING.key:var R=this.vertexMaterialIndices[i],P=this.materialsByIndex[R];if(!P)break;a.setInt16(h,P.antiAliasing,!0)}}}catch(e){o=!0,u=e}finally{try{!l&&c.return&&c.return()}finally{if(o)throw u}}}return r}},{key:"makeIndexBufferData",value:function(){var e=new Uint16Array(this.indices);return e.numItems=this.indices.length,e}},{key:"addMaterialLibrary",value:function(e){for(var t in e.materials)if(t in this.materialIndices){var r=e.materials[t],a=this.materialIndices[r.name];this.materialsByIndex[a]=r}}}]),e}();exports.default=s},function(e,exports,t){"use strict";function r(e){return Array.isArray(e)?e:Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),n=exports.Material=function e(t){a(this,e),this.name=t,this.ambient=[0,0,0],this.diffuse=[0,0,0],this.specular=[0,0,0],this.emissive=[0,0,0],this.transmissionFilter=[0,0,0],this.dissolve=0,this.specularExponent=0,this.transparency=0,this.illumination=0,this.refractionIndex=1,this.sharpness=0,this.mapDiffuse=null,this.mapAmbient=null,this.mapSpecular=null,this.mapSpecularExponent=null,this.mapDissolve=null,this.antiAliasing=!1,this.mapBump=null,this.mapDisplacement=null,this.mapDecal=null,this.mapEmissive=null,this.mapReflections=[]};exports.MaterialLibrary=function(){function e(t){a(this,e),this.data=t,this.currentMaterial=null,this.materials={},this.parse()}return i(e,[{key:"parse_newmtl",value:function(e){var t=e[0];this.currentMaterial=new n(t),this.materials[t]=this.currentMaterial}},{key:"parseColor",value:function(e){if("spectral"!=e[0]&&"xyz"!=e[0]){if(3==e.length)return e.map(parseFloat);var t=parseFloat(e[0]);return[t,t,t]}}},{key:"parse_Ka",value:function(e){this.currentMaterial.ambient=this.parseColor(e)}},{key:"parse_Kd",value:function(e){this.currentMaterial.diffuse=this.parseColor(e)}},{key:"parse_Ks",value:function(e){this.currentMaterial.specular=this.parseColor(e)}},{key:"parse_Ke",value:function(e){this.currentMaterial.emissive=this.parseColor(e)}},{key:"parse_Tf",value:function(e){this.currentMaterial.transmissionFilter=this.parseColor(e)}},{key:"parse_d",value:function(e){this.currentMaterial.dissolve=parseFloat(e.pop())}},{key:"parse_illum",value:function(e){this.currentMaterial.illumination=parseInt(e[0])}},{key:"parse_Ni",value:function(e){this.currentMaterial.refractionIndex=parseFloat(e[0])}},{key:"parse_Ns",value:function(e){this.currentMaterial.specularExponent=parseInt(e[0])}},{key:"parse_sharpness",value:function(e){this.currentMaterial.sharpness=parseInt(e[0])}},{key:"parse_cc",value:function(e,t){t.colorCorrection="on"==e[0]}},{key:"parse_blendu",value:function(e,t){t.horizontalBlending="on"==e[0]}},{key:"parse_blendv",value:function(e,t){t.verticalBlending="on"==e[0]}},{key:"parse_boost",value:function(e,t){t.boostMipMapSharpness=parseFloat(e[0])}},{key:"parse_mm",value:function(e,t){t.modifyTextureMap.brightness=parseFloat(e[0]),t.modifyTextureMap.contrast=parseFloat(e[1])}},{key:"parse_ost",value:function(e,t,r){for(;e.length<3;)e.push(r);t.u=parseFloat(e[0]),t.v=parseFloat(e[1]),t.w=parseFloat(e[2])}},{key:"parse_o",value:function(e,t){this.parse_ost(e,t.offset,0)}},{key:"parse_s",value:function(e,t){this.parse_ost(e,t.scale,1)}},{key:"parse_t",value:function(e,t){this.parse_ost(e,t.turbulence,0)}},{key:"parse_texres",value:function(e,t){t.textureResolution=parseFloat(e[0])}},{key:"parse_clamp",value:function(e,t){t.clamp="on"==e[0]}},{key:"parse_bm",value:function(e,t){t.bumpMultiplier=parseFloat(e[0])}},{key:"parse_imfchan",value:function(e,t){t.imfChan=e[0]}},{key:"parse_type",value:function(e,t){t.reflectionType=e[0]}},{key:"parseOptions",value:function(e){var t={colorCorrection:!1,horizontalBlending:!0,verticalBlending:!0,boostMipMapSharpness:0,modifyTextureMap:{brightness:0,contrast:1},offset:{u:0,v:0,w:0},scale:{u:1,v:1,w:1},turbulence:{u:0,v:0,w:0},clamp:!1,textureResolution:null,bumpMultiplier:1,imfChan:null},r=void 0,a=void 0,i={};for(e.reverse();e.length;){var n=e.pop();n.startsWith("-")?(r=n.substr(1),i[r]=[]):i[r].push(n)}for(r in i)if(i.hasOwnProperty(r)){a=i[r];var s=this["parse_"+r];s&&s.bind(this)(a,t)}return t}},{key:"parseMap",value:function(e){var t=void 0,a=void 0;if(e[0].startsWith("-"))t=e.pop(),a=e;else{var i=r(e);t=i[0],a=i.slice(1)}return a=this.parseOptions(a),a.filename=t,a}},{key:"parse_map_Ka",value:function(e){this.currentMaterial.mapAmbient=this.parseMap(e)}},{key:"parse_map_Kd",value:function(e){this.currentMaterial.mapDiffuse=this.parseMap(e)}},{key:"parse_map_Ks",value:function(e){this.currentMaterial.mapSpecular=this.parseMap(e)}},{key:"parse_map_Ke",value:function(e){this.currentMaterial.mapEmissive=this.parseMap(e)}},{key:"parse_map_Ns",value:function(e){this.currentMaterial.mapSpecularExponent=this.parseMap(e)}},{key:"parse_map_d",value:function(e){this.currentMaterial.mapDissolve=this.parseMap(e)}},{key:"parse_map_aat",value:function(e){this.currentMaterial.antiAliasing="on"==e[0]}},{key:"parse_map_bump",value:function(e){this.currentMaterial.mapBump=this.parseMap(e)}},{key:"parse_bump",value:function(e){this.parse_map_bump(e)}},{key:"parse_disp",value:function(e){this.currentMaterial.mapDisplacement=this.parseMap(e)}},{key:"parse_decal",value:function(e){this.currentMaterial.mapDecal=this.parseMap(e)}},{key:"parse_refl",value:function(e){this.currentMaterial.mapReflections.push(this.parseMap(e))}},{key:"parse",value:function(){var e=this.data.split(/\r?\n/),t=!0,a=!1,i=void 0;try{for(var n,s=e[Symbol.iterator]();!(t=(n=s.next()).done);t=!0){var l=n.value;if((l=l.trim())&&!l.startsWith("#")){var o=l.split(/\s/),u=void 0,f=o,c=r(f);u=c[0],o=c.slice(1);var p=this["parse_"+u];p&&p.bind(this)(o)}}}catch(e){a=!0,i=e}finally{try{!t&&s.return&&s.return()}finally{if(a)throw i}}delete this.data,this.currentMaterial=null}}]),e}()},function(e,exports,t){e.exports=t(4)},function(e,exports,t){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.deleteMeshBuffers=exports.initMeshBuffers=exports.downloadMeshes=exports.downloadModels=exports.Layout=exports.MaterialLibrary=exports.Material=exports.Mesh=void 0;var r=t(1),a=function(e){return e&&e.__esModule?e:{default:e}}(r),i=t(2),n=t(0),s=t(5);exports.Mesh=a.default,exports.Material=i.Material,exports.MaterialLibrary=i.MaterialLibrary,exports.Layout=n.Layout,exports.downloadModels=s.downloadModels,exports.downloadMeshes=s.downloadMeshes,exports.initMeshBuffers=s.initMeshBuffers,exports.deleteMeshBuffers=s.deleteMeshBuffers},function(e,exports,t){"use strict";function r(e,t){var r=["mapDiffuse","mapAmbient","mapSpecular","mapDissolve","mapBump","mapDisplacement","mapDecal","mapEmissive"];t.endsWith("/")||(t+="/");var a=[];for(var i in e.materials)if(e.materials.hasOwnProperty(i)){i=e.materials[i];var n=!0,s=!1,l=void 0;try{for(var o,u=r[Symbol.iterator]();!(n=(o=u.next()).done);n=!0){var f=o.value;(function(e){var r=i[e];if(!r)return"continue";var n=t+r.filename;a.push(fetch(n).then(function(e){if(!e.ok)throw new Error;return e.blob()}).then(function(e){var t=new Image;t.src=URL.createObjectURL(e),r.texture=t}).catch(function(){}))})(f)}}catch(e){s=!0,l=e}finally{try{!n&&u.return&&u.return()}finally{if(s)throw l}}}return Promise.all(a)}function a(e){var t=[],a=!0,i=!1,n=void 0;try{for(var s,o=e[Symbol.iterator]();!(a=(s=o.next()).done);a=!0){var c=s.value;!function(e){var a=[];if(!e.obj)throw new Error('"obj" attribute of model object not set. The .obj file is required to be set in order to use downloadModels()');var i=e.name;if(!i){var n=e.obj.split("/");i=n[n.length-1].replace(".obj","")}if(a.push(Promise.resolve(i)),a.push(fetch(e.obj).then(function(e){return e.text()}).then(function(e){return new u.default(e)})),e.mtl){var s=e.mtl;"boolean"==typeof s&&(s=e.obj.replace(/\.obj$/,".mtl")),a.push(fetch(s).then(function(e){return e.text()}).then(function(t){var a=new f.MaterialLibrary(t);if(!1!==e.downloadMtlTextures){var i=e.mtlTextureRoot;return i||(i=s.substr(0,s.lastIndexOf("/"))),Promise.all([Promise.resolve(a),r(a,i)])}return Promise.all(Promise.resolve(a))}).then(function(e){return e[0]}))}t.push(Promise.all(a))}(c)}}catch(e){i=!0,n=e}finally{try{!a&&o.return&&o.return()}finally{if(i)throw n}}return Promise.all(t).then(function(e){var t={},r=!0,a=!1,i=void 0;try{for(var n,s=e[Symbol.iterator]();!(r=(n=s.next()).done);r=!0){var o=n.value,u=l(o,3),f=u[0],c=u[1],p=u[2];c.name=f,p&&c.addMaterialLibrary(p),t[f]=c}}catch(e){a=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(a)throw i}}return t})}function i(e,t,r){void 0===r&&(r={});var a=[];for(var i in e){(function(t){if(!e.hasOwnProperty(t))return"continue";var r=e[t];a.push(fetch(r).then(function(e){return e.text()}).then(function(e){return[t,new u.default(e)]}))})(i)}Promise.all(a).then(function(e){var a=!0,i=!1,n=void 0;try{for(var s,o=e[Symbol.iterator]();!(a=(s=o.next()).done);a=!0){var u=s.value,f=l(u,2),c=f[0],p=f[1];r[c]=p}}catch(e){i=!0,n=e}finally{try{!a&&o.return&&o.return()}finally{if(i)throw n}}return t(r)})}function n(e,t){t.normalBuffer=c(e,e.ARRAY_BUFFER,t.vertexNormals,3),t.textureBuffer=c(e,e.ARRAY_BUFFER,t.textures,2),t.vertexBuffer=c(e,e.ARRAY_BUFFER,t.vertices,3),t.indexBuffer=c(e,e.ELEMENT_ARRAY_BUFFER,t.indices,1)}function s(e,t){e.deleteBuffer(t.normalBuffer),e.deleteBuffer(t.textureBuffer),e.deleteBuffer(t.vertexBuffer),e.deleteBuffer(t.indexBuffer)}Object.defineProperty(exports,"__esModule",{value:!0});var l=function(){function e(e,t){var r=[],a=!0,i=!1,n=void 0;try{for(var s,l=e[Symbol.iterator]();!(a=(s=l.next()).done)&&(r.push(s.value),!t||r.length!==t);a=!0);}catch(e){i=!0,n=e}finally{try{!a&&l.return&&l.return()}finally{if(i)throw n}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();exports.downloadModels=a,exports.downloadMeshes=i,exports.initMeshBuffers=n,exports.deleteMeshBuffers=s;var o=t(1),u=function(e){return e&&e.__esModule?e:{default:e}}(o),f=t(2),c=(t(0),function(e,t,r,a){var i=e.createBuffer(),n=t===e.ARRAY_BUFFER?Float32Array:Uint16Array;return e.bindBuffer(t,i),e.bufferData(t,new n(r),e.STATIC_DRAW),i.itemSize=a,i.numItems=r.length/a,i})}])});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class PlyVertex {
    constructor() {
        this.y = 0;
        this.z = 0;
        this.nx = 0; // a_Normal
        this.ny = 0;
        this.nz = 0;
        this.u = 0; // a_Texture
        this.v = 0;
        this.r = 0; // a_Color
        this.g = 0;
        this.b = 0;
    }
}
class PlyVertexColorsOnly {
    constructor() {
        this.y = 0;
        this.z = 0;
        this.r = 0; // a_Color
        this.g = 0;
        this.b = 0;
    }
}
class PlyFace {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
}
class PlyLoader {
    constructor() {
        this.Ply_Vertices = 0;
        this.Ply_Faces = 0;
        this.ReadingPlyData = false;
        this.Ply_DataLength = 11; // x,y,z,nx,ny,nz,u,v,r,g,b
        this.FaceIndex = 0;
        this.VAO_VertexIndex = 0;
        this.arrayVertex = [];
        this.arrayNormal = [];
        this.arrayTexture = [];
        this.arrayColor = [];
        this.arrayIndex = [];
    }
    load(fileText) {
        let lines = fileText.split('\n');
        var PLY_index = 0;
        var vertices = null;
        var faces = null;
        console.log("PLY number of lines = " + lines.length);
        for (var i = 0; i < lines.length; i++) {
            if (this.ReadingPlyData) {
                var e = lines[i].split(" ");
                // Read vertices
                if (PLY_index < this.Ply_Vertices) {
                    vertices[PLY_index] = new PlyVertex();
                    vertices[PLY_index].x = e[0];
                    vertices[PLY_index].y = e[1];
                    vertices[PLY_index].z = e[2];
                    vertices[PLY_index].nx = e[3];
                    vertices[PLY_index].ny = e[4];
                    vertices[PLY_index].nz = e[5];
                    vertices[PLY_index].u = e[6];
                    vertices[PLY_index].v = e[7];
                    vertices[PLY_index].r = e[8];
                    vertices[PLY_index].g = e[9];
                    vertices[PLY_index].b = e[10];
                    // Read faces
                }
                else {
                    // Reset index for building VAOs
                    if (PLY_index == this.Ply_Vertices) {
                        console.log("Resetting Index...");
                        this.FaceIndex = 0;
                        this.VAO_VertexIndex = 0;
                    }
                    // Wire face data to appropriate vertices
                    var n = e[0]; // unused, always 3; assumes triangulated models only
                    var a = e[1]; // face vertex A
                    var b = e[2]; // face vertex B
                    var c = e[3]; // face vertex C
                    if (this.FaceIndex < this.Ply_Faces) {
                        // We don't really have to *store* face data
                        // faces[FaceIndex] = new PLY_Face(a, b, c);
                        // vertices
                        this.arrayVertex.push(vertices[Number(a)].x);
                        this.arrayVertex.push(vertices[Number(a)].y);
                        this.arrayVertex.push(vertices[Number(a)].z);
                        this.arrayVertex.push(vertices[Number(b)].x);
                        this.arrayVertex.push(vertices[Number(b)].y);
                        this.arrayVertex.push(vertices[Number(b)].z);
                        this.arrayVertex.push(vertices[Number(c)].x);
                        this.arrayVertex.push(vertices[Number(c)].y);
                        this.arrayVertex.push(vertices[Number(c)].z);
                        // normals
                        this.arrayNormal.push(vertices[Number(a)].nx);
                        this.arrayNormal.push(vertices[Number(a)].ny);
                        this.arrayNormal.push(vertices[Number(a)].nz);
                        this.arrayNormal.push(vertices[Number(b)].nx);
                        this.arrayNormal.push(vertices[Number(b)].ny);
                        this.arrayNormal.push(vertices[Number(b)].nz);
                        this.arrayNormal.push(vertices[Number(c)].nx);
                        this.arrayNormal.push(vertices[Number(c)].ny);
                        this.arrayNormal.push(vertices[Number(c)].nz);
                        // colors
                        this.arrayColor.push(vertices[Number(a)].r);
                        this.arrayColor.push(vertices[Number(a)].g);
                        this.arrayColor.push(vertices[Number(a)].b);
                        this.arrayColor.push(vertices[Number(b)].r);
                        this.arrayColor.push(vertices[Number(b)].g);
                        this.arrayColor.push(vertices[Number(b)].b);
                        this.arrayColor.push(vertices[Number(c)].r);
                        this.arrayColor.push(vertices[Number(c)].g);
                        this.arrayColor.push(vertices[Number(c)].b);
                        // uv
                        this.arrayTexture.push(vertices[Number(a)].u);
                        this.arrayTexture.push(vertices[Number(a)].v);
                        this.arrayTexture.push(vertices[Number(b)].u);
                        this.arrayTexture.push(vertices[Number(b)].v);
                        this.arrayTexture.push(vertices[Number(c)].u);
                        this.arrayTexture.push(vertices[Number(c)].v);
                        // index
                        this.arrayIndex.push(this.FaceIndex);
                    }
                    this.FaceIndex++;
                }
                PLY_index++;
            }
            else {
                // Read number of vertices stored in the file
                if (lines[i].substr(0, "element vertex".length) == "element vertex")
                    this.Ply_Vertices = Number(lines[i].split(" ")[2]);
                // Read number of faces stored in the file
                if (lines[i].substr(0, "element face".length) == "element face")
                    this.Ply_Faces = Number(lines[i].split(" ")[2]);
            }
            // Finished reading header data, prepare for reading vertex data
            if (lines[i] == "end_header") {
                // Allocate enough space for vertices
                vertices = new Array(this.Ply_Vertices);
                // Allocate enough space for faces
                faces = new Array(this.Ply_Faces);
                this.ReadingPlyData = true;
            }
        }
        console.log("PLY_Vertices = " + this.Ply_Vertices + " loaded");
        console.log("PLY_Faces = " + this.Ply_Faces + " loaded");
        console.log("arrayVertex length = " + this.arrayVertex.length);
        console.log("arrayNormal length = " + this.arrayNormal.length);
        console.log("arrayTexture length = " + this.arrayTexture.length);
        console.log("arrayColor length = " + this.arrayColor.length);
        console.log("arrayIndex length = " + this.arrayIndex.length);
    }
    loadColorsOnly(fileText) {
        this.Ply_DataLength = 6;
        let lines = fileText.split('\n');
        var PLY_index = 0;
        var vertices = null;
        var faces = null;
        console.log("PLY number of lines = " + lines.length);
        for (var i = 0; i < lines.length; i++) {
            if (this.ReadingPlyData) {
                var e = lines[i].split(" ");
                // Read vertices
                if (PLY_index < this.Ply_Vertices) {
                    vertices[PLY_index] = new PlyVertexColorsOnly();
                    vertices[PLY_index].x = e[0];
                    vertices[PLY_index].y = e[1];
                    vertices[PLY_index].z = e[2];
                    vertices[PLY_index].r = e[3];
                    vertices[PLY_index].g = e[4];
                    vertices[PLY_index].b = e[5];
                    // Read faces
                }
                else {
                    // Reset index for building VAOs
                    if (PLY_index == this.Ply_Vertices) {
                        console.log("Resetting Index...");
                        this.FaceIndex = 0;
                        this.VAO_VertexIndex = 0;
                    }
                    // Wire face data to appropriate vertices
                    var n = e[0]; // unused, always 3; assumes triangulated models only
                    var a = e[1]; // face vertex A
                    var b = e[2]; // face vertex B
                    var c = e[3]; // face vertex C
                    if (this.FaceIndex < this.Ply_Faces) {
                        // We don't really have to *store* face data
                        // faces[FaceIndex] = new PLY_Face(a, b, c);
                        // vertices
                        this.arrayVertex.push(vertices[Number(a)].x);
                        this.arrayVertex.push(vertices[Number(a)].y);
                        this.arrayVertex.push(vertices[Number(a)].z);
                        this.arrayVertex.push(vertices[Number(b)].x);
                        this.arrayVertex.push(vertices[Number(b)].y);
                        this.arrayVertex.push(vertices[Number(b)].z);
                        this.arrayVertex.push(vertices[Number(c)].x);
                        this.arrayVertex.push(vertices[Number(c)].y);
                        this.arrayVertex.push(vertices[Number(c)].z);
                        // colors
                        this.arrayColor.push(vertices[Number(a)].r);
                        this.arrayColor.push(vertices[Number(a)].g);
                        this.arrayColor.push(vertices[Number(a)].b);
                        this.arrayColor.push(vertices[Number(b)].r);
                        this.arrayColor.push(vertices[Number(b)].g);
                        this.arrayColor.push(vertices[Number(b)].b);
                        this.arrayColor.push(vertices[Number(c)].r);
                        this.arrayColor.push(vertices[Number(c)].g);
                        this.arrayColor.push(vertices[Number(c)].b);
                        // index
                        this.arrayIndex.push(this.FaceIndex);
                    }
                    this.FaceIndex++;
                }
                PLY_index++;
            }
            else {
                // Read number of vertices stored in the file
                if (lines[i].substr(0, "element vertex".length) == "element vertex")
                    this.Ply_Vertices = Number(lines[i].split(" ")[2]);
                // Read number of faces stored in the file
                if (lines[i].substr(0, "element face".length) == "element face")
                    this.Ply_Faces = Number(lines[i].split(" ")[2]);
            }
            // Finished reading header data, prepare for reading vertex data
            if (lines[i] == "end_header") {
                // Allocate enough space for vertices
                vertices = new Array(this.Ply_Vertices);
                // Allocate enough space for faces
                faces = new Array(this.Ply_Faces);
                this.ReadingPlyData = true;
            }
        }
        console.log("arrayColor length = " + this.arrayColor.length);
        console.log("arrayIndex length = " + this.arrayIndex.length);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PlyLoader;



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ShaderProgram__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PostProcess__ = __webpack_require__(29);




const GbufferEnum = { "Albedo": 0, "Specular": 1, "Normal": 2 };
const PipelineEnum = { "SceneImage": 0, "SSR": 1, "SSR_MIP": 2, "SaveFrame": 3, "ShadowPass": 4,
    "ExtractHighLight": 5, "HorizonBlur": 6, "VerticalBlur": 7, "Particle": 8, "ParticleMesh": 9, "Clouds": 10,
    "SSR_HBLURRED_MIP_0": 11,
    "SSR_VBLURRED_MIP_0": 12,
    "SSR_HBLURRED_MIP_1": 13,
    "SSR_VBLURRED_MIP_1": 14,
    "SSR_HBLURRED_MIP_2": 15,
    "SSR_VBLURRED_MIP_2": 16,
    "SSR_HBLURRED_MIP_3": 17,
    "SSR_VBLURRED_MIP_3": 18,
    "SSR_HBLURRED_MIP_4": 19,
    "SSR_VBLURRED_MIP_4": 20,
    "SSR_HBLURRED_MIP_5": 21,
    "SSR_VBLURRED_MIP_5": 22,
    "LensFlare": 23,
    "LensFlare_H": 24,
    "LensFlare_V": 25,
    "ExtractHighLightforLensFlare": 26,
    "ToneMapping": 0,
    "FXAA": 1 };
var gShadowMapSize = 1024;
class OpenGLRenderer {
    constructor(canvas) {
        this.canvas = canvas;
        this.SSRDownSampling = 0.5;
        this.LensDownSampling = 0.25;
        this.LensBlurDownSampling = 0.125;
        this.BloomDownSampling = 0.125;
        // the shader that renders from the gbuffers into the postbuffers
        this.deferredShader = new __WEBPACK_IMPORTED_MODULE_3__PostProcess__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_2__ShaderProgram__["a" /* Shader */](__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAGMENT_SHADER, __webpack_require__(31)));
        this.translucentAddPass = new __WEBPACK_IMPORTED_MODULE_3__PostProcess__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_2__ShaderProgram__["a" /* Shader */](__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAGMENT_SHADER, __webpack_require__(32)));
        this.SSRPass = new __WEBPACK_IMPORTED_MODULE_3__PostProcess__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_2__ShaderProgram__["a" /* Shader */](__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAGMENT_SHADER, __webpack_require__(33)));
        this.SSRMipPass = new __WEBPACK_IMPORTED_MODULE_3__PostProcess__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_2__ShaderProgram__["a" /* Shader */](__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAGMENT_SHADER, __webpack_require__(34)));
        this.savePass = new __WEBPACK_IMPORTED_MODULE_3__PostProcess__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_2__ShaderProgram__["a" /* Shader */](__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAGMENT_SHADER, __webpack_require__(35)));
        this.highLightPass = new __WEBPACK_IMPORTED_MODULE_3__PostProcess__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_2__ShaderProgram__["a" /* Shader */](__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAGMENT_SHADER, __webpack_require__(36)));
        this.lensFlarePass = new __WEBPACK_IMPORTED_MODULE_3__PostProcess__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_2__ShaderProgram__["a" /* Shader */](__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAGMENT_SHADER, __webpack_require__(37)));
        this.VblurPass = new __WEBPACK_IMPORTED_MODULE_3__PostProcess__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_2__ShaderProgram__["a" /* Shader */](__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAGMENT_SHADER, __webpack_require__(38)));
        this.HblurPass = new __WEBPACK_IMPORTED_MODULE_3__PostProcess__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_2__ShaderProgram__["a" /* Shader */](__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAGMENT_SHADER, __webpack_require__(39)));
        this.VmipblurPass = new __WEBPACK_IMPORTED_MODULE_3__PostProcess__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_2__ShaderProgram__["a" /* Shader */](__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAGMENT_SHADER, __webpack_require__(40)));
        this.HmipblurPass = new __WEBPACK_IMPORTED_MODULE_3__PostProcess__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_2__ShaderProgram__["a" /* Shader */](__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAGMENT_SHADER, __webpack_require__(41)));
        // shader that maps 32-bit color to 8-bit color
        this.tonemapPass = new __WEBPACK_IMPORTED_MODULE_3__PostProcess__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_2__ShaderProgram__["a" /* Shader */](__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAGMENT_SHADER, __webpack_require__(42)));
        this.FXAAPass = new __WEBPACK_IMPORTED_MODULE_3__PostProcess__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_2__ShaderProgram__["a" /* Shader */](__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAGMENT_SHADER, __webpack_require__(43)));
        this.presentPass = new __WEBPACK_IMPORTED_MODULE_3__PostProcess__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_2__ShaderProgram__["a" /* Shader */](__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAGMENT_SHADER, __webpack_require__(44)));
        /*
    couldPass : PostProcess = new PostProcess(
          new Shader(gl.FRAGMENT_SHADER, require('../../shaders/clouds-frag.glsl'))
          );
  */
        // Vignette Effects
        this.frostPass = new __WEBPACK_IMPORTED_MODULE_3__PostProcess__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_2__ShaderProgram__["a" /* Shader */](__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAGMENT_SHADER, __webpack_require__(45)));
        this.rainyPass = new __WEBPACK_IMPORTED_MODULE_3__PostProcess__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_2__ShaderProgram__["a" /* Shader */](__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAGMENT_SHADER, __webpack_require__(46)));
        this.firePass = new __WEBPACK_IMPORTED_MODULE_3__PostProcess__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_2__ShaderProgram__["a" /* Shader */](__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAGMENT_SHADER, __webpack_require__(47)));
        this.currentTime = 0.0;
        this.gbTargets = [undefined, undefined, undefined];
        this.tTargets = [undefined, undefined];
        this.tDTargets = [undefined, undefined];
        this.post8Buffers = [undefined, undefined];
        this.post8Targets = [undefined, undefined];
        this.post8Passes = [];
        this.post32Buffers = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined, undefined, undefined, undefined];
        this.post32Targets = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined, undefined, undefined, undefined];
        this.post32Passes = [];
        if (!__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getExtension("OES_texture_float_linear")) {
            console.error("OES_texture_float_linear not available");
        }
        if (!__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getExtension("EXT_color_buffer_float")) {
            console.error("FLOAT color buffer not available");
        }
        var gb0loc = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.deferredShader.prog, "u_Gbuffer_Albedo");
        var gb1loc = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.deferredShader.prog, "u_Gbuffer_Specular");
        var gb2loc = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].getUniformLocation(this.deferredShader.prog, "u_Gbuffer_Normal");
        this.deferredShader.use();
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform1i(gb0loc, 0);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform1i(gb1loc, 1);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].uniform1i(gb2loc, 2);
    }
    add8BitPass(pass) {
        this.post8Passes.push(pass);
    }
    add32BitPass(pass) {
        this.post32Passes.push(pass);
    }
    setFrostNoiseTexture(tex) {
        this.frostNoiseTexture = tex;
    }
    setFireNoiseTexture(tex) {
        this.fireNoiseTexture = tex;
    }
    setClearColor(r, g, b, a) {
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clearColor(r, g, b, a);
    }
    setSize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        // --- GBUFFER CREATION START ---
        // refresh the gbuffers
        this.gBuffer = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].createFramebuffer();
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, this.gBuffer);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawBuffers([__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_ATTACHMENT0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_ATTACHMENT1, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_ATTACHMENT2]);
        for (let i = 0; i < this.gbTargets.length; i++) {
            this.gbTargets[i] = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].createTexture();
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, this.gbTargets[i]);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MAG_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].NEAREST);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MIN_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].NEAREST);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_WRAP_S, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].CLAMP_TO_EDGE);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_WRAP_T, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].CLAMP_TO_EDGE);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA32F, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, null);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].framebufferTexture2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_ATTACHMENT0 + i, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, this.gbTargets[i], 0);
        }
        // depth attachment
        this.depthTexture = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].createTexture();
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, this.depthTexture);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MAG_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].NEAREST);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MIN_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].NEAREST);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_WRAP_S, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].CLAMP_TO_EDGE);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_WRAP_T, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].CLAMP_TO_EDGE);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_COMPONENT32F, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_COMPONENT, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].framebufferTexture2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_ATTACHMENT, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, this.depthTexture, 0);
        var FBOstatus = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].checkFramebufferStatus(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER);
        if (FBOstatus != __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER_COMPLETE) {
            console.error("GL_FRAMEBUFFER_COMPLETE failed, CANNOT use FBO[0]\n");
        }
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
        // --- TBUFFER CREATION START ---
        // T
        this.tBuffer = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].createFramebuffer();
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, this.tBuffer);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawBuffers([__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_ATTACHMENT0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_ATTACHMENT1]);
        // -- 0
        this.tTargets[0] = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].createTexture();
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, this.tTargets[0]);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MAG_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].NEAREST);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MIN_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].NEAREST);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_WRAP_S, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].CLAMP_TO_EDGE);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_WRAP_T, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].CLAMP_TO_EDGE);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA32F, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].framebufferTexture2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_ATTACHMENT0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, this.tTargets[0], 0);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].framebufferTexture2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_ATTACHMENT, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, this.depthTexture, 0);
        // -- 1
        this.tTargets[1] = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].createTexture();
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, this.tTargets[1]);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MAG_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].NEAREST);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MIN_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].NEAREST);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_WRAP_S, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].CLAMP_TO_EDGE);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_WRAP_T, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].CLAMP_TO_EDGE);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA32F, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].framebufferTexture2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_ATTACHMENT1, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, this.tTargets[1], 0);
        var FBOstatus = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].checkFramebufferStatus(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER);
        if (FBOstatus != __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER_COMPLETE) {
            console.error("GL_FRAMEBUFFER_COMPLETE failed, CANNOT use FBO[0]\n");
        }
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
        // TD
        this.tDBuffer = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].createFramebuffer();
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, this.tDBuffer);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawBuffers([__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_ATTACHMENT0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_ATTACHMENT1]);
        // == 0
        this.tDTargets[0] = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].createTexture();
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, this.tDTargets[0]);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MAG_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].NEAREST);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MIN_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].NEAREST);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_WRAP_S, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].CLAMP_TO_EDGE);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_WRAP_T, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].CLAMP_TO_EDGE);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA32F, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].framebufferTexture2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_ATTACHMENT0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, this.tDTargets[0], 0);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].framebufferTexture2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_ATTACHMENT, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, this.depthTexture, 0);
        // -- 1
        this.tDTargets[1] = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].createTexture();
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, this.tDTargets[1]);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MAG_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].NEAREST);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MIN_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].NEAREST);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_WRAP_S, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].CLAMP_TO_EDGE);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_WRAP_T, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].CLAMP_TO_EDGE);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA32F, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].framebufferTexture2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_ATTACHMENT1, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, this.tDTargets[1], 0);
        var FBOstatus = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].checkFramebufferStatus(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER);
        if (FBOstatus != __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER_COMPLETE) {
            console.error("GL_FRAMEBUFFER_COMPLETE failed, CANNOT use FBO[0]\n");
        }
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
        // create the framebuffers for post processing
        for (let i = 0; i < this.post8Buffers.length; i++) {
            // 8 bit buffers have unsigned byte textures of type gl.RGBA8
            this.post8Buffers[i] = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].createFramebuffer();
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, this.post8Buffers[i]);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawBuffers([__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_ATTACHMENT0]);
            this.post8Targets[i] = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].createTexture();
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, this.post8Targets[i]);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MAG_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].NEAREST);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MIN_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].NEAREST);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_WRAP_S, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].CLAMP_TO_EDGE);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_WRAP_T, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].CLAMP_TO_EDGE);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA8, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].UNSIGNED_BYTE, null);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].framebufferTexture2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_ATTACHMENT0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, this.post8Targets[i], 0);
            FBOstatus = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].checkFramebufferStatus(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER);
            if (FBOstatus != __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER_COMPLETE) {
                console.error("GL_FRAMEBUFFER_COMPLETE failed, CANNOT use 8 bit FBO\n");
            }
        }
        for (let i = 0; i < this.post32Buffers.length; i++) {
            // 32 bit buffers have float textures of type gl.RGBA32F
            this.post32Buffers[i] = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].createFramebuffer();
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, this.post32Buffers[i]);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawBuffers([__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_ATTACHMENT0]);
            this.post32Targets[i] = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].createTexture();
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, this.post32Targets[i]);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_WRAP_S, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].CLAMP_TO_EDGE);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_WRAP_T, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].CLAMP_TO_EDGE);
            if (i == PipelineEnum.SSR) {
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MIN_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MAG_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].NEAREST);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA32F, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth * this.SSRDownSampling, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight * this.SSRDownSampling, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, null);
            }
            else if (i == PipelineEnum.SSR_MIP) {
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MIN_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].LINEAR_MIPMAP_LINEAR);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MAG_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA32F, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth * this.SSRDownSampling, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight * this.SSRDownSampling, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, null);
            }
            else if (i == PipelineEnum.ShadowPass) {
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MAG_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MIN_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA32F, gShadowMapSize, gShadowMapSize, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, null);
            }
            else if (i == PipelineEnum.HorizonBlur) {
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MAG_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MIN_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA32F, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth * this.BloomDownSampling, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight * this.BloomDownSampling, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, null);
            }
            else if (i == PipelineEnum.VerticalBlur) {
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MAG_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MIN_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA32F, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth * this.BloomDownSampling, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight * this.BloomDownSampling, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, null);
            }
            else if (i == PipelineEnum.SSR_HBLURRED_MIP_0 || i == PipelineEnum.SSR_VBLURRED_MIP_0) {
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MAG_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MIN_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA32F, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth * this.SSRDownSampling, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight * this.SSRDownSampling, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, null);
            }
            else if (i == PipelineEnum.SSR_HBLURRED_MIP_1 || i == PipelineEnum.SSR_VBLURRED_MIP_1) {
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MAG_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MIN_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA32F, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth * this.SSRDownSampling / 2, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight * this.SSRDownSampling / 2, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, null);
            }
            else if (i == PipelineEnum.SSR_HBLURRED_MIP_2 || i == PipelineEnum.SSR_VBLURRED_MIP_2) {
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MAG_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MIN_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA32F, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth * this.SSRDownSampling / 4, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight * this.SSRDownSampling / 4, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, null);
            }
            else if (i == PipelineEnum.SSR_HBLURRED_MIP_3 || i == PipelineEnum.SSR_VBLURRED_MIP_3) {
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MAG_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MIN_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA32F, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth * this.SSRDownSampling / 8, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight * this.SSRDownSampling / 8, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, null);
            }
            else if (i == PipelineEnum.SSR_HBLURRED_MIP_4 || i == PipelineEnum.SSR_VBLURRED_MIP_4) {
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MAG_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MIN_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA32F, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth * this.SSRDownSampling / 16, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight * this.SSRDownSampling / 16, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, null);
            }
            else if (i == PipelineEnum.SSR_HBLURRED_MIP_5 || i == PipelineEnum.SSR_VBLURRED_MIP_5) {
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MAG_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MIN_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA32F, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth * this.SSRDownSampling / 32, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight * this.SSRDownSampling / 32, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, null);
            }
            else if (i == PipelineEnum.LensFlare) {
                //gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
                //gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MAG_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MIN_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA32F, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth * this.LensDownSampling, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight * this.LensDownSampling, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, null);
            }
            else if (i == PipelineEnum.LensFlare_H || i == PipelineEnum.LensFlare_V) {
                //gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
                //gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MAG_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MIN_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA32F, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth * this.LensBlurDownSampling, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight * this.LensBlurDownSampling, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, null);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MAG_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].NEAREST);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MIN_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].NEAREST);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA32F, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RGBA, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, null);
            }
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, null);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].framebufferTexture2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_ATTACHMENT0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, this.post32Targets[i], 0);
            // depth attachment
            if (i == PipelineEnum.ShadowPass) {
                this.shadowDepthTexture = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].createTexture();
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, this.shadowDepthTexture);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].pixelStorei(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].UNPACK_FLIP_Y_WEBGL, false);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MAG_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_MIN_FILTER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_WRAP_S, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].CLAMP_TO_EDGE);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_WRAP_T, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].CLAMP_TO_EDGE);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_COMPONENT32F, gShadowMapSize, gShadowMapSize, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_COMPONENT, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FLOAT, null);
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].framebufferTexture2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_ATTACHMENT, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, this.shadowDepthTexture, 0);
            }
            else if (i == PipelineEnum.ParticleMesh) {
                __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].framebufferTexture2D(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_ATTACHMENT, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, this.depthTexture, 0);
            }
            FBOstatus = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].checkFramebufferStatus(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER);
            if (FBOstatus != __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER_COMPLETE) {
                console.error("GL_FRAMEBUFFER_COMPLETE failed, CANNOT use 8 bit FBO\n");
            }
        }
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, null);
    }
    updateTime(deltaTime, currentTime) {
        this.currentTime = currentTime;
        this.deltaTime = deltaTime;
    }
    clear() {
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_BUFFER_BIT | __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_BUFFER_BIT);
    }
    clearGB() {
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, this.gBuffer);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_BUFFER_BIT | __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_BUFFER_BIT);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
    }
    renderToGBuffer(camera, gbProg, leafProg, barkProg, drawables) {
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, this.gBuffer);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].viewport(0, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_TEST);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clearDepth(1.0);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_BUFFER_BIT | __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_BUFFER_BIT);
        //gl.enable(gl.CULL_FACE);
        //gl.cullFace(gl.BACK);
        let view = camera.viewMatrix;
        let proj = camera.projectionMatrix;
        let viewProj = camera.viewProjectionMatrix;
        let color = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec4 */].fromValues(0.5, 0.5, 0.5, 1);
        gbProg.setViewProjMatrix(viewProj);
        gbProg.setGeometryColor(color);
        gbProg.setViewMatrix(view);
        gbProg.setProjMatrix(proj);
        gbProg.setTime(this.currentTime);
        // Tree Render
        leafProg.setViewProjMatrix(viewProj);
        leafProg.setGeometryColor(color);
        leafProg.setViewMatrix(view);
        leafProg.setProjMatrix(proj);
        leafProg.setTime(this.currentTime);
        barkProg.setViewProjMatrix(viewProj);
        barkProg.setGeometryColor(color);
        barkProg.setViewMatrix(view);
        barkProg.setProjMatrix(proj);
        barkProg.setTime(this.currentTime);
        for (let drawable of drawables) {
            if (drawable.type == 0) {
                gbProg.setModelMatrix(drawable.modelMat);
                gbProg.bindTexToUnit("AlbedoMap", drawable.albedoMap, 0);
                gbProg.bindTexToUnit("SpecularMap", drawable.specularMap, 1);
                gbProg.bindTexToUnit("NormalMap", drawable.normalMap, 2);
                gbProg.draw(drawable);
            }
            else if (drawable.type == 1) {
                //Leaf
                leafProg.setModelMatrix(drawable.modelMat);
                leafProg.setCenter(drawable.center);
                leafProg.bindTexToUnit("AlbedoMap", drawable.albedoMap, 0);
                leafProg.bindTexToUnit("SpecularMap", drawable.specularMap, 1);
                leafProg.bindTexToUnit("NormalMap", drawable.normalMap, 2);
                leafProg.draw(drawable);
            }
            else if (drawable.type == 2) {
                //Bark
                barkProg.setModelMatrix(drawable.modelMat);
                barkProg.setCenter(drawable.center);
                barkProg.bindTexToUnit("AlbedoMap", drawable.albedoMap, 0);
                barkProg.bindTexToUnit("SpecularMap", drawable.specularMap, 1);
                barkProg.bindTexToUnit("NormalMap", drawable.normalMap, 2);
                barkProg.draw(drawable);
            }
        }
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].CULL_FACE);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, null);
    }
    renderToShadowDepth(camera, shadowProg, leafProg, barkProg, lightViewProjMat, drawables) {
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, this.post32Buffers[PipelineEnum.ShadowPass]);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clearDepth(1.0);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].CULL_FACE);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].cullFace(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].BACK);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_BUFFER_BIT | __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_BUFFER_BIT);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_TEST);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].viewport(0, 0, gShadowMapSize, gShadowMapSize);
        shadowProg.setViewProjMatrix(lightViewProjMat);
        /*
        shadowProg.setTime(this.currentTime);
    
        for (var i =0; i< drawables.length ; i++)
        {
          shadowProg.setModelMatrix(drawables[i].modelMat);
          shadowProg.setCenter(drawables[i].center);
          shadowProg.setAlbedoMap( drawables[i].albedoMap.texture );
          shadowProg.draw(drawables[i]);
        }
        */
        leafProg.setViewProjMatrix(lightViewProjMat);
        leafProg.setTime(this.currentTime);
        barkProg.setViewProjMatrix(lightViewProjMat);
        barkProg.setTime(this.currentTime);
        for (var i = 0; i < drawables.length; i++) {
            if (drawables[i].type == 0) {
                shadowProg.setModelMatrix(drawables[i].modelMat);
                shadowProg.setAlbedoMap(drawables[i].albedoMap.texture);
                shadowProg.draw(drawables[i]);
            }
            else if (drawables[i].type == 1) {
                //Leaf
                leafProg.setModelMatrix(drawables[i].modelMat);
                leafProg.setCenter(drawables[i].center);
                leafProg.setAlbedoMap(drawables[i].albedoMap.texture);
                leafProg.draw(drawables[i]);
            }
            else if (drawables[i].type == 2) {
                //Bark
                barkProg.setModelMatrix(drawables[i].modelMat);
                barkProg.setAlbedoMap(drawables[i].albedoMap.texture);
                barkProg.setCenter(drawables[i].center);
                barkProg.draw(drawables[i]);
            }
        }
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].CULL_FACE);
        // bind default frame buffer
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
    }
    renderToTranslucent(camera, tProg, drawables, skyCubeMap, lightViewProjMat, lightColor, lightDir) {
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, this.tBuffer);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].viewport(0, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].BLEND);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_TEST);
        this.setClearColor(0.0, 0.0, 0.0, 1.0);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_BUFFER_BIT);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].CULL_FACE);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].cullFace(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].BACK);
        let view = camera.viewMatrix;
        let proj = camera.projectionMatrix;
        let viewProj = camera.viewProjectionMatrix;
        let color = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec4 */].fromValues(0.5, 0.5, 0.5, 1);
        tProg.setLightColor(lightColor);
        tProg.setLightDirection(lightDir);
        tProg.setViewProjMatrix(viewProj);
        tProg.setGeometryColor(color);
        tProg.setViewMatrix(view);
        tProg.setProjMatrix(proj);
        tProg.setInvViewProjMatrix(camera.invViewProjectionMatrix);
        tProg.setCameraWPos(camera.position);
        tProg.setShadowMap(this.post32Targets[PipelineEnum.ShadowPass]);
        tProg.setLightViewProjMatrix(lightViewProjMat);
        tProg.setTime(this.currentTime);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_CUBE_MAP, null);
        tProg.setSkyCubeMap(skyCubeMap);
        for (let drawable of drawables) {
            tProg.setModelMatrix(drawable.modelMat);
            tProg.bindTexToUnit("AlbedoMap", drawable.albedoMap, 0);
            tProg.bindTexToUnit("SpecularMap", drawable.specularMap, 1);
            tProg.bindTexToUnit("NormalMap", drawable.normalMap, 2);
            tProg.draw(drawable);
        }
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].CULL_FACE);
    }
    renderFromGBuffer(camera, skyCubeMap, lightViewProjMat, lightColor, lightDir) {
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, this.post32Buffers[PipelineEnum.SceneImage]);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].viewport(0, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_TEST);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].BLEND);
        this.setClearColor(0.0, 0.0, 0.0, 1.0);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_BUFFER_BIT);
        let view = camera.viewMatrix;
        let proj = camera.projectionMatrix;
        this.deferredShader.setViewMatrix(view);
        this.deferredShader.setProjMatrix(proj);
        this.deferredShader.setInvViewProjMatrix(camera.invViewProjectionMatrix);
        this.deferredShader.setCameraWPos(camera.position);
        this.deferredShader.setLightColor(lightColor);
        this.deferredShader.setLightDirection(lightDir);
        this.deferredShader.setAlbedoMap(this.gbTargets[GbufferEnum.Albedo]);
        this.deferredShader.setSpecularMap(this.gbTargets[GbufferEnum.Specular]);
        this.deferredShader.setNormalMap(this.gbTargets[GbufferEnum.Normal]);
        this.deferredShader.setDepthMap(this.depthTexture);
        this.deferredShader.setTime(this.currentTime);
        this.deferredShader.setShadowMap(this.post32Targets[PipelineEnum.ShadowPass]);
        this.deferredShader.setLightViewProjMatrix(lightViewProjMat);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_CUBE_MAP, null);
        this.deferredShader.setSkyCubeMap(skyCubeMap);
        this.deferredShader.draw();
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, null);
        //gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);
    }
    renderAddTranslucent() {
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, this.tDBuffer);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_BUFFER_BIT);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].viewport(0, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight);
        this.translucentAddPass.setFrame00(this.post32Targets[PipelineEnum.SceneImage]);
        this.translucentAddPass.setFrame01(this.tTargets[0]);
        this.translucentAddPass.setFrame02(this.tTargets[1]);
        this.translucentAddPass.setAlbedoMap(this.gbTargets[GbufferEnum.Albedo]);
        this.translucentAddPass.setSpecularMap(this.gbTargets[GbufferEnum.Specular]);
        this.translucentAddPass.setNormalMap(this.gbTargets[GbufferEnum.Normal]);
        this.translucentAddPass.draw();
        // bind default frame buffer
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, null);
    }
    renderSSR(camera, skyCubeMap, SSR_MaxStep, SSR_Opaque_Intensity, SSR_Trans_Intensity, SSR_Threshold) {
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, this.post32Buffers[PipelineEnum.SSR]);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].viewport(0, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth * this.SSRDownSampling, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight * this.SSRDownSampling);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_TEST);
        //gl.enable(gl.BLEND);
        this.setClearColor(0.0, 0.0, 0.0, 0.0);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_BUFFER_BIT);
        this.SSRPass.setSSRInfo(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec4 */].fromValues(SSR_MaxStep, SSR_Opaque_Intensity, SSR_Trans_Intensity, SSR_Threshold));
        this.SSRPass.setFrame00(this.post32Targets[PipelineEnum.SaveFrame]); //previous frame
        this.SSRPass.setFrame01(this.tDTargets[0] /*this.post32Targets[PipelineEnum.SceneImage]*/); //current frame
        this.SSRPass.setdeltaTime(this.deltaTime);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_CUBE_MAP, null);
        this.SSRPass.setSkyCubeMap(skyCubeMap);
        //this.SSRPass.setDepthMap( this.tDTargets[0] /* this.gbTargets[GbufferEnum.Albedo] */);
        this.SSRPass.setViewMatrix(camera.viewMatrix);
        this.SSRPass.setViewProjMatrix(camera.viewProjectionMatrix);
        this.SSRPass.setInvViewProjMatrix(camera.invViewProjectionMatrix);
        this.SSRPass.setCameraWPos(camera.position);
        //this.SSRPass.setNormalMap(this.gbTargets[GbufferEnum.Normal]);
        this.SSRPass.setSpecularMap(this.tDTargets[1] /*this.gbTargets[GbufferEnum.Specular]*/);
        this.SSRPass.draw();
        // bind default frame buffer
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, null);
    }
    renderSSRMip() {
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, this.post32Buffers[PipelineEnum.SSR_MIP]);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].viewport(0, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth * this.SSRDownSampling, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight * this.SSRDownSampling);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_TEST);
        //gl.enable(gl.BLEND);
        this.setClearColor(0.0, 0.0, 0.0, 1.0);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_BUFFER_BIT);
        //y is flipped
        this.SSRMipPass.setFrame00(this.post32Targets[PipelineEnum.SSR]);
        this.SSRMipPass.draw();
        // bind default frame buffer
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, this.post32Targets[PipelineEnum.SSR_MIP]);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].generateMipmap(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, null);
    }
    renderParticle(camera, quad, particleSystem, feedbackShader, particleRenderShader, FireFly, Weather, bSwitch) {
        if (bSwitch) {
            //transformation Feedback
            feedbackShader.use();
            feedbackShader.setdeltaTime(this.deltaTime);
            feedbackShader.setTime(this.currentTime);
            feedbackShader.setCameraWPos(camera.position);
            feedbackShader.setParticleInfo(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec4 */].fromValues(Weather, FireFly ? 1.0 : 0.0, 0.0, 0.0));
            var destinationIdx = (particleSystem.currentBufferSetIndex + 1) == 2 ? 0 : 1;
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindVertexArray(particleSystem.getVAO(particleSystem.currentBufferSetIndex));
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTransformFeedback(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TRANSFORM_FEEDBACK, particleSystem.getTransformFeedbacks(destinationIdx));
            particleSystem.bindBufferBase(destinationIdx);
            // Turn off rasterization - we are not drawing
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RASTERIZER_DISCARD);
            // Update position and rotation using transform feedback
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].beginTransformFeedback(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].POINTS);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawArrays(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].POINTS, 0, particleSystem.count);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].endTransformFeedback();
            // Restore state
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RASTERIZER_DISCARD);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].useProgram(null);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, null);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTransformFeedback(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TRANSFORM_FEEDBACK, null);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindVertexArray(null);
            particleSystem.switchBufferSet();
            quad.setCopyVBOs(particleSystem.VBOs[particleSystem.currentBufferSetIndex][2], particleSystem.VBOs[particleSystem.currentBufferSetIndex][0]);
        }
        //render  
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, this.post32Buffers[PipelineEnum.Particle]);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].viewport(0, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight);
        //gl.enable(gl.DEPTH_TEST);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].BLEND);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].blendFunc(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ONE, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ONE);
        this.setClearColor(0.0, 0.0, 0.0, 0.0);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_BUFFER_BIT);
        if (bSwitch) {
            particleRenderShader.setViewMatrix(camera.viewMatrix);
            particleRenderShader.setViewProjMatrix(camera.viewProjectionMatrix);
            particleRenderShader.setInvViewProjMatrix(camera.invViewProjectionMatrix);
            particleRenderShader.setFrame00(this.tDTargets[0]);
            particleRenderShader.drawInstance(quad, particleSystem.count);
            particleRenderShader.setParticleInfo(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec4 */].fromValues(Weather, FireFly ? 1.0 : 0.0, 0.0, 0.0));
        }
        // bind default frame buffer
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].blendFunc(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ONE, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ZERO);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].BLEND);
    }
    renderLanternParticle(camera, mesh, particleSystem, feedbackShader, particleRenderShader, Lantern, bSwitch) {
        if (bSwitch) {
            //transformation Feedback
            feedbackShader.use();
            feedbackShader.setdeltaTime(this.deltaTime);
            feedbackShader.setTime(this.currentTime);
            feedbackShader.setCameraWPos(camera.position);
            feedbackShader.setParticleInfo(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec4 */].fromValues(0.0, 0.0, Lantern ? 1.0 : 0.0, 0.0));
            var destinationIdx = (particleSystem.currentBufferSetIndex + 1) == 2 ? 0 : 1;
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindVertexArray(particleSystem.getVAO(particleSystem.currentBufferSetIndex));
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTransformFeedback(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TRANSFORM_FEEDBACK, particleSystem.getTransformFeedbacks(destinationIdx));
            particleSystem.bindBufferBase(destinationIdx);
            // Turn off rasterization - we are not drawing
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RASTERIZER_DISCARD);
            // Update position and rotation using transform feedback
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].beginTransformFeedback(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].POINTS);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawArrays(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].POINTS, 0, particleSystem.count);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].endTransformFeedback();
            // Restore state
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RASTERIZER_DISCARD);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].useProgram(null);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, null);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTransformFeedback(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TRANSFORM_FEEDBACK, null);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindVertexArray(null);
            particleSystem.switchBufferSet();
            //render       
            mesh.setCopyVBOs(particleSystem.VBOs[particleSystem.currentBufferSetIndex][2], particleSystem.VBOs[particleSystem.currentBufferSetIndex][0]);
        }
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, this.post32Buffers[PipelineEnum.ParticleMesh]);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].viewport(0, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_TEST);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].CULL_FACE);
        //gl.enable(gl.BLEND);
        //gl.blendFunc(gl.ONE, gl.ZERO); 
        this.setClearColor(0.0, 0.0, 0.0, 0.0);
        //gl.clear(gl.COLOR_BUFFER_BIT);
        if (bSwitch) {
            particleRenderShader.setViewMatrix(camera.viewMatrix);
            particleRenderShader.setViewProjMatrix(camera.viewProjectionMatrix);
            particleRenderShader.setInvViewProjMatrix(camera.invViewProjectionMatrix);
            particleRenderShader.setFrame00(this.tDTargets[0]);
            particleRenderShader.setFrame01(mesh.albedoMap.texture);
            particleRenderShader.drawInstance(mesh, particleSystem.count);
        }
        // bind default frame buffer
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
        //gl.blendFunc(gl.ONE, gl.ZERO); 
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_TEST);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].CULL_FACE);
    }
    renderBoatParticle(camera, mesh, particleSystem, feedbackShader, particleRenderShader) {
        //transformation Feedback
        feedbackShader.use();
        feedbackShader.setdeltaTime(this.deltaTime);
        feedbackShader.setTime(this.currentTime);
        feedbackShader.setCameraWPos(camera.position);
        var destinationIdx = (particleSystem.currentBufferSetIndex + 1) == 2 ? 0 : 1;
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindVertexArray(particleSystem.getVAO(particleSystem.currentBufferSetIndex));
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTransformFeedback(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TRANSFORM_FEEDBACK, particleSystem.getTransformFeedbacks(destinationIdx));
        particleSystem.bindBufferBase(destinationIdx);
        // Turn off rasterization - we are not drawing
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RASTERIZER_DISCARD);
        // Update position and rotation using transform feedback
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].beginTransformFeedback(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].POINTS);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawArrays(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].POINTS, 0, particleSystem.count);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].endTransformFeedback();
        // Restore state
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RASTERIZER_DISCARD);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].useProgram(null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTransformFeedback(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TRANSFORM_FEEDBACK, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindVertexArray(null);
        particleSystem.switchBufferSet();
        //render       
        mesh.setCopyVBOs(particleSystem.VBOs[particleSystem.currentBufferSetIndex][2], particleSystem.VBOs[particleSystem.currentBufferSetIndex][0]);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, this.post32Buffers[PipelineEnum.ParticleMesh]);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].viewport(0, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_TEST);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].CULL_FACE);
        this.setClearColor(0.0, 0.0, 0.0, 0.0);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_BUFFER_BIT);
        particleRenderShader.setViewMatrix(camera.viewMatrix);
        particleRenderShader.setViewProjMatrix(camera.viewProjectionMatrix);
        particleRenderShader.setInvViewProjMatrix(camera.invViewProjectionMatrix);
        particleRenderShader.setFrame00(this.tDTargets[0]);
        particleRenderShader.setFrame01(mesh.albedoMap.texture);
        particleRenderShader.drawInstance(mesh, particleSystem.count);
        // bind default frame buffer
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_TEST);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].CULL_FACE);
    }
    renderLeavesParticle(camera, mesh, particleSystem, feedbackShader, particleRenderShader, Leaves, bSwitch) {
        if (bSwitch) {
            //transformation Feedback
            feedbackShader.use();
            feedbackShader.setdeltaTime(this.deltaTime);
            feedbackShader.setTime(this.currentTime);
            feedbackShader.setCameraWPos(camera.position);
            feedbackShader.setParticleInfo(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec4 */].fromValues(0.0, 0.0, Leaves ? 1.0 : 0.0, 0.0));
            var destinationIdx = (particleSystem.currentBufferSetIndex + 1) == 2 ? 0 : 1;
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindVertexArray(particleSystem.getVAO(particleSystem.currentBufferSetIndex));
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTransformFeedback(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TRANSFORM_FEEDBACK, particleSystem.getTransformFeedbacks(destinationIdx));
            particleSystem.bindBufferBase(destinationIdx);
            // Turn off rasterization - we are not drawing
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RASTERIZER_DISCARD);
            // Update position and rotation using transform feedback
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].beginTransformFeedback(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].POINTS);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawArrays(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].POINTS, 0, particleSystem.count);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].endTransformFeedback();
            // Restore state
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RASTERIZER_DISCARD);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].useProgram(null);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, null);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTransformFeedback(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TRANSFORM_FEEDBACK, null);
            __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindVertexArray(null);
            particleSystem.switchBufferSet();
            //render       
            mesh.setCopyVBOs(particleSystem.VBOs[particleSystem.currentBufferSetIndex][2], particleSystem.VBOs[particleSystem.currentBufferSetIndex][0]);
        }
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, this.post32Buffers[PipelineEnum.ParticleMesh]);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].viewport(0, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_TEST);
        //gl.enable(gl.BLEND);
        //gl.blendFunc(gl.ONE, gl.ZERO); 
        this.setClearColor(0.0, 0.0, 0.0, 0.0);
        //gl.clear(gl.COLOR_BUFFER_BIT);
        if (bSwitch) {
            particleRenderShader.setdeltaTime(this.deltaTime);
            particleRenderShader.setTime(this.currentTime);
            particleRenderShader.setViewMatrix(camera.viewMatrix);
            particleRenderShader.setViewProjMatrix(camera.viewProjectionMatrix);
            particleRenderShader.setInvViewProjMatrix(camera.invViewProjectionMatrix);
            particleRenderShader.setFrame00(this.tDTargets[0]);
            particleRenderShader.setFrame01(mesh.albedoMap.texture);
            particleRenderShader.drawInstance(mesh, particleSystem.count);
        }
        // bind default frame buffer
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
        //gl.blendFunc(gl.ONE, gl.ZERO); 
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_TEST);
    }
    renderClouds(camera, quad, particleSystem, lightColor, lightDir, cloudTex, normalTex, noiseTex, feedbackShader, particleRenderShader, clouds) {
        //transformation Feedback
        feedbackShader.use();
        feedbackShader.setdeltaTime(this.deltaTime);
        feedbackShader.setTime(this.currentTime);
        feedbackShader.setCameraWPos(camera.position);
        feedbackShader.setParticleInfo(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec4 */].fromValues(0.0, 0.0, 0.0, clouds ? 1.0 : 0.0));
        var destinationIdx = (particleSystem.currentBufferSetIndex + 1) == 2 ? 0 : 1;
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindVertexArray(particleSystem.getVAO(particleSystem.currentBufferSetIndex));
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTransformFeedback(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TRANSFORM_FEEDBACK, particleSystem.getTransformFeedbacks(destinationIdx));
        particleSystem.bindBufferBase(destinationIdx);
        // Turn off rasterization - we are not drawing
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RASTERIZER_DISCARD);
        // Update position and rotation using transform feedback
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].beginTransformFeedback(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].POINTS);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawArrays(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].POINTS, 0, particleSystem.count);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].endTransformFeedback();
        // Restore state
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].RASTERIZER_DISCARD);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].useProgram(null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ARRAY_BUFFER, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTransformFeedback(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TRANSFORM_FEEDBACK, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindVertexArray(null);
        particleSystem.switchBufferSet();
        //render       
        quad.setCopyVBOs(particleSystem.VBOs[particleSystem.currentBufferSetIndex][2], particleSystem.VBOs[particleSystem.currentBufferSetIndex][0]);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, this.post32Buffers[PipelineEnum.Clouds]);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].viewport(0, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight);
        //gl.enable(gl.DEPTH_TEST);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].enable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].BLEND);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].blendFunc(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ONE, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ONE);
        this.setClearColor(0.0, 0.0, 0.0, 0.0);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_BUFFER_BIT);
        if (clouds) {
            particleRenderShader.setViewMatrix(camera.viewMatrix);
            particleRenderShader.setProjMatrix(camera.cloudProjectionMatrix);
            particleRenderShader.setViewProjMatrix(camera.viewProjectionMatrix);
            particleRenderShader.setInvViewProjMatrix(camera.invViewProjectionMatrix);
            particleRenderShader.setFrame00(this.tDTargets[0]);
            particleRenderShader.setFrame01(cloudTex);
            particleRenderShader.setFrame02(normalTex);
            particleRenderShader.setFrame03(noiseTex);
            particleRenderShader.setLightDirection(lightDir);
            particleRenderShader.setCameraWPos(camera.position);
            particleRenderShader.setTime(this.currentTime * 0.6);
            particleRenderShader.drawInstance(quad, particleSystem.count);
        }
        // bind default frame buffer
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].blendFunc(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ONE, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].ZERO);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].BLEND);
    }
    renderforSavingCurrentFrame(camera) {
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, this.post32Buffers[PipelineEnum.SaveFrame]);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].viewport(0, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_TEST);
        this.setClearColor(0.0, 0.0, 0.0, 1.0);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_BUFFER_BIT);
        this.savePass.setAlbedoMap(this.gbTargets[GbufferEnum.Albedo]);
        this.savePass.setSpecularMap(this.tDTargets[1]);
        this.savePass.setFrame00(this.tDTargets[0]);
        this.savePass.setFrame01(this.post32Targets[PipelineEnum.SSR]);
        //this.savePass.setFrame02(this.post32Targets[PipelineEnum.SSR_MIP]);
        this.savePass.setFrame03(this.post32Targets[PipelineEnum.Particle]);
        this.savePass.setFrame04(this.post32Targets[PipelineEnum.ParticleMesh]);
        this.savePass.setDepthMap(this.post32Targets[PipelineEnum.Clouds]);
        this.savePass.setFrame05(this.post32Targets[PipelineEnum.SSR_VBLURRED_MIP_0]);
        this.savePass.setFrame06(this.post32Targets[PipelineEnum.SSR_VBLURRED_MIP_1]);
        this.savePass.setFrame07(this.post32Targets[PipelineEnum.SSR_VBLURRED_MIP_2]);
        this.savePass.setFrame08(this.post32Targets[PipelineEnum.SSR_VBLURRED_MIP_3]);
        this.savePass.setFrame09(this.post32Targets[PipelineEnum.SSR_VBLURRED_MIP_4]);
        this.savePass.draw();
        // bind default frame buffer
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, null);
    }
    renderforHighLightCurrentFrame(camera) {
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, this.post32Buffers[PipelineEnum.ExtractHighLight]);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].viewport(0, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_TEST);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_BUFFER_BIT);
        this.highLightPass.setFrame00(this.post32Targets[PipelineEnum.SaveFrame]);
        this.highLightPass.draw();
        // bind default frame buffer
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, null);
    }
    renderforHighLightLensFlare(camera) {
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, this.post32Buffers[PipelineEnum.ExtractHighLightforLensFlare]);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].viewport(0, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_TEST);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_BUFFER_BIT);
        this.highLightPass.setFrame00(this.post32Targets[PipelineEnum.SceneImage]);
        this.highLightPass.draw();
        // bind default frame buffer
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, null);
    }
    renderforHorizontalBlur(camera, index) {
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, this.post32Buffers[PipelineEnum.HorizonBlur]);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].viewport(0, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth * this.BloomDownSampling, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight * this.BloomDownSampling);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_TEST);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_BUFFER_BIT);
        this.HblurPass.setScreenSize(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec2 */].fromValues(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth * this.BloomDownSampling, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight * this.BloomDownSampling));
        this.HblurPass.setBlurScale(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec2 */].fromValues(1.0, 1.0));
        if (index == 0)
            this.HblurPass.setFrame00(this.post32Targets[PipelineEnum.ExtractHighLight]);
        else
            this.HblurPass.setFrame00(this.post32Targets[PipelineEnum.VerticalBlur]);
        this.HblurPass.draw();
        // bind default frame buffer
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, null);
    }
    renderforVerticalBlur(camera) {
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, this.post32Buffers[PipelineEnum.VerticalBlur]);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].viewport(0, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth * this.BloomDownSampling, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight * this.BloomDownSampling);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_TEST);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_BUFFER_BIT);
        this.VblurPass.setScreenSize(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec2 */].fromValues(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth * this.BloomDownSampling, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight * this.BloomDownSampling));
        this.VblurPass.setBlurScale(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec2 */].fromValues(1.0, 1.0));
        this.VblurPass.setFrame00(this.post32Targets[PipelineEnum.HorizonBlur]);
        this.VblurPass.draw();
        // bind default frame buffer
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, null);
    }
    renderforHorizontalMipBlur(camera, LOD) {
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, this.post32Buffers[PipelineEnum.SSR_HBLURRED_MIP_0 + 2 * LOD]);
        var denom = Math.pow(2.0, LOD);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].viewport(0, 0, (__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth * this.SSRDownSampling) / denom, (__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight * this.SSRDownSampling) / denom);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_TEST);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_BUFFER_BIT);
        this.HmipblurPass.setScreenSize(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec2 */].fromValues((__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth * this.SSRDownSampling) / denom, (__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight * this.SSRDownSampling) / denom));
        this.HmipblurPass.setBlurScale(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec2 */].fromValues(1.0, 1.0));
        this.HmipblurPass.setFrame00(this.post32Targets[PipelineEnum.SSR_MIP]);
        this.HmipblurPass.setmipLod(LOD);
        this.HmipblurPass.draw();
        // bind default frame buffer
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, null);
    }
    renderforVerticaMipBlur(camera, LOD) {
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, this.post32Buffers[PipelineEnum.SSR_VBLURRED_MIP_0 + 2 * LOD]);
        var denom = Math.pow(2.0, LOD);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].viewport(0, 0, (__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth * this.SSRDownSampling) / denom, (__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight * this.SSRDownSampling) / denom);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_TEST);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_BUFFER_BIT);
        this.VmipblurPass.setScreenSize(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec2 */].fromValues((__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth * this.SSRDownSampling) / denom, (__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight * this.SSRDownSampling) / denom));
        this.VmipblurPass.setBlurScale(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec2 */].fromValues(1.0, 1.0));
        this.VmipblurPass.setFrame00(this.post32Targets[PipelineEnum.SSR_HBLURRED_MIP_0 + 2 * LOD]);
        this.VmipblurPass.setmipLod(LOD);
        this.VmipblurPass.draw();
        // bind default frame buffer
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, null);
    }
    renderforLensFlare(camera, dispersal, distortion) {
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, this.post32Buffers[PipelineEnum.LensFlare]);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].viewport(0, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth * this.LensDownSampling, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight * this.LensDownSampling);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_TEST);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_BUFFER_BIT);
        this.lensFlarePass.setFrame00(this.post32Targets[PipelineEnum.ExtractHighLightforLensFlare]);
        this.lensFlarePass.setScreenSize(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec2 */].fromValues(1.0 / (__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth * this.LensDownSampling), 1.0 / (__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight * this.LensDownSampling)));
        this.lensFlarePass.setChromaticInfo(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec4 */].fromValues(dispersal, distortion, 0.0, 0.0));
        this.lensFlarePass.draw();
        // bind default frame buffer
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, null);
    }
    renderforLensflareHorizontalBlur(camera, index) {
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, this.post32Buffers[PipelineEnum.LensFlare_H]);
        var Width = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth * this.LensBlurDownSampling;
        var Hieght = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight * this.LensBlurDownSampling;
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].viewport(0, 0, Width, Hieght);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_TEST);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_BUFFER_BIT);
        this.HmipblurPass.setScreenSize(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec2 */].fromValues(Width, Hieght));
        this.HmipblurPass.setBlurScale(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec2 */].fromValues(1.0, 1.0));
        if (index == 0)
            this.HmipblurPass.setFrame00(this.post32Targets[PipelineEnum.LensFlare]);
        else
            this.HmipblurPass.setFrame00(this.post32Targets[PipelineEnum.LensFlare_V]);
        this.HmipblurPass.setmipLod(0);
        this.HmipblurPass.draw();
        // bind default frame buffer
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, null);
    }
    renderforLensflareVerticalBlur(camera) {
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, this.post32Buffers[PipelineEnum.LensFlare_V]);
        var Width = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth * this.LensBlurDownSampling;
        var Hieght = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight * this.LensBlurDownSampling;
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].viewport(0, 0, Width, Hieght);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_TEST);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_BUFFER_BIT);
        this.VmipblurPass.setScreenSize(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec2 */].fromValues(Width, Hieght));
        this.VmipblurPass.setBlurScale(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec2 */].fromValues(1.0, 1.0));
        this.VmipblurPass.setFrame00(this.post32Targets[PipelineEnum.LensFlare_H]);
        this.VmipblurPass.setmipLod(0);
        this.VmipblurPass.draw();
        // bind default frame buffer
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, null);
    }
    renderTonemapping(camera, dispersal, distortion, colorTemp) {
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, this.post8Buffers[PipelineEnum.ToneMapping]);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].viewport(0, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_TEST);
        //gl.enable(gl.BLEND);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_BUFFER_BIT);
        this.tonemapPass.setFrame00(this.post32Targets[PipelineEnum.SaveFrame]);
        this.tonemapPass.setFrame01(this.post32Targets[PipelineEnum.VerticalBlur]);
        this.tonemapPass.setFrame02(this.post32Targets[PipelineEnum.LensFlare_V]);
        this.tonemapPass.setScreenSize(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec2 */].fromValues(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth * this.BloomDownSampling, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight * this.BloomDownSampling));
        this.tonemapPass.setChromaticInfo(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec4 */].fromValues(dispersal, distortion, 0.0, colorTemp));
        this.tonemapPass.draw();
        // bind default frame buffer
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, null);
    }
    renderFXAA(camera) {
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, this.post8Buffers[PipelineEnum.FXAA]);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].viewport(0, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_TEST);
        //gl.enable(gl.BLEND);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_BUFFER_BIT);
        this.FXAAPass.setScreenSize(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec2 */].fromValues(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth * this.BloomDownSampling, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight * this.BloomDownSampling));
        this.FXAAPass.setFrame00(this.post8Targets[PipelineEnum.ToneMapping]);
        this.FXAAPass.draw();
        // bind default frame buffer
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].TEXTURE_2D, null);
    }
    renderFrost(lifeTime) {
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].viewport(0, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_TEST);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_BUFFER_BIT);
        this.frostPass.setFrame00(this.post8Targets[PipelineEnum.ToneMapping]);
        this.frostPass.setFrame01(this.frostNoiseTexture);
        this.frostPass.setScreenSize(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec2 */].fromValues(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight));
        this.frostPass.setTime(this.currentTime);
        this.frostPass.setdeltaTime(lifeTime);
        this.frostPass.draw();
        // bind default frame buffer
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
    }
    renderRainy(lifeTime) {
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].viewport(0, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_TEST);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_BUFFER_BIT);
        this.rainyPass.setFrame00(this.post8Targets[PipelineEnum.ToneMapping]);
        this.rainyPass.setScreenSize(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec2 */].fromValues(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight));
        this.rainyPass.setTime(this.currentTime);
        this.rainyPass.setdeltaTime(lifeTime);
        this.rainyPass.draw();
        // bind default frame buffer
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
    }
    renderFire(lifeTime) {
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].viewport(0, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_TEST);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_BUFFER_BIT);
        this.firePass.setFrame00(this.post8Targets[PipelineEnum.ToneMapping]);
        this.firePass.setFrame01(this.frostNoiseTexture);
        this.firePass.setScreenSize(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec2 */].fromValues(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight));
        this.firePass.setTime(this.currentTime);
        this.firePass.setdeltaTime(lifeTime);
        this.firePass.draw();
        // bind default frame buffer
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
    }
    renderPresent(camera) {
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].viewport(0, 0, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferWidth, __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].drawingBufferHeight);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].disable(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].DEPTH_TEST);
        //gl.enable(gl.BLEND);
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].clear(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].COLOR_BUFFER_BIT);
        this.presentPass.setFrame00(this.post8Targets[PipelineEnum.ToneMapping]);
        //this.presentPass.setFrame00(  this.post32Targets[PipelineEnum.LensFlare]);
        //this.presentPass.setFrame01( this.post32Targets[PipelineEnum.SceneImage] );
        this.presentPass.draw();
        // bind default frame buffer
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].bindFramebuffer(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* gl */].FRAMEBUFFER, null);
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (OpenGLRenderer);


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__globals__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ShaderProgram__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__geometry_Square__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_gl_matrix__ = __webpack_require__(0);




class PostProcess extends __WEBPACK_IMPORTED_MODULE_1__ShaderProgram__["b" /* default */] {
    constructor(fragProg, tag = "default") {
        super([new __WEBPACK_IMPORTED_MODULE_1__ShaderProgram__["a" /* Shader */](__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].VERTEX_SHADER, __webpack_require__(30)),
            fragProg]);
        this.use();
        this.name = tag;
        if (PostProcess.screenQuad === undefined) {
            PostProcess.screenQuad = new __WEBPACK_IMPORTED_MODULE_2__geometry_Square__["a" /* default */](__WEBPACK_IMPORTED_MODULE_3_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0));
            PostProcess.screenQuad.create();
        }
    }
    draw() {
        super.draw(PostProcess.screenQuad);
    }
    getName() { return this.name; }
}
PostProcess.screenQuad = undefined; // Quadrangle onto which we draw the frame texture of the last render pass
/* harmony default export */ __webpack_exports__["a"] = (PostProcess);


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\n\n// A vertex shader used by all post-process shaders to simply pass UV data\n// to the fragment shader, and to position the vertices of the screen-space quad \n\nprecision highp float;\n\nin vec4 vs_Pos;\nin vec4 vs_Nor;\nin vec4 vs_Col;\nin vec2 vs_UV;\n\nout vec2 fs_UV;\n\nvoid main() {\n\tfs_UV = vs_UV;\n\tgl_Position = vs_Pos;\n}\n"

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n#define EPS 0.0001\r\n#define PI 3.141592\r\n\r\n#define SHADOWMAP_SIZE 1024.0\r\n\r\nin vec2 fs_UV;\r\nout vec4 out_Col;\r\n\r\nuniform sampler2D u_Gbuffer_Albedo;\r\nuniform sampler2D u_Gbuffer_Specular;\r\nuniform sampler2D u_Gbuffer_Normal;\r\nuniform sampler2D u_DepthMap;\r\nuniform samplerCube u_SkyCubeMap;\r\nuniform sampler2D u_ShadowMap;\r\n\r\nuniform float u_Time;\r\n\r\nuniform mat4 u_View;\r\nuniform vec3 u_CameraWPos; \r\nuniform mat4 u_ViewProj;\r\nuniform mat4 u_InvViewProj;  \r\nuniform mat4 u_LightViewProj;\r\n\r\nuniform vec4 u_lightColor;\r\nuniform vec4 u_lightDirection;\r\n\r\n\r\nvec2 LightingFunGGX_FV(float dotLH, float roughness)\r\n{\r\n\tfloat alpha = roughness*roughness;\r\n\r\n\t//F\r\n\tfloat F_a, F_b;\r\n\tfloat dotLH5 = pow(clamp(1.0f - dotLH, 0.0f, 1.0f), 5.0f);\r\n\tF_a = 1.0f;\r\n\tF_b = dotLH5;\r\n\r\n\t//V\r\n\tfloat vis;\r\n\tfloat k = alpha * 0.5f;\r\n\tfloat k2 = k*k;\r\n\tfloat invK2 = 1.0f - k2;\r\n\tvis = 1.0f/(dotLH*dotLH*invK2 + k2);\r\n\r\n\treturn vec2((F_a - F_b)*vis, F_b*vis);\r\n}\r\n\r\nfloat LightingFuncGGX_D(float dotNH, float roughness)\r\n{\r\n\tfloat alpha = roughness*roughness;\r\n\tfloat alphaSqr = alpha*alpha;\r\n\tfloat denom = dotNH * dotNH * (alphaSqr - 1.0f) + 1.0f;\r\n\r\n\treturn alphaSqr / (PI*denom*denom);\r\n}\r\n\r\nvec3 GGX_Spec(vec3 Normal, vec3 HalfVec, float Roughness, vec3 BaseColor, vec3 SpecularColor, vec2 paraFV)\r\n{\r\n\tfloat NoH = clamp(dot(Normal, HalfVec), 0.0, 1.0);\r\n\r\n\tfloat D = LightingFuncGGX_D(NoH * NoH * NoH * NoH, Roughness);\r\n\tvec2 FV_helper = paraFV;\r\n\r\n\tvec3 F0 = SpecularColor;\r\n\tvec3 FV = F0*FV_helper.x + vec3(FV_helper.y, FV_helper.y, FV_helper.y);\r\n\t\r\n\treturn D * FV;\r\n}\r\n\r\nfloat texture2DCompare(sampler2D depths, vec2 uv, vec2 offset, float compare){\r\n    float depth = texture(depths, uv+offset).r;\r\n    float bias = 0.0025;\r\n    //vec2 gradient = vec2(texture(depths, uv).g, texture(depths, uv).b);\r\n    compare = compare - bias;\r\n    if(depth < compare)\r\n    \treturn 0.1;\r\n    else\r\n    \treturn 1.0;\r\n}\r\n\r\n// poisson disk for sampling\r\nconst vec2 poissonDisk[64] = vec2[](\r\n\tvec2( -0.04117257f, -0.1597612f ),\r\n\tvec2( 0.06731031f, -0.4353096f ),\r\n\tvec2( -0.206701f, -0.4089882f ),\r\n\tvec2( 0.1857469f, -0.2327659f ),\r\n\tvec2( -0.2757695f, -0.159873f ),\r\n\tvec2( -0.2301117f, 0.1232693f ),\r\n\tvec2( 0.05028719f, 0.1034883f ),\r\n\tvec2( 0.236303f, 0.03379251f ),\r\n\tvec2( 0.1467563f, 0.364028f ),\r\n\tvec2( 0.516759f, 0.2052845f ),\r\n\tvec2( 0.2962668f, 0.2430771f ),\r\n\tvec2( 0.3650614f, -0.1689287f ),\r\n\tvec2( 0.5764466f, -0.07092822f ),\r\n\tvec2( -0.5563748f, -0.4662297f ),\r\n\tvec2( -0.3765517f, -0.5552908f ),\r\n\tvec2( -0.4642121f, -0.157941f ),\r\n\tvec2( -0.2322291f, -0.7013807f ),\r\n\tvec2( -0.05415121f, -0.6379291f ),\r\n\tvec2( -0.7140947f, -0.6341782f ),\r\n\tvec2( -0.4819134f, -0.7250231f ),\r\n\tvec2( -0.7627537f, -0.3445934f ),\r\n\tvec2( -0.7032605f, -0.13733f ),\r\n\tvec2( 0.8593938f, 0.3171682f ),\r\n\tvec2( 0.5223953f, 0.5575764f ),\r\n\tvec2( 0.7710021f, 0.1543127f ),\r\n\tvec2( 0.6919019f, 0.4536686f ),\r\n\tvec2( 0.3192437f, 0.4512939f ),\r\n\tvec2( 0.1861187f, 0.595188f ),\r\n\tvec2( 0.6516209f, -0.3997115f ),\r\n\tvec2( 0.8065675f, -0.1330092f ),\r\n\tvec2( 0.3163648f, 0.7357415f ),\r\n\tvec2( 0.5485036f, 0.8288581f ),\r\n\tvec2( -0.2023022f, -0.9551743f ),\r\n\tvec2( 0.165668f, -0.6428169f ),\r\n\tvec2( 0.2866438f, -0.5012833f ),\r\n\tvec2( -0.5582264f, 0.2904861f ),\r\n\tvec2( -0.2522391f, 0.401359f ),\r\n\tvec2( -0.428396f, 0.1072979f ),\r\n\tvec2( -0.06261792f, 0.3012581f ),\r\n\tvec2( 0.08908027f, -0.8632499f ),\r\n\tvec2( 0.9636437f, 0.05915006f ),\r\n\tvec2( 0.8639213f, -0.309005f ),\r\n\tvec2( -0.03422072f, 0.6843638f ),\r\n\tvec2( -0.3734946f, -0.8823979f ),\r\n\tvec2( -0.3939881f, 0.6955767f ),\r\n\tvec2( -0.4499089f, 0.4563405f ),\r\n\tvec2( 0.07500362f, 0.9114207f ),\r\n\tvec2( -0.9658601f, -0.1423837f ),\r\n\tvec2( -0.7199838f, 0.4981934f ),\r\n\tvec2( -0.8982374f, 0.2422346f ),\r\n\tvec2( -0.8048639f, 0.01885651f ),\r\n\tvec2( -0.8975322f, 0.4377489f ),\r\n\tvec2( -0.7135055f, 0.1895568f ),\r\n\tvec2( 0.4507209f, -0.3764598f ),\r\n\tvec2( -0.395958f, -0.3309633f ),\r\n\tvec2( -0.6084799f, 0.02532744f ),\r\n\tvec2( -0.2037191f, 0.5817568f ),\r\n\tvec2( 0.4493394f, -0.6441184f ),\r\n\tvec2( 0.3147424f, -0.7852007f ),\r\n\tvec2( -0.5738106f, 0.6372389f ),\r\n\tvec2( 0.5161195f, -0.8321754f ),\r\n\tvec2( 0.6553722f, -0.6201068f ),\r\n\tvec2( -0.2554315f, 0.8326268f ),\r\n\tvec2( -0.5080366f, 0.8539945f )\r\n);\r\n\r\nfloat rand(vec4 co){\r\n\tfloat dot_product = dot(co, vec4(12.9898,78.233,45.164,94.673));\r\n\treturn fract(sin(dot_product) * 43758.5453);\r\n}\r\n\r\n// // parallel plane estimation\r\n// float penumbraSize(float zReceiver, float zBlocker) {\r\n// \treturn (zReceiver - zBlocker) / zBlocker;\r\n// }\r\n\r\n// #define BLOCKER_SEARCH_NUM_SAMPLES 16\r\n\r\n// vec2 findBlocker(vec2 uv, float zReceiver) {\r\n// \tfloat searchWidth = 0.002;\r\n// \tfloat blockerSum = 0.0;\r\n// \tfloat numBlockers = 0.0;\r\n\t\r\n// \tfloat theta = rand(vec4(uv, gl_FragCoord.xy));\r\n// \tmat2 rotation = mat2(vec2(cos(theta), sin(theta)), vec2(-sin(theta), cos(theta)));\r\n// \tfor (int i = 0; i < BLOCKER_SEARCH_NUM_SAMPLES; i++) {\r\n// \t\tvec2 coord = uv + rotation*poissonDisk[i] * searchWidth;\r\n// \t\tfloat smap = texture(u_ShadowMap, coord).r;\r\n// \t\tif (smap < zReceiver) {\r\n// \t\t\tblockerSum += smap;\r\n// \t\t\tnumBlockers++;\r\n// \t\t}\r\n// \t}\r\n// \treturn vec2(blockerSum / numBlockers, numBlockers);\r\n// }\r\n\r\n#define PCF_NUM_SAMPLES 36\r\n\r\nfloat PCF(sampler2D depths, float filterRadius, vec2 uv, float compare){\r\n    float result = 0.0;\r\n    float theta = rand(vec4(uv, gl_FragCoord.xy));\r\n\tmat2 rotation = mat2(vec2(cos(theta), sin(theta)), vec2(-sin(theta), cos(theta)));\r\n\tfor (int i = 0; i < PCF_NUM_SAMPLES; i++) {\r\n\t\tvec2 offset = (rotation*poissonDisk[i]) * filterRadius;\r\n\t\tresult += texture2DCompare(depths, uv, offset, compare);\r\n\t\t//float gauss = gaussian(filterRadius, length(offset));\r\n\t}\r\n\treturn result / float(PCF_NUM_SAMPLES);\r\n}\r\n\r\nfloat getShadow(vec4 lightSpacePos){\r\n\t// blocker search\r\n\t// vec2 blockers = findBlocker(vec2((lightSpacePos.x + 1.0) * 0.5, ( lightSpacePos.y + 1.0) * 0.5 ),\r\n\t// \tlightSpacePos.z - bias); // x has the average depth, y has the total number of blockers\r\n\t// if (blockers.y < 1.0) {\r\n\t// \t// no blockers so no shadowing\r\n\t// \treturn 1.0f;\r\n\t// }\r\n\t\r\n\t// float penumbraRatio = penumbraSize(lightSpacePos.z-bias, blockers.x);\r\n\t// float filterRadius = penumbraRatio * 1.0/SHADOWMAP_SIZE*4.0;\r\n\r\n\tfloat shadow = PCF(u_ShadowMap, \r\n\t\t1.0/SHADOWMAP_SIZE*4.0, \r\n\t\tvec2((lightSpacePos.x + 1.0) * 0.5, ( lightSpacePos.y + 1.0) * 0.5 ),\r\n\t\tlightSpacePos.z);\r\n\t\r\n\treturn shadow;\r\n}\r\n\r\nfloat LinearDepth(float d, float f)\r\n{\r\n\tfloat n = 0.1;\r\n\treturn (2.0 * n) / (f + n - d * (f - n));\r\n}\r\n\r\nvoid main() { \r\n\r\n\t// read from GBuffers\r\n\tvec4 albedo = texture(u_Gbuffer_Albedo, fs_UV);\r\n\tvec4 specular = texture(u_Gbuffer_Specular, fs_UV);\r\n\tvec4 normal = texture(u_Gbuffer_Normal, fs_UV);\t\r\n\r\n\tfloat Roughness = specular.w;\r\n\tRoughness = clamp(Roughness, 0.05, 0.95);\r\n\r\n\t\r\n\tfloat depth = albedo.w;\r\n\r\n\tvec2 ndc = vec2(fs_UV.x * 2.0 - 1.0, fs_UV.y*2.0 - 1.0);\r\n\tvec4 worldPos =  u_InvViewProj* vec4(ndc, depth, 1.0);\r\n\tworldPos /= worldPos.w;\r\n\r\n\tvec3 viewVec = normalize(u_CameraWPos - worldPos.xyz);\r\n\tvec3 lightDir = normalize(u_lightDirection.xyz);\r\n\r\n\tvec3 halfVec = viewVec + lightDir;\r\n\r\n\r\n\tvec4 skycol = texture(u_SkyCubeMap, normalize( -viewVec  + vec3(0.0, u_CameraWPos.y, 0.0)*0.001 ) );\r\n    skycol = pow(skycol, vec4(2.2));\r\n\tskycol *= 0.3;\r\n\r\n\tif(depth >= 1.0) //SkyBox\r\n\t{\t\t\t\r\n\t\t //inverse gamma correct\r\n\t\t//vec3 reflVec = -viewVec;//reflect(-viewVec, normal.xyz);\r\n\t\t\r\n\t\tout_Col = skycol;\r\n\t\tout_Col.w = 1.0;\r\n\t}\r\n\telse\r\n\t{\t\t\r\n\t\t\tvec4 lightSpacePos = u_LightViewProj * worldPos;\r\n\t\t\tlightSpacePos /= lightSpacePos.w;\r\n\r\n\t\t\tfloat shadow = getShadow(lightSpacePos);\r\n\r\n\t\t\tvec4 diffuseColor = vec4(albedo.xyz, 1.0);\r\n\r\n\t\t\tfloat diffuseTerm = clamp( dot(lightDir, normal.xyz), 0.0, 1.0);\r\n\t\t\t\r\n\t\t\thalfVec = normalize(halfVec);\r\n\t\t\t\r\n\t\t\tfloat LoH = clamp(dot( lightDir, halfVec ), 0.0, 1.0);\r\n\r\n\t\t\tvec3 specularTerm = vec3(0.0);\r\n\t\t\tvec3 SpecularColor = specular.xyz;\r\n\t\t\t\r\n\t\t\tfloat energyConservation = 1.0 - Roughness * Roughness;\r\n\r\n\t\t\tspecularTerm = GGX_Spec(normal.xyz, halfVec, Roughness, diffuseColor.xyz, SpecularColor, LightingFunGGX_FV(LoH, Roughness)) *energyConservation;\r\n\t\t\tspecularTerm = clamp(specularTerm, 0.0, 4.0);\r\n\r\n\t\t\tfloat ambientTerm = 0.1;\r\n\r\n\t\t\tvec4 pbrColor =  vec4( (diffuseColor.rgb + SpecularColor * specularTerm) * (diffuseTerm) * smoothstep( 0.1, 0.5, shadow), diffuseColor.a);\r\n\t\t\tpbrColor.xyz += diffuseColor.rgb * ambientTerm * (smoothstep( 0.0, 0.5, diffuseTerm) + 0.5);\r\n\t\t\tpbrColor.xyz *= u_lightColor.xyz * u_lightColor.a;\r\n\r\n\t\t\tout_Col = vec4(pbrColor.xyz, depth);\r\n\r\n\t\t\t//Emissive\r\n\t\t\tif(normal.a > 0.8)\r\n\t\t\t{\r\n\t\t\t\tout_Col.xyz += albedo.xyz * 3.0 * (diffuseTerm * 0.3 + 0.7);\r\n\t\t\t}\r\n\r\n\t\t\tvec3 fogColor = skycol.xyz;\r\n\r\n\t\t\tfloat linearDepth = LinearDepth(depth, 200.0);\r\n\r\n\t\t\t\t\r\n\t\t\tout_Col.xyz = mix(out_Col.xyz, fogColor, pow(linearDepth, 2.0) );\r\n\r\n\t\t\t//out_Col.xyz = mix(vec3(0.0), out_Col.xyz, clamp( pow( clamp(worldPos.y, 0.0, 1.0), 10.0), 0.0, 1.0));\r\n\t\t\r\n\r\n\t\t\r\n\t}\r\n\r\n\t\r\n}"

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\nprecision highp float;\n\nin vec2 fs_UV;\nout vec4 fragColor[2];\n\nuniform sampler2D u_frame0; //Scene\nuniform sampler2D u_frame1; //Trans\nuniform sampler2D u_frame2; //Trans-2\nuniform float u_Time;\n\nuniform sampler2D u_Gbuffer_Albedo;\nuniform sampler2D u_Gbuffer_Specular;\nuniform sampler2D u_Gbuffer_Normal;\n\nfloat LinearDepth(float d)\n{\n\tfloat f= 1000.0;\n\tfloat n = 0.1;\n\treturn (2.0 * n) / (f + n - d * (f - n));\n}\n\nvoid main() {\n\tvec2 reverseUV = fs_UV;\n\treverseUV.y = 1.0 - reverseUV.y;\n\n\tvec4 opaqueColor = texture(u_frame0, reverseUV);\n\tvec4 transColor = texture(u_frame1, fs_UV);\n\t\n\n\tvec4 OpaqueSSRInfo = texture(u_Gbuffer_Albedo, fs_UV);\n\t\n\tbool bWater0 = false;\n\n\t//water\n\tif(transColor.a > 19.0)\n\t{\n\t\ttransColor.a -= 20.0;\n\t\tbWater0 = true;\n\t}\t\n\telse if(transColor.a > 9.0)\n\t{\n\t\ttransColor.a -= 10.0;\n\t}\n\t\n\n\n\tif(transColor.a >= 1.0)\n\t\tfragColor[0].xyz = opaqueColor.xyz;\n\telse\n\t{\n\t\tif(opaqueColor.a < 1.0)\n\t\t{\n\t\t\tif(bWater0)\n\t\t\t{\n\t\t\t\tfloat depthDistance = clamp( LinearDepth(opaqueColor.a), 0.0, 1.0);\n\t\t\t\tdepthDistance *= 2.5;\n\t\t\t\tdepthDistance = clamp(depthDistance, 0.0, 1.0);\n\t\t\t\tfragColor[0].xyz =  mix( opaqueColor.xyz + transColor.xyz * depthDistance , transColor.xyz, depthDistance);\n\n\t\t\t\t//fragColor[0].xyz = opaqueColor.xyz;\n\t\t\t\t//fragColor[0].xyz =  mix(  vec3(1.0, 0.0, 0.0), vec3(0.0, 1.0, 0.0), pow(depthDistance, 1.0));\n\t\t\t}\n\t\t\telse\n\t\t\t{\n\t\t\t\tfragColor[0].xyz =  opaqueColor.xyz;\n\t\t\t}\t\t\t\n\t\t}\n\t\telse\n\t\t{\n\t\t\tfragColor[0].xyz = transColor.xyz;\n\t\t}\n\n\t}\n\n\t/////\n\t\n\n\tfloat OpaqueDepth = texture(u_Gbuffer_Albedo, reverseUV).w;\n\tvec4 OpaqueSPEC = texture(u_Gbuffer_Specular, reverseUV);\n\tvec4 OpaqueNORMAL = texture(u_Gbuffer_Normal, reverseUV);\n\t\n\tfloat transDepth =  texture(u_frame1, reverseUV).w;\n\tvec4 transInfo = texture(u_frame2, reverseUV);\n\n\tbool bWater;\n\n\tif(transDepth >= 19.0)\n\t{\n\t\ttransDepth = transDepth - 20.0;\n\t\tbWater = true;\n\t}\n\telse if(transDepth >= 9.0)\n\t{\n\t\ttransDepth = transDepth - 10.0;\n\t\tbWater = false;\n\t}\n\t\n\t\n\n\tif( transDepth <= OpaqueDepth )\n\t{\n\t\tif(bWater)\n\t\t{\n\t\t\tfragColor[0].w = transDepth + 20.0; //differenciate\n\t\t\tfragColor[1] = transInfo;\n\t\t}\n\t\telse\n\t\t{\n\t\t\t//disable glass reflection\n\t\t\tfragColor[0].w = transDepth + 10.0; \n\t\t\tfragColor[1] = transInfo;\n\n\t\t\t//fragColor[0].w = OpaqueDepth;\n\t\t\t//fragColor[1] = vec4( OpaqueNORMAL.xyz , OpaqueSPEC.w);\n\t\t}\n\t}\n\telse\n\t{\n\t\tfragColor[0].w = OpaqueDepth;\n\t\tfragColor[1] = vec4( OpaqueNORMAL.xyz , OpaqueSPEC.w);\n\t}\n\n\t\n}\n"

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\nprecision highp float;\n\nin vec2 fs_UV;\nout vec4 out_Col;\n\n//uniform sampler2D u_DepthMap;\n\nuniform sampler2D u_Gbuffer_Specular;\nuniform sampler2D u_Gbuffer_Normal;\nuniform samplerCube u_SkyCubeMap;\nuniform sampler2D u_frame0;\nuniform sampler2D u_frame1; //current \n\nuniform mat4 u_InvViewProj;  \nuniform mat4 u_ViewProj; \nuniform mat4 u_View; \n\n\nuniform float u_deltaTime;\nuniform vec3 u_CameraWPos; \n\nuniform vec4 u_SSRInfo;\n\nfloat LinearDepth(float d)\n{\n\tfloat f= 1000.0;\n\tfloat n = 0.1;\n\treturn (2.0 * n) / (f + n - d * (f - n));\n}\n\nfloat LinearDepthFar(float d, float f)\n{\t\n\tfloat n = 0.1;\n\treturn clamp( (2.0 * n) / (f + n - d * (f - n)), 0.0, 1.0);\n}\n\nfloat fade(vec2 UV)\n{\n\tvec2 NDC = UV * 2.0 - vec2(1.0);\n\n\treturn clamp( 1.0 - max( pow( NDC.y * NDC.y, 4.0) , pow( NDC.x * NDC.x, 4.0)) , 0.0, 1.0); \n}\n\nfloat getNormalizedDepth(float d)\n{\n\n\tif(d >= 19.0)\n\t{\n\t\td -= 20.0;\n\t}\n\telse if(d >= 9.0)\n\t{\n\t\td -= 10.0;\n\t}\n\n\treturn LinearDepthFar(d, 1000.0);\n}\n\nvoid main() {\n\n\t\n\tfloat depth = texture(u_frame1, fs_UV).w;\n\n\tbool trans = false;\n\tbool bWater = false;\n\t\n\tif(depth >= 19.0)\n\t{\n\t\ttrans = true;\n\t\tbWater = true;\n\t\tdepth -= 20.0;\n\n\t}\n\t//disable glass reflection\n\t\n\telse if(depth >= 9.0)\n\t{\n\t\ttrans = true;\n\t\tdepth -= 10.0;\n\t}\n\t\n\n\tdepth = clamp(depth, 0.0, 1.0);\n\n\tif(depth >= 1.0)\n\t{\n\t\tout_Col = vec4(0.0, 0.0, 0.0, 0.0);\n\t\treturn;\n\t}\n\n\tvec2 ndc = fs_UV * 2.0 - vec2(1.0);\n\tvec4 worldPos = u_InvViewProj* vec4(ndc, depth, 1.0);\n\tworldPos /= worldPos.w;\n\n\tvec4 Info = texture(u_Gbuffer_Specular, fs_UV);\n\n\tvec3 WorldNormal = Info.xyz;\n\tfloat roughness = Info.w;\n\t\n\n\tvec3 viewVec = normalize(worldPos.xyz - u_CameraWPos);\n\tvec3 relfectVec = reflect(viewVec , WorldNormal);\n\n\tvec3 currentPos = worldPos.xyz;\n\tvec3 prevPos = currentPos;\n\tvec4 reflectionColor = vec4(0.0, 0.0, 0.0, 0.0);\n\n\tfloat timeInterval = 0.7;\n\tfloat threshold = 2.0;\n\tfloat stepSize =  (1.0 + roughness) * (bWater ? 10.0 : u_SSRInfo.w);\n\tfloat maxStep = bWater ? 64.0 : u_SSRInfo.x;\n\n\tfloat prevDepth;\n\tfloat prevDepthFromDepthBuffer;\n\tfloat currentDepth;\n\n\tfloat Intensity = u_SSRInfo.y;\n\t\n\tif(trans)\n\t\tIntensity = u_SSRInfo.z;\n\n\tbool bHit = false;\n\tfloat fadeFactor = 0.0;\n\t\n\n\t//rayMarching\n\tfor(float i = 0.0; i < maxStep; i++ )\n\t{\t\t\t\n\t\tcurrentPos += relfectVec * stepSize;\n\n\t\tvec4 pos_SS = u_ViewProj * vec4(currentPos, 1.0);\n\t\tpos_SS /= pos_SS.w;\n\t\tvec2 screenSpaceCoords = vec2((pos_SS.x + 1.0) * 0.5, (1.0 - pos_SS.y)*0.5);\n\n\t\tif(screenSpaceCoords.x > 1.0 || screenSpaceCoords.x < 0.0 || screenSpaceCoords.y > 1.0 || screenSpaceCoords.y < 0.0 || pos_SS.z >= 1.0)\n\t\t{\n\t\t\tfadeFactor = 0.0;\n\t\t\t//bHit = true;\n\t\t\tbreak;\n\t\t}\n\n\t\tvec2 flippedScreenSpaceCoords = screenSpaceCoords;\n\t\tflippedScreenSpaceCoords.y = 1.0 - flippedScreenSpaceCoords.y;\n\t\t\n\t\tfloat depth_SS = texture(u_frame1, flippedScreenSpaceCoords).w;\n\n\t\tif(depth_SS >= 19.0)\n\t\t{\n\t\t\tdepth_SS -= 20.0;\n\t\t}\n\t\telse if(depth_SS >= 9.0)\n\t\t{\n\t\t\tdepth_SS -= 10.0;\n\t\t}\n\n\t\tdepth_SS = clamp(depth_SS, 0.0, 1.0);\n\n\t\tcurrentDepth = pos_SS.z;\n\n\t\tif(currentDepth > depth_SS)\n\t\t{\t\n\t\t\t\n\t\t\tfloat currentLinearDepth = LinearDepth(depth_SS);\n\n\t\t\tvec2 ndc = flippedScreenSpaceCoords * 2.0 - vec2(1.0);\n\t\t\tvec4 cworldPos = u_InvViewProj* vec4(ndc, depth_SS, 1.0);\n\t\t\tcworldPos /= cworldPos.w;\n\n\t\t\tfloat currentIndicatedLinearDepth = LinearDepth(currentDepth);\n\n\t\t\tif( distance(cworldPos.xyz, currentPos) < stepSize * threshold)\n\t\t\t{\n\t\t\t\tfloat prevIndicatedLinearDepth = LinearDepth(prevDepth);\n\t\t\t\tfloat prevLinearDepth = LinearDepth(prevDepthFromDepthBuffer);\n\t\t\t\t\n\t\t\t\tfloat denom = ( (currentLinearDepth - prevLinearDepth) - (currentIndicatedLinearDepth - prevIndicatedLinearDepth) );\n\n\t\t\t\tif(denom == 0.0)\n\t\t\t\t{\n\t\t\t\t\treflectionColor = vec4(0.0, 0.0, 0.0, 0.0);\n\n\t\t\t\t\tfadeFactor = 0.0;\n\t\t\t\t\tbHit = true;\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\n\t\t\t\tfloat lerpVal = (prevIndicatedLinearDepth - prevLinearDepth) / denom;\n\n\t\t\t\tlerpVal = clamp(lerpVal, 0.0, 1.0);\n\n\t\t\t\t//exception\n\t\t\t\tif(i < 0.5)\n\t\t\t\t\tlerpVal = 1.0;\n\t\t\t\t\t\n\t\t\t\tvec3 lerpedPos = prevPos + relfectVec * stepSize * lerpVal;\n\n\t\t\t\tvec4 lerpedPos_SS = u_ViewProj * vec4(lerpedPos, 1.0);\n\t\t\t\tlerpedPos_SS /= lerpedPos_SS.w;\n\t\t\t\t\n\t\t\t\tvec2 lerpedScreenSpaceCoords = vec2((lerpedPos_SS.x + 1.0) * 0.5, ( lerpedPos_SS.y + 1.0)*0.5);\n\n\t\t\t\t//out of screen\n\t\t\t\tif(lerpedScreenSpaceCoords.x > 1.0 || lerpedScreenSpaceCoords.x < 0.0 || lerpedScreenSpaceCoords.y > 1.0 || lerpedScreenSpaceCoords.y < 0.0 || lerpedPos_SS.z >= 1.0)\n\t\t\t\t{\n\t\t\t\t\treflectionColor = vec4(0.0, 0.0, 0.0, 0.0);\n\n\t\t\t\t\tfadeFactor = 0.0;\n\t\t\t\t\tbHit = true;\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\n\t\t\t\t//reflection with backface\n\t\t\t\t/*\n\t\t\t\tif( dot(relfectVec, texture(u_Gbuffer_Specular, lerpedScreenSpaceCoords).xyz) > 0.0 || dot(relfectVec, -viewVec ) > 0.0 )\n\t\t\t\t{\t\t\t\t\t\n\n\t\t\t\t\treflectionColor = vec4(0.0, 0.0, 0.0, 0.0);\n\n\t\t\t\t\tfadeFactor = 0.0;\n\t\t\t\t\tbHit = true;\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t\t*/\n\n\t\t\t\tfadeFactor = fade(lerpedScreenSpaceCoords);\n\t\t\t\tfadeFactor = min(pow(1.0 -  (i + 1.0)/maxStep, 0.05), fadeFactor);\n\n\t\t\t\tvec4 previousFrame = texture(u_frame0, lerpedScreenSpaceCoords);\n\t\t\t\tvec4 currentFrame = texture(u_frame1, vec2( lerpedScreenSpaceCoords.x, 1.0 - lerpedScreenSpaceCoords.y));\n\n\t\t\t\t\t\t\t\t\n\t\t\t\tfloat diffDepth = abs(getNormalizedDepth(currentFrame.a) - getNormalizedDepth(previousFrame.a));\n\n\n\t\t\t\treflectionColor =  mix(previousFrame, currentFrame, timeInterval );\n\t\t\t\t\n\t\t\t\tbHit = true;\n\n\t\t\t\tbreak;\n\t\t\t}\t\t\t\n\t\t}\n\n\t\tprevDepthFromDepthBuffer = depth_SS;\n\t\tprevDepth = currentDepth;\n\t\tprevPos = currentPos;\n\n\t}\n\n \t\n\n\tfadeFactor = fadeFactor * fadeFactor;\n\n\t//We are not going to make inner pool scene. Thus, this is fine\n\t\n\tvec3 relfectVec_VS = mat3(u_View) * relfectVec.xyz;\n\n\tvec3 farPos = worldPos.xyz + relfectVec * 500.0;\n\tvec4 farPos_SS = u_ViewProj * vec4(farPos, 1.0);\n\tfarPos_SS /= farPos_SS.w;\n\tfarPos_SS.xy = vec2( (farPos_SS.x + 1.0) * 0.5, (farPos_SS.y + 1.0) * 0.5);\n\n\tfloat LDepth = texture(u_frame1, vec2(farPos_SS.x,farPos_SS.y)).w;\n\n\tif(LDepth >= 19.0)\n\t{\n\t\tLDepth -= 20.0;\n\n\t}\t\n\telse if(LDepth >= 9.0)\n\t{\n\t\tLDepth -= 10.0;\n\t}\n\n\tvec4 SkyColor = texture(u_SkyCubeMap, relfectVec);\n\tSkyColor = pow(SkyColor, vec4(2.2));\n\tSkyColor *= 0.3;\n\n\t//out of screen\n\tif(farPos_SS.x > 1.0 || farPos_SS.x < 0.0 || farPos_SS.y > 1.0 || farPos_SS.y < 0.0 || LDepth < 1.0 || relfectVec_VS.z >= 0.0)\n\t{\n\t\t//SkyColor = texture(u_SkyCubeMap, relfectVec);\n\t}\n\telse\n\t{\n\n\t\tif(bHit && currentDepth < 1.0)\n\t\t{\n\t\t\t//SkyColor = texture(u_SkyCubeMap, relfectVec);\n\t\t}\n\t\telse\n\t\t{\n\t\t\tvec4 previousFrame = texture(u_frame0, farPos_SS.xy);\n\t\t\tvec4 currentFrame = texture(u_frame1, vec2( farPos_SS.x, 1.0 - farPos_SS.y));\n\t\t\t\n\t\t\tvec4 mixedColor =  mix(previousFrame, currentFrame, timeInterval );\n\n\t\t\tfadeFactor = fade(farPos_SS.xy);\n\t\t\tSkyColor = mix(SkyColor, mixedColor, fadeFactor);\t\n\t\t}\n\t\t\t\t\n\t}\n\n\tif(!bHit) //SkyBox\n\t{\n\t\treflectionColor = SkyColor;\n\t\tfadeFactor = 1.0;\t\t\n\t}\n\telse\n\t{\n\t\treflectionColor = mix(SkyColor, reflectionColor, fadeFactor);\t\t\t\n\t}\n\n\tif(bWater)\n\t{\n\t\t//fresnel\n\t\tfloat NoV = clamp( dot(-viewVec.xyz, WorldNormal), 0.0, 1.0);\n\t\tNoV = 1.0 - NoV;\n\t\tfloat wNoV = pow(NoV, 1.0);\n\t\treflectionColor.xyz *= wNoV;\n\t}\n\n\n\tfloat energyConservation = 1.0 - roughness * roughness;\n\n\tout_Col = reflectionColor * Intensity * energyConservation;\n\tout_Col = clamp(out_Col, 0.0, 1.0);\n\n\tout_Col.w = fadeFactor; //SSR_Mask\n\n\t\n}\n"

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\nprecision highp float;\n\nin vec2 fs_UV;\nout vec4 out_Col;\n\nuniform sampler2D u_frame0;\n\nvoid main() {\n\n\tvec2 reUV = vec2(fs_UV.x, 1.0 - fs_UV.y);\n\tout_Col = texture(u_frame0, reUV);\n}\n"

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\nin vec2 fs_UV;\r\nout vec4 out_Col;\r\n\r\nuniform sampler2D u_frame0; //Scene\r\nuniform sampler2D u_frame1; //SSR_Mask\r\n//uniform sampler2D u_frame2; //SSR\r\nuniform sampler2D u_frame3; //ParticleRain\r\nuniform sampler2D u_frame4; //ParticleMesh\r\nuniform sampler2D u_DepthMap; //Cloud\r\n\r\nuniform sampler2D u_frame5; //SSR 0\r\nuniform sampler2D u_frame6; //SSR 1\r\nuniform sampler2D u_frame7; //SSR 2\r\nuniform sampler2D u_frame8; //SSR 3\r\nuniform sampler2D u_frame9; //SSR 4\r\n\r\nuniform sampler2D u_Gbuffer_Specular;\r\nuniform sampler2D u_Gbuffer_Albedo;\r\n\r\n\r\nvec4 getSSRColor(vec2 UV, float lod)\r\n{\r\n\tif( lod < 1.0)\r\n\t{\r\n\t\treturn mix(texture(u_frame5, UV), texture(u_frame6, UV), lod);\r\n\t}\r\n\telse if( lod < 2.0)\r\n\t{\r\n\t\treturn mix(texture(u_frame6, UV), texture(u_frame7, UV), fract(lod));\r\n\t}\r\n\telse //if( lod < 3.0)\r\n\t{\r\n\t\treturn mix(texture(u_frame7, UV), texture(u_frame8, UV), fract(lod));\r\n\t}\r\n\t/*\r\n\telse\r\n\t{\r\n\t\treturn mix(texture(u_frame8, UV), texture(u_frame9, UV), fract(lod));\r\n\t}\r\n\t*/\r\n}\r\n\r\n\r\nvoid main() {\r\n\r\n\tvec2 reverseUV = fs_UV;\r\n\treverseUV.y = 1.0 - reverseUV.y;\r\n\r\n\tfloat roughness = texture(u_Gbuffer_Specular, reverseUV).a;\r\n\tvec4 sceneImagecolor = texture(u_frame0, fs_UV);\r\n \tvec4 meshParticle = texture(u_frame4, reverseUV);\r\n\r\n\tsceneImagecolor.xyz = mix(sceneImagecolor.xyz, meshParticle.xyz, meshParticle.a);\r\n\t\r\n\tfloat opaqueDepth = texture(u_Gbuffer_Albedo, reverseUV).a;\r\n\r\n\tfloat SSRMask = texture(u_frame1, fs_UV).a;\r\n\r\n\t//bool bWater;\r\n\tbool bTrans;\r\n\r\n\tfloat sceneDepth = texture(u_frame0, reverseUV).a;\r\n\r\n\tif(sceneDepth >= 9.0)\r\n\t{\r\n\t\tbTrans = true;\r\n\t}\r\n\r\n\tvec4 SSRMipColor = getSSRColor(fs_UV, log2(roughness + 1.0) * 4.0);\r\n\t//vec4 SSRMipColor = \t\t\t\t   texture(u_frame5, fs_UV);\r\n\r\n\r\n\tvec4 particles = texture(u_frame3, reverseUV) + texture(u_DepthMap, reverseUV);\r\n\t\r\n\tvec3 finalColor = vec3(0.0);\r\n\r\n\tSSRMask = clamp(SSRMask, 0.0, 1.0);\r\n\r\n\tif(SSRMask <= 0.0)\r\n\t\tfinalColor = sceneImagecolor.xyz + particles.xyz;\r\n\telse\r\n\t{\r\n\t\tif(bTrans)\r\n\t\t{\r\n\t\t\tfinalColor = SSRMipColor.xyz + particles.xyz  + sceneImagecolor.xyz;\r\n\t\t}\r\n\t\telse\r\n\t\t\tfinalColor = (SSRMipColor.xyz + particles.xyz) * sceneImagecolor.xyz + sceneImagecolor.xyz;\r\n\t}\r\n\r\n\r\n\tout_Col = vec4( finalColor, sceneImagecolor.a);\r\n}\r\n"

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\nprecision highp float;\n\nin vec2 fs_UV;\nout vec4 out_Col;\n\nuniform sampler2D u_frame0;\n\n\nvoid main()\n{\t\n\t\n\tvec4 sceneColor = texture(u_frame0, fs_UV);\n\n\tout_Col = max(vec4(0.0), pow( smoothstep(vec4(0.0), vec4(4.0), sceneColor), vec4(4.0)));\n\t\n\tout_Col.w = 1.0;\n}"

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\nprecision highp float;\n\n#define EPSILON 1e-10\n\nin vec2 fs_UV;\nout vec4 out_Col;\n\nuniform sampler2D u_frame0; //Scene\nuniform vec2 u_screenSize;\nuniform vec4 u_chromaticInfo; //x:dispersal, y:distortion, w : ColorTemp\n\nvec4 textureDistorted(sampler2D tex, vec2 texcoord,  vec2 direction, // direction of distortion\n              vec3 distortion)\n  {\n    return vec4\n      (\n\t\ttexture(tex, texcoord + direction * distortion.r).r,\n\t\ttexture(tex, texcoord + direction * distortion.g).g,\n\t\ttexture(tex, texcoord + direction * distortion.b).b,\n        0.0\n      );\n  }\n  \nvoid main()\n{\n \n  const int uGhosts = 3; // number of ghost samples\n  float uGhostDispersal = 0.2; // dispersion factor\n  float uDistortion = 1.5;\n  const float u_intensity = 0.5;\n\n\n  vec2 texcoord = fs_UV;\n  //texcoord.y = 1.0 - texcoord.y;\n\n  vec3 distortion = vec3(-u_screenSize.x * uDistortion, 0.0, u_screenSize.x * uDistortion);\n  \n  // ghost vector to image centre:\n  vec2 ghostVec = (vec2(0.5, 0.5) - texcoord) * uGhostDispersal;\n  \n  vec3 direction = normalize(vec3(ghostVec, 0.0));\n  // sample ghosts:  \n  vec4 result = vec4(0,0,0,0);\n  vec4 ghost = vec4(0, 0, 0, 0);\n\n  for(int i = 0; i < uGhosts; i++)\n  {\n     vec2 offset = fract(texcoord + ghostVec * float(i + 1) * 2.0 );\n     float att = (1.0 - float(i + 1) / float(uGhosts));\n     ghost += textureDistorted(u_frame0, offset, direction.xy, distortion) * att;\n     ghost += textureDistorted(u_frame0, vec2(1.0) - offset, direction.xy, distortion) * att;\n    \n  }  \n\n\n  float weightLens = length(vec2(0.5, 0.5) - texcoord) / length(vec2(0.5, 0.5));\n  weightLens = pow( clamp(1.0 - clamp(weightLens, 0.0, 1.0), 0.0, 1.0), 3.0);\n  //weightLens *= 2.0;\n  ghost *= weightLens;\n\n  result += ghost;\n\n  \n\n/*\n  // sample halo:\n  float uHaloWidth = 0.45;\n  vec2 haloVec = normalize(ghostVec) * uHaloWidth;\n  \n  result = textureDistorted(u_frame0, texcoord + haloVec, direction.xy, distortion) *weight;\n  result *= 1.0;\n  result += ghost;\n  */\n \n  out_Col = result * u_intensity;\n  out_Col.w = 1.0;\n}\n"

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\nprecision highp float;\n\nin vec2 fs_UV;\nout vec4 out_Col;\n\nuniform sampler2D u_frame0;\nuniform vec2 u_screenSize;\nuniform vec2 u_BlurScale;\n\nfloat offset[5];\nfloat weight[5];\n\nvoid main()\n{\t\n\toffset[0] = 0.0; offset[1] = 1.3846153846; offset[2] = 3.2307692308;\n\tweight[0] = 0.2270270270; weight[1] =  0.3162162162; weight[2] = 0.0702702703;\n\n\t//offset[0] = 0.0; offset[1] = 1.0; offset[2] = 2.0; offset[3] = 3.0; offset[4] = 4.0;\n\t//weight[0] = 0.2270270270; weight[1] =  0.1945945946; weight[2] = 0.1216216216; weight[3] = 0.0540540541; weight[4] = 0.0162162162;\n\n\t//offset[0] = 0.00000000;    offset[1] = 1.41176471;    offset[2] = 3.29411765;    offset[3] = 5.17647059;    offset[4] = 7.05882353;\n\t//weight[0] = 0.19638062;    weight[1] = 0.29675293;    weight[2] = 0.09442139;    weight[3] = 0.01037598;    weight[4] = 0.00025940;\n\n\tout_Col = texture( u_frame0, fs_UV ) * weight[0];\n    for (int i=1; i<3; i++)\n\t{\n        out_Col += texture( u_frame0, ( vec2(fs_UV)+vec2(0.0, offset[i] * u_BlurScale.y / u_screenSize.y) )) * weight[i];\n        out_Col += texture( u_frame0, ( vec2(fs_UV)-vec2(0.0, offset[i] * u_BlurScale.y / u_screenSize.y) )) * weight[i];\n    }\t\n\n\tout_Col = clamp(out_Col, 0.0, 1.0);\n\tout_Col.w = 1.0;\n}"

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\nprecision highp float;\n\nin vec2 fs_UV;\nout vec4 out_Col;\n\nuniform sampler2D u_frame0;\nuniform vec2 u_screenSize;\nuniform vec2 u_BlurScale;\n\nfloat offset[5];\nfloat weight[5];\n\nvoid main()\n{\t\n\toffset[0] = 0.0; offset[1] = 1.3846153846; offset[2] = 3.2307692308;\n\tweight[0] = 0.2270270270; weight[1] =  0.3162162162; weight[2] = 0.0702702703;\n\n\t//offset[0] = 0.0; offset[1] = 1.0; offset[2] = 2.0; offset[3] = 3.0; offset[4] = 4.0;\n\t//weight[0] = 0.2270270270; weight[1] =  0.1945945946; weight[2] = 0.1216216216; weight[3] = 0.0540540541; weight[4] = 0.0162162162;\n\n\t//offset[0] = 0.00000000;    offset[1] = 1.41176471;    offset[2] = 3.29411765;    offset[3] = 5.17647059;    offset[4] = 7.05882353;\n\t//weight[0] = 0.19638062;    weight[1] = 0.29675293;    weight[2] = 0.09442139;    weight[3] = 0.01037598;    weight[4] = 0.00025940;\n\n\tout_Col = texture( u_frame0, fs_UV ) * weight[0];\n    for (int i=1; i<3; i++)\n\t{\n        out_Col += texture( u_frame0, ( vec2(fs_UV)+vec2( offset[i] * u_BlurScale.x  / u_screenSize.x, 0.0))) * weight[i];\n        out_Col += texture( u_frame0, ( vec2(fs_UV)-vec2( offset[i] * u_BlurScale.x / u_screenSize.x, 0.0))) * weight[i];\n    }\n\n\tout_Col = clamp(out_Col, 0.0, 1.0);\n\tout_Col.w = 1.0;\n}"

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\nprecision highp float;\n\nin vec2 fs_UV;\nout vec4 out_Col;\n\nuniform sampler2D u_frame0;\nuniform vec2 u_screenSize;\nuniform vec2 u_BlurScale;\n\nuniform float u_Lod;\n\nfloat offset[5];\nfloat weight[5];\n\nvoid main()\n{\t\n\toffset[0] = 0.0; offset[1] = 1.3846153846; offset[2] = 3.2307692308;\n\tweight[0] = 0.2270270270; weight[1] =  0.3162162162; weight[2] = 0.0702702703;\n\n\t//offset[0] = 0.0; offset[1] = 1.0; offset[2] = 2.0; offset[3] = 3.0; offset[4] = 4.0;\n\t//weight[0] = 0.2270270270; weight[1] =  0.1945945946; weight[2] = 0.1216216216; weight[3] = 0.0540540541; weight[4] = 0.0162162162;\n\n\n\tout_Col = texture( u_frame0, fs_UV ) * weight[0];\n    for (int i=1; i<3; i++)\n\t{\n        out_Col += texture( u_frame0, ( vec2(fs_UV)+vec2(0.0, offset[i] * u_BlurScale.y / u_screenSize.y) )) * weight[i];\n        out_Col += texture( u_frame0, ( vec2(fs_UV)-vec2(0.0, offset[i] * u_BlurScale.y / u_screenSize.y) )) * weight[i];\n    }\t\n\n\tout_Col = clamp(out_Col, 0.0, 1.0);\n\tout_Col.w = 1.0;\n}"

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\nprecision highp float;\n\nin vec2 fs_UV;\nout vec4 out_Col;\n\nuniform sampler2D u_frame0;\nuniform vec2 u_screenSize;\nuniform vec2 u_BlurScale;\n\nuniform float u_Lod;\n\nfloat offset[5];\nfloat weight[5];\n\nvoid main()\n{\t\n\toffset[0] = 0.0; offset[1] = 1.3846153846; offset[2] = 3.2307692308;\n\tweight[0] = 0.2270270270; weight[1] =  0.3162162162; weight[2] = 0.0702702703;\n\n\t//offset[0] = 0.0; offset[1] = 1.0; offset[2] = 2.0; offset[3] = 3.0; offset[4] = 4.0;\n\t//weight[0] = 0.2270270270; weight[1] =  0.1945945946; weight[2] = 0.1216216216; weight[3] = 0.0540540541; weight[4] = 0.0162162162;\n\n\tout_Col = textureLod( u_frame0, fs_UV , u_Lod) * weight[0];\n    for (int i=1; i<3; i++)\n\t{\n        out_Col += textureLod( u_frame0, ( vec2(fs_UV)+vec2( offset[i] * u_BlurScale.x  / u_screenSize.x, 0.0)), u_Lod) * weight[i];\n        out_Col += textureLod( u_frame0, ( vec2(fs_UV)-vec2( offset[i] * u_BlurScale.x / u_screenSize.x, 0.0)), u_Lod) * weight[i];\n    }\n\n\tout_Col = clamp(out_Col, 0.0, 1.0);\n\tout_Col.w = 1.0;\n}"

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\nprecision highp float;\n\n#define EPSILON 1e-10\n\nin vec2 fs_UV;\nout vec4 out_Col;\n\nuniform sampler2D u_frame0; //Scene\nuniform sampler2D u_frame1; //Bloom\nuniform sampler2D u_frame2; //Lensflare\n\nuniform vec2 u_screenSize;\nuniform vec4 u_chromaticInfo; //x:dispersal, y:distortion, w : ColorTemp\n\nfloat bloomCalculation(float x, float A, float B, float C, float D, float E, float F)\n{\n\treturn clamp((x/(A/x-C/B)-D/E) / pow(x/(A/x-B)-D/F+E*F, 0.001), 0.0, 1.0);\n}\n\nfloat gamma = 2.2;\n\nvec3 linearToneMapping(vec3 color)\n{\n\tfloat exposure = 1.;\n\tcolor = clamp(exposure * color, 0., 1.);\n\tcolor = pow(color, vec3(1. / gamma));\n\treturn color;\n}\n\nvec3 simpleReinhardToneMapping(vec3 color)\n{\n\tfloat exposure = 1.5;\n\tcolor *= exposure/(1. + color / exposure);\n\tcolor = pow(color, vec3(1. / gamma));\n\treturn color;\n}\n\nvec3 lumaBasedReinhardToneMapping(vec3 color)\n{\n\tfloat luma = dot(color, vec3(0.2126, 0.7152, 0.0722));\n\tfloat toneMappedLuma = luma / (1. + luma);\n\tcolor *= toneMappedLuma / luma;\n\tcolor = pow(color, vec3(1. / gamma));\n\treturn color;\n}\n\nvec3 whitePreservingLumaBasedReinhardToneMapping(vec3 color)\n{\n\tfloat white = 2.;\n\tfloat luma = dot(color, vec3(0.2126, 0.7152, 0.0722));\n\tfloat toneMappedLuma = luma * (1. + luma / (white*white)) / (1. + luma);\n\tcolor *= toneMappedLuma / luma;\n\tcolor = pow(color, vec3(1. / gamma));\n\treturn color;\n}\n\nvec3 RomBinDaHouseToneMapping(vec3 color)\n{\n    color = exp( -1.0 / ( 2.72*color + 0.15 ) );\n\tcolor = pow(color, vec3(1. / gamma));\n\treturn color;\n}\n\nvec3 filmicToneMapping(vec3 color)\n{\n\tcolor = max(vec3(0.), color - vec3(0.004));\n\tcolor = (color * (6.2 * color + .5)) / (color * (6.2 * color + 1.7) + 0.06);\n\treturn color;\n}\n\nvec3 ColorTemperatureToRGB(float temperatureInKelvins)\n{\n\tvec3 retColor;\n\t\n    temperatureInKelvins = clamp(temperatureInKelvins, 1000.0, 40000.0) / 100.0;\n    \n    if (temperatureInKelvins <= 66.0)\n    {\n        retColor.r = 1.0;\n        retColor.g = clamp(0.39008157876901960784 * log(temperatureInKelvins) - 0.63184144378862745098, 0.0, 1.0);\n    }\n    else\n    {\n    \tfloat t = temperatureInKelvins - 60.0;\n        retColor.r = clamp(1.29293618606274509804 * pow(t, -0.1332047592), 0.0, 1.0);\n        retColor.g = clamp(1.12989086089529411765 * pow(t, -0.0755148492), 0.0, 1.0);\n    }\n    \n    if (temperatureInKelvins >= 66.0)\n        retColor.b = 1.0;\n    else if(temperatureInKelvins <= 19.0)\n        retColor.b = 0.0;\n    else\n        retColor.b = clamp(0.54320678911019607843 * log(temperatureInKelvins - 10.0) - 1.19625408914, 0.0, 1.0);\n\n    return retColor;\n}\n\nvec3 HUEtoRGB(float H)\n{\n    float R = abs(H * 6.0 - 3.0) - 1.0;\n    float G = 2.0 - abs(H * 6.0 - 2.0);\n    float B = 2.0 - abs(H * 6.0 - 4.0);\n    return clamp(vec3(R,G,B), 0.0, 1.0);\n}\n\nvec3 HSLtoRGB(in vec3 HSL)\n{\n    vec3 RGB = HUEtoRGB(HSL.x);\n    float C = (1.0 - abs(2.0 * HSL.z - 1.0)) * HSL.y;\n    return (RGB - 0.5) * C + vec3(HSL.z);\n}\n \nvec3 RGBtoHCV(vec3 RGB)\n{\n    // Based on work by Sam Hocevar and Emil Persson\n    vec4 P = (RGB.g < RGB.b) ? vec4(RGB.bg, -1.0, 2.0/3.0) : vec4(RGB.gb, 0.0, -1.0/3.0);\n    vec4 Q = (RGB.r < P.x) ? vec4(P.xyw, RGB.r) : vec4(RGB.r, P.yzx);\n    float C = Q.x - min(Q.w, Q.y);\n    float H = abs((Q.w - Q.y) / (6.0 * C + EPSILON) + Q.z);\n    return vec3(H, C, Q.x);\n}\n\nvec3 RGBtoHSL(vec3 RGB)\n{\n    vec3 HCV = RGBtoHCV(RGB);\n    float L = HCV.z - HCV.y * 0.5;\n    float S = HCV.y / (1.0 - abs(L * 2.0 - 1.0) + EPSILON);\n    return vec3(HCV.x, S, L);\n}\n\nvec4 textureDistorted(sampler2D tex, vec2 texcoord,  vec2 direction, // direction of distortion\n              vec3 distortion)\n  {\n    return vec4\n      (\n\t\ttexture(tex, texcoord + direction * distortion.r).r,\n\t\ttexture(tex, texcoord + direction * distortion.g).g,\n\t\ttexture(tex, texcoord + direction * distortion.b).b,\n        0.0\n      );\n  }\n\nvoid main() {\n\t\t\n    float u_Temperature = u_chromaticInfo.w;\n\n    vec2 reverseUV = vec2(fs_UV.x, 1.0 - fs_UV.y);\n\n    vec3 distortion = vec3(-1.0/u_screenSize.x * u_chromaticInfo.y, 0.0, 1.0/u_screenSize.x * u_chromaticInfo.y);  \n\n    vec2 ghostVec = (vec2(0.5, 0.5) - reverseUV) * u_chromaticInfo.x;\n    \n    vec3 direction = normalize(vec3(ghostVec, 0.0));\n\n    vec3 bloomColor = textureDistorted(u_frame1, reverseUV, direction.xy, distortion).xyz;\n\n    vec3 LensFlareColor = texture(u_frame2, reverseUV).xyz;\n    \n\n\tvec3 toneMappedColor = (texture(u_frame0, fs_UV).xyz + bloomColor) * ColorTemperatureToRGB(u_Temperature) + LensFlareColor;\n\n    vec3 toneColor = filmicToneMapping(toneMappedColor);\n\n    //vec3 HSL = RGBtoHSL(toneColor);\n    //vec3 result = HSLtoRGB(vec3(HSL.x, HSL.y, HSL.z + 0.1));\n\n\tout_Col = vec4(toneColor, 1.0);\n}\n"

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\nprecision highp float;\n\n#define FXAA_SPAN_MAX 2.0\n#define FXAA_REDUCE_MUL   (1.0/FXAA_SPAN_MAX)\n#define FXAA_REDUCE_MIN   (1.0/128.0)\n#define FXAA_SUBPIX_SHIFT (1.0/2.0)\n\nin vec2 fs_UV;\nout vec4 out_Col;\n\nuniform sampler2D u_frame0; //Scene\nuniform vec2 u_screenSize;\n\n\n\nvec3 FxaaPixelShader( vec4 uv, sampler2D tex, vec2 rcpFrame) {\n    \n    vec3 rgbNW = texture(tex, uv.zw).xyz;\n    vec3 rgbNE = texture(tex, uv.zw + vec2(1,0)*rcpFrame.xy).xyz;\n    vec3 rgbSW = texture(tex, uv.zw + vec2(0,1)*rcpFrame.xy).xyz;\n    vec3 rgbSE = texture(tex, uv.zw + vec2(1,1)*rcpFrame.xy).xyz;\n    vec3 rgbM  = texture(tex, uv.xy).xyz;\n\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max(\n        (lumaNW + lumaNE + lumaSW + lumaSE) * (0.25 * FXAA_REDUCE_MUL),\n        FXAA_REDUCE_MIN);\n    float rcpDirMin = 1.0/(min(abs(dir.x), abs(dir.y)) + dirReduce);\n    \n    dir = min(vec2( FXAA_SPAN_MAX,  FXAA_SPAN_MAX),\n          max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n          dir * rcpDirMin)) * rcpFrame.xy;\n\n    vec3 rgbA = (1.0/2.0) * (\n        texture(tex, uv.xy + dir * (1.0/3.0 - 0.5)).xyz +\n        texture(tex, uv.xy + dir * (2.0/3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * (1.0/2.0) + (1.0/4.0) * (\n        texture(tex, uv.xy + dir * (0.0/3.0 - 0.5)).xyz +\n        texture(tex, uv.xy + dir * (3.0/3.0 - 0.5)).xyz);\n    \n    float lumaB = dot(rgbB, luma);\n\n    if((lumaB < lumaMin) || (lumaB > lumaMax)) return rgbA;\n    \n    return rgbB; \n}\n\nvoid main() {\n\n   vec2 repcUV = vec2(fs_UV.x, 1.0 - fs_UV.y);\n\n   vec2 rcpFrame =  vec2( 1.0/u_screenSize);\n   vec4 uv = vec4( repcUV, repcUV - (rcpFrame * (0.5 + FXAA_SUBPIX_SHIFT)));\n\n   out_Col = vec4(FxaaPixelShader( uv , u_frame0, rcpFrame), 1.0);   \n}\n"

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\nprecision highp float;\n\nin vec2 fs_UV;\nout vec4 out_Col;\n\nuniform sampler2D u_frame0; //Scene\nuniform sampler2D u_frame1; //Scene\nuniform float u_Time;\n\nfloat LinearDepth(float d)\n{\n\tfloat f= 1000.0;\n\tfloat n = 0.1;\n\treturn (2.0 * n) / (f + n - d * (f - n));\n}\n\n\nvoid main() {\n\tvec2 ReUV = vec2(fs_UV.x, 1.0 - fs_UV.y);\n\t\n\tout_Col = texture(u_frame0, fs_UV);\n\t\n\tout_Col.w = 1.0;\n}\n"

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\nin vec2 fs_UV;\r\nout vec4 out_Col;\r\n\r\nuniform sampler2D u_frame0;\r\nuniform sampler2D u_frame1; // noise\r\nuniform vec2 u_screenSize;\r\nuniform float u_Time;\r\nuniform float u_deltaTime;\r\n\r\n// Experiment: Frosted Glass II by Shadmar\r\n// Original by Jack Davenport : https://www.shadertoy.com/view/MtsSWs#\r\n\r\n#define FROSTYNESS 2.0\r\n#define COLORIZE   1.0\r\n#define COLOR_RGB  0.7,1.0,1.0\r\n\r\nfloat rand(vec2 uv) {\r\n \r\n    float a = dot(uv, vec2(92., 80.));\r\n    float b = dot(uv, vec2(41., 62.));\r\n    \r\n    float x = sin(a) + cos(b) * 51.;\r\n    return fract(x);\r\n}\r\n\r\nvoid main()\r\n{\r\n\tvec2 uv = fs_UV.xy;\r\n\r\n    vec4 d = texture(u_frame1, uv);\r\n\tvec2 rnd = vec2(rand(uv+d.r*.05)-0.5, rand(uv+d.b*.05)-0.5);\r\n    \r\n    //vignette\r\n    const vec2 lensRadius \t= vec2(0.95*1.5, 0.05);\r\n    float dist = distance(uv.xy, vec2(0.5,0.5));\r\n    float vigfin = pow(1.-smoothstep(lensRadius.x, lensRadius.y, dist),2.);\r\n   \r\n    rnd *= .025*vigfin+d.rg*FROSTYNESS*vigfin;\r\n    uv += rnd;\r\n\r\n    vec3 col = mix(texture(u_frame0, fs_UV.xy).rgb ,mix(texture(u_frame0, uv),vec4(COLOR_RGB,1.0),COLORIZE*vec4(rnd.r)).xyz , clamp(u_deltaTime/3.0, 0.0, 1.0));\r\n\r\n\r\n    out_Col.xyz = col;\r\n    out_Col.a = 1.0;\r\n}"

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\nprecision highp float;\n\nin vec2 fs_UV;\nout vec4 out_Col;\n\nuniform sampler2D u_frame0;\nuniform vec2 u_screenSize;\nuniform float u_Time;\nuniform float u_deltaTime;\n\n// Rain Drops: Reference: https://www.shadertoy.com/view/ltffzl\n// Gaussian Blur: https://www.shadertoy.com/view/XdfGDH\n\n#define S(a, b, t) smoothstep(a, b, t)\n\nvec3 N13(float p) {\n    //  from DAVE HOSKINS\n   vec3 p3 = fract(vec3(p) * vec3(.1031,.11369,.13787));\n   p3 += dot(p3, p3.yzx + 19.19);\n   return fract(vec3((p3.x + p3.y)*p3.z, (p3.x+p3.z)*p3.y, (p3.y+p3.z)*p3.x));\n}\n\nvec4 N14(float t) {\n\treturn fract(sin(t*vec4(123., 1024., 1456., 264.))*vec4(6547., 345., 8799., 1564.));\n}\nfloat N(float t) {\n    return fract(sin(t*12345.564)*7658.76);\n}\n\nfloat Saw(float b, float t) {\n\treturn S(0., b, t)*S(1., b, t);\n}\n\n\nvec2 DropLayer2(vec2 uv, float t) {\n    vec2 UV = uv;\n    \n    uv.y += t*0.75;\n    vec2 a = vec2(6., 1.);\n    vec2 grid = a*2.;\n    vec2 id = floor(uv*grid);\n    \n    float colShift = N(id.x); \n    uv.y += colShift;\n    \n    id = floor(uv*grid);\n    vec3 n = N13(id.x*35.2+id.y*2376.1);\n    vec2 st = fract(uv*grid)-vec2(.5, 0);\n    \n    float x = n.x-.5;\n    \n    float y = UV.y*20.;\n    float wiggle = sin(y+sin(y));\n    x += wiggle*(.5-abs(x))*(n.z-.5);\n    x *= .7;\n    float ti = fract(t+n.z);\n    y = (Saw(.85, ti)-.5)*.9+.5;\n    vec2 p = vec2(x, y);\n    \n    float d = length((st-p)*a.yx);\n    \n    float mainDrop = S(.4, .0, d);\n    \n    float r = sqrt(S(1., y, st.y));\n    float cd = abs(st.x-x);\n    float trail = S(.23*r, .15*r*r, cd);\n    float trailFront = S(-.02, .02, st.y-y);\n    trail *= trailFront*r*r;\n    \n    y = UV.y;\n    float trail2 = S(.2*r, .0, cd);\n    float droplets = max(0., (sin(y*(1.-y)*120.)-st.y))*trail2*trailFront*n.z;\n    y = fract(y*10.)+(st.y-.5);\n    float dd = length(st-vec2(x, y));\n    droplets = S(.3, 0., dd);\n    float m = mainDrop+droplets*r*trailFront;\n    \n    //m += st.x>a.y*.45 || st.y>a.x*.165 ? 1.2 : 0.;\n    return vec2(m, trail);\n}\n\nfloat StaticDrops(vec2 uv, float t) {\n\tuv *= 40.;\n    \n    vec2 id = floor(uv);\n    uv = fract(uv)-.5;\n    vec3 n = N13(id.x*107.45+id.y*3543.654);\n    vec2 p = (n.xy-.5)*.7;\n    float d = length(uv-p);\n    \n    float fade = Saw(.025, fract(t+n.z));\n    float c = S(.3, 0., d)*fract(n.z*10.)*fade;\n    return c;\n}\n\nvec2 Drops(vec2 uv, float t, float l0, float l1, float l2) {\n    float s = StaticDrops(uv, t)*l0; \n    vec2 m1 = DropLayer2(uv, t)*l1;\n    vec2 m2 = DropLayer2(uv*1.85, t)*l2;\n    \n    float c = s+m1.x+m2.x;\n    c = S(.3, 1., c);\n    \n    return vec2(c, max(m1.y*l0, m2.y*l1));\n}\n\nfloat normpdf(in float x, in float sigma)\n{\n    return 0.39894*exp(-0.5*x*x/(sigma*sigma))/sigma;\n}\n\nvoid main()\n{\n\tvec2 uv = (vec2(fs_UV.x, 1.0-fs_UV.y)-vec2(0.5));\n    uv.x = uv.x * u_screenSize.x / u_screenSize.y;\n    vec2 UV = fs_UV.xy;\n    float T = u_Time;\n    \n    \n    float t = T*.2;\n    \n    float rainAmount = sin(T*.05)*.3+.7;\n    \n    float maxBlur = mix(3., 6., rainAmount);\n    float minBlur = 2.;\n    \n    float story = 0.;\n    \n    float staticDrops = S(-.5, 1., rainAmount)*2.;\n    float layer1 = S(.25, .75, rainAmount);\n    float layer2 = S(.0, .5, rainAmount);\n    \n    \n    vec2 c = Drops(uv, t, staticDrops, layer1, layer2);\n\n\tvec2 e = vec2(.001, 0.);\n    float cx = Drops(uv+e, t, staticDrops, layer1, layer2).x;\n    float cy = Drops(uv+e.yx, t, staticDrops, layer1, layer2).x;\n    vec2 n = vec2(cx-c.x, cy-c.x);\t\t// expensive normals\n    //vignette\n    const vec2 lensRadius   = vec2(0.85*1.5, 0.05);\n    float dist = distance(uv.xy, vec2(0.0,0.0));\n    float vigfin = pow(1.-smoothstep(lensRadius.x, lensRadius.y, dist),2.);\n   \n    float focus = mix(maxBlur-c.y, minBlur, S(.1, .2, c.x));\n    focus = mix(0., focus, vigfin);\n    n =  mix(vec2(0.0), n, vigfin);\n\n// Gaussian Blur\n    //declare stuff\n    const int mSize = 11;\n    const int kSize = (mSize-1)/2;\n    float kernel[mSize];\n    vec3 col = texture(u_frame0, UV+n).rgb;    \n    //create the 1-D kernel\n    float sigma = focus;\n    if(sigma > 0.0){\n        col = vec3(0.0); \n        float Z = 0.0;\n        for (int j = 0; j <= kSize; ++j)\n        {\n            kernel[kSize+j] = kernel[kSize-j] = normpdf(float(j), sigma);\n        }\n        \n        //get the normalization factor (as the gaussian has been clamped)\n        for (int j = 0; j < mSize; ++j)\n        {\n            Z += kernel[j];\n        }\n        \n        //read out the texels\n        for (int i=-kSize; i <= kSize; ++i)\n        {\n            for (int j=-kSize; j <= kSize; ++j)\n            {\n                col += kernel[kSize+j]*kernel[kSize+i]*texture(u_frame0, UV+n+(vec2(float(i),float(j))) / u_screenSize.xy).rgb;\n\n            }\n        }\n\n        col = col/(Z*Z);\n    }\n    \n    col *= mix(vec3(1.0), vec3(0.9), focus);\n    col = mix(texture(u_frame0, fs_UV.xy).rgb ,col , clamp(u_deltaTime/3.0, 0.0, 1.0));\n    \n    \n    out_Col = vec4(col, 1.);\n}"

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\nin vec2 fs_UV;\r\nout vec4 out_Col;\r\n\r\nuniform sampler2D u_frame0;\r\nuniform sampler2D u_frame1; // noise\r\nuniform vec2 u_screenSize;\r\nuniform float u_Time;\r\nuniform float u_deltaTime;\r\n\r\nvec3 mod289(vec3 x) {\r\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\r\n}\r\n\r\nvec4 mod289(vec4 x) {\r\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\r\n}\r\n\r\nvec4 permute(vec4 x) {\r\n         return mod289(((x*34.0)+1.0)*x);\r\n}\r\n\r\nvec4 taylorInvSqrt(vec4 r)\r\n{\r\n    return 1.79284291400159 - 0.85373472095314 * r;\r\n}\r\n\r\nfloat snoise(vec3 v)\r\n    { \r\n    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\r\n    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\r\n\r\n// First corner\r\n    vec3 i  = floor(v + dot(v, C.yyy) );\r\n    vec3 x0 =    v - i + dot(i, C.xxx) ;\r\n\r\n// Other corners\r\n    vec3 g = step(x0.yzx, x0.xyz);\r\n    vec3 l = 1.0 - g;\r\n    vec3 i1 = min( g.xyz, l.zxy );\r\n    vec3 i2 = max( g.xyz, l.zxy );\r\n\r\n    //   x0 = x0 - 0.0 + 0.0 * C.xxx;\r\n    //   x1 = x0 - i1   + 1.0 * C.xxx;\r\n    //   x2 = x0 - i2   + 2.0 * C.xxx;\r\n    //   x3 = x0 - 1.0 + 3.0 * C.xxx;\r\n    vec3 x1 = x0 - i1 + C.xxx;\r\n    vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\r\n    vec3 x3 = x0 - D.yyy;           // -1.0+3.0*C.x = -0.5 = -D.y\r\n\r\n// Permutations\r\n    i = mod289(i); \r\n    vec4 p = permute( permute( permute( \r\n                         i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\r\n                     + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) \r\n                     + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\r\n\r\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\r\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\r\n    float n_ = 0.142857142857; // 1.0/7.0\r\n    vec3    ns = n_ * D.wyz - D.xzx;\r\n\r\n    vec4 j = p - 49.0 * floor(p * ns.z * ns.z); //  mod(p,7*7)\r\n\r\n    vec4 x_ = floor(j * ns.z);\r\n    vec4 y_ = floor(j - 7.0 * x_ );     // mod(j,N)\r\n\r\n    vec4 x = x_ *ns.x + ns.yyyy;\r\n    vec4 y = y_ *ns.x + ns.yyyy;\r\n    vec4 h = 1.0 - abs(x) - abs(y);\r\n\r\n    vec4 b0 = vec4( x.xy, y.xy );\r\n    vec4 b1 = vec4( x.zw, y.zw );\r\n\r\n    //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\r\n    //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\r\n    vec4 s0 = floor(b0)*2.0 + 1.0;\r\n    vec4 s1 = floor(b1)*2.0 + 1.0;\r\n    vec4 sh = -step(h, vec4(0.0));\r\n\r\n    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\r\n    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\r\n\r\n    vec3 p0 = vec3(a0.xy,h.x);\r\n    vec3 p1 = vec3(a0.zw,h.y);\r\n    vec3 p2 = vec3(a1.xy,h.z);\r\n    vec3 p3 = vec3(a1.zw,h.w);\r\n\r\n//Normalise gradients\r\n    //vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\r\n    vec4 norm = inversesqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\r\n    p0 *= norm.x;\r\n    p1 *= norm.y;\r\n    p2 *= norm.z;\r\n    p3 *= norm.w;\r\n\r\n// Mix final noise value\r\n    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\r\n    m = m * m;\r\n    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), \r\n                                                                dot(p2,x2), dot(p3,x3) ) );\r\n    }\r\n\r\n//////////////////////////////////////////////////////////////\r\n\r\n// PRNG\r\n// From https://www.shadertoy.com/view/4djSRW\r\nfloat prng(in vec2 seed) {\r\n    seed = fract (seed * vec2 (5.3983, 5.4427));\r\n    seed += dot (seed.yx, seed.xy + vec2 (21.5351, 14.3137));\r\n    return fract (seed.x * seed.y * 95.4337);\r\n}\r\n\r\n//////////////////////////////////////////////////////////////\r\n\r\nfloat PI = 3.1415926535897932384626433832795;\r\n\r\nfloat noiseStack(vec3 pos,int octaves,float falloff){\r\n    float noise = snoise(vec3(pos));\r\n    float off = 1.0;\r\n    if (octaves>1) {\r\n        pos *= 2.0;\r\n        off *= falloff;\r\n        noise = (1.0-off)*noise + off*snoise(vec3(pos));\r\n    }\r\n    if (octaves>2) {\r\n        pos *= 2.0;\r\n        off *= falloff;\r\n        noise = (1.0-off)*noise + off*snoise(vec3(pos));\r\n    }\r\n    if (octaves>3) {\r\n        pos *= 2.0;\r\n        off *= falloff;\r\n        noise = (1.0-off)*noise + off*snoise(vec3(pos));\r\n    }\r\n    return (1.0+noise)/2.0;\r\n}\r\n\r\nvec2 noiseStackUV(vec3 pos,int octaves,float falloff,float diff){\r\n    float displaceA = noiseStack(pos,octaves,falloff);\r\n    float displaceB = noiseStack(pos+vec3(3984.293,423.21,5235.19),octaves,falloff);\r\n    return vec2(displaceA,displaceB);\r\n}\r\n\r\nvec2 drop(vec2 uv, vec2 pos, float r)\r\n{\r\n    pos.y = fract(pos.y);\r\n    return (uv - pos) * exp(-pow(20.0 * length(uv - pos), 3.0));\r\n}\r\n\r\n\r\nvoid main()\r\n{\r\n    float time = u_Time;\r\n    vec2 resolution = u_screenSize.xy;\r\n        //\r\n    float xpart = fs_UV.x;\r\n    float ypart = fs_UV.y;\r\n    //\r\n    float clip = 410.0;\r\n    float ypartClip = gl_FragCoord.y/clip;\r\n    float ypartClippedFalloff = clamp(2.0-ypartClip,0.0,1.0);\r\n    float ypartClipped = min(ypartClip,1.0);\r\n    float ypartClippedn = 1.0-ypartClipped;\r\n    //\r\n    float xfuel = 1.0-abs(2.0*xpart-1.0);//pow(1.0-abs(2.0*xpart-1.0),0.5);\r\n    //\r\n    float timeSpeed = 0.5;\r\n    float realTime = timeSpeed*time;\r\n    //\r\n    vec2 coordScaled = 0.01*gl_FragCoord.xy - 0.02*vec2(0.0,0.0);\r\n    vec3 position = vec3(coordScaled,0.0) + vec3(1223.0,6434.0,8425.0);\r\n    vec3 flow = vec3(4.1*(0.5-xpart)*pow(ypartClippedn,4.0),-2.0*xfuel*pow(ypartClippedn,64.0),0.0);\r\n    vec3 timing = realTime*vec3(0.0,-1.7,1.1) + flow;\r\n    //\r\n    vec3 displacePos = vec3(1.0,0.5,1.0)*2.4*position+realTime*vec3(0.01,-0.7,1.3);\r\n    vec3 displace3 = vec3(noiseStackUV(displacePos,2,0.4,0.1),0.0);\r\n    //\r\n    vec3 noiseCoord = (vec3(2.0,1.0,1.0)*position+timing+0.4*displace3)/1.0;\r\n    float noise = noiseStack(noiseCoord,3,0.4);\r\n    //\r\n    float flames = pow(ypartClipped,0.3*xfuel)*pow(noise,0.3*xfuel);\r\n    //\r\n    float f = ypartClippedFalloff*pow(1.0-flames*flames*flames,5.0 + 1.0 * sin(u_Time));\r\n    float fff = f*f*f;\r\n    vec3 fire = vec3(f * 0.83, f * 0.7, f * 0.6);\r\n    //\r\n    // smoke\r\n    float smokeNoise = 0.5+snoise(0.4*position+timing*vec3(1.0,1.0,0.2))/2.0;\r\n    vec3 smoke = vec3(0.3*pow(xfuel,3.0)*pow(ypart,2.0)*(smokeNoise+0.4*(1.0-noise)));\r\n    //\r\n    // sparks\r\n    float sparkGridSize = 30.0;\r\n    vec2 sparkCoord = gl_FragCoord.xy - vec2(0.0,190.0*realTime);\r\n    sparkCoord -= 30.0*noiseStackUV(0.01*vec3(sparkCoord,30.0*time),1,0.4,0.1);\r\n    sparkCoord += 100.0*flow.xy;\r\n    if (mod(sparkCoord.y/sparkGridSize,2.0)<1.0) sparkCoord.x += 0.5*sparkGridSize;\r\n    vec2 sparkGridIndex = vec2(floor(sparkCoord/sparkGridSize));\r\n    float sparkRandom = prng(sparkGridIndex);\r\n    float sparkLife = min(10.0*(1.0-min((sparkGridIndex.y+(190.0*realTime/sparkGridSize))/(24.0-20.0*sparkRandom),1.0)),1.0);\r\n    vec3 sparks = vec3(0.0);\r\n    if (sparkLife>0.0) {\r\n        float sparkSize = xfuel*xfuel*sparkRandom*0.12;\r\n        float sparkRadians = 999.0*sparkRandom*2.0*PI + 2.0*time;\r\n        vec2 sparkCircular = vec2(sin(sparkRadians),cos(sparkRadians));\r\n        vec2 sparkOffset = (0.5-sparkSize)*sparkGridSize*sparkCircular;\r\n        vec2 sparkModulus = mod(sparkCoord+sparkOffset,sparkGridSize) - 0.5*vec2(sparkGridSize);\r\n        float sparkLength = length(sparkModulus);\r\n        float sparksGray = max(0.0, 1.0 - sparkLength/(sparkSize*sparkGridSize));\r\n        sparks = sparkLife*sparksGray*vec3(0.83,0.7,0.6);\r\n    }\r\n    //\r\n    vec2 uv = fs_UV.xy;\r\n    uv.x = uv.x * 0.5 + 0.5;\r\n    vec2 d = vec2(0.0, 0.0);\r\n    const int n = 100;\r\n    for(int i = 0; i < n; i++)\r\n    {\r\n        vec4 r = texture(u_frame1, vec2(float(i) / float(n), 0.25));\r\n        vec2 pos = r.xy;\r\n        pos.x *= 2.0; // iResolution.x / iResolution.y;\r\n        pos.y += 7.5 * u_Time * 0.02 * r.z;\r\n        //pos.x += sin(t + r.z);\r\n        d += 0.25 * drop(uv.xy, pos, 0.03);\r\n    }\r\n\r\n    vec3 background = texture(u_frame0, fs_UV.xy + vec2(d.x, d.y)).rgb;\r\n    \r\n    vec3 col = max(fire,sparks)+smoke;\r\n\r\n   \r\n\r\n    col = mix(col, background, (1.0-length(col)));\r\n\r\n\r\n    col = mix(texture(u_frame0, fs_UV.xy).rgb ,col , clamp(u_deltaTime/3.0, 0.0, 1.0));\r\n\r\n    \r\n\r\n    out_Col = vec4(col, 1.0);\r\n\r\n}"

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);

function mulMatVec3(a, b) {
    return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(a[0] * b[0] + a[3] * b[1] + a[6] * b[2], a[1] * b[0] + a[4] * b[1] + a[7] * b[2], a[2] * b[0] + a[5] * b[1] + a[8] * b[2]);
}
function mulMatVec4(a, b) {
    return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec4 */].fromValues(a[0] * b[0] + a[4] * b[1] + a[8] * b[2] + a[12] * b[3], a[1] * b[0] + a[5] * b[1] + a[9] * b[2] + a[13] * b[3], a[2] * b[0] + a[6] * b[1] + a[10] * b[2] + a[14] * b[3], a[3] * b[0] + a[7] * b[1] + a[11] * b[2] + a[15] * b[3]);
}
class Camera {
    constructor() {
        this.projectionMatrix = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create();
        this.invProjMatrix = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create();
        this.cloudProjectionMatrix = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create();
        this.viewProjectionMatrix = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create();
        this.invViewProjectionMatrix = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create();
        this.viewMatrix = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create();
        this.fovy = 45 * 3.1415962 / 180.0;
        this.aspectRatio = 1;
        this.near = 0.1;
        this.far = 1000.0;
        this.position = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].create();
        this.direction = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 1);
        this.target = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].create();
        this.up = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 1, 0);
        this.bForward = false;
        this.bBackward = false;
        this.bLeft = false;
        this.bRight = false;
        this.bLeftClick = false;
        this.bMiddleClick = false;
        this.bRightClick = false;
        this.theta = 0.0;
        this.phi = 0.0;
        this.rotMat = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create();
        this.transMat = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create();
    }
    initialize(position, target) {
        this.position = position;
        this.target = target;
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].sub(this.direction, this.target, this.position);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].normalize(this.direction, this.direction);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].lookAt(this.viewMatrix, this.position, this.target, this.up);
    }
    setAspectRatio(aspectRatio) {
        this.aspectRatio = aspectRatio;
    }
    updateProjectionMatrix() {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].perspective(this.projectionMatrix, this.fovy, this.aspectRatio, this.near, this.far);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].invert(this.invProjMatrix, this.projectionMatrix);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].perspective(this.cloudProjectionMatrix, this.fovy, this.aspectRatio, this.near, this.far * this.far);
    }
    Translate(delta) {
        let transVec = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].create();
        if (this.bBackward) {
            transVec = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(this.viewMatrix[8] * delta, this.viewMatrix[9] * delta, this.viewMatrix[10] * delta);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].add(this.position, this.position, transVec);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].add(this.target, this.target, transVec);
        }
        if (this.bForward) {
            transVec = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(-this.viewMatrix[8] * delta, -this.viewMatrix[9] * delta, -this.viewMatrix[10] * delta);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].add(this.position, this.position, transVec);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].add(this.target, this.target, transVec);
        }
        if (this.bRight) {
            transVec = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(this.viewMatrix[0] * delta, this.viewMatrix[1] * delta, this.viewMatrix[2] * delta);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].add(this.position, this.position, transVec);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].add(this.target, this.target, transVec);
        }
        if (this.bLeft) {
            transVec = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(-this.viewMatrix[0] * delta, -this.viewMatrix[1] * delta, -this.viewMatrix[2] * delta);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].add(this.position, this.position, transVec);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].add(this.target, this.target, transVec);
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
        var tempMat0 = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create();
        var tempMat1 = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create();
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].mul(this.rotMat, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].rotate(tempMat0, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create(), radTheta, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0.0, 1.0, 0.0)), __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].rotate(tempMat1, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create(), radPhi, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(1.0, 0.0, 0.0)));
    }
    updatePosition(deltaX, deltaZ) {
        var deltaPos = mulMatVec4(this.rotMat, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec4 */].fromValues(deltaX, 0.0, deltaZ, 0.0));
        this.position[0] += deltaPos[0];
        this.position[1] += deltaPos[1];
        this.position[2] += deltaPos[2];
        //limit camera area
        if (this.position[1] < 10.0) {
            this.position[1] = 10.0;
        }
        else if (this.position[1] > 30.0) {
            this.position[1] = 30.0;
        }
        var length = Math.sqrt(this.position[0] * this.position[0] + this.position[2] * this.position[2]);
        var cap = 350.0;
        if (length > cap) {
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
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].mul(this.viewMatrix, this.transMat, this.rotMat);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].invert(this.viewMatrix, this.viewMatrix);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].mul(this.viewProjectionMatrix, this.projectionMatrix, this.viewMatrix);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].invert(this.invViewProjectionMatrix, this.viewProjectionMatrix);
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (Camera);


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__globals__ = __webpack_require__(1);

class Texture {
    constructor(imgSource, bCubemap) {
        this.bLoaded = [false, false, false, false, false, false];
        // create a white pixel to serve as placeholder
        const formatSrc = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].RGBA;
        const formatDst = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].RGBA;
        const lvl = 0;
        const phWidth = 1; // placeholder
        const phHeight = 1;
        const phImg = new Uint8Array([255, 255, 255, 255]);
        const formatBit = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].UNSIGNED_BYTE; // TODO: HDR
        if (bCubemap) {
            this.cubemap_texture = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createTexture();
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP, this.cubemap_texture);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP_POSITIVE_X, lvl, formatDst, phWidth, phHeight, 0, formatSrc, formatBit, phImg);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP_NEGATIVE_X, lvl, formatDst, phWidth, phHeight, 0, formatSrc, formatBit, phImg);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP_POSITIVE_Y, lvl, formatDst, phWidth, phHeight, 0, formatSrc, formatBit, phImg);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP_NEGATIVE_Y, lvl, formatDst, phWidth, phHeight, 0, formatSrc, formatBit, phImg);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP_POSITIVE_Z, lvl, formatDst, phWidth, phHeight, 0, formatSrc, formatBit, phImg);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP_NEGATIVE_Z, lvl, formatDst, phWidth, phHeight, 0, formatSrc, formatBit, phImg);
        }
        else {
            this.texture = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createTexture();
            this.bindTex();
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_2D, lvl, formatDst, phWidth, phHeight, 0, formatSrc, formatBit, phImg);
            // get a javascript image locally and load it. not instant but will auto-replace white pixel
            const img = new Image();
            img.onload = function () {
                this.bindTex();
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_2D, lvl, formatDst, img.width, img.height, 0, formatSrc, formatBit, img);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_WRAP_S, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].REPEAT);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_WRAP_T, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].REPEAT);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_MIN_FILTER, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_2D, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_MAG_FILTER, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].LINEAR);
                this.bLoaded[0] = true;
            }.bind(this);
            img.src = imgSource; // load the image
        }
    }
    bindTex() {
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_2D, this.texture);
    }
    handle() {
        return this.texture;
    }
    isPowerOf2(value) {
        return (value & (value - 1)) == 0;
    }
    isComplete(bCubemap) {
        if (!bCubemap)
            return this.bLoaded[0];
        else {
            return this.bLoaded[0] && this.bLoaded[1] && this.bLoaded[2] && this.bLoaded[3] && this.bLoaded[4] && this.bLoaded[5];
            ;
        }
    }
    loadCubeImg(imgSource, index) {
        const formatSrc = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].RGBA;
        const formatDst = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].RGBA;
        const lvl = 0;
        const phWidth = 1; // placeholder
        const phHeight = 1;
        const phImg = new Uint8Array([255, 255, 255, 255]);
        const formatBit = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].UNSIGNED_BYTE; // TODO: HDR
        if (index == 0) {
            // Pos X+
            const img_Pos_X = new Image();
            img_Pos_X.onload = function () {
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP, this.cubemap_texture);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP_POSITIVE_X, lvl, formatDst, img_Pos_X.width, img_Pos_X.height, 0, formatSrc, formatBit, img_Pos_X);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_WRAP_S, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].REPEAT);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_WRAP_T, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].REPEAT);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_MIN_FILTER, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_MAG_FILTER, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].LINEAR);
                this.bLoaded[index] = true;
            }.bind(this);
            img_Pos_X.src = imgSource + "0.png";
        }
        else if (index == 1) {
            // Neg X-
            const img_Neg_X = new Image();
            img_Neg_X.onload = function () {
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP, this.cubemap_texture);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP_NEGATIVE_X, lvl, formatDst, img_Neg_X.width, img_Neg_X.height, 0, formatSrc, formatBit, img_Neg_X);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_WRAP_S, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].REPEAT);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_WRAP_T, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].REPEAT);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_MIN_FILTER, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_MAG_FILTER, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].LINEAR);
                this.bLoaded[index] = true;
            }.bind(this);
            img_Neg_X.src = imgSource + "1.png";
        }
        else if (index == 2) {
            // Pos Y+
            const img_Pos_Y = new Image();
            img_Pos_Y.onload = function () {
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP, this.cubemap_texture);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP_POSITIVE_Y, lvl, formatDst, img_Pos_Y.width, img_Pos_Y.height, 0, formatSrc, formatBit, img_Pos_Y);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_WRAP_S, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].REPEAT);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_WRAP_T, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].REPEAT);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_MIN_FILTER, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_MAG_FILTER, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].LINEAR);
                this.bLoaded[index] = true;
            }.bind(this);
            img_Pos_Y.src = imgSource + "2.png";
        }
        else if (index == 3) {
            // Neg Y-
            const img_Neg_Y = new Image();
            img_Neg_Y.onload = function () {
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP, this.cubemap_texture);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP_NEGATIVE_Y, lvl, formatDst, img_Neg_Y.width, img_Neg_Y.height, 0, formatSrc, formatBit, img_Neg_Y);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_WRAP_S, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].REPEAT);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_WRAP_T, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].REPEAT);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_MIN_FILTER, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_MAG_FILTER, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].LINEAR);
                this.bLoaded[index] = true;
            }.bind(this);
            img_Neg_Y.src = imgSource + "3.png";
        }
        else if (index == 4) {
            // Pos Z+
            const img_Pos_Z = new Image();
            img_Pos_Z.onload = function () {
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP, this.cubemap_texture);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP_POSITIVE_Z, lvl, formatDst, img_Pos_Z.width, img_Pos_Z.height, 0, formatSrc, formatBit, img_Pos_Z);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_WRAP_S, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].REPEAT);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_WRAP_T, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].REPEAT);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_MIN_FILTER, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_MAG_FILTER, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].LINEAR);
                this.bLoaded[index] = true;
            }.bind(this);
            img_Pos_Z.src = imgSource + "4.png";
        }
        else if (index == 5) {
            // Neg Z-
            const img_Neg_Z = new Image();
            img_Neg_Z.onload = function () {
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindTexture(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP, this.cubemap_texture);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texImage2D(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP_NEGATIVE_Z, lvl, formatDst, img_Neg_Z.width, img_Neg_Z.height, 0, formatSrc, formatBit, img_Neg_Z);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_WRAP_S, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].REPEAT);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_WRAP_T, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].REPEAT);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_MIN_FILTER, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].LINEAR);
                __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].texParameteri(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_CUBE_MAP, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TEXTURE_MAG_FILTER, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].LINEAR);
                //gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
                this.bLoaded[index] = true;
            }.bind(this);
            img_Neg_Z.src = imgSource + "5.png";
        }
    }
}
/* unused harmony export Texture */

;
/* harmony default export */ __webpack_exports__["a"] = (Texture);


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__globals__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gl_matrix__ = __webpack_require__(0);


const POSITION_LOCATION = 0;
const VELOCITY_LOCATION = 1;
const COLOR_LOCATION = 2;
const ATTRACT_LOCATION = 3;
const NUM_OUTPUT = 4;
class Particle {
    constructor(numParticles) {
        this.count = numParticles;
        this.position = new Float32Array(this.count * 4);
        this.velocity = new Float32Array(this.count * 4);
        this.color = new Float32Array(this.count * 4);
        this.attract = new Float32Array(this.count * 4);
        //ping-pong
        this.VAOs = [__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createVertexArray(), __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createVertexArray()];
        this.transformFeedback = [__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createTransformFeedback(), __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createTransformFeedback()];
        this.currentBufferSetIndex = 0;
    }
    switchBufferSet() {
        this.currentBufferSetIndex = (this.currentBufferSetIndex + 1) % 2;
    }
    getVAO(index) {
        return this.VAOs[index];
    }
    getTransformFeedbacks(index) {
        return this.transformFeedback[index];
    }
    getVBO(index) {
        return this.VBOs[index];
    }
    bindBufferBase(index) {
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBufferBase(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TRANSFORM_FEEDBACK_BUFFER, POSITION_LOCATION, this.VBOs[index][POSITION_LOCATION]);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBufferBase(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TRANSFORM_FEEDBACK_BUFFER, VELOCITY_LOCATION, this.VBOs[index][VELOCITY_LOCATION]);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBufferBase(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TRANSFORM_FEEDBACK_BUFFER, COLOR_LOCATION, this.VBOs[index][COLOR_LOCATION]);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBufferBase(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TRANSFORM_FEEDBACK_BUFFER, ATTRACT_LOCATION, this.VBOs[index][ATTRACT_LOCATION]);
    }
    setAttribDivisor() {
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].vertexAttribDivisor(POSITION_LOCATION, 0);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].vertexAttribDivisor(VELOCITY_LOCATION, 0);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].vertexAttribDivisor(COLOR_LOCATION, 0);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].vertexAttribDivisor(ATTRACT_LOCATION, 0);
    }
    squareToDiskConcentric(sample) {
        var M_PI = 3.1415926535897932384626433832795;
        //TODO
        let phi;
        let radius;
        var a = 2.0 * sample[0] - 1.0; // (a,b) is now on [-1,1]ˆ2
        var b = 2.0 * sample[1] - 1.0;
        if (a > -b) {
            if (a > b) {
                radius = a;
                phi = (M_PI / 4) * (b / a);
            }
            else {
                radius = b;
                phi = (M_PI / 4) * (2 - (a / b));
            }
        }
        else {
            if (a < b) {
                radius = -a;
                phi = (M_PI / 4) * (4 + (b / a));
            }
            else {
                radius = -b;
                if (b != 0)
                    phi = (M_PI / 4) * (6 - (a / b));
                else
                    phi = 0;
            }
        }
        return __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["c" /* vec2 */].fromValues(radius * Math.cos(phi), radius * Math.sin(phi));
    }
    initialize(width, xOffset, height, yOffset, depth, zOffset, Rrange, Rbias, Grange, Gbias, Brange, Bbias) {
        for (let p = 0; p < this.count; ++p) {
            var posXZ = this.squareToDiskConcentric(__WEBPACK_IMPORTED_MODULE_1_gl_matrix__["c" /* vec2 */].fromValues(Math.random(), Math.random()));
            this.position[p * 4] = posXZ[0] * width + xOffset;
            this.position[p * 4 + 1] = (Math.random()) * height + yOffset;
            this.position[p * 4 + 2] = posXZ[1] * depth + zOffset;
            // Life
            this.velocity[p * 4] = Math.random();
            this.velocity[p * 4 + 1] = 0.0;
            this.velocity[p * 4 + 2] = 0.0;
            this.color[p * 4] = Math.random() * Rrange + Rbias;
            this.color[p * 4 + 1] = Math.random() * Grange + Gbias;
            this.color[p * 4 + 2] = Math.random() * Brange + Bbias;
            this.color[p * 4 + 3] = 0.0; //Index
            posXZ = this.squareToDiskConcentric(__WEBPACK_IMPORTED_MODULE_1_gl_matrix__["c" /* vec2 */].fromValues(Math.random(), Math.random()));
            this.attract[p * 4] = posXZ[0] * width + xOffset;
            this.attract[p * 4 + 1] = (Math.random()) * height + yOffset;
            this.attract[p * 4 + 2] = posXZ[1] * depth + zOffset;
            //save original Gap
            this.position[p * 4 + 3] = this.attract[p * 4];
            this.velocity[p * 4 + 3] = this.attract[p * 4 + 1];
            this.attract[p * 4 + 3] = this.attract[p * 4 + 2];
        }
        this.VBOs = new Array(this.VAOs.length);
        for (let i = 0; i < this.VAOs.length; ++i) {
            this.VBOs[i] = new Array(NUM_OUTPUT);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindVertexArray(this.VAOs[i]);
            this.VBOs[i][POSITION_LOCATION] = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createBuffer();
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.VBOs[i][POSITION_LOCATION]);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.position, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].DYNAMIC_COPY);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].vertexAttribPointer(POSITION_LOCATION, 4, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].enableVertexAttribArray(POSITION_LOCATION);
            this.VBOs[i][VELOCITY_LOCATION] = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createBuffer();
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.VBOs[i][VELOCITY_LOCATION]);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.velocity, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].DYNAMIC_COPY);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].vertexAttribPointer(VELOCITY_LOCATION, 4, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].enableVertexAttribArray(VELOCITY_LOCATION);
            this.VBOs[i][COLOR_LOCATION] = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createBuffer();
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.VBOs[i][COLOR_LOCATION]);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.color, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].DYNAMIC_COPY);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].vertexAttribPointer(COLOR_LOCATION, 4, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].enableVertexAttribArray(COLOR_LOCATION);
            this.VBOs[i][ATTRACT_LOCATION] = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createBuffer();
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.VBOs[i][ATTRACT_LOCATION]);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.attract, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].DYNAMIC_COPY);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].vertexAttribPointer(ATTRACT_LOCATION, 4, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].enableVertexAttribArray(ATTRACT_LOCATION);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, null);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindVertexArray(null);
        }
    }
    initialize2(width, xOffset, height, yOffset, depth, zOffset, radius, radiusOffset, Rrange, Rbias, Grange, Gbias, Brange, Bbias, Arange, Abias) {
        for (let p = 0; p < this.count; ++p) {
            var rad = Math.random() * Math.PI * 2.0;
            var rrr = Math.random() * radius + radiusOffset;
            this.position[p * 4] = Math.sin(rad) * rrr;
            this.position[p * 4 + 1] = (Math.random()) * height + yOffset;
            this.position[p * 4 + 2] = Math.cos(rad) * rrr;
            // Life
            this.velocity[p * 4] = Math.random() * Brange + Bbias;
            this.velocity[p * 4 + 1] = 0.0;
            this.velocity[p * 4 + 2] = 0.0;
            this.color[p * 4] = Math.random() * Rrange + Rbias;
            this.color[p * 4 + 1] = Math.random() * Grange + Gbias;
            this.color[p * 4 + 2] = Math.random() * Brange + Bbias; //speed
            this.color[p * 4 + 3] = Math.random() * Arange + Abias; //size
            var posXZ = this.squareToDiskConcentric(__WEBPACK_IMPORTED_MODULE_1_gl_matrix__["c" /* vec2 */].fromValues(Math.random(), Math.random()));
            this.attract[p * 4] = rrr;
            this.attract[p * 4 + 1] = rrr;
            this.attract[p * 4 + 2] = rrr;
            //save original Gap
            this.position[p * 4 + 3] = rad;
            this.velocity[p * 4 + 3] = rrr;
            this.attract[p * 4 + 3] = this.attract[p * 4 + 2];
        }
        this.VBOs = new Array(this.VAOs.length);
        for (let i = 0; i < this.VAOs.length; ++i) {
            this.VBOs[i] = new Array(NUM_OUTPUT);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindVertexArray(this.VAOs[i]);
            this.VBOs[i][POSITION_LOCATION] = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createBuffer();
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.VBOs[i][POSITION_LOCATION]);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.position, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].DYNAMIC_COPY);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].vertexAttribPointer(POSITION_LOCATION, 4, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].enableVertexAttribArray(POSITION_LOCATION);
            this.VBOs[i][VELOCITY_LOCATION] = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createBuffer();
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.VBOs[i][VELOCITY_LOCATION]);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.velocity, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].DYNAMIC_COPY);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].vertexAttribPointer(VELOCITY_LOCATION, 4, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].enableVertexAttribArray(VELOCITY_LOCATION);
            this.VBOs[i][COLOR_LOCATION] = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createBuffer();
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.VBOs[i][COLOR_LOCATION]);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.color, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].DYNAMIC_COPY);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].vertexAttribPointer(COLOR_LOCATION, 4, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].enableVertexAttribArray(COLOR_LOCATION);
            this.VBOs[i][ATTRACT_LOCATION] = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createBuffer();
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.VBOs[i][ATTRACT_LOCATION]);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.attract, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].DYNAMIC_COPY);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].vertexAttribPointer(ATTRACT_LOCATION, 4, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].enableVertexAttribArray(ATTRACT_LOCATION);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, null);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindVertexArray(null);
        }
    }
    initialize3(width, xOffset, height, yOffset, depth, zOffset, Rrange, Rbias, Grange, Gbias, Brange, Bbias) {
        for (let p = 0; p < this.count; ++p) {
            var posXZ = this.squareToDiskConcentric(__WEBPACK_IMPORTED_MODULE_1_gl_matrix__["c" /* vec2 */].fromValues(Math.random(), Math.random()));
            this.position[p * 4] = posXZ[0] * width + xOffset;
            this.position[p * 4 + 1] = (Math.random()) * height + yOffset;
            this.position[p * 4 + 2] = posXZ[1] * depth + zOffset;
            // Angular Velocity
            this.velocity[p * 4] = 0.5 + 0.5 * Math.PI * Math.random();
            this.velocity[p * 4 + 1] = __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["c" /* vec2 */].length(posXZ) * width; // radius range
            this.velocity[p * 4 + 2] = Math.random() * Math.PI * 2.0; // random phase
            //
            let randomAxis = __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["d" /* vec3 */].create();
            __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["d" /* vec3 */].normalize(randomAxis, [Math.random(), Math.random(), Math.random()]);
            this.color[p * 4] = randomAxis[0];
            this.color[p * 4 + 1] = randomAxis[1];
            this.color[p * 4 + 2] = randomAxis[2];
            this.color[p * 4 + 3] = 0.0; //Index
            posXZ = this.squareToDiskConcentric(__WEBPACK_IMPORTED_MODULE_1_gl_matrix__["c" /* vec2 */].fromValues(Math.random(), Math.random()));
            this.attract[p * 4] = posXZ[0] * width + xOffset;
            this.attract[p * 4 + 1] = (Math.random()) * height + yOffset;
            this.attract[p * 4 + 2] = posXZ[1] * depth + zOffset;
            //save original Gap
            this.position[p * 4 + 3] = this.attract[p * 4];
            this.velocity[p * 4 + 3] = this.attract[p * 4 + 1];
            this.attract[p * 4 + 3] = this.attract[p * 4 + 2];
        }
        this.VBOs = new Array(this.VAOs.length);
        for (let i = 0; i < this.VAOs.length; ++i) {
            this.VBOs[i] = new Array(NUM_OUTPUT);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindVertexArray(this.VAOs[i]);
            this.VBOs[i][POSITION_LOCATION] = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createBuffer();
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.VBOs[i][POSITION_LOCATION]);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.position, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].DYNAMIC_COPY);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].vertexAttribPointer(POSITION_LOCATION, 4, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].enableVertexAttribArray(POSITION_LOCATION);
            this.VBOs[i][VELOCITY_LOCATION] = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createBuffer();
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.VBOs[i][VELOCITY_LOCATION]);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.velocity, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].DYNAMIC_COPY);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].vertexAttribPointer(VELOCITY_LOCATION, 4, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].enableVertexAttribArray(VELOCITY_LOCATION);
            this.VBOs[i][COLOR_LOCATION] = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createBuffer();
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.VBOs[i][COLOR_LOCATION]);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.color, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].DYNAMIC_COPY);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].vertexAttribPointer(COLOR_LOCATION, 4, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].enableVertexAttribArray(COLOR_LOCATION);
            this.VBOs[i][ATTRACT_LOCATION] = __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].createBuffer();
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.VBOs[i][ATTRACT_LOCATION]);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.attract, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].DYNAMIC_COPY);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].vertexAttribPointer(ATTRACT_LOCATION, 4, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].FLOAT, false, 0, 0);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].enableVertexAttribArray(ATTRACT_LOCATION);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, null);
            __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindVertexArray(null);
        }
    }
    setBuffers(a, b) {
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.VBOs[a][POSITION_LOCATION]);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].vertexAttribPointer(POSITION_LOCATION, 4, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].FLOAT, false, 0, 0);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBufferBase(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TRANSFORM_FEEDBACK_BUFFER, POSITION_LOCATION, this.VBOs[b][POSITION_LOCATION]);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.VBOs[a][VELOCITY_LOCATION]);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].vertexAttribPointer(VELOCITY_LOCATION, 4, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].FLOAT, false, 0, 0);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBufferBase(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TRANSFORM_FEEDBACK_BUFFER, VELOCITY_LOCATION, this.VBOs[b][VELOCITY_LOCATION]);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.VBOs[a][COLOR_LOCATION]);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].vertexAttribPointer(COLOR_LOCATION, 4, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].FLOAT, false, 0, 0);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBufferBase(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TRANSFORM_FEEDBACK_BUFFER, COLOR_LOCATION, this.VBOs[b][COLOR_LOCATION]);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].ARRAY_BUFFER, this.VBOs[a][ATTRACT_LOCATION]);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].vertexAttribPointer(ATTRACT_LOCATION, 4, __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].FLOAT, false, 0, 0);
        __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].bindBufferBase(__WEBPACK_IMPORTED_MODULE_0__globals__["a" /* gl */].TRANSFORM_FEEDBACK_BUFFER, ATTRACT_LOCATION, this.VBOs[b][ATTRACT_LOCATION]);
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (Particle);


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rendering_gl_Drawable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__(1);



class Quad extends __WEBPACK_IMPORTED_MODULE_1__rendering_gl_Drawable__["a" /* default */] {
    constructor(center) {
        super(); // Call the constructor of the super class. This is required.
        this.center = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec4 */].fromValues(center[0], center[1], center[2], 1);
    }
    create() {
        this.indices = new Uint32Array([0, 1, 2,
            3, 0, 2]);
        this.normals = new Float32Array([0, 0, 1, 0,
            0, 0, 1, 0,
            0, 0, 1, 0,
            0, 0, 1, 0]);
        this.positions = new Float32Array([-1, -1, 0.0, 1,
            1, -1, 0.0, 1,
            1, 1, 0.0, 1,
            -1, 1, 0.0, 1]);
        this.uvs = new Float32Array([0.0, 1.0,
            1.0, 1.0,
            1.0, 0.0,
            0.0, 0.0]);
        /*
        this.colors = new Float32Array([
          1.0, 0.5, 0.5, 1.0,
          1.0, 0.5, 0.5, 1.0,
          1.0, 0.5, 0.5, 1.0,
          1.0, 0.5, 0.5, 1.0
          ]);
      
          this.trans = new Float32Array([
            0.0, 0.0, 0.0, 0.0,
            0.0, 0.0, 0.0, 0.0,
            0.0, 0.0, 0.0, 0.0,
            0.0, 0.0, 0.0, 0.0,
            ]);
            */
        this.generateIdx();
        this.generatePos();
        this.generateNor();
        this.generateUV();
        this.generateCol();
        this.generateTrans();
        this.count = this.indices.length;
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.bufIdx);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.indices, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufNor);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.normals, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufPos);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.positions, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufUV);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.uvs, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
    }
    setInstanceVBOs(colors, offsets) {
        this.colors = colors;
        this.trans = offsets;
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufCol);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.colors, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.bufTrans);
        __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].ARRAY_BUFFER, this.trans, __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* gl */].STATIC_DRAW);
    }
    setCopyVBOs(bufferColors, bufferOffsets) {
        this.bufCol = bufferColors;
        this.bufTrans = bufferOffsets;
    }
}
;
/* harmony default export */ __webpack_exports__["a"] = (Quad);


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Turtle__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rendering_gl_Drawable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main__ = __webpack_require__(9);





class Branch {
    constructor(sPos, ePos, bRadius = 0.1, tRadius = 0.1) {
        this.startPos = sPos;
        this.endPos = ePos;
        this.bottomRadius = bRadius;
        this.topRadius = tRadius;
    }
}
/* unused harmony export Branch */

class Geometry {
    constructor(pos, type) {
        this.position = pos;
        this.type = type;
    }
}
/* unused harmony export Geometry */

class LSystem extends __WEBPACK_IMPORTED_MODULE_2__rendering_gl_Drawable__["a" /* default */] {
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
        this.center = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec4 */].fromValues(center[0], center[1], center[2], 1);
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
        __WEBPACK_IMPORTED_MODULE_3__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_3__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.bufIdx);
        __WEBPACK_IMPORTED_MODULE_3__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_3__globals__["a" /* gl */].ELEMENT_ARRAY_BUFFER, this.indices, __WEBPACK_IMPORTED_MODULE_3__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_3__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_3__globals__["a" /* gl */].ARRAY_BUFFER, this.bufNor);
        __WEBPACK_IMPORTED_MODULE_3__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_3__globals__["a" /* gl */].ARRAY_BUFFER, this.normals, __WEBPACK_IMPORTED_MODULE_3__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_3__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_3__globals__["a" /* gl */].ARRAY_BUFFER, this.bufPos);
        __WEBPACK_IMPORTED_MODULE_3__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_3__globals__["a" /* gl */].ARRAY_BUFFER, this.positions, __WEBPACK_IMPORTED_MODULE_3__globals__["a" /* gl */].STATIC_DRAW);
        __WEBPACK_IMPORTED_MODULE_3__globals__["a" /* gl */].bindBuffer(__WEBPACK_IMPORTED_MODULE_3__globals__["a" /* gl */].ARRAY_BUFFER, this.bufUV);
        __WEBPACK_IMPORTED_MODULE_3__globals__["a" /* gl */].bufferData(__WEBPACK_IMPORTED_MODULE_3__globals__["a" /* gl */].ARRAY_BUFFER, this.uvs, __WEBPACK_IMPORTED_MODULE_3__globals__["a" /* gl */].STATIC_DRAW);
    }
    add(mesh, model) {
        let modelinvtr = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create();
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].transpose(modelinvtr, model);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].invert(modelinvtr, modelinvtr);
        let indicesCount = this.idxArray.length;
        for (let i = 0; i < mesh.indices.length; i++) {
            this.idxArray.push(mesh.indices[i] + indicesCount);
            let thisPos = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec4 */].fromValues(mesh.positions[4 * i], mesh.positions[4 * i + 1], mesh.positions[4 * i + 2], mesh.positions[4 * i + 3]);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec4 */].transformMat4(thisPos, thisPos, model);
            this.posArray.push(thisPos[0], thisPos[1], thisPos[2], thisPos[3]);
            let thisNor = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec4 */].fromValues(mesh.normals[4 * i], mesh.normals[4 * i + 1], mesh.normals[4 * i + 2], mesh.normals[4 * i + 3]);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec4 */].transformMat4(thisNor, thisNor, modelinvtr);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec4 */].normalize(thisNor, thisNor);
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
        let turtle = new __WEBPACK_IMPORTED_MODULE_1__Turtle__["a" /* Turtle */]();
        let stack = new Array();
        let insn = this.getIteration(n);
        //insn = "FF" + insn;
        //console.log(insn);
        turtle.applyUpRot(this.InitAngle);
        let initialForward = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(turtle.Forward[0], turtle.Forward[1], turtle.Forward[2]);
        for (let i = 0; i < insn.length; i++) {
            let sym = insn.substr(i, 1);
            if (sym == "F") {
                let start = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(turtle.pos[0], turtle.pos[1], turtle.pos[2]);
                turtle.moveForward(this.DefaultStep);
                let end = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(turtle.pos[0], turtle.pos[1], turtle.pos[2]);
                let model = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create(), transMat = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create(), rotMat = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create(), scaleMat = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create();
                let midpos = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues((start[0] + end[0]) * 0.5 + this.center[0], (start[1] + end[1]) * 0.5 + this.center[1], (start[2] + end[2]) * 0.5 + this.center[2]);
                __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].translate(transMat, transMat, midpos);
                let rotQuat = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* quat */].create();
                __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* quat */].rotationTo(rotQuat, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(1, 0, 0), turtle.Forward);
                __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].fromQuat(rotMat, rotQuat);
                __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].multiply(model, rotMat, model);
                __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].multiply(model, transMat, model);
                let mesh = __WEBPACK_IMPORTED_MODULE_4__main__["road_Mesh_Map"].get("road")[Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_4__main__["road_Mesh_Map"].get("road").length)];
                this.add(mesh, model);
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
                let curTurtle = new __WEBPACK_IMPORTED_MODULE_1__Turtle__["a" /* Turtle */]();
                curTurtle.pos = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(turtle.pos[0], turtle.pos[1], turtle.pos[2]);
                curTurtle.Up = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(turtle.Up[0], turtle.Up[1], turtle.Up[2]);
                curTurtle.Forward = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(turtle.Forward[0], turtle.Forward[1], turtle.Forward[2]);
                curTurtle.Left = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(turtle.Left[0], turtle.Left[1], turtle.Left[2]);
                curTurtle.Depth = turtle.Depth;
                stack.push(curTurtle);
            }
            else if (sym == "]") {
                turtle = stack.pop();
            }
            else if (sym == "*") {
                let geoPos = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(turtle.pos[0], turtle.pos[1], turtle.pos[2]);
                this.Geometries.push(new Geometry(geoPos, sym));
                let model = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create(), transMat = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create(), rotMat = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create(), scaleMat = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create();
                let midpos = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(turtle.pos[0] + this.center[0], turtle.pos[1] + this.center[1], turtle.pos[2] + this.center[2]);
                __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].rotate(rotMat, rotMat, this.InitAngle / 180 * Math.PI, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 1, 0));
                __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].translate(transMat, transMat, midpos);
                __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].multiply(model, rotMat, model);
                __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].multiply(model, transMat, model);
                let meshNo = 0;
                if (Math.random() > 0.65)
                    meshNo = Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_4__main__["road_Mesh_Map"].get("conn").length);
                let mesh = __WEBPACK_IMPORTED_MODULE_4__main__["road_Mesh_Map"].get("conn")[meshNo];
                this.add(mesh, model);
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
/* harmony export (immutable) */ __webpack_exports__["a"] = LSystem;



/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(0);

class Turtle {
    constructor(pos = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0), up = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 1, 0), forward = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 1), left = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(1, 0, 0), height = 0) {
        this.Height = 0;
        this.Depth = 0;
        this.pos = pos;
        this.Up = up;
        this.Forward = forward;
        this.Left = left;
        this.Height = height;
    }
    moveForward(distance) {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].scaleAndAdd(this.pos, this.pos, this.Forward, distance);
        this.Depth++;
    }
    applyUpRot(degrees) {
        let rad = degrees * Math.PI / 180;
        let rotation = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create();
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].rotate(rotation, rotation, rad, this.Up);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].transformMat4(this.Forward, this.Forward, rotation);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].transformMat4(this.Left, this.Left, rotation);
    }
    applyLeftRot(degrees) {
        let rad = degrees * Math.PI / 180;
        let rotation = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create();
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].rotate(rotation, rotation, rad, this.Left);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].transformMat4(this.Forward, this.Forward, rotation);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].transformMat4(this.Up, this.Up, rotation);
    }
    applyForwardRot(degrees) {
        let rad = degrees * Math.PI / 180;
        let rotation = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].create();
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat4 */].rotate(rotation, rotation, rad, this.Forward);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].transformMat4(this.Left, this.Left, rotation);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].transformMat4(this.Up, this.Up, rotation);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Turtle;



/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n#define EPS 0.0001\r\n#define PI 3.1415962\r\n#define SHADOWMAP_SIZE 1024.0\r\n\r\nin vec4 fs_Pos;\r\nin vec4 fs_Nor;\r\nin vec4 fs_Col;\r\nin vec2 fs_UV;\r\n\r\nout vec4 fragColor[2]; \r\n\r\nuniform sampler2D AlbedoMap;\r\nuniform sampler2D SpecularMap;\r\nuniform sampler2D NormalMap;\r\n\r\nuniform samplerCube u_SkyCubeMap;\r\nuniform sampler2D u_ShadowMap;\r\n\r\nuniform mat4 u_Model;\r\nuniform mat4 u_ModelInvTr;  \r\nuniform mat4 u_ViewProj;\r\nuniform mat4 u_View;\r\nuniform vec3 u_CameraWPos; \r\nuniform mat4 u_InvViewProj;  \r\n\r\nuniform mat4 u_LightViewProj;\r\n\r\nuniform vec4 u_lightColor;\r\nuniform vec4 u_lightDirection;\r\n\r\nuniform float u_Time;\r\n\r\n\r\n\r\n\r\nfloat texture2DCompare(sampler2D depths, vec2 uv, vec2 offset, float compare){\r\n    float depth = texture(depths, uv+offset).r;\r\n    float bias = 0.0025;\r\n    //vec2 gradient = vec2(texture(depths, uv).g, texture(depths, uv).b);\r\n    compare = compare - bias;\r\n    if(depth <= compare)\r\n    \treturn 0.1;\r\n    else\r\n    \treturn 1.0;\r\n}\r\n\r\n// poisson disk for sampling\r\nconst vec2 poissonDisk[64] = vec2[](\r\n\tvec2( -0.04117257f, -0.1597612f ),\r\n\tvec2( 0.06731031f, -0.4353096f ),\r\n\tvec2( -0.206701f, -0.4089882f ),\r\n\tvec2( 0.1857469f, -0.2327659f ),\r\n\tvec2( -0.2757695f, -0.159873f ),\r\n\tvec2( -0.2301117f, 0.1232693f ),\r\n\tvec2( 0.05028719f, 0.1034883f ),\r\n\tvec2( 0.236303f, 0.03379251f ),\r\n\tvec2( 0.1467563f, 0.364028f ),\r\n\tvec2( 0.516759f, 0.2052845f ),\r\n\tvec2( 0.2962668f, 0.2430771f ),\r\n\tvec2( 0.3650614f, -0.1689287f ),\r\n\tvec2( 0.5764466f, -0.07092822f ),\r\n\tvec2( -0.5563748f, -0.4662297f ),\r\n\tvec2( -0.3765517f, -0.5552908f ),\r\n\tvec2( -0.4642121f, -0.157941f ),\r\n\tvec2( -0.2322291f, -0.7013807f ),\r\n\tvec2( -0.05415121f, -0.6379291f ),\r\n\tvec2( -0.7140947f, -0.6341782f ),\r\n\tvec2( -0.4819134f, -0.7250231f ),\r\n\tvec2( -0.7627537f, -0.3445934f ),\r\n\tvec2( -0.7032605f, -0.13733f ),\r\n\tvec2( 0.8593938f, 0.3171682f ),\r\n\tvec2( 0.5223953f, 0.5575764f ),\r\n\tvec2( 0.7710021f, 0.1543127f ),\r\n\tvec2( 0.6919019f, 0.4536686f ),\r\n\tvec2( 0.3192437f, 0.4512939f ),\r\n\tvec2( 0.1861187f, 0.595188f ),\r\n\tvec2( 0.6516209f, -0.3997115f ),\r\n\tvec2( 0.8065675f, -0.1330092f ),\r\n\tvec2( 0.3163648f, 0.7357415f ),\r\n\tvec2( 0.5485036f, 0.8288581f ),\r\n\tvec2( -0.2023022f, -0.9551743f ),\r\n\tvec2( 0.165668f, -0.6428169f ),\r\n\tvec2( 0.2866438f, -0.5012833f ),\r\n\tvec2( -0.5582264f, 0.2904861f ),\r\n\tvec2( -0.2522391f, 0.401359f ),\r\n\tvec2( -0.428396f, 0.1072979f ),\r\n\tvec2( -0.06261792f, 0.3012581f ),\r\n\tvec2( 0.08908027f, -0.8632499f ),\r\n\tvec2( 0.9636437f, 0.05915006f ),\r\n\tvec2( 0.8639213f, -0.309005f ),\r\n\tvec2( -0.03422072f, 0.6843638f ),\r\n\tvec2( -0.3734946f, -0.8823979f ),\r\n\tvec2( -0.3939881f, 0.6955767f ),\r\n\tvec2( -0.4499089f, 0.4563405f ),\r\n\tvec2( 0.07500362f, 0.9114207f ),\r\n\tvec2( -0.9658601f, -0.1423837f ),\r\n\tvec2( -0.7199838f, 0.4981934f ),\r\n\tvec2( -0.8982374f, 0.2422346f ),\r\n\tvec2( -0.8048639f, 0.01885651f ),\r\n\tvec2( -0.8975322f, 0.4377489f ),\r\n\tvec2( -0.7135055f, 0.1895568f ),\r\n\tvec2( 0.4507209f, -0.3764598f ),\r\n\tvec2( -0.395958f, -0.3309633f ),\r\n\tvec2( -0.6084799f, 0.02532744f ),\r\n\tvec2( -0.2037191f, 0.5817568f ),\r\n\tvec2( 0.4493394f, -0.6441184f ),\r\n\tvec2( 0.3147424f, -0.7852007f ),\r\n\tvec2( -0.5738106f, 0.6372389f ),\r\n\tvec2( 0.5161195f, -0.8321754f ),\r\n\tvec2( 0.6553722f, -0.6201068f ),\r\n\tvec2( -0.2554315f, 0.8326268f ),\r\n\tvec2( -0.5080366f, 0.8539945f )\r\n);\r\n\r\nfloat rand(vec4 co){\r\n\tfloat dot_product = dot(co, vec4(12.9898,78.233,45.164,94.673));\r\n\treturn fract(sin(dot_product) * 43758.5453);\r\n}\r\n\r\n\r\n\r\n#define PCF_NUM_SAMPLES 4\r\n\r\nfloat PCF(sampler2D depths, float filterRadius, vec2 uv, float compare){\r\n    float result = 0.0;\r\n    float theta = rand(vec4(uv, gl_FragCoord.xy));\r\n\tmat2 rotation = mat2(vec2(cos(theta), sin(theta)), vec2(-sin(theta), cos(theta)));\r\n\tfor (int i = 0; i < PCF_NUM_SAMPLES; i++) {\r\n\t\tvec2 offset = (rotation*poissonDisk[i]) * filterRadius;\r\n\t\tresult += texture2DCompare(depths, uv, offset, compare);\r\n\t\t//float gauss = gaussian(filterRadius, length(offset));\r\n\t}\r\n\treturn result / float(PCF_NUM_SAMPLES);\r\n}\r\n\r\nfloat getShadow(vec4 lightSpacePos){\r\n\r\n\t\r\n\tfloat shadow = PCF(u_ShadowMap, \r\n\t\t1.0/SHADOWMAP_SIZE*4.0, \r\n\t\tvec2((lightSpacePos.x + 1.0) * 0.5, ( lightSpacePos.y + 1.0) * 0.5 ),\r\n\t\tlightSpacePos.z);\r\n\t\r\n\t\r\n\t//float shadow = texture2DCompare(u_ShadowMap, vec2((lightSpacePos.x + 1.0) * 0.5, ( lightSpacePos.y + 1.0) * 0.5), vec2(0.0), lightSpacePos.z);\r\n\r\n\t// float shadow = VSM(u_ShadowMap, \r\n\t// \tvec2((lightSpacePos.x + 1.0) * 0.5, ( lightSpacePos.y + 1.0) * 0.5 ),\r\n\t// \tlightSpacePos.z - bias);\r\n\treturn shadow;\r\n}\r\n\r\n\r\n\r\n\r\nvec3 applyNormalMap(vec3 geomnor, vec3 normap) {\r\n    \r\n    vec3 up = normalize(vec3(0.001, 1, 0.001));\r\n    vec3 surftan = normalize(cross(geomnor, up));\r\n    vec3 surfbinor = cross(geomnor, surftan);\r\n    return normalize(normap.y * surftan + normap.x * surfbinor + normap.z * geomnor);\r\n}\r\n\r\nvec2 LightingFunGGX_FV(float dotLH, float roughness)\r\n{\r\n\tfloat alpha = roughness*roughness;\r\n\r\n\t//F\r\n\tfloat F_a, F_b;\r\n\tfloat dotLH5 = pow(clamp(1.0f - dotLH, 0.0f, 1.0f), 5.0f);\r\n\tF_a = 1.0f;\r\n\tF_b = dotLH5;\r\n\r\n\t//V\r\n\tfloat vis;\r\n\tfloat k = alpha * 0.5f;\r\n\tfloat k2 = k*k;\r\n\tfloat invK2 = 1.0f - k2;\r\n\tvis = 1.0f/(dotLH*dotLH*invK2 + k2);\r\n\r\n\treturn vec2((F_a - F_b)*vis, F_b*vis);\r\n}\r\n\r\nfloat LightingFuncGGX_D(float dotNH, float roughness)\r\n{\r\n\tfloat alpha = roughness*roughness;\r\n\tfloat alphaSqr = alpha*alpha;\r\n\tfloat denom = dotNH * dotNH * (alphaSqr - 1.0f) + 1.0f;\r\n\r\n\treturn alphaSqr / (PI*denom*denom);\r\n}\r\n\r\nvec3 GGX_Spec(vec3 Normal, vec3 HalfVec, float Roughness, vec3 BaseColor, vec3 SpecularColor, vec2 paraFV)\r\n{\r\n\tfloat NoH = clamp(dot(Normal, HalfVec), 0.0, 1.0);\r\n\r\n\tfloat D = LightingFuncGGX_D(NoH * NoH * NoH * NoH, Roughness);\r\n\tvec2 FV_helper = paraFV;\r\n\r\n\tvec3 F0 = SpecularColor;\r\n\tvec3 FV = F0*FV_helper.x + vec3(FV_helper.y, FV_helper.y, FV_helper.y);\r\n\t\r\n\treturn D * FV;\r\n}\r\n\r\nfloat LinearDepth(float d, float f)\r\n{\r\n\t//float f= 1000.0;\r\n\tfloat n = 0.1;\r\n\treturn (2.0 * n) / (f + n - d * (f - n));\r\n}\r\n\r\nvoid main() {\r\n \r\n\tvec4 Albedo = texture(AlbedoMap, fs_UV);\r\n\r\n    if(Albedo.a < 0.2)\r\n        discard;\r\n\r\n    // fragment info is in view space\r\n    mat3 invTranspose = mat3(u_ModelInvTr);    \r\n    vec4 vertexNormal = vec4(invTranspose * vec3(fs_Nor), 0);\r\n\r\n    vec4 Pos_SS = u_ViewProj * u_Model * fs_Pos;\r\n    Pos_SS /= Pos_SS.w;\r\n\r\n    float Depth = Pos_SS.z;\t\r\n\r\n    vec3 col = Albedo.rgb;\r\n    col = pow(col, vec3(2.2));\r\n\r\n\tvec3 waterNormal;\r\n\tbool bWater = false;\r\n\r\n\tif(Albedo.a < 0.6) // Water\r\n\t{\r\n\t\tvec4 normalInfo0 = texture(NormalMap, fs_UV + vec2(u_Time * 0.1, u_Time * 0.1));   \r\n  \t \tvec4 normalInfo1 = texture(NormalMap, fs_UV + vec2(u_Time * 0.076, u_Time * -0.0316));\r\n   \t \tvec4 normalInfo2 = texture(NormalMap, fs_UV - vec2(u_Time * 0.0941, u_Time * 0.07831));\r\n\r\n\t\twaterNormal = vec3( ( (normalInfo0.x * normalInfo2.y) - 0.5) * 2.0 , ((normalInfo1.y * normalInfo2.z) - 0.5) * 2.0, 20.0);\r\n\t\tbWater = true;\r\n\t}\r\n\telse // Glass\r\n\t{\r\n\t\twaterNormal = normalize( (texture(NormalMap, fs_UV).xyz * 2.0) - vec3(1.0) );\r\n\t}\r\n\r\n    vec3 worldNormal = applyNormalMap(vertexNormal.xyz, waterNormal);\r\n\r\n\r\n\r\n\t// read from GBuffers\r\n\tvec4 albedo = vec4(col.xyz, Depth);\r\n\tvec4 specular = texture(SpecularMap, fs_UV);\r\n\tvec4 normal = vec4(worldNormal, 0.0);\r\n\r\n\tfloat Roughness = specular.w;\r\n\tRoughness = clamp(Roughness, 0.05, 0.95);\r\n\r\n\t\r\n\t\r\n\r\n\tfloat depth = albedo.w;\r\n\r\n    vec4 worldPos = u_Model * fs_Pos;\r\n\r\n\tvec3 viewVec = normalize(u_CameraWPos - worldPos.xyz);\r\n\t\r\n\r\n\tvec3 reflVec = reflect(-viewVec, normal.xyz);\r\n\tvec4 skycol = texture(u_SkyCubeMap, reflVec);\r\n    skycol = pow(skycol, vec4(2.2));\r\n\r\n\tvec3 fogColor = skycol.xyz * 0.2;\r\n\r\n\tif(bWater)\r\n\t\tskycol *= 0.0;\r\n\telse\r\n\t\tskycol *= 0.3;\r\n\t\r\n\tvec4 lightSpacePos = vec4(0.0);\r\n\tif(depth >= 1.0) //SkyBox\r\n\t{\t\t\r\n\t\tfragColor[0] = skycol;\r\n        fragColor[0].w =  bWater ? 21.0 : 11.0;\r\n        fragColor[1] = vec4(normal.xyz, Roughness);\r\n\t}\r\n\telse\r\n\t{\r\n\t\tlightSpacePos = u_LightViewProj * worldPos;\r\n\t\t\tlightSpacePos /= lightSpacePos.w;\r\n\t\tfloat shadow = getShadow(lightSpacePos);\r\n\r\n\t\tvec4 diffuseColor = vec4(albedo.xyz, 1.0);\r\n\r\n\t\tfloat diffuseTerm = clamp( dot(u_lightDirection.xyz, normal.xyz), 0.0, 1.0);\r\n\t\t\r\n\t\tvec3 halfVec = normalize(viewVec + u_lightDirection.xyz);\r\n\t\t\r\n\t\tfloat LoH = clamp(dot( u_lightDirection.xyz, halfVec ), 0.0, 1.0);\r\n\r\n\t\tvec3 specularTerm = vec3(0.0);\r\n\t\tvec3 SpecularColor = specular.xyz;\r\n\t\t\r\n\t\tfloat energyConservation = 1.0 - Roughness * Roughness;\r\n\r\n\t\tfloat waterRoughness = 0.4;\r\n\r\n\t\tspecularTerm = GGX_Spec(normal.xyz, halfVec, (bWater ? waterRoughness :Roughness), diffuseColor.xyz, SpecularColor, LightingFunGGX_FV(LoH, (bWater ? waterRoughness :Roughness))) * (bWater ? 1.0 : energyConservation);\r\n\r\n\t\tif(bWater)\r\n\t\t{\r\n\t\t\tspecularTerm *= 6.0;\r\n\t\t}\r\n\r\n\t\tfloat ambientTerm = 0.1;\r\n\r\n\t\tvec4 pbrColor = vec4( (diffuseColor.rgb + SpecularColor * specularTerm) * (diffuseTerm) *  smoothstep( 0.1, 0.5, shadow), diffuseColor.a);\r\n\t\t//pbrColor.xyz += diffuseColor.rgb * ambientTerm;\r\n\t\tpbrColor.xyz += diffuseColor.rgb * ambientTerm * (smoothstep( 0.0, 0.5, diffuseTerm) + 0.5);\r\n\t\tpbrColor.xyz *= u_lightColor.xyz * u_lightColor.a;\r\n\t\t\r\n\t\tif(bWater)\r\n\t\t{\r\n\t\t\t//fresnel\r\n\t\t\tfloat NoV = clamp( dot(viewVec.xyz, worldNormal), 0.0, 1.0);\r\n\t\t\tNoV = 1.0 - NoV;\r\n\t\t\tfloat wNoV = pow(NoV, 10.0);\r\n\t\t\tpbrColor.xyz *= wNoV;\r\n\r\n\r\n\t\t\tfloat LoV = clamp( dot(-viewVec.xyz, u_lightDirection.xyz), 0.0, 1.0);\r\n\t\t\tfloat fNoV = pow( LoV, 40.0);\r\n\r\n\t\t\tpbrColor.xyz += fNoV * 30.0;\r\n\t\t}\r\n\t\t\r\n\r\n        float Opacity = 0.1;\t\t\r\n\r\n\t\tfragColor[0] = vec4( (pbrColor.xyz) * Opacity, bWater ? (Depth + 20.0) : (Depth + 10.0));\r\n\t\t\r\n\t\t\r\n\r\n\t\tif(bWater)\r\n\t\t{\t\t\r\n\t\t\tfloat linearDepth = LinearDepth(Depth, 1000.0);\t\r\n\t\t\tfragColor[0].xyz = mix(fragColor[0].xyz, fogColor, linearDepth * linearDepth );\r\n\t\t\tfragColor[1] = vec4(normal.xyz, 0.05);\r\n\t\t}\r\n\t\telse\r\n\t\t{\r\n\t\t\tfloat linearDepth = LinearDepth(Depth, 200.0);\r\n\t\t\tfragColor[0].xyz = mix(fragColor[0].xyz, fogColor, pow(linearDepth, 2.0) );\r\n\t\t\tfragColor[1] = vec4(normal.xyz, Roughness);\r\n\t\t}\r\n        \r\n\t\t\r\n\t}\r\n}\r\n"

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n#define M_PI 3.1415926535897932384626433832795\r\n\r\nuniform float u_deltaTime;\r\nuniform float u_Time;\r\n\r\nuniform vec3 u_CameraWPos;\r\nuniform vec4 u_particleInfo;\r\n\r\n/////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r\n\r\n\r\nfloat hash(float n) { return fract(sin(n) * 1e4); }\r\nfloat hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }\r\nfloat noise(float x) { float i = floor(x); float f = fract(x); float u = f * f * (3.0 - 2.0 * f); return mix(hash(i), hash(i + 1.0), u); }\r\nfloat noise(vec2 x) { vec2 i = floor(x); vec2 f = fract(x); float a = hash(i); float b = hash(i + vec2(1.0, 0.0)); float c = hash(i + vec2(0.0, 1.0)); float d = hash(i + vec2(1.0, 1.0)); vec2 u = f * f * (3.0 - 2.0 * f); return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y; }\r\n\r\nfloat rand(vec2 co){\r\n    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\r\n}\r\n\r\n/////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r\n\r\n\r\nlayout(location = 0) in vec4 i_position;\r\nlayout(location = 1) in vec4 i_velocity;\r\nlayout(location = 2) in vec4 i_color;\r\nlayout(location = 3) in vec4 i_attract;\r\n\r\nout vec4 o_position;\r\nout vec4 o_velocity;            \r\nout vec4 o_color;\r\nout vec4 o_attract;\r\n\r\nconst int rainIndex = 0;\r\n\r\n\r\nvec2 squareToDiskConcentric(vec2 xi) \r\n{\r\n    float phi;\r\n    float radius;\r\n\r\n        float a = 2.0*xi.x-1.0; // (a,b) is now on [-1,1]ˆ2\r\n        float b = 2.0*xi.y-1.0;\r\n\r\n        if (a > -b) // region 1 or 2\r\n        {\r\n            if (a > b) // region 1, also |a| > |b|\r\n            {\r\n                radius = a;\r\n                phi = (M_PI*0.25) * (b/a);\r\n            }\r\n            else // region 2, also |b| > |a|\r\n            {\r\n                radius = b;\r\n                phi = (M_PI*0.25) * (2.0 - (a/b));\r\n            }\r\n        }\r\n        else // region 3 or 4\r\n        {\r\n            if (a < b) // region 3, also |a| >= |b|, a != 0\r\n            {\r\n                radius = -a;\r\n                phi = (M_PI*0.25 ) * (4.0 + (b/a));\r\n            }\r\n            else // region 4, |b| >= |a|, but a==0 and b==0 could occur.\r\n            {\r\n                radius = -b;\r\n                if (b != 0.0)\r\n                    phi = (M_PI*0.25 ) * (6.0 - (a/b));\r\n                else\r\n                    phi = 0.0;\r\n            }\r\n        }\r\n\r\n        return vec2(radius * cos(phi), radius * sin(phi));\r\n}\r\n\r\nmat4 rotationMatrix(vec3 axis, float angle)\r\n{\r\n    axis = normalize(axis);\r\n    float s = sin(angle);\r\n    float c = cos(angle);\r\n    float oc = 1.0 - c;\r\n    \r\n    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,\r\n                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,\r\n                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,\r\n                0.0,                                0.0,                                0.0,                                1.0);\r\n}\r\n\r\nvoid main()\r\n{\r\n    o_color = i_color;\r\n    o_color.a = float(gl_VertexID) + 0.1;\r\n\r\n    o_attract = i_attract;\r\n    o_velocity = i_velocity;\r\n    o_position = i_position;\r\n\r\n    float speed;\r\n    \r\n\r\n    if(u_particleInfo.x < 1.5)//rain\r\n        {\r\n            speed = 300.0;\r\n            o_position.y -= u_deltaTime * speed;\r\n            if(o_position.y < -10.0)\r\n            {\r\n                o_position.x = u_CameraWPos.x + o_position.w;\r\n                o_position.z = u_CameraWPos.z + o_attract.w;\r\n                o_position.y = 150.0 + o_velocity.w;\r\n            }\r\n        }\r\n        else if(u_particleInfo.x < 2.5)//snow\r\n        {\r\n            speed = 20.0;\r\n            o_position.y -= u_deltaTime * speed;\r\n            o_position.x += u_deltaTime * (speed*0.2*sin(u_Time+rand(vec2(gl_VertexID,gl_VertexID+8000))*M_PI));\r\n            o_position.z += u_deltaTime * (speed*0.2*cos(u_Time+rand(vec2(gl_VertexID+8000,gl_VertexID))*M_PI));\r\n            if(o_position.y < -10.0)\r\n            {\r\n                o_position.x = u_CameraWPos.x + o_position.w;\r\n                o_position.z = u_CameraWPos.z + o_attract.w;\r\n                o_position.y = 150.0*rand(vec2(gl_VertexID,gl_VertexID)) - 50.0 + o_velocity.w;\r\n            }\r\n        }\r\n    \r\n    \r\n}\r\n"

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\n\r\nuniform mat4 u_ViewProj;\r\nuniform float u_Time;\r\nuniform vec4 u_particleInfo;\r\n\r\nuniform mat4 u_View; // Used for rendering particles as billboards (quads that are always looking at the camera)\r\n// gl_Position = center + vs_Pos.x * camRight + vs_Pos.y * camUp;\r\n\r\nin vec4 vs_Pos; // Non-instanced; each particle is the same quad drawn in a different place\r\nin vec4 vs_Col; // An instanced rendering attribute; each particle instance has a different color\r\nin vec4 vs_Nor;\r\nin vec2 vs_UV;\r\nin vec4 vs_Translate; // Another instance rendering attribute used to position each quad instance in the scene\r\n\r\n\r\nout vec4 fs_Col;\r\nout vec4 fs_Pos;\r\nout vec2 fs_UV;\r\nout vec2 fs_UV_SS;\r\n\r\n\r\nconst int rainIndex = 0;\r\n\r\nvoid main()\r\n{\r\n    fs_Col = vs_Col;\r\n    fs_Pos = vs_Pos;\r\n    fs_UV = vs_UV;\r\n\r\n    vec3 offset = vs_Translate.xyz;\r\n    \r\n    mat3 CameraAxes;\r\n\r\n    //Right\r\n    CameraAxes[0][0] = u_View[0][0];\r\n    CameraAxes[0][1] = u_View[1][0];\r\n    CameraAxes[0][2] = u_View[2][0];\r\n    //Up\r\n    CameraAxes[1][0] = u_View[0][1];\r\n    CameraAxes[1][1] = u_View[1][1];\r\n    CameraAxes[1][2] = u_View[2][1];\r\n\r\n     //Forward\r\n    CameraAxes[2][0] = u_View[0][2];\r\n    CameraAxes[2][1] = u_View[1][2];\r\n    CameraAxes[2][2] = u_View[2][2];\r\n\r\n    vec3 billboardPos;\r\n\r\n    \r\n    if(u_particleInfo.x == 1.0)\r\n        //Rain \r\n            billboardPos = offset + vs_Pos.x * CameraAxes[0] + vs_Pos.y * vec3(0.0, 1.4, 0.0);\r\n        else\r\n        //Snow\r\n            billboardPos = offset + vs_Pos.x *  CameraAxes[0] + vs_Pos.y * CameraAxes[1];\r\n    \r\n\r\n    gl_Position = u_ViewProj * vec4(billboardPos, 1.0);\r\n\r\n    vec4 normalizedPos = gl_Position / gl_Position.w;\r\n\r\n    fs_UV_SS = vec2( (normalizedPos.x + 1.0)* 0.5, (normalizedPos.y + 1.0) * 0.5);\r\n    fs_Pos.a = normalizedPos.z;\r\n}\r\n"

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\nuniform sampler2D u_frame0; //Scene\r\nuniform mat4 u_View; \r\nuniform mat4 u_InvViewProj; \r\nuniform vec4 u_particleInfo;\r\n\r\nin vec4 fs_Col;\r\nin vec4 fs_Pos;\r\nin vec2 fs_UV;\r\nin vec2 fs_UV_SS;\r\n\r\nout vec4 out_Col;\r\n\r\nconst int rainIndex = 0;\r\nconst int rainStainIndex = 0;\r\n\r\nfloat LinearDepth(float d, float f)\r\n{\r\n\tfloat n = 0.1;\r\n\treturn (2.0 * n) / (f + n - d * (f - n));\r\n}\r\n\r\nvoid main()\r\n{\r\n    float sceneDepth = texture(u_frame0, fs_UV_SS).a;\r\n\r\n    if(sceneDepth > 19.0)\r\n\t{\r\n\t\tsceneDepth -= 20.0;\r\n\t}\r\n\telse if(sceneDepth > 9.0)\r\n\t{\r\n\t\tsceneDepth -= 10.0;\r\n\t}\r\n\r\n    float PerticleIndex = fs_Col.a;\r\n    float particleDepth = fs_Pos.a;\r\n\r\n    if(sceneDepth > particleDepth)\r\n    {\r\n        if(PerticleIndex >= float(rainIndex) )\r\n        {\r\n            //Forward\r\n            float dist;\r\n            if(u_particleInfo.x == 1.0)\r\n            //Rain\r\n                dist = pow(smoothstep(0.0, 1.0, 1.0 - pow(fs_Pos.x * 10.0, 2.0)), 10.0) * clamp(1.0 - pow(fs_Pos.y, 4.0 ), 0.0, 1.0);\r\n            else if(u_particleInfo.x == 2.0){\r\n            //Snow\r\n                dist = 1.0 - (length(fs_Pos.xyz) * 3.0);\r\n            }\r\n            float closeFade = clamp(LinearDepth(particleDepth, 1000.0) * 100.0, 0.0, 1.0);\r\n\r\n            out_Col = vec4(0.2, 0.2, 0.2, 0.0) * dist * closeFade;\r\n        }\r\n\r\n        float diff = clamp( LinearDepth(sceneDepth, 1000.0) - LinearDepth(particleDepth, 1000.0), 0.0, 1.0);\r\n             out_Col.xyz *= pow(smoothstep(0.0, 1.0, diff), 0.3);\r\n\r\n       \r\n        out_Col.a = particleDepth;\r\n\r\n        \r\n    }\r\n    else\r\n    {   \r\n        out_Col = vec4(0.0);\r\n    }\r\n\r\n    float linearDepth = LinearDepth(particleDepth, 50.0);\r\n\tout_Col.a *= 1.0 - pow(linearDepth, 2.0);\r\n\r\n   \r\n\r\n    \r\n    out_Col = clamp(out_Col, 0.0, 1.0);\r\n}\r\n"

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\nprecision highp float;\n\nuniform float u_deltaTime;\nuniform float u_Time;\n\nuniform vec3 u_CameraWPos;\nuniform vec4 u_particleInfo;\n\nlayout(location = 0) in vec4 i_position;\nlayout(location = 1) in vec4 i_velocity;\nlayout(location = 2) in vec4 i_color;\nlayout(location = 3) in vec4 i_attract;\n\nout vec4 o_position;\nout vec4 o_velocity;            \nout vec4 o_color;\nout vec4 o_attract;\n\nmat4 rotationMatrix(vec3 axis, float angle)\n{\n    axis = normalize(axis);\n    float s = sin(angle);\n    float c = cos(angle);\n    float oc = 1.0 - c;\n    \n    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,\n                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,\n                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,\n                0.0,                                0.0,                                0.0,                                1.0);\n}\n\nvoid main()\n{   \n    o_position = i_position;\n    o_velocity = i_velocity;\n    o_attract = i_attract;\n\n    o_color = i_color;\n    o_color.a = float(gl_VertexID) + 0.1;\n\n    float speed = 20.0;\n   \n\n\n    if(u_particleInfo.z < 1.0) //false\n    {\n        if(o_position.y > 200.0)\n        {\n            o_position.y = -10.0 + o_velocity.w;\n        }\n        else if(o_position.y < 0.0)\n        {\n\n        }\n        else\n        {\n            o_position.y += u_deltaTime * speed;\n        }     \n    }\n    else //true\n    {\n        if(o_position.y > 200.0)\n        {\n            o_position.y -= 220.0;\n            o_position.y += u_deltaTime * speed;\n        }\n        else\n        {\n            o_position.y += u_deltaTime * speed;\n        }\n    }\n}\n"

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\n\nuniform mat4 u_ViewProj;\nuniform float u_Time;\n\nuniform mat4 u_View; // Used for rendering particles as billboards (quads that are always looking at the camera)\n// gl_Position = center + vs_Pos.x * camRight + vs_Pos.y * camUp;\n\nin vec4 vs_Pos; // Non-instanced; each particle is the same quad drawn in a different place\nin vec4 vs_Col; // An instanced rendering attribute; each particle instance has a different color\nin vec4 vs_Nor;\nin vec2 vs_UV;\nin vec4 vs_Translate; // Another instance rendering attribute used to position each quad instance in the scene\n\n\nout vec4 fs_Col;\nout vec4 fs_Pos;\nout vec2 fs_UV;\nout vec2 fs_UV_SS;\n\nvoid main()\n{\n    fs_Col = vs_Col;\n    fs_Pos = vs_Pos;\n    fs_UV = vs_UV;\n\n    vec3 offset = vs_Translate.xyz;\n\n    gl_Position = u_ViewProj * vec4(offset + vs_Pos.xyz, 1.0);\n\n    vec4 normalizedPos = gl_Position / gl_Position.w;\n    \n    fs_UV_SS = vec2( (normalizedPos.x + 1.0)* 0.5, (normalizedPos.y + 1.0) * 0.5);\n    fs_Pos.a = normalizedPos.z;\n    fs_Pos.xyz += offset;\n}\n"

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\nprecision highp float;\n\nuniform sampler2D u_frame0; //Scene\nuniform sampler2D u_frame1; //Albedo\n\nuniform mat4 u_View; \nuniform mat4 u_InvViewProj; \n\nin vec4 fs_Col;\nin vec4 fs_Pos;\nin vec2 fs_UV;\nin vec2 fs_UV_SS;\n\nout vec4 out_Col;\n\nfloat LinearDepth(float d, float f)\n{\n\t//float f= 1000.0;\n\tfloat n = 0.1;\n\treturn (2.0 * n) / (f + n - d * (f - n));\n}\n\nvoid main()\n{\n    float sceneDepth = texture(u_frame0, fs_UV_SS).a;\n    float particleDepth = fs_Pos.a;\n\n    if(sceneDepth > 19.0)\n\t{\n\t\tsceneDepth -= 20.0;\n\t}\n\telse if(sceneDepth > 9.0)\n\t{\n\t\tsceneDepth -= 10.0;\n\t}\n\n    if(sceneDepth > particleDepth)\n    {\n        out_Col.xyz = texture(u_frame1, fs_UV).xyz;\n\n        out_Col.xyz += pow(out_Col.xyz, vec3(3.0)) * 3.0;\n\n        if(fs_Pos.y < 5.0)\n        {\n            out_Col.a = clamp(fs_Pos.y / 5.0 , 0.0, 1.0);\n        }\n        else if(fs_Pos.y > 170.0)\n        {\n            out_Col.a = clamp( (190.0 - fs_Pos.y),  0.0, 20.0) / 20.0;\n        }\n        else\n            out_Col.a = 1.0;\n\n        out_Col.a = min(out_Col.a, 0.9);\n    }\n    else\n    {   \n        out_Col = vec4(0.0);\n    }\n\n    float linearDepth = LinearDepth(particleDepth, 50.0);\n\tout_Col.a *= 1.0 - pow(linearDepth, 2.0);\n}\n"

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\nprecision highp float;\n\nuniform float u_deltaTime;\nuniform float u_Time;\n\nuniform vec3 u_CameraWPos;\nuniform vec4 u_particleInfo;\n\nlayout(location = 0) in vec4 i_position;\nlayout(location = 1) in vec4 i_velocity;\nlayout(location = 2) in vec4 i_color;\nlayout(location = 3) in vec4 i_attract;\n\nout vec4 o_position;\nout vec4 o_velocity;            \nout vec4 o_color;\nout vec4 o_attract;\n\nvoid main()\n{   \n    o_position = i_position;\n\n    float rad = i_position.a;\n    float radius = i_velocity.a;\n\n    float time = i_color.x < 0.0 ? u_Time : -u_Time;\n\n    float newRad = rad + time * i_velocity.x;\n    \n    o_position.x = sin(newRad) * radius;\n    o_position.z = cos(newRad) * radius;\n\n    o_velocity = i_velocity;\n    o_attract = i_attract;\n\n    o_color = i_color;\n\n    o_color.y = newRad;\n    \n}\n"

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\n\r\nuniform mat4 u_ViewProj;\r\nuniform float u_Time;\r\n\r\nuniform mat4 u_View; // Used for rendering particles as billboards (quads that are always looking at the camera)\r\n// gl_Position = center + vs_Pos.x * camRight + vs_Pos.y * camUp;\r\n\r\nin vec4 vs_Pos; // Non-instanced; each particle is the same quad drawn in a different place\r\nin vec4 vs_Col; // An instanced rendering attribute; each particle instance has a different color\r\nin vec4 vs_Nor;\r\nin vec2 vs_UV;\r\nin vec4 vs_Translate; // Another instance rendering attribute used to position each quad instance in the scene\r\n\r\n\r\nout vec4 fs_Col;\r\nout vec4 fs_Pos;\r\nout vec2 fs_UV;\r\nout vec2 fs_UV_SS;\r\n\r\nmat4 rotationMatrix(vec3 axis, float angle)\r\n{\r\n    axis = normalize(axis);\r\n    float s = sin(angle);\r\n    float c = cos(angle);\r\n    float oc = 1.0 - c;\r\n    \r\n    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,\r\n                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,\r\n                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,\r\n                0.0,                                0.0,                                0.0,                                1.0);\r\n}\r\n\r\nvoid main()\r\n{\r\n    fs_Col = vs_Col;\r\n    \r\n    fs_UV = vs_UV;\r\n\r\n    vec3 offset = vs_Translate.xyz;\r\n\r\n    float dir =  vs_Col.x < 0.0 ? vs_Col.y + 3.141592 : vs_Col.y;\r\n\r\n    fs_Pos = vs_Pos * rotationMatrix( vec3(0.0, 1.0, 0.0), dir);\r\n\r\n    gl_Position = u_ViewProj  *  vec4(offset + fs_Pos.xyz * fs_Col.a, 1.0);\r\n\r\n    vec4 normalizedPos = gl_Position / gl_Position.w;\r\n    \r\n    fs_UV_SS = vec2( (normalizedPos.x + 1.0)* 0.5, (normalizedPos.y + 1.0) * 0.5);\r\n    fs_Pos.a = normalizedPos.z;\r\n    fs_Pos.xyz += offset;\r\n}\r\n"

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\nuniform sampler2D u_frame0; //Scene\r\nuniform sampler2D u_frame1; //Albedo\r\n\r\nuniform mat4 u_View; \r\nuniform mat4 u_InvViewProj; \r\n\r\nin vec4 fs_Col;\r\nin vec4 fs_Pos;\r\nin vec2 fs_UV;\r\nin vec2 fs_UV_SS;\r\n\r\nout vec4 out_Col;\r\n\r\nfloat LinearDepth(float d, float f)\r\n{\r\n\t//float f= 1000.0;\r\n\tfloat n = 0.1;\r\n\treturn (2.0 * n) / (f + n - d * (f - n));\r\n}\r\n\r\nvoid main()\r\n{\r\n    float sceneDepth = texture(u_frame0, fs_UV_SS).a;\r\n    float particleDepth = fs_Pos.a;\r\n\r\n    if(sceneDepth > 19.0)\r\n\t{\r\n\t\tsceneDepth -= 20.0;\r\n\t}\r\n\telse if(sceneDepth > 9.0)\r\n\t{\r\n\t\tsceneDepth -= 10.0;\r\n\t}\r\n\r\n    if(sceneDepth > particleDepth)\r\n    {\r\n        out_Col.xyz = texture(u_frame1, fs_UV).xyz * 0.5;\r\n        float linearDepth = LinearDepth(particleDepth, 1000.0);\r\n\t    out_Col.a = 1.0 - linearDepth*linearDepth;\r\n\r\n    }\r\n    else\r\n    {   \r\n        out_Col = vec4(0.0);\r\n    }\r\n\r\n    \r\n}\r\n"

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\n#define PI 3.1415926\r\n\r\nuniform float u_deltaTime;\r\nuniform float u_Time;\r\n\r\nuniform vec3 u_CameraWPos;\r\nuniform vec4 u_particleInfo;\r\n\r\nlayout(location = 0) in vec4 i_position;\r\nlayout(location = 1) in vec4 i_velocity;\r\nlayout(location = 2) in vec4 i_color;\r\nlayout(location = 3) in vec4 i_attract;\r\n\r\nout vec4 o_position;\r\nout vec4 o_velocity;            \r\nout vec4 o_color;\r\nout vec4 o_attract;\r\n\r\nmat4 rotationMatrix(vec3 axis, float angle)\r\n{\r\n    axis = normalize(axis);\r\n    float s = sin(angle);\r\n    float c = cos(angle);\r\n    float oc = 1.0 - c;\r\n    \r\n    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,\r\n                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,\r\n                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,\r\n                0.0,                                0.0,                                0.0,                                1.0);\r\n}\r\n\r\nvec2 rotate2D_Axis_Scale(vec2 v, float a, vec2 axis, float scale) {\r\n    float s = sin(a);\r\n    float c = cos(a);\r\n    mat2 m = mat2(c, -s, s, c);\r\n    return axis + m * normalize(v-axis) * scale;\r\n}\r\n\r\nfloat rand(vec2 co){\r\n    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\r\n}\r\n\r\nvoid main()\r\n{   \r\n    o_position = i_position;\r\n    o_velocity = i_velocity;\r\n    o_attract = i_attract;\r\n\r\n    o_color = i_color;\r\n    o_color.a = float(gl_VertexID) + 0.1;\r\n\r\n    float speed = 10.0;\r\n   \r\n\r\n\r\n    if(u_particleInfo.z < 1.0) //false\r\n    {\r\n        if(o_position.y > 70.0)\r\n        {\r\n            o_position.y = 0.0 + o_velocity.w;\r\n        }\r\n        else if(o_position.y < 0.0)\r\n        {\r\n\r\n        }\r\n        else\r\n        {\r\n            o_position.y += u_deltaTime * speed;\r\n            float radius = ((1.0+sin(u_Time*PI/2.0+o_velocity.z))/2.0 + 1.0)*o_velocity.y * pow(clamp(o_position.y/100.0+0.75, 0.0, 2.0),2.0);\r\n            o_position.xz = rotate2D_Axis_Scale(o_position.xz, u_deltaTime*o_velocity.x, vec2(0.0,252.0), radius);\r\n        }     \r\n    }\r\n    else //true\r\n    {\r\n        if(o_position.y > 70.0)\r\n        {\r\n            o_position.y -= 70.0;\r\n            o_position.y += u_deltaTime * speed;\r\n            float radius = ((1.0+sin(u_Time*PI/2.0+o_velocity.z))/2.0 + 1.0)*o_velocity.y * pow(clamp(o_position.y/100.0+0.75, 0.0, 2.0),2.0);\r\n            o_position.xz = rotate2D_Axis_Scale(o_position.xz, u_deltaTime*o_velocity.x, vec2(0.0,252.0), radius);\r\n        }\r\n        else\r\n        {\r\n            o_position.y += u_deltaTime * speed;\r\n            float radius = ((1.0+sin(u_Time*PI/2.0+o_velocity.z))/2.0 + 1.0)*o_velocity.y * pow(clamp(o_position.y/100.0+0.75, 0.0, 2.0),2.0);\r\n            o_position.xz = rotate2D_Axis_Scale(o_position.xz, u_deltaTime*o_velocity.x, vec2(0.0,252.0), radius);\r\n        }\r\n    }\r\n}\r\n"

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\n\r\nuniform mat4 u_ViewProj;\r\nuniform float u_Time;\r\n\r\nuniform mat4 u_View; // Used for rendering particles as billboards (quads that are always looking at the camera)\r\n// gl_Position = center + vs_Pos.x * camRight + vs_Pos.y * camUp;\r\n#define PI 3.1415926\r\n\r\nin vec4 vs_Pos; // Non-instanced; each particle is the same quad drawn in a different place\r\nin vec4 vs_Col; // An instanced rendering attribute; each particle instance has a different color\r\nin vec4 vs_Nor;\r\nin vec2 vs_UV;\r\nin vec4 vs_Translate; // Another instance rendering attribute used to position each quad instance in the scene\r\n\r\n\r\nout vec4 fs_Col;\r\nout vec4 fs_Pos;\r\nout vec2 fs_UV;\r\nout vec2 fs_UV_SS;\r\nout float fs_Alpha;\r\n\r\nmat4 rotationMatrix(vec3 axis, float angle)\r\n{\r\n    axis = normalize(axis);\r\n    float s = sin(angle);\r\n    float c = cos(angle);\r\n    float oc = 1.0 - c;\r\n    \r\n    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,\r\n                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,\r\n                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,\r\n                0.0,                                0.0,                                0.0,                                1.0);\r\n}\r\n\r\nvoid main()\r\n{\r\n    fs_Col = vs_Col;\r\n    fs_UV = vs_UV;\r\n\r\n    vec3 offset = vs_Translate.xyz;\r\n\r\n    mat4 rotMat = rotationMatrix(vec3(0.0,1.0,0.0), u_Time*PI);\r\n    fs_Pos = rotMat*vs_Pos;\r\n\r\n    gl_Position = u_ViewProj * vec4(offset + fs_Pos.xyz, 1.0);\r\n\r\n    vec4 normalizedPos = gl_Position / gl_Position.w;\r\n    \r\n    fs_UV_SS = vec2( (normalizedPos.x + 1.0)* 0.5, (normalizedPos.y + 1.0) * 0.5);\r\n    fs_Pos.a = normalizedPos.z;\r\n    fs_Pos.xyz += offset;\r\n\r\n    if(vs_Translate.y < 20.0)\r\n    \tfs_Alpha = clamp((vs_Translate.y-10.0)/10.0,0.0,1.0);\r\n    else if(vs_Translate.y > 50.0)\r\n    \tfs_Alpha = clamp((70.0-vs_Translate.y)/20.0,0.0,1.0);\r\n    else\r\n    \tfs_Alpha = 1.0;\r\n}\r\n"

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\r\nprecision highp float;\r\n\r\nuniform sampler2D u_frame0; //Scene\r\nuniform sampler2D u_frame1; //Albedo\r\n\r\nuniform mat4 u_View; \r\nuniform mat4 u_InvViewProj; \r\n\r\nin vec4 fs_Col;\r\nin vec4 fs_Pos;\r\nin vec2 fs_UV;\r\nin vec2 fs_UV_SS;\r\nin float fs_Alpha;\r\n\r\nout vec4 out_Col;\r\n\r\nfloat LinearDepth(float d, float f)\r\n{\r\n\t//float f= 1000.0;\r\n\tfloat n = 0.1;\r\n\treturn (2.0 * n) / (f + n - d * (f - n));\r\n}\r\n\r\nvoid main()\r\n{\r\n    float sceneDepth = texture(u_frame0, fs_UV_SS).a;\r\n    float particleDepth = fs_Pos.a;\r\n    if(sceneDepth > 19.0)\r\n\t{\r\n\t\tsceneDepth -= 20.0;\r\n\t}\r\n\telse if(sceneDepth > 9.0)\r\n\t{\r\n\t\tsceneDepth -= 10.0;\r\n\t}\r\n\r\n    if(sceneDepth > particleDepth)\r\n    {\r\n        out_Col.xyz = texture(u_frame1, fs_UV).xyz;\r\n\r\n        out_Col.xyz += pow(out_Col.xyz, vec3(3.0)) * 3.0;\r\n\r\n        if(fs_Pos.y < 5.0)\r\n        {\r\n            out_Col.a = clamp(fs_Pos.y / 5.0 , 0.0, 1.0);\r\n        }\r\n        else if(fs_Pos.y > 170.0)\r\n        {\r\n            out_Col.a = clamp( (190.0 - fs_Pos.y),  0.0, 20.0) / 20.0;\r\n        }\r\n        else\r\n            out_Col.a = 1.0;\r\n\r\n        out_Col.a = min(out_Col.a, 0.9);\r\n    }\r\n    else\r\n    {   \r\n        out_Col = vec4(0.0);\r\n    }\r\n\r\n    float linearDepth = LinearDepth(particleDepth, 50.0);\r\n\tout_Col.a *= 1.0 - pow(linearDepth, 2.0);\r\n    out_Col.a *= fs_Alpha;\r\n}\r\n"

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\nprecision highp float;\n\nuniform float u_deltaTime;\nuniform float u_Time;\n\nuniform vec3 u_CameraWPos;\nuniform vec4 u_particleInfo;\n\nlayout(location = 0) in vec4 i_position;\nlayout(location = 1) in vec4 i_velocity;\nlayout(location = 2) in vec4 i_color;\nlayout(location = 3) in vec4 i_attract;\n\nout vec4 o_position;\nout vec4 o_velocity;            \nout vec4 o_color;\nout vec4 o_attract;\n\nvoid main()\n{   \n    o_position = i_position;\n    o_velocity = i_velocity;\n    o_attract = i_attract;\n\n    o_color = i_color;\n    o_color.a = float(gl_VertexID) + 0.1;\n\n    float speed = 400.0 * (i_velocity.x + 1.0);\n    o_position.z += u_deltaTime * speed;\n        \n    float MaxDist = 50000.0;\n\n    if(o_position.z > 40000.0)\n    {\n        o_color.xyz = vec3( 1.0 - (o_position.z - 40000.0) /(10000.0));\n    }\n    else if(o_position.z < -40000.0)\n    {\n        o_color.xyz = vec3( 1.0 + (o_position.z + 40000.0) /(10000.0));\n    }\n   \n    if(o_position.z > 50000.0)\n    {\n        o_position.z -= 100000.0;\n        o_color.xyz = vec3(0.0);\n    }\n   \n}\n"

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\n\nuniform mat4 u_View;\nuniform mat4 u_Proj;\nuniform mat4 u_ViewProj;\nuniform float u_Time;\n\nuniform vec3 u_CameraWPos;\n\nin vec4 vs_Pos; // Non-instanced; each particle is the same quad drawn in a different place\nin vec4 vs_Col; // An instanced rendering attribute; each particle instance has a different color\nin vec4 vs_Nor;\nin vec2 vs_UV;\nin vec4 vs_Translate; // Another instance rendering attribute used to position each quad instance in the scene\n\n\nout vec4 fs_Col;\nout vec4 fs_Pos;\nout vec2 fs_UV;\nout vec2 fs_UV_SS;\nout vec3 fs_billboardNormal;\n\nfloat LinearDepth(float d, float f)\n{\n\t\n\tfloat n = 0.1;\n\treturn (2.0 * n) / (f + n - d * (f - n));\n}\n\nvoid main()\n{\n    fs_Col = vs_Col;\n    fs_Pos = vs_Pos;\n    fs_UV = vs_UV;\n\n    vec3 offset = vs_Translate.xyz;\n\n    mat3 CameraAxes;\n\n    //Right\n    CameraAxes[0][0] = u_View[0][0];\n    CameraAxes[0][1] = u_View[1][0];\n    CameraAxes[0][2] = u_View[2][0];\n    //Up\n    CameraAxes[1][0] = u_View[0][1];\n    CameraAxes[1][1] = u_View[1][1];\n    CameraAxes[1][2] = u_View[2][1];\n\n    vec3 billboardPos;\n    \n    float scale =  vs_Translate.w * 0.01 + 4000.0;\n\n    vec4 depthPos = u_Proj * u_View * vec4(offset, 1.0);\n    depthPos /= depthPos.w;\n\n    scale *= (LinearDepth(depthPos.z, 1000000.0)* 10.0 + 1.0);    \n\n    billboardPos = offset + vs_Pos.x * scale * CameraAxes[0] + vs_Pos.y * scale * CameraAxes[1];\n\n    gl_Position =  u_Proj * u_View * vec4(billboardPos, 1.0);\n\n    vec4 normalizedPos = gl_Position / gl_Position.w;\n    \n    fs_UV_SS = (normalizedPos.xy + vec2(1.0))* 0.5;\n\n    fs_Pos.xyz = billboardPos;\n    fs_Pos.a = normalizedPos.z;\n\n    fs_billboardNormal =  normalize(vec3(u_CameraWPos - offset));\n}\n"

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = "#version 300 es\nprecision highp float;\n\nuniform sampler2D u_frame0; //Scene\nuniform sampler2D u_frame1; //Albedo\nuniform sampler2D u_frame2; //Normal\nuniform sampler2D u_frame3; //Noise\n\nuniform mat4 u_View; \nuniform mat4 u_InvViewProj; \n\nuniform vec4 u_lightDirection;\nuniform float u_Time;\n\nuniform vec3 u_CameraWPos;\n\nin vec4 fs_Col;\nin vec4 fs_Pos;\nin vec2 fs_UV;\nin vec2 fs_UV_SS;\nin vec3 fs_billboardNormal;\n\nout vec4 out_Col;\n\nvec3 applyNormalMap(vec3 geomnor, vec3 normap) {\n    \n    vec3 up = normalize(vec3(0.001, 1, 0.001));\n    vec3 surftan = normalize(cross(geomnor, up));\n    vec3 surfbinor = cross(geomnor, surftan);\n    return normalize(normap.y * surftan + normap.x * surfbinor + normap.z * geomnor);\n}\n\nvoid main()\n{\n    float sceneDepth = texture(u_frame0, fs_UV_SS).a;\n    //float particleDepth = fs_Pos.a;\n\n    if(sceneDepth > 19.0)\n\t{\n\t\tsceneDepth -= 20.0;\n\t}\n\telse if(sceneDepth > 9.0)\n\t{\n\t\tsceneDepth -= 10.0;\n\t}\n\n    if(sceneDepth >= 1.0)\n    {\n       vec3 viewVec = normalize(u_CameraWPos - fs_Pos.xyz);\n\n       int sprite = int( floor(fs_Col.a) ) % 8;\n       vec4 NoiseMap = texture(u_frame3, vec2(fs_UV.x + u_Time * 0.0983, fs_UV.y - u_Time * 0.0365));\n\n       vec2 Noise = NoiseMap.xy * 2.0 - vec2(1.0);\n       Noise *= 0.02;\n\n       vec2 TwickedUV = fs_UV + Noise;\n\n       out_Col.xyz = texture(u_frame1, vec2( (float(sprite) * 0.125) + (TwickedUV.x * 0.125)  , TwickedUV.y)  ).xyz;\n       vec3 normal = texture(u_frame2, vec2( (float(sprite) * 0.125) + (TwickedUV.x * 0.125)  , TwickedUV.y)  ).xyz;\n\n       normal = applyNormalMap(fs_billboardNormal, normalize(normal * 2.0 - 1.0));\n\n       float NoV = clamp( dot(normal, viewVec), 0.0, 1.0);\n\n       float NoL = smoothstep(-0.4, 1.0, abs(dot(normal, u_lightDirection.xyz)));\n\n       vec3 sliverLight = vec3(10.0);\n\n       out_Col.xyz *= fs_Col.xyz * mix(sliverLight, vec3(1.0, 0.6, 0.4) , pow(NoV, 1.5)) * NoL;\n       out_Col.a = 1.0;       \n       out_Col = clamp(out_Col, 0.0, 1.0);       \n    }\n    else\n    {   \n        out_Col = vec4(0.0);\n    }\n}\n"

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map