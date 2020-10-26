'use strict';

console.log('25 setTimeout()を使ってみよう');

{
  let i = 0;
  
  function showTime() {
    console.log(new Date());
    const timeoutId = setTimeout(showTime, 1000);
    i++;
    if (i > 5) {
      clearInterval(timeoutId);
    }
  }

  showTime();
}
