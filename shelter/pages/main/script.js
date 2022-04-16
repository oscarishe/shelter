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