const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((sum, curr) => { return sum + curr }, 0);
};

const multiply = function(arr) {
  return arr.reduce((prod, curr) => { return prod * curr });
};

const power = function(num, pow) {
	return num ** pow;
};

const factorial = function(num) {
	if (num === 0 || num === 1) return 1;

  return num * factorial(num - 1);
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
