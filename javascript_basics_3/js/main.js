'use strict';

{
  console.log('#05 addEventListener()を使ってみよう');

  document.querySelector('button').addEventListener('click', () => {
    document.getElementById('target').textContent = 'Changed';
  });
}

