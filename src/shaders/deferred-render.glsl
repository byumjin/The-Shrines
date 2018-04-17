#version 300 es
precision highp float;

#define EPS 0.0001
#define PI 3.1415962

in vec2 fs_UV;
out vec4 out_Col;

uniform sampler2D u_Gbuffer_Albedo;
uniform sampler2D u_Gbuffer_Specular;
uniform sampler2D u_Gbuffer_Normal;
uniform sampler2D u_DepthMap;
uniform samplerCube u_SkyCubeMap;
uniform sampler2D u_ShadowMap;

uniform float u_Time;

uniform mat4 u_View;
uniform vec3 u_CameraWPos; 
uniform mat4 u_ViewProj;
uniform mat4 u_InvViewProj;  
uniform mat4 u_LightViewProj;

uniform vec4 u_lightColor;
uniform vec4 u_lightDirection;


vec2 LightingFunGGX_FV(float dotLH, float roughness)
{
	float alpha = roughness*roughness;

	//F
	float F_a, F_b;
	float dotLH5 = pow(clamp(1.0f - dotLH, 0.0f, 1.0f), 5.0f);
	F_a = 1.0f;
	F_b = dotLH5;

	//V
	float vis;
	float k = alpha * 0.5f;
	float k2 = k*k;
	float invK2 = 1.0f - k2;
	vis = 1.0f/(dotLH*dotLH*invK2 + k2);

	return vec2((F_a - F_b)*vis, F_b*vis);
}

float LightingFuncGGX_D(float dotNH, float roughness)
{
	float alpha = roughness*roughness;
	float alphaSqr = alpha*alpha;
	float denom = dotNH * dotNH * (alphaSqr - 1.0f) + 1.0f;

	return alphaSqr / (PI*denom*denom);
}

vec3 GGX_Spec(vec3 Normal, vec3 HalfVec, float Roughness, vec3 BaseColor, vec3 SpecularColor, vec2 paraFV)
{
	float NoH = clamp(dot(Normal, HalfVec), 0.0, 1.0);

	float D = LightingFuncGGX_D(NoH * NoH * NoH * NoH, Roughness);
	vec2 FV_helper = paraFV;

	vec3 F0 = SpecularColor;
	vec3 FV = F0*FV_helper.x + vec3(FV_helper.y, FV_helper.y, FV_helper.y);
	
	return D * FV;
}

float texture2DCompare(sampler2D depths, vec2 uv, vec2 offset, float compare){
    float depth = texture(depths, uv+offset).r;
    float bias = 0.0025;
    //vec2 gradient = vec2(texture(depths, uv).g, texture(depths, uv).b);
    compare = compare - bias;
    if(depth < compare)
    	return 0.1;
    else
    	return 1.0;
}

