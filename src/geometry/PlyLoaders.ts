
class PlyVertex{
	x:number;
	y:number;
	z:number;
	nx:number;
	ny:number;
	nz:number;
	u:number;
	v:number;
	r:number;
	g:number;
	b:number;

	constructor(){
		this.y = 0;
        this.z = 0;
        this.nx= 0; // a_Normal
        this.ny= 0;
        this.nz= 0;
        this.u = 0; // a_Texture
        this.v = 0;
        this.r = 0; // a_Color
        this.g = 0;
        this.b = 0;

	}
}

class PlyFace{
	a:number;
	b:number;
	c:number;
	constructor(a:number, b:number, c:number){
		this.a = a;
		this.b = b;
		this.c = c;
	}
}



export class PlyLoader{
	ModelPath: string;
	Ply_Vertices: number = 0;
	Ply_Faces: number = 0;
	ReadingPlyData: boolean = false;
	Ply_DataLength: number = 11; // x,y,z,nx,ny,nz,u,v,r,g,b
	FaceIndex: number = 0;
	VAO_VertexIndex: number = 0;

	arrayVertex:Array<number>=[];
	arrayNormal:Array<number>=[];
	arrayTexture:Array<number>=[];
	arrayColor:Array<number>=[];
	arrayIndex:Array<number>=[];

	constructor(){
	}

	load(fileText:string){
		let lines = fileText.split('\n');
		var PLY_index = 0;

        var vertices = null;

        var faces = null;

        console.log("PLY number of lines = " + lines.length);

        for (var i = 0; i < lines.length; i++)
        {
            if (this.ReadingPlyData)
            {
                var e = lines[i].split(" ");

                // Read vertices
                if (PLY_index < this.Ply_Vertices) {

                    vertices[PLY_index] = new PlyVertex();
                    vertices[PLY_index].x = e[0];
                    vertices[PLY_index].y = e[1];
                    vertices[PLY_index].z = e[2];
                    vertices[PLY_index].nx = e[3];
                    vertices[PLY_index].ny = e[4];
                    vertices[PLY_index].nz = e[5];
                    vertices[PLY_index].u = e[6];
                    vertices[PLY_index].v = e[7];
                    vertices[PLY_index].r = e[8];
                    vertices[PLY_index].g = e[9];
                    vertices[PLY_index].b = e[10];

                // Read faces
                } else {

                    // Reset index for building VAOs
                    if (PLY_index == this.Ply_Vertices) {

                        console.log("Resetting Index...");

                        this.FaceIndex = 0;

                        this.VAO_VertexIndex = 0;
                    }

                    // Wire face data to appropriate vertices
                    var n = e[0]; // unused, always 3; assumes triangulated models only
                    var a = e[1]; // face vertex A
                    var b = e[2]; // face vertex B
                    var c = e[3]; // face vertex C

                    if (this.FaceIndex < this.Ply_Faces)
                    {
                        // We don't really have to *store* face data
                        // faces[FaceIndex] = new PLY_Face(a, b, c);

                        // vertices
                        this.arrayVertex.push(vertices[Number(a)].x);
                        this.arrayVertex.push(vertices[Number(a)].y);
                        this.arrayVertex.push(vertices[Number(a)].z);
                        this.arrayVertex.push(vertices[Number(b)].x);
                        this.arrayVertex.push(vertices[Number(b)].y);
                        this.arrayVertex.push(vertices[Number(b)].z);
                        this.arrayVertex.push(vertices[Number(c)].x);
                        this.arrayVertex.push(vertices[Number(c)].y);
                        this.arrayVertex.push(vertices[Number(c)].z);

                        // normals
                        this.arrayNormal.push(vertices[Number(a)].nx);
                        this.arrayNormal.push(vertices[Number(a)].ny);
                        this.arrayNormal.push(vertices[Number(a)].nz);
                        this.arrayNormal.push(vertices[Number(b)].nx);
                        this.arrayNormal.push(vertices[Number(b)].ny);
                        this.arrayNormal.push(vertices[Number(b)].nz);
                        this.arrayNormal.push(vertices[Number(c)].nx);
                        this.arrayNormal.push(vertices[Number(c)].ny);
                        this.arrayNormal.push(vertices[Number(c)].nz);

                        // colors
                        this.arrayColor.push(vertices[Number(a)].r);
                        this.arrayColor.push(vertices[Number(a)].g);
                        this.arrayColor.push(vertices[Number(a)].b);
                        this.arrayColor.push(vertices[Number(b)].r);
                        this.arrayColor.push(vertices[Number(b)].g);
                        this.arrayColor.push(vertices[Number(b)].b);
                        this.arrayColor.push(vertices[Number(c)].r);
                        this.arrayColor.push(vertices[Number(c)].g);
                        this.arrayColor.push(vertices[Number(c)].b);

                        // uv
                        this.arrayTexture.push(vertices[Number(a)].u);
                        this.arrayTexture.push(vertices[Number(a)].v);
                        this.arrayTexture.push(vertices[Number(b)].u);
                        this.arrayTexture.push(vertices[Number(b)].v);
                        this.arrayTexture.push(vertices[Number(c)].u);
                        this.arrayTexture.push(vertices[Number(c)].v);

                        // index
                        this.arrayIndex.push(this.FaceIndex);
                    }

                    this.FaceIndex++;
                }

                PLY_index++;

            } else { // Still reading header...

                // Read number of vertices stored in the file
                if (lines[i].substr(0, "element vertex".length) == "element vertex")
                    this.Ply_Vertices = Number(lines[i].split(" ")[2]);

                // Read number of faces stored in the file
                if (lines[i].substr(0, "element face".length) == "element face")
                    this.Ply_Faces = Number(lines[i].split(" ")[2]);
            }

            // Finished reading header data, prepare for reading vertex data
            if (lines[i] == "end_header") {

                // Allocate enough space for vertices
                vertices = new Array(this.Ply_Vertices);

                // Allocate enough space for faces
                faces = new Array(this.Ply_Faces);
                this.ReadingPlyData = true;
            }
        }

        console.log("PLY_Vertices = " + this.Ply_Vertices + " loaded");
        console.log("PLY_Faces = " + this.Ply_Faces + " loaded");
        console.log("arrayVertex length = " + this.arrayVertex.length);
        console.log("arrayNormal length = " + this.arrayNormal.length);
        console.log("arrayTexture length = " + this.arrayTexture.length);
        console.log("arrayColor length = " + this.arrayColor.length);
        console.log("arrayIndex length = " + this.arrayIndex.length);

	}
}

