'use strict';

console.log('06 スプレッド構文を使ってみよう');

{
  const otherPoints = [50, 60];
  const points = [10, 20, 30, 40, ...otherPoints];
  console.log(points);

  function sum(a, b) {
    console.log(a + b);
  }

  // sum(otherPoints[0], otherPoints[1]);
  sum(...otherPoints);
}
