// Given an array and a target value, find all of the three-integer groups in the array that
// add up to the target sum. Then return an array of arrays of those integers, in sorted/ascending order

// This solution has an O(n^2) time complexity, because you are essentially doing 
// a nested loop for each number in the array. You also have to sort the array
// first, which is O(log(n)), although with a worst case input, the sorting
// is overtaken by the more complex O(n^2) part.

function threeNumberSum(array, targetSum) {
    let sums = [];
    array.sort((a, b) => a - b)
    for (let i = 0; i < newArr.length - 2; i++) {
        let num = newArr[i]
        let left = i + 1
        let right = array.length - 1
        while (left < right) {
            let curSum = num + newArr[left] + newArr[right]
            if (curSum < targetSum) {
                ++left
            } else if (curSum > targetSum) {
                --right
            } else {
                sums.push([num, newArr[left], newArr[right]])
                ++left
                --right
            }
        }
    }
    return sums
}

