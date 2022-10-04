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
    return


print (get_node_value(a,3))