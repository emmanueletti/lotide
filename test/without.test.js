const without = require('../without');
const assertArraysEqual = require('../assertArraysEqual');

//TEST
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
assertArraysEqual(without([], []), []);
assertArraysEqual(without(['1', '2', '3'], []), ['1', '2', '3']);
assertArraysEqual(without(['1', '2', '3', '4'], ['2']), ['1', '3', '4']);
assertArraysEqual(without([], ['2']), []);
assertArraysEqual(without(['1', '2', '3', '4'], ['2']), ['1', '3', '4']);
assertArraysEqual(without(['1', '2', true, '3', '4'], [true]), ['1', '2', '3', '4']);

const words = ['hello', 'world', 'lighthouse'];
without(words, ['lighthouse']); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ['hello', 'world', 'lighthouse']);
