/*
Leetcode 74. Search a 2D Matrix

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
Example 1:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
*/

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
        else if (curVal > target) right = mid - 1
        else left = mid + 1
    }
    return false
};