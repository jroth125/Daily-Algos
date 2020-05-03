/*
Leetcode 953. Verifying an Alien Dictionary
Easy

In an alien language, surprisingly they also use english lowercase letters, 
but possibly in a different order. The order of the alphabet is some permutation of 
lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, 
return true if and only if the given words are sorted lexicographicaly in this alien language.

 

Example 1:

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
Example 2:

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
Example 3:

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
 

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 20
order.length == 26
All characters in words[i] and order are English lowercase letters.
*/

const isAlienSorted = (words, order) => {
    if (!words.length) return true
    const alphabet = {}
    for (let idx = 0; idx < order.length; idx++){
        let char = order[idx]
        alphabet[char] = idx
    }
    let decoded = words.map((word, idx) => {
        let nums = []
        for (let char of word) {
            nums.push(alphabet[char])
        }
        return nums
    })

    let lastDecoded = decoded[0]
    for (let i = 1; i < decoded.length; i++) {
        let decodedNums = decoded[i]
        let j = 0
        charCompare:
        while (j < lastDecoded.length) {
            let lastChar = lastDecoded[j]
            let curChar = decodedNums[j]
            if (curChar === undefined) return false
            else if (curChar === lastChar) j++
            else if (+curChar > +lastChar) break charCompare;
            else return false
        }
        lastDecoded = decodedNums
    }
    return true
};