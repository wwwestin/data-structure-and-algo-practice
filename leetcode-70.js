// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 

// Constraints:

// 1 <= n <= 45


const climbStairs = function(n) {
    // create conditional for returning n if it is less than or equal to 2 (since it won't be bigger than n if n is 1 or 2)
    // declare variables that denote all possible step combinations and counter variable
    // if n is bigger than 2, loop over number and after each iteration update counter variable 
    // set prev2 equal to one 
    // set prev1 equal to counter
    // return counter
    if(n <= 2) return n;
    
    let prev2 = 1;
    let prev1 = 2;
    let curr = 0;
    for(let i = 3; i <= n; i++) {
        curr = prev2 + prev1;
        prev2 = prev1;
        prev1 = curr;
    }
    console.log(curr);
};

console.log(climbStairs(5))
