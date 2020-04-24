const myTree = require('../tests/tree-build')

function maxLevelsBreadthFirst (tree) {
    let queue = [tree, -1]
    let level = 0
    while (queue.length) {
        if (queue[0] === -1) {
            queue.shift()
            if (queue.length) {
                queue.push(-1)
                ++level
            }
        } else {
            let curNode = queue.shift()
            queue.push(...curNode.children)
        }
    }
    return level
}

console.log(maxLevelsBreadthFirst(myTree))