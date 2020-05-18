const doesIntOccurLaterInArray = array => {
    let seen = new Set
    for (let i = array.length - 1; i >= 0; i--) {
        if (!seen.has(array[i])) {
            seen.add(array[i])
            array[i] = false
        } else {
            array[i] = true
        }
    }
    return array
}

console.log(doesIntOccurLaterInArray([1, 2, 3, -5, 2, 3, -5, 6]))