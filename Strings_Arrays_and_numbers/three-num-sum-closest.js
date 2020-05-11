const threeSumClosest = (nums, target) => {
    if (nums.length < 4) return nums.reduce((sum, num) => {
        return num + sum
    }, 0)
    nums.sort((a, b) => a - b)
    let diff = Infinity
    let sum;
    for (let i = 0; i < nums.length - 2; i++) {
        let curNum = nums[i]
        let L = i + 1
        let R = nums.length - 1
        while (L < R) {
            if (Math.abs(target - (curNum + nums[L] + nums[R])) < diff){
                sum = curNum + nums[L] + nums[R]
                diff = Math.abs(target - sum)
            }  
            if (curNum + nums[L] + nums[R] === target) return curNum + nums[L] + nums[R]
            else if ((curNum + nums[L] + nums[R]) > target) --R
            else ++L
        }
    }
    return sum
};