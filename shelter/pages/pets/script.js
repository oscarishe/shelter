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