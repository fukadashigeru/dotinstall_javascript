'use strict';

console.log('14 Object.keys()を使ってみよう');

{
  console.log(' Object.keys()');
  const number = {
    a: 100,
    b: 200,
    c: 300,
    d: 400,
  };

  const keys = Object.keys(number);
  keys.forEach(key => {
    console.log(`Key: ${key} Value: ${number[key]}`);
  });

  console.log(' 配列とオブジェクトの組み合わせ');
  const numbers = [
    {x: 10, y: 20},
    {x: 30, y: 40},
    {x: 50, y: 60},
    {x: 70, y: 80},
  ];

  console.log(numbers[1].x);
}
