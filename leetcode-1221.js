// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it in the maximum amount of balanced strings.

// Return the maximum amount of split balanced strings.

 

// Example 1:

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
// Example 2:

// Input: s = "RLLLLRRRLR"
// Output: 3
// Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.
// Example 3:

// Input: s = "LLLLRRRR"
// Output: 1
// Explanation: s can be split into "LLLLRRRR".

const balancedStringSplit = function(s) {
    // declare counter variables for return value, 'R' values, and 'L" values
    // for loop to iterate through array
    // conditional for adding to respective count when encountered
    // conditional for if each respective count is equal, in which case output is incremented and 'L'/'R' are reset
    // return otuput

    let output = 0
    let Rcount = 0
    let Lcount = 0
    
    for(let i = 0; i < s.length; i++) {
        
        if(s[i] == 'R') {
        	Rcount++
        } else {
        	Lcount++
        }
        
        if(Rcount == Lcount) {
            output++
            Rcount = 0
            Lcount = 0
        }
    }
    return output
};

console.log(balancedStringSplit("RLLLLRRRLR"));