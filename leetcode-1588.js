// Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.

// A subarray is a contiguous subsequence of the array.

 

// Example 1:

// Input: arr = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

const sumOddLengthSubarrays = function(arr) {
// declare counter variable
// outer for loop to determine subarry start point
// nested for loop to determine subarray end point
// conditional to ensure that only odd length subarrays are counted
// another nested for loop to iterate array from start to finish 
// count increases for each iteration of k
// return count

    let count=0;
    
    for(let i = 0; i < arr.length; i++){ 
        for(let j = i; j < arr.length; j++){  
            if((i - j) %2 ==0){ 
				for(let k = i; k <= j; k++){ 
					count+=arr[k];
				}
            }
        }
    }
    return count;
};

console.log(sumOddLengthSubarrays([1,4,2,5,3]));