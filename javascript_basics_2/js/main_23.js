'use strict';

console.log('23 alert()､confirm()を使ってみよう');

{
  alert('hello');

  const answer = confirm('削除しますか？');
  if (answer) {
    console.log('削除しました');
  } else {
    console.log('キャンセルしました');
  }
}
