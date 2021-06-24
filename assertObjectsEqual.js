const { inspect } = require('util');

const eqObjects = (obj1, obj2) => {
  // return false if array of object 1's keys is not the same length as that of object 2
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  } else {
    for (const keys in obj1) {
      // return false if at any time a key in object 1 does not result in the same value as object 2 or is undefined in object 2
      if (obj1[keys] !== obj2[keys]) {
        return false;
      }
    }
    return true;
  }
};

const assertObjectsEquals = (actual, expected) => {
// node util library function to help print content of objects to terminal
const inspect = require('util').inspect;


  try {
    if (eqObjects(actual, expected)) {
      console.log(`✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
    } else {
      console.log(`🛑 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);

    }
    
  } catch (error) {
    console.log('😬 Something broke');
    console.log(`\t ${error.name}: ${error.message}`);
  }

};


assertObjectsEquals({a:1,b:2}, {b:2,a:1})
assertObjectsEquals({a:1,b:2}, {}.keys)