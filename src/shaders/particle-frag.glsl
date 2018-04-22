#version 300 es
precision highp float;

uniform sampler2D u_frame0; //Scene
uniform mat4 u_View; 
uniform mat4 u_InvViewProj; 
uniform vec4 u_particleInfo;

in vec4 fs_Col;
in vec4 fs_Pos;
in vec2 fs_UV;
in vec2 fs_UV_SS;

out vec4 out_Col;

const int rainIndex = 8192;
const int rainStainIndex = 0;

float LinearDepth(float d, float f)
{
	float n = 0.1;
	return (2.0 * n) / (f + n - d * (f - n));
}

void main()
{
    float sceneDepth = texture(u_frame0, fs_UV_SS).a;

    if(sceneDepth > 19.0)
	{
		sceneDepth -= 20.0;
	}
	else if(sceneDepth > 9.0)
	{
		sceneDepth -= 10.0;
	}

    float PerticleIndex = fs_Col.a;
    float particleDepth = fs_Pos.a;

    if(sceneDepth > particleDepth)
    {
        if(PerticleIndex >= float(rainIndex) )
        {
            //Forward
            float dist;
            if(u_particleInfo.x == 1.0)
                dist = pow(smoothstep(0.0, 1.0, 1.0 - pow(fs_Pos.x * 10.0, 2.0)), 10.0) * clamp(1.0 - pow(fs_Pos.y, 4.0 ), 0.0, 1.0);
            else if(u_particleInfo.x == 2.0)
                dist = pow(1.0 - (length(fs_Pos.xyz) * 4.0), 1.5);
            float closeFade = clamp(LinearDepth(particleDepth, 1000.0) * 100.0, 0.0, 1.0);

            out_Col = vec4(0.2, 0.2, 0.2, 0.0) * dist * closeFade;
        }
        else if(PerticleIndex >= float(rainStainIndex) )
        {
            float dist = 1.0 - (length(fs_Pos.xyz) * 2.0);
            //float height = clamp( sin(  sqrt(fs_Pos.x*fs_Pos.x + fs_Pos.y*fs_Pos.y) * 100.0  ), 0.0, 1.0) * 0.2;

            if(fs_Col.z >= 0.0)
                out_Col = vec4(dist) * 6.0 * pow( (0.2 - fs_Col.z) / 0.2 , 4.0);
            else 
                out_Col = vec4(0.0);
        } 

        float diff = clamp( LinearDepth(sceneDepth, 1000.0) - LinearDepth(particleDepth, 1000.0), 0.0, 1.0);
             out_Col.xyz *= pow(smoothstep(0.0, 1.0, diff), 0.3);

       
        out_Col.a = particleDepth;

        
    }
    else
    {   
        out_Col = vec4(0.0);
    }

    float linearDepth = LinearDepth(particleDepth, 50.0);
	out_Col.a *= 1.0 - pow(linearDepth, 2.0);

   

    
    out_Col = clamp(out_Col, 0.0, 1.0);
}
