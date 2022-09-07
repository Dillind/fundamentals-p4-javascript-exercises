const repeatString = function (str, num) {
  let repeatedStr = "";
  // for loop example
  for (let i = 0; i < num; i++) {
    repeatedStr += str;
  }
  if (num < 0) {
    return "ERROR";
  }
  return repeatedStr;
};

// yo
// While loop example
//   let index = 0;
//   while (index < num) {
//     repeatedStr += string;
//     index++;
//   }
//   if (num < 0) {
//     // returns ERROR if negative number
//     return "ERROR";
//   }
//   return repeatedStr;
// };
// Do not edit below this line
module.exports = repeatString;
