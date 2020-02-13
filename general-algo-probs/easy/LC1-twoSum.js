const twoSum = (nums, target) => {
    debugger;
    let numObj = {}
    let arr = []

    for (let i = 0; i < nums.length; i++) {
        let curNum = nums[i]
        if (numObj[curNum] === undefined) {
            numObj[target - curNum] = i
        } else {
            let otherIdx = numObj[curNum]
            return [otherIdx, i]
        }
    }
    return arr
}

console.log(twoSum([2, 7, 11, 15], 9))