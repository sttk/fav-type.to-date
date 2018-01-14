# [@fav/type.to-date][repo-url] [![NPM version][npm-img]][npm-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Build Status][appveyor-img]][appveyor-url] [![Coverage status][coverage-img]][coverage-url]

Converts a string in various date format to a date object.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports Node.js >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.

## Install

To install from npm:

```sh
$ npm install --save @fav/type.to-date
```

***NOTE:*** *npm < 2.7.0 does not support scoped package, but even old version Node.js supports it. So when you use such older npm, you should download this package from [github.com][repo-url], and move it in `node_modules/@fav/type.to-date/` directory manually.*

## Usage

For Node.js:

```js
var toDate = require('@fav/type.to-date');

toDate(99, 0, 1).toString(); // => 'Thu Jan 01 0099 00:00:00 GMT+0900 (JST)'

toDate['Y-M-D']('2017-09-30'); // => new Date(2017, 8, 30)
toDate.YYYYMMDDHHmmss('20170930133000'); // => new Date(2017, 8, 30, 13, 30, 0)
toDate.RFC2822('Sat, 30 Sep 2017 13:30:00 +0900'); // => new Date(2017, 8, 30, 13, 30, 0) at Japan
toDate.RFC3339('2017-09-30T13:30:00Z'); // => new Date(2017, 8, 30, 13, 30, 0) in GMT
toDate.ISO8601('2017W406'); // => new Date(2017, 8, 30)
```

For Web browsers:

```html
<script src="fav.type.to-date.min.js"></script>
<script>
var toDate = fav.type.toDate;
toDate(99, 0, 1).toString(); // => 'Thu Jan 01 0099 00:00:00 GMT+0900 (JST)'
toDate['Y-M-D']('2017-09-30'); // => new Date(2017, 8, 30)
</script>
```

## API

### <u>toDate([ year ][, month ][, day ][, hour ][, min ][, sec ][, msec ])  : Date</u>

Creates a Date object which represents a moment in time.

#### Parameters:

| Parameter |  Type  | Description                              |
|-----------|:------:|------------------------------------------|
| year      | number | An integer value represents a full year. This can be specified a year before 1900. (Optional) |
| month     | number | An integer value represents a month, beginning with 0 for January to 11 for December. (Optional) |
| day       | number | An integer value represents a day. (Optional) |
| hour      | number | An integer value represents a hour. (Optional) |
| min       | number | An integer value represents a minute. (Optional) |
| sec       | number | An integer value represents a second. (Optional.) |
| msec      | number | An integer value represents a millisecond. (Optional.) | 

Each element of date and time is set to the first value (zero, or one) if any leading elements are specified but the element is not specified, or is set to the current value if every leading elements and the element are not specified.

#### Returns:

A date object which represents the specified date.

**Type:** Date


In addition, this function has a set of functions to convert a date format string to a date object as its properties.
This function set provides functions supporting following date formats:

