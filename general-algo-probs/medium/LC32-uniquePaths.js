function getCurVal(array, row, col) {
   return array[row][col - 1] + array[row - 1][col]
}

const uniquePaths = function(m, n) {
    let array = Array(m).fill(Array(n).fill(0))
    array[0].forEach((num, i) => {
        array[0][i] = 1
    })
    array.forEach((arr, i) => {
        array[i][0] = 1
    })
    for (let r = 1; r < array.length; r++) {
        let curRow = array[r]
        for (let c = 1; c < curRow.length; c++) {
            curRow[c] = getCurVal(array, r, c)
        }
    }
    return array[m - 1][n - 1]
};

console.log(uniquePaths(3, 3))