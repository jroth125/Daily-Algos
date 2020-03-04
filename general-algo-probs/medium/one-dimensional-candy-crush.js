const crush = string => {
    let array = string.split('')
    let areTriplets = true

    while (areTriplets) {
        areTriplets = false
        let lastChar = ''
        let count = 1
        array.forEach((char, i) => {
            if (char === lastChar) {
                ++count
                if (count === 3) {
                    array.splice(i - 2, 3)
                    areTriplets = true
                    break;
                }
            } else {
                count = 1
                lastChar = char
            }
        })
    }
    return array.join('')
}