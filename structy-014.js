// Write a function, fiveSort, that takes in an array of numbers as an argument. The function should 
// rearrange elements of the array such that all 5s appear at the end. Your function should perform this operation 
// in-place by mutating the original array. The function should return the array.

// Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.



const fiveSort = (nums) => {
    // create two pointer variables (one for start of array and one starting at the end)
    // while loop to iterate as long as i is less than j
    // during while loop, decrement j if element is 5
    // else if condition for if nums of i is 5, then rearrange that 5 element to the
    // end of the existing array, then increment i
    // otherwise, increment i
    // return modified original array

    let i = 0;
    let j = nums.length - 1;

    while(i < j) {
        if(nums[j] === 5) {
            j -= 1;
        } else if (nums[i] === 5) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i += 1;
        } else {
            i += 1;
        }
    }
return nums;
};

console.log(fiveSort([12, 5, 1, 5, 12, 7]));

