'use strict';

console.log('33 静的メソッドを使ってみよう');

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
    // 静的メソッド
    // thisは使えない
    static showInfo() {
      console.log('Post class version 1.0');
    }
  }

  const posts = [
    new Post('Javascriptの勉強中・・・'),
    new Post('プログラミング楽しい！')
  ];

  Post.showInfo();
}

