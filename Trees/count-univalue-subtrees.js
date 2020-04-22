/* 
Leetcode 250. Count Univalue Subtrees
Medium

Given a binary tree, count the number of uni-value subtrees.

A Uni-value subtree means all nodes of the subtree have the same value.

Example :

Input:  root = [5,1,5,5,5,null,5]

              5
             / \
            1   5
           / \   \
          5   5   5

Output: 4
*/

const countUnivalSubtrees = (root) => {
    if (!root) return 0
    return countSubtrees(root)[0]
};

function countSubtrees(tree) {
    if (!tree) return [0, true]
    if (!tree.right && !tree.left) return [1, true]
    let [LNumOfUnivals, LUnivalBool] = countSubtrees(tree.left)
    let [RNumOfUnivals, RUnivalBool] = countSubtrees(tree.right) 
    
    let leftVal = tree.left ? tree.left.val : tree.val
    let rightVal = tree.right ? tree.right.val : tree.val
    
    let isEqualToChildren = (tree.val === leftVal) && (tree.val === rightVal)
    let isSubtree = isEqualToChildren && LUnivalBool && RUnivalBool
    let sumSubtrees = 0
    if (isSubtree) sumSubtrees++
    sumSubtrees += LNumOfUnivals + RNumOfUnivals
    
    return [sumSubtrees, isSubtree]
}