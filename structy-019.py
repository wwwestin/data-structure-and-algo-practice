#  Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function 
#  should return an array containing all values of the nodes in the linked list.


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

def linked_list_values(head):
  
  return

print (linked_list_values(a))