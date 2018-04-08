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

float texture2DCompare(sampler2D depths, vec2 uv, float compare){
    float depth = texture(depths, uv).r;
    if(depth < compare)
    	return 0.25;
    else
    	return 1.0;
}

float PCF(sampler2D depths, vec2 size, vec2 uv, float compare){
    float result = 0.0;
    for(int x=-2; x<=2; x++){
        for(int y=-2; y<=2; y++){
            vec2 off = vec2(x,y)/size;
            result += texture2DCompare(depths, uv+off, compare);
        }
    }
    return result/25.0;
}

// float linstep(float low, float high, float v){
//     return clamp((v-low)/(high-low), 0.0, 1.0);
// }

// float VSM(sampler2D depths, vec2 uv, float compare){
//     vec2 moments = texture(depths, uv).xy;
//     float p = smoothstep(compare-0.02, compare, moments.x);
//     float variance = max(moments.y - moments.x*moments.x, -0.001);
//     float d = compare - moments.x;
//     float p_max = linstep(0.2, 1.0, variance / (variance + d*d));
//     return clamp(max(p, p_max), 0.0, 1.0);
// }

float getShadow(vec4 lightSpacePos){
	float bias = 0.001;
	float shadow = PCF(u_ShadowMap, 
		vec2(2048.0,2048.0), 
		vec2((lightSpacePos.x + 1.0) * 0.5, ( lightSpacePos.y + 1.0) * 0.5 ),
		lightSpacePos.z - bias);
	// float shadow = VSM(u_ShadowMap, 
	// 	vec2((lightSpacePos.x + 1.0) * 0.5, ( lightSpacePos.y + 1.0) * 0.5 ),
	// 	lightSpacePos.z - bias);
	return shadow;
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

	vec4 lightSpacePos = u_LightViewProj * worldPos;
	lightSpacePos /= lightSpacePos.w;
	float shadow = getShadow(lightSpacePos);

	vec3 viewVec = normalize(u_CameraWPos - worldPos.xyz);
	vec3 lightDir = normalize(u_lightDirection.xyz);

	vec3 halfVec = viewVec + lightDir;

	if(depth >= 1.0) //SkyBox
	{			
		 //inverse gamma correct
		//vec3 reflVec = -viewVec;//reflect(-viewVec, normal.xyz);
		vec4 col = texture(u_SkyCubeMap, -viewVec);
    	col = pow(col, vec4(2.2));
		out_Col = col;
		out_Col.w = 1.0;
	}
	else
	{
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
		

		
	}

	
}