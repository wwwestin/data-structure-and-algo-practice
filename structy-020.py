# Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. The 
# function should return the total sum of all values in the 
# linked list.


class Node:
   def __init__(self, val):
     self.val = val
     self.next = None

a = Node(2)
b = Node(8)
c = Node(3)
d = Node(-1)
e = Node(7)

a.next = b
b.next = c
c.next = d
d.next = e

def sum_list(head):
# Iterative:

#   total_sum = 0
#   current = head
#   while current is not None:
#     total_sum += current.val
#     current = current.next
#   return total_sum

# Recursive:

    if head is None:
        return 0
    return head.val + sum_list(head.next)



print(sum_list(a))