/*
 * Reads data from a form, then displays converted units in a table
 * 
 * Author:	Maxwell L-T
 * Date:	2019-12-10
 */

var element = document.getElementById("conversionForm");
element.addEventListener("submit", doConversion, true);

var table = document.getElementById("conversionOutputTable");

function doConversion(e) {
	e.preventDefault();
	if (!e.target[0].value) return;
	
	let inputValue = e.target[0].value;
	if (!inputValue.match(/^\d*\.?\d*$/)) {
		alert("Invalid input");
		return;
	}
	let select = e.target[1];
	var opt;
	for (var i = 0; i < select.options.length; i++) {
		opt = select.options[i];
		if (opt.selected === true) break;
	}
	clearTable();
	let cells = table.getElementsByTagName("td");
	switch (opt.text) {
	case "Pounds":
		cells[0].textContent = "Grams";
		cells[1].textContent = inputValue * 453.6;
		cells[2].textContent = "Kilograms";
		cells[3].textContent = inputValue * 0.4536;
		cells[4].textContent = "Ounces";
		cells[5].textContent = inputValue * 16.0;
		cells[6].textContent = "Tonnes";
		cells[7].textContent = inputValue * 0.0004536;
		break;
	case "Feet":
		cells[0].textContent = "Miles";
		cells[1].textContent = inputValue * 0.0001894;
		cells[2].textContent = "Millimeters";
		cells[3].textContent = inputValue * 304.8;
		cells[4].textContent = "Centimeters";
		cells[5].textContent = inputValue * 30.48;
		cells[6].textContent = "Meters";
		cells[7].textContent = inputValue * 0.3048;
		break;
	case "Gallons":
		cells[0].textContent = "Liters";
		cells[1].textContent = inputValue * 3.785;
		cells[2].textContent = "Cubic Meters";
		cells[3].textContent = inputValue * 0.003785;
		cells[4].textContent = "Pints";
		cells[5].textContent = inputValue * 8.0;
		cells[6].textContent = "Fluid Ounces";
		cells[7].textContent = inputValue * 128.0;
		break;
	case "Kilograms":
		cells[0].textContent = "Grams";
		cells[1].textContent = inputValue * 1000.0;
		cells[2].textContent = "Pounds";
		cells[3].textContent = inputValue * 2.205;
		cells[4].textContent = "Ounces";
		cells[5].textContent = inputValue * 35.27;
		cells[6].textContent = "Tonnes";
		cells[7].textContent = inputValue * 0.001;
		break;
	case "Meters":
		cells[0].textContent = "Miles";
		cells[1].textContent = inputValue * 0.0006214;
		cells[2].textContent = "Feet";
		cells[3].textContent = inputValue * 3.281;
		cells[4].textContent = "Millimeters";
		cells[5].textContent = inputValue * 1000.0;
		cells[6].textContent = "Centimeters";
		cells[7].textContent = inputValue * 100.0;
		break;
	case "Liters":
		cells[0].textContent = "Gallons";
		cells[1].textContent = inputValue * 0.2642;
		cells[2].textContent = "Cubic Meters";
		cells[3].textContent = inputValue * 0.001;
		cells[4].textContent = "Pints";
		cells[5].textContent = inputValue * 2.113;
		cells[6].textContent = "Fluid Ounces";
		cells[7].textContent = inputValue * 33.81;
		break;
	}
}

function clearTable() {
	let cells = table.getElementsByTagName("td");
	for (var i in cells) {
		cells[i].textContent = "\xa0";
	}
}