// poisson disk for sampling
const vec2 poissonDisk[64] = vec2[](
	vec2( -0.04117257f, -0.1597612f ),
	vec2( 0.06731031f, -0.4353096f ),
	vec2( -0.206701f, -0.4089882f ),
	vec2( 0.1857469f, -0.2327659f ),
	vec2( -0.2757695f, -0.159873f ),
	vec2( -0.2301117f, 0.1232693f ),
	vec2( 0.05028719f, 0.1034883f ),
	vec2( 0.236303f, 0.03379251f ),
	vec2( 0.1467563f, 0.364028f ),
	vec2( 0.516759f, 0.2052845f ),
	vec2( 0.2962668f, 0.2430771f ),
	vec2( 0.3650614f, -0.1689287f ),
	vec2( 0.5764466f, -0.07092822f ),
	vec2( -0.5563748f, -0.4662297f ),
	vec2( -0.3765517f, -0.5552908f ),
	vec2( -0.4642121f, -0.157941f ),
	vec2( -0.2322291f, -0.7013807f ),
	vec2( -0.05415121f, -0.6379291f ),
	vec2( -0.7140947f, -0.6341782f ),
	vec2( -0.4819134f, -0.7250231f ),
	vec2( -0.7627537f, -0.3445934f ),
	vec2( -0.7032605f, -0.13733f ),
	vec2( 0.8593938f, 0.3171682f ),
	vec2( 0.5223953f, 0.5575764f ),
	vec2( 0.7710021f, 0.1543127f ),
	vec2( 0.6919019f, 0.4536686f ),
	vec2( 0.3192437f, 0.4512939f ),
	vec2( 0.1861187f, 0.595188f ),
	vec2( 0.6516209f, -0.3997115f ),
	vec2( 0.8065675f, -0.1330092f ),
	vec2( 0.3163648f, 0.7357415f ),
	vec2( 0.5485036f, 0.8288581f ),
	vec2( -0.2023022f, -0.9551743f ),
	vec2( 0.165668f, -0.6428169f ),
	vec2( 0.2866438f, -0.5012833f ),
	vec2( -0.5582264f, 0.2904861f ),
	vec2( -0.2522391f, 0.401359f ),
	vec2( -0.428396f, 0.1072979f ),
	vec2( -0.06261792f, 0.3012581f ),
	vec2( 0.08908027f, -0.8632499f ),
	vec2( 0.9636437f, 0.05915006f ),
	vec2( 0.8639213f, -0.309005f ),
	vec2( -0.03422072f, 0.6843638f ),
	vec2( -0.3734946f, -0.8823979f ),
	vec2( -0.3939881f, 0.6955767f ),
	vec2( -0.4499089f, 0.4563405f ),
	vec2( 0.07500362f, 0.9114207f ),
	vec2( -0.9658601f, -0.1423837f ),
	vec2( -0.7199838f, 0.4981934f ),
	vec2( -0.8982374f, 0.2422346f ),
	vec2( -0.8048639f, 0.01885651f ),
	vec2( -0.8975322f, 0.4377489f ),
	vec2( -0.7135055f, 0.1895568f ),
	vec2( 0.4507209f, -0.3764598f ),
	vec2( -0.395958f, -0.3309633f ),
	vec2( -0.6084799f, 0.02532744f ),
	vec2( -0.2037191f, 0.5817568f ),
	vec2( 0.4493394f, -0.6441184f ),
	vec2( 0.3147424f, -0.7852007f ),
	vec2( -0.5738106f, 0.6372389f ),
	vec2( 0.5161195f, -0.8321754f ),
	vec2( 0.6553722f, -0.6201068f ),
	vec2( -0.2554315f, 0.8326268f ),
	vec2( -0.5080366f, 0.8539945f )
);

float rand(vec4 co){
	float dot_product = dot(co, vec4(12.9898,78.233,45.164,94.673));
	return fract(sin(dot_product) * 43758.5453);
}

// // parallel plane estimation
// float penumbraSize(float zReceiver, float zBlocker) {
// 	return (zReceiver - zBlocker) / zBlocker;
// }

// #define BLOCKER_SEARCH_NUM_SAMPLES 16

// vec2 findBlocker(vec2 uv, float zReceiver) {
// 	float searchWidth = 0.002;
// 	float blockerSum = 0.0;
// 	float numBlockers = 0.0;
	
// 	float theta = rand(vec4(uv, gl_FragCoord.xy));
// 	mat2 rotation = mat2(vec2(cos(theta), sin(theta)), vec2(-sin(theta), cos(theta)));
// 	for (int i = 0; i < BLOCKER_SEARCH_NUM_SAMPLES; i++) {
// 		vec2 coord = uv + rotation*poissonDisk[i] * searchWidth;
// 		float smap = texture(u_ShadowMap, coord).r;
// 		if (smap < zReceiver) {
// 			blockerSum += smap;
// 			numBlockers++;
// 		}
// 	}
// 	return vec2(blockerSum / numBlockers, numBlockers);
// }

#define PCF_NUM_SAMPLES 36

float PCF(sampler2D depths, float filterRadius, vec2 uv, float compare){
    float result = 0.0;
    float theta = rand(vec4(uv, gl_FragCoord.xy));
	mat2 rotation = mat2(vec2(cos(theta), sin(theta)), vec2(-sin(theta), cos(theta)));
	for (int i = 0; i < PCF_NUM_SAMPLES; i++) {
		vec2 offset = (rotation*poissonDisk[i]) * filterRadius;
		result += texture2DCompare(depths, uv, offset, compare);
		//float gauss = gaussian(filterRadius, length(offset));
	}
	return result / float(PCF_NUM_SAMPLES);
}

