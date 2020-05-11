/*
Leetcode 680: Valid Palindrome II
Easy --> I think this was a medium though!

Given a non-empty string s, you may delete at most one character. 
Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True
Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.
Note:
The string will only contain lowercase characters a-z. The maximum length of the string is 50000. 
*/

const validPalindrome = (string, left = 0, right = string.length - 1, switched = false) => {
    while (left <= right && string[left] === string[right]) {
            --right
            ++left
    };
    if (left >= right) return true
    if (switched) return false
    if ((string[left + 1] !== string[right]) && (string[left] !== string[right - 1])) return false
    else return validPalindrome(string, left + 2, right - 1, true) || validPalindrome(string, left + 1, right - 2, true)
}

console.log(validPalindrome("daaaa"))