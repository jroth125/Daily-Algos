// Reverse a linked list

function reverseLinkedList(head) {
    // Write your code here.
      let curNode = head.next
      let secondHead = head
      secondHead.next = null
      
      while (curNode) {
              let nextNode = curNode.next
              curNode.next = secondHead
              secondHead = curNode
              curNode = nextNode
  
          }
      return secondHead
  }

  