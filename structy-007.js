// Write a function, compress, that takes in a string as an argument. The function should return a compressed 
// version of the string where consecutive occurrences of the same characters are compressed into the 
// number of occurrences followed by the character. Single character occurrences should not be changed.

const compress = (s) => {

  let i = 0;
  let j = 0;

  let result = [];

  while (j <= s.length) {
    if (s[i] === s[j]) {
      j += 1; // if s and i pointers are the same character, advance j by one
    } else {
      const num = j - i; // if s and i are different, store the difference between them in a variable for each iteration

      if (num === 1) {
        result.push(s[i]); // if num is one, push current iteration to result array
      } else {
        result.push(String(num),s[i]) // if num is larger than one, wrap num in String to push current iteration num number of times
      }
      i = j;
    } 
    }

  return result.join("");

};

  console.log(compress('ssssbbz'));
  console.log(compress('ccaaatsss'));
  console.log(compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'));