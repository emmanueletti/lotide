const assertArraysEqual = (actual, expected) => {
  try {
    const everyActualEquals = actual.every((element, index) => element === expected[index]);
	  const everyExpectedEquals = expected.every((element, index) => element === actual[index]);

      if (everyActualEquals && everyExpectedEquals) {
      console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
    } else {
      console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
    }
  } catch (error) {
    console.log('😬 Something broke')
    console.log(`\t ${error.name}: ${error.message}`)
  }
};

// input: array and callback function
// output array with each element transformed by callback function

const words = ["ground", "control", "to", "major", "tom"];
const nums = [1,2,3,4,5,6,7]
const accounts = [
  {
    firstName: 'Johnny',
    age: 30
  },
  {
    firstName: 'Sarah',
    age: 20
  },
  {
    firstName: 'Maggie',
    age: 50
  }
]

const map = (arr, callback) => {
  const output = [];

    for (const item of arr) {
      output.push(callback(item))
    }

  return output;
}

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g','c','t','m','t'])

const results2 = map(nums, x => x * 2);
assertArraysEqual(results2, [2,4,6,8,10,12,14])

const result3 = map(accounts, e => e.firstName)
assertArraysEqual(result3, ['Johnny', 'Sarah', 'Maggie'])
