function randomTop21(){
//arrow(fromx, fromy, tox, toy, z);
arrow(287, 208, 239, 179, 2);
arrow(226, 137, 272, 67, 2);


arrow(248, 165, 298, 190, 0);
arrow(432, 185, 337, 196, 0);
arrow(463, 215, 522, 319, 0);
arrow(516, 343, 385, 429, 0);
arrow(354, 431, 275, 380, 0);
arrow(266, 351, 314, 232, 0);

arrow(338, 213, 437, 202, 1);
arrow(297, 231, 250, 348, 1);
arrow(266, 389, 346, 444, 1);
arrow(395, 442, 523, 358, 1);
arrow(533, 314, 475, 207, 1);
		
context.fillStyle = "yellow";
context.beginPath();
var radius = 10; // for example
context.arc(20, 90, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Cache Node", 40, 83);
	
arrow(10, 175, 69, 175, 1);
	
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("RREQ", 75,170);
	
arrow(10, 215, 69, 215, 0);
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("RREP", 75, 210);

arrow(10, 255, 69, 255, 2);
	
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Selected", 75, 250);
	
var img = new Image(); 
img.onload = function()
{
	context.drawImage(img, 10, 295);
	};
img.src = 'img/letter.png';
	
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Packet", 75,320);

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

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(370, 450, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("1", 370-radius/4 ,450-radius/2);

context.fillStyle = "grey";
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

context.fillStyle = "green";
context.beginPath();
var radius = 20; // for example
context.arc(314, 208, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("S1", 314-radius/4 ,208-radius/2);

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

context.fillStyle = "grey";
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

}

function Top21RoutingA(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop21();
	
	x-=1; y-=0.5;
	if(x!="199"){
		var loopTimer = setTimeout('Top21RoutingA('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 199, 141);
			};
	img.src = 'img/letter.png';
	Top21RoutingB(199,141)
	
		}
}

function Top21RoutingB(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop21();
	
	x+=0.6; y-=1;
	if(y!="30"){
		var loopTimer = setTimeout('Top21RoutingB('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 270, 30);
			 message.value="Packet arrived at Receiver Node";
			};
	img.src = 'img/letter.png';
	
		}
}

function randomTop22(){

arrow(649, 460, 340, 474, 2);
arrow(306, 463, 199, 343, 2);
arrow(619, 356, 658, 447, 2);

arrow(636, 312, 679, 246, 1);
arrow(695, 201, 722, 104, 1);
arrow(605, 306, 564, 251, 1);
arrow(521, 232, 430, 245, 1);
arrow(396, 234, 364, 129, 1);
arrow(599, 346, 558, 367, 1);


arrow(676, 444, 632, 350, 0);
arrow(375, 127, 411, 231, 0);
arrow(435, 257, 523, 245, 0);
arrow(555, 259, 595, 315, 0);
arrow(554, 355, 591, 339, 0);

context.fillStyle = "yellow";
context.beginPath();
var radius = 10; // for example
context.arc(20, 90, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Cache Node", 40, 83);
	
arrow(10, 175, 69, 175, 1);
	
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("RREQ", 75,170);
	
arrow(10, 215, 69, 215, 0);
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("RREP", 75, 210);

arrow(10, 255, 69, 255, 2);
	
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Selected", 75, 250);
	
var img = new Image(); 
img.onload = function()
{
	context.drawImage(img, 10, 295);
	};
img.src = 'img/letter.png';
	
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Packet", 75,320);

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

context.fillStyle = "grey";
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

context.fillStyle = "yellow";
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

context.fillStyle = "grey";
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

context.fillStyle = "grey";
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
}

function Top22RoutingA(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop22();
	
	x+=0.5; y+=1;
	if(y!="440"){
		var loopTimer = setTimeout('Top22RoutingA('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 655, 440);
			};
	img.src = 'img/letter.png';
	Top22RoutingB(655,440)
		}
}

function Top22RoutingB(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop22();
	
	x-=1; y+=0.05;
	if(x!="290"){
		var loopTimer = setTimeout('Top22RoutingB('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 290, 458);
			};
	img.src = 'img/letter.png';
	Top22RoutingC(290,458)
	
		}
}

function Top22RoutingC(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop22();
	
	x-=1; y-=1.1;
	if(x!="150"){
		var loopTimer = setTimeout('Top22RoutingC('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 150, 300);
			 message.value="Packet arrived at Receiver Node";
			};
	img.src = 'img/letter.png';
	
		}
}

