const list=document.getElementById("list");
let array = [];
let holders = ["Pasta","Broccoli","Milk","Coca-Cola","Cereals","Cookies","Water"];

function add(){
	let randNum=Math.floor(Math.random()*holders.length);
	
	let uInput=document.getElementById("usrInput");
	if(uInput.value==""){
		window.alert("You have to write something to add!!");
	}else{
		array.push(uInput.value);
		console.log(array);
		uInput.value="";
		uInput.placeholder="Es. "+holders[randNum];
		for( i=array.length-1;i<array.length;i++){	
			let li = document.createElement('li');
			li.innerText = array[i];
			list.appendChild(li);
		}	
	}
}
    
function sub(){
	if(array==""){
		window.alert("You have nothing to remove!");
        }
	let uInput=document.getElementById("usrInput");
        var listItems = list.getElementsByTagName("li");
        array.pop();
	var last=listItems[listItems.length-1];
    	list.removeChild(last);
	}

	
  


