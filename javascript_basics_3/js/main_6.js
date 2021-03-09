'use strict';

{
  console.log('#19 フォームで使われるイベントを見てみよう');
  const text = document.querySelector('textarea');

  text.addEventListener('change', () => {
    console.log('change');
  })
}
