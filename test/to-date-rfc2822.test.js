'use strict';

var chai = require('chai');
var expect = chai.expect;
var fav = {}; fav.type = {}; fav.type.toDate = require('..');

var newDate = fav.type.toDate;
var toDate = newDate.RFC2822;

var tz = newDate().getTimezoneOffset();
var tzM = tz % 60;
var tzH = (tz - tzM) / 60;

describe('fav.type.toDate["RFC2822"]', function() {

  it('Should return a date object if value is normal', function() {
    expect(toDate('Tue, 25 Sep 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 8, 25, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('Tue, 26 Sep 2017 08:15:02 +0900'))
      .to.eql(newDate(2017, 8, 26, 8 - tzH - 9, 15 - tzM, 2, 0));
    expect(toDate('Tue, 26 Sep 2017 08:15:02 -0900'))
      .to.eql(newDate(2017, 8, 26, 8 - tzH + 9, 15 - tzM, 2, 0));
    expect(toDate('  26  Sep  2017  08:15:02   +0900  '))
      .to.eql(newDate(2017, 8, 26, 8 - tzH - 9, 15 - tzM, 2, 0));

    expect(toDate('Mon, 24 Sep 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 8, 24, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('Tue, 25 Sep 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 8, 25, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('Wed, 26 Sep 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 8, 26, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('Thu, 27 Sep 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 8, 27, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('Fri, 28 Sep 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 8, 28, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('Sat, 29 Sep 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 8, 29, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('Sun, 30 Sep 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 8, 30, 23 - tzH, 15 - tzM, 2, 0));

    expect(toDate('30 Jan 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 0, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Feb 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 1, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Mar 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 2, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Apr 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 3, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 May 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 4, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Jun 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 5, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Jul 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 6, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Aug 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 7, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Sep 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 8, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Oct 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 9, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Nov 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 10, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Dec 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 11, 30, 23 - tzH, 15 - tzM, 2, 0));

    expect(toDate(' Tue, 5 Sep 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 8, 5, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('Tue, 5 Sep 12017 23:15:02 +0000'))
      .to.eql(newDate(12017, 8, 5, 23 - tzH, 15 - tzM, 2, 0));
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('AAA, 25 Sep 2017 23:15:02 +0000')).to.equal(null);
    expect(toDate('Tue, A25 Sep 2017 23:15:02 +0000')).to.equal(null);
    expect(toDate('Tue, 25A Sep 2017 23:15:02 +0000')).to.equal(null);
    expect(toDate('Tue, 25 AAA 2017 23:15:02 +0000')).to.equal(null);
    expect(toDate('Tue, 25 Sep2017 23:15:02 +0000')).to.equal(null);
    expect(toDate('Tue, 25 Sep 117 23:15:02 +0000')).to.equal(null);
    expect(toDate('Tue, 25 Sep 2017T23:15:02 +0000')).to.equal(null);
    expect(toDate('Tue, 25 Sep 2017 A23:15:02 +0000')).to.equal(null);
    expect(toDate('Tue, 25 Sep 2017 2:15:02 +0000')).to.equal(null);
    expect(toDate('Tue, 25 Sep 2017 23A15:02 +0000')).to.equal(null);
    expect(toDate('Tue, 25 Sep 2017 23:1:02 +0000')).to.equal(null);
    expect(toDate('Tue, 25 Sep 2017 23:15A02 +0000')).to.equal(null);
    expect(toDate('Tue, 25 Sep 2017 23:15:2 +0000')).to.equal(null);
    expect(toDate('Tue, 25 Sep 2017 23:15:02A+0000')).to.equal(null);
    expect(toDate('Tue, 25 Sep 2017 23:15:02 A0000')).to.equal(null);
    expect(toDate('Tue, 25 Sep 2017 23:15:02 +000')).to.equal(null);
    expect(toDate('Tue, 25 Sep 2017 23:15:02 +0000A')).to.equal(null);
    expect(toDate('Tue, 25 Sep 99999999 23:15:02 +0000')).to.equal(null);
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
