/*
Leetcode 543: Diameter of Binary Tree
"Easy" - although to me this was a medium!

Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree
          1
         / \
        2   3
       / \     
      4   5    
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.

var diameterOfBinaryTree = function(tree, level = 1) {
    if (!tree) return 0
    let [curDiam, maxDepth] = diamAndLength(tree)
    return Math.max(curDiam, maxDepth)

};*/
const diameterOfBinaryTree = (tree) => {
    if (!tree) return 0
    let [curDiam, maxDepth] = diamAndLength(tree)
    return Math.max(curDiam, maxDepth)

};

function diamAndLength(tree) {
    if (!tree.right && !tree.left) return [0, 0]
    let [leftDiam, leftMaxDepth] = tree.left ? diamAndLength(tree.left) : [0, -1]
    let [rightDiam, rightMaxDepth] = tree.right ? diamAndLength(tree.right) : [0, -1]
    ++leftMaxDepth; ++rightMaxDepth
    let curDiam = Math.max(leftMaxDepth + rightMaxDepth, rightDiam, leftDiam)
    return [curDiam, Math.max(leftMaxDepth, rightMaxDepth)]
}