#version 300 es
precision highp float;

in vec2 fs_UV;
out vec4 out_Col;

uniform sampler2D u_frame0; //Scene
uniform sampler2D u_frame1; //SSR_Mask
uniform sampler2D u_frame2; //SSR

uniform sampler2D u_Gbuffer_Specular;
uniform sampler2D u_Gbuffer_Albedo;

void main() {

	vec2 reverseUV = fs_UV;
	reverseUV.y = 1.0 - reverseUV.y;

	float roughness = texture(u_Gbuffer_Specular, reverseUV).a;
	vec3 sceneImagecolor = texture(u_frame0, fs_UV).xyz;

	
	float opaqueDepth = texture(u_Gbuffer_Albedo, reverseUV).a;

	float SSRMask = texture(u_frame1, fs_UV).a;

	bool bTrans = false;

	vec4 SSRMipColor = textureLod(u_frame2, fs_UV, log2(roughness + 1.0) * 5.0);

	
	vec3 finalColor = vec3(0.0);

	//finalColor = SSRMipColor.xyz * clamp(SSRMask, 0.0, 1.0) + sceneImagecolor;// mix(sceneImagecolor, SSRColor + sceneImagecolor, SSRMask);
	finalColor = SSRMipColor.xyz + sceneImagecolor;

	out_Col = vec4( clamp(finalColor, 0.0, 1.0), 1.0);
}
