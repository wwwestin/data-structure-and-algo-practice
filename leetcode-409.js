// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome 
// that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.


// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.


const longestPalindrome = function(s) {

    const n = s.length
    let freqMap = {}
    let ans = 0
    
    for(let i of s){
        freqMap[i] = (freqMap[i] || 0) + 1
        
        if(freqMap[i]%2 === 0){
            ans+=2
        }
    }
    return n > ans ? ans+1 : ans  
};


console.log(longestPalindrome("abccccdd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("fofofofofofofofofoq"));