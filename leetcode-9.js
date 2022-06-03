// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

var isPalindrome = function(x) {
    //convert x to a string
    //convert string to array
    //reverse array
    //join and return to string
    //return boolean if reversed string is strictly equal to x as string
    //tools: toString, .split, array.reverse, .join
    
    let convert = x.toString();
    let arr = convert.split("");
    let rev = arr.reverse();
    let j = rev.join('');
    
    return convert === j 
    
};

console.log(isPalindrome("121"))