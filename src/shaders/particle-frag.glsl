#version 300 es
precision highp float;

uniform sampler2D u_frame0; //Scene
uniform mat4 u_View; 
uniform mat4 u_InvViewProj; 

in vec4 fs_Col;
in vec4 fs_Pos;
in vec2 fs_UV;

out vec4 out_Col;

float LinearDepth(float d)
{
	float f= 1000.0;
	float n = 0.1;
	return (2.0 * n) / (f + n - d * (f - n));
}

void main()
{
    float sceneDepth = texture(u_frame0, fs_UV).a;

    if(sceneDepth > 19.0)
	{
		sceneDepth -= 20.0;
	}
	else if(sceneDepth > 9.0)
	{
		sceneDepth -= 10.0;
	}

    if(sceneDepth > fs_Pos.a)
    {
         if(fs_Col.a > 4000.0)
        {
             //Forward
            vec3 CamForward = vec3(u_View[0][2], u_View[1][2], u_View[2][2]);
            //vec4 viewVec = u_InvViewProj * vec4(fs_UV, 1.0, 1.0);
            //viewVec /= viewVec.a;

            float ran = clamp(1.0 - (clamp(dot(CamForward.xyz, vec3(0.0, -1.0, 0.0)), 0.0, 1.0)), 0.0, 1.0);
           

            float dist = pow(smoothstep(0.0, 1.0, 1.0 - pow(fs_Pos.x * 10.0, 2.0)), 7.0) * pow(clamp(1.0 - pow(fs_Pos.y, 4.0 ), 0.0, 1.0), 1.0 / (ran * ran) );

            //dist = mix(dist, pow(clamp(1.0 - (fs_Pos.x * fs_Pos.x + fs_Pos.y * fs_Pos.y), 0.0, 1.0), 10.0) , pow(1.0 - ran, 20.0));

            out_Col = vec4(0.2, 0.2, 0.2, 0.0) * dist;
        }
        else
        {
            float dist = 1.0 - (length(fs_Pos.xyz) * 2.0);
            out_Col = vec4(dist) * fs_Col;
        }

        float diff = clamp( LinearDepth(sceneDepth) - LinearDepth(fs_Pos.a), 0.0, 1.0);

        out_Col.xyz *= pow(smoothstep(0.0, 1.0, diff), 0.4);
        out_Col.a = fs_Pos.a;

        
    }
    else
    {   
        out_Col = vec4(0.0);
    }

   

    
    out_Col = clamp(out_Col, 0.0, 1.0);
}
