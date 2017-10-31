'use strict';

var chai = require('chai');
var expect = chai.expect;
var fav = {}; fav.type = {}; fav.type.toDate = require('..');

var newDate = fav.type.toDate;
var toDate = newDate['Y-M-D'];

describe('fav.type.toDate["Y-M-D"]', function() {

  it('Should return a date object if value is normal', function() {
    expect(toDate('2017-09-21')).to.eql(newDate(2017, 8, 21));
    expect(toDate('123-4-5')).to.eql(newDate(123, 3, 5));
    expect(toDate('-99-9-9')).to.eql(newDate(-99, 8, 9));
    expect(toDate('+99-9-9')).to.eql(newDate(99, 8, 9));
    expect(toDate('2017-13-21')).to.eql(newDate(2018, 0, 21));
    expect(toDate('2017-09-31')).to.eql(newDate(2017, 9, 1));
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('')).to.equal(null);
    expect(toDate('-')).to.equal(null);
    expect(toDate('+')).to.equal(null);
    expect(toDate('2017')).to.equal(null);
    expect(toDate('2017-09')).to.equal(null);
    expect(toDate('2017-09-')).to.equal(null);
    expect(toDate('2017-09-A')).to.equal(null);
    expect(toDate('20170921')).to.equal(null);
    expect(toDate('２０１７-９-２１')).to.equal(null);
    expect(toDate('2017-09-31-')).to.equal(null);
    expect(toDate('2017/09/21')).to.equal(null);
    expect(toDate('9999999-09-21')).to.equal(null);
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
      expect(toDate(Symbol('2017-09-10'))).to.equal(null);
    }
  });

});

