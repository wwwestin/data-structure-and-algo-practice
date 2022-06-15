// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

// Example 1:

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.
// Example 2:

// Input: sentence = "leetcode"
// Output: false

sentence = "thequickbrownfoxjumpsoverthelazydog";

const checkIfPangram = function(sentence) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let alphaS = alphabet.split("");
    let count = 0;

    for (let i = 0; i <= sentence.length; i++) {
        if (sentence.includes(alphaS[i])) count ++
    }

    if (count == 26) {
        return true
    } else {
        return false
    }
};
   

console.log(checkIfPangram(sentence))
