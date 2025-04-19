const add = function(val1, val2) {
  return val1 + val2;
};

const subtract = function(val1, val2) {
	return val1 - val2;
};

const sum = function(arr) {
	return arr.reduce((acc, curVal) => acc + curVal, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, curVal) => acc * curVal, 1);
};

const power = function(val, pow) {
	return val ** pow;
};

const factorial = function(val, i = 1, fact = i) {
  if (i > val)
    return fact;
  return factorial(val, i + 1, fact * i);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
