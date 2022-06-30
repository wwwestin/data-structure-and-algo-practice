const intersection = (a, b) => {
    // let repeat = [];

    // for(num of b) {
    //     if(a.includes(num))
    //     repeat.push(num)
    // }

    // return repeat;

  const result = [];
  const setA = new Set(a);
  for (let item of b) {
    if (setA.has(item)) {
      result.push(item);
    }
  }
  return result;
  };

  console.log(intersection([4,2,1,6], [3,6,9,2,10]));

//   Time: O(n+m)
//   Space: O(n)