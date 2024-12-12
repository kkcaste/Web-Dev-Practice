setInterval(showTime,1000);

function showTime(){
	const date=new Date();
	const hour=('0'+date.getHours()).substr(-2);
	const minutes=('0'+date.getMinutes()).substr(-2);
	const seconds=('0'+date.getSeconds()).substr(-2);

	document.getElementById("clock").innerHTML=hour+":"+minutes+":"+seconds;
}
