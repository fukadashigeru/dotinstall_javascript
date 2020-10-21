'use strict';

console.log('17 文字列を操作してみよう');

{
  const str = 'hello';

  console.log('-------------------------');
  console.log('文字列の長さ');
  console.log(str.length);

  console.log('-------------------------');
  console.log('一部取得');
  console.log(str.substring(2, 4));

  console.log('-------------------------');
  console.log('配列みたいに使えるが、配列みたいにforEachとかは使えない');
  console.log(str[1]);

  console.log('-------------------------');
  console.log('forは使える');
  for (let i = 0; i < str.length; i++) {
    console.log(`String ${i}: ${str[i]}`);
  }

  console.log('-------------------------');
  console.log('forEachとかはは使えない');
  str.forEach((s, index) => {
    console.log(`Point ${index} : ${s}`);
  });
}
