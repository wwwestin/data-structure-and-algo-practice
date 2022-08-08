# Write a function, mostFrequentChar, that takes in a string as an argument. The 
# function should return the most frequent character of the string. If there are ties, 
# return the character that appears earlier in the string.

# You can assume that the input string is non-empty.

def most_frequent_char(s):
  count = {}
  for char in s:
    if char not in count:
      count[char] = 0    
    count[char] += 1
    
  best = None
  for char in s:
    if best is None or count[char] > count[best]:
      best = char
  return best

print(most_frequent_char('bookeeper'))
print(most_frequent_char('potato'))