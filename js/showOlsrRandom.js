function randomTop31(){
//arrow(fromx, fromy, tox, toy, z);
arrow(287, 208, 239, 179, 3);
arrow(226, 137, 272, 67, 4);
arrow(463, 215, 522, 319, 4);
arrow(465, 168, 534, 53, 4);
arrow(338, 213, 436, 200, 3);
		
context.fillStyle = "yellow";
context.beginPath();
var radius = 10; // for example
context.arc(20, 90, radius, 0, Math.PI * 2);
context.closePath();
context.fill();

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("MPR set of Source Node", 40, 83);

arrow(10, 175, 69, 175, 3);

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Step 1", 75,170);

arrow(10, 215, 69, 215, 4);

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Step 2", 75, 210);
		
var img = new Image(); 
img.onload = function()
{
	context.drawImage(img, 10, 255);
	};
img.src = 'img/letter.png';

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Packet", 75,250);

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

function Top31RoutingA(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop31();
	
	x-=1; y-=0.5;
	if(x!="199"){
		var loopTimer = setTimeout('Top31RoutingA('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 199, 141);
			};
	img.src = 'img/letter.png';
	Top31RoutingB(199,141)
	
		}
}

function Top31RoutingB(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop31();
	
	x+=0.6; y-=1;
	if(y!="30"){
		var loopTimer = setTimeout('Top31RoutingB('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 270, 30);
			 message.value="Packet arrived at Receiver Node";
			};
	img.src = 'img/letter.png';
	
		}
}

function Top31RoutingA2(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop31();
	
	x+=1; y-=0.15;
	if(x!="436"){
		var loopTimer = setTimeout('Top31RoutingA2('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 436, 177);
			};
	img.src = 'img/letter.png';
	Top31RoutingB2(436,177)
	Top31RoutingB3(436,177)
	
		}
}

function Top31RoutingB2(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop31();
	
	x+=0.6; y+=1;
	if(y!="321"){
		var loopTimer = setTimeout('Top31RoutingB2('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 516, 311);
			};
	img.src = 'img/letter.png';
	
	
		}
}

function Top31RoutingB3(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop31();
	
	x+=0.6; y-=1;
	if(y!="16"){
		var loopTimer = setTimeout('Top31RoutingB3('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 528, 16);
			};
	img.src = 'img/letter.png';
	
	
		}
}

function randomTop32(){

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
context.fillText("MPR set of Source Node", 40, 83);

arrow(10, 175, 69, 175, 3);

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Step 1", 75,170);

arrow(10, 215, 69, 215, 4);

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Step 2", 75, 210);
		
var img = new Image(); 
img.onload = function()
{
	context.drawImage(img, 10, 255);
	};
img.src = 'img/letter.png';

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Packet", 75,250);

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

function randomTop33(){

arrow(431, 290, 483, 203, 3);
arrow(510, 174, 574, 139, 4);
arrow(392, 316, 242, 446, 3);
arrow(208, 461, 120, 461, 4);

context.fillStyle = "yellow";
context.beginPath();
var radius = 10; // for example
context.arc(20, 90, radius, 0, Math.PI * 2);
context.closePath();
context.fill();

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("MPR set of Source Node", 40, 83);

arrow(10, 175, 69, 175, 3);

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Step 1", 75,170);

arrow(10, 215, 69, 215, 4);

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Step 2", 75, 210);
		
var img = new Image(); 
img.onload = function()
{
	context.drawImage(img, 10, 255);
	};
img.src = 'img/letter.png';

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Packet", 75,250);

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

context.fillStyle = "green";
context.beginPath();
var radius = 20; // for example
context.arc(415, 307, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("S1", 415-radius/4 ,307-radius/2);

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

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(97, 469, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("3", 97-radius/4 ,469-radius/2);

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

}

function Top33RoutingA2(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop33();
	
	x-=1; y+=0.9;
	if(x!="208"){
		var loopTimer = setTimeout('Top33RoutingA2('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 208, 440);
			};
	img.src = 'img/letter.png';
	Top33RoutingB2(205,440);
	
		}
}

function Top33RoutingB2(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop33();
	
	x-=1;
	if(x!="74"){
		var loopTimer = setTimeout('Top33RoutingB2('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 74, 440);
			};
	img.src = 'img/letter.png';
	
		}
}

function Top33RoutingA(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop33();
	
	x+=1; y-=1.7;
	if(x!="460"){
		var loopTimer = setTimeout('Top33RoutingA('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 460, 155);
			};
	img.src = 'img/letter.png';
	Top33RoutingB(460,155)
	
		}
}

