'use strict';

console.log('22 returnで値を返してみよう');

function sum(a, b, c) {
  // console.log(a + b + c);
  return a + b + c;
  console.log(a + b + c);
}

const total = sum(1, 2, 3) + sum(3, 4, 5);
console.log(total);


console.log('23 関数式を使ってみよう');

const sum_alt = function (a, b, c) {
  return a + b + c;
}

const total_alt = sum_alt(1, 2, 3) + sum_alt(3, 4, 5);
console.log(total_alt);

