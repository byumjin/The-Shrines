#version 300 es
precision highp float;

#define EPSILON 1e-10

in vec2 fs_UV;
out vec4 out_Col;

uniform sampler2D u_frame0; //Scene
uniform vec2 u_screenSize;
uniform vec4 u_chromaticInfo; //x:dispersal, y:distortion, w : ColorTemp

vec4 textureDistorted(sampler2D tex, vec2 texcoord,  vec2 direction, // direction of distortion
              vec3 distortion)
  {
    return vec4
      (
		texture(tex, texcoord + direction * distortion.r).r,
		texture(tex, texcoord + direction * distortion.g).g,
		texture(tex, texcoord + direction * distortion.b).b,
        0.0
      );
  }
  
void main()
{
 
  const int uGhosts = 3; // number of ghost samples
  float uGhostDispersal = 0.2; // dispersion factor
  float uDistortion = 1.5;
  const float u_intensity = 0.5;


  vec2 texcoord = fs_UV;
  //texcoord.y = 1.0 - texcoord.y;

  vec3 distortion = vec3(-u_screenSize.x * uDistortion, 0.0, u_screenSize.x * uDistortion);
  
  // ghost vector to image centre:
  vec2 ghostVec = (vec2(0.5, 0.5) - texcoord) * uGhostDispersal;
  
  vec3 direction = normalize(vec3(ghostVec, 0.0));
  // sample ghosts:  
  vec4 result = vec4(0,0,0,0);
  vec4 ghost = vec4(0, 0, 0, 0);

  for(int i = 0; i < uGhosts; i++)
  {
     vec2 offset = fract(texcoord + ghostVec * float(i + 1) * 2.0 );
     float att = (1.0 - float(i + 1) / float(uGhosts));
     ghost += textureDistorted(u_frame0, offset, direction.xy, distortion) * att;
     ghost += textureDistorted(u_frame0, vec2(1.0) - offset, direction.xy, distortion) * att;
    
  }  


  float weightLens = length(vec2(0.5, 0.5) - texcoord) / length(vec2(0.5, 0.5));
  weightLens = pow( clamp(1.0 - clamp(weightLens, 0.0, 1.0), 0.0, 1.0), 3.0);
  //weightLens *= 2.0;
  ghost *= weightLens;

  result += ghost;

  

/*
  // sample halo:
  float uHaloWidth = 0.45;
  vec2 haloVec = normalize(ghostVec) * uHaloWidth;
  
  result = textureDistorted(u_frame0, texcoord + haloVec, direction.xy, distortion) *weight;
  result *= 1.0;
  result += ghost;
  */
 
  out_Col = result * u_intensity;
  out_Col.w = 1.0;
}
