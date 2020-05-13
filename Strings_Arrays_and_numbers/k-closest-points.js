/*
973. K Closest Points to Origin
Medium


We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

(Here, the distance between two points on a plane is the Euclidean distance.)

You may return the answer in any order.  The answer is guaranteed to be unique 
(except for the order that it is in.)
*/

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