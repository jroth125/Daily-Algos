// var wordBreak = function(string, wordDict) {
//     debugger;
//     const usedWords = Array(wordDict.length).fill(false)
//     let breaks = breakTheWord(string, wordDict, usedWords)
//     if (usedWords.indexOf(false) === -1 && breaks > 0) return true
//     else return false
// };


// function breakTheWord(string, wordDict, used) {
//         let wordBreaks = 0
//     for (let dictIdx = 0; dictIdx < wordDict.length; dictIdx++) {
//         const word = wordDict[dictIdx]
//         if (word.length > string.length) continue;
//         let curWord = string.slice(0, word.length)
//         if (curWord === word && string.length === word.length) return 1 
//         else if (curWord === word) {
//             used[dictIdx] = true
//             let newString = string.slice(word.length)
//             wordBreaks += breakTheWord(newString, wordDict, used)
//         }
//     }
//     return wordBreaks
// }


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