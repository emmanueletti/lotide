const assertArraysEqual = (arr1, arr2) => {
	const equal = arr1.every((element, index) => element === arr2[index]);
	if (equal) {
		console.log(`✅ Assertion Passed: [${arr1}] === [${arr2}]`);
	} else {
		console.log(`🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
	}
};

// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual(['1', '2', '3'], ['1', '2', '3']);
// assertArraysEqual([1, 2, 3], [1, 2, '3']);
// assertArraysEqual([1, 2, 3], [1, 4, 3]);
// assertArraysEqual([], []);
