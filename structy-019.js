// Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes 
// in the linked list.

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

const linkedListValues = (head) => {
   
// let current = head;
// const values = [];

// while(current !== null) {
//     values.push(current.val)
//     current = current.next;
// }
// return values;

//  RECURSIVE SOLUTION: 

const values = [];
  _linkedListValues(head, values);
  return values;
};

const _linkedListValues = (head, values) => {
    if (head === null) return;
    values.push(head.val);
    _linkedListValues(head.next, values);
  };
  
console.log(linkedListValues(a));