const assertArraysEqual = require('../assertArraysEqual');
const findMiddle = require('../middle');

/* TEST */
assertArraysEqual(findMiddle([1]), []);
assertArraysEqual(findMiddle([1, 2]), []);
assertArraysEqual(findMiddle([1, 2, 3]), [2]);
assertArraysEqual(findMiddle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(findMiddle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(findMiddle([1, 2, 3, 4, 5, 6]), [3, 4]);
