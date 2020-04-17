var triangleNumber = function(nums) {
    let total = 0
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        let firstNum = nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            let secondNum = nums[j]
            let minThird = firstNum + secondNum
            let idx = valOrLess(nums, minThird)
            if (idx > j) total += idx - j
        }
    }
    return total
};         

const valOrLess = (array, target) => {
    let left = 0
    let right = array.length - 1
    let idx;
    let lastNum;
    while (left <= right) {
        let mid = Math.floor((right + left )/ 2)
        if (array[mid] < target) {
            idx = mid
            left = mid + 1
            if (!lastNum || array[mid] >= lastNum) lastNum = array[mid]
        } else {
            right = mid - 1
        }
    }
    if (!idx) return -1
    return idx
}
