// the rest paramter allows us to put an indefinite number of values into a parameter.
const removeFromArray = function (...args) {
  const array = args[0];
  const newArray = [];
  array.forEach((element) => {
    if (!args.includes(element)) {
      newArray.push(element);
      console.log(newArray);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
