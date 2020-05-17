/*
286. Walls and Gates
Medium

You are given a m x n 2D grid initialized with these three possible values.

-1 - A wall or an obstacle.
0 - A gate.
INF - Infinity means an empty room. We use the value 231 - 1 = 2147483647 to 
represent INF as you may assume that the distance to a gate is less than 2147483647.
Fill each empty room with the distance to its nearest gate. If it is impossible to 
reach a gate, it should be filled with INF.

Example: 

Given the 2D grid:

INF  -1  0  INF
INF INF INF  -1
INF  -1 INF  -1
  0  -1 INF INF
After running your function, the 2D grid should be:

  3  -1   0   1
  2   2   1  -1
  1  -1   2  -1
  0  -1   3   4
*/

const wallsAndGates = (rooms) => {
    //get all the empty rooms in a single array

    const queue = []
    for (let row = 0; row < rooms.length; row++) {
        let curRow = rooms[row]
        for (let col = 0; col < curRow.length; col++) {
            if (rooms[row][col] === 0) queue.push([row, col])
        }
    }

    //breadthFirstSearch
    queue.push('*')
    let curDepth = 1
    let offSet = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    while (queue.length) {
        const cell = queue.shift()
        if (cell === '*' && queue.length) {
            curDepth++
            queue.push('*')
        } else {
            let [row, col] = cell
            for (let [rowAdd, colAdd] of offSet) {
                if (rooms[row + rowAdd] && rooms[row + rowAdd][col + colAdd] === Infinity) {
                    rooms[row + rowAdd][col + colAdd] = curDepth 
                    queue.push([row + rowAdd, col + colAdd])
                }
            }
        }
    }
   return rooms
}

let testCase = [
    [Infinity, -1, 0, Infinity],
    [Infinity, Infinity, Infinity, -1],
    [Infinity, -1, Infinity, -1],
    [0, -1, Infinity, Infinity]
]

console.log(wallsAndGates(testCase))