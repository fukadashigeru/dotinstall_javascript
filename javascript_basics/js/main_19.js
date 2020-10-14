'use strict';

console.log('17 forを使ったループ処理をしよう');

for (let i = 1; i <= 10; i++) {
  console.log(`hello ${i}`);
}

console.log('18 whileを使ったループ処理をしよう:while');

let hp_1 = 100;

while (hp_1 > 0) {
  console.log(`${hp_1} HP left!`);
  hp_1-= 15;
}

console.log('18 whileを使ったループ処理をしよう:do while');

let hp_2 = -50;

do {
  console.log(`${hp_2} HP left!`);
  hp_2-= 15;
} while (hp_2 > 0)

console.log('19 continue､breakを使ってみよう:continue');

for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}

console.log('19 continue､breakを使ってみよう:break');

for (let i = 1; i <= 10; i++) {
  if (i === 4) {
    break;
  }
  console.log(i);
}
