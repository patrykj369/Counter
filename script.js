let num = document.getElementById("valueDisplay").innerHTML;

function plus(){
	let b = num++;
	b=b+1;
	let nowy = document.createElement("p");
	nowy.id = "valueDisplay";
	nowy.innerHTML = b;
	
	let d = document.getElementById("valueDisplay");
	d.remove();
	let c = document.getElementById("valueDiv");
	c.appendChild(nowy);;
}

function minus(){
	let b = num--;
	b=b-1;
	let nowy = document.createElement("p");
	nowy.id = "valueDisplay";
	nowy.innerHTML = b;
	
	let d = document.getElementById("valueDisplay");
	d.remove();
	let c = document.getElementById("valueDiv");
	c.appendChild(nowy);;
}
