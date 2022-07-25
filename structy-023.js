// Write a function, reverseList, that takes in the head of a linked list as an argument.
// The function should reverse the order of the nodes in the linked list in-place and 
// return the new head of the reversed linked list.


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
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

                          // Add this second parameter for recursive solution
const reverseList = (head, prev = null) => {
    // Iterative Solution:

//     let prev = null;
//     let current = head;
//     while (current !== null) {
//         const next = current.next;
//         current.next = prev;
//         prev = current;
//         current = next;
//     }
// return prev;

// Recursive Solution (worse space complexity):

    if(head === null) return prev;
    const next = head.next;
    head.next = prev;
    return reverseList(next, head);
};


console.log(reverseList(a));