float getShadow(vec4 lightSpacePos){
	// blocker search
	// vec2 blockers = findBlocker(vec2((lightSpacePos.x + 1.0) * 0.5, ( lightSpacePos.y + 1.0) * 0.5 ),
	// 	lightSpacePos.z - bias); // x has the average depth, y has the total number of blockers
	// if (blockers.y < 1.0) {
	// 	// no blockers so no shadowing
	// 	return 1.0f;
	// }
	
	// float penumbraRatio = penumbraSize(lightSpacePos.z-bias, blockers.x);
	// float filterRadius = penumbraRatio * 1.0/2048.0*4.0;

	float shadow = PCF(u_ShadowMap, 
		1.0/2048.0*4.0, 
		vec2((lightSpacePos.x + 1.0) * 0.5, ( lightSpacePos.y + 1.0) * 0.5 ),
		lightSpacePos.z);
	// float shadow = VSM(u_ShadowMap, 
	// 	vec2((lightSpacePos.x + 1.0) * 0.5, ( lightSpacePos.y + 1.0) * 0.5 ),
	// 	lightSpacePos.z - bias);
	return shadow;
}

float LinearDepth(float d, float f)
{
	float n = 0.1;
	return (2.0 * n) / (f + n - d * (f - n));
}

void main() { 

	// read from GBuffers
	vec4 albedo = texture(u_Gbuffer_Albedo, fs_UV);
	vec4 specular = texture(u_Gbuffer_Specular, fs_UV);
	vec4 normal = texture(u_Gbuffer_Normal, fs_UV);

	float Roughness = specular.w;
	Roughness = clamp(Roughness, 0.05, 0.95);

	
	float depth = albedo.w;

	vec2 ndc = vec2(fs_UV.x * 2.0 - 1.0, fs_UV.y*2.0 - 1.0);
	vec4 worldPos =  u_InvViewProj* vec4(ndc, depth, 1.0);
	worldPos /= worldPos.w;

	vec3 viewVec = normalize(u_CameraWPos - worldPos.xyz);
	vec3 lightDir = normalize(u_lightDirection.xyz);

	vec3 halfVec = viewVec + lightDir;

	if(depth >= 1.0) //SkyBox
	{			
		 //inverse gamma correct
		//vec3 reflVec = -viewVec;//reflect(-viewVec, normal.xyz);
		vec4 col = texture(u_SkyCubeMap, normalize( -viewVec  + vec3(0.0, u_CameraWPos.y, 0.0)*0.001 ) );
    	col = pow(col, vec4(2.2));
		out_Col = col;
		out_Col.w = 1.0;
	}
	else
	{		
			vec4 lightSpacePos = u_LightViewProj * worldPos;
			lightSpacePos /= lightSpacePos.w;
			float shadow = getShadow(lightSpacePos);

			vec4 diffuseColor = vec4(albedo.xyz, 1.0);

			float diffuseTerm = clamp( dot(lightDir, normal.xyz), 0.0, 1.0);
			
			halfVec = normalize(halfVec);
			
			float LoH = clamp(dot( lightDir, halfVec ), 0.0, 1.0);

			vec3 specularTerm = vec3(0.0);
			vec3 SpecularColor = specular.xyz;
			
			float energyConservation = 1.0 - Roughness * Roughness;

			specularTerm = GGX_Spec(normal.xyz, halfVec, Roughness, diffuseColor.xyz, SpecularColor, LightingFunGGX_FV(LoH, Roughness)) *energyConservation;

			//specularTerm = clamp(specularTerm, 0.0, 2.0);

			float ambientTerm = 0.1;

			vec4 pbrColor = vec4( (diffuseColor.rgb + SpecularColor * specularTerm) * (diffuseTerm + ambientTerm), diffuseColor.a);

			pbrColor.xyz *= shadow * u_lightColor.xyz * u_lightColor.w;

			out_Col = vec4(pbrColor.xyz, depth);

			//Emissive
			if(normal.a > 0.8)
			{
				out_Col.xyz += albedo.xyz;
			}

			vec3 fogColor = vec3(0.36470588235294117647058823529412, 0.32941176470588235294117647058824, 0.33725490196078431372549019607843);
			fogColor *= 0.7;
			fogColor = pow(fogColor, vec3(2.2));

			float linearDepth = LinearDepth(depth, 200.0);

				
			out_Col.xyz = mix(out_Col.xyz, fogColor, pow(linearDepth, 2.0) );
		

		
	}

	
}