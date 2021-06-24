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

// Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

// BREAKDOWN
// function takes in object and callback
// loop through the object and apply callback function on each key
  // if truthy:
    // return key
  // if not, keep scanning
// end loop
// return undefined - explicitly
// returns first key that returns truthy callback value || undefined

// INITIAL SOLUTION
const findKey = (obj, callback) => {
  for (const key in obj) {
    if (callback(obj[key])) {
      return key; 
    }
  }
  return undefined;
}

// REFACTOR

// TEST
const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) 

console.log(result)