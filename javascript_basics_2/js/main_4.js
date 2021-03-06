'use strict';

console.log('04 配列の要素を変更してみよう');

{
  const points = [85, 93, 60];
  points.push(33, 44);

  console.log(points);
}

{
  const points = [85, 93, 60];
  points.shift();

  console.log(points);
}
