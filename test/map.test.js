const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

const words = ['ground', 'control', 'to', 'major', 'tom'];
const nums = [1, 2, 3, 4, 5, 6, 7];
const accounts = [
  {
    firstName: 'Johnny',
    age: 30,
  },
  {
    firstName: 'Sarah',
    age: 20,
  },
  {
    firstName: 'Maggie',
    age: 50,
  },
];

const results1 = map(words, (word) => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

const results2 = map(nums, (x) => x * 2);
assertArraysEqual(results2, [2, 4, 6, 8, 10, 12, 14]);

const result3 = map(accounts, (e) => e.firstName);
assertArraysEqual(result3, ['Johnny', 'Sarah', 'Maggie']);
