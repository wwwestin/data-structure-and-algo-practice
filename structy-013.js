// Write a function, intersection, that takes in two arrays, a,b, as arguments. The 
// function should return a new array containing elements that are in both of the 
// two arrays.

// You may assume that each input array does not contain duplicate elements.

const intersection = (a, b) => {
  let output = [];

  for (s of b) {
    if (a.includes(s)) output.push(s)
  }

  return output;
};

  console.log(intersection([4,2,1], [1,2,4,6]));

