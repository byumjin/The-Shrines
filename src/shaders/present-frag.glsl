#version 300 es
precision highp float;

in vec2 fs_UV;
out vec4 out_Col;

uniform sampler2D u_frame0; //Scene
uniform float u_Time;

float LinearDepth(float d)
{
	float f= 1000.0;
	float n = 0.1;
	return (2.0 * n) / (f + n - d * (f - n));
}


void main() {
	out_Col = texture(u_frame0, fs_UV);

	//out_Col = vec4( LinearDepth(out_Col.a));

	out_Col.w = 1.0;
}
