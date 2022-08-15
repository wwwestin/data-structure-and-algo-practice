# Write a function, isPrime, that takes in a number as an argument. The function should 
# return a boolean indicating whether or not the given number is prime.


from math import sqrt, floor
from operator import is_

def is_prime(n):
  if n < 2:
    return False
  
  for i in range(2, floor(sqrt(n)) + 1):
    if n % i == 0:
      return False
    
  return True


print (is_prime(9012))
