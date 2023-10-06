var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var temp = parseInt(lines.shift());

console.log(temp*2 + ' minutos');
