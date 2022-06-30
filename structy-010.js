const pairSum = (numbers, targetSum) => {
    
    // let result = [];

    // for(let i = 0; i < numbers.length; i++) {
    //     for (let j = i + 1; j < numbers.length; j++) {
    //         if(numbers[i] + numbers[j] == targetSum) 
    //         result.push(i,j);
    //     }
    // }
    // return result;

    let previous = {};

    for(let i = 0; i < numbers.length; i += 1) {
        const num = numbers[i];
        const complement = targetSum - num;

        if (complement in previous) {
            return [i, previous[complement]]
        }
        previous[num] = i;
    }
  };

  console.log(pairSum([3, 2, 5, 4, 1], 8));

//   time O(n)
//   space 0(n)

