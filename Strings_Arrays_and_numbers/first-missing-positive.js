/*
41. First Missing Positive
Hard

Given an unsorted integer array, find the smallest missing positive integer.

Example 1:

Input: [1,2,0]
Output: 3
Example 2:

Input: [3,4,-1,1]
Output: 2
Example 3:

Input: [7,8,9,11,12]
Output: 1
Note:

Your algorithm should run in O(n) time and uses constant extra space.
*/

const firstMissingPositive = (nums) => {
  let found1 = false;
  nums.forEach((num, i) => {
    if (num === 1) found1 = true;
    if (num < 1 || num > nums.length) {
      nums[i] = 1;
    }
  });
  if (!found1) return 1;

  for (let i = 0; i < nums.length; i++) {
    let number = Math.abs(nums[i]);
    if (nums[number - 1] > 0) {
      nums[number - 1] *= -1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return i + 1;
  }
  return nums.length + 1;
};
