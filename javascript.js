<!--https://www.w3schools.com/js/js_intro.asp -->

// the one line functions (aka the way I rename the function so i can better understand what is going on)
//function refresh(){
//	window.location.reload();
//}
	//the function for 
	/*function validation()
	{
		var colorsName = ["Red","Blue","Purple","Green"];
		for (var notx=0;notx < 1;notx++){
			var printColorName = colorsName[Math.round(Math.random()*colorsName.length-1);}
			onclick= document.getElementByClassName('square').style.color = "Green";
		if (printColorName=="Purple"){
			refresh();
		}
	} */
function random(){
	var Color;
	var colorsName =["red","blue","purple","green"];
	var printColorName = colorsName[Math.floor(Math.random()*colorsName.length)];
	console.log("Yo random is working");
	//validation(printColorName);
	changeText(printColorName);
}
	

function changeText(printColorName){
	//change text
	document.getElementById("question").innerHTML = printColorName;
	// change colors
	var Color;
	switch (printColorName){
	case printColorName == "red":
			Color = red;
	case printColorName == "blue":
			Color = blue;
	case printColorName == "purple":
			Color = purple;
	case printColorName == "green":
			Color = green;
	default:
			break;
	}
	document.getElementById("question").style.color = printColorName;
	console.log("Yo changeText is working");
}
function check(clicked_id){
	//var clickedOn = clicked_id;
	var GEBIid = document.getElementById(clicked_id);
	var GEBIq = document.getElementById("question");
	console.log("THE IF STATEMENT TO GET IT TO WORK IS WORKING");
	if (GEBIid.style.backgroundColor==GEBIq.style.color){
		//window.location.reload();
		random();
	}
}