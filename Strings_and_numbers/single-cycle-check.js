function hasSingleCycle(array) {
    let countArr = Array(array.length).fill(0)
    let counter = 0
    let i = (array[0] + array.length) % array.length
    while (counter < array.length) {
        ++counter
        if (countArr[i] > 0) return false
        ++countArr[i]
        i = (i + array[i] + array.length) % array.length
        if (Math.sign(i) === -1) {
            i = array.length - ((-1 * i) % array.length)
        }
    }
    return !countArr.some(num => num > 1 || num === 0)
  }
