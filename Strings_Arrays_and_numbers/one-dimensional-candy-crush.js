const crush = string => {
    let array = string.split('')
    let areTriplets = true

    while (areTriplets) {
        areTriplets = false
        let lastChar = ''
        let count = 1
        for (let i = 0; i < array.length; i++) {
            let char = array[i]
            if (char === lastChar) {
                ++count
                if (count === 3) {
                    array.splice(i - 2, 3)
                    areTriplets = true
                    i -= 2
                }
            } else {
                count = 1
                lastChar = char
            }
        }
    }
    return array.join('')
}

console.log(crush('aabbbacddd'))