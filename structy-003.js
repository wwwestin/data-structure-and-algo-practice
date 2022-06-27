const maxValue = (nums) => {

let max = -Infinity;
  
  for (let num of nums) {
    if (num > max) max = num;
  }
  
  return max;
  
};
  
  console.log(maxValue([4, 7, 2, 8, 10, 9]));