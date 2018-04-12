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

const int rainIndex = 16384;
const int rainStainIndex = 1024;


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
   
    vec4 targetPos = i_attract;

    vec4 prevPosition = i_position;
    vec4 prevVelocity = i_velocity;

    //calculate velocityPrime
    vec3 desiredVelocity;
    float u_MaxSpeed = 20.0;
    
    if(gl_VertexID > rainIndex) //rain
    {
        targetPos.y = -20.0;
        desiredVelocity = targetPos.xyz - prevPosition.xyz;
        desiredVelocity = normalize(desiredVelocity) * 100.0;
    }
    else if(gl_VertexID > rainStainIndex) //rain
    {
        desiredVelocity = targetPos.xyz - prevPosition.xyz;
        desiredVelocity = normalize(desiredVelocity) * u_MaxSpeed;
    }
    else
    {
        desiredVelocity = targetPos.xyz - prevPosition.xyz;
        desiredVelocity = normalize(desiredVelocity) * 10.0;
    }

    

    /*
    //Seek
    if(targetPos.w == 1.0)
    {
       desiredVelocity = targetPos.xyz - prevPosition.xyz;
       desiredVelocity = normalize(desiredVelocity) * u_MaxSpeed;
    }
    //Flee
    else if(targetPos.w == 2.0)
    {
       desiredVelocity = prevPosition.xyz - targetPos.xyz;     
       desiredVelocity = normalize(desiredVelocity) * u_MaxSpeed;
    }    
    //Designed
    else
    {
        desiredVelocity =  fs_Col.xyz - prevPosition.xyz;//  vec3(0.0);
    } 

    */   

    vec3 acceleration = (desiredVelocity - prevVelocity.xyz);
    
    vec3 velocityPrime = acceleration;
    vec3 positionPrime = prevVelocity.xyz;


    //runge_kutta_2nd

    //calculate Vel
    vec3 PredictVel = prevVelocity.xyz + velocityPrime * u_deltaTime;
    vec3 PredictVelPrime = (PredictVel - prevVelocity.xyz) / u_deltaTime;

    o_velocity = vec4(prevVelocity.xyz + (u_deltaTime * 0.5) * (velocityPrime + PredictVelPrime), i_velocity.a);


    //calculate Pos
    vec3 PredictPos = prevPosition.xyz + positionPrime * u_deltaTime;
    vec3 PredictPosPrime = (PredictPos - prevPosition.xyz) / u_deltaTime;

    o_position = vec4(prevPosition.xyz + (u_deltaTime * 0.5) * (positionPrime + PredictPosPrime), i_position.a);

    o_color = i_color;
    o_color.a = float(gl_VertexID);

    if(gl_VertexID > rainIndex) //rain
    {
        
        if(u_particleInfo.x < 1.0) //false
        {
            if(o_position.y < -10.0)
            {
                o_position.y = -200.0;

                o_attract = vec4(i_position.a + u_CameraWPos.x, -20.0, i_attract.a + u_CameraWPos.z, i_attract.a);
                
                o_position.x = o_attract.x;
                o_position.z = o_attract.z;
            }
            else
            {
               o_attract = i_attract;
            }          
        }
        else //true
        {
            if(o_position.y < -90.0)
            {
                o_position.y += 290.0 + o_velocity.a;
                o_attract = vec4(i_position.a + u_CameraWPos.x, i_attract.y, i_attract.a + u_CameraWPos.z, i_attract.a);
                
                o_position.x = o_attract.x;
                o_position.z = o_attract.z;
            }
            else if(o_position.y < -5.0)
            {
                o_position.y += 105.0;
                o_attract = vec4(i_position.a + u_CameraWPos.x, i_attract.y, i_attract.a + u_CameraWPos.z, i_attract.a);
                
                o_position.x = o_attract.x;
                o_position.z = o_attract.z;
            }
            else
                o_attract = i_attract;
        }
    }
    else if(gl_VertexID > rainStainIndex)
    {
        if(u_particleInfo.x < 1.0) //false
        {
            o_position = i_position;
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

                o_position.y = 0.2;
           
            
        }

        o_attract = i_attract;
    }
    else
    {
        if(u_particleInfo.y < 1.0) // false
        {
            vec3 originalPos = vec3(i_position.a, i_velocity.a, i_attract.a);
            o_attract = vec4(originalPos.x, -100.0, originalPos.z, i_attract.a);
        }
        else
        {
            float scale = 4.0;
            vec3 originalPos = vec3(i_position.a * scale, i_velocity.a * 0.2, i_attract.a * scale);
            vec4 newPos = rotationMatrix(vec3(0.0 ,1.0, 0.0), u_Time * 0.2 ) * vec4( originalPos , 1.0);
            
            o_attract = vec4(newPos.xyz, i_attract.a);
            //o_attract = vec4(originalPos.xyz, i_attract.a);
        }
    }   
    
}
