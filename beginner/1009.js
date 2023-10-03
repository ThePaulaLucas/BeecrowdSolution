var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var name = String(lines.shift());
var sal = parseInt(lines.shift());
var sales = parseFloat(lines.shift());

var salary = sal + (sales * 0.15);

console.log('TOTAL = R$ ' + salary.toFixed(2));
