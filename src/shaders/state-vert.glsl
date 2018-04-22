#version 300 es
precision highp float;

#define M_PI 3.1415926535897932384626433832795

uniform float u_deltaTime;
uniform float u_Time;

uniform vec3 u_CameraWPos;
uniform vec4 u_particleInfo;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(float x) { float i = floor(x); float f = fract(x); float u = f * f * (3.0 - 2.0 * f); return mix(hash(i), hash(i + 1.0), u); }
float noise(vec2 x) { vec2 i = floor(x); vec2 f = fract(x); float a = hash(i); float b = hash(i + vec2(1.0, 0.0)); float c = hash(i + vec2(0.0, 1.0)); float d = hash(i + vec2(1.0, 1.0)); vec2 u = f * f * (3.0 - 2.0 * f); return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y; }

float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


layout(location = 0) in vec4 i_position;
layout(location = 1) in vec4 i_velocity;
layout(location = 2) in vec4 i_color;
layout(location = 3) in vec4 i_attract;

out vec4 o_position;
out vec4 o_velocity;            
out vec4 o_color;
out vec4 o_attract;

const int rainIndex = 0;
const int rainStainIndex = 0;


vec2 squareToDiskConcentric(vec2 xi) 
{
    float phi;
    float radius;

        float a = 2.0*xi.x-1.0; // (a,b) is now on [-1,1]ˆ2
        float b = 2.0*xi.y-1.0;

        if (a > -b) // region 1 or 2
        {
            if (a > b) // region 1, also |a| > |b|
            {
                radius = a;
                phi = (M_PI*0.25) * (b/a);
            }
            else // region 2, also |b| > |a|
            {
                radius = b;
                phi = (M_PI*0.25) * (2.0 - (a/b));
            }
        }
        else // region 3 or 4
        {
            if (a < b) // region 3, also |a| >= |b|, a != 0
            {
                radius = -a;
                phi = (M_PI*0.25 ) * (4.0 + (b/a));
            }
            else // region 4, |b| >= |a|, but a==0 and b==0 could occur.
            {
                radius = -b;
                if (b != 0.0)
                    phi = (M_PI*0.25 ) * (6.0 - (a/b));
                else
                    phi = 0.0;
            }
        }

        return vec2(radius * cos(phi), radius * sin(phi));
}

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
    o_color = i_color;
    o_color.a = float(gl_VertexID) + 0.1;

    o_attract = i_attract;
    o_velocity = i_velocity;
    o_position = i_position;

    float speed = 300.0;
    

    if(gl_VertexID >= rainIndex) //rain
    {        
        o_position.y -= u_deltaTime * speed;

        if(u_particleInfo.x < 1.0) //false
        {   
            if(o_position.y < -10.0)
            {
                o_position.y = -o_velocity.w;
            }                    
        }
        else //true
        {
            if(o_position.y < -10.0)
            {
                o_position.x = u_CameraWPos.x + o_position.w;
                o_position.z = u_CameraWPos.z + o_attract.w;
                o_position.y = 150.0 + o_velocity.w;
            }
        }
    }
    else if(gl_VertexID >= rainStainIndex)
    {
        if(u_particleInfo.x < 1.0) //false
        {
            o_position.y = -100.0;
        }
        else //true
        {
            float time = i_color.z + u_deltaTime;

            if(time < 0.2)
            {
                 o_color.z = time;
                 o_position = i_position;                 
            }
            else
            {                
                vec2 xi = vec2(noise(i_position.x), noise(i_position.z));
                //change pos
                o_position.xz = squareToDiskConcentric( xi) * 200.0  + u_CameraWPos.xz;

                o_color.z -= (0.2 + xi.x *0.1);
            }

            o_position.y = 1.5;
        }
    }
    
}
