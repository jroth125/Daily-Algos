function invertBinaryTree(tree) {
    if (!tree.right && !tree.left) return;
    let left = tree.left
    tree.left = tree.right
    tree.right = left
    if (tree.right) invertBinaryTree(tree.right)
    if (tree.left) invertBinaryTree(tree.left)
}