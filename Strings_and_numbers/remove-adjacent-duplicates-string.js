var removeDuplicates = function(string) {
    debugger;
    let duplicates = true
    let arrString = string.split('')
    while (duplicates) {
        duplicates = false
        let lastChar;
        loop2:
        for (let i = 0; i < arrString.length; i++) {
            let curChar = arrString[i]
            if (curChar !== lastChar) lastChar = curChar
            else {
                duplicates = true
                lastChar = undefined || arrString[i - 2]
                arrString.splice(i - 1, 2)
                i = arrString.length - 1
            }
        }
        return arrString.join('')
    }
};

console.log(removeDuplicates('abbaca'))