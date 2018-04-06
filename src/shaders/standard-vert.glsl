#version 300 es
precision highp float;

uniform mat4 u_Model;
uniform mat4 u_ModelInvTr;  

uniform mat4 u_View;   
uniform mat4 u_Proj; 
uniform mat4 u_ViewProj;

in vec4 vs_Pos;
in vec4 vs_Nor;
in vec4 vs_Col;
in vec2 vs_UV;

out vec4 fs_Pos;
out vec4 fs_Nor;            
out vec4 fs_Col;           
out vec2 fs_UV;

void main()
{
    fs_Col = vs_Col;
    fs_UV = vs_UV;
    fs_UV.y = fs_UV.y;
  
    fs_Nor = vs_Nor;
    fs_Pos = vs_Pos;    
    gl_Position = u_ViewProj * u_Model * vs_Pos;
}
