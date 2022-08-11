# Write a function, pairSum, that takes in an array and a target sum as arguments. The 
# function should return an array containing a pair of indices whose elements sum to 
# the given target. The indices returned must be unique.

# Be sure to return the indices, not the elements themselves.

# There is guaranteed to be one such pair that sums to the target.

def pair_sum(numbers, target_sum):

  previous_numbers = {}
  
  for index, num in enumerate(numbers):
    complement = target_sum - num
    
    if complement in previous_numbers:
      return (index, previous_numbers[complement])
    
    previous_numbers[num] = index



print (pair_sum([3, 2, 5, 4, 1], 8))
print (pair_sum([4, 7, 9, 2, 5, 1], 5))