// Write a function, addLists, that takes in the head of two linked lists, each 
// representing a number. The nodes of the linked lists contain digits as values. The 
// nodes in the input lists are reversed; this means that the least significant digit 
// of the number is the head. The function should return the head of a new linked listed 
// representing the sum of the input lists. The output list should have its digits 
// reversed as well.

// Say we wanted to compute 621 + 354 normally. The sum is 975:

//    621
//  + 354
//  -----
//    975

// Then, the reversed linked list format of this problem would appear as:

//     1 -> 2 -> 6
//  +  4 -> 5 -> 3
//  --------------
//     5 -> 7 -> 9


// class Node {
//     constructor(val) {
//       this.val = val;
//       this.next = null;
//     }
//   }

const a1 = new Node(1);
const a2 = new Node(2);
const a3 = new Node(6);
a1.next = a2;
a2.next = a3;


const b1 = new Node(4);
const b2 = new Node(5);
const b3 = new Node(3);
b1.next = b2;
b2.next = b3;


const addLists = (head1, head2) => {
    
};


console.log(addLists(a1, b1));