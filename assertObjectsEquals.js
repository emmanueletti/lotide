const eqObjects = require('./eqObjects');

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

module.exports = assertObjectsEquals;