function Top33RoutingB(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop33();
	
	x+=1; y-=0.6;
	if(x!="565"){
		var loopTimer = setTimeout('Top33RoutingB('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 565, 95);
			 message.value="Packet arrived at Receiver Node";
			};
	img.src = 'img/letter.png';
	
		}
}

function randomTop34(){

arrow(645, 204, 641, 112, 3);
arrow(611, 72, 475, 42, 4);

arrow(615, 227, 485, 256, 3);
arrow(453, 290, 441, 362, 4);

arrow(667, 367, 701, 416, 4);
arrow(636, 249, 651, 320, 3);
arrow(639, 361, 613, 409, 4);

context.fillStyle = "yellow";
context.beginPath();
var radius = 10; // for example
context.arc(20, 90, radius, 0, Math.PI * 2);
context.closePath();
context.fill();

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("MPR set of Source Node", 40, 83);

arrow(10, 175, 69, 175, 3);

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Step 1", 75,170);

arrow(10, 215, 69, 215, 4);

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Step 2", 75, 210);
		
var img = new Image(); 
img.onload = function()
{
	context.drawImage(img, 10, 255);
	};
img.src = 'img/letter.png';

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Packet", 75,250);

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

context.fillStyle = "green";
context.beginPath();
var radius = 20; // for example
context.arc(638, 226, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("S1", 638-radius/4 ,226-radius/2);

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

context.fillStyle = "grey";
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
context.fillText("5", 696-radius/4 ,520-radius/2);
}

function Top34RoutingA2(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop34();
	
	x-=1; y+=0.2;
	if(x!="444"){
		var loopTimer = setTimeout('Top34RoutingA2('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 444, 249);
			};
	img.src = 'img/letter.png';
		Top34RoutingB2(444,249)
	
		}
}

function Top34RoutingB2(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop34();
	
	x-=0.2; y+=1;
	if(y!="366"){
		var loopTimer = setTimeout('Top34RoutingB2('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 428, 366);
			};
	img.src = 'img/letter.png';
	
		}
}

function Top34RoutingA3(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop34();
	
	x+=0.1; y+=1;
	if(y!="322"){
		var loopTimer = setTimeout('Top34RoutingA3('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 635, 315);
			};
	img.src = 'img/letter.png';
		Top34RoutingB3(635,315);
		Top34RoutingC3(635,315);
	
		}
}

function Top34RoutingB3(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop34();
	
	x-=0.6; y+=1;
	if(y!="407"){
		var loopTimer = setTimeout('Top34RoutingB3('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 583, 407);
			};
	img.src = 'img/letter.png';
	
		}
}

function Top34RoutingC3(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop34();
	
	x+=0.6; y+=1;
	if(y!="407"){
		var loopTimer = setTimeout('Top34RoutingC3('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 697, 407);
			};
	img.src = 'img/letter.png';
	
		}
}

function Top34RoutingA(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop34();
	
	x-=0.05; y-=1;
	if(y!="64"){
		var loopTimer = setTimeout('Top34RoutingA('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 609, 64);
			};
	img.src = 'img/letter.png';
			Top34RoutingB(609,64);
		}
}

function Top34RoutingB(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop34();
	
	x-=1; y-=0.3;
	if(x!="422"){
		var loopTimer = setTimeout('Top34RoutingB('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 422, 14);
			 message.value="Packet arrived at Receiver Node";
			};
	img.src = 'img/letter.png';
	
		}
}

function randomTop35(){

arrow(268, 402, 632, 402, 3);
arrow(648, 370, 624, 78, 4);

arrow(196, 238, 245, 172, 4);
arrow(243, 370, 210, 282, 3);

context.fillStyle = "yellow";
context.beginPath();
var radius = 10; // for example
context.arc(20, 90, radius, 0, Math.PI * 2);
context.closePath();
context.fill();

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("MPR set of Source Node", 40, 83);

arrow(10, 175, 69, 175, 3);

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Step 1", 75,170);

arrow(10, 215, 69, 215, 4);

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Step 2", 75, 210);
		
var img = new Image(); 
img.onload = function()
{
	context.drawImage(img, 10, 255);
	};
img.src = 'img/letter.png';

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Packet", 75,250);

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

context.fillStyle = "yellow";
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

context.fillStyle = "green";
context.beginPath();
var radius = 20; // for example
context.arc(246, 395, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("S1", 246-radius/4 ,395-radius/2);

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

context.fillStyle = "grey";
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

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(190, 262, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("3", 190-radius/4 ,262-radius/2);
}

function Top35RoutingA2(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop35();
	
	x-=0.4; y-=1;
	if(y!="242"){
		var loopTimer = setTimeout('Top35RoutingA2('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 167, 242);
			};
	img.src = 'img/letter.png';
	Top35RoutingB2(167,242)
		}
}

function Top35RoutingB2(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop35();
	
	x+=0.6; y-=1;
	if(y!="129"){
		var loopTimer = setTimeout('Top35RoutingB2('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 243, 129);
			};
	img.src = 'img/letter.png';
		}
}

