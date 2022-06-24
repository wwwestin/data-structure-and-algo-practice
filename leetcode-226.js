// Given the root of a binary tree, invert the tree, and return its root.

 

// Example 1:

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

const invertTree = function(root) {
    if(!root) return root
    
    let temp = root.right
    root.right = root.left, root.left = temp
    invertTree(root.right)
    invertTree(root.left)
    
    return root;
};

console.log(invertTree([4,2,7,1,3,6,9]));