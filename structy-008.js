// Write a function, anagrams, that takes in two strings as arguments. The function 
// should return a boolean indicating whether or not the strings are anagrams. 
// Anagrams are strings that contain the same characters, but in any order.

const anagrams = (s1, s2) => {

let count = {};

for (char of s1) {
  if (!(char in count)) {
    count[char] = 0
  }
  count[char] += 1;
}

for (char of s2) {
  if (char in count) {
    count[char] -= 1;
  }
}
  let sum = null;

  for (let char in count) {
    if (count[char] !== 0) {
      return false;
    }
  }
  
  return true;
};

console.log(anagrams('monkeyswrite', 'newyorktimes'));
console.log(anagrams('cats', 'tocs'));
console.log(anagrams('paper', 'reapa')); 