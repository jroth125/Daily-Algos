function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

/*
138. Copy List with Random Pointer
Medium

A linked list is given such that each node contains an additional random pointer 
which could point to any node in the list or null.

Return a deep copy of the list.

The Linked List is represented in the input/output as a list of n nodes. 
Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) where random pointer points to, 
or null if it does not point to any node.
 

Example 1:


Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
Example 2:


Input: head = [[1,1],[2,1]]
Output: [[1,1],[2,1]]
Example 3:



Input: head = [[3,null],[3,0],[3,null]]
Output: [[3,null],[3,0],[3,null]]
Example 4:

Input: head = []
Output: []
Explanation: Given linked list is empty (null pointer), so return null.
 

Constraints:

-10000 <= Node.val <= 10000
Node.random is null or pointing to a node in the linked list.
Number of Nodes will not exceed 1000. 
*/

const copyRandomList = head => {
    // step1: make a javascript Map of all the nodes and their "index" (order) in the list
  let counter = 0;
  let curNode = head;
  let mapOfNodes = new Map();

  while (curNode) {
    mapOfNodes.set(curNode, counter);
    curNode = curNode.next
    ++counter
  }

//   Step2: push into a new array the index of each Node's random pointer
  curNode = head
  let randomPointers = []
  while (curNode){
      randomPointers.push(mapOfNodes.get(curNode.random))
      curNode = curNode.next
  }

//  step3: start making the new list, but only put in the next pointers for now.
// Also push each of the new nodes into an array called allNewNodes
  let newHead = new Node(head.val)
  curNode = head.next
  let curNewNode = newHead
  let allNewNodes = [newHead]
  while (curNode) {
      curNewNode.next = new Node(curNode.val)
      curNewNode = curNewNode.next
      allNewNodes.push(curNewNode)
      curNode = curNode.next
  }
// step4: using the array of random pointers, match the new node with its appropriate random pointer
  curNewNode = newHead
  counter = 0
  while (curNewNode) {
    curNewNode.random = allNewNodes[randomPointers[counter]]
    ++counter
    curNewNode = curNewNode.next
  }
  return newHead
};
