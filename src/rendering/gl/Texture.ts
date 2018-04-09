import {gl} from '../../globals';

export class Texture {
  texture: WebGLTexture;
  cubemap_texture: WebGLTexture;
  bLoaded: Array<boolean> = [false, false, false, false, false, false];

  bindTex() {
  	  gl.bindTexture(gl.TEXTURE_2D, this.texture);
  }

  handle(): WebGLTexture {
  	return this.texture;
  }

  isPowerOf2(value: number) : boolean {
      return (value & (value - 1)) == 0;
  }

  constructor(imgSource: string, bCubemap: boolean)
  {
    // create a white pixel to serve as placeholder
  	const formatSrc = gl.RGBA;
  	const formatDst = gl.RGBA;
  	const lvl = 0;
  	const phWidth = 1; // placeholder
  	const phHeight = 1;
  	const phImg = new Uint8Array([255, 255, 255, 255]);
  	const formatBit = gl.UNSIGNED_BYTE; // TODO: HDR

	if(bCubemap)
	{
		this.cubemap_texture = gl.createTexture();
		gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.cubemap_texture);

		gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X, lvl, formatDst, phWidth, phHeight, 0, formatSrc, formatBit, phImg);
		gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_X, lvl, formatDst, phWidth, phHeight, 0, formatSrc, formatBit, phImg);
		gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_Y, lvl, formatDst, phWidth, phHeight, 0, formatSrc, formatBit, phImg);
		gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, lvl, formatDst, phWidth, phHeight, 0, formatSrc, formatBit, phImg);
		gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_Z, lvl, formatDst, phWidth, phHeight, 0, formatSrc, formatBit, phImg);
		gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_Z, lvl, formatDst, phWidth, phHeight, 0, formatSrc, formatBit, phImg);
	}
	else
	{
		this.texture = gl.createTexture();
		this.bindTex();

		gl.texImage2D(gl.TEXTURE_2D, lvl, formatDst, phWidth, phHeight, 0, formatSrc, formatBit, phImg);
		

		// get a javascript image locally and load it. not instant but will auto-replace white pixel
		const img = new Image();

		img.onload = function(){
			this.bindTex()
			gl.texImage2D(gl.TEXTURE_2D, lvl, formatDst, img.width, img.height, 0, formatSrc, formatBit, img);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

		this.bLoaded[0] = true;

		}.bind(this);

		img.src = imgSource; // load the image
	}
  }

  isComplete(bCubemap: boolean) : boolean
  {
	if(!bCubemap)
		return this.bLoaded[0];
	else{
		return this.bLoaded[0] && this.bLoaded[1] && this.bLoaded[2] && this.bLoaded[3] && this.bLoaded[4] && this.bLoaded[5];;
	}
  }

  loadCubeImg(imgSource: string, index: number)
  {
	const formatSrc = gl.RGBA;
	const formatDst = gl.RGBA;
	const lvl = 0;
	const phWidth = 1; // placeholder
	const phHeight = 1;
	const phImg = new Uint8Array([255, 255, 255, 255]);
	const formatBit = gl.UNSIGNED_BYTE; // TODO: HDR

	if(index == 0)
	{
		// Pos X+
		
		const img_Pos_X = new Image();

		img_Pos_X.onload = function(){
			gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.cubemap_texture);
			gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X, lvl, formatDst, img_Pos_X.width, img_Pos_X.height, 0, formatSrc, formatBit, img_Pos_X);
			gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.REPEAT);
			gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.REPEAT);
			gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

			this.bLoaded[index] = true;			
			
		}.bind(this);

		img_Pos_X.src = imgSource + "0.png";
	}
	else if(index == 1)
	{
		// Neg X-
		
		const img_Neg_X = new Image();

		img_Neg_X.onload = function(){
			gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.cubemap_texture);
			gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_X, lvl, formatDst, img_Neg_X.width, img_Neg_X.height, 0, formatSrc, formatBit, img_Neg_X);
			gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.REPEAT);
			gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.REPEAT);
			gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

			this.bLoaded[index] = true;
			
		}.bind(this);

		img_Neg_X.src = imgSource + "1.png";
	}
	else if(index == 2)
	{
		// Pos Y+
		
		const img_Pos_Y = new Image();

		img_Pos_Y.onload = function(){
			gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.cubemap_texture);
			gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_Y, lvl, formatDst, img_Pos_Y.width, img_Pos_Y.height, 0, formatSrc, formatBit, img_Pos_Y);
			gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.REPEAT);
			gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.REPEAT);
			gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

			this.bLoaded[index] = true;
			
		}.bind(this);

		img_Pos_Y.src = imgSource + "2.png";

	}
	else if(index == 3)
	{
		// Neg Y-
		
		const img_Neg_Y = new Image();

		img_Neg_Y.onload = function(){
			gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.cubemap_texture);
			gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, lvl, formatDst, img_Neg_Y.width, img_Neg_Y.height, 0, formatSrc, formatBit, img_Neg_Y);
			gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.REPEAT);
			gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.REPEAT);
			gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

			this.bLoaded[index] = true;
			
		}.bind(this);

		img_Neg_Y.src = imgSource + "3.png";
	}
	else if(index == 4)
	{
		// Pos Z+
		
		const img_Pos_Z = new Image();

		img_Pos_Z.onload = function(){
			gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.cubemap_texture);
			gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_Z, lvl, formatDst, img_Pos_Z.width, img_Pos_Z.height, 0, formatSrc, formatBit, img_Pos_Z);
			gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.REPEAT);
			gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.REPEAT);
			gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

			this.bLoaded[index] = true;
			
		}.bind(this);

		img_Pos_Z.src = imgSource + "4.png";

	}
	else if(index == 5)
	{
		// Neg Z-
	
		const img_Neg_Z = new Image();

		img_Neg_Z.onload = function(){
			gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.cubemap_texture);
			gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_Z, lvl, formatDst, img_Neg_Z.width, img_Neg_Z.height, 0, formatSrc, formatBit, img_Neg_Z);
			gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.REPEAT);
			gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.REPEAT);
			gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
			//gl.generateMipmap(gl.TEXTURE_CUBE_MAP);

			this.bLoaded[index] = true;
		}.bind(this);

		img_Neg_Z.src = imgSource + "5.png";
	}

	
  }

};

export default Texture;