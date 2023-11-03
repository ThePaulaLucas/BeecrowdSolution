var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var total = parseFloat(lines.shift());

console.log('NOTAS:');

console.log(parseInt(total / 100) + ' nota(s) de R$ 100.00');
total = total % 100;
console.log(parseInt(total/50) + ' nota(s) de R$ 50.00');
total %= 50;
console.log(parseInt(total/20) + ' nota(s) de R$ 20.00');
total %= 20;
console.log(parseInt(total/10) + ' nota(s) de R$ 10.00');
total %= 10;
console.log(parseInt(total/5) + ' nota(s) de R$ 5.00');
total %= 5;
console.log(parseInt(total/2) + ' nota(s) de R$ 2.00');
total %= 2;

console.log('MOEDAS:')
console.log(parseInt(total/1) + ' moeda(s) de R$ 1.00');
total %= 1;
total *= 100;
console.log(parseInt(total/50) + ' moeda(s) de R$ 0.50');
total %= 50;
console.log(parseInt(total/25) + ' moeda(s) de R$ 0.25');
total %= 25;
console.log(parseInt(total/10) + ' moeda(s) de R$ 0.10');
total %= 10;
console.log(parseInt(total/5) + ' moeda(s) de R$ 0.05');
total %= 5;
total += 0.00001;
console.log(parseInt(total) + ' moeda(s) de R$ 0.01');
