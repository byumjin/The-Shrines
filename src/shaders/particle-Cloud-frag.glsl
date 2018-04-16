#version 300 es
precision highp float;

uniform sampler2D u_frame0; //Scene
uniform sampler2D u_frame1; //Albedo
uniform sampler2D u_frame2; //Normal
uniform sampler2D u_frame3; //Noise

uniform mat4 u_View; 
uniform mat4 u_InvViewProj; 

uniform vec4 u_lightDirection;
uniform float u_Time;

in vec4 fs_Col;
in vec4 fs_Pos;
in vec2 fs_UV;
in vec2 fs_UV_SS;
in vec3 fs_billboardNormal;

out vec4 out_Col;


vec3 applyNormalMap(vec3 geomnor, vec3 normap) {
    
    vec3 up = normalize(vec3(0.001, 1, 0.001));
    vec3 surftan = normalize(cross(geomnor, up));
    vec3 surfbinor = cross(geomnor, surftan);
    return normalize(normap.y * surftan + normap.x * surfbinor + normap.z * geomnor);
}

float LinearDepth(float d, float f)
{
	
	float n = 0.1;
	return (2.0 * n) / (f + n - d * (f - n));
}

void main()
{
    float sceneDepth = texture(u_frame0, fs_UV_SS).a;
    float particleDepth = fs_Pos.a;

    if(sceneDepth > 19.0)
	{
		sceneDepth -= 20.0;
	}
	else if(sceneDepth > 9.0)
	{
		sceneDepth -= 10.0;
	}

    if(sceneDepth > particleDepth)
    {
        int sprite = int( floor(fs_Col.a) ) % 8;

       

        vec4 NoiseMap = texture(u_frame3, vec2(fs_UV.x + u_Time * 0.0983, fs_UV.y - u_Time * 0.0365)  );

        vec2 Noise = NoiseMap.xy * 2.0 - vec2(1.0);
        Noise *= 0.02;

        vec2 TwickedUV = fs_UV + Noise;

        out_Col.xyz = texture(u_frame1, vec2( (float(sprite) / 8.0) + (TwickedUV.x / 8.0)  , TwickedUV.y)  ).xyz;


        vec3 normal = texture(u_frame2, vec2( (float(sprite) / 8.0) + (TwickedUV.x / 8.0)  , TwickedUV.y)  ).xyz;

       normal = applyNormalMap(fs_billboardNormal, normalize(normal * 2.0 - 1.0) );

       float NoL = clamp( dot(normal, u_lightDirection.xyz), 0.2, 1.0);

       vec3 darkColor = vec3(0.0);

       float linearizedDepth = LinearDepth(particleDepth, 1000.0);
       out_Col.xyz *= (1.0 - pow(linearizedDepth, 4.0));

       out_Col.a = 1.0;

       vec3 tintColor = vec3(1.0, 0.6, 0.4);
       out_Col.xyz *= tintColor;
       out_Col = clamp(out_Col, 0.0, 1.0);
       
    }
    else
    {   
        out_Col = vec4(0.0);
    }
}
