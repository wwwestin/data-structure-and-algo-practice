#  Write a function, pairProduct, that takes in an array and a target product as arguments. The function should 
#  return an array containing a pair of indices whose elements multiply to the given target. The indices returned 
#  must be unique.

#  Be sure to return the indices, not the elements themselves.

#  There is guaranteed to be one such pair whose product is the target.

def pair_product(numbers, target_product):
  previous_nums = {}
  
  for index, num in enumerate(numbers):
    complement = target_product / num
    
    if complement in previous_nums:
      return (index, previous_nums[complement])
    
    previous_nums[num] = index


print (pair_product([3, 2, 5, 4, 1], 8))