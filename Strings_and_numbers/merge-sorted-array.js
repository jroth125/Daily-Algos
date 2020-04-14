
/*
LeetCode 88: Merge Sorted Array

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) 
to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
*/

// O(n + m) time and O(n + m) space 
// Here we push into our own array and then copy the numbers in that array to nums1
const mergeSortedArray = (nums1, m, nums2, n) => {
    let merged = []
    let p1 = 0
    let p2 = 0
    
    while (p1 < m && p2 < n) {
        if (nums1[p1] === nums2[p2]) {
            merged.push(nums1[p1], nums2[p2])
            ++p1; ++p2;
        } else if (nums1[p1] < nums2[p2]) {
            merged.push(nums1[p1])
            ++p1
        } else {
            merged.push(nums2[p2])
            ++p2
        }
    }
    if (p1 < m) pushRest(merged, p1, nums1, m)
    else if (p2 < n) pushRest(merged, p2, nums2, n)
    
    merged.forEach((mergeNum, i) => {
        nums1[i] = mergeNum
    })
    return nums1
};

function pushRest(merged, pointer, numsArr, end) {
    for (let i = pointer; i < end; i++) {
        merged.push(numsArr[i])
    }
}





// O(n + m) time and O(1) space (in place)
// Here we have pointers p1 and p2 which are tracking the current numbers to compare
// and we also have p, which is tracking the next index in the nums1 array to swap
const mergeBetter = (nums1, m, nums2, n) => {
    debugger;
    let p = nums1.length - 1
    let p1 = m - 1
    let p2 = n - 1
    
    while (p1 >= 0 && p2 >= 0) {
        if (nums2[p2] > nums1[p1]) {
            nums1[p] = nums2[p2]
            --p2; --p
        } else {
            nums1[p] = nums1[p1]
            --p1; --p
        }
    }
    while (p2 >= 0){
        nums1[p] = nums2[p2]
        --p2; --p;
    }
    return nums1
}

console.log(mergeBetter([1,2,3,0,0,0], 3, [2,5,6], 3))