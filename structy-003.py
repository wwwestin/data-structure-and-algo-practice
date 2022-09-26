# Write a function, maxValue, that takes in array of numbers as an argument. The function should return the 
# largest number in the array.

# Solve this without using any built-in array methods.

# You can assume that the array is non-empty.

def max_value(nums):
  maximum = float('-inf')
  
  for num in nums:
    if num > maximum:
      maximum = num
      
  return maximum

print (max_value([4, 7, 2, 8, 10, 9]))
print (max_value([10, 5, 40, 40.3]))

