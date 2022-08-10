# Write a function, anagrams, that takes in two strings as arguments. The function 
# should return a boolean indicating whether or not the strings are anagrams. 
# Anagrams are strings that contain the same characters, but in any order.

# Using dictionaries:

# def anagrams(s1, s2):
#   return char_count(s1) == char_count(s2)

# def char_count(s):
#   count = {}
  
#   for char in s:
#     if char not in count:
#       count[char] = 0
#     count[char] += 1
  
#   return count

# Using sorted:

def anagrams(s1, s2):
    return sorted(s1) == sorted(s2)

print (anagrams('restful', 'fluster'))
