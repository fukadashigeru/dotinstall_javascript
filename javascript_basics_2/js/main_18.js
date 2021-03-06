'use strict';

console.log('18 join()､split()を使ってみよう');

{
  console.log('-------------------------');
  console.log('join()について');
  const day = [2019, 11, 14];
  console.log(day);
  console.log(day.join('/'));

  console.log('-------------------------');
  console.log('split()について');
  const t = '17:08:24';
  console.log(t);
  console.log(t.split(':'));

  const [hour, minute, second] = t.split(':');
  console.log(hour);
  console.log(minute);
  console.log(second);
}
