'use strict';

console.log('15 変数を代入してみよう');

{
  console.log(' 単純な代入');
  let a = 1;
  let b = a;

  a = 5;
  console.log(a); // 5
  console.log(b); // 1

  console.log(' 複雑な代入');
  let c = [1, 2];
  let d = c;
  c[0] = 5;
  console.log(c); // [5, 2]
  console.log(d); // [1, 2] となりそうだが、[5, 2]となる
}

console.log('#16 変数の挙動を理解しよう');

{
  console.log(' スプレッド演算子で回避');
  let c = [1, 2];
  let d = [...c];
  c[0] = 5;
  console.log(c); // [5, 2]
  console.log(d); // [1, 2]
}
