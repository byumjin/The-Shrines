#version 300 es
precision highp float;

uniform float u_deltaTime;
uniform float u_Time;

uniform vec3 u_CameraWPos;
uniform vec4 u_particleInfo;

layout(location = 0) in vec4 i_position;
layout(location = 1) in vec4 i_velocity;
layout(location = 2) in vec4 i_color;
layout(location = 3) in vec4 i_attract;

out vec4 o_position;
out vec4 o_velocity;            
out vec4 o_color;
out vec4 o_attract;

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
    o_position = i_position;
    o_velocity = i_velocity;
    o_attract = i_attract;

    o_color = i_color;
    o_color.a = float(gl_VertexID) + 0.1;

    float speed = 1000.0;
    o_position.z += u_deltaTime * speed;
        
    float MaxDist = 50000.0;

    if(o_position.z > MaxDist * 0.8)
    {
        o_color.xyz = vec3( 1.0 - (o_position.z - MaxDist * 0.8) /(MaxDist * 0.2));
    }
    else if(o_position.z < -MaxDist * 0.8)
    {
        o_color.xyz = vec3( 1.0 + (o_position.z + MaxDist * 0.8) /(MaxDist * 0.2));
    }
   
    if(o_position.z > 50000.0)
    {
        o_position.z -= MaxDist * 2.0;
        o_color.xyz = vec3(0.0);
    }
   
}
