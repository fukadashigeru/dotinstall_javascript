'use strict';

console.log('27 例外処理を使ってみよう');

{
  const name = 5;

  try {
    console.log(name.toUpperCase());
  } catch (e) {
    console.log(e);
  }

  console.log('Finish!');
}
