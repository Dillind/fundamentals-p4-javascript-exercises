const sumAll = function (min, max) {
  // checking if the paramter is a "number"
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  // If the value of min is greater than max, then save the min in a temporary variable, override min with the value of max, override max with the value of temp. It is basically a swap.
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i; // sum = sum + i
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
