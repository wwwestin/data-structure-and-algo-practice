// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0

const numJewelsInStones = function(jewels, stones) {
    // declare counter variable
    // delcare conditional to return 0 if neither jewels nor stones are in parameters
    // for-of loop to iterate through stones to determine if jewels are present inside of stones
    // if jewels are present inside of stone, count is incremented by 1
    // return count once all iterables are looped over
    
    if (!jewels || !stones) return 0;
    
    let count = 0;

    for (const c of stones) {
        if (jewels.includes(c)) count++;
    }

    return count;
};

console.log(numJewelsInStones("j", "jJJJjJJJj"));
console.log(numJewelsInStones("z", "ZZ"));