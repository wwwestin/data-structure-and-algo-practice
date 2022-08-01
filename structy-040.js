// Write a function, treeIncludes, that takes in the root of a binary tree and a target value. The function should 
// return a boolean indicating whether or not the value is contained in the tree.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const treeIncludes = (root, target) => {

    // Iterative depth-first solution:

    // if (root === null) return false;

    // let stack = [ root ];

    // while (stack.length > 0) {
    //     const current = stack.pop();

    //     if (current.val === target) return true;
    //     if (current.left !== null) stack.push(current.left);
    //     if (current.right !== null) stack.push(current.right);

    // }
    // return false;

    // Recursive depth first solution:

    if (root === null) return false;
    if (root.val === target) return true;
    return treeIncludes(root.left, target) || treeIncludes(root.right, target);
};


console.log(treeIncludes(a, "e"));