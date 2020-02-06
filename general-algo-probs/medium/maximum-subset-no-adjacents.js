
function maxSubsetSumNoAdjacent(array) {
    // Write your code here.
      if (array.length === 0) return 0
      let newArr = []
      array.forEach((el, i) => {
          if (i === 0 || i === 1) newArr.push(el)
          else {
              let shorterNewArr = newArr.slice(0, i - 1)
              newArr.push(Math.max(...shorterNewArr) + el)
          }
      })
      return Math.max(...newArr)
  }

//Optimized
function maxSubsetSumNoAdjacent(array) {
    let newArr = [array[0], array[1]]

    for (let i = 2; i < array.length; i++) {
        let newSum = array[i - 1] > array[i - 2] + array[i] ? array[i - 1] : array[i - 2] + array[i]
        newArr.push(newSum)
    }
    return Math.max(...newArr)
  }