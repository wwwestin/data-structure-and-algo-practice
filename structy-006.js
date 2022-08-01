// Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into 
// multiple groups according to the following pattern:

// for example, '2c' or '3a'.
// The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' 
// times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.


const uncompress = (s) => {
  let result = [];
  const numbers = '0123456789';
  let i = 0;
  let j = 0;
  while (j < s.length) {
    if (numbers.includes(s[j])) {
      j += 1;
    } else {
      const num = Number(s.slice(i, j));
      for (let count = 0; count < num; count += 1) {
        result.push(s[j]);
      }
      j += 1;
      i = j;
    }
  }
  return result.join('');
};

console.log(uncompress("2c3a1t"));