// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

s = "anagram", t = "nagaram"

const isAnagram = function(s, t) {

return s.split('').sort().join('') === t.split('').sort().join('');

};

console.log(isAnagram(s, t))