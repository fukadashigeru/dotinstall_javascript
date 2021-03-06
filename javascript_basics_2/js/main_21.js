'use strict';

console.log('21 現在日時を扱ってみよう');

{
  const date = new Date();

  console.log(date);
  console.log(date.getFullYear());
  console.log(date.getMonth());
  console.log(date.getDate());
  console.log(date.getDay()); //0 - 6 (Sum:0, Mon:1, ...)
  console.log(date.getHours());
  console.log(date.getMinutes());
  console.log(date.getSeconds());
  console.log(date.getMilliseconds());
  
  console.log(`${date.getMonth() + 1} 月 ${date.getDate()} 日`);
}
