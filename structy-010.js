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

    for(let i = 0; i < numbers.length; i++) {
        previous[numbers] = i
    }
    return previous;
  };

  console.log(pairSum([3, 2, 5, 4, 1], 8));

