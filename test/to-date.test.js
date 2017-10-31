'use strict';

var chai = require('chai');
var expect = chai.expect;
var fav = {}; fav.type = {}; fav.type.toDate = require('..');

var toDate = fav.type.toDate;

describe('fav.type.toDate', function() {

  it('Should get the current date if no argument', function() {
    var d0 = new Date();
    var d1 = toDate();
    var d2 = new Date();
    expect(d0.getTime() <= d1.getTime()).to.be.true;
    expect(d2.getTime() >= d1.getTime()).to.be.true;
  });

  it('Should get the specified date', function() {
    var d0 = toDate(2010, 1, 20, 1, 23, 45, 678);
    expect(d0.getFullYear()).to.equal(2010);
    expect(d0.getMonth()).to.equal(1);
    expect(d0.getDate()).to.equal(20);
    expect(d0.getHours()).to.equal(1);
    expect(d0.getMinutes()).to.equal(23);
    expect(d0.getSeconds()).to.equal(45);
    expect(d0.getMilliseconds()).to.equal(678);
  });

  it('Should set first values to elements which are not specified',
  function() {
    var d0 = toDate(2010);
    var d1 = new Date(2010, 0, 1, 0, 0, 0, 0);
    expect(d0.getFullYear()).to.equal(d1.getFullYear());
    expect(d0.getMonth()).to.equal(d1.getMonth());
    expect(d0.getDate()).to.equal(d1.getDate());
    expect(d0.getMinutes()).to.equal(d1.getMinutes());
    expect(d0.getSeconds()).to.equal(d1.getSeconds());
    expect(d0.getMilliseconds()).to.equal(d1.getMilliseconds());

    d0 = toDate(2010, 2);
    var d1 = new Date(2010, 2, 1, 0, 0, 0, 0);
    expect(d0.getFullYear()).to.equal(d1.getFullYear());
    expect(d0.getMonth()).to.equal(d1.getMonth());
    expect(d0.getDate()).to.equal(d1.getDate());
    expect(d0.getMinutes()).to.equal(d1.getMinutes());
    expect(d0.getSeconds()).to.equal(d1.getSeconds());
    expect(d0.getMilliseconds()).to.equal(d1.getMilliseconds());

    d0 = toDate(2010, 2, 23);
    var d1 = new Date(2010, 2, 23, 0, 0, 0, 0);
    expect(d0.getFullYear()).to.equal(d1.getFullYear());
    expect(d0.getMonth()).to.equal(d1.getMonth());
    expect(d0.getDate()).to.equal(d1.getDate());
    expect(d0.getMinutes()).to.equal(d1.getMinutes());
    expect(d0.getSeconds()).to.equal(d1.getSeconds());
    expect(d0.getMilliseconds()).to.equal(d1.getMilliseconds());

    d0 = toDate(2010, 2, 23, 11);
    var d1 = new Date(2010, 2, 23, 11, 0, 0, 0);
    expect(d0.getFullYear()).to.equal(d1.getFullYear());
    expect(d0.getMonth()).to.equal(d1.getMonth());
    expect(d0.getDate()).to.equal(d1.getDate());
    expect(d0.getMinutes()).to.equal(d1.getMinutes());
    expect(d0.getSeconds()).to.equal(d1.getSeconds());
    expect(d0.getMilliseconds()).to.equal(d1.getMilliseconds());

    d0 = toDate(2010, 2, 23, 11, 22);
    var d1 = new Date(2010, 2, 23, 11, 22, 0, 0);
    expect(d0.getFullYear()).to.equal(d1.getFullYear());
    expect(d0.getMonth()).to.equal(d1.getMonth());
    expect(d0.getDate()).to.equal(d1.getDate());
    expect(d0.getMinutes()).to.equal(d1.getMinutes());
    expect(d0.getSeconds()).to.equal(d1.getSeconds());
    expect(d0.getMilliseconds()).to.equal(d1.getMilliseconds());

    d0 = toDate(2010, 2, 23, 11, 22, 33);
    var d1 = new Date(2010, 2, 23, 11, 22, 33, 0);
    expect(d0.getFullYear()).to.equal(d1.getFullYear());
    expect(d0.getMonth()).to.equal(d1.getMonth());
    expect(d0.getDate()).to.equal(d1.getDate());
    expect(d0.getMinutes()).to.equal(d1.getMinutes());
    expect(d0.getSeconds()).to.equal(d1.getSeconds());
    expect(d0.getMilliseconds()).to.equal(d1.getMilliseconds());
  });

  it('Should set the current values to elements which are not specified and' +
  '\n\tleading elements are nullish', function() {
    var d0 = toDate(null, 3);
    var d1 = new Date();
    d1 = new Date(d1.getFullYear(), 3, 1, 0, 0, 0, 0);
    expect(d0.getFullYear()).to.equal(d1.getFullYear());
    expect(d0.getMonth()).to.equal(d1.getMonth());
    expect(d0.getDate()).to.equal(d1.getDate());
    expect(d0.getMinutes()).to.equal(d1.getMinutes());
    expect(d0.getSeconds()).to.equal(d1.getSeconds());
    expect(d0.getMilliseconds()).to.equal(d1.getMilliseconds());

    d0 = toDate(null, undefined, 5);
    d1 = new Date();
    d1 = new Date(d1.getFullYear(), d1.getMonth(), 5, 0, 0, 0, 0);
    expect(d0.getFullYear()).to.equal(d1.getFullYear());
    expect(d0.getMonth()).to.equal(d1.getMonth());
    expect(d0.getDate()).to.equal(d1.getDate());
    expect(d0.getMinutes()).to.equal(d1.getMinutes());
    expect(d0.getSeconds()).to.equal(d1.getSeconds());
    expect(d0.getMilliseconds()).to.equal(d1.getMilliseconds());

    d0 = toDate(null, undefined, null, 9);
    d1 = new Date();
    d1 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate(), 9, 0, 0, 0);
    expect(d0.getFullYear()).to.equal(d1.getFullYear());
    expect(d0.getMonth()).to.equal(d1.getMonth());
    expect(d0.getDate()).to.equal(d1.getDate());
    expect(d0.getMinutes()).to.equal(d1.getMinutes());
    expect(d0.getSeconds()).to.equal(d1.getSeconds());
    expect(d0.getMilliseconds()).to.equal(d1.getMilliseconds());

    d0 = toDate(null, undefined, null, null, 19);
    d1 = new Date();
    d1 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate(),
      d1.getHours(), 19, 0, 0);
    expect(d0.getFullYear()).to.equal(d1.getFullYear());
    expect(d0.getMonth()).to.equal(d1.getMonth());
    expect(d0.getDate()).to.equal(d1.getDate());
    expect(d0.getMinutes()).to.equal(d1.getMinutes());
    expect(d0.getSeconds()).to.equal(d1.getSeconds());
    expect(d0.getMilliseconds()).to.equal(d1.getMilliseconds());

    d0 = toDate(null, undefined, null, null, undefined, null, 50);
    d1 = new Date();
    d1 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate(),
      d1.getHours(), d1.getMinutes(), d1.getSeconds(), 50);
    expect(d0.getFullYear()).to.equal(d1.getFullYear());
    expect(d0.getMonth()).to.equal(d1.getMonth());
    expect(d0.getDate()).to.equal(d1.getDate());
    expect(d0.getMinutes()).to.equal(d1.getMinutes());
    expect(d0.getSeconds()).to.equal(d1.getSeconds());
    expect(d0.getMilliseconds()).to.equal(d1.getMilliseconds());
  });

  it('Should be able to specify a year before 1900', function() {
    var d0 = toDate(123, 10, 23);
    var d1 = new Date(1900, 10, 23);
    d1.setFullYear(123);
    expect(d0.getFullYear()).to.equal(d1.getFullYear());
    expect(d0.getMonth()).to.equal(d1.getMonth());
    expect(d0.getDate()).to.equal(d1.getDate());
    expect(d0.getMinutes()).to.equal(d1.getMinutes());
    expect(d0.getSeconds()).to.equal(d1.getSeconds());
    expect(d0.getMilliseconds()).to.equal(d1.getMilliseconds());
  });

});
