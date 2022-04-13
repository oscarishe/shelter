const minus = () => {
	let currentPage = document.getElementById('paginator').innerText;
	currentPage--;
	document.getElementById('paginator').innerHTML = currentPage;
	document.getElementById('button_plus').disabled=false;
	document.getElementById('button_max').disabled=false;
	if(currentPage==1) {
	document.getElementById('button_minus').disabled=true;
	document.getElementById('button_min').disabled=true;	
	}	
	
}

const plus = () => {
	let currentPage = document.getElementById('paginator').innerText;
	if(currentPage>=1) {
		document.getElementById('button_minus').disabled=false;
		document.getElementById('button_min').disabled=false;	
	}
	currentPage++;
	document.getElementById('paginator').innerHTML = currentPage;
}
const minPage = () => {
	document.getElementById('paginator').innerHTML = 1;
	document.getElementById('button_minus').disabled=true;
	document.getElementById('button_min').disabled=true;
	document.getElementById('button_plus').disabled=false;
	document.getElementById('button_max').disabled=false;
}
const maxPage = () => {
	document.getElementById('paginator').innerHTML = 99;
	document.getElementById('button_plus').disabled=true;
	document.getElementById('button_max').disabled=true;
	document.getElementById('button_minus').disabled=false;
	document.getElementById('button_min').disabled=false;	
}
const closeBurgerMenu =() => {
	document.getElementsByClassName('hidden_menu')[0].style.display="none";
	document.getElementsByClassName('logo')[0].style.visibility="visible"
	burger.className="burger_hidden";
}
window.onload = function() {
var burger = document.getElementById('burger');
burger.addEventListener("click", function(){
  	if(burger.className=="burger_hidden") {
  		document.getElementsByClassName('hidden_menu')[0].style.display="block";
  		document.getElementsByClassName('logo')[0].style.visibility="hidden";
  		burger.className="burger_active";
  	}
  	else if (burger.className=="burger_active") {
  		document.getElementsByClassName('hidden_menu')[0].style.display="none";
  		document.getElementsByClassName('logo')[0].style.visibility="visible"
  		burger.className="burger_hidden";
  	}

});
}