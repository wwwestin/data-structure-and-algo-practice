// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the 
// majority element always exists in the array.

const majorityElement = function(nums) {

    let count = {};
    
    for (n of nums) {
        if (!(n in count)) {
            count[n] = 0;
        }
        count[n] += 1;
    }
    
    let max = 0;
    let maxCount = 0;

    for (key of Object.keys(count)) {
        console.log(key);
        if (count[key] > maxCount) {
            
            max = key;
            maxCount = count[key];
        }
    }
    
    return max;
    
};


console.log(majorityElement([2,2,1,1,1,2,2]));
console.log(majorityElement([3,2,3]));