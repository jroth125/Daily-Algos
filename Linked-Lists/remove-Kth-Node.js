/*
Write a function that takes in the head of a Singly Linked List and an 
integer k (assume that the list has at least k nodes). The function 
should remove the kth node from the end of the list. 

Assume:
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
*/


// O(n) time and constant space
function removeKthNodeFromEnd (head, k) {
    let curNode = head
    let count = 0
    while (curNode) {
        ++count
        curNode = curNode.next
    }

    if (count === k) {
        head.value = head.next.value
        head.next = head.next.next
        return;
    }
    curNode = head

    let newK = k % count
    while (curNode) {
        --count
        if (count === newK) {
            let nodeToDelete = curNode.next
            curNode.next = nodeToDelete.next
            nodeToDelete.next = null
            break
        } else {
            curNode = curNode.next
        }
    }
}