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

mat4 rotationMatrix(vec3 axis, float angle)
{
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    
    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                0.0,                                0.0,                                0.0,                                1.0);
}

void main()
{
    fs_Col = vs_Col;
    
    fs_UV = vs_UV;

    vec3 offset = vs_Translate.xyz;

    float dir =  vs_Col.x < 0.0 ? vs_Col.y + 3.141592 : vs_Col.y;

    fs_Pos = vs_Pos * rotationMatrix( vec3(0.0, 1.0, 0.0), dir);

    gl_Position = u_ViewProj  *  vec4(offset + fs_Pos.xyz * fs_Col.a, 1.0);

    vec4 normalizedPos = gl_Position / gl_Position.w;
    
    fs_UV_SS = vec2( (normalizedPos.x + 1.0)* 0.5, (normalizedPos.y + 1.0) * 0.5);
    fs_Pos.a = normalizedPos.z;
    fs_Pos.xyz += offset;
}
