(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g=(g.fav||(g.fav = {}));g=(g.type||(g.type = {}));g.toDate = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var newDate = require('./lib/new-date');
var fromHyphenedYmd = require('./lib/from-hyphened-ymd');
var fromHyphenedYmdAndHms = require('./lib/from-hyphened-ymd-and-hms');
var fromSlashedYmd = require('./lib/from-slashed-ymd');
var fromSlashedYmdAndHms = require('./lib/from-slashed-ymd-and-hms');
var fromYymmdd = require('./lib/from-yymmdd');
var fromYyyymmdd = require('./lib/from-yyyymmdd');
var fromYymmddhhmmss = require('./lib/from-yymmddhhmmss');
var fromYyyymmddhhmmss = require('./lib/from-yyyymmddhhmmss');
var fromRfc2822 = require('./lib/from-rfc2822');
var fromRfc3339 = require('./lib/from-rfc3339');
var fromIso8601 = require('./lib/from-iso8601');

var toDate = newDate;

Object.defineProperties(toDate, {
  'Y-M-D': { enumerable: true, value: fromHyphenedYmd },
  'Y-M-D H:m:s': { enumerable: true, value: fromHyphenedYmdAndHms },
  'Y/M/D': { enumerable: true, value: fromSlashedYmd },
  'Y/M/D H:m:s': { enumerable: true, value: fromSlashedYmdAndHms },
  'YYMMDD': { enumerable: true, value: fromYymmdd },
  'YYYYMMDD': { enumerable: true, value: fromYyyymmdd },
  'YYMMDDHHmmss': { enumerable: true, value: fromYymmddhhmmss },
  'YYYYMMDDHHmmss': { enumerable: true, value: fromYyyymmddhhmmss },
  'RFC2822': { enumerable: true, value: fromRfc2822 },
  'RFC3339': { enumerable: true, value: fromRfc3339 },
  'ISO8601': { enumerable: true, value: fromIso8601 },
});

module.exports = toDate;

},{"./lib/from-hyphened-ymd":3,"./lib/from-hyphened-ymd-and-hms":2,"./lib/from-iso8601":4,"./lib/from-rfc2822":5,"./lib/from-rfc3339":6,"./lib/from-slashed-ymd":8,"./lib/from-slashed-ymd-and-hms":7,"./lib/from-yymmdd":9,"./lib/from-yymmddhhmmss":10,"./lib/from-yyyymmdd":11,"./lib/from-yyyymmddhhmmss":12,"./lib/new-date":13}],2:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');

var newDate = require('./new-date');

function fromHyphenedYmdAndHms(text) {
  if (!isString(text)) {
    return null;
  }

  /* eslint-disable max-len */
  var result = /^([\+\-]?[0-9]+)-([0-9]+)-([0-9]+)\s+([0-9]+):([0-9]+):([0-9]+)(\.[0-9]+){0,1}$/.exec(text);
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

  var millis;
  if (result[7]) {
    millis = parseInt((result[7].slice(1) + '000').slice(0, 3), 10);
  } else {
    millis = 0;
  }

  var date = newDate(year, month - 1, day, hour, minute, second, millis);
  return isValidDate(date) ? date : null;
}

module.exports = fromHyphenedYmdAndHms;

},{"./new-date":13,"@fav/type.is-string":14,"@fav/type.is-valid-date":15}],3:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');

var newDate = require('./new-date');

function fromHyphenedYmd(text) {
  if (!isString(text)) {
    return null;
  }

  var result = /^([\+\-]?[0-9]+)-([0-9]+)-([0-9]+)$/.exec(text);
  if (!result) {
    return null;
  }

  var year = parseInt(result[1], 10);
  var month = parseInt(result[2], 10);
  var day = parseInt(result[3], 10);

  var date = newDate(year, month - 1, day);
  return isValidDate(date) ? date : null;
}

module.exports = fromHyphenedYmd;

},{"./new-date":13,"@fav/type.is-string":14,"@fav/type.is-valid-date":15}],4:[function(require,module,exports){
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

},{"./new-date":13,"@fav/type.is-string":14,"@fav/type.is-valid-date":15}],5:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');

