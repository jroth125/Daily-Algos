var searchRange = function(nums, target) {
    let leftBound = getBoundIdx(nums, target, 'left')
    let rightBound = getBoundIdx(nums, target, 'right')
    
    return leftBound !== undefined ? [leftBound, rightBound] : [-1, -1]
};

function getBoundIdx(nums, target, bound) {
    let left = 0
    let right = nums.length - 1
    let boundIdx;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] > target) right = mid - 1
        if (nums[mid] < target) left = mid + 1
        if (nums[mid] === target) {
            boundIdx = mid
            if (bound === 'left') right = mid - 1
            else left = mid + 1
        }
    }
    return boundIdx
}