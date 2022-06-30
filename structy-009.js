const mostFrequentChar = (s) => {

  let count = {};
  
  for(let char of s) {
    if(!(char in count)) {
      count[char] = 0;
    }
    count[char] += 1;
  }

  let best = null;
  for(let char of s) {
    if(best === null || count[char] > count[best]) {
      best = char;
    }
  }
     return best;
};

console.log(mostFrequentChar('bookeeper'));

// time = O(n)
// space = 0(n)