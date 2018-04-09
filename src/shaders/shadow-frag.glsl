#version 300 es
precision highp float;

in vec4 fs_Pos;
in vec4 fs_Nor;
in vec4 fs_Col;
in vec2 fs_UV;

out vec4 out_Color; 

uniform sampler2D u_Gbuffer_Albedo;

uniform mat4 u_Model;
uniform mat4 u_ViewProj;

void main() {   

    if( texture(u_Gbuffer_Albedo, fs_UV).a < 0.2)
        discard;
        
    vec4 POS = u_ViewProj * u_Model * vec4(fs_Pos.xyz, 1.0);
    POS /= POS.w;

    

    float depth = POS.z;
    // VSM
    float dx = dFdx(POS.z);
	float dy = dFdy(POS.z);
    out_Color = vec4(depth, dx, dy, 1.0);
 	// out_Color = vec4(depth, 0.0, 0.0, 1.0);
}