'use strict';

console.log('02 配列の要素にアクセスしてみよう');

{
  const points = [85, 93, 60];
  console.log(points);

  points[2] = 65;
  console.log(points);
}

console.log('03 配列とループ処理を組み合わせよう ');

{
  const points = [85, 93, 65];

  for (let i = 0; i < points.length; i++) {
    console.log(`Score ${i}: ${points[i]}`);
  }
}
