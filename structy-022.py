# Write a function, getNodeValue, that takes in the head of a linked list and an index. 
# The function should return the value of the linked list at the specified index.

# If there is no node at the given index, then return null.

from webbrowser import get


class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

a = Node("a")
b = Node("b")
c = Node("c")
d = Node("d")

a.next = b
b.next = c
c.next = d

def get_node_value(head, index):

  # Iterative:

#   count = 0
#   current = head
#   while current is not None:
#     if count == index:
#       return current.val
    
#     current = current.next
#     count += 1
    
#   return None

# Recursive:

    if head is None: 
        return None

    if index == 0:
        return head.val

    return get_node_value(head.next, index -1)


print (get_node_value(a,2))