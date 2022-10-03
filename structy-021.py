#  Write a function, linkedListFind, that takes in the head of a linked list and a 
#  target value. The function should return a boolean indicating whether or not the 
#  linked list contains the target.

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


def linked_list_find(head, target):
    return


print (linked_list_find(a, "c"))
print (linked_list_find(a, "x"))
print (linked_list_find(a, "a"))