// your code here
let name = document.getElementById('name');
let year = document.getElementById('year');
let h3 = document.getElementById('url');
let btn = document.getElementById('button');

btn.addEventListener('click',(event)=>{
	event.preventDefault();
	h3.innertext = "";
	if(name.value && year.value){
	h3.innerText = `https://localhost:8080/?name=${name.value}&year=${year.value}`
	}
	else if(name.value){
		h3.innerText = `https://localhost:8080/?name=${name.value}`;
	}
	else if(year.value){
		h3.innerText = `https://localhost:8080/?year=${year.value}`;
	}
	else{
		h3.innerText = `https://localhost:8080/`;
	}
})