function fromRfc2822(text) {
  if (!isString(text)) {
    return null;
  }

  /* eslint-disable max-len */
  var result = /^\s*(Mon,\s*|Tue,\s*|Wed,\s*|Thu,\s*|Fri,\s*|Sat,\s*|Sun,\s*|)([0-9]{1,2})\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+([0-9]{4,})\s+([0-9]{2}):([0-9]{2}):([0-9]{2})\s+([\+\-])([0-9]{2})([0-9]{2})\s*$/.exec(text);
  /* eslint-enable max-len */

  if (!result) {
    return null;
  }

  var year = parseInt(result[4], 10);
  var month;
  switch (result[3]) {
    case 'Jan': { month = 0; break; }
    case 'Feb': { month = 1; break; }
    case 'Mar': { month = 2; break; }
    case 'Apr': { month = 3; break; }
    case 'May': { month = 4; break; }
    case 'Jun': { month = 5; break; }
    case 'Jul': { month = 6; break; }
    case 'Aug': { month = 7; break; }
    case 'Sep': { month = 8; break; }
    case 'Oct': { month = 9; break; }
    case 'Nov': { month = 10; break; }
    case 'Dec': { month = 11; break; }
  }
  var day = parseInt(result[2], 10);
  var hour = parseInt(result[5], 10);
  var minute = parseInt(result[6], 10);
  var second = parseInt(result[7], 10);

  var zoneSign = result[8] === '-' ? -1 : 1;
  var zoneHour = parseInt(result[9], 10) * zoneSign;
  var zoneMinute = parseInt(result[10], 10) * zoneSign;

  var tz = new Date().getTimezoneOffset();
  var tzMinute = tz % 60;
  var tzHour = (tz - tzMinute) / 60;

  hour -= zoneHour + tzHour;
  minute -= zoneMinute + tzMinute;

  var date = new Date(year, month, day, hour, minute, second);
  if (!isValidDate(date)) {
    return null;
  }
  return date;
}

module.exports = fromRfc2822;

},{"@fav/type.is-string":14,"@fav/type.is-valid-date":15}],6:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');

var newDate = require('./new-date');

function fromRfc3339(text) {
  if (!isString(text)) {
    return null;
  }

  /* eslint-disable max-len */
  var result = /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(\.[0-9]+)?(Z|([\+\-])([0-9]{2}):([0-9]{2}))$/.exec(text);
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

  var millis;
  if (result[7]) {
    millis = result[7].slice(1, 4);
    millis += '000'.slice(millis.length);
    millis = parseInt(millis, 10);
  } else {
    millis = 0;
  }

  var zone = result[8];

  if (zone !== 'Z') {
    var zoneSign = (result[9] === '-') ? -1 : 1;
    hour -= parseInt(result[10], 10) * zoneSign;
    minute -= parseInt(result[11], 10) * zoneSign;
  }

  var tz = newDate().getTimezoneOffset();
  var tzMinute = tz % 60;
  var tzHour = (tz - tzMinute) / 60;
  hour -= tzHour;
  minute -= tzMinute;

  var date = newDate(year, month - 1, day, hour, minute, second, millis);
  /* istanbul ignore if */
  if (!isValidDate(date)) {
    return null;
  }
  return date;
}

module.exports = fromRfc3339;

},{"./new-date":13,"@fav/type.is-string":14,"@fav/type.is-valid-date":15}],7:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');

var newDate = require('./new-date');

function fromHyphenedYmdAndHms(text) {
  if (!isString(text)) {
    return null;
  }

  /* eslint-disable max-len */
  var result = /^([\+\-]?[0-9]+)\/([0-9]+)\/([0-9]+)\s+([0-9]+):([0-9]+):([0-9]+)(\.[0-9]+){0,1}$/.exec(text);
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

  var millis;
  if (result[7]) {
    millis = parseInt((result[7].slice(1) + '000').slice(0, 3), 10);
  } else {
    millis = 0;
  }

  var date = newDate(year, month - 1, day, hour, minute, second, millis);
  return isValidDate(date) ? date : null;
}

module.exports = fromHyphenedYmdAndHms;

},{"./new-date":13,"@fav/type.is-string":14,"@fav/type.is-valid-date":15}],8:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');

var newDate = require('./new-date');

function fromSlashedYmd(text) {
  if (!isString(text)) {
    return null;
  }

  var result = /^([\+\-]?[0-9]+)\/([0-9]+)\/([0-9]+)$/.exec(text);

  if (!result) {
    return null;
  }

  var year = parseInt(result[1], 10);
  var month = parseInt(result[2], 10);
  var day = parseInt(result[3], 10);

  var date = newDate(year, month - 1, day);
  return isValidDate(date) ? date : null;
}

module.exports = fromSlashedYmd;

},{"./new-date":13,"@fav/type.is-string":14,"@fav/type.is-valid-date":15}],9:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');

var newDate = require('./new-date');

function fromYymmdd(text) {
  if (!isString(text)) {
    return null;
  }

  var result = /^([0-9]{2})([0-9]{2})([0-9]{2})$/.exec(text);

  if (!result) {
    return null;
  }

  var year = parseInt(result[1], 10);
  var month = parseInt(result[2], 10);
  var day = parseInt(result[3], 10);

  var currentYear = newDate().getFullYear();
  year = currentYear - (currentYear % 100) + year;
  if (year >= currentYear + 50) {
    year -= 100;
  }

  var date = newDate(year, month - 1, day);
  /* istanbul ignore if */
  if (!isValidDate(date)) {
    return null;
  }
  return date;
}

