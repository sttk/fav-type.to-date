'use strict';

var chai = require('chai');
var expect = chai.expect;
var fav = {}; fav.type = {}; fav.type.toDate = require('..');

var newDate = fav.type.toDate;
var toDate = fav.type.toDate['YYMMDDHHmmss'];

describe('fav.type.toDate["YYMMDDHHmmss"]', function() {

  it('Should return a date object if value is normal', function() {
    var yyyy = newDate().getFullYear(),
        yy;

    for (var y = yyyy - 50; y < yyyy + 50; y++) {
      yy = String(yyyy).slice(-2);
      expect(toDate(yy + '0101000000'))
        .to.eql(newDate(yyyy, 0, 1, 0, 0, 0));
      expect(toDate(yy + '0615123030'))
        .to.eql(newDate(yyyy, 5, 15, 12, 30, 30));
      expect(toDate(yy + '1231235959'))
        .to.eql(newDate(yyyy, 11, 31, 23, 59, 59));
    }

    yy = String(yyyy + 49).slice(-2);
    expect(toDate(yy + '1231235959'))
      .to.eql(newDate(yyyy + 49, 11, 31, 23, 59, 59));
    expect(toDate(yy + '1231235960'))
      .to.eql(newDate(yyyy + 50, 0, 1, 0, 0, 0));

    yy = String(yyyy + 50).slice(-2);
    expect(toDate(yy + '0101000000'))
      .to.eql(newDate(yyyy - 50, 0, 1, 0, 0, 0));
    expect(toDate(yy + '0100235959'))
      .to.eql(newDate(yyyy - 51, 11,31, 23, 59, 59));

    expect(toDate('000000000000')).to.not.equal(null);
    expect(toDate('999999999999')).to.not.equal(null);
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('')).to.equal(null);
    expect(toDate('17')).to.equal(null);
    expect(toDate('1709')).to.equal(null);
    expect(toDate('17093')).to.equal(null);
    expect(toDate('17093012')).to.equal(null);
    expect(toDate('1709301234')).to.equal(null);
    expect(toDate('17093012345')).to.equal(null);
    expect(toDate('1709301234567')).to.equal(null);
    expect(toDate('20170930123456')).to.equal(null);
    expect(toDate('17-09-30 12:34:56')).to.equal(null);
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
    expect(toDate(newDate())).to.equal(null);
    expect(toDate(new Error())).to.equal(null);

    if (typeof Symbol === 'function') {
      expect(toDate(Symbol('17-09-10'))).to.equal(null);
    }
  });

});
