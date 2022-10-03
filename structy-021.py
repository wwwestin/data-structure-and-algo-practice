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

    # Iterative:

    # current = head

    # while current is not None:
    #     if current.val == target:
    #         return True
    #     current = current.next

    # return False

    # Recursive:

    if (head is None): return False
    if (head.val == target): return True
    return linked_list_find(head.next, target)



print (linked_list_find(a, "c"))
print (linked_list_find(a, "x"))
print (linked_list_find(a, "a"))