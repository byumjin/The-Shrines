#version 300 es
precision highp float;

in vec2 fs_UV;
out vec4 fragColor[2];

uniform sampler2D u_frame0; //Scene
uniform sampler2D u_frame1; //Trans
uniform sampler2D u_frame2; //Trans-2
uniform float u_Time;

uniform sampler2D u_Gbuffer_Albedo;
uniform sampler2D u_Gbuffer_Specular;
uniform sampler2D u_Gbuffer_Normal;

float LinearDepth(float d)
{
	float f= 1000.0;
	float n = 0.1;
	return (2.0 * n) / (f + n - d * (f - n));
}

void main() {
	vec2 reverseUV = fs_UV;
	reverseUV.y = 1.0 - reverseUV.y;

	vec4 opaqueColor = texture(u_frame0, reverseUV);
	vec4 transColor = texture(u_frame1, fs_UV);
	

	vec4 OpaqueSSRInfo = texture(u_Gbuffer_Albedo, fs_UV);
	

	if(transColor.w >= 1.0)
		fragColor[0].xyz = opaqueColor.xyz;
	else
	{
		if(opaqueColor.a < 1.0)
		{
			float depthDistance = clamp( LinearDepth(OpaqueSSRInfo.a) - LinearDepth(transColor.a), 0.0, 1.0);
			fragColor[0].xyz =  mix(  opaqueColor.xyz, transColor.xyz, pow(depthDistance, 0.7));

			//fragColor[0].xyz = opaqueColor.xyz;
			//fragColor[0].xyz =  mix(  vec3(1.0, 0.0, 0.0), vec3(0.0, 1.0, 0.0), pow(depthDistance, 0.7));
		}
		else
		{
			fragColor[0].xyz = transColor.xyz;
		}

	}
	

	float OpaqueDepth = texture(u_Gbuffer_Albedo, reverseUV).w;
	float OpaqueRougness = texture(u_Gbuffer_Specular, reverseUV).w;
	float OpaqueMetallic = texture(u_Gbuffer_Normal, reverseUV).w;

	float transDepth =  texture(u_frame1, reverseUV).w;
	vec4 transInfo = texture(u_frame2, reverseUV);

	if( transDepth < OpaqueDepth )
	{
		fragColor[0].w = transDepth + 10.0; //differenciate
		fragColor[1] = transInfo;
	}
	else
	{
		fragColor[0].w = OpaqueDepth;
		fragColor[1] = vec4( texture(u_Gbuffer_Normal, reverseUV).xyz , OpaqueRougness);
	}

	
}
