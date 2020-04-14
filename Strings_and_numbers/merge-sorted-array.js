
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