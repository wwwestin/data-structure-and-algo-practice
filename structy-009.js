// Write a function, mostFrequentChar, that takes in a string as an argument. The 
// function should return the most frequent character of the string. If there are ties, 
// return the character that appears earlier in the string.

// You can assume that the input string is non-empty.


const mostFrequentChar = (s) => {
// create empty variable hashmap
// iterate through s and push each unique character and occurance to hashmap
// use second for-of loop to determine a character with the highest occurance
// return character


const count = {};

for(let char of s) {
  if(!(char in count)) {
  count[char] = 0;
  }
  count[char] += 1;
}

let best = null;
for(char of s) {
  if(best === null || count[char] > count[best]) {
    best = char;
  }
}

 
return best;
};

console.log(mostFrequentChar('bookeeper'));

// time = O(n)
// space = 0(n)