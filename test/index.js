var expect = require('chai').expect;
var asc = require('../');
var cmp = require('cmp');

describe('asc', function() {
  function charCode(c) {
    return c.charCodeAt();
  }

  it('should work', function() {
    var arr = ['a', 'b', 'c'];
    var rev = arr.slice().reverse();

    expect(arr.slice().sort(cmp(asc(1, charCode)))).to.eql(arr);
    expect(arr.slice().sort(cmp(asc(-1, charCode)))).to.eql(rev);
  });
});