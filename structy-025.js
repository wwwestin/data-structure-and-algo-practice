// Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments. The function should
// merge the two lists together into single sorted linked list. The function should return the head of the merged 
// linked list.

// Do this in-place, by mutating the original Nodes.

// You may assume that both input lists are non-empty and contain increasing sorted numbers.

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;


const q = new Node(6);
const r = new Node(8);
const s = new Node(9);
const t = new Node(25);
q.next = r;
r.next = s;
s.next = t;
  

const mergeLists = (head1, head2) => {
    
};


console.log(mergeLists(a, q));