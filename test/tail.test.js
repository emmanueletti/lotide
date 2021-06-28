const { expect } = require('chai');
const tail = require('../tail');

describe(`Tail Function`, () => {
  it(`returns [2,3,4] for [1,2,3,4]`, () => {
    expect(tail([1, 2, 3, 4])).to.deep.equal([2, 3, 4]);
  });

  it(`returns [] for []`, () => {
    expect(tail([])).to.deep.equal([]);
  });

  it('return [] for [1]', () => {
    expect(tail([1])).to.deep.equal([]);
  });
  //
});
