class Node {
      constructor(val) {
        this.val = val;
        this.next = null;
      }
    }

const a = new Node(7);
const b = new Node(10);
const c = new Node(7);

a.next = b;
b.next = c;

                              // For recursive solution, add this second parameter
const isUnivalueList = (head, preVal = null) => {

    // Iterative Solution:

    // let current = head;

    // while (current !== null) {
    //     if (current.val !== head.val) return false;
    //     current = current.next;
    // }
    // return true;

    // Recursive Solution:

    if (head === null) return true; // Provides condition for returning true (i.e. if iteration reaches a null node/end node)
    if (preVal === null || preVal === head.val) { // Provides conditions to continue iteration (i.e. if preVal is null or if preVal is strictly equal to head.val)
        return isUnivalueList(head.next, head.val); // Runs function again with next and current head value
    } else {
        return false; // Return false if conditions on line 31 are not satisfied
    }
};


console.log(isUnivalueList(a));