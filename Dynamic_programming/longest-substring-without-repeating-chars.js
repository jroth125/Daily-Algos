
/*
3. Longest Substring Without Repeating Characters
Medium
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
const lengthOfLongestSubstring = (string) => {
    if (!string.length) return 0
    const lastSeen = {[string[0]]: 0}
    let lengths = Array(string.length).fill(1)
    let start = 0
    for (let i = 1; i < string.length; i++) {
        let char = string[i]
        if (lastSeen[char] === undefined || lastSeen[char] < start) {
            lengths[i] = lengths[i - 1] + 1
            lastSeen[char] = i
        } else {
            start = lastSeen[char]
            lengths[i] = i - start
            lastSeen[char] = i
        }
    }
    return Math.max(...lengths)
};

