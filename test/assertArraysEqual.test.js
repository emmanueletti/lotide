const assertArraysEqual = require('../assertArraysEqual');

// TEST
console.log('\n --correctness checks--');
console.log('--should pass--');
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(['1', '2', '3'], ['1', '2', '3']);
console.log('--should fail--');
assertArraysEqual([1, 2, 3], [1, 2, '3']);
assertArraysEqual([1, 2, 3], [1, 4, 3]);

console.log('\n --false positive checks--');
console.log('--should fail--');
assertArraysEqual([], [1, 4, 3]);
assertArraysEqual([1, 4, 3], []);
console.log('--should pass--');
assertArraysEqual([], []);
