// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

// function setGradient() {
// 	body.style.background = 
	// "linear-gradient(to right, " 
	// + color1.value 
	// + ", " 
	// + color2.value 
	// + ")";

// 	css.textContent = body.style.background + ";";
// }

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);


let h3 = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.getElementById('gradient');

console.log(h3,color1,color2,body);


// body.style.background = "linear-gradient(to right, black , yellow)";

color1.addEventListener('input',setgradient);
color2.addEventListener('input',setgradient);

function setgradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	h3.textContent =  body.style.background + ";"
}