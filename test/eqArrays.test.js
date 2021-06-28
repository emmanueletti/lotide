const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TESTS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false);
assertEqual(eqArrays([1, 2, 3], [1, 4, 3]), false);
