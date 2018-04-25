#version 300 es
precision highp float;

#define PI 3.1415926

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

vec2 rotate2D_Axis_Scale(vec2 v, float a, vec2 axis, float scale) {
    float s = sin(a);
    float c = cos(a);
    mat2 m = mat2(c, -s, s, c);
    return axis + m * normalize(v-axis) * scale;
}

float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

void main()
{   
    o_position = i_position;
    o_velocity = i_velocity;
    o_attract = i_attract;

    o_color = i_color;
    o_color.a = float(gl_VertexID) + 0.1;

    float speed = 10.0;
   


    if(u_particleInfo.z < 1.0) //false
    {
        if(o_position.y > 50.0)
        {
            o_position.y = 0.0 + o_velocity.w;
        }
        else if(o_position.y < 0.0)
        {

        }
        else
        {
            o_position.y += u_deltaTime * speed;
            float radius = ((1.0+sin(u_Time*PI/2.0+o_velocity.z))/2.0 + 1.0)*o_velocity.y * pow((o_position.y/100.0+0.75),2.0);
            o_position.xz = rotate2D_Axis_Scale(o_position.xz, u_deltaTime*o_velocity.x, vec2(0.0,252.0), radius);
        }     
    }
    else //true
    {
        if(o_position.y > 50.0)
        {
            o_position.y -= 50.0;
            o_position.y += u_deltaTime * speed;
            float radius = ((1.0+sin(u_Time*PI/2.0+o_velocity.z))/2.0 + 1.0)*o_velocity.y * pow((o_position.y/100.0+0.75),2.0);
            o_position.xz = rotate2D_Axis_Scale(o_position.xz, u_deltaTime*o_velocity.x, vec2(0.0,252.0), radius);
        }
        else
        {
            o_position.y += u_deltaTime * speed;
            float radius = ((1.0+sin(u_Time*PI/2.0+o_velocity.z))/2.0 + 1.0)*o_velocity.y * pow((o_position.y/100.0+0.75),2.0);
            o_position.xz = rotate2D_Axis_Scale(o_position.xz, u_deltaTime*o_velocity.x, vec2(0.0,252.0), radius);
        }
    }
}
