// Write a function, treeSum, that takes in the root of a binary tree that contains 
// number values. The function should return the total sum of all values in the tree.

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

const treeSum = (root) => {

    // Iterative breadth-first solution:

    // if (root === null) return 0;

    // let queue = [ root ];

    // let result = 0;

    // while (queue.length > 0) {
    //     const current = queue.shift();
        
    //     result += current.val;

    //     if (current.left !== null) queue.push(current.left);
    //     if (current.right !== null) queue.push(current.right);
    // }

    // return result;

    // Recursive depth-first solution:

    if (root === null) return 0;

    return root.val + treeSum(root.left) + treeSum(root.right);
};


console.log(treeSum(a));