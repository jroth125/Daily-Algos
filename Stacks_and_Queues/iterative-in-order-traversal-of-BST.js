// alternative answer to AlgoExpert: Iterative In-Order Traversal
// Iterate through a binary tree in-order without using recursion:


// I am using a stack and popping off the stack when I am done with the left side of it branch
function iterativeInOrderTraversal(tree, callback) {
      if (!tree.left && !tree.right) {
          callback(tree)
          return;
      }
      let stack = []
      let curNode = tree
      let backAgain = false
      while (!!stack.length || (curNode.right || curNode.left)) {
          if (!backAgain && curNode.left) {
              stack.push(curNode)
              curNode = curNode.left
              continue;
          }
          callback(curNode)
          if (curNode.right) {
              backAgain = false
              curNode = curNode.right
          } else {
              curNode = stack.pop()
              backAgain = true
          }
      }
      if (curNode) callback(curNode)
  }

