function randomTop41(){
//arrow(fromx, fromy, tox, toy, z);
arrow(287, 208, 239, 179, 2);
arrow(226, 137, 272, 67, 2);
arrow(354, 431, 275, 380, 2);
arrow(266, 351, 314, 232, 2);
		
context.setLineDash([1]); 
context.strokeStyle = "blue";
context.beginPath();
var radius = 10; // for example
context.arc(20, 60, radius, 0, Math.PI * 2);
context.closePath();
context.stroke();
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Gateway", 40, 53);
		
context.fillStyle = "yellow";
context.beginPath();
var radius = 10; // for example
context.arc(20, 90, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Cluster Head", 40, 83);
		
var img = new Image(); 
img.onload = function()
{
	context.drawImage(img, 10, 170);
	};
img.src = 'img/letter.png';
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Packet", 75,170);

context.fillStyle = "green";
context.beginPath();
var radius = 10; // for example
context.arc(20, 120, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "red";
context.beginPath();
var radius = 10; // for example
context.arc(20, 150, radius, 0, Math.PI * 2);
context.closePath();
context.fill();

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);

context.beginPath();
context.strokeStyle = '#000000'
context.lineWidth=1
context.setLineDash([0]); 
	
context.moveTo(370,450); // 1 to 2
context.lineTo(252,372);
context.stroke();
context.closePath();

context.moveTo(314,208); // S1 to 2
context.lineTo(252,372);
context.stroke();
context.closePath();

context.moveTo(314,208); // S1 to 5
context.lineTo(223,162);
context.stroke();
context.closePath();

context.moveTo(294,55); // R1 to 6
context.lineTo(223,162);
context.stroke();
context.closePath();

context.moveTo(314,208); // S1 to 3
context.lineTo(458,190);
context.stroke();
context.closePath();

context.moveTo(552,37); // 4 to 3
context.lineTo(458,190);
context.stroke();
context.closePath();

context.moveTo(294,55); // R1 to 4
context.lineTo(552,37);
context.stroke();
context.closePath();

context.moveTo(370,450); // 1 to 6
context.lineTo(540,337);
context.stroke();
context.closePath();

context.moveTo(458,190); // 3 to 6
context.lineTo(540,337);
context.stroke();
context.closePath();

context.fillStyle = "green";
context.beginPath();
var radius = 20; // for example
context.arc(370, 450, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("S1", 370-radius/4 ,450-radius/2);

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(252, 372, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("2", 252-radius/4 ,372-radius/2);

context.fillStyle = "white";
context.beginPath();
var radius = 20; // for example
context.arc(314, 208, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("1", 314-radius/4 ,208-radius/2);

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(223, 162, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("5", 223-radius/4 ,162-radius/2);

context.fillStyle = "red";
context.beginPath();
var radius = 20; // for example
context.arc(294, 55, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("R1", 294-radius/4 ,55-radius/2);

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(458, 190, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("3", 458-radius/4 ,190-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(552, 37, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("4", 552-radius/4 ,37-radius/2);

context.fillStyle = "white";
context.beginPath();
var radius = 20; // for example
context.arc(540, 337, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("6", 540-radius/4 ,337-radius/2);

randomTopTable41();

}

function randomTopTable41(){

document.getElementById('routingTable').innerHTML = 
	
	"<table border = '1' valign = 'middle' >" +
	
	"<tr>" +
	
	"<tr colspan=3>" +
	
	"Routing Table - S1" +
	
	"<tr>" +

    "<td>Destn</td>" +

    "<td>Next Node</td>" +

    "<td>Dist</td>" +

    "</tr>" +

    "<tr align = 'middle'>" +

    "<td>1</td>" +

    "<td>2</td>" +

    "<td>2</td>" +

    "</tr>" +
	
	"<tr align = 'middle'>" +
	
	"<td>2</td>" +

    "<td>2</td>" +

    "<td>1</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>3</td>" +

    "<td>6</td>" +

    "<td>2</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>4</td>" +

    "<td>6</td>" +

    "<td>3</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>5</td>" +

    "<td>2</td>" +

    "<td>3</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>6</td>" +

    "<td>6</td>" +

    "<td>1</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>R1</td>" +

    "<td>4</td>" +

    "<td>2</td>" +

    "</tr>" +
		
   "<table>";

}

function Top41RoutingA(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop41();
	
	x-=1; y-=0.65;
	if(x!="233"){
		var loopTimer = setTimeout('Top41RoutingA('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 233, 348);
			};
	img.src = 'img/letter.png';
	Top41RoutingB(233,348)
	
		}
}

function Top41RoutingB(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop41();
	
	x+=0.25; y-=1;
	if(y!="185"){
		var loopTimer = setTimeout('Top41RoutingB('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 287, 185);
			};
	img.src = 'img/letter.png';
	Top41RoutingC(287,185);
	
		}
}

function Top41RoutingC(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop41();
	
	x-=1; y-=0.5;
	if(x!="199"){
		var loopTimer = setTimeout('Top41RoutingC('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 199, 141);
			};
	img.src = 'img/letter.png';
	Top41RoutingD(199,141)
	
		}
}

function Top41RoutingD(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop41();
	
	x+=0.6; y-=1;
	if(y!="30"){
		var loopTimer = setTimeout('Top41RoutingD('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 270, 30);
			 message.value="Packet arrived at Receiver Node";
			};
	img.src = 'img/letter.png';
	
		}
}

function randomTop42(){

arrow(649, 460, 340, 474, 2);
arrow(306, 463, 199, 343, 2);
arrow(619, 356, 658, 447, 2);
		
context.setLineDash([1]); 
context.strokeStyle = "blue";
context.beginPath();
var radius = 10; // for example
context.arc(20, 60, radius, 0, Math.PI * 2);
context.closePath();
context.stroke();
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Gateway", 40, 53);
		
context.fillStyle = "yellow";
context.beginPath();
var radius = 10; // for example
context.arc(20, 90, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Cluster Head", 40, 83);
		
var img = new Image(); 
img.onload = function()
{
	context.drawImage(img, 10, 170);
	};
img.src = 'img/letter.png';
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Packet", 75,170);

context.fillStyle = "green";
context.beginPath();
var radius = 10; // for example
context.arc(20, 120, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "red";
context.beginPath();
var radius = 10; // for example
context.arc(20, 150, radius, 0, Math.PI * 2);
context.closePath();
context.fill();

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);


context.beginPath();
context.strokeStyle = '#000000'
context.lineWidth=1
context.setLineDash([0]); 
	
context.moveTo(615,330); // S1 to 1
context.lineTo(684,222);
context.stroke();
context.closePath();

context.moveTo(721,80); // 2 to 1
context.lineTo(684,222);
context.stroke();
context.closePath();

context.moveTo(615,330); // S1 to 3
context.lineTo(546,235);
context.stroke();
context.closePath();

context.moveTo(615,330); // S1 to 4
context.lineTo(536,372);
context.stroke();
context.closePath();

context.moveTo(411,256); // 5 to 4
context.lineTo(536,372);
context.stroke();
context.closePath();

context.moveTo(411,256); // 5 to 3
context.lineTo(546,235);
context.stroke();
context.closePath();

context.moveTo(411,256); // 5 to 6
context.lineTo(363,105);
context.stroke();
context.closePath();

context.moveTo(261,201); // 7 to 6
context.lineTo(363,105);
context.stroke();
context.closePath();

context.moveTo(261,201); // 7 to R1
context.lineTo(175,328);
context.stroke();
context.closePath();

context.moveTo(615,330); // S1 to 8
context.lineTo(679,468);
context.stroke();
context.closePath();

context.moveTo(317,486); // 9 to 8
context.lineTo(679,468);
context.stroke();
context.closePath();

context.moveTo(317,486); // 9 to R1
context.lineTo(175,328);
context.stroke();
context.closePath();

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(317, 486, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("9", 317-radius/4 ,486-radius/2);

context.fillStyle = "white";
context.beginPath();
var radius = 20; // for example
context.arc(679, 468, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("8", 679-radius/4 ,468-radius/2);

context.fillStyle = "red";
context.beginPath();
var radius = 20; // for example
context.arc(175, 328, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("R1", 175-radius/4 ,328-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(261, 201, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("7", 261-radius/4 ,201-radius/2);

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(363, 105, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("6", 363-radius/4 ,105-radius/2);

context.fillStyle = "white";
context.beginPath();
var radius = 20; // for example
context.arc(411, 256, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("5", 411-radius/4 ,256-radius/2);

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(536, 372, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("4", 536-radius/4 ,372-radius/2);

context.fillStyle = "green";
context.beginPath();
var radius = 20; // for example
context.arc(615, 330, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("S1", 615-radius/4 ,330-radius/2);

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(684, 222, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("1", 684-radius/4 ,222-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(721, 80, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("2", 721-radius/4 ,80-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(546, 235, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("3", 546-radius/4 ,235-radius/2);

randomTopTable42();
}

function randomTopTable42(){

document.getElementById('routingTable').innerHTML = 
	
	"<table border = '1' valign = 'middle' >" +
	
	"<tr>" +
	
	"<tr colspan=3>" +
	
	"Routing Table - S1" +
	
	"<tr>" +

    "<td>Destn</td>" +

    "<td>Next Node</td>" +

    "<td>Dist</td>" +

    "</tr>" +

    "<tr align = 'middle'>" +

    "<td>1</td>" +

    "<td>1</td>" +

    "<td>1</td>" +

    "</tr>" +
	
	"<tr align = 'middle'>" +
	
	"<td>2</td>" +

    "<td>1</td>" +

    "<td>2</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>3</td>" +

    "<td>3</td>" +

    "<td>1</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>4</td>" +

    "<td>4</td>" +

    "<td>1</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>5</td>" +

    "<td>4</td>" +

    "<td>3</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>6</td>" +

    "<td>4</td>" +

    "<td>2</td>" +

    "</tr>" +
	
	"<tr align = 'middle'>" +
	
	"<td>7</td>" +

    "<td>4</td>" +

    "<td>3</td>" +

    "</tr>" +
	
	"<tr align = 'middle'>" +
	
	"<td>8</td>" +

    "<td>8</td>" +

    "<td>1</td>" +

    "</tr>" +
	
	"<tr align = 'middle'>" +
	
	"<td>9</td>" +

    "<td>8</td>" +

    "<td>2</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>R1</td>" +

    "<td>8</td>" +

    "<td>3</td>" +

    "</tr>" +
		
   "<table>";

}

function Top42RoutingA(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop42();
	
	x+=0.5; y+=1;
	if(y!="440"){
		var loopTimer = setTimeout('Top42RoutingA('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 655, 440);
			};
	img.src = 'img/letter.png';
	Top22RoutingB(655,440)
		}
}

function Top42RoutingB(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop42();
	
	x-=1; y+=0.05;
	if(x!="290"){
		var loopTimer = setTimeout('Top42RoutingB('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 290, 458);
			};
	img.src = 'img/letter.png';
	Top22RoutingC(290,458)
	
		}
}

function Top42RoutingC(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop42();
	
	x-=1; y-=1.1;
	if(x!="150"){
		var loopTimer = setTimeout('Top42RoutingC('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 150, 300);
			 message.value="Packet arrived at Receiver Node";
			};
	img.src = 'img/letter.png';
	
		}
}

function randomTop43(){

arrow(121, 480, 209, 480, 2);
arrow(255, 460, 404, 330, 2);
arrow(431, 290, 483, 203, 2);
arrow(510, 174, 574, 139, 2);

context.setLineDash([1]); 
context.strokeStyle = "blue";
context.beginPath();
var radius = 10; // for example
context.arc(20, 60, radius, 0, Math.PI * 2);
context.closePath();
context.stroke();
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Gateway", 40, 53);
		
context.fillStyle = "yellow";
context.beginPath();
var radius = 10; // for example
context.arc(20, 90, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Cluster Head", 40, 83);
		
var img = new Image(); 
img.onload = function()
{
	context.drawImage(img, 10, 170);
	};
img.src = 'img/letter.png';
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Packet", 75,170);

context.fillStyle = "green";
context.beginPath();
var radius = 10; // for example
context.arc(20, 120, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "red";
context.beginPath();
var radius = 10; // for example
context.arc(20, 150, radius, 0, Math.PI * 2);
context.closePath();
context.fill();

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);


context.beginPath();
context.strokeStyle = '#000000'
context.lineWidth=1
context.setLineDash([0]); 
	
context.moveTo(97,469); // S1 to 1
context.lineTo(232,469);
context.stroke();
context.closePath();

context.moveTo(97,469); // S1 to 2
context.lineTo(150,306);
context.stroke();
context.closePath();

context.moveTo(232,469); // 3 to 1
context.lineTo(415,307);
context.stroke();
context.closePath();

context.moveTo(225,155); // 4 to 2
context.lineTo(150,306);
context.stroke();
context.closePath();

context.moveTo(415,307); // 4 to 3
context.lineTo(225,155);
context.stroke();
context.closePath();

context.moveTo(415,307); // 5 to 3
context.lineTo(486,180);
context.stroke();
context.closePath();

context.moveTo(588,121); // 5 to R1
context.lineTo(486,180);
context.stroke();
context.closePath();

context.moveTo(415,307); // 6 to 3
context.lineTo(544,404);
context.stroke();
context.closePath();

context.moveTo(650,242); // 6 to 7
context.lineTo(544,404);
context.stroke();
context.closePath();

context.moveTo(588,121); // 7 to R1
context.lineTo(650,242);
context.stroke();
context.closePath();

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(650, 242, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("7", 650-radius/4 ,242-radius/2);

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(544, 404, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("6", 544-radius/4 ,404-radius/2);

context.fillStyle = "red";
context.beginPath();
var radius = 20; // for example
context.arc(588, 121, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("R1", 588-radius/4 ,121-radius/2);

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(486, 180, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("5", 486-radius/4 ,180-radius/2);

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(225, 155, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("4", 225-radius/4 ,155-radius/2);

context.fillStyle = "white";
context.beginPath();
var radius = 20; // for example
context.arc(415, 307, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("3", 415-radius/4 ,307-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(150, 306, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("2", 150-radius/4 ,306-radius/2);

context.fillStyle = "green";
context.beginPath();
var radius = 20; // for example
context.arc(97, 469, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("S1", 97-radius/4 ,469-radius/2);

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(232, 469, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("1", 232-radius/4 ,469-radius/2);

randomTopTable43();

}

function randomTopTable43(){

document.getElementById('routingTable').innerHTML = 
	
	"<table border = '1' valign = 'middle' >" +
	
	"<tr>" +
	
	"<tr colspan=3>" +
	
	"Routing Table - S1" +
	
	"<tr>" +

    "<td>Destn</td>" +

    "<td>Next Node</td>" +

    "<td>Dist</td>" +

    "</tr>" +

    "<tr align = 'middle'>" +

    "<td>1</td>" +

    "<td>1</td>" +

    "<td>1</td>" +

    "</tr>" +
	
	"<tr align = 'middle'>" +
	
	"<td>2</td>" +

    "<td>1</td>" +

    "<td>4</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>3</td>" +

    "<td>1</td>" +

    "<td>2</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>4</td>" +

    "<td>1</td>" +

    "<td>3</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>5</td>" +

    "<td>1</td>" +

    "<td>3</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>6</td>" +

    "<td>1</td>" +

    "<td>3</td>" +

    "</tr>" +
	
	"<tr align = 'middle'>" +
	
	"<td>7</td>" +

    "<td>1</td>" +

    "<td>4</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>R1</td>" +

    "<td>1</td>" +

    "<td>4</td>" +

    "</tr>" +
		
   "<table>";

}

function Top43RoutingA(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop43();
	
	x+=1; y+=0;
	if(x!="205"){
		var loopTimer = setTimeout('Top43RoutingA('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 205, 440);
			};
	img.src = 'img/letter.png';
	Top43RoutingB(205,440);
	
		}
}

function Top43RoutingB(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop43();
	
	x+=1; y-=0.87;
	if(x!="384"){
		var loopTimer = setTimeout('Top43RoutingB('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 384, 284);
			};
	img.src = 'img/letter.png';
	Top43RoutingC(384,284);
	
		}
}

function Top43RoutingC(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop43();
	
	x+=1; y-=1.7;
	if(x!="460"){
		var loopTimer = setTimeout('Top43RoutingC('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 460, 155);
			};
	img.src = 'img/letter.png';
	Top43RoutingD(460,155)
	
		}
}

function Top43RoutingD(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop43();
	
	x+=1; y-=0.6;
	if(x!="565"){
		var loopTimer = setTimeout('Top43RoutingD('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 565, 95);
			 message.value="Packet arrived at Receiver Node";
			};
	img.src = 'img/letter.png';
	
		}
}

function randomTop44(){

arrow(645, 204, 641, 112, 2);
arrow(611, 72, 475, 42, 2);
arrow(485, 259, 613, 226, 2);
arrow(443, 363, 452, 292, 2);
		
context.setLineDash([1]); 
context.strokeStyle = "blue";
context.beginPath();
var radius = 10; // for example
context.arc(20, 60, radius, 0, Math.PI * 2);
context.closePath();
context.stroke();
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Gateway", 40, 53);
		
context.fillStyle = "yellow";
context.beginPath();
var radius = 10; // for example
context.arc(20, 90, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Cluster Head", 40, 83);
		
var img = new Image(); 
img.onload = function()
{
	context.drawImage(img, 10, 170);
	};
img.src = 'img/letter.png';
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Packet", 75,170);

context.fillStyle = "green";
context.beginPath();
var radius = 10; // for example
context.arc(20, 120, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "red";
context.beginPath();
var radius = 10; // for example
context.arc(20, 150, radius, 0, Math.PI * 2);
context.closePath();
context.fill();

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);

context.beginPath();
context.strokeStyle = '#000000'
context.lineWidth=1
context.setLineDash([0]); 
	
context.moveTo(722,432); // S1 to 1
context.lineTo(696,520);
context.stroke();
context.closePath();

context.moveTo(608,434); // S1 to 2
context.lineTo(696,520);
context.stroke();
context.closePath();

context.moveTo(364,490); // S1 to 3
context.lineTo(696,520);
context.stroke();
context.closePath();

context.moveTo(661,344); // 4 to 1
context.lineTo(722,432);
context.stroke();
context.closePath();

context.moveTo(608,434); // 4 to 2
context.lineTo(661,344);
context.stroke();
context.closePath();

context.moveTo(638,226); // 4 to 5
context.lineTo(661,344);
context.stroke();
context.closePath();

context.moveTo(638,226); // 6 to 5
context.lineTo(465,271);
context.stroke();
context.closePath();

context.moveTo(444,386); // 6 to 7
context.lineTo(465,271);
context.stroke();
context.closePath();

context.moveTo(444,386); // 6 to 3
context.lineTo(364,490);
context.stroke();
context.closePath();

context.moveTo(237,421); // 8 to 3
context.lineTo(364,490);
context.stroke();
context.closePath();

context.moveTo(237,421); // 8 to 9
context.lineTo(171,304);
context.stroke();
context.closePath();

context.moveTo(237,421); // 8 to 10
context.lineTo(289,293);
context.stroke();
context.closePath();

context.moveTo(408,142); // 11 to 10
context.lineTo(289,293);
context.stroke();
context.closePath();

context.moveTo(638,226); // 12 to 5
context.lineTo(634,87);
context.stroke();
context.closePath();

context.moveTo(450,42); // 12 to R1
context.lineTo(634,87);
context.stroke();
context.closePath();

context.moveTo(450,42); // 11 to R1
context.lineTo(408,142);
context.stroke();
context.closePath();

context.moveTo(201,150); // 13 to 9
context.lineTo(171,304);
context.stroke();
context.closePath();

context.moveTo(201,150); // 13 to 14
context.lineTo(289,67);
context.stroke();
context.closePath();

context.moveTo(289,67); // R1 to 14
context.lineTo(450,42);
context.stroke();
context.closePath();

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(289, 67, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("14", 289-radius/4 ,67-radius/2);

context.fillStyle = "white";
context.beginPath();
var radius = 20; // for example
context.arc(201, 150, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("13", 201-radius/4 ,150-radius/2);


context.fillStyle = "red";
context.beginPath();
var radius = 20; // for example
context.arc(450, 42, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("R1", 450-radius/4 ,42-radius/2);

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(634, 87, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("12", 634-radius/4 ,87-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(408, 142, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("11", 408-radius/4 ,142-radius/2);

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(289, 293, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("10", 289-radius/4 ,293-radius/2);

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(171, 304, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("9", 171-radius/4 ,304-radius/2);

context.fillStyle = "white";
context.beginPath();
var radius = 20; // for example
context.arc(237, 421, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("8", 237-radius/4 ,421-radius/2);

context.fillStyle = "green";
context.beginPath();
var radius = 20; // for example
context.arc(444, 386, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("S1", 444-radius/4 ,386-radius/2);

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(465, 271, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("6", 465-radius/4 ,271-radius/2);

context.fillStyle = "white";
context.beginPath();
var radius = 20; // for example
context.arc(638, 226, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("5", 638-radius/4 ,226-radius/2);

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(661, 344, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("4", 661-radius/4 ,344-radius/2);

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(364, 490, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("3", 364-radius/4 ,490-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(608, 434, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("2", 608-radius/4 ,434-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(722, 432, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("1", 722-radius/4 ,432-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(696, 520, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("7", 696-radius/4 ,520-radius/2);

randomTopTable44();
}

function randomTopTable44(){

document.getElementById('routingTable').innerHTML = 
	
	"<table border = '1' valign = 'middle' >" +
	
	"<tr>" +
	
	"<tr colspan=3>" +
	
	"Routing Table - S1" +
	
	"<tr>" +

    "<td>Destn</td>" +

    "<td>Next Node</td>" +

    "<td>Dist</td>" +

    "</tr>" +

    "<tr align = 'middle'>" +

    "<td>1</td>" +

    "<td>6</td>" +

    "<td>4</td>" +

    "</tr>" +
	
	"<tr align = 'middle'>" +
	
	"<td>2</td>" +

    "<td>6</td>" +

    "<td>4</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>3</td>" +

    "<td>3</td>" +

    "<td>1</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>4</td>" +

    "<td>6</td>" +

    "<td>3</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>5</td>" +

    "<td>6</td>" +

    "<td>2</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>6</td>" +

    "<td>6</td>" +

    "<td>1</td>" +

    "</tr>" +
	
	"<tr align = 'middle'>" +
	
	"<td>7</td>" +

    "<td>3</td>" +

    "<td>2</td>" +

    "</tr>" +
	
	"<tr align = 'middle'>" +
	
	"<td>8</td>" +

    "<td>3</td>" +

    "<td>2</td>" +

    "</tr>" +
	
	"<tr align = 'middle'>" +
	
	"<td>9</td>" +

    "<td>8</td>" +

    "<td>3</td>" +

    "</tr>" +
	
	"<tr align = 'middle'>" +
	
	"<td>10</td>" +

    "<td>8</td>" +

    "<td>3</td>" +

    "</tr>" +
	
	"<tr align = 'middle'>" +
	
	"<td>11</td>" +

    "<td>3</td>" +

    "<td>4</td>" +

    "</tr>" +
	
	"<tr align = 'middle'>" +
	
	"<td>12</td>" +

    "<td>6</td>" +

    "<td>3</td>" +

    "</tr>" +
	
	"<tr align = 'middle'>" +
	
	"<td>13</td>" +

    "<td>3</td>" +

    "<td>4</td>" +

    "</tr>" +
	
	"<tr align = 'middle'>" +
	
	"<td>14</td>" +

    "<td>3</td>" +

    "<td>5</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>R1</td>" +

    "<td>6</td>" +

    "<td>4</td>" +

    "</tr>" +
		
   "<table>";

}

function Top44RoutingA(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop44();
	
	x+=0.1; y-=1;
	if(y!="245"){
		var loopTimer = setTimeout('Top44RoutingA('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 440, 245);
			};
	img.src = 'img/letter.png';
		Top44RoutingB(440,245)
	
		}
}

function Top44RoutingB(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop44();
	
	x+=1; y-=0.3;
	if(x!="622"){
		var loopTimer = setTimeout('Top44RoutingB('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 622, 202);
			};
	img.src = 'img/letter.png';
		Top44RoutingC(622,202);
	
		}
}

function Top44RoutingC(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop44();
	
	x-=0.05; y-=1;
	if(y!="64"){
		var loopTimer = setTimeout('Top44RoutingC('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 609, 64);
			};
	img.src = 'img/letter.png';
			Top44RoutingD(609,64);
		}
}

function Top44RoutingD(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop44();
	
	x-=1; y-=0.3;
	if(x!="422"){
		var loopTimer = setTimeout('Top44RoutingD('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 422, 14);
			 message.value="Packet arrived at Receiver Node";
			};
	img.src = 'img/letter.png';
	
		}
}

function randomTop46(){

//arrow(fromx, fromy, tox, toy, z);
arrow(476, 182, 519, 234, 2);
arrow(502, 261, 341, 339, 2);

context.setLineDash([1]); 
context.strokeStyle = "blue";
context.beginPath();
var radius = 10; // for example
context.arc(20, 60, radius, 0, Math.PI * 2);
context.closePath();
context.stroke();
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Gateway", 40, 53);
		
context.fillStyle = "yellow";
context.beginPath();
var radius = 10; // for example
context.arc(20, 90, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Cluster Head", 40, 83);
		
var img = new Image(); 
img.onload = function()
{
	context.drawImage(img, 10, 170);
	};
img.src = 'img/letter.png';
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Packet", 75,170);

context.fillStyle = "green";
context.beginPath();
var radius = 10; // for example
context.arc(20, 120, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "red";
context.beginPath();
var radius = 10; // for example
context.arc(20, 150, radius, 0, Math.PI * 2);
context.closePath();
context.fill();

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);

context.beginPath();
context.strokeStyle = '#000000'
context.lineWidth=1
context.setLineDash([0]); 
	
context.moveTo(551,108); // 1 to S1
context.lineTo(452,171);
context.stroke();
context.closePath();

context.moveTo(528,258); // 2 to S1
context.lineTo(452,171);
context.stroke();
context.closePath();

context.moveTo(528,258); // 2 to R1
context.lineTo(325,358);
context.stroke();
context.closePath();

context.moveTo(222,176); // 3 to R1
context.lineTo(325,358);
context.stroke();
context.closePath();

context.moveTo(222,176); // 3 to 4
context.lineTo(332,49);
context.stroke();
context.closePath();

context.moveTo(452,171); // S1 to 4
context.lineTo(332,49);
context.stroke();
context.closePath();

context.moveTo(551,108); // 1 to 5
context.lineTo(714,277);
context.stroke();
context.closePath();

context.moveTo(558,452); // 6 to 5
context.lineTo(714,277);
context.stroke();
context.closePath();

context.moveTo(558,452); // 6 to R1
context.lineTo(325,358);
context.stroke();
context.closePath();

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(558, 452, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("6", 558-radius/4 ,452-radius/2);

context.fillStyle = "white";
context.beginPath();
var radius = 20; // for example
context.arc(714, 277, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("5", 714-radius/4 ,277-radius/2);

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(332, 49, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("4", 332-radius/4 ,49-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(222, 176, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("3", 222-radius/4 ,176-radius/2);

context.fillStyle = "green";
context.beginPath();
var radius = 20; // for example
context.arc(452, 171, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("S1", 452-radius/4 ,171-radius/2);

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(551, 108, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("1", 551-radius/4 ,108-radius/2);

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(528, 258, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("2", 528-radius/4 ,258-radius/2);

context.fillStyle = "red";
context.beginPath();
var radius = 20; // for example
context.arc(325, 358, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("R1", 325-radius/4 ,358-radius/2);

randomTopTable46();

}

function randomTopTable46(){

document.getElementById('routingTable').innerHTML = 
	
	"<table border = '1' valign = 'middle' >" +
	
	"<tr>" +
	
	"<tr colspan=3>" +
	
	"Routing Table - S1" +
	
	"<tr>" +

    "<td>Destn</td>" +

    "<td>Next Node</td>" +

    "<td>Dist</td>" +

    "</tr>" +

    "<tr align = 'middle'>" +

    "<td>1</td>" +

    "<td>1</td>" +

    "<td>1</td>" +

    "</tr>" +
	
	"<tr align = 'middle'>" +
	
	"<td>2</td>" +

    "<td>2</td>" +

    "<td>1</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>3</td>" +

    "<td>4</td>" +

    "<td>2</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>4</td>" +

    "<td>4</td>" +

    "<td>1</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>5</td>" +

    "<td>1</td>" +

    "<td>2</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>6</td>" +

    "<td>1</td>" +

    "<td>3</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>R1</td>" +

    "<td>2</td>" +

    "<td>2</td>" +

    "</tr>" +
		
   "<table>";

}

function Top46RoutingA(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop46();
	
	x+=0.8; y+=1;
	if(y!="241"){
		var loopTimer = setTimeout('Top46RoutingA('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 493, 241);
			};
	img.src = 'img/letter.png';
		Top46RoutingB(493,241);
	
		}
}

function Top46RoutingB(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop46();
	
	x-=1; y+=0.45;
	if(x!="289"){
		var loopTimer = setTimeout('Top46RoutingB('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 289, 335);
			};
	img.src = 'img/letter.png';
	
		}
}

function randomTop47(){

//arrow(fromx, fromy, tox, toy, z);
arrow(630, 377, 433, 324, 2);
arrow(409, 331, 345, 464, 2);
arrow(311, 463, 198, 140, 2);	
		
context.setLineDash([1]); 
context.strokeStyle = "blue";
context.beginPath();
var radius = 10; // for example
context.arc(20, 60, radius, 0, Math.PI * 2);
context.closePath();
context.stroke();
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Gateway", 40, 53);
		
context.fillStyle = "yellow";
context.beginPath();
var radius = 10; // for example
context.arc(20, 90, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Cluster Head", 40, 83);
		
var img = new Image(); 
img.onload = function()
{
	context.drawImage(img, 10, 170);
	};
img.src = 'img/letter.png';
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Packet", 75,170);

context.fillStyle = "green";
context.beginPath();
var radius = 10; // for example
context.arc(20, 120, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "red";
context.beginPath();
var radius = 10; // for example
context.arc(20, 150, radius, 0, Math.PI * 2);
context.closePath();
context.fill();

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);

context.beginPath();
context.strokeStyle = '#000000'
context.lineWidth=1
context.setLineDash([0]); 
	
context.moveTo(198,116); //R1 to 1
context.lineTo(327,483);
context.stroke();
context.closePath();

context.moveTo(412,306); //2 to 1
context.lineTo(327,483);
context.stroke();
context.closePath();

context.moveTo(412,306); //2 to S1
context.lineTo(665,375);
context.stroke();
context.closePath();

context.moveTo(749,184); //3 to S1
context.lineTo(665,375);
context.stroke();
context.closePath();

context.moveTo(749,184); //3 to 4
context.lineTo(576,68);
context.stroke();
context.closePath();

context.moveTo(415,41); //5 to 4
context.lineTo(576,68);
context.stroke();
context.closePath();

context.moveTo(415,41); //5 to R1
context.lineTo(198,116);
context.stroke();
context.closePath();

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(415, 41, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("5", 415-radius/4 ,41-radius/2);

context.fillStyle = "white";
context.beginPath();
var radius = 20; // for example
context.arc(576, 68, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("4", 576-radius/4 ,68-radius/2);

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(749, 184, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("3", 749-radius/4 ,184-radius/2);

context.fillStyle = "green";
context.beginPath();
var radius = 20; // for example
context.arc(665, 375, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("S1", 665-radius/4 ,375-radius/2);

context.fillStyle = "red";
context.beginPath();
var radius = 20; // for example
context.arc(198, 116, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("R1", 198-radius/4 ,116-radius/2);

context.fillStyle = "white";
context.beginPath();
var radius = 20; // for example
context.arc(327, 483, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("1", 327-radius/4 ,483-radius/2);

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(412, 306, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("2", 412-radius/4 ,306-radius/2);

randomTopTable47();

}

function randomTopTable47(){

document.getElementById('routingTable').innerHTML = 
	
	"<table border = '1' valign = 'middle' >" +
	
	"<tr>" +
	
	"<tr colspan=3>" +
	
	"Routing Table - S1" +
	
	"<tr>" +

    "<td>Destn</td>" +

    "<td>Next Node</td>" +

    "<td>Dist</td>" +

    "</tr>" +

    "<tr align = 'middle'>" +

    "<td>1</td>" +

    "<td>2</td>" +

    "<td>2</td>" +

    "</tr>" +
	
	"<tr align = 'middle'>" +
	
	"<td>2</td>" +

    "<td>2</td>" +

    "<td>1</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>3</td>" +

    "<td>3</td>" +

    "<td>1</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>4</td>" +

    "<td>3</td>" +

    "<td>2</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>5</td>" +

    "<td>3</td>" +

    "<td>3</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>R1</td>" +

    "<td>2</td>" +

    "<td>3</td>" +

    "</tr>" +
		
   "<table>";

}

function Top47RoutingA(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop47();
	
	x-=1; y-=0.3;
	if(x!="389"){
		var loopTimer = setTimeout('Top47RoutingA('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 389, 279);
			};
	img.src = 'img/letter.png';
		Top47RoutingB(389,289);
	
		}
}

function Top47RoutingB(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop47();
	
	x-=0.58; y+=1;
	if(y!="454"){
		var loopTimer = setTimeout('Top47RoutingB('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 300, 454);
			};
	img.src = 'img/letter.png';
		Top47RoutingC(300,454);
	
		}
}

function Top47RoutingC(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop47();
	
	x-=0.35; y-=1;
	if(y!="90"){
		var loopTimer = setTimeout('Top47RoutingC('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 172, 90);
			};
	img.src = 'img/letter.png';
	
		}
}

function randomTop48(){

//arrow(fromx, fromy, tox, toy, z);
arrow(258, 219, 232, 336, 2);
arrow(240, 378, 282, 468, 2);
arrow(260, 486, 190, 484, 2);
arrow(144, 485, 75, 485, 2);
		
context.setLineDash([1]); 
context.strokeStyle = "blue";
context.beginPath();
var radius = 10; // for example
context.arc(20, 60, radius, 0, Math.PI * 2);
context.closePath();
context.stroke();
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Gateway", 40, 53);
		
context.fillStyle = "yellow";
context.beginPath();
var radius = 10; // for example
context.arc(20, 90, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Cluster Head", 40, 83);
		
var img = new Image(); 
img.onload = function()
{
	context.drawImage(img, 10, 170);
	};
img.src = 'img/letter.png';
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Packet", 75,170);

context.fillStyle = "green";
context.beginPath();
var radius = 10; // for example
context.arc(20, 120, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "red";
context.beginPath();
var radius = 10; // for example
context.arc(20, 150, radius, 0, Math.PI * 2);
context.closePath();
context.fill();

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);

context.beginPath();
context.strokeStyle = '#000000'
context.lineWidth=1
context.setLineDash([0]); 
	
context.moveTo(168,494); //1 to R1
context.lineTo(51,494);
context.stroke();
context.closePath();

context.moveTo(168,494); //1 to 2
context.lineTo(287,494);
context.stroke();
context.closePath();

context.moveTo(463,494); //3 to 2
context.lineTo(287,494);
context.stroke();
context.closePath();

context.moveTo(220,359); //4 to 2
context.lineTo(287,494);
context.stroke();
context.closePath();

context.moveTo(220,359); //4 to S1
context.lineTo(257,196);
context.stroke();
context.closePath();

context.moveTo(463,494); //3 to 5
context.lineTo(661,354);
context.stroke();
context.closePath();

context.moveTo(457,299); //6 to 5
context.lineTo(661,354);
context.stroke();
context.closePath();

context.moveTo(457,299); //6 to 7
context.lineTo(597,74);
context.stroke();
context.closePath();

context.moveTo(321,33); //8 to 7
context.lineTo(597,74);
context.stroke();
context.closePath();

context.moveTo(321,33); //8 to S1
context.lineTo(257,196);
context.stroke();
context.closePath();

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(321, 33, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("8", 321-radius/4 ,33-radius/2);


context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(457, 299, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("6", 457-radius/4 ,299-radius/2);

context.fillStyle = "white";
context.beginPath();
var radius = 20; // for example
context.arc(597, 74, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("7", 597-radius/4 ,74-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(661, 354, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("5", 661-radius/4 ,354-radius/2);

context.fillStyle = "green";
context.beginPath();
var radius = 20; // for example
context.arc(257, 196, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("S1", 257-radius/4 ,196-radius/2);

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(220, 359, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("4", 220-radius/4 ,359-radius/2);

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(463, 494, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("3", 463-radius/4 ,494-radius/2);

context.fillStyle = "white";
context.beginPath();
var radius = 20; // for example
context.arc(287, 494, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("2", 287-radius/4 ,494-radius/2);

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(168, 494, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("1", 168-radius/4 ,494-radius/2);

context.fillStyle = "red";
context.beginPath();
var radius = 20; // for example
context.arc(51, 494, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("R1", 51-radius/4 ,494-radius/2);

randomTopTable48();
}

function randomTopTable48(){

document.getElementById('routingTable').innerHTML = 
	
	"<table border = '1' valign = 'middle' >" +
	
	"<tr>" +
	
	"<tr colspan=3>" +
	
	"Routing Table - S1" +
	
	"<tr>" +

    "<td>Destn</td>" +

    "<td>Next Node</td>" +

    "<td>Dist</td>" +

    "</tr>" +

    "<tr align = 'middle'>" +

    "<td>1</td>" +

    "<td>4</td>" +

    "<td>3</td>" +

    "</tr>" +
	
	"<tr align = 'middle'>" +
	
	"<td>2</td>" +

    "<td>4</td>" +

    "<td>2</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>3</td>" +

    "<td>4</td>" +

    "<td>3</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>4</td>" +

    "<td>4</td>" +

    "<td>1</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>5</td>" +

    "<td>4</td>" +

    "<td>4</td>" +

    "</tr>" +
	
	"<tr align = 'middle'>" +
	
	"<td>6</td>" +

    "<td>8</td>" +

    "<td>3</td>" +

    "</tr>" +
	
	"<tr align = 'middle'>" +
	
	"<td>7</td>" +

    "<td>8</td>" +

    "<td>2</td>" +

    "</tr>" +
	
	"<tr align = 'middle'>" +
	
	"<td>8</td>" +

    "<td>8</td>" +

    "<td>1</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>R1</td>" +

    "<td>4</td>" +

    "<td>4</td>" +

    "</tr>" +
		
   "<table>";

}

function Top48RoutingA(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop48();
	
	x-=0.3; y+=1;
	if(y!="335"){
		var loopTimer = setTimeout('Top48RoutingA('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 190, 335);
			};
	img.src = 'img/letter.png';
		Top48RoutingB(190,335);
	
		}
}

function Top48RoutingB(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop48();
	
	x+=0.45; y+=1;
	if(y!="468"){
		var loopTimer = setTimeout('Top48RoutingB('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 259, 468);
			};
	img.src = 'img/letter.png';
		Top48RoutingC(259,468);
	
		}
}

function Top48RoutingC(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop48();
	
	x-=1;
	if(x!="146"){
		var loopTimer = setTimeout('Top48RoutingC('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 146, 468);
			};
	img.src = 'img/letter.png';
		Top48RoutingD(146,468);
	
		}
}

function Top48RoutingD(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop48();
	
	x-=1;
	if(x!="25"){
		var loopTimer = setTimeout('Top48RoutingD('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 25, 468);
			};
	img.src = 'img/letter.png';
	
		}
}



