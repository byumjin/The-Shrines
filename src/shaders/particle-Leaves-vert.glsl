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

void main()
{
    fs_Col = vs_Col;
    fs_Pos = vs_Pos;
    fs_UV = vs_UV;

    vec3 offset = vs_Translate.xyz;

    gl_Position = u_ViewProj * vec4(offset + vs_Pos.xyz, 1.0);

    vec4 normalizedPos = gl_Position / gl_Position.w;
    
    fs_UV_SS = vec2( (normalizedPos.x + 1.0)* 0.5, (normalizedPos.y + 1.0) * 0.5);
    fs_Pos.a = normalizedPos.z;
    fs_Pos.xyz += offset;
}
