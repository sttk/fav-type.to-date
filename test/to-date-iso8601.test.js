'use strict';

var chai = require('chai');
var expect = chai.expect;
var fav = {}; fav.type = {}; fav.type.toDate = require('..');

var newDate = fav.type.toDate;
var toDate = newDate.ISO8601;

var tz = new Date().getTimezoneOffset();
var tzM = tz % 60;
var tzH = (tz - tzM) / 60;

describe('fav.type.toDate["ISO8601"]', function() {

  it('Should return a date object if format is basic calendar date',
  function() {
    expect(toDate('19850412'))
      .to.eql(newDate(1985, 3, 12));
    expect(toDate('19850412T101530'))
      .to.eql(newDate(1985, 3, 12, 10, 15, 30));
    expect(toDate('19850412T101530Z'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('19850412T101530+09'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('19850412T101530+0910'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('19850412T101530-09'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('19850412T101530-0910'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is expanded basic calendar date',
  function() {
    expect(toDate('+119850412'))
      .to.eql(newDate(11985, 3, 12));
    expect(toDate('+119850412T101530Z'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('+119850412T101530+09'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('+119850412T101530+0910'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('+119850412T101530-09'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('+119850412T101530-0910'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));

    expect(toDate('-219850412'))
      .to.eql(newDate(-21985, 3, 12));
    expect(toDate('-219850412T101530Z'))
      .to.eql(newDate(-21985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('-219850412T101530+09'))
      .to.eql(newDate(-21985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('-219850412T101530+0910'))
      .to.eql(newDate(-21985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('-219850412T101530-09'))
      .to.eql(newDate(-21985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('-219850412T101530-0910'))
      .to.eql(newDate(-21985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is basic ordinal date',
  function() {
    expect(toDate('1985102'))
      .to.eql(newDate(1985, 3, 12));
    expect(toDate('1985102T101530'))
      .to.eql(newDate(1985, 3, 12, 10, 15, 30));
    expect(toDate('1985102T101530Z'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('1985102T101530+09'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('1985102T101530+0910'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('1985102T101530-09'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('1985102T101530-0910'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('The expanded basic ordinal date format is not supported because this ' +
  '\n\tcannot be distinguished from basic calendar date format.',
  function() {
    this.skip();
    return;
  });

  it('Should return a date object if format is basic week date',
  function() {
    expect(toDate('1985W155'))
      .to.eql(newDate(1985, 3, 12));
    expect(toDate('1985W155T101530'))
      .to.eql(newDate(1985, 3, 12, 10, 15, 30));
    expect(toDate('1985W155T101530Z'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('1985W155T101530+09'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('1985W155T101530+0910'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('1985W155T101530-09'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('1985W155T101530-0910'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is expanded basic week date',
  function() {
    expect(toDate('+11985W155'))
      .to.eql(newDate(11985, 3, 12));
    expect(toDate('+11985W155T101530'))
      .to.eql(newDate(11985, 3, 12, 10, 15, 30));
    expect(toDate('+11985W155T101530Z'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('+11985W155T101530+09'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('+11985W155T101530+0910'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('+11985W155T101530-09'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('+11985W155T101530-0910'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));

    expect(toDate('-11985W155'))
      .to.eql(newDate(-11985, 3, 10));
    expect(toDate('-11985W155T101530'))
      .to.eql(newDate(-11985, 3, 10, 10, 15, 30));
    expect(toDate('-11985W155T101530Z'))
      .to.eql(newDate(-11985, 3, 10, 10 - tzH, 15 - tzM, 30));
    expect(toDate('-11985W155T101530+09'))
      .to.eql(newDate(-11985, 3, 10, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('-11985W155T101530+0910'))
      .to.eql(newDate(-11985, 3, 10, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('-11985W155T101530-09'))
      .to.eql(newDate(-11985, 3, 10, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('-11985W155T101530-0910'))
      .to.eql(newDate(-11985, 3, 10, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is extended calendar date',
  function() {
    expect(toDate('1985-04-12'))
      .to.eql(newDate(1985, 3, 12));
    expect(toDate('1985-04-12T10:15:30'))
      .to.eql(newDate(1985, 3, 12, 10, 15, 30));
    expect(toDate('1985-04-12T10:15:30Z'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('1985-04-12T10:15:30+09'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('1985-04-12T10:15:30+09:10'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('1985-04-12T10:15:30-09'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('1985-04-12T10:15:30-09:10'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is expanded extended calendar ' +
  'date', function() {
    expect(toDate('+11985-04-12'))
      .to.eql(newDate(11985, 3, 12));
    expect(toDate('+11985-04-12T10:15:30'))
      .to.eql(newDate(11985, 3, 12, 10, 15, 30));
    expect(toDate('+11985-04-12T10:15:30Z'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('+11985-04-12T10:15:30+09'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('+11985-04-12T10:15:30+09:10'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('+11985-04-12T10:15:30-09'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('+11985-04-12T10:15:30-09:10'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));

    expect(toDate('-11985-04-12'))
      .to.eql(newDate(-11985, 3, 12));
    expect(toDate('-11985-04-12T10:15:30'))
      .to.eql(newDate(-11985, 3, 12, 10, 15, 30));
    expect(toDate('-11985-04-12T10:15:30Z'))
      .to.eql(newDate(-11985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('-11985-04-12T10:15:30+09'))
      .to.eql(newDate(-11985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('-11985-04-12T10:15:30+09:10'))
      .to.eql(newDate(-11985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('-11985-04-12T10:15:30-09'))
      .to.eql(newDate(-11985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('-11985-04-12T10:15:30-09:10'))
      .to.eql(newDate(-11985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is extended ordinal date',
  function() {
    expect(toDate('1985-102'))
      .to.eql(newDate(1985, 3, 12));
    expect(toDate('1985-102T10:15:30'))
      .to.eql(newDate(1985, 3, 12, 10, 15, 30));
    expect(toDate('1985-102T10:15:30Z'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('1985-102T10:15:30+09'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('1985-102T10:15:30+09:10'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('1985-102T10:15:30-09'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('1985-102T10:15:30-09:10'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is expanded extended ordinal date',
  function() {
    expect(toDate('+11985-102'))
      .to.eql(newDate(11985, 3, 12));
    expect(toDate('+11985-102T10:15:30'))
      .to.eql(newDate(11985, 3, 12, 10, 15, 30));
    expect(toDate('+11985-102T10:15:30Z'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('+11985-102T10:15:30+09'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('+11985-102T10:15:30+09:10'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('+11985-102T10:15:30-09'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('+11985-102T10:15:30-09:10'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));

    expect(toDate('-11985-102'))
      .to.eql(newDate(-11985, 3, 12));
    expect(toDate('-11985-102T10:15:30'))
      .to.eql(newDate(-11985, 3, 12, 10, 15, 30));
    expect(toDate('-11985-102T10:15:30Z'))
      .to.eql(newDate(-11985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('-11985-102T10:15:30+09'))
      .to.eql(newDate(-11985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('-11985-102T10:15:30+09:10'))
      .to.eql(newDate(-11985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('-11985-102T10:15:30-09'))
      .to.eql(newDate(-11985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('-11985-102T10:15:30-09:10'))
      .to.eql(newDate(-11985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is extended week date',
  function() {
    expect(toDate('1985-W15-5'))
      .to.eql(newDate(1985, 3, 12));
    expect(toDate('1985-W15-5T10:15:30'))
      .to.eql(newDate(1985, 3, 12, 10, 15, 30));
    expect(toDate('1985-W15-5T10:15:30Z'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('1985-W15-5T10:15:30+09'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('1985-W15-5T10:15:30+09:10'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('1985-W15-5T10:15:30-09'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('1985-W15-5T10:15:30-09:10'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is expanded extended week date',
  function() {
    expect(toDate('+11985-W15-5'))
      .to.eql(newDate(11985, 3, 12));
    expect(toDate('+11985-W15-5T10:15:30'))
      .to.eql(newDate(11985, 3, 12, 10, 15, 30));
    expect(toDate('+11985-W15-5T10:15:30Z'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('+11985-W15-5T10:15:30+09'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('+11985-W15-5T10:15:30+09:10'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('+11985-W15-5T10:15:30-09'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('+11985-W15-5T10:15:30-09:10'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));

    expect(toDate('-11985-W15-5'))
      .to.eql(newDate(-11985, 3, 10));
    expect(toDate('-11985-W15-5T10:15:30'))
      .to.eql(newDate(-11985, 3, 10, 10, 15, 30));
    expect(toDate('-11985-W15-5T10:15:30Z'))
      .to.eql(newDate(-11985, 3, 10, 10 - tzH, 15 - tzM, 30));
    expect(toDate('-11985-W15-5T10:15:30+09'))
      .to.eql(newDate(-11985, 3, 10, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('-11985-W15-5T10:15:30+09:10'))
      .to.eql(newDate(-11985, 3, 10, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('-11985-W15-5T10:15:30-09'))
      .to.eql(newDate(-11985, 3, 10, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('-11985-W15-5T10:15:30-09:10'))
      .to.eql(newDate(-11985, 3, 10, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('')).to.equal(null);
    expect(toDate('2017')).to.equal(null);
    expect(toDate('201710')).to.equal(null);
    expect(toDate('201710234')).to.equal(null);
    expect(toDate('20171023 112233')).to.equal(null);
    expect(toDate('2017-10')).to.equal(null);
    expect(toDate('2017-10-23T4')).to.equal(null);
    expect(toDate('2017-10-23 11:22:33')).to.equal(null);
    expect(toDate('2017/10/23T11:22:33')).to.equal(null);
    expect(toDate('12017-10-23T11:22:33')).to.equal(null);
    expect(toDate('+017-10-23T11:22:33')).to.equal(null);
    expect(toDate('-17-10-23T11:22:33')).to.equal(null);
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


