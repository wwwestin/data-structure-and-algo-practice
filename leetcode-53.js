// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

const maxSubArray = function(nums) {
  
    let currentSum = nums[0], maxSum = nums[0];

    for(let i = 1; i < nums.length; i++){
      if(currentSum < 0){
        currentSum = nums[i];
      } else{
        currentSum += nums[i]
      }
  
      if(currentSum > maxSum){
        maxSum = currentSum;
      }
    }
    return maxSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));