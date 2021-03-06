'use strict';

console.log('13 オブジェクトを操作してみよう');

{
  const otherNumbers = {
    c: 30,
    d: 40
  };

  const numbers = {
    a: 10,
    b: 20,
    ...otherNumbers,
  };
  console.log(numbers);
}
