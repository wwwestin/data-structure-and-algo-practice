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
    // for each element arr[i], we find the possible number of sub arrays that contain arr[i]
        // assume the startIndex and endIndex => the number of sub arrays that contains arr[i] will be startIndex * endIndex
        // there are i+1 possible startIndex before arr[i], including i
        // there are arr.length - i possible endIndex after arr[i], including i
        // as the number of odd subarrays will always be equal or greater than the number of even subsarrays, we use ceiling
        // the result will be the accumulative sum of arr[i] * number of appearances of arr[i] in its odd sub arrays
        
    let sum = 0
    
    for (let i = 0; i < arr.length; i++) {
        
        let startIndex = i + 1; 
        let endIndex = arr.length - i; 
        let oddArrNumbers = Math.ceil(startIndex*endIndex/2) 
        sum += arr[i]*oddArrNumbers
    }
    
    return sum
};

console.log(sumOddLengthSubarrays([1,4,2,5,3]));