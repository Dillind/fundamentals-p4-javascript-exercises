const leapYears = function (year) {
  // returns true or false to the parameter if it is a leap year.
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};
// Do not edit below this line
module.exports = leapYears;
