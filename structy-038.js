// Write a function, breadthFirstValues, that takes in the root of a binary tree. 
// The function should return an array containing all values of the tree in 
// breadth-first order.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const breadthFirstValues = (root) => {
    // Only use iterative solutions for breadth first value traversal!!!

    if (root === null) return [];

    let queue = [ root ];
    let result = [];

    while (queue.length > 0) {
        const current = queue.shift();
        result.push(current.val);

        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }

    return result;
};

console.log(breadthFirstValues(a));

// Note: this solution should really be considered O(n^2) runtime because the JavaScript 
// shift() methods runs in O(n). JavaScript does not have a native queue data structure 
// that is maximally efficient.