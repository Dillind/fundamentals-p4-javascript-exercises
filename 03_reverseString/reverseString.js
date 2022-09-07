const reverseString = function (string) {
  // Step 1 - split the array
  const splitArray = string.split("");
  // Step 2 - reverse the array
  const reverseArray = splitArray.reverse();
  // Step 3 - join the array
  const joinArray = reverseArray.join("");
  // Step 4 - return the array
  return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
