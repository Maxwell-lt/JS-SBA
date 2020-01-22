/*
 * Places header at top of the page
 * 
 * Author:	Maxwell L-T
 * Date:	2019-12-10
 */

document.getElementById("navbar").outerHTML = '<nav class="navbar navbar-expand-lg navbar-dark bg-dark">'+
	'<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">'+
    	'<span class="navbar-toggler-icon"></span>'+
  	'</button>'+
	'<a class="navbar-brand" href="./index.html">Home</a>'+
	'<div class="collapse navbar-collapse" id="navbarNavDropdown">'+
	'<div class="navbar-nav">'+
	'<a class="nav-item nav-link" href="./graph.html">Graph Generator</a>'+
	'<a class="nav-item nav-link" href="./calculator.html">Scientific Calculator</a>'+
	'<a class="nav-item nav-link" href="./conversion.html">Unit Conversion</a>'+
	'</div>'+
	'</div>'+
	'</nav>';

document.getElementById();
