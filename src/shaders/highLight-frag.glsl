#version 300 es
precision highp float;

in vec2 fs_UV;
out vec4 out_Col;

uniform sampler2D u_frame0;


void main()
{	
	
	vec4 sceneColor = texture(u_frame0, fs_UV);

	out_Col = max(vec4(0.0), pow( smoothstep(vec4(0.0), vec4(4.0), sceneColor), vec4(4.0)));
	
	out_Col.w = 1.0;
}