let colors = ["red", "yellow", "green"];
let color = 1;
let button = document.getElementById("button");
button.addEventListener("click", changeColor);
function changeColor() {
	button.style.backgroundColor = colors[color];
	color += 1;
	resetInterval();
	if (color > 2) {
		color = 0;
	}
}

let time = setInterval(changeColor, 10000);
function resetInterval() {
	clearInterval(time);
	time = setInterval(changeColor, 10000);
}
