const allPathsSourceTarget = (graph, curIdx = 0, curPath = [0], paths = []) => {
    // if (curIdx === graph.length - 1)
    if (curIdx === graph.length - 1) return [...paths, curPath]
    if (!graph[curIdx].length) return;
    for (let i = 0; i < graph[curIdx].length; i++) {
        let newIdx = graph[curIdx][i]
        let newCurPath = [...curPath]
        newCurPath.push(newIdx)
        paths = allPathsSourceTarget(graph, newIdx, newCurPath, paths)
    }
    
    return paths
};