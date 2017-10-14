'use strict';

var chai = require('chai');
var expect = chai.expect;
var fav = {}; fav.type = {}; fav.type.toDate = require('..');

var toDate = fav.type.toDate['Y/M/D H:m:s'];

describe('fav.type.toDate["Y/M/D H:m:s"]', function() {

  it('Should return a date object if value is normal', function() {
    expect(toDate('2017/09/21 19:23:01'))
      .to.eql(new Date(2017, 8, 21, 19, 23, 1));
    expect(toDate('2017/09/21 9:03:01.5'))
      .to.eql(new Date(2017, 8, 21, 9, 3, 1, 500));
    expect(toDate('123/4/5 10:20:30.40'))
      .to.eql(new Date(123, 3, 5, 10, 20, 30, 400));
    expect(toDate('-99/9/9 1:2:3'))
      .to.eql(new Date(-99, 8, 9, 1, 2, 3));
    expect(toDate('+99/9/9 23:59:59.99999'))
      .to.eql(new Date(99, 8, 9, 23, 59, 59, 999));
    expect(toDate('2017/13/21 00:00:00'))
      .to.eql(new Date(2018, 0, 21, 0, 0, 0));
    expect(toDate('2017/09/31    01:23:45.678'))
      .to.eql(new Date(2017, 9, 1, 1, 23, 45, 678));
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('')).to.equal(null);
    expect(toDate('-')).to.equal(null);
    expect(toDate('+')).to.equal(null);
    expect(toDate('2017')).to.equal(null);
    expect(toDate('2017/09')).to.equal(null);
    expect(toDate('2017/09/')).to.equal(null);
    expect(toDate('2017/09/01')).to.equal(null);
    expect(toDate('2017/09/01 11')).to.equal(null);
    expect(toDate('2017/09/01 11:')).to.equal(null);
    expect(toDate('2017/09/01 11:22')).to.equal(null);
    expect(toDate('2017/09/01 11:22:')).to.equal(null);
    expect(toDate('2017/09/01 11:22:33.')).to.equal(null);
    expect(toDate('2017/09/01 11:22:A')).to.equal(null);
    expect(toDate('2017/09/0111:22:33')).to.equal(null);
    expect(toDate('20170921223311')).to.equal(null);
    expect(toDate('２０１７/９/２１ １１:２２:３３')).to.equal(null);
    expect(toDate('2017-09-21 11:22:33')).to.equal(null);
    expect(toDate('9999999/09/21 11:22:33')).to.equal(null);
  });

  it('Should return null if value is illegal data type', function() {
    expect(toDate(undefined)).to.equal(null);
    expect(toDate(null)).to.equal(null);
    expect(toDate(true)).to.equal(null);
    expect(toDate(false)).to.equal(null);
    expect(toDate(123)).to.equal(null);
    expect(toDate([])).to.equal(null);
    expect(toDate([1, 2, 3])).to.equal(null);
    expect(toDate({})).to.equal(null);
    expect(toDate({ y: 1, m: 2, d: 3 })).to.equal(null);
    expect(toDate(/a/g)).to.equal(null);
    expect(toDate(new RegExp('a', 'g'))).to.equal(null);
    expect(toDate(function() {})).to.equal(null);
    expect(toDate(new Date())).to.equal(null);
    expect(toDate(new Error())).to.equal(null);

    if (typeof Symbol === 'function') {
      expect(toDate(Symbol('2017/09/10'))).to.equal(null);
    }
  });

});
