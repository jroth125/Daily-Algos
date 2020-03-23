// var removeDuplicates = function(nums) {
//     debugger;
//     if (nums.length < 2) return nums
//     let beg=0, end=0;
//     for (let i = 0; i < nums.length; i++) {
//         let curNum = nums[i];
//         if (curNum === nums[beg]) end = i
//         else {
//             nums.splice(beg, end - beg)
//             beg = end = i = i - (end - beg)
//         }
//     }
//     return nums
// };

var removeDuplicates = function(nums) {
    let i = 0
    let j = 1
    while (j < nums.length) {
        if (nums[j] !== nums[i]) {
            ++i
            nums[i] = nums[j]
        }
        ++j
    }

};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 5, 5, 6]))