function saybye(event){

	
	document.getElementById("name").textContent="Result >";
	var k= document.getElementById("name").value;
	var message= "Noting to search as "+ k +" "+":(";
	document.getElementById("contain").textContent=message;


	if(k==="code"){
		var link=document.getElementById("name").value;
		var msg="<a href=code1.html><b><font color=white>Go To Code Arena</font></b></a>";
		document.getElementById("contain").innerHTML= msg;
	}

	else if(k==="Code"){
		var link=document.getElementById("name").value;
		var msg="<a href=code1.html><b><font color=white>Go To Code Arena</font></b></a>";
		document.getElementById("contain").innerHTML= msg;
	}
	else if(k==="html"){
		var link=document.getElementById("name").value;
		var msg="<a href=code1.html><b><font color=white>Go To Code HTML</font></b></a>";
		document.getElementById("contain").innerHTML= msg;
	}
	else if(k==="Html"){
		var link=document.getElementById("name").value;
		var msg="<a href=code1.html><b><font color=white>Go To Code HTML</font></b></a>";
		document.getElementById("contain").innerHTML= msg;
	}
	else if(k==="css"){
		var link=document.getElementById("name").value;
		var msg="<a href=code1.html><b><font color=white>Go To Code CSS</font></b></a>";
		document.getElementById("contain").innerHTML= msg;
	}
	else if(k==="Css"){
		var link=document.getElementById("name").value;
		var msg="<a href=code1.html><b><font color=white>Go To Code CSS</font></b></a>";
		document.getElementById("contain").innerHTML= msg;
	}

	else if(k==="c"){
		var link=document.getElementById("name").value;
		var msg="<a href=code1.html><b><font color=white>Go To Code C</font></b></a>";
		document.getElementById("contain").innerHTML= msg;
	}
	else if(k==="C"){
		var link=document.getElementById("name").value;
		var msg="<a href=code1.html><b><font color=white>Go To Code C</font></b></a>";
		document.getElementById("contain").innerHTML= msg;
	}

	else if(k==="python"){
		var link=document.getElementById("name").value;
		var msg="<a href=code1.html><b><font color=white>Go To Code Python</font></b></a>";
		document.getElementById("contain").innerHTML= msg;
	}
	else if(k==="Python"){
		var link=document.getElementById("name").value;
		var msg="<a href=code1.html><b><font color=white>Go To Code Python</font></b></a>";
		document.getElementById("contain").innerHTML= msg;
	}
	else if(k==="photo"){
		var link=document.getElementById("name").value;
		var msg="<a href=code.html><b><font color=white>Go To Spleash</font></b></a>";
		document.getElementById("contain").innerHTML= msg;
	}
	else if(k==="food photo"){
		var link=document.getElementById("name").value;
		var msg="<a href=code.html><b><font color=white>Go To Spleash(food)</font></b></a>";
		document.getElementById("contain").innerHTML= msg;
	}
	else if(k==="football"){
		var link=document.getElementById("name").value;
		var msg="<a href=code.html><b><font color=white>Go To Spleash(football)</font></b></a>";
		document.getElementById("contain").innerHTML= msg;
	}

	else if(k==="contain"){
		var link=document.getElementById("name").value;
		var msg="<a href=photo.html><b><font color=white>Go To Contain</font></b></a>";
		document.getElementById("contain").innerHTML= msg;
	}
}

