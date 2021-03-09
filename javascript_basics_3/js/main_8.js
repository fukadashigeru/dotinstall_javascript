'use strict';

{
  console.log('#21 イベントの伝播を理解しよう');

  document.querySelector('ul').addEventListener('click', e => {
    if (e.target.nodeName === 'LI') {
      e.target.classList.toggle('done');
    }
  })
}
