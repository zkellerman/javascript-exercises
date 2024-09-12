const fibonacci = function(sequence) {
  sequence = parseInt(sequence);
  if (sequence < 0) return 'OOPS';
  if (sequence === 0) return 0;

  const arr = [];

  for (let i = 0; i < sequence; i++) {
    if (arr.length < 2) 
      arr.push(1);
    else
      arr.push(arr.at(-1) + arr.at(-2));
  }

  return arr.pop();
};

// Do not edit below this line
module.exports = fibonacci;
