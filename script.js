var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("randomcolor");


// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(random);

// Function which applies a color gradient to the background based on 2 color values
//  + method to add the content  of body.style.background.
function setGradient () {
	body.style.background = "linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";
	css.textContent = body.style.background + ";";
}

// Function to calculate a random hex code for each color1 and color2 value. 
// A color has a # sign and sixdigits so the min can be #100000 and max #999999.
// Below expressions mean: for var add a # + a integer number (floor) of 100000
// + Math.random ( which gives a decimal number between 0 and 1) multiplied by 899999.
// Then we assign the random numbers to each color, define what background color is made of and
// call the function setGradient. The colors which have letters or are below 100000 are ignored.
function randomcolor() {
// 
var randomnumber1 = "#" + Math.floor(100000 + Math.random() * 899999);
var randomnumber2 = "#" + Math.floor(100000 + Math.random() * 899999);

color1.value = randomnumber1;
color2.value = randomnumber2;

body.style.background = "linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

setGradient();

}

// The event for the colors is the selection of any color by clicking on the buttons.
// The selection is the input.
color1.addEventListener("input", setGradient);	
color2.addEventListener("input", setGradient);

// Window is the webpage screen and the first object to be loaded. 
// So by saying run setGradient when you load the page you are making the background color
// to be equal to the input value of the colors. This event runs first and ignores the
// background color red yellow in the body element of the CSS file.
window.addEventListener("load", setGradient);
// Run function when click on the Random color button identified as var random (object).
random.addEventListener("click", randomcolor);