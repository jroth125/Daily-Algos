/*
1209. Remove All Adjacent Duplicates in String II
Medium


Given a string s, a k duplicate removal consists of choosing k adjacent and equal letters 
from s and removing them causing the left and the right side of the deleted substring to 
concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made.

It is guaranteed that the answer is unique.

 

Example 1:

Input: s = "abcd", k = 2
Output: "abcd"
Explanation: There's nothing to delete.
Example 2:

Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"
Explanation: 
First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"
*/

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