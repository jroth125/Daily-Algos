/*
567. Permutation in String
Given two strings s1 and s2, write a function to return true 
if s2 contains the permutation of s1. In other words, one of the 
first string's permutations is the substring of the second string.

Example 1:

Input: s1 = "ab" s2 = "eidbaooo"
Output: True
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input:s1= "ab" s2 = "eidboaoo"
Output: False
 
*/
const checkInclusion = (s1, s2) => {
    let hash1 = {}
    let hash2 = {}
    for (let i = 0; i < s1.length; i++) {
        let char1 = s1[i]
        let char2 = s2[i]
        
        if (!hash1[char1]) hash1[char1] = 1
        else ++hash1[char1]
        
        if (!hash2[char2]) hash2[char2] = 1
        else ++hash2[char2]
    }
        let L = 0
        let R = s1.length - 1
        while (R < s2.length) {
            if (checkMapEquality(hash1, hash2)) return true
            --hash2[s2[L]] ; ++L ; ++R
            if (!hash2[s2[R]]) hash2[s2[R]] = 1
            else ++hash2[s2[R]]
        }
        return false
    };
    
    function checkMapEquality(map1, map2) {
        let map1Arr = Object.keys(map1)
        let count = 0
        map1Arr.forEach(char => {
            if (map1[char] === map2[char]) ++count
            else return false
        })
        return count === map1Arr.length
    }