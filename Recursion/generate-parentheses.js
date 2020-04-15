/*
Leetcode 22: Generate Parentheses
Medium

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

*/

function generateParenthesis (num, curString = '', numL = num, numR = num, combos = []) {
    if (numL === 0 && numR === 0) combos.push(curString)
    if (numL) {
        generateParenthesis(num, curString + '(', numL - 1, numR, combos)
    }
    if (numL < numR) {
        generateParenthesis(num, curString + ')', numL, numR - 1, combos)
    }
    
    return combos
    
}