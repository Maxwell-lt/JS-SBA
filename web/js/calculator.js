/*
 * Turns a table of "calculator buttons" into a working calculator
 * 
 * Author:	Maxwell L-T
 * Date:	2019-12-10
 */

var buttons = document.getElementById("calculator-buttons");
var display = document.getElementById("calculator-display");

buttons.addEventListener("click", processButtonPress, true);

function processButtonPress(e) {
	e.preventDefault();
	let buttonValue = e.target.textContent;
	console.log(buttonValue);
	var outputText = "";
	switch (buttonValue) {
	case "xy":
		outputText = "**";
		break;
	case "÷":
		outputText = "/";
		break;
	case "×":
		outputText = "*";
		break;
	case "sin":
		outputText = "Math.sin(";
		break;
	case "cos":
		outputText = "Math.cos(";
		break;
	case "tan":
		outputText = "Math.tan(";
		break;
	case "√":
		outputText = "Math.sqrt(";
		break;
	case "=":
		evaluateDisplay();
		return;
	case "AC":
		clearDisplay();
		return;
	default:
		outputText = buttonValue;
	}
	display.innerHTML += outputText;
}

function evaluateDisplay() {
	try {
		console.log(display.textContent);
		var output = eval(display.textContent);
		display.innerHTML = output;
	} catch(e) {
		display.innerHTML = "Error"
	}
}

function clearDisplay() {
	display.innerHTML = "\xa0";
}