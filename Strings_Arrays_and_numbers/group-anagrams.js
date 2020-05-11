function groupAnagrams(words) {
    let sortedWords = words.map(word => word.toLowerCase().split('').sort().join(''))
    let prevWords = {}
    for (let i = 0; i < words.length; i++) {
        let curWord = sortedWords[i]
        if (!prevWords[curWord]) prevWords[curWord] = [i]
        else prevWords[curWord].push(i)
    }
    return Object.keys(prevWords).map(word => {
        return prevWords[word].map(idx => {
            return words[idx]
        })
    })
}

console.log(groupAnagrams(["yo", "act", "flop", "tac", "cat", "oy", "olfp"]))