// Write a function, compress, that takes in a string as an argument. The function should return a compressed 
// version of the string where consecutive occurrences of the same characters are compressed into the 
// number of occurrences followed by the character. Single character occurrences should not be changed.

const compress = (s) => {

// declare output empty array variable and empty pointer variables
// use while loop to increment j counter for every time a similar character is encountered
// declare variable to keep track of how often a letter needs to be added to output (by subtracting indices)
// push letter to output once if num equals 1
// push letter to output as many times as equal to num
// set i equal to j
// return joined output


  const output = [];
  let i = 0;
  let j = 0;

  while (j <= s.length) {
    if (s[i] === s[j]) {
      j += 1;
    } else {
      const num = j - i
      if (num === 1) {
        output.push(s[i]);
      } else {
        output.push(String(num), s[i]);
      }
      i = j
    }
  }
  return output.join('');
  };

  console.log(compress('ssssbbz'));