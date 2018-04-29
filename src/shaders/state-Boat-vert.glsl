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

    float rad = i_position.a;
    float radius = i_velocity.a;

    float time = i_color.x < 0.0 ? u_Time : -u_Time;

    float newRad = rad + time * i_velocity.x;
    
    o_position.x = sin(newRad) * radius;
    o_position.z = cos(newRad) * radius;

    o_velocity = i_velocity;
    o_attract = i_attract;

    o_color = i_color;

    o_color.y = newRad;
    
}
