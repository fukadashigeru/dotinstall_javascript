'use strict';

// {
//   console.log('#05 addEventListener()を使ってみよう');

//   document.querySelector('button').addEventListener('click', () => {
//     document.getElementById('target').textContent = 'Changed';
//   });
// }

// {
//   console.log('#08 classListを使ってみよう');

//   document.querySelector('button').addEventListener('click', () => {
//     const targetNode = document.getElementById('target');
//     targetNode.classList.toggle('my-color');
//   })
// }

{
  console.log('#09 カスタムデータ属性を扱ってみよう');

  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target');

    targetNode.textContent = targetNode.dataset.translation;
  })
}
