let button = document.getElementById("button");
let colors = ["red", "yellow", "green"];
let color = 0;

function changeColor() {
	button.style.backgroundColor = colors[color];
	color = (color + 1) % colors.length;
}

changeColor();

setInterval(changeColor, 10000);
