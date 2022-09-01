// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

const lengthOfLongestSubstring = function(s) {
    let temp = [];
    let maxLength = 0;
    
    for(let i = 0; i < s.length; i++){
        if(temp.indexOf(s[i]) === -1){
            temp.push(s[i]);
            if(temp.length > maxLength)
                maxLength = temp.length;
        }else{
            temp = temp.slice(temp.indexOf(s[i]) + 1,temp.length);
            temp.push(s[i]);
        }
    }
    
    return maxLength;
};


console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));