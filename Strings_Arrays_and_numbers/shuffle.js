const shuffle = array => {
    let length = array.length - 1

    while (length) {
        let randIdx = Math.floor(Math.random() * length)
        let curVal = array[length]
        array[length] = array[randIdx]
        array[randIdx] = curVal
        length--
    }
    return array
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))