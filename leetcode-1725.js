// You are given an array rectangles where rectangles[i] = [li, wi] represents the ith rectangle of length li and width wi.

// You can cut the ith rectangle to form a square with a side length of k if both k <= li and k <= wi. For example, if you have a rectangle [4,6], you can cut it to get a square with a side length of at most 4.

// Let maxLen be the side length of the largest square you can obtain from any of the given rectangles.

// Return the number of rectangles that can make a square with a side length of maxLen.

 

// Example 1:

// Input: rectangles = [[5,8],[3,9],[5,12],[16,5]]
// Output: 3
// Explanation: The largest squares you can get from each rectangle are of lengths [5,3,5,5].
// The largest possible square is of length 5, and you can get it out of 3 rectangles.
// Example 2:

// Input: rectangles = [[2,3],[3,7],[4,3],[3,7]]
// Output: 3

const countGoodRectangles = function(rectangles) {
    // declare boolean comparison and counter variable
    // for loop to iterate through array 
    // declare variable with ternary operator to evaluate if i at first index is less than i at the second index, if true then i at first index is returned, else i at second index is returned
    // conditional which sets res to 1 if x is larger than -1 and sets prev to x; if x is smaller than prev (as well as incrementing res), prev is unchanged
    // return res
    
    let prev = -1;
    let res = 0;

        for (let i = 0; i < rectangles.length; i++) {
            let x = rectangles[i][0] < rectangles[i][1] ? rectangles[i][0] : rectangles[i][1];
                if (x > prev) {
                res = 1;
                prev = x;
                } else if (x == prev) {
            res++;
            }
  }
  return res;
    
};

console.log(countGoodRectangles([[16,3],[3,14],[4,23],[16,7]]));