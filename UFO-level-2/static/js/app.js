// from data.js
var tableData = data;
var tbody = d3.select('tbody');
var button = d3.select('button');
var inputs = d3.selectAll('input');

// YOUR CODE HERE!
populateTable(tableData);
inputs.on('change',handleChange);
button.on('click',handleClick);

function populateTable(data) {
    tbody.html('');
    data.forEach(obj => {
        var row = tbody.append('tr');

        Object.values(obj).forEach(val => {
            var cell = row.append('td');
            cell.text(val);
        });
    });
};

function handleClick() {
    inputs.property('value','');
    tableData = data;    
    populateTable(tableData);
};