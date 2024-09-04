const sumAll = function(num1, num2) {
  let startNum = num1;
  let endNum = num2;

  if (startNum < 0 || endNum < 0 || !Number.isInteger(startNum) || !Number.isInteger(endNum))
    return 'ERROR';

  if (startNum > endNum) {
    startNum = num2;
    endNum = num1;
  }

  let sum = 0;

  for (let currentNum = startNum; currentNum <= endNum; currentNum++)
    sum += currentNum;

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
