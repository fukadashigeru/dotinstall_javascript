'use strict';

console.log('29 メソッドを使ってみよう');

{
  const posts = [
    {
      text: 'Javascript勉強中・・・',
      likeCount: 0,
      // show: function() {
      //   console.log(`${this.text} - ${this.likeCount}いいね`);
      // }
      show() {
        console.log(`${this.text} - ${this.likeCount}いいね`);
      }
    },
    {
      text: 'プログラミング楽しい！',
      likeCount: 0,
    },
  ];

  posts[0].show();
}

