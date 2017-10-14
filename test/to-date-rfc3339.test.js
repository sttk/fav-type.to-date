'use strict';

var chai = require('chai');
var expect = chai.expect;
var fav = {}; fav.type = {}; fav.type.toDate = require('..');

var toDate = fav.type.toDate.RFC3339;

var tz = new Date().getTimezoneOffset();
var tzM = tz % 60;
var tzH = (tz - tzM) / 60;

describe('fav.type.toDate["RFC3339"]', function() {

  it('Should return a date object if value is normal', function() {
    expect(toDate('2017-09-26T23:37:51Z'))
      .to.eql(new Date(2017, 8, 26, 23 - tzH, 37 - tzM, 51));
    expect(toDate('2017-09-26T23:37:51+00:00'))
      .to.eql(new Date(2017, 8, 26, 23 - tzH, 37 - tzM, 51));

    expect(toDate('2017-09-27T08:37:51+09:00'))
      .to.eql(new Date(2017, 8, 27, 8 - 9 - tzH, 37 + tzM, 51));
    expect(toDate('2017-09-26T20:27:51-03:10'))
      .to.eql(new Date(2017, 8, 26, 20 + 3 - tzH, 27 + 10 - tzM, 51));
    expect(toDate('2017-09-24T19:59:51.123Z'))
      .to.eql(new Date(2017, 8, 24, 19 - tzH, 59 - tzM, 51, 123));

    expect(toDate('2017-09-24T19:59:51.123+00:00'))
      .to.eql(new Date(2017, 8, 24, 19 - tzH, 59 - tzM, 51, 123));
    expect(toDate('2017-09-24T19:59:51.1+00:00'))
      .to.eql(new Date(2017, 8, 24, 19 - tzH, 59 - tzM, 51, 100));
    expect(toDate('2017-09-24T19:59:51.12+00:00'))
      .to.eql(new Date(2017, 8, 24, 19 - tzH, 59 - tzM, 51, 120));
    expect(toDate('2017-09-24T19:59:51.1234+00:00'))
      .to.eql(new Date(2017, 8, 24, 19 - tzH, 59 - tzM, 51, 123));
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('12017-09-24T10:59:51Z')).to.equal(null);
    expect(toDate('217-09-24T10:59:51Z')).to.equal(null);
    expect(toDate('2017-9-24T10:59:51Z')).to.equal(null);
    expect(toDate('2017-009-24T10:59:51Z')).to.equal(null);
    expect(toDate('2017-09-4T10:59:51Z')).to.equal(null);
    expect(toDate('2017-09-124T10:59:51Z')).to.equal(null);
    expect(toDate('2017-09-12A10:59:51Z')).to.equal(null);
    expect(toDate('2017-09-12T1:59:51Z')).to.equal(null);
    expect(toDate('2017-09-12T101:59:51Z')).to.equal(null);
    expect(toDate('2017-09-12T10:9:51Z')).to.equal(null);
    expect(toDate('2017-09-12T10:159:51Z')).to.equal(null);
    expect(toDate('2017-09-12T10:59:1Z')).to.equal(null);
    expect(toDate('2017-09-12T10:59:151Z')).to.equal(null);
    expect(toDate('2017-09-12T10:59:15')).to.equal(null);
    expect(toDate('2017-09-12T10:59:15.Z')).to.equal(null);
    expect(toDate('2017/09-12T10:59:15')).to.equal(null);
    expect(toDate('2017-09/12T10:59:15')).to.equal(null);
    expect(toDate('2017-09-12T10:59:15+')).to.equal(null);
    expect(toDate('2017-09-12T10:59:15-:')).to.equal(null);
    expect(toDate('2017-09-12T10:59:15+1')).to.equal(null);
    expect(toDate('2017-09-12T10:59:15-12')).to.equal(null);
    expect(toDate('2017-09-12T10:59:15+12:')).to.equal(null);
    expect(toDate('2017-09-12T10:59:15-12:3')).to.equal(null);
    expect(toDate('2017-09-12T10:59:15-12:345')).to.equal(null);
    expect(toDate('2017-09-12T10:59:15-12:34Z')).to.equal(null);
    expect(toDate(' 2017-09-12T10:59:15-12:34')).to.equal(null);
    expect(toDate('2017-09-12T10:59:15-12:34 ')).to.equal(null);
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