function Top35RoutingA(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop35();
	
	x+=1; y+=0;
	if(x!="633"){
		var loopTimer = setTimeout('Top35RoutingA('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 633, 374);
			};
	img.src = 'img/letter.png';
	Top35RoutingB(633,374)
		}
}

function Top35RoutingB(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop35();
	
	x-=0.085; y-=1;
	if(y!="30"){
		var loopTimer = setTimeout('Top35RoutingB('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 605, 30);
			 message.value="Packet arrived at Receiver Node";
			};
	img.src = 'img/letter.png';
	
		}
}

function randomTop36(){

//arrow(fromx, fromy, tox, toy, z);
arrow(476, 182, 519, 234, 3);
arrow(502, 261, 341, 339, 4);

arrow(467, 151, 525, 114, 3);
arrow(573, 120, 702, 256, 4);
arrow(440, 150, 354, 61, 3);
arrow(310, 63, 229, 152, 4);


context.fillStyle = "yellow";
context.beginPath();
var radius = 10; // for example
context.arc(20, 90, radius, 0, Math.PI * 2);
context.closePath();
context.fill();

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("MPR set of Source Node", 40, 83);

arrow(10, 175, 69, 175, 3);

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Step 1", 75,170);

arrow(10, 215, 69, 215, 4);

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Step 2", 75, 210);
		
var img = new Image(); 
img.onload = function()
{
	context.drawImage(img, 10, 255);
	};
img.src = 'img/letter.png';

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Packet", 75,250);

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

context.fillStyle = "grey";
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

}

function Top36RoutingA(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop36();
	
	x+=0.8; y+=1;
	if(y!="241"){
		var loopTimer = setTimeout('Top36RoutingA('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 493, 241);
			};
	img.src = 'img/letter.png';
		Top36RoutingB(493,241);
	
		}
}

function Top36RoutingB(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop36();
	
	x-=1; y+=0.45;
	if(x!="289"){
		var loopTimer = setTimeout('Top36RoutingB('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 289, 335);
			};
	img.src = 'img/letter.png';
	
		}
}

function Top36RoutingA2(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop36();
	
	x-=0.9; y-=1;
	if(y!="22"){
		var loopTimer = setTimeout('Top36RoutingA2('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 306, 22);
			};
	img.src = 'img/letter.png';
		Top36RoutingB2(306,22);
	
		}
}

function Top36RoutingB2(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop36();
	
	x-=0.9; y+=1;
	if(y!="152"){
		var loopTimer = setTimeout('Top36RoutingB2('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 192, 152);
			};
	img.src = 'img/letter.png';
	
		}
}

function Top36RoutingA3(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop36();
	
	x+=1.2; y-=1;
	if(y!="77"){
		var loopTimer = setTimeout('Top36RoutingA3('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 529, 77);
			};
	img.src = 'img/letter.png';
		Top36RoutingB3(529,77);
	
		}
}

function Top36RoutingB3(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop36();
	
	x+=1; y+=1;
	if(x!="700"){
		var loopTimer = setTimeout('Top36RoutingB3('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 700, 245);
			};
	img.src = 'img/letter.png';
	
		}
}

function randomTop37(){

//arrow(fromx, fromy, tox, toy, z);

arrow(409, 331, 345, 464, 3);
arrow(311, 463, 198, 140, 4);

arrow(679, 357, 748, 210, 4);
arrow(436, 301, 631, 353, 3);


context.fillStyle = "yellow";
context.beginPath();
var radius = 10; // for example
context.arc(20, 90, radius, 0, Math.PI * 2);
context.closePath();
context.fill();

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("MPR set of Source Node", 40, 83);

arrow(10, 175, 69, 175, 3);

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Step 1", 75,170);

arrow(10, 215, 69, 215, 4);

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Step 2", 75, 210);
		
var img = new Image(); 
img.onload = function()
{
	context.drawImage(img, 10, 255);
	};
img.src = 'img/letter.png';

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Packet", 75,250);

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

context.fillStyle = "grey";
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

context.fillStyle = "yellow";
context.beginPath();
var radius = 20; // for example
context.arc(665, 375, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("2", 665-radius/4 ,375-radius/2);

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

context.fillStyle = "green";
context.beginPath();
var radius = 20; // for example
context.arc(412, 306, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("S1", 412-radius/4 ,306-radius/2);

}

function Top37RoutingA2(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop37();
	
	x+=1; y+=0.25;
	if(x!="653"){
		var loopTimer = setTimeout('Top37RoutingA2('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 653, 356);
			};
	img.src = 'img/letter.png';
		Top37RoutingB2(653,356);
	
		}
}

function Top37RoutingB2(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop37();
	
	x+=0.3; y-=1;
	if(y!="152"){
		var loopTimer = setTimeout('Top37RoutingB2('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 719, 152);
			};
	img.src = 'img/letter.png';
	
		}
}

