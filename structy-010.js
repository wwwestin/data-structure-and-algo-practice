// Write a function, pairSum, that takes in an array and a target sum as arguments. The 
// function should return an array containing a pair of indices whose elements sum to 
// the given target. The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair that sums to the target.


const pairSum = (numbers, targetSum) => {
    // create empty hashmap variable
    // use for loop to iterate over numbers
    // with in loop, create variable to reference element and index of numbers AND
    // create variable to reference subtracted value of target sum subtracted FROM
    // num
    // conditional with in-loop to determine if complement is contained in previousNums
    // return array of indices

const previousNums = {};

  for (let i = 0; i < numbers.length; i += 1) {
    const num = numbers[i];
    const complement = targetSum - num;
    if (complement in previousNums) return [i, previousNums[complement]];
    
    previousNums[num] = i;
  }
  };

  console.log(pairSum([3, 2, 5, 4, 1], 8));

