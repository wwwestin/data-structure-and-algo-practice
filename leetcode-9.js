// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

var isPalindrome = function(x) {
    let convert =  x.toString();
    let toArr = convert.split('');
    let rev = toArr.reverse();
    let j = rev.join('');

    if (convert === rev) {
        return true; 
    } else {   
        return false;
    } 
};

console.log(isPalindrome(155))