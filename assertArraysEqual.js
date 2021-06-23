const assertArraysEqual = (actual, expected) => {
  // POTENTIAL BUG: calling every() on an empty array will always result in true
  // (e.g [].every() evalutes to true no matter the callback condition passed in)
  // assert function will result in false positive when the array being called on is empty but the array being compared to is not 
  // to prevent a false positive, call every() on both expected and actual arrays, and require a true positive to be a true result from both calls

	const everyActualEquals = actual.every((element, index) => element === expected[index]);
	const everyExpectedEquals = expected.every((element, index) => element === actual[index]);

	if (everyActualEquals && everyExpectedEquals) {
		console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
	} else {
		console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
	}
};

console.log('\n --correctness checks--')
console.log('--should pass--')
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(['1', '2', '3'], ['1', '2', '3']);
console.log('--should fail--')
assertArraysEqual([1, 2, 3], [1, 2, '3']);
assertArraysEqual([1, 2, 3], [1, 4, 3]);

console.log('\n --false positive checks--')
console.log('--should fail--')
assertArraysEqual([], [1, 4, 3]);
assertArraysEqual([1, 4, 3], []);
console.log('--should pass--')
assertArraysEqual([], []);