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


//TEST
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual('hello-world', 'hello-world');
assertEqual('non identical strings', 'NON IDENTICAL STRINGS');
assertEqual(230, 101);
