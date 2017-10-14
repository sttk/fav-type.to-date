(function(){
'use strict';


var expect = chai.expect;


var toDate = fav.type.toDate['Y-M-D H:m:s'];

describe('fav.type.toDate["Y-M-D H:m:s"]', function() {

  it('Should return a date object if value is normal', function() {
    expect(toDate('2017-09-21 19:23:01'))
      .to.eql(new Date(2017, 8, 21, 19, 23, 1));
    expect(toDate('2017-09-21 9:03:01.5'))
      .to.eql(new Date(2017, 8, 21, 9, 3, 1, 500));
    expect(toDate('123-4-5 10:20:30.40'))
      .to.eql(new Date(123, 3, 5, 10, 20, 30, 400));
    expect(toDate('-99-9-9 1:2:3'))
      .to.eql(new Date(-99, 8, 9, 1, 2, 3));
    expect(toDate('+99-9-9 23:59:59.99999'))
      .to.eql(new Date(99, 8, 9, 23, 59, 59, 999));
    expect(toDate('2017-13-21 00:00:00'))
      .to.eql(new Date(2018, 0, 21, 0, 0, 0));
    expect(toDate('2017-09-31    01:23:45.678'))
      .to.eql(new Date(2017, 9, 1, 1, 23, 45, 678));
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('')).to.equal(null);
    expect(toDate('-')).to.equal(null);
    expect(toDate('+')).to.equal(null);
    expect(toDate('2017')).to.equal(null);
    expect(toDate('2017-09')).to.equal(null);
    expect(toDate('2017-09-')).to.equal(null);
    expect(toDate('2017-09-01')).to.equal(null);
    expect(toDate('2017-09-01 11')).to.equal(null);
    expect(toDate('2017-09-01 11:')).to.equal(null);
    expect(toDate('2017-09-01 11:22')).to.equal(null);
    expect(toDate('2017-09-01 11:22:')).to.equal(null);
    expect(toDate('2017-09-01 11:22:33.')).to.equal(null);
    expect(toDate('2017-09-01 11:22:A')).to.equal(null);
    expect(toDate('2017-09-0111:22:33')).to.equal(null);
    expect(toDate('20170921223311')).to.equal(null);
    expect(toDate('２０１７-９-２１ １１:２２:３３')).to.equal(null);
    expect(toDate('2017/09/21 11:22:33')).to.equal(null);
    expect(toDate('9999999-09-21 11:22:33')).to.equal(null);
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

})();
(function(){
'use strict';


var expect = chai.expect;


var toDate = fav.type.toDate['Y-M-D'];

describe('fav.type.toDate["Y-M-D"]', function() {

  it('Should return a date object if value is normal', function() {
    expect(toDate('2017-09-21')).to.eql(new Date(2017, 8, 21));
    expect(toDate('123-4-5')).to.eql(new Date(123, 3, 5));
    expect(toDate('-99-9-9')).to.eql(new Date(-99, 8, 9));
    expect(toDate('+99-9-9')).to.eql(new Date(99, 8, 9));
    expect(toDate('2017-13-21')).to.eql(new Date(2018, 0, 21));
    expect(toDate('2017-09-31')).to.eql(new Date(2017, 9, 1));
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

})();
(function(){
'use strict';


var expect = chai.expect;


var toDate = fav.type.toDate.ISO8601;

var tz = new Date().getTimezoneOffset();
var tzM = tz % 60;
var tzH = (tz - tzM) / 60;

describe('fav.type.toDate["ISO8601"]', function() {

  it('Should return a date object if format is basic calendar date',
  function() {
    expect(toDate('19850412'))
      .to.eql(new Date(1985, 3, 12));
    expect(toDate('19850412T101530'))
      .to.eql(new Date(1985, 3, 12, 10, 15, 30));
    expect(toDate('19850412T101530Z'))
      .to.eql(new Date(1985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('19850412T101530+09'))
      .to.eql(new Date(1985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('19850412T101530+0910'))
      .to.eql(new Date(1985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('19850412T101530-09'))
      .to.eql(new Date(1985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('19850412T101530-0910'))
      .to.eql(new Date(1985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is expanded basic calendar date',
  function() {
    expect(toDate('+119850412'))
      .to.eql(new Date(11985, 3, 12));
    expect(toDate('+119850412T101530Z'))
      .to.eql(new Date(11985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('+119850412T101530+09'))
      .to.eql(new Date(11985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('+119850412T101530+0910'))
      .to.eql(new Date(11985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('+119850412T101530-09'))
      .to.eql(new Date(11985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('+119850412T101530-0910'))
      .to.eql(new Date(11985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));

    expect(toDate('-219850412'))
      .to.eql(new Date(-21985, 3, 12));
    expect(toDate('-219850412T101530Z'))
      .to.eql(new Date(-21985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('-219850412T101530+09'))
      .to.eql(new Date(-21985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('-219850412T101530+0910'))
      .to.eql(new Date(-21985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('-219850412T101530-09'))
      .to.eql(new Date(-21985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('-219850412T101530-0910'))
      .to.eql(new Date(-21985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is basic ordinal date',
  function() {
    expect(toDate('1985102'))
      .to.eql(new Date(1985, 3, 12));
    expect(toDate('1985102T101530'))
      .to.eql(new Date(1985, 3, 12, 10, 15, 30));
    expect(toDate('1985102T101530Z'))
      .to.eql(new Date(1985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('1985102T101530+09'))
      .to.eql(new Date(1985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('1985102T101530+0910'))
      .to.eql(new Date(1985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('1985102T101530-09'))
      .to.eql(new Date(1985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('1985102T101530-0910'))
      .to.eql(new Date(1985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
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
      .to.eql(new Date(1985, 3, 12));
    expect(toDate('1985W155T101530'))
      .to.eql(new Date(1985, 3, 12, 10, 15, 30));
    expect(toDate('1985W155T101530Z'))
      .to.eql(new Date(1985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('1985W155T101530+09'))
      .to.eql(new Date(1985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('1985W155T101530+0910'))
      .to.eql(new Date(1985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('1985W155T101530-09'))
      .to.eql(new Date(1985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('1985W155T101530-0910'))
      .to.eql(new Date(1985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is expanded basic week date',
  function() {
    expect(toDate('+11985W155'))
      .to.eql(new Date(11985, 3, 12));
    expect(toDate('+11985W155T101530'))
      .to.eql(new Date(11985, 3, 12, 10, 15, 30));
    expect(toDate('+11985W155T101530Z'))
      .to.eql(new Date(11985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('+11985W155T101530+09'))
      .to.eql(new Date(11985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('+11985W155T101530+0910'))
      .to.eql(new Date(11985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('+11985W155T101530-09'))
      .to.eql(new Date(11985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('+11985W155T101530-0910'))
      .to.eql(new Date(11985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));

    expect(toDate('-11985W155'))
      .to.eql(new Date(-11985, 3, 10));
    expect(toDate('-11985W155T101530'))
      .to.eql(new Date(-11985, 3, 10, 10, 15, 30));
    expect(toDate('-11985W155T101530Z'))
      .to.eql(new Date(-11985, 3, 10, 10 - tzH, 15 - tzM, 30));
    expect(toDate('-11985W155T101530+09'))
      .to.eql(new Date(-11985, 3, 10, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('-11985W155T101530+0910'))
      .to.eql(new Date(-11985, 3, 10, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('-11985W155T101530-09'))
      .to.eql(new Date(-11985, 3, 10, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('-11985W155T101530-0910'))
      .to.eql(new Date(-11985, 3, 10, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is extended calendar date',
  function() {
    expect(toDate('1985-04-12'))
      .to.eql(new Date(1985, 3, 12));
    expect(toDate('1985-04-12T10:15:30'))
      .to.eql(new Date(1985, 3, 12, 10, 15, 30));
    expect(toDate('1985-04-12T10:15:30Z'))
      .to.eql(new Date(1985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('1985-04-12T10:15:30+09'))
      .to.eql(new Date(1985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('1985-04-12T10:15:30+09:10'))
      .to.eql(new Date(1985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('1985-04-12T10:15:30-09'))
      .to.eql(new Date(1985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('1985-04-12T10:15:30-09:10'))
      .to.eql(new Date(1985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is expanded extended calendar ' +
  'date', function() {
    expect(toDate('+11985-04-12'))
      .to.eql(new Date(11985, 3, 12));
    expect(toDate('+11985-04-12T10:15:30'))
      .to.eql(new Date(11985, 3, 12, 10, 15, 30));
    expect(toDate('+11985-04-12T10:15:30Z'))
      .to.eql(new Date(11985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('+11985-04-12T10:15:30+09'))
      .to.eql(new Date(11985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('+11985-04-12T10:15:30+09:10'))
      .to.eql(new Date(11985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('+11985-04-12T10:15:30-09'))
      .to.eql(new Date(11985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('+11985-04-12T10:15:30-09:10'))
      .to.eql(new Date(11985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));

    expect(toDate('-11985-04-12'))
      .to.eql(new Date(-11985, 3, 12));
    expect(toDate('-11985-04-12T10:15:30'))
      .to.eql(new Date(-11985, 3, 12, 10, 15, 30));
    expect(toDate('-11985-04-12T10:15:30Z'))
      .to.eql(new Date(-11985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('-11985-04-12T10:15:30+09'))
      .to.eql(new Date(-11985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('-11985-04-12T10:15:30+09:10'))
      .to.eql(new Date(-11985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('-11985-04-12T10:15:30-09'))
      .to.eql(new Date(-11985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('-11985-04-12T10:15:30-09:10'))
      .to.eql(new Date(-11985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is extended ordinal date',
  function() {
    expect(toDate('1985-102'))
      .to.eql(new Date(1985, 3, 12));
    expect(toDate('1985-102T10:15:30'))
      .to.eql(new Date(1985, 3, 12, 10, 15, 30));
    expect(toDate('1985-102T10:15:30Z'))
      .to.eql(new Date(1985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('1985-102T10:15:30+09'))
      .to.eql(new Date(1985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('1985-102T10:15:30+09:10'))
      .to.eql(new Date(1985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('1985-102T10:15:30-09'))
      .to.eql(new Date(1985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('1985-102T10:15:30-09:10'))
      .to.eql(new Date(1985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is expanded extended ordinal date',
  function() {
    expect(toDate('+11985-102'))
      .to.eql(new Date(11985, 3, 12));
    expect(toDate('+11985-102T10:15:30'))
      .to.eql(new Date(11985, 3, 12, 10, 15, 30));
    expect(toDate('+11985-102T10:15:30Z'))
      .to.eql(new Date(11985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('+11985-102T10:15:30+09'))
      .to.eql(new Date(11985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('+11985-102T10:15:30+09:10'))
      .to.eql(new Date(11985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('+11985-102T10:15:30-09'))
      .to.eql(new Date(11985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('+11985-102T10:15:30-09:10'))
      .to.eql(new Date(11985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));

    expect(toDate('-11985-102'))
      .to.eql(new Date(-11985, 3, 12));
    expect(toDate('-11985-102T10:15:30'))
      .to.eql(new Date(-11985, 3, 12, 10, 15, 30));
    expect(toDate('-11985-102T10:15:30Z'))
      .to.eql(new Date(-11985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('-11985-102T10:15:30+09'))
      .to.eql(new Date(-11985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('-11985-102T10:15:30+09:10'))
      .to.eql(new Date(-11985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('-11985-102T10:15:30-09'))
      .to.eql(new Date(-11985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('-11985-102T10:15:30-09:10'))
      .to.eql(new Date(-11985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is extended week date',
  function() {
    expect(toDate('1985-W15-5'))
      .to.eql(new Date(1985, 3, 12));
    expect(toDate('1985-W15-5T10:15:30'))
      .to.eql(new Date(1985, 3, 12, 10, 15, 30));
    expect(toDate('1985-W15-5T10:15:30Z'))
      .to.eql(new Date(1985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('1985-W15-5T10:15:30+09'))
      .to.eql(new Date(1985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('1985-W15-5T10:15:30+09:10'))
      .to.eql(new Date(1985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('1985-W15-5T10:15:30-09'))
      .to.eql(new Date(1985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('1985-W15-5T10:15:30-09:10'))
      .to.eql(new Date(1985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is expanded extended week date',
  function() {
    expect(toDate('+11985-W15-5'))
      .to.eql(new Date(11985, 3, 12));
    expect(toDate('+11985-W15-5T10:15:30'))
      .to.eql(new Date(11985, 3, 12, 10, 15, 30));
    expect(toDate('+11985-W15-5T10:15:30Z'))
      .to.eql(new Date(11985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('+11985-W15-5T10:15:30+09'))
      .to.eql(new Date(11985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('+11985-W15-5T10:15:30+09:10'))
      .to.eql(new Date(11985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('+11985-W15-5T10:15:30-09'))
      .to.eql(new Date(11985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('+11985-W15-5T10:15:30-09:10'))
      .to.eql(new Date(11985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));

    expect(toDate('-11985-W15-5'))
      .to.eql(new Date(-11985, 3, 10));
    expect(toDate('-11985-W15-5T10:15:30'))
      .to.eql(new Date(-11985, 3, 10, 10, 15, 30));
    expect(toDate('-11985-W15-5T10:15:30Z'))
      .to.eql(new Date(-11985, 3, 10, 10 - tzH, 15 - tzM, 30));
    expect(toDate('-11985-W15-5T10:15:30+09'))
      .to.eql(new Date(-11985, 3, 10, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('-11985-W15-5T10:15:30+09:10'))
      .to.eql(new Date(-11985, 3, 10, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('-11985-W15-5T10:15:30-09'))
      .to.eql(new Date(-11985, 3, 10, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('-11985-W15-5T10:15:30-09:10'))
      .to.eql(new Date(-11985, 3, 10, 10 - tzH + 9, 15 - tzM + 10, 30));
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



})();
(function(){
'use strict';


var expect = chai.expect;


var toDate = fav.type.toDate.RFC2822;

var tz = new Date().getTimezoneOffset();
var tzM = tz % 60;
var tzH = (tz - tzM) / 60;

describe('fav.type.toDate["RFC2822"]', function() {

  it('Should return a date object if value is normal', function() {
    expect(toDate('Tue, 25 Sep 2017 23:15:02 +0000'))
      .to.eql(new Date(2017, 8, 25, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('Tue, 26 Sep 2017 08:15:02 +0900'))
      .to.eql(new Date(2017, 8, 26, 8 - tzH - 9, 15 - tzM, 2, 0));
    expect(toDate('Tue, 26 Sep 2017 08:15:02 -0900'))
      .to.eql(new Date(2017, 8, 26, 8 - tzH + 9, 15 - tzM, 2, 0));
    expect(toDate('  26  Sep  2017  08:15:02   +0900  '))
      .to.eql(new Date(2017, 8, 26, 8 - tzH - 9, 15 - tzM, 2, 0));

    expect(toDate('Mon, 24 Sep 2017 23:15:02 +0000'))
      .to.eql(new Date(2017, 8, 24, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('Tue, 25 Sep 2017 23:15:02 +0000'))
      .to.eql(new Date(2017, 8, 25, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('Wed, 26 Sep 2017 23:15:02 +0000'))
      .to.eql(new Date(2017, 8, 26, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('Thu, 27 Sep 2017 23:15:02 +0000'))
      .to.eql(new Date(2017, 8, 27, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('Fri, 28 Sep 2017 23:15:02 +0000'))
      .to.eql(new Date(2017, 8, 28, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('Sat, 29 Sep 2017 23:15:02 +0000'))
      .to.eql(new Date(2017, 8, 29, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('Sun, 30 Sep 2017 23:15:02 +0000'))
      .to.eql(new Date(2017, 8, 30, 23 - tzH, 15 - tzM, 2, 0));

    expect(toDate('30 Jan 2017 23:15:02 +0000'))
      .to.eql(new Date(2017, 0, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Feb 2017 23:15:02 +0000'))
      .to.eql(new Date(2017, 1, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Mar 2017 23:15:02 +0000'))
      .to.eql(new Date(2017, 2, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Apr 2017 23:15:02 +0000'))
      .to.eql(new Date(2017, 3, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 May 2017 23:15:02 +0000'))
      .to.eql(new Date(2017, 4, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Jun 2017 23:15:02 +0000'))
      .to.eql(new Date(2017, 5, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Jul 2017 23:15:02 +0000'))
      .to.eql(new Date(2017, 6, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Aug 2017 23:15:02 +0000'))
      .to.eql(new Date(2017, 7, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Sep 2017 23:15:02 +0000'))
      .to.eql(new Date(2017, 8, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Oct 2017 23:15:02 +0000'))
      .to.eql(new Date(2017, 9, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Nov 2017 23:15:02 +0000'))
      .to.eql(new Date(2017, 10, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Dec 2017 23:15:02 +0000'))
      .to.eql(new Date(2017, 11, 30, 23 - tzH, 15 - tzM, 2, 0));

    expect(toDate(' Tue, 5 Sep 2017 23:15:02 +0000'))
      .to.eql(new Date(2017, 8, 5, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('Tue, 5 Sep 12017 23:15:02 +0000'))
      .to.eql(new Date(12017, 8, 5, 23 - tzH, 15 - tzM, 2, 0));
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
    expect(toDate(new Date())).to.equal(null);
    expect(toDate(new Error())).to.equal(null);

    if (typeof Symbol === 'function') {
      expect(toDate(Symbol('2017-09-10'))).to.equal(null);
    }
  });
});

})();
(function(){
'use strict';


var expect = chai.expect;


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

})();
(function(){
'use strict';


var expect = chai.expect;


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

})();
(function(){
'use strict';


var expect = chai.expect;


var toDate = fav.type.toDate['Y/M/D'];

describe('fav.type.toDate["Y/M/D"]', function() {

  it('Should return a date object if value is normal', function() {
    expect(toDate('2017/09/21')).to.eql(new Date(2017, 8, 21));
    expect(toDate('123/4/5')).to.eql(new Date(123, 3, 5));
    expect(toDate('-99/9/9')).to.eql(new Date(-99, 8, 9));
    expect(toDate('+99/9/9')).to.eql(new Date(99, 8, 9));
    expect(toDate('2017/13/21')).to.eql(new Date(2018, 0, 21));
    expect(toDate('2017/09/31')).to.eql(new Date(2017, 9, 1));
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('')).to.equal(null);
    expect(toDate('-')).to.equal(null);
    expect(toDate('+')).to.equal(null);
    expect(toDate('2017')).to.equal(null);
    expect(toDate('2017/09')).to.equal(null);
    expect(toDate('2017/09/')).to.equal(null);
    expect(toDate('2017/09/A')).to.equal(null);
    expect(toDate('20170921')).to.equal(null);
    expect(toDate('２０１７/９/２１')).to.equal(null);
    expect(toDate('2017/09/31/')).to.equal(null);
    expect(toDate('2017-09-21')).to.equal(null);
    expect(toDate('9999999/09/21')).to.equal(null);
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

})();
(function(){
'use strict';


var expect = chai.expect;


var toDate = fav.type.toDate['YYMMDD'];

describe('fav.type.toDate["YYMMDD"]', function() {

  it('Should return a date object if value is normal', function() {
    var yyyy = new Date().getFullYear(),
        yy;

    for (var y = yyyy - 50; y < yyyy + 50; y++) {
      yy = String(yyyy).slice(-2);
      expect(toDate(yy + '0101')).to.eql(new Date(yyyy, 0, 1));
      expect(toDate(yy + '0615')).to.eql(new Date(yyyy, 5, 15));
      expect(toDate(yy + '1231')).to.eql(new Date(yyyy, 11, 31));
    }

    yy = String(yyyy + 49).slice(-2);
    expect(toDate(yy + '1231')).to.eql(new Date(yyyy + 49, 11, 31));
    expect(toDate(yy + '1232')).to.eql(new Date(yyyy + 50, 0, 1));

    yy = String(yyyy + 50).slice(-2);
    expect(toDate(yy + '0101')).to.eql(new Date(yyyy - 50, 0, 1));
    expect(toDate(yy + '0100')).to.eql(new Date(yyyy - 51, 11,31));

    expect(toDate('000000')).to.not.equal(null);
    expect(toDate('999999')).to.not.equal(null);
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('')).to.equal(null);
    expect(toDate('17')).to.equal(null);
    expect(toDate('1709')).to.equal(null);
    expect(toDate('17093')).to.equal(null);
    expect(toDate('1709301')).to.equal(null);
    expect(toDate('20170930')).to.equal(null);
    expect(toDate('17-09-30')).to.equal(null);
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
      expect(toDate(Symbol('17-09-10'))).to.equal(null);
    }
  });

});

})();
(function(){
'use strict';


var expect = chai.expect;


var toDate = fav.type.toDate['YYMMDDHHmmss'];

describe('fav.type.toDate["YYMMDDHHmmss"]', function() {

  it('Should return a date object if value is normal', function() {
    var yyyy = new Date().getFullYear(),
        yy;

    for (var y = yyyy - 50; y < yyyy + 50; y++) {
      yy = String(yyyy).slice(-2);
      expect(toDate(yy + '0101000000'))
        .to.eql(new Date(yyyy, 0, 1, 0, 0, 0));
      expect(toDate(yy + '0615123030'))
        .to.eql(new Date(yyyy, 5, 15, 12, 30, 30));
      expect(toDate(yy + '1231235959'))
        .to.eql(new Date(yyyy, 11, 31, 23, 59, 59));
    }

    yy = String(yyyy + 49).slice(-2);
    expect(toDate(yy + '1231235959'))
      .to.eql(new Date(yyyy + 49, 11, 31, 23, 59, 59));
    expect(toDate(yy + '1231235960'))
      .to.eql(new Date(yyyy + 50, 0, 1, 0, 0, 0));

    yy = String(yyyy + 50).slice(-2);
    expect(toDate(yy + '0101000000'))
      .to.eql(new Date(yyyy - 50, 0, 1, 0, 0, 0));
    expect(toDate(yy + '0100235959'))
      .to.eql(new Date(yyyy - 51, 11,31, 23, 59, 59));

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
    expect(toDate(new Date())).to.equal(null);
    expect(toDate(new Error())).to.equal(null);

    if (typeof Symbol === 'function') {
      expect(toDate(Symbol('17-09-10'))).to.equal(null);
    }
  });

});

})();
(function(){
'use strict';


var expect = chai.expect;


var toDate = fav.type.toDate['YYYYMMDD'];

describe('fav.type.toDate["YYYYMMDD"]', function() {

  it('Should return a date object if value is normal', function() {
    expect(toDate('20170923')).to.eql(new Date(2017, 8, 23));
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
    expect(toDate(new Date())).to.equal(null);
    expect(toDate(new Error())).to.equal(null);

    if (typeof Symbol === 'function') {
      expect(toDate(Symbol('2017-09-10'))).to.equal(null);
    }
  });

});

})();
(function(){
'use strict';


var expect = chai.expect;


var toDate = fav.type.toDate['YYYYMMDDHHmmss'];

describe('fav.type.toDate["YYYYMMDDHHmmss"]', function() {

  it('Should return a date object if value is normal', function() {
    expect(toDate('20170923112233'))
      .to.eql(new Date(2017, 8, 23, 11, 22, 33));
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('')).to.equal(null);
    expect(toDate('2017')).to.equal(null);
    expect(toDate('201709')).to.equal(null);
    expect(toDate('2017093')).to.equal(null);
    expect(toDate('2017093011')).to.equal(null);
    expect(toDate('201709301122')).to.equal(null);
    expect(toDate('2017093011223')).to.equal(null);
    expect(toDate('201709301122331')).to.equal(null);
    expect(toDate('170930112233')).to.equal(null);
    expect(toDate('2017-09-30 11:22:33')).to.equal(null);
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

})();
