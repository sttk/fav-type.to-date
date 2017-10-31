'use strict';

var chai = require('chai');
var expect = chai.expect;
var fav = {}; fav.type = {}; fav.type.toDate = require('..');

var newDate = fav.type.toDate;
var toDate = fav.type.toDate['YYYYMMDD'];

describe('fav.type.toDate["YYYYMMDD"]', function() {

  it('Should return a date object if value is normal', function() {
    expect(toDate('20170923')).to.eql(newDate(2017, 8, 23));
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('')).to.equal(null);
    expect(toDate('2017')).to.equal(null);
    expect(toDate('201709')).to.equal(null);
    expect(toDate('2017093')).to.equal(null);
    expect(toDate('201709301')).to.equal(null);
    expect(toDate('170930')).to.equal(null);
    expect(toDate('2017-09-30')).to.equal(null);
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
      expect(toDate(Symbol('2017-09-10'))).to.equal(null);
    }
  });

});
