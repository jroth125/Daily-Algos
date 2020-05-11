/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

const twoSum = (nums, target) => {
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