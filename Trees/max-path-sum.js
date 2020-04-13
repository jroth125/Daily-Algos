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
