/*
Leetcode 56: Merge Intervals
Medium

Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/

const merge = (intervals) => {
    if (!intervals.length) return []
    intervals.sort((a, b) => a[0] - b[0])
    let merged = [intervals[0]]
    for (let i = 1; i < intervals.length; i++) {
        let curInt = intervals[i]
        let lastMerged = merged[merged.length - 1]
        if (curInt[0] <= lastMerged[1]) {
            lastMerged[1] = Math.max(curInt[1], lastMerged[1])
        } else merged.push(curInt)
    }
    return merged
};