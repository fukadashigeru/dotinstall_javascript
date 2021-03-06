'use strict';

console.log('19 数値を操作してみよう');

{
  const scores = [10 ,3, 9];

  let sum = 0;

  scores.forEach(score =>{
    sum += score;
  });

  const avg = sum / scores.length;

  console.log(sum);
  console.log(avg);

  console.log(Math.floor(avg)); // 7
  console.log(Math.ceil(avg)); // 8
  console.log(Math.round(avg)); // 7
  console.log(avg.toFixed(3)); // 7.333

  console.log(Math.random()); // 0–1（0以上、1未満）の範囲で浮動小数点の擬似乱数を返す
}
