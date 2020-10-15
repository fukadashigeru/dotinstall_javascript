'use strict';

console.log('09 map()を使ってみよう');

{
  const numbers = [10, 20, 30, 40, 50, 60];

  // const updatedNumbers = numbers.map((number) => {
  //   return number + 30;
  // });

  const updatedNumbers = numbers.map(number => number + 30);
  console.log(updatedNumbers);
}

console.log('10 filter()を使ってみよう');

{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // const evenNumbers = numbers.filter(number => {
  //   if (number % 2 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // })

  const evenNumbers = numbers.filter(number => number % 2 === 0);

  console.log(evenNumbers);
}
