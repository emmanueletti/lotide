const assertEqual = (actual, expected) => {
	if (actual === expected) {
		console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
	} else {
		console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
	}
};

const head = (array) => {
	return array[0];
};

//TEST
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
assertEqual(head([], undefined));
assertEqual(head([2]), 2);