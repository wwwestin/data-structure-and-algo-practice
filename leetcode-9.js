// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

var isPalindrome = function(x) {
   let convert = x.toString().split("");
   let reverse = convert.reverse();

   return reverse.join('') == x;
};

console.log(isPalindrome(155))