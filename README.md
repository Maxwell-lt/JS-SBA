# Math Tools

## Description
Simple client-side only website that provides mathematical tools such as unit conversion, graphing functions, and a scientific calculator.

## Technical Specifications
Packaged as an Eclipse project, runs on Tomcat v9.

The graph generator uses Plotly to create graphs.

The calculator is a table with an event listener. Most table cells are copied into the display `div` when clicked, though a few have different output than their face value. The `=` button simply runs `eval()` on the display `div`, replacing its text with the result or an error.

The unit converter has four hard-coded conversion factors for each of the six input units. When the submit button is pressed, a `switch...case` block populates the table based on the selected input unit.
