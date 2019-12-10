/*
 * Draws a graph in graph.html based on user input
 * 
 * Author:	Maxwell L-T
 * Date:	2019-12-10
 */

var element = document.getElementById("graphForm");
element.addEventListener("submit", drawGraph, true);

function drawGraph(e) {
	e.preventDefault();
	if (!e.target[0].value || !e.target[1].value || !e.target[2].value) return;
	
	let A = Number(e.target[0].value);
	let B = Number(e.target[1].value);
	let C = Number(e.target[2].value);
	let points = []
	for (var x = -10; x <= 10; x++) {
		let y = (A * x * x) + (B * x) + C;
		points.push([-(x*5 - 250),-(y*5 - 250)]);
	}
	let polyline = points.map(x => x.join(",")).join(" ");
	console.log(polyline);
	document.getElementById("graphline").setAttribute("points", polyline);
}