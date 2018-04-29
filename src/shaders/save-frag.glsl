#version 300 es
precision highp float;

in vec2 fs_UV;
out vec4 out_Col;

uniform sampler2D u_frame0; //Scene
uniform sampler2D u_frame1; //SSR_Mask
//uniform sampler2D u_frame2; //SSR
uniform sampler2D u_frame3; //ParticleRain
uniform sampler2D u_frame4; //ParticleMesh
uniform sampler2D u_DepthMap; //Cloud

uniform sampler2D u_frame5; //SSR 0
uniform sampler2D u_frame6; //SSR 1
uniform sampler2D u_frame7; //SSR 2
uniform sampler2D u_frame8; //SSR 3
uniform sampler2D u_frame9; //SSR 4

uniform sampler2D u_Gbuffer_Specular;
uniform sampler2D u_Gbuffer_Albedo;


vec4 getSSRColor(vec2 UV, float lod)
{
	if( lod < 1.0)
	{
		return mix(texture(u_frame5, UV), texture(u_frame6, UV), lod);
	}
	else if( lod < 2.0)
	{
		return mix(texture(u_frame6, UV), texture(u_frame7, UV), fract(lod));
	}
	else if( lod < 3.0)
	{
		return mix(texture(u_frame7, UV), texture(u_frame8, UV), fract(lod));
	}
	else
	{
		return mix(texture(u_frame8, UV), texture(u_frame9, UV), fract(lod));
	}
	
}


void main() {

	vec2 reverseUV = fs_UV;
	reverseUV.y = 1.0 - reverseUV.y;

	float roughness = texture(u_Gbuffer_Specular, reverseUV).a;
	vec4 sceneImagecolor = texture(u_frame0, fs_UV);
 	vec4 meshParticle = texture(u_frame4, reverseUV);

	sceneImagecolor.xyz = mix(sceneImagecolor.xyz, meshParticle.xyz, meshParticle.a);
	
	float opaqueDepth = texture(u_Gbuffer_Albedo, reverseUV).a;

	float SSRMask = texture(u_frame1, fs_UV).a;

	//bool bWater;
	bool bTrans;

	float sceneDepth = texture(u_frame0, reverseUV).a;

	if(sceneDepth >= 9.0)
	{
		bTrans = true;
	}

	vec4 SSRMipColor = getSSRColor(fs_UV, log2(roughness + 1.0) * 4.0);
	//vec4 SSRMipColor = 				   texture(u_frame5, fs_UV);


	vec4 particles = texture(u_frame3, reverseUV) + texture(u_DepthMap, reverseUV);
	
	vec3 finalColor = vec3(0.0);

	SSRMask = clamp(SSRMask, 0.0, 1.0);

	if(SSRMask <= 0.0)
		finalColor = sceneImagecolor.xyz + particles.xyz;
	else
	{
		if(bTrans)
		{
			finalColor = SSRMipColor.xyz + particles.xyz  + sceneImagecolor.xyz;
		}
		else
			finalColor = (SSRMipColor.xyz + particles.xyz) * sceneImagecolor.xyz + sceneImagecolor.xyz;
	}


	out_Col = vec4( finalColor, sceneImagecolor.a);
}
