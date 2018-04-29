#version 300 es

uniform mat4 u_View;
uniform mat4 u_Proj;
uniform mat4 u_ViewProj;
uniform float u_Time;

uniform vec3 u_CameraWPos;

in vec4 vs_Pos; // Non-instanced; each particle is the same quad drawn in a different place
in vec4 vs_Col; // An instanced rendering attribute; each particle instance has a different color
in vec4 vs_Nor;
in vec2 vs_UV;
in vec4 vs_Translate; // Another instance rendering attribute used to position each quad instance in the scene


out vec4 fs_Col;
out vec4 fs_Pos;
out vec2 fs_UV;
out vec2 fs_UV_SS;
out vec3 fs_billboardNormal;

float LinearDepth(float d, float f)
{
	
	float n = 0.1;
	return (2.0 * n) / (f + n - d * (f - n));
}

void main()
{
    fs_Col = vs_Col;
    fs_Pos = vs_Pos;
    fs_UV = vs_UV;

    vec3 offset = vs_Translate.xyz;

    mat3 CameraAxes;

    //Right
    CameraAxes[0][0] = u_View[0][0];
    CameraAxes[0][1] = u_View[1][0];
    CameraAxes[0][2] = u_View[2][0];
    //Up
    CameraAxes[1][0] = u_View[0][1];
    CameraAxes[1][1] = u_View[1][1];
    CameraAxes[1][2] = u_View[2][1];

    vec3 billboardPos;
    
    float scale =  vs_Translate.w * 0.01 + 4000.0;

    vec4 depthPos = u_Proj * u_View * vec4(offset, 1.0);
    depthPos /= depthPos.w;

    scale *= (LinearDepth(depthPos.z, 1000000.0)* 10.0 + 1.0);    

    billboardPos = offset + vs_Pos.x * scale * CameraAxes[0] + vs_Pos.y * scale * CameraAxes[1];

    gl_Position =  u_Proj * u_View * vec4(billboardPos, 1.0);

    vec4 normalizedPos = gl_Position / gl_Position.w;
    
    fs_UV_SS = (normalizedPos.xy + vec2(1.0))* 0.5;

    fs_Pos.xyz = billboardPos;
    fs_Pos.a = normalizedPos.z;

    fs_billboardNormal =  normalize(vec3(u_CameraWPos - offset));
}
