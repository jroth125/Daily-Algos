function hasSingleCycle(array) {
    let countArr = Array(array.length).fill(0)
    let counter = 0
    let i = 0
    while (counter < array.length) {
        ++counter
        if (countArr[i] > 0) return false
        ++countArr[i]
        i = (i + array[i] + 6) % 6
    }
    return !countArr.some(num => num > 1)
  }