const assertEqual = require('../assertEqual');
const head = require('../head');
const { assert } = require('chai');

describe('Head Function', () => {
  it('returns 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
    // expect(head([1, 2, 3])).to.equal(1);
  });

  it(`returnes '5' for ['5']`, () => {
    assert.strictEqual(head([5]), 5);
  });

  it(`should return 'undefined' for []`, () => {
    assert.strictEqual(head([]), undefined);
  });

  //
});
