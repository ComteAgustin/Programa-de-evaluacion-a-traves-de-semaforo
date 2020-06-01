function apagarLuzRoja() {
	document.getElementById('luzRoja').style.background = "#bbbbbb";
}

function apagarLuzAmarilla() {
	document.getElementById('luzAmarilla').style.background = "#bbbbbb";
}

function apagarLuzVerde() {
	document.getElementById('luzVerde').style.background = "#bbbbbb";
}

function prenderLuzRoja() {
	document.getElementById('luzRoja').style.background = "rgb(239, 35, 33)";
	setInterval(apagarLuzRoja, 3000); 
}

function prenderLuzAmarilla() {
	document.getElementById('luzAmarilla').style.background = "rgb(234, 183, 55)";
	setInterval(apagarLuzAmarilla, 3000);
}

function prenderLuzVerde() {
	var x = document.getElementById('luzVerde').style.background = "rgb(89, 216, 92)";
	setInterval(apagarLuzVerde, 3000);
}

