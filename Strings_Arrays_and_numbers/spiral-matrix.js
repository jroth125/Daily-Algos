/*
LeetCode 54: Spiral Matrix
Medium

Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

const spiralOrder = (matrix) => {
    let order = []
    let visited = Array(matrix.length).fill([])
    visited.forEach((_, r) => {
        visited[r] = Array(matrix[0].length).fill(0)
    })
    
    helper(matrix, visited, 'right', 0, 0, order)
    return order

    
};

function helper(matrix, visited, direction, row, col, order) {
    if (matrix[row] === undefined || matrix[row][col] === undefined || visited[row][col]) return;
    order.push(matrix[row][col])
    visited[row][col] = 1
    if (direction === 'right') {
        if (col + 1 < matrix[0].length && visited[row][col + 1] === 0) {
            helper(matrix,visited, direction, row, col + 1, order)
        } else {
            helper(matrix, visited, 'down', row + 1, col, order)
        }
    } else if (direction === 'down') {
        if (row + 1 < matrix.length && visited[row+1][col] === 0) {
            helper(matrix, visited, direction, row + 1, col, order)
        } else {
            helper(matrix, visited, 'left', row, col - 1, order)
        }
    } else if (direction === 'left') {
        if (col - 1 >= 0 && visited[row][col - 1] === 0) {
            helper(matrix, visited, direction, row, col - 1, order)
        } else {
            helper(matrix, visited, 'up', row - 1, col, order)
        }
    } else if (direction === 'up') {
        if (row - 1 >= 0 && visited[row - 1][col] === 0) {
            helper(matrix, visited, direction, row - 1, col, order)
        } else {
            helper(matrix, visited, 'right', row, col + 1, order)
        }
    }
}
