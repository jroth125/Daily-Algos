const mostCommonWord = (paragraph, banned) => {
    let parArray = paragraph.toLowerCase().split(/[ !?',;.]/).filter(a => a !== '');    
    let bannedWords = new Set(banned)
    let otherWords = {}
    for (let word of parArray) {
        if (!bannedWords.has(word) && word !== ' ') {
            if (!otherWords[word]) otherWords[word] = 1
            else otherWords[word]++
        } 
    }
    let max;
    let num = -Infinity
    console.log(otherWords)
    Object.keys(otherWords).forEach(word => {
        if (otherWords[word] > num) {
            max = word
            num = otherWords[word]
        }
    })
    
    return max
    
};