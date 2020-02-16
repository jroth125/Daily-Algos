/*
Given a binary tree, return the sum of values of its deepest leaves.
Example: Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
Output: 15
*/

var deepestLeavesSum = function(root, level = 1) {
    let levelObj = {}
    findDeepest(root, 1, levelObj)
    let maxLevel = Math.max(...Object.keys(levelObj))
    return levelObj[maxLevel]
};

function findDeepest(tree, level, levelObj) {
    let newLevel = level + 1
    if (!tree.left && !tree.right) {
        if (!levelObj[newLevel]) {
            levelObj[newLevel] = tree.val
        } else {
            levelObj[newLevel] = levelObj[newLevel] + tree.val
        }
    } else {
        if (tree.left) {
            findDeepest(tree.left, newLevel, levelObj)
        }

        if (tree.right) {
            findDeepest(tree.right, newLevel, levelObj)
        }
    }
}