function randomTop23(){

arrow(121, 480, 209, 480, 2);
arrow(255, 460, 404, 330, 2);
arrow(431, 290, 483, 203, 2);
arrow(510, 174, 574, 139, 2);

arrow(97, 444, 138, 326, 1);
arrow(154, 279, 208, 172, 1);
arrow(249, 164, 401, 287, 1);

arrow(390, 299, 241, 177, 0);
arrow(218, 177, 167, 285, 0);
arrow(148, 332, 112, 449, 0);
arrow(392, 316, 242, 446, 0);
arrow(208, 461, 120, 461, 0);

context.fillStyle = "yellow";
context.beginPath();
var radius = 10; // for example
context.arc(20, 90, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Cache Node", 40, 83);
	
arrow(10, 175, 69, 175, 1);
	
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("RREQ", 75,170);
	
arrow(10, 215, 69, 215, 0);
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("RREP", 75, 210);

arrow(10, 255, 69, 255, 2);
	
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Selected", 75, 250);
	
var img = new Image(); 
img.onload = function()
{
	context.drawImage(img, 10, 295);
	};
img.src = 'img/letter.png';
	
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Packet", 75,320);

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

context.fillStyle = "grey";
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

context.fillStyle = "grey";
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

context.fillStyle = "grey";
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

context.fillStyle = "yellow";
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

context.fillStyle = "grey";
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

}

function Top23RoutingA(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop23();
	
	x+=1; y+=0;
	if(x!="205"){
		var loopTimer = setTimeout('Top23RoutingA('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 205, 440);
			};
	img.src = 'img/letter.png';
	Top23RoutingB(205,440);
	
		}
}

function Top23RoutingB(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop23();
	
	x+=1; y-=0.87;
	if(x!="384"){
		var loopTimer = setTimeout('Top23RoutingB('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 384, 284);
			};
	img.src = 'img/letter.png';
	Top23RoutingC(384,284);
	
		}
}

function Top23RoutingC(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop23();
	
	x+=1; y-=1.7;
	if(x!="460"){
		var loopTimer = setTimeout('Top23RoutingC('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 460, 155);
			};
	img.src = 'img/letter.png';
	Top23RoutingD(460,155)
	
		}
}

function Top23RoutingD(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop23();
	
	x+=1; y-=0.6;
	if(x!="565"){
		var loopTimer = setTimeout('Top23RoutingD('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 565, 95);
			 message.value="Packet arrived at Receiver Node";
			};
	img.src = 'img/letter.png';
	
		}
}

function randomTop24(){

arrow(709, 501, 722, 456, 2);
arrow(713, 406, 681, 357, 2);
arrow(661, 321, 650, 247, 2);
arrow(645, 204, 641, 112, 2);
arrow(611, 72, 475, 42, 2);

arrow(685, 499, 631, 448, 1);
arrow(625, 415, 650, 370, 1);
arrow(671, 526, 387, 501, 1);

arrow(667, 367, 701, 416, 0);
arrow(709, 452, 697, 495, 0);
arrow(639, 361, 613, 409, 0);
arrow(619, 455, 668, 500, 0);
arrow(619, 455, 668, 500, 0);
arrow(388, 483, 665, 509, 0);



context.fillStyle = "yellow";
context.beginPath();
var radius = 10; // for example
context.arc(20, 90, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Cache Node", 40, 83);
	
arrow(10, 175, 69, 175, 1);
	
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("RREQ", 75,170);
	
arrow(10, 215, 69, 215, 0);
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("RREP", 75, 210);

arrow(10, 255, 69, 255, 2);
	
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Selected", 75, 250);
	
var img = new Image(); 
img.onload = function()
{
	context.drawImage(img, 10, 295);
	};
img.src = 'img/letter.png';
	
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Packet", 75,320);

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

context.fillStyle = "grey";
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

context.fillStyle = "grey";
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

context.fillStyle = "grey";
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

context.fillStyle = "grey";
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

context.fillStyle = "grey";
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

context.fillStyle = "grey";
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

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(444, 386, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("7", 444-radius/4 ,386-radius/2);

context.fillStyle = "grey";
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

context.fillStyle = "grey";
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

context.fillStyle = "green";
context.beginPath();
var radius = 20; // for example
context.arc(696, 520, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("S1", 696-radius/4 ,520-radius/2);
}

function Top24RoutingA(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop24();
	
	x+=0.3; y-=1;
	if(y!="406"){
		var loopTimer = setTimeout('Top24RoutingA('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 697, 406);
			};
	img.src = 'img/letter.png';
		Top24RoutingB(697,406)
	
		}
}

function Top24RoutingB(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop24();
	
	x-=0.76; y-=1;
	if(y!="320"){
		var loopTimer = setTimeout('Top24RoutingB('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 637, 320);
			};
	img.src = 'img/letter.png';
		Top24RoutingC(637,320);
	
		}
}

function Top24RoutingC(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop24();
	
	x-=0.2; y-=1;
	if(y!="202"){
		var loopTimer = setTimeout('Top24RoutingC('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 611, 202);
			};
	img.src = 'img/letter.png';
		Top24RoutingD(611,202);
	
		}
}

