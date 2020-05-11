/*139. Word Break
Medium

Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false */


const wordBreak = (string, wordDict) => {
    let allWords = new Set(wordDict)
    return breakTheWord(string, wordDict, allWords)
};


function breakTheWord(string, wordDict, allWords, start = 0, memo = []) {
    if (start === string.length) return true
    if (memo[start] !== undefined) return memo[start]
    for (let end = start + 1; end <= string.length; end++) {
        let word = string.slice(start, end)
        if (allWords.has(word) && breakTheWord(string, wordDict, allWords, end, memo)) {
            memo[start] = true
            return true
        }
    }
    memo[start] = false
    return false
}

console.log(wordBreak("leetcode", ["leet", "code"]))