function Top37RoutingA(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop37();
	
	x-=0.58; y+=1;
	if(y!="454"){
		var loopTimer = setTimeout('Top37RoutingA('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 300, 454);
			};
	img.src = 'img/letter.png';
		Top37RoutingB(300,454);
	
		}
}

function Top37RoutingB(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop37();
	
	x-=0.35; y-=1;
	if(y!="90"){
		var loopTimer = setTimeout('Top37RoutingB('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 172, 90);
			};
	img.src = 'img/letter.png';
	
		}
}

function randomTop38(){

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
context.fillText("MPR set of Source Node", 40, 83);

arrow(10, 175, 69, 175, 3);

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Step 1", 75,170);

arrow(10, 215, 69, 215, 4);

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Step 2", 75, 210);
		
var img = new Image(); 
img.onload = function()
{
	context.drawImage(img, 10, 255);
	};
img.src = 'img/letter.png';

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Packet", 75,250);

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

function randomTop39(){

//arrow(fromx, fromy, tox, toy, z);
arrow(289, 146, 364, 67, 4);
arrow(270, 337, 270, 447, 3);
arrow(300, 305, 451, 305, 3);
arrow(285, 288, 285, 196, 3);

arrow(495, 319, 711, 456, 4);
arrow(301, 469, 701, 469, 4);
context.fillStyle = "yellow";
context.beginPath();
var radius = 10; // for example
context.arc(20, 90, radius, 0, Math.PI * 2);
context.closePath();
context.fill();

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("MPR set of Source Node", 40, 83);

arrow(10, 175, 69, 175, 3);

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Step 1", 75,170);

arrow(10, 215, 69, 215, 4);

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Step 2", 75, 210);
		
var img = new Image(); 
img.onload = function()
{
	context.drawImage(img, 10, 255);
	};
img.src = 'img/letter.png';

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Packet", 75,250);

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

context.fillStyle = "grey";
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

context.fillStyle = "yellow";
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

context.fillStyle = "yellow";
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

context.fillStyle = "green";
context.beginPath();
var radius = 20; // for example
context.arc(279, 313, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("S1", 279-radius/4 ,313-radius/2);

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

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(279, 171, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("1", 279-radius/4 ,171-radius/2);

}

function Top39RoutingB(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop39();
	
	x+=0.8; y-=1;
	if(y!="31"){
		var loopTimer = setTimeout('Top39RoutingB('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 354, 31);
			};
	img.src = 'img/letter.png';
	
		}
}

function Top39RoutingA(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop39();
	
	x+=0; y-=1;
	if(y!="149"){
		var loopTimer = setTimeout('Top39RoutingA('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 256, 149);
			};
	img.src = 'img/letter.png';
	Top39RoutingB(256,149)
	
		}
}

function Top39RoutingA2(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop39();
	
	x+=0; y+=1;
	if(y!="443"){
		var loopTimer = setTimeout('Top39RoutingA2('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 256, 443);
			};
	img.src = 'img/letter.png';
		Top39RoutingB2(256,443)
		}
}

function Top39RoutingB2(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop39();
	
	x+=1; y+=0;
	if(x!="705"){
		var loopTimer = setTimeout('Top39RoutingB2('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 705, 443);
			};
	img.src = 'img/letter.png';
	
		}
}

function Top39RoutingA3(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop39();
	
	x+=1; y+=0;
	if(x!="453"){
		var loopTimer = setTimeout('Top39RoutingA3('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 453, 290);
			};
	img.src = 'img/letter.png';
		Top39RoutingB3(453,290)
		}
}

function Top39RoutingB3(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop39();
	
	x+=1; y+=0.7;
	if(x!="700"){
		var loopTimer = setTimeout('Top39RoutingB3('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 700, 446);
			};
	img.src = 'img/letter.png';
	
		}
}



