// from data.js
var tableData = data;
var tbody = d3.select('tbody');
var button = d3.select('button');
var inputs = d3.selectAll('input');

// YOUR CODE HERE!
populateTable(tableData);
inputs.on('change',handleChange);
button.on('click',handleClick);