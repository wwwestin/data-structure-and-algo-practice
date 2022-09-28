// Write a function, pairSum, that takes in an array and a target sum as arguments. The 
// function should return an array containing a pair of indices whose elements sum to 
// the given target. The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair that sums to the target.


const pairSum = (numbers, targetSum) => {

  let previous = {};

  for (let i = 0; i < numbers.length; i+=1) {
    let num = numbers[i];
    let complement = targetSum - num;

    if (complement in previous) {
      return [i, previous[complement]]
    } 
    previous[num] = i;
  }

  return previous;
};

  console.log(pairSum([3, 2, 5, 4, 1], 8));
  console.log(pairSum([4, 7, 9, 2, 5, 1], 5));
  console.log(pairSum([4, 7, 9, 2, 5, 1], 3));

