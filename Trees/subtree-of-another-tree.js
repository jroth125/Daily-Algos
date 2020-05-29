// 572. Subtree of Another Tree
// Easy

// Given two non-empty binary trees s and t, check whether tree t has exactly the same 
// structure and node values with a subtree of s. A subtree of s is a tree consists of a node in
//  s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

// Example 1:
// Given tree s:

//      3
//     / \
//    4   5
//   / \
//  1   2
// Given tree t:
//    4 
//   / \
//  1   2
// Return true, because t has the same structure and node values with a subtree of s.
 

// Example 2:
// Given tree s:

//      3
//     / \
//    4   5
//   / \
//  1   2
//     /
//    0
// Given tree t:
//    4
//   / \
//  1   2
// Return false.

const isSubtree = (parent, tree) => {
    let queue = [parent]
    while (queue.length) {
        let curNode = queue.shift()
        if (curNode.val === tree.val) {
            const theTreesAreTheSame = treesEqual(curNode, tree)
            if (theTreesAreTheSame) return true
        }
        if (curNode.left) queue.push(curNode.left)
        if (curNode.right) queue.push(curNode.right)
    }
    return false
};

const treesEqual = (curNode, tree) => {
    if ((!curNode && tree) || (!tree && curNode)) return false
    if (!curNode && !tree) return true
    if (curNode.val === tree.val) {
        let left = treesEqual(curNode.left, tree.left)
        let right = treesEqual(curNode.right, tree.right)
        return left && right
    } else {
        return false
    }
}