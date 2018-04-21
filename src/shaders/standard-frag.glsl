#version 300 es
precision highp float;

in vec4 fs_Pos;
in vec4 fs_Nor;
in vec4 fs_Col;
in vec2 fs_UV;

out vec4 fragColor[3]; // The data in the ith index of this array of outputs
                       // is passed to the ith index of OpenGLRenderer's
                       // gbTargets array, which is an array of textures.
                       // This lets us output different types of data,
                       // such as albedo, normal, and position, as
                       // separate images from a single render pass.

uniform sampler2D AlbedoMap;
uniform sampler2D SpecularMap;
uniform sampler2D NormalMap;


uniform mat4 u_Model;
uniform mat4 u_ModelInvTr;  
uniform mat4 u_ViewProj;

uniform float u_Time;

vec3 applyNormalMap(vec3 geomnor, vec3 normap) {
    
    vec3 up = normalize(vec3(0.01, 1, 0.01));
    vec3 surftan = normalize(cross(geomnor, up));
    vec3 surfbinor = cross(geomnor, surftan);
    return normalize(normap.y * surftan + normap.x * surfbinor + normap.z * geomnor);
}

void main() {
 
   // fragment info is in view space
    mat3 invTranspose = mat3(u_ModelInvTr);
    vec4 vertexNormal = vec4(invTranspose * vec3(fs_Nor), 0);


    vec4 Pos_SS = u_ViewProj * u_Model * fs_Pos;
    Pos_SS /= Pos_SS.w;
 
    vec4 Albedo = texture(AlbedoMap, fs_UV);

    if(Albedo.a < 0.2)
        discard;

    vec3 col = Albedo.rgb;

    

    //inverse gamma correct
    col = pow(col, vec3(2.2));

    fragColor[0] = vec4(col, Pos_SS.z);
    fragColor[1] = texture(SpecularMap, fs_UV);

    //fragColor[1].w = (sin(u_Time) + 1.0) * 0.5;

    vec4 normalInfo;
    //rainy
    bool bWater = texture(NormalMap, fs_UV).a < 0.5;
	if(bWater)
	{
		normalInfo = texture(NormalMap, fs_UV - vec2(0.0, u_Time * 0.05));

        
	}
    else
    {
        normalInfo = texture(NormalMap, fs_UV);
    }

     
    normalInfo.xyz = (normalInfo.xyz*2.0 - vec3(1.0)); 

    if(bWater)
    {
        normalInfo.z += 10.0;
        normalInfo.xyz = normalize(normalInfo.xyz);
    }

    vec3 worldNormal = applyNormalMap(vertexNormal.xyz, normalInfo.xyz);

    fragColor[2] = vec4(worldNormal, normalInfo.w);
}
