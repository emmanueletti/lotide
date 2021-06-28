const assertEqual = require('../assertEqual');
const tail = require('../tail');

// TESTS
original = [1, 2, 3, 4, 5];
result = tail(original);
assertEqual(result[0], 2);
assertEqual(result.length, 4);
assertEqual(original.length, 5);
//
empty = tail([]);
assertEqual(empty.length, 0);
assertEqual(empty[0], undefined);
//
oneElement = tail([1]);
assertEqual(oneElement.length, 0);
assertEqual(oneElement[0], undefined);
