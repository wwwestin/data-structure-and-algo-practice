// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]



const reverseString = function(s) {
    let newArr = [];

    for (let i = s.length -1; i >= 0; i--) {
        newArr.push(s[i]);
    }
    return newArr;
};

console.log(reverseString(["h","e","l","l","o"]))