var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var line1 = lines.shift().split(' ');
var cod1 = parseInt(line1[0]);
var num1 = parseInt(line1[1]);
var val1 = parseFloat(line1[2]);

var line2 = lines.shift().split(' ');
var cod2 = parseInt(line2[0]);
var num2 = parseInt(line2[1]);
var val2 = parseFloat(line2[2]);

var total = (num1 * val1) + (num2 * val2);

console.log('VALOR A PAGAR: R$ ' + total.toFixed(2));
