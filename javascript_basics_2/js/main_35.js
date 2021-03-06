'use strict';

console.log('35 クラスを継承してみよう');

{
  class Post { //親クラス
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
  class SponsoredPost extends Post { //子クラス
    constructor(text, sponser) {
      super(text);
      this.sponser = sponser
    }
    show(){
      super.show();
      console.log(`.....sponsored by ${this.sponser}`);
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

