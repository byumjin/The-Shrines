#version 300 es
precision highp float;

in vec4 fs_Pos;
in vec4 fs_Nor;
in vec4 fs_Col;
in vec2 fs_UV;

out vec4 out_Color; 

uniform mat4 u_Model;
uniform mat4 u_ViewProj;

void main() {   

    vec4 POS = u_ViewProj * u_Model * vec4(fs_Pos.xyz, 1.0);
    POS /= POS.w;
    float depth = POS.z;
    // VSM
 //    float dx = dFdx(depth);
	// float dy = dFdy(depth);
 //    out_Color = vec4(depth, pow(depth, 2.0) + 0.25*(dx*dx + dy*dy), 0.0, 1.0);
 	out_Color = vec4(depth, 0.0, 0.0, 1.0);
}