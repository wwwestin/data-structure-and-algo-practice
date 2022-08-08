// Write a function, compress, that takes in a string as an argument. The function should return a compressed 
// version of the string where consecutive occurrences of the same characters are compressed into the 
// number of occurrences followed by the character. Single character occurrences should not be changed.

const compress = (s) => {

  let i = 0;
  let j = 0;

  let result = [];

  while (j <= s.length) {
    if (s[i] === s[j]) {
      j += 1;
    } else {
      const num = j - i;

      if (num === 1) {
        result.push[i];
    } else {
      result.push(String(num), s[i]);
    }
    i = j;
  }
}

  return result.join('');
};

  console.log(compress('ssssbbz'));