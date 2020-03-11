let myGraph = {
    a: ['b'],
    b: ['c'],
    c: ['c', 'd', 'e'],
    d: ['b'],
    e: []
}

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

console.log(doesPathExist(myGraph, 'd', 'a'))