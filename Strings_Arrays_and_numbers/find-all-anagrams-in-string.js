/*
438. Find All Anagrams in a String
Medium

Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will 
not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
*/

const findAnagrams = (s, p) => {

    let totalChars = p.length
    let charAmts = {}
    for (let i = 0; i < p.length; i++) {
        let char = p[i]
        if (charAmts[char] === undefined) charAmts[char] = 1
        else charAmts[char]++
    }
    
    let answer = []
    for (let i = 0; i < p.length; i++) {
        let char = s[i]
        if (charAmts[char] !== undefined) {
            charAmts[char]--
            if (charAmts[char] >= 0) totalChars--
        }
    }
    if (totalChars === 0) answer.push(0)
    let L = 0
    let R = p.length - 1
    while (R < s.length) {
        if (charAmts[s[L]] !== undefined) {
            charAmts[s[L]]++
            if (charAmts[s[L]] > 0) totalChars++
        }
        if (charAmts[s[R + 1]] !== undefined) {
            charAmts[s[R + 1]]--
            if (charAmts[s[R + 1]] >= 0) totalChars--
        }
        L++; R++
        if (totalChars === 0) answer.push(L)
    }
    return answer
};