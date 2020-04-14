// AlgoExpert Find Loop

// In a linked list with a circular loop, find the start of the loop
// Example: 1 - 2 - 3 - 4 - 5 - 6 - 7
//                      |           \
//                      11 - 10 - 9 - 8
// ==> we would return the node with value 1

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findLoop(head) {
  // Write your code here.
  let hare = head.next;
  let tort = head.next.next;
  while (hare !== tort) {
    hare = hare.next;
    tort = tort.next.next;
  }

  let first = head;
  let second = hare;
  while (first !== second) {
    first = first.next;
    second = second.next;
  }
  return first;
}
