function groupAnagrams(words) {
    let sortedWords = words.map(word => word.toLowerCase().split('').sort().join(''))
    let prevWords = {}
    for (let i = 0; i < words.length; i++) {
        let curWord = sortedWords[i]
        if (!prevWords[curWord]) prevWords[curWord] = [words[i]]
        else prevWords[curWord].push(words[i])
    }
    return Object.values(prevWords)
}



console.log(groupAnagrams(["yo", "act", "flop", "tac", "cat", "oy", "olfp"]))