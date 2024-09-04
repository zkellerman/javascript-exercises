const repeatString = function(text, timesRepeated) {
  if (timesRepeated < 0)
    return 'ERROR'

  let string = '';

  while (timesRepeated > 0) {
    string += text;
    timesRepeated--;
  }

  return string;
};

// Do not edit below this line
module.exports = repeatString;
