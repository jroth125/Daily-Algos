const longestCommonPrefix = (strs) => {
    if (!strs.length) return ''
    let prefix = ''
    let curIdx = 0
    let curChar = strs[0][0]
    while (curIdx < strs[0].length) {
        let isPrefix = true
        strs.forEach(string => {
            if (string[curIdx] !== curChar) isPrefix = false;
        })
        if (isPrefix) {
        prefix += curChar
        curChar = strs[0][++curIdx]
        } else return prefix
    }
    return prefix
};