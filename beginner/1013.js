var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var line = lines.shift().split(' ');
var a = parseInt(line[0]);
var b = parseInt(line[1]);
var c = parseInt(line[2]);

function maiorAB(a, b){
    return (a + b + Math.abs(a-b)) / 2;
}

var maior = maiorAB(a, b);
maior = maiorAB(maior, c);

console.log(maior + ' eh o maior');
