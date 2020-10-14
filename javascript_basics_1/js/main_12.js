'use strict';

console.log(typeof 'hello'); // string
console.log(typeof 5); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object

console.log('5' * 3); // 15
console.log('5' - 3); // 2

console.log('5' + 3); // 53
console.log(parseInt('5', 10) * 3); // 15
console.log(parseInt('hello', 10)); // NaN

console.log(Boolean(0)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('')); // false
console.log(Boolean(false)); // false
console.log(Boolean('hello')); // true
