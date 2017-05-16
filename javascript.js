window.onload = randomText()
console.log("onLoad");
;
  function randomText(){
	//var Color;
	var colorsName =["red","blue","purple","green"];
	var printColorName = colorsName[Math.floor(Math.random()*colorsName.length)];
	console.log("Yo random is working");
	document.getElementById("question").innerHTML=colorsName[Math.floor(Math.random()*colorsName.length)];
	changeTextColor();
  }

function changeTextColor(){
	//change text
	// change colors
	var Color;
	var textEquals = document.getElementById("question").textContent;
	//document.getElementById("spanx").innerHTML=textEquals;
	switch (textEquals){
	case "red":
			Color = "red";
			break;
	case "blue":
			Color = "blue";
			break;
	case "purple":
			Color = "purple";
			break;
	case "green":
			Color = "green";
			break;
	//default: Color = "cyan";
	}
	document.getElementById("question").style.color = Color;
	console.log("Yo changeTextColor is working");
}
function defBackGrownd(message){
	document.getElementById("oval").backgroundColor = "purple";
	document.getElementById("square").backgroundColor = "red";
	document.getElementById("circle").backgroundColor = "green";
	document.getElementById("parallelogram").backgroundColor = "blue";
	switch (message){
	case "oval":
			document.getElementById("oval").backgroundColor = "purple";
			break;
	case "square":
			document.getElementById("square").backgroundColor = "red";
			break;
	case "circle":
			document.getElementById("circle").backgroundColor = "green";
			break;
	case "parallelogram":
			document.getElementById("parallelogram").backgroundColor = "blue";
			break;
	//default: Color = "cyan";
	}
	//var colorOfCId=clicked_id.style.backgroundColor;
	//console.log(clicked_id.style.backgroundColor.value);
	console.log("defBackGrownd() works");
}

function checkQuestion(clicked_id){
	var clickedIdString = String(clicked_id);
	var clickedId = document.getElementById(clickedIdString);
	var style1 = window.getComputedStyle(clickedId,null).getPropertyValue('background-color');	//console.log(stylezz);
	var elem2 = document.getElementById("question");
	var style2 = window.getComputedStyle(elem2,null).getPropertyValue('color');
	if(style1==style2){
		console.log("the if statement is working");
		randomText();
	}else{
		console.log("the if statement is working");
	}
}
