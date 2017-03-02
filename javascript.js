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
var printColorName;
function validation(printColorName){
	var Color;
	switch (printColorsName){
	case printColorName == "red":
			Color = red;
	case printColorName == "blue":
			Color = blue;
	case printColorName == "purple":
			Color = #purple;
	case printColorName == "green":
			Color = green;
	default:
			break;
	return Color;
	}
}	
function random(){
	var colorsName =["Red","Blue","Purple","Green"];
	var printColorName = colorsName[Math.round(Math.random()*colorsName.length-1)];
	return printColorName;
}
	
function valid(printColorName,Color){
	document.getElementById("question").innerHTML = printColorName;
	document.getElementById("question").style.color = Color;
}
function check(clicked_id){
	var Valid = false;
	var clickedOn = clicked_id;
	var GEBIid = document.getElementById(clicked_id);
	var GEBIq = document.getElementById("question");
	if (GEBIid.style.borderColor==GEBIq.style.color){
		window.location.reload();
		random();
		validation(printColorName);
		valid(printColorName,Color);
	}
}
