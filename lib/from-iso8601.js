'use strict';

var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');

var newDate = require('./new-date');

function fromIso8601(text) {
  if (!isString(text)) {
    return null;
  }

  var result;

  result = fromExtendedCalendarDate(text);
  if (result === result) {
    return result;
  }

  result = fromExtendedOrdinalDate(text);
  if (result === result) {
    return result;
  }

  result = fromExtendedWeekDate(text);
  if (result === result) {
    return result;
  }

  result = fromBasicCalendarDate(text);
  if (result === result) {
    return result;
  }

  result = fromBasicOrdinalDate(text);
  if (result === result) {
    return result;
  }

  result = fromBasicWeekDate(text);
  if (result === result) {
    return result;
  }

  return null;
}

/* time = [hour, minute, second], zone = [zone, sign, hour, minute] */
function parseBasicZone(time, zone) {
  var tz = newDate().getTimezoneOffset();
  var tzMinute = tz % 60;
  var tzHour = (tz - tzMinute) / 60;

  time[0] -= tzHour;
  time[1] -= tzMinute;

  if (zone[0] !== 'Z') {
    var zSign = (zone[1] === '-') ? -1 : 1;
    var zHour = parseInt(zone[2], 10) * zSign;
    var zMinute = zone[3] ? parseInt(zone[3], 10) * zSign : 0;

    time[0] -= zHour;
    time[1] -= zMinute;
  }
}
function parseExtendedZone(time, zone) {
  var tz = newDate().getTimezoneOffset();
  var tzMinute = tz % 60;
  var tzHour = (tz - tzMinute) / 60;

  time[0] -= tzHour;
  time[1] -= tzMinute;

  if (zone[0] !== 'Z') {
    var zSign = (zone[1] === '-') ? -1 : 1;
    var zHour = parseInt(zone[2], 10) * zSign;
    var zMinute = zone[3] ? parseInt(zone[3].slice(1), 10) * zSign : 0;

    time[0] -= zHour;
    time[1] -= zMinute;
  }
}

function fromExtendedCalendarDate(text) {
  /* eslint-disable max-len */
  var result = /^([\+\-][0-9]{4,}|[0-9]{4})-([0-9]{2})-([0-9]{2})(T([0-9]{2}):([0-9]{2}):([0-9]{2})(Z|([\+\-])([0-9]{2})(:[0-9]{2})?|))?$/.exec(text);
  /* eslint-enable max-len */
  if (!result) {
    return NaN;
  }

  var ymd = [
    parseInt(result[1], 10),
    parseInt(result[2], 10),
    parseInt(result[3], 10),
  ];

  var tms = [0, 0, 0];
  if (result[4]) {
    tms[0] = parseInt(result[5], 10);
    tms[1] = parseInt(result[6], 10);
    tms[2] = parseInt(result[7], 10);

    if (result[8]) {
      parseExtendedZone(tms, result.slice(8));
    }
  }

  var date = newDate(ymd[0], ymd[1] - 1, ymd[2], tms[0], tms[1], tms[2]);
  /* istanbul ignore if */
  if (!isValidDate(date)) {
    return null;
  }
  return date;
}

function fromExtendedOrdinalDate(text) {
  /* eslint-disable max-len */
  var result = /^([\+\-][0-9]{4,}|[0-9]{4})-([0-9]{3})(T([0-9]{2}):([0-9]{2}):([0-9]{2})(Z|([\+\-])([0-9]{2})(:[0-9]{2})?|))?$/.exec(text);
  /* eslint-enable max-len */
  if (!result) {
    return NaN;
  }

  var yd = [
    parseInt(result[1], 10),
    parseInt(result[2], 10),
  ];

  var tms = [0, 0, 0];
  if (result[3]) {
    tms[0] = parseInt(result[4], 10);
    tms[1] = parseInt(result[5], 10);
    tms[2] = parseInt(result[6], 10);

    if (result[7]) {
      parseExtendedZone(tms, result.slice(7));
    }
  }

  var date = newDate(yd[0], 0, yd[1], tms[0], tms[1], tms[2]);
  /* istanbul ignore if */
  if (!isValidDate(date)) {
    return null;
  }
  return date;
}

