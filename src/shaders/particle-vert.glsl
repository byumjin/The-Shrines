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

void main()
{
    fs_Col = vs_Col;
    fs_Pos = vs_Pos;
    fs_UV = vs_UV;

    vec3 offset =vs_Translate.xyz;
    //offset.z = (sin((u_Time + offset.x) * 3.14159 * 0.1) + cos((u_Time + offset.y) * 3.14159 * 0.1)) * 1.5;

    mat3 CameraAxes;

    //Right
    CameraAxes[0][0] = u_View[0][0];
    CameraAxes[0][1] = u_View[1][0];
    CameraAxes[0][2] = u_View[2][0];
    //Up
    CameraAxes[1][0] = u_View[0][1];
    CameraAxes[1][1] = u_View[1][1];
    CameraAxes[1][2] = u_View[2][1];

    vec3 billboardPos = offset + vs_Pos.x * CameraAxes[0] + vs_Pos.y * CameraAxes[1];

    gl_Position = u_ViewProj * vec4(billboardPos, 1.0);
    //gl_Position = vec4(billboardPos, 1.0);
}
