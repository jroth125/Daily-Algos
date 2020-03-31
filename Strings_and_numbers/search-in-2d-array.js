var searchMatrix = function(matrix, target) {
    if (!matrix.length) return false
    let L = 0
    let R = matrix.length - 1
    let mid;
    while (L < R) {
        mid = Math.floor((L + R) / 2)
        let midPoint = matrix[mid][matrix[mid].length - 1]
        if (target === midPoint) return true
        else if (midPoint > target) R = mid
        else L = mid + 1
    }
    
    mid = Math.floor((L + R) / 2)
    let curArr = matrix[mid]
    let left = 0
    let right = curArr.length - 1
    while (left <= right) {
        let curMid = Math.floor((left + right) / 2)
        let curVal = curArr[curMid]
        if (curVal === target) return true
        else if (curVal > target) right = curMid - 1
        else left = curMid + 1
    }
    return false
};