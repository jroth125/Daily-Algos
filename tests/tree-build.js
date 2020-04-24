class NonBinaryTree {
    constructor(value) {
        this.value = value
        this.children = []
    }

    insertChildren(arrOfVals) {
        for (let i = 0; i < arrOfVals.length; i++) {
            let newNode = new NonBinaryTree(arrOfVals[i])
            this.children.push(newNode)
        }
    }
}

const treeTest = new NonBinaryTree(5)
treeTest.insertChildren([1, 6, 8])
treeTest.children[0].insertChildren([5, 9.8, 30])
treeTest.children[0].children[2].insertChildren([11, 34])
treeTest.children[0].children[2].children[0].insertChildren([29])
treeTest.children[1].insertChildren([100])
treeTest.children[2].insertChildren([39, 20, 33, 1000, 433])
treeTest.children[2].children[3].insertChildren([66, 67])
treeTest.children[2].children[3].children[0].insertChildren([99, 98])
treeTest.children[2].children[3].children[0].children[1].insertChildren([41])

module.exports = treeTest


