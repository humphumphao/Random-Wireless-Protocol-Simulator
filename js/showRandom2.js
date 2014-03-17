function randomTop6(){

//arrow(fromx, fromy, tox, toy, z);
arrow(476, 182, 519, 234, 2);
arrow(502, 261, 341, 339, 2);

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

arrow(10, 84, 69, 84, 2);
		
context.fillStyle = "black";
var font = "bold 13px serif";
context.font = font;
context.fillText("Path Selected", 80,84);

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

context.fillStyle = "grey";
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


randomTopTable6();
}

function randomTopTable6(){

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

function randomTop7(){

//arrow(fromx, fromy, tox, toy, z);
arrow(630, 377, 433, 324, 2);
arrow(409, 331, 345, 464, 2);
arrow(311, 463, 198, 140, 2);


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

arrow(10, 84, 69, 84, 2);
		
context.fillStyle = "black";
var font = "bold 13px serif";
context.font = font;
context.fillText("Path Selected", 80,84);

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

context.fillStyle = "grey";
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

randomTopTable7();
}

function randomTopTable7(){

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

function randomTop8(){

//arrow(fromx, fromy, tox, toy, z);
arrow(258, 219, 232, 336, 2);
arrow(240, 378, 282, 468, 2);
arrow(260, 486, 190, 484, 2);
arrow(144, 485, 75, 485, 2);

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

arrow(10, 84, 69, 84, 2);
		
context.fillStyle = "black";
var font = "bold 13px serif";
context.font = font;
context.fillText("Path Selected", 80,84);

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

context.fillStyle = "grey";
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

context.fillStyle = "grey";
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

randomTopTable8();
}

function randomTopTable8(){

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

function randomTop9(){

//arrow(fromx, fromy, tox, toy, z);
arrow(289, 146, 364, 67, 2);

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

arrow(10, 84, 69, 84, 2);
		
context.fillStyle = "black";
var font = "bold 13px serif";
context.font = font;
context.fillText("Path Selected", 80,84);

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


randomTopTable9();
}

function randomTopTable9(){

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

    "<td>R1</td>" +

    "<td>2</td>" +

    "</tr>" +
		
	"<tr align = 'middle'>" +
	
	"<td>R1</td>" +

    "<td>R1</td>" +

    "<td>1</td>" +

    "</tr>" +
				
   "<table>";


}

function TopSixRoutingA(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop6();
	
	x+=0.8; y+=1;
	if(y!="241"){
		var loopTimer = setTimeout('TopSixRoutingA('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 493, 241);
			};
	img.src = 'img/letter.png';
		TopSixRoutingB(493,241);
	
		}
}

function TopSixRoutingB(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop6();
	
	x-=1; y+=0.45;
	if(x!="289"){
		var loopTimer = setTimeout('TopSixRoutingB('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 289, 335);
			};
	img.src = 'img/letter.png';
	
		}
}

function TopSevenRoutingA(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop7();
	
	x-=1; y-=0.3;
	if(x!="389"){
		var loopTimer = setTimeout('TopSevenRoutingA('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 389, 279);
			};
	img.src = 'img/letter.png';
		TopSevenRoutingB(389,289);
	
		}
}

function TopSevenRoutingB(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop7();
	
	x-=0.58; y+=1;
	if(y!="454"){
		var loopTimer = setTimeout('TopSevenRoutingB('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 300, 454);
			};
	img.src = 'img/letter.png';
		TopSevenRoutingC(300,454);
	
		}
}

function TopSevenRoutingC(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop7();
	
	x-=0.35; y-=1;
	if(y!="90"){
		var loopTimer = setTimeout('TopSevenRoutingC('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 172, 90);
			};
	img.src = 'img/letter.png';
	
		}
}

function TopEightRoutingA(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop8();
	
	x-=0.3; y+=1;
	if(y!="335"){
		var loopTimer = setTimeout('TopEightRoutingA('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 190, 335);
			};
	img.src = 'img/letter.png';
		TopEightRoutingB(190,335);
	
		}
}

function TopEightRoutingB(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop8();
	
	x+=0.45; y+=1;
	if(y!="468"){
		var loopTimer = setTimeout('TopEightRoutingB('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 259, 468);
			};
	img.src = 'img/letter.png';
		TopEightRoutingC(259,468);
	
		}
}

function TopEightRoutingC(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop8();
	
	x-=1;
	if(x!="146"){
		var loopTimer = setTimeout('TopEightRoutingC('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 146, 468);
			};
	img.src = 'img/letter.png';
		TopEightRoutingD(146,468);
	
		}
}

function TopEightRoutingD(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop8();
	
	x-=1;
	if(x!="25"){
		var loopTimer = setTimeout('TopEightRoutingD('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 25, 468);
			};
	img.src = 'img/letter.png';
	
		}
}

function TopNineRoutingA(x,y){

	context.save();
	context.clearRect (0, 0, 800, 550)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	randomTop9();
	
	x+=0.8; y-=1;
	if(y!="31"){
		var loopTimer = setTimeout('TopNineRoutingA('+x+','+y+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 354, 31);
			};
	img.src = 'img/letter.png';
	
		}
}

function tableClear(){
	
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
	
	   "<table>";

}

