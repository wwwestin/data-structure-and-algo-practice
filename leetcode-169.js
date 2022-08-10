// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the 
// majority element always exists in the array.

const majorityElement = function(nums) {

    let count = {};

    for (let n of nums) {
        if (!(n in count)) {
            count[n] = 0;
        }
        count[n] += 1;
    }

    let best = 0;

    for (let n of nums) {
        if (best === 0 || count[n] > count[best]) best = n
    }
    
    return best;
};


console.log(majorityElement([2,2,1,1,1,2,2]));
console.log(majorityElement([3,2,3]));