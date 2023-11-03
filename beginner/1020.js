var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var diasTotal = parseInt(lines.shift());

var ano = parseInt(diasTotal / 365);
diasTotal %= 365;
var mes = parseInt(diasTotal / 30);
diasTotal %= 30;

console.log(ano + ' ano(s)');
console.log(mes + ' mes(es)');
console.log(diasTotal + ' dia(s)');
