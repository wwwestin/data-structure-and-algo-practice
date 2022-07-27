// Write a function, createLinkedList, that takes in an array of values as an argument. 
// The function should create a linked list containing each element of the array as 
// the values of the nodes. The function should return the head of the linked list.

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }


const createLinkedList = (values) => {
    const dummyHead = new Node(null);
    let tail = dummyHead;

    for (let val of values) {
        tail.next = new Node(val);
        tail = tail.next
    }
    return dummyHead.next;
};

console.log(createLinkedList(["h", "e", "y"]));

