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

void main()
{   
    o_position = i_position;
    o_velocity = i_velocity;
    o_attract = i_attract;

    o_color = i_color;
    o_color.a = float(gl_VertexID) + 0.1;

    float speed = 400.0 * (i_velocity.x + 1.0);
    o_position.z += u_deltaTime * speed;
        
    float MaxDist = 50000.0;

    if(o_position.z > 40000.0)
    {
        o_color.xyz = vec3( 1.0 - (o_position.z - 40000.0) /(10000.0));
    }
    else if(o_position.z < -40000.0)
    {
        o_color.xyz = vec3( 1.0 + (o_position.z + 40000.0) /(10000.0));
    }
   
    if(o_position.z > 50000.0)
    {
        o_position.z -= 100000.0;
        o_color.xyz = vec3(0.0);
    }
   
}
