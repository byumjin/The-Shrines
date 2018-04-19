#version 300 es
precision highp float;

in vec2 fs_UV;
out vec4 out_Col;

uniform sampler2D u_frame0;
uniform vec2 u_screenSize;
uniform vec2 u_BlurScale;

uniform float u_Lod;

float offset[5];
float weight[5];

void main()
{	
	
	offset[0] = 0.0; offset[1] = 1.0; offset[2] = 2.0; offset[3] = 3.0; offset[4] = 4.0;
	weight[0] = 0.2270270270; weight[1] =  0.1945945946; weight[2] = 0.1216216216; weight[3] = 0.0540540541; weight[4] = 0.0162162162;


	out_Col = texture( u_frame0, fs_UV ) * weight[0];
    for (int i=1; i<5; i++)
	{
        out_Col += texture( u_frame0, ( vec2(fs_UV)+vec2(0.0, offset[i] * u_BlurScale.y / u_screenSize.y) )) * weight[i];
        out_Col += texture( u_frame0, ( vec2(fs_UV)-vec2(0.0, offset[i] * u_BlurScale.y / u_screenSize.y) )) * weight[i];
    }	

	out_Col = clamp(out_Col, 0.0, 1.0);
	out_Col.w = 1.0;
}