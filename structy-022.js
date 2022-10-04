// Write a function, getNodeValue, that takes in the head of a linked list and an index. 
// The function should return the value of the linked list at the specified index.

// If there is no node at the given index, then return null.

class Node {
      constructor(val) {
        this.val = val;
        this.next = null;
      }
    }

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

const getNodeValue = (head, index) => {

  // Iterative:

  // let count = 0;
  // let current = head;

  // while (current !== null) {
  //   if (count === index) return current.val
  //   current = current.next;
  //   count += 1;
  // }

  //  return null; 

  // Recursive:

  if (head === null) return null;
  if (index === 0) return head.val;
  return getNodeValue(head.next, index -1)
};

console.log(getNodeValue(a, 2));