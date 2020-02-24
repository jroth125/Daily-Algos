// // non-optimal solution

// This is O(n^3) and O(1) space
function kadanesAlgorithmNonOptimal(array) {

    let most = -Infinity
    for (let i = 0; i < array.length; i++) {
        let curNum = array[i]

        for (let j = 0; j < i; j++) {
            let curSum = curNum
            for (let k = j; k < i; k++) {
                curSum += array[k]
            }
            most = curSum > most ? curSum : most
            curSum = -Infinity
        }
        most = curNum > most ? curNum : most
    }
    return most
  }

//   O(n) time and O(n) space
  function kadanesAlgorithm (array) {
      let sums = array.map(num => num)
      for (let i = 1; i < array.length; i++) {
          sums[i] = sums[i] + sums[i - 1] > sums[i] ? sums[i] + sums[i - 1] : sums[i]
      }
      return Math.max(...sums)
  }
  

  console.log(kadanesAlgorithm([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]))