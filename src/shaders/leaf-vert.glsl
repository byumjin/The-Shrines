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

#define SIDE_TO_SIDE_FREQ1 0.675
#define SIDE_TO_SIDE_FREQ2 0.293
#define UP_AND_DOWN_FREQ1 0.175
#define UP_AND_DOWN_FREQ2 0.063

vec4 SmoothCurve( vec4 x ) {
  return x * x * ( vec4(3.0f,3.0f,3.0f,3.0f) - 2.0 * x ) ;
}
vec4 TriangleWave( vec4 x ) {
  return abs( fract( x + 0.5 ) * 2.0 - 1.0 );
}
vec4 SmoothTriangleWave( vec4 x ) {
  return SmoothCurve( TriangleWave( x ) );
}

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

void ApplyDetailBending(
	inout vec3 vPos,		// The final world position of the vertex being modified
	vec2 Wind,
	vec3 vNormal,			// The world normal for this vertex
	vec3 objectPosition,	        // The world position of the plant instance (same for all vertices)
	float fDetailPhase,		// Optional phase for side-to-side. This is used to vary the phase for side-to-side motion
	float fBranchPhase,		// The green vertex channel per Crytek's convention
	float fTime,			// Ever-increasing time value (e.g. seconds ellapsed)
	float fEdgeAtten,		// "Leaf stiffness", red vertex channel per Crytek's convention
	float fBranchAtten,		// "Overall stiffness", *inverse* of blue channel per Crytek's convention
	float fBranchAmp,		// Controls how much up and down
	float fSpeed,			// Controls how quickly the leaf oscillates
	float fDetailFreq,		// Same thing as fSpeed (they could really be combined, but I suspect
		// this could be used to let you additionally control the speed per vertex).
	float fDetailAmp		// Controls how much back and forth
	)		
{
	// Phases (object, vertex, branch)
	// fObjPhase: This ensures phase is different for different plant instances, but it should be
	// the same value for all vertices of the same plant.
	float fObjPhase = dot(objectPosition.xyz, vec3(1));  
	fBranchPhase += fObjPhase;
	float fVtxPhase = dot(vPos.xyz, vec3(fDetailPhase + fBranchPhase));  

	vec2 vWavesIn = vec2(fTime) + vec2(fVtxPhase, fBranchPhase );
	vec4 vWaves = (fract( vWavesIn.xxyy *
					   vec4(SIDE_TO_SIDE_FREQ1, SIDE_TO_SIDE_FREQ2, UP_AND_DOWN_FREQ1, UP_AND_DOWN_FREQ2) ) *
					   2.0 - 1.0 ) * fSpeed * fDetailFreq;
	vWaves = SmoothTriangleWave( vWaves );
	vec2 vWavesSum = vWaves.xz + vWaves.yw;  

	// -fBranchAtten is how restricted this vertex of the leaf/branch is. e.g. close to the stem
	//  it should be 0 (maximum stiffness). At the far outer edge it might be 1.
	//  In this sample, this is controlled by the blue vertex color.
	// -fEdgeAtten controls movement in the plane of the leaf/branch. It is controlled by the
	//  red vertex color in this sample. It is supposed to represent "leaf stiffness". Generally, it
	//  should be 0 in the middle of the leaf (maximum stiffness), and 1 on the outer edges.
	// -Note that this is different from the Crytek code, in that we use vPos.xzy instead of vPos.xyz,
	//  because I treat y as the up-and-down direction.
    // vPos.xyz += vWavesSum.x * vec3(fEdgeAtten * fDetailAmp * vNormal.xyz);
    // vPos.y += vWavesSum.y * fBranchAtten * fBranchAmp;
    vPos.xyz +=  vWavesSum.xxy * vec3(fEdgeAtten * fDetailAmp *
                            vNormal.xy, fBranchAtten * fBranchAmp);
}

void main()
{
	vec3 vPos=vec3(u_Model * vs_Pos);
	vec3 normalDir=normalize(vec3(u_ModelInvTr * vs_Nor));

	vec3 objectPosition = vec3(u_Center);
	vPos -= objectPosition;	// Reset the vertex to base-zero
	//Wind
	vec3 wind_dir = normalize(vec3(0.5, 0, 0));
    float wind_speed = 1.0;
    float wave_division_width = 1.0;
    float wave_info = (cos((dot(objectPosition, wind_dir) - wind_speed * u_Time) / wave_division_width) + 0.7);
	
	float wind_power = 15.0f;
    //vec3 w = wind_dir * wind_power * wave_info * fd * fr;
	vec3 w=wind_dir * wind_power * wave_info;
	vec2 Wind=vec2(w.x*0.05,w.z*0.05);

	float BendScale=0.024;
	ApplyMainBending(vPos, Wind, BendScale);
	vPos += objectPosition;


	float BranchAmp=0.2;
	float DetailAmp=0.1;
	vec2 WindDetail = vec2(w.x * 0.5,w.z*0.5);
	float windStrength = length(WindDetail);
	ApplyDetailBending(
		vPos,
		WindDetail,
		normalDir,
		objectPosition,
		0.0,					// Leaf phase - not used in this scenario, but would allow for variation in side-to-side motion
		vs_Col.g,		// Branch phase - should be the same for all verts in a leaf/branch.
		u_Time,
		vs_Col.r,		// edge attenuation, leaf stiffness
		1.0 - vs_Col.b,  // branch attenuation. High values close to stem, low values furthest from stem.
				// For some reason, Crysis uses solid blue for non-moving, and black for most movement.
				// So we invert the blue value here.
		BranchAmp * windStrength, // branch amplitude. Play with this until it looks good.
		1.0f,					// Speed. Play with this until it looks good.
		0.13f,					// Detail frequency. Keep this at 1 unless you want to have different per-leaf frequency
		DetailAmp * windStrength	// Detail amplitude. Play with this until it looks good.
		);

	fs_Col = vs_Col;
    fs_UV = vs_UV;
    fs_UV.y = fs_UV.y;
  
    fs_Nor = vs_Nor;
    vec4 new_localPos = inverse(u_Model) * vec4(vPos, 1.0);
    new_localPos /= new_localPos.w;
    fs_Pos = new_localPos;    

    gl_Position = u_ViewProj * vec4(vPos, 1.0);
}
