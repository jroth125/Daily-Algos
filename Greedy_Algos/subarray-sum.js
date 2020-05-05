/*
560. Subarray Sum Equals K
Medium


Given an array of integers and an integer k, you need to find the total number of 
continuous subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2

Note:
The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
*/

// Using greedy algo that keeps a record of all the past sums in an object
// and then searches to see if any current number's sum minus a past number equals the target k
// if so, then we add to the count of subarrays
// if that number already existed, we increment our tally by the amount of times we had already
// hit that subarray sum
const subarraySum = (nums, k) => {
    let tally = 0
    let sum = 0
    let pastSums = {[sum] : 1}
    nums.forEach(num => {
        sum += num
        if (pastSums[sum - k]) tally += pastSums[sum - k]
        pastSums[sum] = pastSums[sum] ? pastSums[sum] + 1 : 1
    })
    
    return tally
    
}

const subarraySumSlower = (nums, k) => {
    let tally = 0
    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i]
        if (sum === k) tally++
        for (let j = i + 1; j < nums.length; j++) {
            sum += nums[j]
            if (sum === k) tally++
        }
    }
    return tally
};


