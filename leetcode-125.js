// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

const isPalindrome = function(s) {
    // declare variable (s) that replaces all characters in input string to lowercase alphanumeric characters delineating in regex statement
    // declare variable (j) that turns s into array, reverses it, and joins it
    // return boolean evaluating whether s is the same as j

    s = s.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();
	
    r = s.split("").reverse().join("");
	
    return s == r;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))