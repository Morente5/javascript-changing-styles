function loadEvents() {
	var reg = document.getElementById('regular');
	reg.addEventListener('click', () => setCSS('regular.css'));
	var min = document.getElementById('minimalist');
	min.addEventListener('click', () => setCSS('minimalist.css'));
}

function setCSS(fileCSS) {
	var linkCSS = document.getElementById('link-css');
	linkCSS.setAttribute('href', fileCSS);
}

window.onload = () => {
	loadEvents();
};