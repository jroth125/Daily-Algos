function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

const copyRandomList = head => {
  let counter = 0;
  let curNode = head;
  let mapOfNodes = new Map();

  while (curNode) {
    mapOfNodes.set(curNode, counter);
    curNode = curNode.next
    ++counter
  }

  curNode = head
  let randomPointers = []
  while (curNode){
      randomPointers.push(mapOfNodes.get(curNode.random))
      curNode = curNode.next
  }

 
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

  curNewNode = newHead
  counter = 0
  while (curNewNode) {
    curNewNode.random = allNewNodes[randomPointers[counter]]
    ++counter
    curNewNode = curNewNode.next
  }
  return newHead
};
