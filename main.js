canvas = new fabric.Canvas('myCanvas');
block_y=1;
block_x=1;
block_image_width = 50;
block_image_height = 330;

var block_image_object= "";

function new_image(get_image) {
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({top:block_y,left:block_x});
        canvas.add(block_image_object);
       });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '66')
	{
	 new_image('5.png');
	 console.log("b");
	 block_x = 0;	

	}
	if(keyPressed == '82')
	{
		block_x = 220;
		new_image('4.jpg');
		console.log("r");
	}
	
	if(keyPressed == '71')
	{
		block_x =400;
		new_image('6.png');
		console.log("g");
	}
	if(keyPressed == '73')
	{
		block_x = 620;
		new_image('2.jpg');
		console.log("i");
	}
	if(keyPressed == '67')
	{
		block_x = 855;
		new_image('3.png');
		console.log("c");
	}
	if(keyPressed == '87')
	{
		block_x = 1225;
		new_image('1.jpg');
		console.log("w");
	}
	
}

