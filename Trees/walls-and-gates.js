var wallsAndGates = function(rooms) {
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