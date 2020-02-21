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
                let curSum = 
            }
        }
    }
  }