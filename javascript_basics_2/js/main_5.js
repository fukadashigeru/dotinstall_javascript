'use strict';

console.log('05 splice()で配列を変更してみよう');

{
  const points = [10, 20, 30, 40];
  points.splice(1, 1, 23, 26);

  console.log(points);
}
