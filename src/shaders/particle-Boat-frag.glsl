#version 300 es
precision highp float;

uniform sampler2D u_frame0; //Scene
uniform sampler2D u_frame1; //Albedo

uniform mat4 u_View; 
uniform mat4 u_InvViewProj; 

in vec4 fs_Col;
in vec4 fs_Pos;
in vec2 fs_UV;
in vec2 fs_UV_SS;

out vec4 out_Col;

float LinearDepth(float d, float f)
{
	//float f= 1000.0;
	float n = 0.1;
	return (2.0 * n) / (f + n - d * (f - n));
}

void main()
{
    float sceneDepth = texture(u_frame0, fs_UV_SS).a;
    float particleDepth = fs_Pos.a;

    if(sceneDepth > 19.0)
	{
		sceneDepth -= 20.0;
	}
	else if(sceneDepth > 9.0)
	{
		sceneDepth -= 10.0;
	}

    if(sceneDepth > particleDepth)
    {
        out_Col.xyz = texture(u_frame1, fs_UV).xyz * 0.5;
        float linearDepth = LinearDepth(particleDepth, 1000.0);
	    out_Col.a = 1.0 - linearDepth*linearDepth;

    }
    else
    {   
        out_Col = vec4(0.0);
    }

    
}
