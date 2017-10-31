'use strict';

var chai = require('chai');
var expect = chai.expect;

var setDate = require('../../lib/new-date').setDate;

describe('lib/new-date', function() {

  it('Should get the now date if no argment', function() {
    var d0 = new Date(2017, 8, 9, 10, 12, 23, 456);
    var d1 = setDate(d0);
    expect(d1.getTime()).to.equal(d0.getTime());;
    expect(d1.getFullYear(), 2017);
    expect(d1.getMonth(), 8);
    expect(d1.getDay(), 9);
    expect(d1.getHours(), 10);
    expect(d1.getMinutes(), 12);
    expect(d1.getSeconds(), 23);
    expect(d1.getMilliseconds(), 456);
  });

  it('Should get the correct date around borders of day of month', function() {
    var d0 = new Date(2017, 0, 31, 59, 59, 59, 999);
    var d1 = setDate(d0);
    expect(d1.getTime()).to.equal(d0.getTime());;
    expect(d1.getFullYear(), 2017);
    expect(d1.getMonth(), 0);
    expect(d1.getDay(), 31);
    expect(d1.getHours(), 59);
    expect(d1.getMinutes(), 59);
    expect(d1.getSeconds(), 59);
    expect(d1.getMilliseconds(), 999);

    d0 = new Date(2017, 1, 28, 59, 59, 59, 999);
    d1 = setDate(d0);
    expect(d1.getTime()).to.equal(d0.getTime());;
    expect(d1.getFullYear(), 2017);
    expect(d1.getMonth(), 1);
    expect(d1.getDay(), 28);
    expect(d1.getHours(), 59);
    expect(d1.getMinutes(), 59);
    expect(d1.getSeconds(), 59);
    expect(d1.getMilliseconds(), 999);

    d0 = new Date(2017, 2, 31, 59, 59, 59, 999);
    d1 = setDate(d0);
    expect(d1.getTime()).to.equal(d0.getTime());;
    expect(d1.getFullYear(), 2017);
    expect(d1.getMonth(), 2);
    expect(d1.getDay(), 31);
    expect(d1.getHours(), 59);
    expect(d1.getMinutes(), 59);
    expect(d1.getSeconds(), 59);
    expect(d1.getMilliseconds(), 999);

    d0 = new Date(2017, 3, 30, 59, 59, 59, 999);
    d1 = setDate(d0);
    expect(d1.getTime()).to.equal(d0.getTime());;
    expect(d1.getFullYear(), 2017);
    expect(d1.getMonth(), 3);
    expect(d1.getDay(), 30);
    expect(d1.getHours(), 59);
    expect(d1.getMinutes(), 59);
    expect(d1.getSeconds(), 59);
    expect(d1.getMilliseconds(), 999);

    d0 = new Date(2017, 4, 31, 59, 59, 59, 999);
    d1 = setDate(d0);
    expect(d1.getTime()).to.equal(d0.getTime());;
    expect(d1.getFullYear(), 2017);
    expect(d1.getMonth(), 4);
    expect(d1.getDay(), 31);
    expect(d1.getHours(), 59);
    expect(d1.getMinutes(), 59);
    expect(d1.getSeconds(), 59);
    expect(d1.getMilliseconds(), 999);

    d0 = new Date(2017, 5, 30, 59, 59, 59, 999);
    d1 = setDate(d0);
    expect(d1.getTime()).to.equal(d0.getTime());;
    expect(d1.getFullYear(), 2017);
    expect(d1.getMonth(), 5);
    expect(d1.getDay(), 30);
    expect(d1.getHours(), 59);
    expect(d1.getMinutes(), 59);
    expect(d1.getSeconds(), 59);
    expect(d1.getMilliseconds(), 999);

    d0 = new Date(2017, 6, 30, 59, 59, 59, 999);
    d1 = setDate(d0);
    expect(d1.getTime()).to.equal(d0.getTime());;
    expect(d1.getFullYear(), 2017);
    expect(d1.getMonth(), 6);
    expect(d1.getDay(), 31);
    expect(d1.getHours(), 59);
    expect(d1.getMinutes(), 59);
    expect(d1.getSeconds(), 59);
    expect(d1.getMilliseconds(), 999);

    d0 = new Date(2017, 7, 30, 59, 59, 59, 999);
    d1 = setDate(d0);
    expect(d1.getTime()).to.equal(d0.getTime());;
    expect(d1.getFullYear(), 2017);
    expect(d1.getMonth(), 7);
    expect(d1.getDay(), 31);
    expect(d1.getHours(), 59);
    expect(d1.getMinutes(), 59);
    expect(d1.getSeconds(), 59);
    expect(d1.getMilliseconds(), 999);

    d0 = new Date(2017, 8, 30, 59, 59, 59, 999);
    d1 = setDate(d0);
    expect(d1.getTime()).to.equal(d0.getTime());;
    expect(d1.getFullYear(), 2017);
    expect(d1.getMonth(), 8);
    expect(d1.getDay(), 30);
    expect(d1.getHours(), 59);
    expect(d1.getMinutes(), 59);
    expect(d1.getSeconds(), 59);
    expect(d1.getMilliseconds(), 999);

    d0 = new Date(2017, 9, 30, 59, 59, 59, 999);
    d1 = setDate(d0);
    expect(d1.getTime()).to.equal(d0.getTime());;
    expect(d1.getFullYear(), 2017);
    expect(d1.getMonth(), 9);
    expect(d1.getDay(), 31);
    expect(d1.getHours(), 59);
    expect(d1.getMinutes(), 59);
    expect(d1.getSeconds(), 59);
    expect(d1.getMilliseconds(), 999);

    d0 = new Date(2017, 10, 30, 59, 59, 59, 999);
    d1 = setDate(d0);
    expect(d1.getTime()).to.equal(d0.getTime());;
    expect(d1.getFullYear(), 2017);
    expect(d1.getMonth(), 10);
    expect(d1.getDay(), 30);
    expect(d1.getHours(), 59);
    expect(d1.getMinutes(), 59);
    expect(d1.getSeconds(), 59);
    expect(d1.getMilliseconds(), 999);

    d0 = new Date(2017, 11, 30, 59, 59, 59, 999);
    d1 = setDate(d0);
    expect(d1.getTime()).to.equal(d0.getTime());;
    expect(d1.getFullYear(), 2017);
    expect(d1.getMonth(), 11);
    expect(d1.getDay(), 31);
    expect(d1.getHours(), 59);
    expect(d1.getMinutes(), 59);
    expect(d1.getSeconds(), 59);
    expect(d1.getMilliseconds(), 999);
  });

  it('Should get the correct date on last day of February in leap/common year',
  function() {
    var d0 = new Date(2016, 1, 29, 59, 59, 59, 999);
    var d1 = setDate(d0);
    expect(d1.getTime()).to.equal(d0.getTime());;
    expect(d1.getFullYear(), 2016);
    expect(d1.getMonth(), 1);
    expect(d1.getDay(), 29);
    expect(d1.getHours(), 59);
    expect(d1.getMinutes(), 59);
    expect(d1.getSeconds(), 59);
    expect(d1.getMilliseconds(), 999);

    d0 = new Date(2100, 1, 28, 59, 59, 59, 999);
    d1 = setDate(d0);
    expect(d1.getTime()).to.equal(d0.getTime());;
    expect(d1.getFullYear(), 2100);
    expect(d1.getMonth(), 1);
    expect(d1.getDay(), 28);
    expect(d1.getHours(), 59);
    expect(d1.getMinutes(), 59);
    expect(d1.getSeconds(), 59);
    expect(d1.getMilliseconds(), 999);

    d0 = new Date(2000, 1, 29, 59, 59, 59, 999);
    d1 = setDate(d0);
    expect(d1.getTime()).to.equal(d0.getTime());;
    expect(d1.getFullYear(), 2100);
    expect(d1.getMonth(), 1);
    expect(d1.getDay(), 29);
    expect(d1.getHours(), 59);
    expect(d1.getMinutes(), 59);
    expect(d1.getSeconds(), 59);
    expect(d1.getMilliseconds(), 999);
  });

  it('Should calculate date if specified day is out of range', function() {
    var d = setDate(new Date(), 2066, 11, 31, 24);
    expect(d.getFullYear()).to.equal(2067);
    expect(d.getMonth()).to.equal(0);
    expect(d.getDate()).to.equal(1);
    expect(d.getHours()).to.equal(0);
    expect(d.getMinutes()).to.equal(0);
    expect(d.getSeconds()).to.equal(0);
    expect(d.getMilliseconds()).to.equal(0);
  });
});
