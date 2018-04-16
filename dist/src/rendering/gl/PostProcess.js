import { gl } from '../../globals';
import ShaderProgram, { Shader } from './ShaderProgram';
import Square from '../../geometry/Square';
import { vec3 } from 'gl-matrix';
class PostProcess extends ShaderProgram {
    constructor(fragProg, tag = "default") {
        super([new Shader(gl.VERTEX_SHADER, require('../../shaders/screenspace-vert.glsl')),
            fragProg]);
        this.use();
        this.name = tag;
        if (PostProcess.screenQuad === undefined) {
            PostProcess.screenQuad = new Square(vec3.fromValues(0, 0, 0));
            PostProcess.screenQuad.create();
        }
    }
    draw() {
        super.draw(PostProcess.screenQuad);
    }
    getName() { return this.name; }
}
PostProcess.screenQuad = undefined; // Quadrangle onto which we draw the frame texture of the last render pass
export default PostProcess;
//# sourceMappingURL=PostProcess.js.map