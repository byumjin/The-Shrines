#version 300 es
precision highp float;

uniform float u_deltaTime;

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
   
    vec4 targetPos = i_attract;

    vec4 prevPosition = i_position;
    vec4 prevVelocity = i_velocity;

    //calculate velocityPrime
    vec3 desiredVelocity;
    float u_MaxSpeed = 20.0;
    
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
    /*
    //Designed
    else
    {
        desiredVelocity =  fs_Col.xyz - prevPosition.xyz;//  vec3(0.0);
    } 
    */   

    vec3 acceleration = (desiredVelocity - prevVelocity.xyz);
    
    vec3 velocityPrime = acceleration;
    vec3 positionPrime = prevVelocity.xyz;

    //out_velocity = prevVelocity;    
    //out_position = prevPosition;



    //runge_kutta_2nd

    //calculate Vel
    //vec3 prevVelocity = texture(u_prevVelocityTexture, fs_UV).xyz;
    //vec3 velocityPrime = texture(u_VelocityPrimeTexture, fs_UV).xyz;

    vec3 PredictVel = prevVelocity.xyz + velocityPrime * u_deltaTime;
    vec3 PredictVelPrime = (PredictVel - prevVelocity.xyz) / u_deltaTime;

    o_velocity = vec4(prevVelocity.xyz + (u_deltaTime * 0.5) * (velocityPrime + PredictVelPrime), 1.0);


    //calculate Pos
    //vec4 prevPosition = texture(u_prevPositionTexture, fs_UV);
    //vec3 positionPrime = texture(u_PositionPrimeTexture, fs_UV).xyz;

    vec3 PredictPos = prevPosition.xyz + positionPrime * u_deltaTime;
    vec3 PredictPosPrime = (PredictPos - prevPosition.xyz) / u_deltaTime;

    o_position = vec4(prevPosition.xyz + (u_deltaTime * 0.5) * (positionPrime + PredictPosPrime), 1.0);

   o_color = i_color;
   o_attract = i_attract;
}
