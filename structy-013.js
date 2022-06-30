const intersection = (a, b) => {
    let repeat = [];

    for(num of b) {
        if(a.includes(num))
        repeat.push(num)
    }

    return repeat;
  };

  console.log(intersection([4,2,1,6], [3,6,9,2,10]));