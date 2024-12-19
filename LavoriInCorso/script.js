document.addEventListener("DOMContentLoaded",()=>{
	console.log("DOM Loaded");
	let xhttp=new XMLHttpRequest();
	let limit=20;
	let inputUser=document.getElementById("numLimit");
	inputUser.value=20;
	let button=document.getElementById("bttn");
	document.getElementById("limitDisplayed").innerHTML=limit;
	xhttp.onreadystatechange=function (){
		if(xhttp.status==200 && xhttp.readyState==4){
			let array=JSON.parse(xhttp.responseText);
			let results=array.results;
			console.log(results);
			createTable(results);
		}
	}
	xhttp.open("GET","https://opendata.comune.bologna.it/api/explore/v2.1/catalog/datasets/lavori-pubblici/records?limit="+limit,true);
	xhttp.send();
});

function createTable(array){
	let table=document.getElementById("tbody");
	for(i=0;i<array.length;i++){			
		let row=table.insertRow(-1);
		
		let cell1=row.insertCell(0);
		cell1.innerHTML=array[i].id;
		
		let cell2=row.insertCell(1);
		cell2.innerHTML=array[i].address;
		
		let cell3=row.insertCell(2);
		cell3.innerHTML=array[i].status;
		
		let cell4=row.insertCell(3);
		cell4.innerHTML=array[i].description;
	}
}
