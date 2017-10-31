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
