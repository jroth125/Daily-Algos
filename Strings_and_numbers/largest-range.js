function largestRange(array) {
      let nums = {}
      array.forEach(num => {
          nums[num] = true
      })
      let intervalLength = 0
      let interval = [0, 0]
      
      for (let curNum of array) {
          const curList = [curNum, curNum]
          checkRangeUp(curNum + 1, nums, curList)
          checkRangeDown(curNum - 1, nums, curList)
          nums[curNum] = false
          if (curList[curList.length - 1] - curList[0] >= intervalLength) {
              intervalLength = curList[curList.length - 1] - curList[0]
              interval = [curList[0], curList[curList.length - 1]]
          }
      }
      return interval
  }
  
  const checkRangeUp = (curNum, nums, curList) => {
      while (nums[curNum]) {
          curList.push(curNum) 
          nums[curNum] = false
          ++curNum
      }
      return;
  }
  
  const checkRangeDown = (curNum, nums, curList) => {
      while (nums[curNum]) {
          curList[0] = curNum
          nums[curNum] = false
          curNum--
      }
      return;
  }

