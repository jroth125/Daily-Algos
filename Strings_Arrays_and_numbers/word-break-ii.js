function makeWords (string, possibleWords, start = 0, arrOfStrings = [], curPhrase = '', memo = {}) {
    debugger;
    if (start === string.length) {
        arrOfStrings.push(curPhrase)
    }
    if (memo[start] !== undefined) {
        let newArrOfStrings = []
        memo[start].forEach(phrase => {
            newArrOfStrings.push(curPhrase + ' ' + phrase)
        })
        arrOfStrings.push(...newArrOfStrings)
    } else {
        for (let end = start + 1; end <= string.length; end++) {
        let curWord = string.slice(start, end)
        if (possibleWords.has(curWord)) {
            let newPhrase = curPhrase.length ? curPhrase + ' ' + curWord : curWord
            makeWords(string, possibleWords, end, arrOfStrings, newPhrase, memo)
        }
        }
    }
    memo[start] = [...arrOfStrings]
    return arrOfStrings
}

let mySetOfWords = new Set(['a', 'aa', 'bb', 'cc'])
console.log(makeWords('aaabbcc', mySetOfWords))