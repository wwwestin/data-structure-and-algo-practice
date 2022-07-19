// Write a function, anagrams, that takes in two strings as arguments. The function 
// should return a boolean indicating whether or not the strings are anagrams. 
// Anagrams are strings that contain the same characters, but in any order.

const anagrams = (s1, s2) => {

    // declare empty hashmap variable to store counts of individual letter occurances
    // for-of loop to iterate over each character in s1 and add it to the hashmap if the current count is 0 and 
    // increase count by 1 for each occurance
    // second for-of loop to iterate over s2 and return false if encountered character is undefined and decrease count
    // if it IS defined
    // for-in loop over count to return false if the count of characters DOESN'T equal zero
    // return true if second and third loop conditions are falsey

    const count = {};

    for (let char of s1) {
        if (!(char in count)) {
          count[char] = 0;
        }
        count[char] += 1;
      }

      for (let char of s2) {
        if (count[char] === undefined) {
          return false;
        } else {
          count[char] -= 1;
        }
      }

      for (let char in count) {
        if (count[char] !== 0) {
          return false;
        }
      }

    return true;
};

console.log(anagrams('monkeyswrite', 'newyorktimes'));