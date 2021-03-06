'use strict';

console.log('11 オブジェクトを作ってみよう/12 プロパティを操作してみよう');

{
  const point = {
    x: 10,
    y: 20,
  };
  console.log(point);

  console.log(' 変更処理');
  point.x = 100;
  point['y'] = 200;
  console.log(point);

  console.log(' 追加処理');
  point.z = 300;
  point['w'] = 400;
  console.log(point);

  console.log(' 削除処理');
  delete point.y;
  delete point['w'];
  console.log(point);
}
