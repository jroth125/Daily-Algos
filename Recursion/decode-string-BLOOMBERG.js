/*
394. Decode String
Medium


Share
Given an encoded string, return its decoded string.
The encoding rule is: k[encoded_string], where the encoded_string 
inside the square brackets is being repeated exactly k times. Note 
that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, 
square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and 
that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Examples:

s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
*/


const decodeStringAgain = (string) => {
    let type = {}
    let letters = 'ABCDEFGHIJKLMNOPQRXTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
    let numbers = '0123456789'.split('')
    letters.forEach(char => type[char] = 'letter')
    numbers.forEach(num => type[num] = 'number')
    return innerDecoder(string, type)[0]
}

function innerDecoder (string, type, multiplier = '', start = 0) {
    debugger;
    let curStr = ''
    let curStringNum = ''
    for (let i = start; i < string.length; i++) {
        let char = string[i]
        if (type[char] === 'letter') curStr += char
        else if (type[char] === 'number') {
            curStringNum += char
        } else if (char === '[') {
            const [innerString, lastIdxOfInner] = innerDecoder(string, type, +curStringNum, i + 1)
            curStr += innerString
            curStringNum = ''
            i = lastIdxOfInner
        } else if (char === ']') {
            let finalString = ''
            for (let j = 0; j < (parseInt(multiplier) || 1); j++) {
                finalString += curStr
            }
            return [finalString, i]
        }
    }
    return [curStr, string.length]
}





console.log(decodeStringAgain('3[a]2[bc]'))












// const decodeString = (string, start = 0) => {
//     let type = {}
//     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('').forEach(char => {
//         type[char] = 'letter'
//     })
//     '1234567890'.split('').forEach(char => {
//         type[char] = 'number'
//     })
    
//     let decoded = ''
//     let curNum = ''
    
//     for (let i = start; i < string.length; i++) {
//         let curChar = string[i]
//         if (type[curChar] === 'number') curNum += curChar 
//         else if (type[curChar] === 'letter') decoded += curChar
//         else if (curChar === '[') {
//             let [strInBracks, endIdx] = decodeString(string, i + 1)
//             let num = Number(curNum)
//             for (let j = 0; j < (num || 1); j++) {
//                 decoded += strInBracks
//             }
//             curNum = ''
//             i = endIdx
//         }
//         else if (curChar === ']') {
//             return [decoded, i]
//         }
        
//     }
//     return decoded
// };