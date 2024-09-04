const removeFromArray = function(array, ...items) {
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    for (let j = 0; j < array.length; j++) {
      if (array.at(j) === item) {
        array.splice(j, 1);
        j--;
      }
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
