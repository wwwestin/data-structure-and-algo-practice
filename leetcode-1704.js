// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.

 

// Example 1:

// Input: s = "book"
// Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

const halvesAreAlike = function(s) {
    // declare array variable with vowel library
    // declare counter variable
    // set s parameter to lower case
    // for loop to iterate through each half of s
    // increment counter if vowel is found in first half of s
    // decrement counter if vowel is found in any index beyond last index in second half of s
    // return true if counter is 0

const vowels = ['a', 'e', 'i', 'o', 'u']
  let result = 0

  s = s.toLowerCase()

  for (let i = 0; i < s.length / 2; i++) {
    if (vowels.includes(s[i])) result++
    if (vowels.includes(s[s.length - i - 1])) result--
  }

  return result === 0
};