'use strict';

var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');

var newDate = require('./new-date');

function fromYyyymmddhhmmss(text) {
  if (!isString(text)) {
    return null;
  }

  /* eslint-disable max-len */
  var result = /^([0-9]{4})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})$/.exec(text);
  /* eslint-enable max-len */

  if (!result) {
    return null;
  }

  var year = parseInt(result[1], 10);
  var month = parseInt(result[2], 10);
  var day = parseInt(result[3], 10);
  var hour = parseInt(result[4], 10);
  var minute = parseInt(result[5], 10);
  var second = parseInt(result[6], 10);

  var date = newDate(year, month - 1, day, hour, minute, second);
  /* istanbul ignore if */
  if (!isValidDate(date)) {
    return null;
  }
  return date;
}

module.exports = fromYyyymmddhhmmss;
