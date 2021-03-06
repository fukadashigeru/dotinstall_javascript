'use strict';

console.log('22 特定の日時を扱ってみよう');

{
  const date = new Date(2019, 10); // 2019/11/1 00:00:00
  console.log(date);
  date.setHours(10, 20, 30); // 2019/11/1 10:20:30
  console.log(date);
  date.setDate(31); // 2019/12/1 10:20:30
  console.log(date);
  date.setDate(date.getDate() + 3); // 2019/12/4 10:20:30
  console.log(date);
}
