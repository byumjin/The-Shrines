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
    vec4 targetPos = i_attract;

    vec4 prevPosition = i_position;
    vec4 prevVelocity = i_velocity;

    //calculate velocityPrime
    vec3 desiredVelocity;
    float u_MaxSpeed = 10.0;
    
   
    targetPos.y = 200.0;
    desiredVelocity = targetPos.xyz - prevPosition.xyz;
    desiredVelocity = normalize(desiredVelocity) * u_MaxSpeed;


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
    o_color.a = float(gl_VertexID)  + 0.1;



    if(u_particleInfo.z < 1.0) //false
    {
        if(o_position.y > 200.0)
        {
            o_position.y -= 220.0;

            //o_attract = vec4(i_position.a + u_CameraWPos.x, 250.0, i_attract.a + u_CameraWPos.z, i_attract.a);

            o_attract = vec4(i_attract.x, 250.0, i_attract.z, i_attract.a);
            o_position.x = o_attract.x;
            o_position.z = o_attract.z;
        }
        else if(o_position.y < 0.0)
        {
            o_position.x = i_position.x;
            o_position.y = i_velocity.a * 1.8 - 200.0;
            o_position.z = i_position.z;
            o_attract = i_attract;
        }
        else
        {
            o_attract = i_attract;
        }          
    }
    else //true
    {
        if(o_position.y < -190.0)
        {
            o_position.y += o_velocity.a;

            //o_attract = vec4(i_position.a + u_CameraWPos.x, i_attract.y, i_attract.a + u_CameraWPos.z, i_attract.a);
            o_attract = i_attract;
                
            o_position.x = o_attract.x;
            o_position.z = o_attract.z;
        }
        else if(o_position.y > 200.0)
        {
            o_position.y -= 220.0;
            //o_attract = vec4(i_position.a + u_CameraWPos.x, i_attract.y, i_attract.a + u_CameraWPos.z, i_attract.a);

            o_attract = i_attract;
                
            o_position.x = o_attract.x;
            o_position.z = o_attract.z;
        }
        else
            o_attract = i_attract;
    }
}
