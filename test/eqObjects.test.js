const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');

// TEST
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
const abc = { a: '2', b: '1', c: '1' };
const c = { a: '1', b: '2' };
const d = { b: '2' };
const e = {};
const f = {};

const result = eqObjects(e, f);
const result2 = eqObjects(ab, abc);

assertEqual(result, true);
assertEqual(result2, false);
