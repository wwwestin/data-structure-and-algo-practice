const pairProduct = (numbers, targetProduct) => {
    let previous = {};

    for(let i = 0; i < numbers.length; i += 1) {
        const num = numbers[i];
        const complement = targetProduct / num;

        if (complement in previous) {
            return [i, previous[complement]]
        }
        previous[num] = i;
    }
  };

  console.log(pairProduct([3, 2, 5, 4, 1], 8));