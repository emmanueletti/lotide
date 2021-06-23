const assertEqual = function(actual, expected) {
  try {
    if (actual === expected) {
      console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
    } else {
      console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
    }
  } catch (error) {
    console.log('😬 Something broke');
    console.log(`\t ${error.name}: ${error.message}`);
  }
};

//returns true is both objects have the matching keys (no more, no less) with each key having matching values
// order of the keys in not important
// false if they are not the same

/* BREAKDOWN */
// function accepts two objects as inputs
// check to see if obj1 has the same keys as obj2

  // check to make sure that array of obj1 and obj2 keys are the same length
  // check if each key has the same value
  // iterate over obj1 and see if the value of each property === the same in obj2
// return true or false based on check

/* INITIAL VERSION */
const eqObjects = (obj1, obj2) => {
 
  // return false if array of object 1's keys is not the same length as that of object 2
  if (Object.keys(obj1).length !== Object.keys(obj2).length ) {
    return false;
  } else {
    for (const keys in obj1) {
      // return false if at any time a key in object 1 does not result in the same value as object 2 or is undefined in object 2
      if (obj1[keys] !== obj2[keys]) {
        return false
      }
    }
    return true;
  }
}

/* REFACTOR */




// TEST
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "2", b: "1", c: "1" };
const c = { a: "1", b: "2" };
const d = { b: "2", };
const e = { };
const f = { };

const result = eqObjects(e, f)
const result2 = eqObjects(ab, abc)

assertEqual(result, true)
assertEqual(result2, false)