export function loadPLY(filePath:string){
		var vertices = null;

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {

            if (xmlhttp.readyState == XMLHttpRequest.DONE) {

                if (xmlhttp.status == 200) {

                    var data = xmlhttp.responseText;

                    var lines = data.split("\n");

                    var PLY_index = 0;

                    var arrayVertex:Array<number>=[], arrayNormal:Array<number>=[], arrayTexture:Array<number>=[], arrayColor:Array<number>=[], arrayIndex:Array<number>=[];

                    var vertices = null;

                    var faces = null;

                    var loader = new PlyLoader();
                    console.log("PLY number of lines = " + lines.length);

                    for (var i = 0; i < lines.length; i++)
                    {
                        if (loader.ReadingPlyData)
                        {
                            var e = lines[i].split(" ");

                            // Read vertices
                            if (PLY_index < loader.Ply_Vertices) {

                                vertices[PLY_index] = new PlyVertex();
                                vertices[PLY_index].x = e[0];
                                vertices[PLY_index].y = e[1];
                                vertices[PLY_index].z = e[2];
                                vertices[PLY_index].nx = e[3];
                                vertices[PLY_index].ny = e[4];
                                vertices[PLY_index].nz = e[5];
                                vertices[PLY_index].u = e[6];
                                vertices[PLY_index].v = e[7];
                                vertices[PLY_index].r = e[8];
                                vertices[PLY_index].g = e[9];
                                vertices[PLY_index].b = e[10];

                            // Read faces
                            } else {

                                // Reset index for building VAOs
                                if (PLY_index == loader.Ply_Vertices) {

                                    console.log("Resetting Index...");

                                    loader.FaceIndex = 0;

                                    loader.VAO_VertexIndex = 0;
                                }

                                // Wire face data to appropriate vertices
                                var n = e[0]; // unused, always 3; assumes triangulated models only
                                var a = e[1]; // face vertex A
                                var b = e[2]; // face vertex B
                                var c = e[3]; // face vertex C

                                if (loader.FaceIndex < loader.Ply_Faces)
                                {
                                    // We don't really have to *store* face data
                                    // faces[FaceIndex] = new PLY_Face(a, b, c);

                                    // vertices
                                    arrayVertex.push(vertices[Number(a)].x);
                                    arrayVertex.push(vertices[Number(a)].y);
                                    arrayVertex.push(vertices[Number(a)].z);
                                    arrayVertex.push(vertices[Number(b)].x);
                                    arrayVertex.push(vertices[Number(b)].y);
                                    arrayVertex.push(vertices[Number(b)].z);
                                    arrayVertex.push(vertices[Number(c)].x);
                                    arrayVertex.push(vertices[Number(c)].y);
                                    arrayVertex.push(vertices[Number(c)].z);

                                    // normals
                                    arrayNormal.push(vertices[Number(a)].nx);
                                    arrayNormal.push(vertices[Number(a)].ny);
                                    arrayNormal.push(vertices[Number(a)].nz);
                                    arrayNormal.push(vertices[Number(b)].nx);
                                    arrayNormal.push(vertices[Number(b)].ny);
                                    arrayNormal.push(vertices[Number(b)].nz);
                                    arrayNormal.push(vertices[Number(c)].nx);
                                    arrayNormal.push(vertices[Number(c)].ny);
                                    arrayNormal.push(vertices[Number(c)].nz);

                                    // colors
                                    arrayColor.push(vertices[Number(a)].r);
                                    arrayColor.push(vertices[Number(a)].g);
                                    arrayColor.push(vertices[Number(a)].b);
                                    arrayColor.push(vertices[Number(b)].r);
                                    arrayColor.push(vertices[Number(b)].g);
                                    arrayColor.push(vertices[Number(b)].b);
                                    arrayColor.push(vertices[Number(c)].r);
                                    arrayColor.push(vertices[Number(c)].g);
                                    arrayColor.push(vertices[Number(c)].b);

                                    // uv
                                    arrayTexture.push(vertices[Number(a)].u);
                                    arrayTexture.push(vertices[Number(a)].v);
                                    arrayTexture.push(vertices[Number(b)].u);
                                    arrayTexture.push(vertices[Number(b)].v);
                                    arrayTexture.push(vertices[Number(c)].u);
                                    arrayTexture.push(vertices[Number(c)].v);

                                    // index
                                    arrayIndex.push(loader.FaceIndex);
                                }

                                loader.FaceIndex++;
                            }

                            PLY_index++;

                        } else { // Still reading header...

                            // Read number of vertices stored in the file
                            if (lines[i].substr(0, "element vertex".length) == "element vertex")
                                loader.Ply_Vertices = Number(lines[i].split(" ")[2]);

                            // Read number of faces stored in the file
                            if (lines[i].substr(0, "element face".length) == "element face")
                                loader.Ply_Faces = Number(lines[i].split(" ")[2]);
                        }

                        // Finished reading header data, prepare for reading vertex data
                        if (lines[i] == "end_header") {

                            // Allocate enough space for vertices
                            vertices = new Array(loader.Ply_Vertices);

                            // Allocate enough space for faces
                            faces = new Array(loader.Ply_Faces);

                            // Allocate memory for returned arrays (VAOs)
                            arrayVertex  = new Array(); // PLY_Vertices * 3
                            arrayNormal  = new Array(); // PLY_Vertices * 3
                            arrayTexture = new Array(); // PLY_Vertices * 2
                            arrayColor   = new Array(); // PLY_Vertices * 3
                            arrayIndex   = new Array(); // PLY_Vertices * 1

                            loader.ReadingPlyData = true;
                        }
                    }

                    console.log("PLY_Vertices = " + loader.Ply_Vertices + " loaded");
                    console.log("PLY_Faces = " + loader.Ply_Faces + " loaded");
                    console.log("arrayVertex length = " + arrayVertex.length);
                    console.log("arrayNormal length = " + arrayNormal.length);
                    console.log("arrayTexture length = " + arrayTexture.length);
                    console.log("arrayColor length = " + arrayColor.length);
                    console.log("arrayIndex length = " + arrayIndex.length);

                    // We now have both complete vertex and face data loaded;
                    // return everything we loaded as Float32Array & Uint16Array for index

                    return [
                        new Float32Array(arrayVertex),
                        new Float32Array(arrayNormal),
                        new Float32Array(arrayTexture),
                        new Float32Array(arrayColor),
                        new Uint16Array(arrayIndex)
                    ];
                }
            }
        };

        console.log("Loading Model <" + filePath + ">...");

        xmlhttp.open("GET", filePath, true);
        xmlhttp.send();
}