'use strict';

{
  console.log('#20 フォームを送信してみよう');

  document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();

    console.log('submit');
  })
}
