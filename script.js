function loadEvents() {
	var reg = document.getElementById('regular');
	var min = document.getElementById('minimalist');

	reg.addEventListener('click', () => setCSS('regular.css'));
	min.addEventListener('click', () => setCSS('minimalist.css'));

	var leftAlign = document.getElementById('left-align');
	var rightAlign = document.getElementById('right-align');
	var justifyAlign = document.getElementById('justify-align');

	leftAlign.addEventListener('click', () => setAlign('left'));
	rightAlign.addEventListener('click', () => setAlign('right'));
	justifyAlign.addEventListener('click', () => setAlign('justify'));

	var fontDec = document.getElementById('font-dec');
	var fontDef = document.getElementById('font');
	var fontInc = document.getElementById('font-inc');

	fontDec.addEventListener('click', () => setFontSize(-1));
	fontDef.addEventListener('click', () => setFontSize(0));
	fontInc.addEventListener('click', () => setFontSize(1));
}

function setCSS(fileCSS) {
	var linkCSS = document.getElementById('link-css');
	linkCSS.setAttribute('href', fileCSS);
}

function setAlign(align) {
	var paragraphs = document.getElementsByTagName('P');
	for (let i = 0; i < paragraphs.length; i++) {
		paragraphs[i].style.textAlign = align;
	}
}

function setFontSize(size) {
	var body = document.body;
	var fSize = body.style.fontSize;
	
	if (size === 0 || !fSize) {
		setDefaultFontSize();
	}
	if (size === -1 || size === 1) {
		body.style.fontSize = (parseFloat(fSize) + 0.1 * size) + 'em';
		console.log(fSize);
	}
}

function setDefaultFontSize() {
	var body = document.body;
	var fSize = body.style.fontSize;

	body.style.fontSize = '1em';
}

window.onload = loadEvents;
