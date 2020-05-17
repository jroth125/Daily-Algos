const depthInParentheses = string => {
    let curDepth = 0
    let maxDepthWithString = 0
    let arrOfStrings = []
    let lastCharWasLetter = true
    
    for (let i = 0; i < string.length; i++) {
        const char = string[i]
        if (char === '(') {
            curDepth++
            lastCharWasLetter = false
        }
        else if (char === ')') {
            curDepth--
            lastCharWasLetter = false
        }
        else {
            if (curDepth > maxDepthWithString) {
                arrOfStrings = [char]
                lastCharWasLetter = true
                maxDepthWithString = curDepth
            } else if (curDepth === maxDepthWithString) {
                if (lastCharWasLetter) {
                    arrOfStrings[arrOfStrings.length - 1] += char
                } else {
                    arrOfStrings.push(char)
                }
                lastCharWasLetter = true
            } 
        }
    }
    return arrOfStrings
}

console.log(depthInParents('(((fg)(jj))(f))'))