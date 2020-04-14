// AlgoExpert: shifted binary search

// Find the index of a target number in an arrary where the array is "shifted"
// By shifted, we mean that the array was once a sorted array, but has been
// moved by one or more indeces to the right or left, so that at a break point
// the numbers revert back to the min number and start increasing again

// Example: 
// shiftedBinarySearch([4, 5, 5, 6, 1, 2], 1) ==> returns 4 in log(n) time

function shiftedBinarySearch(array, target) {
    // Write your code here.
      let L = 0
      let R = array.length - 1
      
      while (L <= R) {
          let mid = Math.floor((L + R) / 2)
          let lVal = array[L], rVal = array[R], midVal = array[mid]
          if (midVal === target) return mid
          if (lVal <= midVal) {
              if (target >= lVal && target <= midVal) {
                  R = mid - 1
              } else L = mid + 1
          } else {
              if (target <= rVal && target >= midVal) L = mid + 1
              else R = mid - 1
          }
      }
      return -1
  }