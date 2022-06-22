// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

const maxProfit = function(prices) {
    // declare variables for storing profit and left pointer at the first index of array
    // for loop to iterate over entire length of array
    // declare variable for right pointer that reflects current position of loop
    // conditional for setting left pointer equal to right pointer if left is bigger than right
    // conditional  for setting profit equal to right pointer minus left pointer if right pointer minus left pointer is greater than current profit
    // return profit
    
    let profit = 0,left = prices[0]

    for(let i = 1; i < prices.length ; i++){
        let right = prices[i];
        if(left > right) left = right
        if(right - left > profit) profit = right - left
    }
    return profit;
};

console.log(maxProfit([7,1,5,3,6,4]))
