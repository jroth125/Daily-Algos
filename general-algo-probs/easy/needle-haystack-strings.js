const needleInHaystack = (haystack, needle) => {
    for (let i = 0; i < haystack.length; i++) {
        for (let j = 0; j < needle.length; j++) {
            if (haystack[j + i] !== needle[j]) break;
            if ((j + 1) === needle.length) return i
        }
    }
    return -1
}