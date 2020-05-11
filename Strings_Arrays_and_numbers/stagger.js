const battleship = (matrix, hasShip) => {
    
}

const stagger = (n, m, k) => {
    let array = Array(n).fill([])
    array.forEach((arr, i) => array[i] = Array(m).fill(0))
    for (let r = 0; r < n; ++r) {
        for (let c = r % k; c < m; c += k) {
            array[r][c] = 1
        }
    }
    return array
}

console.log(stagger(5, 6, 3))