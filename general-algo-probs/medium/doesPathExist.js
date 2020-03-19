

const doesPathExist = (graph, a, b, past = {}) => {
    if (past[a]) return;
    if (a === b) return true
    past[a] = true
    let isPath = false
    graph[a].forEach(node => {
        if (doesPathExist(graph, node, b, past)) isPath = true
    })
    return isPath
}

const doesPathExistBFS = (graph, start, end) => {
    let queue = []
    while (queue.length) {
        
    }
}



//testing
let myGraph = {
    a: ['b'],
    b: ['c'],
    c: ['c', 'd', 'e'],
    d: ['b'],
    e: []
}

console.log(doesPathExist(myGraph, 'd', 'a'))