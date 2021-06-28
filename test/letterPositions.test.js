const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

/* TEST */
const result = letterPositions('hello');

assertArraysEqual(result['e'], [1]);
assertArraysEqual(result['l'], [2, 3]);
assertEqual(result['x'], undefined);
