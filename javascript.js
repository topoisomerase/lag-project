<!--https://www.w3schools.com/js/js_intro.asp -->

// the one line functions (aka the way I rename the function so i can better understand what is going on)
	function refresh(){
		window.location.reload();
	}
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
	function validation(){
		var colorsName =["Red","Blue","Purple","Green"];
		var validation;
		var Color;
		var printColorName = colorsName[Math.round(Math.random()*colorsName.length-1)];
		switch (printColorsName){
			case printColorName == "Red":
				Color = red;
			case printColorName == "Blue":
				Color = blue;
			case printColorName == "Purple":
				Color = purple;
			case printColorName == "Green":
				Color = green;
			default:
				break;

			if (Color== purple){
				validation = true;
			}
			else{
				validation = false;
			}

			if (validation==true){
				refresh();
			}
		}
	}
	function returnClickedId(clicked_id){
		//return clicked_id.style.backgroundColor;
	}
	function check(clicked_id){
		var clickedOn = clicked_id;
		var GEBIid = document.getElementById(clicked_id);
		var GEBIq = document.getElementById(question);
		if (GEBIid.style.borderColor=="purple"){
			GEBIq.style.color="purple";
		}
		if (GEBIid.style.borderColor==GEBIq.style.color=="purple"){
			refresh();
		}
	}
	//document.getElementByClassName("triangle").onclick = function() {validation();};

	//document.getElementByClassName("triangle").addEventListener("click", doAThing);

//document.getElementByClassName("triangle")onclick="validation(ifright)";
