/*
document.addEventListener("DOMContentLoaded",()=>{
	let xhttp=new XMLHttpRequest();
	xhttp.onreadystatechange=function(){
		if(xhttp.status===200&&xhttp.readyState===4){
			let array=JSON.parse(xhttp.responseText);
			//console.log(array);
			let results=array.results;
			pokeList(results);
		}
	}
	xhttp.open("GET","https://pokeapi.co/api/v2/pokemon?limit=10&offset=2",true);
	xhttp.send();
});
*/

function getPokemon(){
	let name=document.getElementById("search").value;
	let xhttp=new XMLHttpRequest();
	xhttp.onreadystatechange=function(){
		if(xhttp.status===200&&xhttp.readyState===4){
			let array=JSON.parse(xhttp.responseText);
			console.log(array);
			pokeList(array);
		}
	}	
	if(name!=""){
		xhttp.open("GET","https://pokeapi.co/api/v2/pokemon/"+name.toLowerCase(),true);
		xhttp.send();
	}else{
		window.alert("Write a pokemon name!");
	}
}

function pokeList(array){
	let table=document.getElementById("table");
	let name=array.name;
	let height=array.height;
	let types=array.types;
	//console.log(type);
	console.log(name);
	let row=table.insertRow(-1);
	let cell1=row.insertCell(0);

	cell1.innerHTML=name;
	cell1.style.textTransform="capitalize";
			
	let cell2=row.insertCell(1);
	for(i=0;i<types.length;i++){
		cell2.innerHTML+=types[i].type.name+" ";
		cell2.style.textTransform="capitalize";
	}
	
	let cell3=row.insertCell(2);
	cell3.innerHTML=height+"0 cm";
	
	let cell4=row.insertCell(3);
	cell4.innerHTML="<img src='"+array.sprites.front_default+"'>";



}

