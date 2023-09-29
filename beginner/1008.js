var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var num = parseInt(lines.shift());
var hrs = parseInt(lines.shift());
var sal = parseFloat(lines.shift());

var salary = hrs * sal;

console.log('NUMBER = ' + num);
console.log('SALARY = U$ ' + salary.toFixed(2));
