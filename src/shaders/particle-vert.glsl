#version 300 es

uniform mat4 u_ViewProj;
uniform float u_Time;

uniform mat4 u_View; // Used for rendering particles as billboards (quads that are always looking at the camera)
// gl_Position = center + vs_Pos.x * camRight + vs_Pos.y * camUp;

in vec4 vs_Pos; // Non-instanced; each particle is the same quad drawn in a different place
in vec4 vs_Col; // An instanced rendering attribute; each particle instance has a different color
in vec4 vs_Nor;
in vec2 vs_UV;
in vec4 vs_Translate; // Another instance rendering attribute used to position each quad instance in the scene


out vec4 fs_Col;
out vec4 fs_Pos;
out vec2 fs_UV;
out vec2 fs_UV_SS;


const int rainIndex = 8192;
const int rainStainIndex = 0;

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

     //Forward
    CameraAxes[2][0] = u_View[0][2];
    CameraAxes[2][1] = u_View[1][2];
    CameraAxes[2][2] = u_View[2][2];

    vec3 billboardPos;

    if(fs_Col.a >= float(rainIndex))
    {
      billboardPos = offset + vs_Pos.x * CameraAxes[0] + vs_Pos.y * vec3(0.0, 1.4, 0.0);
    }
    else if(fs_Col.a >= float(rainStainIndex) )
    {
      billboardPos = offset + vs_Pos.x * 0.2 * vec3(1.0, 0.0, 0.0) + vs_Pos.y * 0.2 * vec3(0.0, 0.0, 1.0);
    }  

    gl_Position = u_ViewProj * vec4(billboardPos, 1.0);

    vec4 normalizedPos = gl_Position / gl_Position.w;

    fs_UV_SS = vec2( (normalizedPos.x + 1.0)* 0.5, (normalizedPos.y + 1.0) * 0.5);
    fs_Pos.a = normalizedPos.z;
}
