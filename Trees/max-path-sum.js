/*
AlgoExpert: MaxPathSum in a Binary Tree

    A path is a collection of connected nodes in a tree where no node is connected
  to more than two other nodes; a path sum is the sum of the values of the nodes
  in a particular path.

  get the max path sum in a binary tree. 

       1
    /     \
   2       3
 /   \   /   \
4     5 6     7

here max path sum is 18 because of 5 + 2 + 1 + 3 + 7
*/

function maxPathSum(tree) {
  let [maxBranchRight, runMaxRight] = tree.right ? maxSums(tree.right) : [0, 0];
  let [maxBranchLeft, runMaxLeft] = tree.left ? maxSums(tree.left) : [0, 0];

  let maxBranchChild = Math.max(maxBranchRight, maxBranchLeft);
  let maxBranch = Math.max(maxBranchChild + tree.value, tree.value);
  let maxTriangle = Math.max(maxBranch, maxBranchLeft + tree.value + maxBranchRight);
  let runningMaxPathSum = Math.max(maxTriangle, runMaxRight, runMaxLeft);

  return runningMaxPathSum;
}

function maxSums(tree) {
  if (!tree.left && !tree.right) return [tree.value, tree.value];

  let [maxBranchLeft, runMaxLeft] = tree.left ? maxSums(tree.left) : [0, 0];
  let [maxBranchRight, runMaxRight] = tree.right ? maxSums(tree.right) : [0, 0];
  let maxBranchChild = Math.max(maxBranchRight, maxBranchLeft);

  let maxBranch = Math.max(maxBranchChild + tree.value, tree.value);
  let maxTriangle = Math.max(maxBranch, maxBranchLeft + tree.value + maxBranchRight);
  let runningMaxPathSum = Math.max(maxTriangle, runMaxRight, runMaxLeft);
  return [maxBranch, runningMaxPathSum];
}
