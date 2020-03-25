const isAnagram = (str1, str2) => {
    let hash = {}
    for (let i = 0; i < str1.length; i++) {
        if (!hash[str1[i]]) hash[str1[i]] = 1
        else ++hash[str1[i]]
    }
    let hash2 = {}
    for (let i = 0; i < str2.length; i++) {
        let curChar = str2[i]
        if (!hash[curChar]) return false
        if (!hash2[curChar]) hash2[curChar] = 1
        else ++hash2[curChar]
    }
    
    for (let i = 0; i < Object.keys(hash).length; i++){
        let curChar = Object.keys(hash)[i]
        if (hash[curChar] !== hash2[curChar]) {
            console.log('the char is', curChar)
            return false
        }
    }
    return true
};

console.log(isAnagram('ab', 'a'))