class Node {
      constructor(val) {
        this.val = val;
        this.next = null;
      }
    }

const a = new Node(7);
const b = new Node(7);
const c = new Node(7);

a.next = b;
b.next = c;

const isUnivalueList = (head) => {
    
};


  console.log(isUnivalueList(a));