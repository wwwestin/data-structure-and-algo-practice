// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

 

// Example 1:

// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.

const word1 = ["ab", "c"]
const word2 = ["a", "bc"]

const arrayStringsAreEqual = function(word1, word2) {
    // declare variables to join strings
    // conditional to check if two join words are strictly equal
    // return boolean depending on congruency
    
    let w1=word1.join("")
    let w2=word2.join("")

    if(w1===w2)
        return true;
    return false

};

console.log(arrayStringsAreEqual(word1, word2))


