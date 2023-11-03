var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var segTotal = parseInt(lines.shift());

var hrs = parseInt(segTotal / 3600);

segTotal %= 3600;

var min = parseInt(segTotal / 60);

segTotal %= 60;

console.log(hrs+':'+min+':'+segTotal);
