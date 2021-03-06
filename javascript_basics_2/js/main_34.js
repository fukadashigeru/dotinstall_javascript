'use strict';

console.log('34 クラスを拡張したい場合を考えよう');

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
  class SponsoredPost {
    constructor(text, sponser) {
      this.text = text;
      this.likeCount = 0;
      this.sponser = sponser
    }
    show(){
      console.log(`${this.text} - ${this.likeCount} likes`);
      console.log(`.....sponsored by ${this.sponser}`);
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
    new Post('プログラミング楽しい！'),
    new SponsoredPost('3分動画でマスターしよう', 'dotinstall'),
  ];

  posts[2].show();
  posts[2].like();
}