function Top24RoutingD(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop24();
	
	x-=0.05; y-=1;
	if(y!="64"){
		var loopTimer = setTimeout('Top24RoutingD('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 609, 64);
			};
	img.src = 'img/letter.png';
			Top24RoutingE(609,64);
		}
}

function Top24RoutingE(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop24();
	
	x-=1; y-=0.3;
	if(x!="422"){
		var loopTimer = setTimeout('Top24RoutingE('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 422, 14);
			 message.value="Packet arrived at Receiver Node";
			};
	img.src = 'img/letter.png';
	
		}
}

function randomTop25(){
arrow(191, 287, 227, 375, 2);
arrow(268, 402, 632, 402, 2);
arrow(648, 370, 624, 78, 2);

arrow(196, 238, 245, 172, 1);

arrow(256, 180, 211, 248, 0);
arrow(641, 77, 669, 375, 0);
arrow(630, 380, 270, 380, 0);
arrow(243, 370, 210, 282, 0);

context.fillStyle = "yellow";
context.beginPath();
var radius = 10; // for example
context.arc(20, 90, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Cache Node", 40, 83);
	
arrow(10, 175, 69, 175, 1);
	
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("RREQ", 75,170);
	
arrow(10, 215, 69, 215, 0);
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("RREP", 75, 210);

arrow(10, 255, 69, 255, 2);
	
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Selected", 75, 250);
	
var img = new Image(); 
img.onload = function()
{
	context.drawImage(img, 10, 295);
	};
img.src = 'img/letter.png';
	
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Packet", 75,320);

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
	
context.moveTo(190,262); // S1 to 1
context.lineTo(267,158);
context.stroke();
context.closePath();

context.moveTo(355,229); // 2 to 1
context.lineTo(267,158);
context.stroke();
context.closePath();

context.moveTo(190,262); // S1 to 3
context.lineTo(246,395);
context.stroke();
context.closePath();

context.moveTo(355,229); // 2 to 4
context.lineTo(525,227);
context.stroke();
context.closePath();

context.moveTo(660,395); // 5 to 3
context.lineTo(246,395);
context.stroke();
context.closePath();

context.moveTo(660,395); // 5 to R1
context.lineTo(632,53);
context.stroke();
context.closePath();

context.moveTo(632,53); // R1 to 4
context.lineTo(525,227);
context.stroke();
context.closePath();

context.fillStyle = "red";
context.beginPath();
var radius = 20; // for example
context.arc(632, 53, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("R1", 632-radius/4 ,53-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(660, 395, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("5", 660-radius/4 ,395-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(525, 227, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("4", 525-radius/4 ,227-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(246, 395, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("3", 246-radius/4 ,395-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(355, 229, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("2", 355-radius/4 ,229-radius/2);

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(267, 158, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("1", 267-radius/4 ,158-radius/2);

context.fillStyle = "green";
context.beginPath();
var radius = 20; // for example
context.arc(190, 262, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("S1", 190-radius/4 ,262-radius/2);
}

function Top25RoutingA(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop25();
	
	x+=0.4; y+=1;
	if(y!="374"){
		var loopTimer = setTimeout('Top25RoutingA('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 222, 374);
			};
	img.src = 'img/letter.png';
	Top25RoutingB(222,374)
		}
}

function Top25RoutingB(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop25();
	
	x+=1; y+=0;
	if(x!="633"){
		var loopTimer = setTimeout('Top25RoutingB('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 633, 374);
			};
	img.src = 'img/letter.png';
	Top25RoutingC(633,374)
		}
}

function Top25RoutingC(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop25();
	
	x-=0.085; y-=1;
	if(y!="30"){
		var loopTimer = setTimeout('Top25RoutingC('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 605, 30);
			 message.value="Packet arrived at Receiver Node";
			};
	img.src = 'img/letter.png';
	
		}
}

function randomTop26(){

//arrow(fromx, fromy, tox, toy, z);
arrow(476, 182, 519, 234, 2);
arrow(502, 261, 341, 339, 2);

arrow(467, 151, 525, 114, 1);
arrow(573, 120, 702, 256, 1);
arrow(440, 150, 354, 61, 1);
arrow(310, 63, 229, 152, 1);

arrow(503, 246, 461, 195, 0);
arrow(690, 265, 562, 131, 0);
arrow(533, 126, 478, 165, 0);
arrow(345, 69, 430, 160, 0);
arrow(243, 163, 321, 73, 0);


context.fillStyle = "yellow";
context.beginPath();
var radius = 10; // for example
context.arc(20, 90, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Cache Node", 40, 83);
	
arrow(10, 175, 69, 175, 1);
	
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("RREQ", 75,170);
	
arrow(10, 215, 69, 215, 0);
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("RREP", 75, 210);

arrow(10, 255, 69, 255, 2);
	
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Selected", 75, 250);
	
var img = new Image(); 
img.onload = function()
{
	context.drawImage(img, 10, 295);
	};
img.src = 'img/letter.png';
	
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Packet", 75,320);

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

context.fillStyle = "grey";
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

context.fillStyle = "yellow";
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

context.fillStyle = "grey";
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

context.fillStyle = "yellow";
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

context.fillStyle = "grey";
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

}

function Top26RoutingA(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop26();
	
	x+=0.8; y+=1;
	if(y!="241"){
		var loopTimer = setTimeout('Top26RoutingA('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 493, 241);
			};
	img.src = 'img/letter.png';
		Top26RoutingB(493,241);
	
		}
}

function Top26RoutingB(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop26();
	
	x-=1; y+=0.45;
	if(x!="289"){
		var loopTimer = setTimeout('Top26RoutingB('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 289, 335);
			};
	img.src = 'img/letter.png';
	
		}
}

function randomTop27(){

//arrow(fromx, fromy, tox, toy, z);
arrow(630, 377, 433, 324, 2);
arrow(409, 331, 345, 464, 2);
arrow(311, 463, 198, 140, 2);

arrow(679, 357, 748, 210, 1);
arrow(734, 161, 600, 75, 1);

arrow(331, 448, 390, 324, 0);
arrow(436, 301, 631, 353, 0);
arrow(591, 86, 723, 180, 0);
arrow(728, 201, 666, 349, 0);


context.fillStyle = "yellow";
context.beginPath();
var radius = 10; // for example
context.arc(20, 90, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Cache Node", 40, 83);
	
arrow(10, 175, 69, 175, 1);
	
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("RREQ", 75,170);
	
arrow(10, 215, 69, 215, 0);
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("RREP", 75, 210);

arrow(10, 255, 69, 255, 2);
	
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Selected", 75, 250);
	
var img = new Image(); 
img.onload = function()
{
	context.drawImage(img, 10, 295);
	};
img.src = 'img/letter.png';
	
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Packet", 75,320);

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

context.fillStyle = "grey";
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

context.fillStyle = "yellow";
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

context.fillStyle = "grey";
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

context.fillStyle = "yellow";
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

context.fillStyle = "grey";
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

}

function Top27RoutingA(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop27();
	
	x-=1; y-=0.3;
	if(x!="389"){
		var loopTimer = setTimeout('Top27RoutingA('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 389, 279);
			};
	img.src = 'img/letter.png';
		Top27RoutingB(389,289);
	
		}
}

function Top27RoutingB(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop27();
	
	x-=0.58; y+=1;
	if(y!="454"){
		var loopTimer = setTimeout('Top27RoutingB('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 300, 454);
			};
	img.src = 'img/letter.png';
		Top27RoutingC(300,454);
	
		}
}

function Top27RoutingC(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop27();
	
	x-=0.35; y-=1;
	if(y!="90"){
		var loopTimer = setTimeout('Top27RoutingC('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 172, 90);
			};
	img.src = 'img/letter.png';
	
		}
}

function randomTop28(){

//arrow(fromx, fromy, tox, toy, z);
arrow(258, 219, 232, 336, 2);
arrow(240, 378, 282, 468, 2);
arrow(260, 486, 190, 484, 2);
arrow(144, 485, 75, 485, 2);

arrow(270, 178, 316, 57, 1);
arrow(342, 45, 571, 78, 1);
arrow(439, 486, 310, 487, 0);

arrow(79, 504, 144, 504, 0);
arrow(193, 504, 262, 504, 0);
arrow(310, 504, 438, 504, 1);
arrow(266, 471, 223, 385, 0);
arrow(218, 335, 243, 218, 0);
arrow(302, 49, 257, 170, 0);
arrow(573, 61, 347, 27, 0);


context.fillStyle = "yellow";
context.beginPath();
var radius = 10; // for example
context.arc(20, 90, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Cache Node", 40, 83);
	
arrow(10, 175, 69, 175, 1);
	
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("RREQ", 75,170);
	
arrow(10, 215, 69, 215, 0);
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("RREP", 75, 210);

arrow(10, 255, 69, 255, 2);
	
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Selected", 75, 250);
	
var img = new Image(); 
img.onload = function()
{
	context.drawImage(img, 10, 295);
	};
img.src = 'img/letter.png';
	
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Packet", 75,320);

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

context.fillStyle = "grey";
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


context.fillStyle = "grey";
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

context.fillStyle = "yellow";
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

context.fillStyle = "grey";
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

context.fillStyle = "grey";
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

context.fillStyle = "grey";
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
}

function Top28RoutingA(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop28();
	
	x-=0.3; y+=1;
	if(y!="335"){
		var loopTimer = setTimeout('Top28RoutingA('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 190, 335);
			};
	img.src = 'img/letter.png';
		Top28RoutingB(190,335);
	
		}
}

function Top28RoutingB(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop28();
	
	x+=0.45; y+=1;
	if(y!="468"){
		var loopTimer = setTimeout('Top28RoutingB('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 259, 468);
			};
	img.src = 'img/letter.png';
		Top28RoutingC(259,468);
	
		}
}

function Top28RoutingC(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop28();
	
	x-=1;
	if(x!="146"){
		var loopTimer = setTimeout('Top28RoutingC('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 146, 468);
			};
	img.src = 'img/letter.png';
		Top28RoutingD(146,468);
	
		}
}

function Top28RoutingD(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop28();
	
	x-=1;
	if(x!="25"){
		var loopTimer = setTimeout('Top28RoutingD('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 25, 468);
			};
	img.src = 'img/letter.png';
	
		}
}

function randomTop29(){

//arrow(fromx, fromy, tox, toy, z);
arrow(289, 146, 364, 67, 2);

arrow(270, 196, 270, 288, 1);
arrow(270, 337, 270, 447, 1);
arrow(300, 305, 451, 305, 1);
arrow(300, 481, 705, 481, 1);
arrow(499, 318, 710, 453, 1);

arrow(376, 78, 302, 159, 0);
arrow(699, 463, 490, 332, 0);
arrow(700, 467, 300, 467, 0);
arrow(285, 448, 285, 335, 0);
arrow(285, 288, 285, 196, 0);
arrow(450, 322, 300, 322, 0);


context.fillStyle = "yellow";
context.beginPath();
var radius = 10; // for example
context.arc(20, 90, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Cache Node", 40, 83);
	
arrow(10, 175, 69, 175, 1);
	
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("RREQ", 75,170);
	
arrow(10, 215, 69, 215, 0);
		
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("RREP", 75, 210);

arrow(10, 255, 69, 255, 2);
	
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Selected", 75, 250);
	
var img = new Image(); 
img.onload = function()
{
	context.drawImage(img, 10, 295);
	};
img.src = 'img/letter.png';
	
context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Packet", 75,320);

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
	
context.moveTo(279,171); //S1 to R1
context.lineTo(388,58);
context.stroke();
context.closePath();

context.moveTo(279,171); //S1 to 1
context.lineTo(279,313);
context.stroke();
context.closePath();

context.moveTo(279,475); //2 to 1
context.lineTo(279,313);
context.stroke();
context.closePath();

context.moveTo(474,313); //3 to 1
context.lineTo(279,313);
context.stroke();
context.closePath();

context.moveTo(279,475); //2 to 4
context.lineTo(728,475);
context.stroke();
context.closePath();

context.moveTo(474,313); //3 to 4
context.lineTo(728,475);
context.stroke();
context.closePath();

context.moveTo(728,58); //5 to 4
context.lineTo(728,475);
context.stroke();
context.closePath();

context.moveTo(728,58); //5 to R1
context.lineTo(388,58);
context.stroke();
context.closePath();

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(728, 58, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("5", 728-radius/4 ,58-radius/2);

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(728, 475, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("4", 728-radius/4 ,475-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(474, 313, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("3", 474-radius/4 ,313-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(279, 475, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("2", 279-radius/4 ,475-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(279, 313, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("1", 279-radius/4 ,313-radius/2);

context.fillStyle = "red";
context.beginPath();
var radius = 20; // for example
context.arc(388, 58, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("R1", 388-radius/4 ,58-radius/2);

context.fillStyle = "green";
context.beginPath();
var radius = 20; // for example
context.arc(279, 171, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("S1", 279-radius/4 ,171-radius/2);

}

function Top29RoutingA(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop29();
	
	x+=0.8; y-=1;
	if(y!="31"){
		var loopTimer = setTimeout('Top29RoutingA('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 354, 31);
			};
	img.src = 'img/letter.png';
	
		}
}




