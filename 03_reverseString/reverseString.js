const reverseString = function(text) {
  const textArray = text.split("");
  let reverse = '';

  for (let i = textArray.length - 1; i >= 0; i--) {
    reverse += text.at(i);
  }

  return reverse;
};

// Do not edit below this line
module.exports = reverseString;
