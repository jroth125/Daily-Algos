function binarySearch(array, target) {

      let left = 0
      let right = array.length - 1
      
      while (left <= right) {
          mid = Math.floor((left + right) / 2)
          if (array[mid] === target) return mid
          if (target > array[mid]) {
              left = mid + 1
          } else {
              right = mid - 1
          }
      }
      return -1
  }

  console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4))