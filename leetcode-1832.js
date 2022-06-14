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
    // declare string variable containing whole alphabet within single string 
    // declare variable that splits aforementioned string
    // declare variable with counter

    // use forEach to iterate through sentence
    // each unique iteration increments the counter by one
    // if counter reaches 26 once iteration is complete (or before), return true
    // if counter does not reach 26 once iteration is complete, return false

    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let alphaSep = alphabet.split("");
    let count = 0;

    alphaSep.forEach(letter => {
        if (sentence.includes(letter)) {
            count++
            }
        })

if(count === 26) {
    return true;
} else {
    return false;
}
};

console.log(checkIfPangram(sentence))
