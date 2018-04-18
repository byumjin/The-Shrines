#version 300 es
precision highp float;

in vec2 fs_UV;
out vec4 out_Col;

uniform sampler2D u_frame0; //Scene
uniform sampler2D u_frame1; //SSR_Mask
uniform sampler2D u_frame2; //SSR
uniform sampler2D u_frame3; //ParticleRain
uniform sampler2D u_frame4; //ParticleMesh
uniform sampler2D u_DepthMap; //Cloud

uniform sampler2D u_Gbuffer_Specular;
uniform sampler2D u_Gbuffer_Albedo;



void main() {

	vec2 reverseUV = fs_UV;
	reverseUV.y = 1.0 - reverseUV.y;

	float roughness = texture(u_Gbuffer_Specular, reverseUV).a;
	vec4 sceneImagecolor = texture(u_frame0, fs_UV);
 	vec4 meshParticle = texture(u_frame4, reverseUV);

	sceneImagecolor = mix(sceneImagecolor, meshParticle, meshParticle.a);
	
	float opaqueDepth = texture(u_Gbuffer_Albedo, reverseUV).a;

	float SSRMask = texture(u_frame1, fs_UV).a;

	bool bTrans = false;

	vec4 SSRMipColor = textureLod(u_frame2, fs_UV, log2(roughness + 1.0) * 5.0);

	
	vec3 finalColor = vec3(0.0);

	if(clamp(SSRMask, 0.0, 1.0) <= 0.0)
		finalColor = sceneImagecolor.xyz;
	else
		finalColor = SSRMipColor.xyz + sceneImagecolor.xyz;
		
	vec4 RainColor = texture(u_frame3, reverseUV);

	
	finalColor.xyz += RainColor.xyz;

	vec4 cloudColor = texture(u_DepthMap, reverseUV);


	finalColor.xyz += cloudColor.xyz;


	out_Col = vec4( finalColor, sceneImagecolor.a);
}
