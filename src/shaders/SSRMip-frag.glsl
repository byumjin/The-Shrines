#version 300 es
precision highp float;

in vec2 fs_UV;
out vec4 out_Col;

uniform sampler2D u_frame0;

void main() {

	vec2 reUV = vec2(fs_UV.x, 1.0 - fs_UV.y);
	out_Col = texture(u_frame0, reUV);
	out_Col.w = 1.0;
}