- [Y-M-D](#hyphened_ymd)
- [Y-M-D H:m:s](#hyphened_ymd_and_hms)
- [Y/M/D](#slashed_ymd)
- [Y/M/D H:m:s](#slashed_ymd_and_hms)
- [YYMMDD](#yymmdd)
- [YYMMDDHHmmss](#yymmddhhmmss)
- [YYYYMMDD](#yyyymmdd)
- [YYYYMMDDHHmmss](#yyyymmddhhmmss)
- [RFC2822](#rfc2822)
- [RFC3339](#rfc3339)
- [ISO8601](#iso8601)


<a name="hyphened_ymd"></a>

#### <u>toDate\['Y-M-D'\](value) : Date</u>

Converts a date format string separated by hyphens to a data object. 

##### Parameter:

| Parameter |  Type  | Description                                  |
|-----------|:------:|----------------------------------------------|
| value     | string | The date format string like: `"2017-09-30"`. |

##### Return:
 
A `Date` object, or null if failing to convert.

**Type:** Date


<a name="hyphened_ymd_and_hms"></a>

#### <u>toDate\['Y-M-D H:m:s'\](value) : Date</u>

Converts a date-time format string separated by hyphens and colons to a data object. 

##### Parameter:

| Parameter |  Type  | Description                                          |
|-----------|:------:|------------------------------------------------------|
| value     | string | The date format string like: `"2017-9-30 1:22:3.4"`. |

##### Return:

A `Date` object, or null if failing to convert.

**Type:** Date


<a name="slashed_ymd"></a>

#### <u>toDate\['Y/M/D'\](value) : Date</u>

Converts a date format string separated by slashes to a data object. 

##### Parameter:

| Parameter |  Type  | Description                                   |
|-----------|:------:|-----------------------------------------------|
| value     | string | The date format string like: `"2017/09/30"`. |

##### Return:

A `Date` object, or null if failing to convert.

**Type:** Date


<a name="slashed_ymd_and_hms"></a>

#### <u>toDate\['Y/M/D H:m:s'\](value) : Date</u>

Converts a date-time format string separated by slashes and colons to a data object. 

##### Parameter:

| Parameter |  Type  | Description                                           |
|-----------|:------:|-------------------------------------------------------|
| value     | string | The date format string like: `"2017/9/30 1:22:3.45"`. |

##### Return:

A `Date` object, or null if failing to convert.

**Type:** Date


<a name="yymmdd"></a>

#### <u>toDate.YYMMDD(value) : Date</u>

Converts a date format string in fixed size to a data object.

##### Parameter:

| Parameter |  Type  | Description                              |
|-----------|:------:|------------------------------------------|
| value     | string | The date format string like: `"170930"`. |

##### Return:
 
A `Date` object, or null if failing to convert.

This format can represent a date within the range 100 years centered the current year.
(If the current year is 2017, the range is 1967〜2066).

**Type:** Date


<a name="yymmddhhmmss"></a>

#### <u>toDate.YYMMDDHHmmss(value) : Date</u>

Converts a date format string in fixed size to a data object.

##### Parameter:

| Parameter |  Type  | Description                                    |
|-----------|:------:|------------------------------------------------|
| value     | string | The date format string like: `"170930010203"`. |

##### Return:
 
A `Date` object, or null if failing to convert.

This format can represent a date within the range 100 years centered the current year.
(If the current year is 2017, the range is 1967〜2066).

**Type:** Date


<a name="yyyymmdd"></a>

#### <u>toDate.YYYYMMDD(value) : Date</u>

Converts a date format string in fixed size to a data object.

##### Parameter:

| Parameter |  Type  | Description                                |
|-----------|:------:|--------------------------------------------|
| value     | string | The date format string like: `"20170930"`. |

##### Return:
 
A `Date` object, or null if failing to convert.

**Type:** Date


<a name="yyyymmddhhmmss"></a>

#### <u>toDate.YYYYMMDDHHmmss(value) : Date</u>

Converts a date format string in fixed size to a data object.

##### Parameter:

| Parameter |  Type  | Description                                      |
|-----------|:------:|--------------------------------------------------|
| value     | string | The date format string like: `"20170930010203"`. |

##### Return:
 
A `Date` object, or null if failing to convert.

**Type:** Date


<a name="rfc2822"></a>

#### <u>toDate.RFC2822(value) : Date</u>

Converts a date format string according to RFC2822 to a data object.

##### Parameter:

| Parameter |  Type  | Description                                                     |
|-----------|:------:|-----------------------------------------------------------------|
| value     | string | The date format string like `"Sat, 30 Sep 2017 13:30:00 +0900"` |

##### Return:
 
A `Date` object, or null if failing to convert.

**Type:** Date


<a name="rfc3339"></a>

#### <u>toDate.RFC3339(value) : Date</u>

Converts a date format string according to RFC3339 to a data object.

##### Parameter:

| Parameter |  Type  | Description                                                     |
|-----------|:------:|-----------------------------------------------------------------|
| value     | string | The date format string like `"2017-09-30T13:30:00+09:00"` |

##### Return:
 
A `Date` object, or null if failing to convert.

**Type:** Date


<a name="iso8601"></a>

#### <u>toDate.ISO8601(value) : Date</u>

Converts a date format string according to ISO8601 to a data object.

There are many formats in ISO8601: basic/extended, calendar-date/ordinal-date/week-date and expanded/non-expanded, and this function supports all formats of them.

##### Parameter:

| Parameter |  Type  | Description                                                     |
|-----------|:------:|-----------------------------------------------------------------|
| value     | string | The date format string like `"2017-09-30T13:30:00+09:00"` |

##### Return:
 
A `Date` object, or null if failing to convert.

**Type:** Date


## Checked                                                                      

### Node.js (4〜9)

| Platform  |   4    |   5    |   6    |   7    |   8    |   9    |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### io.js (1〜3)

| Platform  |   1    |   2    |   3    |
|:---------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (〜0.12)

| Platform  |  0.7   |  0.8   |  0.9   |  0.10  |  0.11  |  0.12  |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |        |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |        |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### Web browsers

| Platform  | Chrome | Firefox | Vivaldi | Safari |  Edge  | IE11   |
|:---------:|:------:|:-------:|:-------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef; |&#x25ef; |&#x25ef;|   --   |   --   |
| Windows10 |&#x25ef;|&#x25ef; |&#x25ef; |   --   |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef; |&#x25ef; |   --   |   --   |   --   |


## License

Copyright (C) 2017 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-type.to-date/
[npm-img]: https://img.shields.io/badge/npm-v1.0.0-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/type.to-date
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[travis-img]: https://travis-ci.org/sttk/fav-type.to-date.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/fav-type.to-date
[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/sttk/fav-type.to-date?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/sttk/fav-type-to-date
[coverage-img]: https://coveralls.io/repos/github/sttk/fav-type.to-date/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/fav-type.to-date?branch=master


