

const exist = (board, word) => {
    let wordExists = false
    for (let r = 0; r < board.length; r++) {
        const row = board[r]
        for (let c = 0; c < row.length; c++) {
            if (board[r][c] === word[0]) {
                wordExists = wordExists || boardDepthFirst(0, word, board, r, c)
                if (wordExists) break;
            }
        }
    }
    return wordExists
};

const boardDepthFirst = (idx, string, board, r, c) => {
    if (idx === string.length - 1) return true
    let newCells = [[0,1], [0, -1], [1, 0], [-1, 0]]
    let fullWord = false
    board[r][c] = '~'
    for (let [rowAdd, colAdd] of newCells) {
        if (board[r + rowAdd] && board[r + rowAdd][c + colAdd] === string[idx + 1]) {
            fullWord = fullWord || boardDepthFirst(idx + 1, string, board, r + rowAdd, c + colAdd)
            if (fullWord) break;
        }
    }
    board[r][c] = string[idx]
    return fullWord
}


/* ALTERNATIVE, MORE INTUITIVE SOLUTION */

// var exist = function(board, word) {
//     for (let r = 0; r < board.length; r++) {
//         const row = board[r]
//         for (let c = 0; c < row.length; c++) {
//             if (board[r][c] === word[0]) {
//                 if (boardDepthFirst(0, word, board, r, c)) return true
//             }
//         }
//     }
//     return false
// };

// const boardDepthFirst = (idx, string, board, r, c) => {
//     if (idx === string.length - 1) return true
//     let newCells = [[0,1], [0, -1], [1, 0], [-1, 0]]
//     board[r][c] = '~'
//     for (let next of newCells) {
//         let [rowAdd, colAdd] = next
//         if (board[r + rowAdd] && board[r + rowAdd][c + colAdd] === string[idx + 1]) {
//                 if (boardDepthFirst(idx + 1, string, board, r + rowAdd, c + colAdd)) {
//                     return true
//                 }
//         }
//     }
//     board[r][c] = string[idx]
//     return false
// }
console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCCED'
  )
);
