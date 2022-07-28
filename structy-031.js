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

                                // add third parameter for recursive solution and set default to zero for cases where carrying is not necessary
const addLists = (head1, head2, carry = 0) => {
  if (head1 === null && head2 === null && carry === 0) return null; // base case for returning null if both list's head AND carry is null
  
  const val1 = head1 === null ? 0 : head1.val; // ternary statement for how to interpret if any of head1's nodes are null (i.e. read it as 0)
  const val2 = head2 === null ? 0 : head2.val; // same as above but for head 2
  
  const sum = val1 + val2 + carry; // variable to store value of result 
  const nextCarry = sum > 9 ? 1 : 0; // variable using ternary statement to handle cases where carrying is necessary (i.e. if the integer is bigger than 9)
  const digit = sum % 10; // varaiable to store each node value as single digit by modded the sum by 10
  const result = new Node(digit); // variable to store/create new node from digit
  
  const next1 = head1 === null ? null : head1.next // case to move to next node if not null for head1
  const next2 = head2 === null ? null : head2.next // same as above but for head 2
  
  result.next = addLists(next1, next2, nextCarry); // assigning next to running function again
  
  return result; // return completed linked list with sum once both heads run into a null node
};


console.log(addLists(a1, b1));