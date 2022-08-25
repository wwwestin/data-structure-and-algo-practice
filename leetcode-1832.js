// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, 
// or false otherwise.

 

// Example 1:

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.
// Example 2:

// Input: sentence = "leetcode"
// Output: false


const checkIfPangram = function(sentence) {
    if (sentence.length < 26) return false;

    let count = {};

    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (let char of sentence) {
        if (alphabet.includes(char)) {
            count[char] = 0;
        }
        count[char] += 1;
    }

    return Object.keys(count).length == 26;
};
   

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
console.log(checkIfPangram("leetcode"));
