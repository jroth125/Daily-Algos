//Selection sort!

//This takes up O(n^2) time but O(1) space

function selectionSort(array) {
      
      for (let i = 0; i < array.length; i++) {
          let smallest = Infinity;
          let smallestIdx;
          for (let j = i; j < array.length; j++) {
              if (array[j] < smallest) {
                  smallest = array[j]
                  smallestIdx = j
              }
          }
          let prevLeft = array[i]
          array[i] = array[smallestIdx]
          array[smallestIdx] = prevLeft
      }
      return array
  }