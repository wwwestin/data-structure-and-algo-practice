// Write a function, pairSum, that takes in an array and a target sum as arguments. The 
// function should return an array containing a pair of indices whose elements sum to 
// the given target. The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair that sums to the target.


const pairSum = (numbers, targetSum) => {

  // Nested loop solution:

//   let result = [];

//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] ==  targetSum) {
//         result.push(i);
//         result.push(j);
//     }
//   }
// }

//   return result;

// Hashmap solution:

  let previous = {};

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const complement = targetSum - num;

    if (complement in previous) {
      return [i, previous[complement]]
    }
    previous[num] = i;
  }
};

  console.log(pairSum([3, 2, 5, 4, 1], 8));

