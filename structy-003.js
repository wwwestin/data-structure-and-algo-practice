// Write a function, maxValue, that takes in array of numbers as an argument. The function should return the 
// largest number in the array.

// Solve this without using any built-in array methods.

// You can assume that the array is non-empty.

const maxValue = (nums) => {

let best = -Infinity;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > best) best = nums[i];
}

return best;

};
  
  console.log(maxValue([4, 7, 2, 8, 10, 9]));