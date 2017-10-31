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
