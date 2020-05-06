/*199. Binary Tree Right Side View
Medium

Given a binary tree, imagine yourself standing on the right side of it, return the values
of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---

  */


//   breadth first search keeping track of the level that we are at in the tree
// for each level, we add the rightmost node, aka, the last index of the queue when we hit 
// the level delimiter, -1
 const rightSideView = (tree) => {
    if (!tree) return []
    let queue = [tree, -1]
    let answers = [tree.val]
    while (queue.length) {
        let curNode = queue.shift()
        if (curNode === -1) {
            if (queue.length) {
                answers.push(queue[queue.length - 1].val)
                queue.push(-1)
            }
        } else {
            if (curNode.left) queue.push(curNode.left)
            if (curNode.right) queue.push(curNode.right)
        }
    }
    return answers
};

