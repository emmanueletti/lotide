const assertObjectsEquals = require('../assertObjectsEquals');

assertObjectsEquals({ a: 1, b: 2 }, { b: 2, a: 1 });
console.log('--should break--');
assertObjectsEquals({ a: 1, b: 2 }, {}.keys);
