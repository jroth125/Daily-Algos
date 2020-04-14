/*
LeetCode 102: Binary Tree Level Order Traversal
Medium

Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
*/

var levelOrder = function(tree, count = 0, levels = []) {
    if (!tree) return []
    if (!levels[count]) levels[count] = []
    levels[count].push(tree.val)

    if (tree.left) levelOrder(tree.left, count + 1, levels)
    if (tree.right) levelOrder(tree.right, count + 1, levels)

    return levels
};