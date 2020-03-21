const needleInHaystack = (haystack, needle) => {
    for (let i = 0; i < haystack.length - needle.length; i++) {
        for (let j = 0; j < needle.length; j++) {
            if (haystack[j + i] !== needle[j]) break;
            if ((j + 1) === needle.length) return i
        }
    }
    return -1
}

console.log(needleInHaystack('hellow oreeeasdfadfworld', 'oreee'))

const betterHaystack = (haystack, needle) => {
    let left = 0
    let right = needle.length - 1
    let curWord = haystack.slice(0, needle.length)

    while (right < haystack.length) {
        if (curWord === needle) return left
        ++right; ++left;
        curWord = curWord.slice(1) + haystack[right]
    }
    return -1
}

console.log('better haystack', betterHaystack('a better world', 'or'))