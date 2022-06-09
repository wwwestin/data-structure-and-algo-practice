// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const twoSum = function(nums, target) {

    //create empty array to store num
    //iterate over nums 
    //nested loop to compare if stored num adds up to target
    //return indices
    
    let storedNum = [];
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i +1; j < nums.length; j++ ) {
            if (nums[i] + nums[j] === target) {
                storedNum.push(i);
                storedNum.push(j);
                break;
            }
        }
    }
    return storedNum;
};

console.log(twoSum([2,7,11,15], 9))