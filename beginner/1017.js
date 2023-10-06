var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var tempo = parseInt(lines.shift());
var velMedia = parseInt(lines.shift());

var km = tempo * velMedia;
var L = km / 12.0;

console.log(L.toFixed(3));
