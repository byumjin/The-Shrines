#version 300 es
precision highp float;

uniform float u_deltaTime;
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
   
    vec4 targetPos = i_attract;

    vec4 prevPosition = i_position;
    vec4 prevVelocity = i_velocity;

    //calculate velocityPrime
    vec3 desiredVelocity;
    float u_MaxSpeed = 20.0;
    
    if(gl_VertexID > 4000) //rain
    {
        targetPos.y = -20.0;
        desiredVelocity = targetPos.xyz - prevPosition.xyz;
        desiredVelocity = normalize(desiredVelocity) * 100.0;
    }
    else
    {
        desiredVelocity = targetPos.xyz - prevPosition.xyz;
        desiredVelocity = normalize(desiredVelocity) * u_MaxSpeed;
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

    if(gl_VertexID > 4000) //rain
    {
        
        if(u_particleInfo.x < 1.0) //false
        {
            if(o_position.y < -5.0)
            {
                o_position.y = -100.0;

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
                o_position.y += 190.0 + o_velocity.a;
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
    else
    {
        if(u_particleInfo.y < 1.0) // false
        {
            o_attract = vec4(i_attract.x, -20.0, i_attract.z, i_attract.a);
        }
        else
        {
            o_attract = vec4(i_position.a, i_velocity.a, i_attract.a, i_attract.a);
        }

       
    }   
    
}
