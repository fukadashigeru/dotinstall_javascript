'use strict';

// {
//   console.log('#05 addEventListener()を使ってみよう');

//   document.querySelector('button').addEventListener('click', () => {
//     document.getElementById('target').textContent = 'Changed';
//   });
// }

{
  console.log('#08 classListを使ってみよう');

  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target');
    targetNode.classList.toggle('my-color');
  })
}
