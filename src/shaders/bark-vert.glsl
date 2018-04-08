#version 300 es
precision highp float;

uniform mat4 u_Model;
uniform mat4 u_ModelInvTr;  

uniform mat4 u_View;   
uniform mat4 u_Proj; 
uniform mat4 u_ViewProj;

uniform float u_Time;
uniform vec4 u_Center;

in vec4 vs_Pos;
in vec4 vs_Nor;
in vec4 vs_Col;
in vec2 vs_UV;

out vec4 fs_Pos;
out vec4 fs_Nor;            
out vec4 fs_Col;           
out vec2 fs_UV;

void ApplyMainBending(inout vec3 vPos, vec2 vWind, float fBendScale){
	// Calculate the length from the ground, since we'll need it.
	float fLength = length(vPos);
	// Bend factor - Wind variation is done on the CPU.
	float fBF = vPos.y * fBendScale;
	// Smooth bending factor and increase its nearby height limit.
	fBF += 1.0;
	fBF *= fBF;
	fBF = fBF * fBF - fBF;
	fBF = fBF * fBF;
	// Displace position
	vec3 vNewPos = vPos;
	vNewPos.xz += vWind.xy * fBF;
	vPos.xyz = normalize(vNewPos.xyz)* fLength;
}


void main()
{
	vec3 vPos=vec3(u_Model * vs_Pos);	

    
	vec3 objectPosition = vec3(u_Center);
	vPos -= objectPosition;	// Reset the vertex to base-zero
	//Wind
	vec3 wind_dir = normalize(vec3(0.5, 0, 0));
    float wind_speed = 8.0;
    float wave_division_width = 5.0;
    float wave_info = (cos((dot(objectPosition, wind_dir) - wind_speed * u_Time) / wave_division_width) + 0.7);
	
	float wind_power = 15.0f;
    //vec3 w = wind_dir * wind_power * wave_info * fd * fr;
	vec3 w=wind_dir * wind_power * wave_info*0.05;
	vec2 Wind=vec2(w.x,w.z);

	float BendScale=0.024;
	ApplyMainBending(vPos, Wind, BendScale);
	vPos += objectPosition;

	fs_Col = vs_Col;
    fs_UV = vs_UV;
    fs_UV.y = fs_UV.y;
  
    fs_Nor = vs_Nor;
    vec4 new_localPos = inverse(u_Model) * vec4(vPos, 1.0);
    new_localPos /= new_localPos.w;
    fs_Pos = new_localPos;     

    gl_Position = u_ViewProj * vec4(vPos, 1.0);
}
