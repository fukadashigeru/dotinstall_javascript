'use strict';

const score_1 = 85;

if (score_1 >= 80) {
  console.log('Great!');
} else if (score_1 >= 60) {
  console.log('Good.');
} else {
  console.log('OK...');
}

const score_2 = 60;

score_2 >= 80 ? console.log('Great!') : console.log('OK...');

const score_3 = 85;
const name = 'taguchi';

if (score_1 >= 50 && name === 'taguchi') {
  console.log('Good job!');
}