function fromExtendedWeekDate(text) {
  /* eslint-disable max-len */
  var result = /^([\+\-][0-9]{4,}|[0-9]{4})-W([0-9]{2})-([0-9]{1})(T([0-9]{2}):([0-9]{2}):([0-9]{2})(Z|([\+\-])([0-9]{2})(:[0-9]{2})?|))?$/.exec(text);
  /* eslint-enable max-len */
  if (!result) {
    return NaN;
  }

  var ywd = [
    parseInt(result[1], 10),
    parseInt(result[2], 10),
    parseInt(result[3], 10),
  ];

  var tms = [0, 0, 0];
  if (result[4]) {
    tms[0] = parseInt(result[5], 10);
    tms[1] = parseInt(result[6], 10);
    tms[2] = parseInt(result[7], 10);

    if (result[8]) {
      parseExtendedZone(tms, result.slice(8));
    }
  }

  var firstWeek = newDate(ywd[0], 0, 1).getDay();
  var day = (ywd[1] - 1) * 7 + ywd[2] - firstWeek + 1;

  var date = newDate(ywd[0], 0, day, tms[0], tms[1], tms[2]);
  /* istanbul ignore if */
  if (!isValidDate(date)) {
    return null;
  }
  return date;
}

function fromBasicCalendarDate(text) {
  /* eslint-disable max-len */
  var result = /^([\+\-][0-9]{4,}|[0-9]{4})([0-9]{2})([0-9]{2})(T([0-9]{2})([0-9]{2})([0-9]{2})(Z|([\+\-])([0-9]{2})([0-9]{2})?|))?$/.exec(text);
  /* eslint-enable max-len */
  if (!result) {
    return NaN;
  }

  var ymd = [
    parseInt(result[1], 10),
    parseInt(result[2], 10),
    parseInt(result[3], 10),
  ];

  var tms = [0, 0, 0];
  if (result[4]) {
    tms[0] = parseInt(result[5], 10);
    tms[1] = parseInt(result[6], 10);
    tms[2] = parseInt(result[7], 10);

    if (result[8]) {
      parseBasicZone(tms, result.slice(8));
    }
  }

  var date = newDate(ymd[0], ymd[1] - 1, ymd[2], tms[0], tms[1], tms[2]);
  /* istanbul ignore if */
  if (!isValidDate(date)) {
    return null;
  }
  return date;
}

function fromBasicOrdinalDate(text) {
  /* eslint-disable max-len */
  var result = /^([\+\-][0-9]{4,}|[0-9]{4})([0-9]{3})(T([0-9]{2})([0-9]{2})([0-9]{2})(Z|([\+\-])([0-9]{2})([0-9]{2})?|))?$/.exec(text);
  /* eslint-enable max-len */
  if (!result) {
    return NaN;
  }

  var yd = [
    parseInt(result[1], 10),
    parseInt(result[2], 10),
  ];

  var tms = [0, 0, 0];
  if (result[3]) {
    tms[0] = parseInt(result[4], 10);
    tms[1] = parseInt(result[5], 10);
    tms[2] = parseInt(result[6], 10);

    if (result[7]) {
      parseBasicZone(tms, result.slice(7));
    }
  }

  var date = newDate(yd[0], 0, yd[1], tms[0], tms[1], tms[2]);
  /* istanbul ignore if */
  if (!isValidDate(date)) {
    return null;
  }
  return date;
}

function fromBasicWeekDate(text) {
  /* eslint-disable max-len */
  var result = /^([\+\-][0-9]{4,}|[0-9]{4})W([0-9]{2})([0-9]{1})(T([0-9]{2})([0-9]{2})([0-9]{2})(Z|([\+\-])([0-9]{2})([0-9]{2})?|))?$/.exec(text);
  /* eslint-enable max-len */
  if (!result) {
    return NaN;
  }

  var ywd = [
    parseInt(result[1], 10),
    parseInt(result[2], 10),
    parseInt(result[3], 10),
  ];

  var tms = [0, 0, 0];
  if (result[4]) {
    tms[0] = parseInt(result[5], 10);
    tms[1] = parseInt(result[6], 10);
    tms[2] = parseInt(result[7], 10);

    if (result[8]) {
      parseBasicZone(tms, result.slice(8));
    }
  }

  var firstWeek = newDate(ywd[0], 0, 1).getDay();
  var day = (ywd[1] - 1) * 7 + ywd[2] - firstWeek + 1;

  var date = newDate(ywd[0], 0, day, tms[0], tms[1], tms[2]);
  /* istanbul ignore if */
  if (!isValidDate(date)) {
    return null;
  }
  return date;
}

module.exports = fromIso8601;
