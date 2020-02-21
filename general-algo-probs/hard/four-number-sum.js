function fourNumberSum(array, targetSum) {
    let newArr = array.sort((a, b) => a - b)
    let sums = []

    for (let i = 0; i < newArr.length - 3; i++) {
        let P1 = newArr[i]
        for (let j = i+1; j < newArr.length - 2; j++) {
            let P2 = newArr[j]
            let left = j + 1
            let right = newArr.length - 1

            while (left < right) {
                let curSum = newArr[left] + newArr[right] + P1 + P2
                if (curSum === targetSum) {
                    sums.push([newArr[left], newArr[right], P1, P2])
                    ++left
                    --right
                } else if (curSum < targetSum) {
                    ++left
                } else {
                    --right
                }
            }
        }
    }
    return sums
  }


  console.log(fourNumberSum([7, 6, 4, -1, 1, 2], 16))