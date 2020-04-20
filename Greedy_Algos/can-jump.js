const canJump = (nums, curIdx = 0) => {
    if (curIdx >= nums.length) return 0 
    if (curIdx === nums.length - 1) return 1
    let possible = 0
    for (let i = nums[curIdx]; i > 0; i--){
        possible += canJump(nums, curIdx + i)
    }
    return possible > 0
};

console.log(canJump([1, 0, 1,1, 1,3, 4]))
