'use strict';

console.log('08 forEach()を使ってみよう');

{
  const points = [10, 20, 30, 40, 50, 60, 70];

  points.forEach((point, index) => {
    console.log(`Point ${index} : ${point}`);
  });
}
