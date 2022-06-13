// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.

 

// Example 1:

// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
// Example 2:

// Input: nums = [0]
// Output: [0]

const sortArrayByParity = function(nums) {
    // declare empty arrays to store odd and even numbers
    // for loop to iterate through array
    // if the modulo of i is 0, push to even array, else push to to odd array
    // return concated even and odd array (ensure odd array is at the end)
    
    let arrOdd = [];
    let arrEven = [];

        for(let i= 0; i< nums.length; i++){
            if(nums[i] % 2 == 0){
                arrEven.push(nums[i]);
            } else {
                arrOdd.push(nums[i]);
            }  
        }
    return newArray = arrEven.concat(arrOdd);
};

console.log(sortArrayByParity([3,1,2,4]));