// fahrenheit to celsius
const ftoc = function (fahren) {
  const temp = ((fahren - 32) * 5) / 9;
  return Math.round(temp * 10) / 10;
};

// celsius to fahrenheit
const ctof = function (celsius) {
  const temp = (celsius * 9) / 5 + 32;
  return Math.round(temp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
