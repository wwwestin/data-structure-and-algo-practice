// Write a function, treeValueCount, that takes in the root of a binary tree and a target value. The function should 
// return the number of times that the target occurs in the tree.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(12);
const b = new Node(6);
const c = new Node(6);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


const treeValueCount = (root, target) => {

    // Iterative breadth-first solution:
    // if (root === null) return 0;

    // let queue = [ root ];

    // let count = 0;

    // while (queue.length > 0) {
    //     const current = queue.shift();

    //     if (current.val === target) count += 1;

    //     if (current.right !== null) queue.push(current.right);
    //     if (current.left !== null) queue.push(current.left);
    // }

    // return count;

    // Recursive depth-first solution:

    if (root === null) return 0;
    const match = root.val === target ? 1 : 0;
    return match + treeValueCount(root.left, target) + treeValueCount(root.right, target);
};


console.log(treeValueCount(a,  6));