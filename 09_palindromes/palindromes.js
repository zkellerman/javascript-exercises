const palindromes = function (string) {
  const filteredArr = string.toUpperCase().split('').filter((char) => {
    return (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')
  });
  let filteredString = filteredArr.join('');

  const reversedArr = filteredString.split('').reverse();
  let reversedString = reversedArr.join('');

  return filteredString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
