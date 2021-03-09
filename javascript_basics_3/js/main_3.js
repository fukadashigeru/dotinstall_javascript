'use strict';

{
  console.log('#13 input要素を操作してみよう');

  document.querySelector('button').addEventListener('click', () => {
    const li = document.createElement('li');
    const text = document.querySelector('input');
    li.textContent = text.value;
    document.querySelector('ul').appendChild(li);

    text.value = "";
    text.focus();
  })
}
