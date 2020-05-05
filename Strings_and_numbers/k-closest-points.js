var kClosest = function(points, K) {
    
    const distances = points.map(([x, y], idx) => [Math.sqrt(x**2 + y**2), idx])
    distances.sort((a, b) => a[0] - b[0])
    const kPoints = []
    for (let i = 0; i < K; i++) {
        let idx = distances[i][1]
        kPoints.push(points[idx])
    }
    
    return kPoints
};