const removeDuplicates = (string, k) => {
    let count = []
    let chars = []
    for (let i = 0; i < string.length; i++) {
        let curChar = string[i]
        if (i === 0 || chars[chars.length - 1] !== curChar) {
            chars.push(curChar)
            count.push(1)
        } else {
            ++count[count.length - 1]
            if (count[count.length - 1] === k) {
                count.pop()
                chars.pop()
            }
        }
    }
    let finalString = []
    for (let i = 0; i < count.length; i++) {
        for (let j = 0; j < count[i]; j++) {
            finalString.push(chars[i])
        }
    }
    return finalString.join('')
};

console.log(removeDuplicates('aabbbacccadd', 3))