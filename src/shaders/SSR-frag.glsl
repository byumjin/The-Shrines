#version 300 es
precision highp float;

in vec2 fs_UV;
out vec4 out_Col;

//uniform sampler2D u_DepthMap;

uniform sampler2D u_Gbuffer_Specular;
uniform sampler2D u_Gbuffer_Normal;
uniform samplerCube u_SkyCubeMap;
uniform sampler2D u_frame0;
uniform sampler2D u_frame1; //current 

uniform mat4 u_InvViewProj;  
uniform mat4 u_ViewProj; 



uniform float u_deltaTime;
uniform vec3 u_CameraWPos; 

uniform vec4 u_SSRInfo;

float LinearDepth(float d)
{
	float f= 1000.0;
	float n = 0.1;
	return (2.0 * n) / (f + n - d * (f - n));
}

float fade(vec2 UV)
{
	vec2 NDC = UV * 2.0 - vec2(1.0);

	return clamp( 1.0 - max( pow( NDC.y * NDC.y, 4.0) , pow( NDC.x * NDC.x, 4.0)) , 0.0, 1.0); 
}

void main() {

	
	float depth = texture(u_frame1, fs_UV).w;

	bool trans = false;
	bool bWater = false;
	
	if(depth >= 19.0)
	{
		trans = true;
		bWater = true;
		depth -= 20.0;

	}
	//disable glass reflection
	
	else if(depth >= 9.0)
	{
		trans = true;
		depth -= 10.0;
	}
	

	depth = clamp(depth, 0.0, 1.0);

	if(depth >= 1.0)
	{
		out_Col = vec4(0.0, 0.0, 0.0, 0.0);
		return;
	}

	vec2 ndc = fs_UV * 2.0 - vec2(1.0);
	vec4 worldPos = u_InvViewProj* vec4(ndc, depth, 1.0);
	worldPos /= worldPos.w;

	vec4 Info = texture(u_Gbuffer_Specular, fs_UV);

	vec3 WorldNormal = Info.xyz;
	float roughness = Info.w;
	

	vec3 viewVec = normalize(worldPos.xyz - u_CameraWPos);
	vec3 relfectVec = reflect(viewVec , WorldNormal);

	vec3 currentPos = worldPos.xyz;
	vec3 prevPos;
	vec4 reflectionColor = vec4(0.0, 0.0, 0.0, 0.0);

	float threshold = 2.0;
	float stepSize =  (1.0 + roughness) * (bWater ? u_SSRInfo.w * 10.0 : u_SSRInfo.w);
	float prevDepth;
	float prevDepthFromDepthBuffer;

	float Intensity = u_SSRInfo.y;
	
	if(trans)
		Intensity = u_SSRInfo.z;

	bool bHit = false;
	float fadeFactor = 0.0;
	float maxStep = u_SSRInfo.x;

	//rayMarching
	for(float i = 0.0; i < maxStep; i++ )
	{			
		currentPos += relfectVec * stepSize;

		vec4 pos_SS = u_ViewProj * vec4(currentPos, 1.0);
		pos_SS /= pos_SS.w;
		vec2 screenSpaceCoords = vec2((pos_SS.x + 1.0) * 0.5, (1.0 - pos_SS.y)*0.5);

		if(screenSpaceCoords.x > 1.0 || screenSpaceCoords.x < 0.0 || screenSpaceCoords.y > 1.0 || screenSpaceCoords.y < 0.0 || pos_SS.z >= 1.0)
		{
			fadeFactor = 0.0;
			//bHit = true;
			break;
		}

		vec2 flippedScreenSpaceCoords = screenSpaceCoords;
		flippedScreenSpaceCoords.y = 1.0 - flippedScreenSpaceCoords.y;
		
		float depth_SS = texture(u_frame1, flippedScreenSpaceCoords).w;

		if(depth_SS >= 19.0)
		{
			depth_SS -= 20.0;
		}
		else if(depth_SS >= 9.0)
		{
			depth_SS -= 10.0;
		}

		depth_SS = clamp(depth_SS, 0.0, 1.0);

		if(pos_SS.z > depth_SS)
		{	
			
			float currentLinearDepth = LinearDepth(depth_SS);

			vec2 ndc = flippedScreenSpaceCoords * 2.0 - vec2(1.0);
			vec4 cworldPos = u_InvViewProj* vec4(ndc, depth_SS, 1.0);
			cworldPos /= cworldPos.w;

			float currentIndicatedLinearDepth = LinearDepth(pos_SS.z);

			if( distance(cworldPos.xyz, currentPos) < stepSize * threshold)
			{
				float prevIndicatedLinearDepth = LinearDepth(prevDepth);
				float prevLinearDepth = LinearDepth(prevDepthFromDepthBuffer);
				
				float denom = ( (currentLinearDepth - prevLinearDepth) - (currentIndicatedLinearDepth - prevIndicatedLinearDepth) );

				if(denom == 0.0)
				{
					reflectionColor = vec4(0.0, 0.0, 0.0, 0.0);

					fadeFactor = 0.0;
					bHit = true;
					break;
				}

				float lerpVal = (prevIndicatedLinearDepth - prevLinearDepth) / denom;
				lerpVal = clamp(lerpVal, 0.0, 1.0);

				lerpVal = sqrt(lerpVal);
				vec3 lerpedPos = prevPos + relfectVec * stepSize * lerpVal;

				vec4 lerpedPos_SS = u_ViewProj * vec4(lerpedPos, 1.0);
				lerpedPos_SS /= lerpedPos_SS.w;
				
				vec2 lerpedScreenSpaceCoords = vec2((lerpedPos_SS.x + 1.0) * 0.5, ( lerpedPos_SS.y + 1.0)*0.5);

				if(lerpedScreenSpaceCoords.x > 1.0 || lerpedScreenSpaceCoords.x < 0.0 || lerpedScreenSpaceCoords.y > 1.0 || lerpedScreenSpaceCoords.y < 0.0 || depth_SS >= 1.0)
				{
					reflectionColor = vec4(0.0, 0.0, 0.0, 0.0);

					fadeFactor = 0.0;
					bHit = true;
					break;
				}

				if( dot(relfectVec, texture(u_Gbuffer_Specular, lerpedScreenSpaceCoords).xyz) > 0.0 || dot(relfectVec, -viewVec ) > 0.0 )
				{					

					reflectionColor = vec4(0.0, 0.0, 0.0, 0.0);

					fadeFactor = 0.0;
					bHit = true;
					break;
				}

				reflectionColor = mix(texture(u_frame0, lerpedScreenSpaceCoords), texture(u_frame1, vec2( lerpedScreenSpaceCoords.x, 1.0 - lerpedScreenSpaceCoords.y)), clamp(u_deltaTime * 40.0, 0.0, 1.0) ); //temporal Blend
				//reflectionColor = texture(u_frame1, vec2( lerpedScreenSpaceCoords.x, 1.0 - lerpedScreenSpaceCoords.y));

				fadeFactor = fade(lerpedScreenSpaceCoords);
				fadeFactor = min(pow(1.0 -  (i + 1.0)/maxStep, 0.05), fadeFactor);
				bHit = true;

				break;
			}			
		}

		prevDepthFromDepthBuffer = depth_SS;
		prevDepth = pos_SS.z;
		prevPos = currentPos;

	}

 	

	fadeFactor = fadeFactor * fadeFactor;

	//We are not going to make inner pool scene. Thus, this is fine
	
	vec4 SkyColor = texture(u_SkyCubeMap, relfectVec);
	SkyColor = pow(SkyColor, vec4(2.2));

	if(!bHit) //SkyBox
	{
		reflectionColor = SkyColor;
		fadeFactor = 1.0;		
	}
	else
	{
		if(!trans)
			reflectionColor = mix(SkyColor, reflectionColor, fadeFactor);		
	}
	

	float energyConservation = 1.0 - roughness * roughness;

	out_Col = reflectionColor * Intensity * energyConservation;
	out_Col = clamp(out_Col, 0.0, 1.0);

	out_Col.w = fadeFactor; //SSR_Mask

	
}
