// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in 
// reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as 
// a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.


class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
}

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
    const result = new Node(null);
    let tail = result;
    
    let carry = 0;

    while (head1 || head2 || carry !== 0)  {
      const val1 = head1 === null ? 0 : head1.val;
      const val2 = head2 === null ? 0 : head2.val;
      const sum = val1 + val2 + carry;
      carry = sum > 9 ? 1 : 0;
      
      const digit = sum % 10;
      tail.next = new Node(digit);
      tail = tail.next;
      
      if (head1 !== null) head1 = head1.next;
      if (head2 !== null) head2 = head2.next;
    }
    
    return result.next;
  };


console.log(addLists(a1, b1));


