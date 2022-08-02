// Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. The function 
// should return the minimum value within the tree.

// You may assume that the input tree is non-empty.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const treeMinValue = (root) => {

    // Iterative depth-first solution:

    // let stack = [ root ];

    // let min = Infinity;

    // while (stack.length > 0) {
    //     const current = stack.pop();

    //     if (current.val < min) min = current.val;
    //     if (current.left !== null) stack.push(current.left);
    //     if (current.right !== null) stack.push(current.right);
        
    // }

    // return min;

    // Recursive depth-first solution:

    if (root === null) return Infinity;
    const leftMin = treeMinValue(root.left);
    const rightMin = treeMinValue(root.right);
    
    return Math.min(root.val, leftMin, rightMin);
};

console.log(treeMinValue(a));