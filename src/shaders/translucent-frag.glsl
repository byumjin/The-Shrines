#version 300 es
precision highp float;

#define EPS 0.0001
#define PI 3.1415962

in vec4 fs_Pos;
in vec4 fs_Nor;
in vec4 fs_Col;
in vec2 fs_UV;

out vec4 fragColor[2]; 

uniform sampler2D AlbedoMap;
uniform sampler2D SpecularMap;
uniform sampler2D NormalMap;

uniform samplerCube u_SkyCubeMap;

uniform mat4 u_Model;
uniform mat4 u_ModelInvTr;  
uniform mat4 u_ViewProj;
uniform mat4 u_View;
uniform vec3 u_CameraWPos; 
uniform mat4 u_InvViewProj;  

uniform vec4 u_lightColor;
uniform vec4 u_lightDirection;

uniform float u_Time;

vec3 applyNormalMap(vec3 geomnor, vec3 normap) {
    
    vec3 up = normalize(vec3(0.001, 1, 0.001));
    vec3 surftan = normalize(cross(geomnor, up));
    vec3 surfbinor = cross(geomnor, surftan);
    return normalize(normap.y * surftan + normap.x * surfbinor + normap.z * geomnor);
}

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

float LinearDepth(float d, float f)
{
	//float f= 1000.0;
	float n = 0.1;
	return (2.0 * n) / (f + n - d * (f - n));
}

void main() {
 
    // fragment info is in view space
    mat3 invTranspose = mat3(u_ModelInvTr);
    
    vec4 vertexNormal = vec4(invTranspose * vec3(fs_Nor), 0);


    vec4 Pos_SS = u_ViewProj * u_Model * fs_Pos;
    Pos_SS /= Pos_SS.w;

    float Depth = Pos_SS.z;

	vec4 Albedo = texture(AlbedoMap, fs_UV);

    if(Albedo.a < 0.2)
        discard;

    vec3 col = Albedo.rgb;
    col = pow(col, vec3(2.2));

	vec3 waterNormal;
	bool bWater = false;

	if(Albedo.a < 0.6) // Water
	{
		vec4 normalInfo0 = texture(NormalMap, fs_UV + vec2(u_Time * 0.1, u_Time * 0.1));   
  	 	vec4 normalInfo1 = texture(NormalMap, fs_UV + vec2(u_Time * 0.076, u_Time * -0.0316));
   	 	vec4 normalInfo2 = texture(NormalMap, fs_UV - vec2(u_Time * 0.0941, u_Time * 0.07831));

		waterNormal = vec3( ( (normalInfo0.x * normalInfo2.y) - 0.5) * 2.0 , ((normalInfo1.y * normalInfo2.z) - 0.5) * 2.0, 20.0);
		bWater = true;
	}
	else // Glass
	{
		waterNormal = normalize( (texture(NormalMap, fs_UV).xyz * 2.0) - vec3(1.0) );
	}

    vec3 worldNormal = applyNormalMap(vertexNormal.xyz, waterNormal);



	// read from GBuffers
	vec4 albedo = vec4(col.xyz, Depth);
	vec4 specular = texture(SpecularMap, fs_UV);
	vec4 normal = vec4(worldNormal, 0.0);

	float Roughness = specular.w;
	Roughness = clamp(Roughness, 0.05, 0.95);

	
	

	float depth = albedo.w;

    vec4 worldPos = u_Model * fs_Pos;

	vec3 viewVec = normalize(u_CameraWPos - worldPos.xyz);
	vec3 halfVec = viewVec + u_lightDirection.xyz;

	
	

	if(depth >= 1.0) //SkyBox
	{			
		vec3 reflVec = reflect(-viewVec, normal.xyz);
        vec4 col = texture(u_SkyCubeMap, reflVec);
    	col = pow(col, vec4(2.2));

		fragColor[0] = col;
        fragColor[0].w =  bWater ? 21.0 : 11.0;
        fragColor[1] = vec4(normal.xyz, Roughness);
	}
	else
	{
		vec4 diffuseColor = vec4(albedo.xyz, 1.0);

		float diffuseTerm = clamp( dot(u_lightDirection.xyz, normal.xyz), 0.0, 1.0);
		
		halfVec = normalize(halfVec);
		
		float LoH = clamp(dot( u_lightDirection.xyz, halfVec ), 0.0, 1.0);

		vec3 specularTerm = vec3(0.0);
		vec3 SpecularColor = specular.xyz;
		
		float energyConservation = 1.0 - Roughness * Roughness;

		float waterRoughness = 0.2;

		specularTerm = GGX_Spec(normal.xyz, halfVec, (bWater ? waterRoughness :Roughness), diffuseColor.xyz, SpecularColor, LightingFunGGX_FV(LoH, (bWater ? waterRoughness :Roughness))) * (bWater ? 1.0 - waterRoughness*waterRoughness : energyConservation);


		float ambientTerm = 0.1;

		vec4 pbrColor = vec4( (diffuseColor.rgb + SpecularColor * specularTerm ) * (diffuseTerm + ambientTerm), diffuseColor.a);


		pbrColor.xyz *= u_lightColor.xyz * u_lightColor.a;

		if(bWater)
		{
			//fresnel
			float NoV = clamp( dot(viewVec.xyz, worldNormal), 0.0, 1.0);
			NoV = 1.0 - NoV;
			float wNoV = pow(NoV, 20.0);
			pbrColor.xyz *= wNoV;

			float fNoV = pow(NoV, 50.0);
			pbrColor.xyz += fNoV *  u_lightColor.xyz;
		}

        float Opacity = 0.1;		

		fragColor[0] = vec4( (pbrColor.xyz) * Opacity, bWater ? (Depth + 20.0) : (Depth + 10.0));

		vec3 fogColor = vec3(0.36470588235294117647058823529412, 0.32941176470588235294117647058824, 0.33725490196078431372549019607843);
		fogColor = pow(fogColor, vec3(2.2));
		
		

		if(bWater)
		{		
			float linearDepth = LinearDepth(Depth, 1000.0);	
			fragColor[0].xyz = mix(fragColor[0].xyz, fogColor, pow(linearDepth, 1.5) );
		}
		else
		{
			float linearDepth = LinearDepth(Depth, 200.0);
			fragColor[0].xyz = mix(fragColor[0].xyz, fogColor, pow(linearDepth, 2.0) );
		}
        
		fragColor[1] = vec4(normal.xyz, Roughness);
	}
}
