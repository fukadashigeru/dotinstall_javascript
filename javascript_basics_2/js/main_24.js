'use strict';

console.log('24 setInterval()を使ってみよう');

{
  let i = 0;
  
  function showTime() {
    console.log(new Date());
    i++;
    if (i > 4) {
      clearInterval(intervalId);
    }
  }

  const intervalId = setInterval(showTime, 1000);
}
