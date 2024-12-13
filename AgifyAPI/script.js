function startRequest(){
	let xhttp=new XMLHttpRequest();
	let name=document.getElementById("usrName");
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState === 4 && xhttp.status === 200) {
			let array=JSON.parse(xhttp.responseText);
			console.log(array);
			showName(array);
		}
	};
	xhttp.open("GET", "https://api.agify.io/?name="+name.value, true);
	xhttp.send();
}
function showName(array){
	if(array.age!=null){
		document.getElementById("display").innerHTML="<span class='high'>"+array.name+"</span> is <span class='high'>"+array.age+"</span> years old.";
	}else{
		document.getElementById("display").innerHTML="This name was not found.";
	}
}