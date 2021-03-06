'use strict';

console.log('20 ランダムな整数値を作ってみよう');

{
  // 0, 1, 2
  // Math.floor(Math.random() * 3);
  // 0, ... , n
  // Math.floor(Math.random() * (n + 1));
  // min, ... , max
  // Math.floor(Math.random() * (max + 1 - min)) + min;

  const min = 5;
  const max = 50;
  for (let i = 0; i < 9; i++) {
    let x = Math.floor(Math.random() * (max + 1 - min)) + min;
    console.log(x);
  }
}
