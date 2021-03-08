'use strict';

{
  console.log('#11 要素の複製､ 挿入をしてみよう');

  document.querySelector('button').addEventListener('click', () => {
    const item0 = document.querySelectorAll('li')[0];
    const copy = item0.cloneNode(true);

    const ul =document.querySelector('ul');
    const item2 = document.querySelectorAll('li')[2];
    ul.insertBefore(copy, item2);
  })
}
