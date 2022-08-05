// Write a function, compress, that takes in a string as an argument. The function should return a compressed 
// version of the string where consecutive occurrences of the same characters are compressed into the 
// number of occurrences followed by the character. Single character occurrences should not be changed.

const compress = (s) => {

  let output = [];

  let i = 0;
  let j = 0;

  while (j <= s.length) {
    if(s[i] === s[j]) {
      j += 1;
    } else {
      const num = i - j;
      if (num === 1) {
        output.push(s[i]) 
    } else {
      output.push(String(num), s[i]);
    }
    i = j;
  }
  }

  return output.join('');
};

  console.log(compress('ssssbbz'));