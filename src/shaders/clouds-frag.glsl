#version 300 es
precision highp float;

#define T texture(u_frame0,(s*p.zw+ceil(s*p.x))/2e2).y/(s+=s)*4.0

in vec2 fs_UV;
out vec4 out_Col;

uniform sampler2D u_frame0; //Noise
uniform float u_Time;
uniform vec2 u_screenSize;

void main() {

  vec2 x = fs_UV;

  vec4 p;
  vec4 d = vec4(0.8, 0.0, x/u_screenSize.y- vec2(0.8));
  vec4 c = vec4(0.6,.7,d.xy);
  vec4 O=c-d.w;
    for(float f,s,t=2e2+sin(dot(x, x));--t>0.;p=.05*t*d)
        p.xz+=u_Time,
        s=2.,
        f=p.w+1.-T-T-T-T,
    	f<0.?O+=(O-1.-f*c.zyxw)*f*.4:O;

	out_Col = O;
/*
	vec2 ReUV = vec2(fs_UV.x, 1.0 - fs_UV.y);
	
	out_Col = vec4(fs_UV, 0.0, 1.0);
	
	out_Col.w = 1.0;
	*/
}
