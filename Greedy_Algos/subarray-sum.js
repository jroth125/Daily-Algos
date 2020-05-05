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


