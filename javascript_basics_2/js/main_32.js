'use strict';

console.log('32 カプセル化を理解しよう');

{
  class Post {
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
      

    }
    show(){
      console.log(`${this.text} - ${this.likeCount} likes`);
    }
    like(){
      this.likeCount++;
      this.show();
    }
  }

  const posts = [
    new Post('Javascriptの勉強中・・・'),
    new Post('プログラミング楽しい！')
  ];

  posts[0].like();
  posts[0].like();
  posts[0].like();
}

