'use strict';

console.log('07 分割代入を使ってみよう');

{
  const points = [10, 20, 30, 40, 50, 60, 70];
  const [a, b, c, d, e] = points;

  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);

  console.log('---...を使う場合---');
  const [f, g, h, ...others] = points;
  console.log(f);
  console.log(g);
  console.log(h);
  console.log(others);
}