module.exports = fromYymmdd;

},{"./new-date":13,"@fav/type.is-string":14,"@fav/type.is-valid-date":15}],10:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');

var newDate = require('./new-date');

function fromYymmddhhmmss(text) {
  if (!isString(text)) {
    return null;
  }

  /* eslint-disable max-len */
  var result = /^([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})$/.exec(text);
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

  var currentYear = newDate().getFullYear();
  year = currentYear - (currentYear % 100) + year;
  if (year >= currentYear + 50) {
    year -= 100;
  }

  var date = newDate(year, month - 1, day, hour, minute, second);
  /* istanbul ignore if */
  if (!isValidDate(date)) {
    return null;
  }
  return date;
}

module.exports = fromYymmddhhmmss;

},{"./new-date":13,"@fav/type.is-string":14,"@fav/type.is-valid-date":15}],11:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');

var newDate = require('./new-date');

function fromYyyymmdd(text) {
  if (!isString(text)) {
    return null;
  }

  var result = /^([0-9]{4})([0-9]{2})([0-9]{2})$/.exec(text);

  if (!result) {
    return null;
  }

  var year = parseInt(result[1], 10);
  var month = parseInt(result[2], 10);
  var day = parseInt(result[3], 10);

  var date = newDate(year, month - 1, day);
  /* istanbul ignore if */
  if (!isValidDate(date)) {
    return null;
  }
  return date;
}

module.exports = fromYyyymmdd;

},{"./new-date":13,"@fav/type.is-string":14,"@fav/type.is-valid-date":15}],12:[function(require,module,exports){
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

},{"./new-date":13,"@fav/type.is-string":14,"@fav/type.is-valid-date":15}],13:[function(require,module,exports){
'use strict';

function setDate(now, year, month, day, hour, min, sec, msec) {
  var existsLeadingElements = false;

  if (year != null) {
    existsLeadingElements = true;
  } else {
    year = now.getFullYear();
  }

  if (month != null) {
    existsLeadingElements = true;
  } else if (existsLeadingElements) {
    month = 0;
  } else {
    month = now.getMonth();
  }

  if (day != null) {
    existsLeadingElements = true;
  } else if (existsLeadingElements) {
    day = 1;
  } else {
    day = now.getDate();
  }

  if (hour != null) {
    existsLeadingElements = true;
  } else if (existsLeadingElements) {
    hour = 0;
  } else {
    hour = now.getHours();
  }

  if (min != null) {
    existsLeadingElements = true;
  } else if (existsLeadingElements) {
    min = 0;
  } else {
    min = now.getMinutes();
  }

  if (sec != null) {
    existsLeadingElements = true;
  } else if (existsLeadingElements) {
    sec = 0;
  } else {
    sec = now.getSeconds();
  }

  if (msec != null) {
    existsLeadingElements = true;
  } else if (existsLeadingElements) {
    msec = 0;
  } else {
    msec = now.getMilliseconds();
  }

  // Setting day to 2 is intentional.
  // If day is 1, date can become 12/31 by a locale.
  // After this, if month is set to a month which doesn't have 31 day,
  // the month becomes +1 automatically.
  var date = new Date(1900, 0, 2, 0, 0, 0);

  date.setFullYear(year);
  date.setMonth(month);
  date.setDate(day);
  date.setHours(hour);
  date.setMinutes(min);
  date.setSeconds(sec);
  date.setMilliseconds(msec);
  return date;
}

function newDate(year, month, day, hour, min, sec, msec) {
  return setDate(new Date(), year, month, day, hour, min, sec, msec);
}

newDate.setDate = setDate;

module.exports = newDate;

},{}],14:[function(require,module,exports){
'use strict';

function isString(value) {
  if (typeof value === 'string') {
    return true;
  }
  if (Object.prototype.toString.call(value) === '[object String]') {
    return true;
  }
  return false;
}

function isNotString(value) {
  return !isString(value);
}

Object.defineProperty(isString, 'not', {
  enumerable: true,
  value: isNotString,
});

module.exports = isString;

},{}],15:[function(require,module,exports){
'use strict';

function isValidDate(value) {
  if (!(value instanceof Date)) {
    return false;
  }

  var time = value.getTime();
  return time === time;
}

function isNotValidDate(value) {
  return !isValidDate(value);
}

Object.defineProperty(isValidDate, 'not', {
  enumerable: true,
  value: isNotValidDate,
});

module.exports = isValidDate;

},{}]},{},[1])(1)
});
