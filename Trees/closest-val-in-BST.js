function findClosestValueInBst(tree, target) {
    let curNode = tree
    let closest = Infinity

    while (curNode) {
        if (Math.abs(closest - target) > Math.abs(curNode.value - target)) {
            closest = curNode.value
        }
        let direction = target > curNode.value ? 'right' : 'left'
        curNode = curNode[direction]
    }

    return closest
}