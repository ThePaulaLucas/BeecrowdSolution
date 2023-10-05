var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var dist = parseInt(lines.shift());
var comb = parseFloat(lines.shift());

var consumoMedio = dist / comb;

console.log(consumoMedio.toFixed(3) + ' km/l');
