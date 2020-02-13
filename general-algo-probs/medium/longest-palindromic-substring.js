
/*
Write a function that, given a string, returns its longest palindromic 
substring. A palindrome is defined as a string that is written the same 
forward and backward. Assume that there will only be one longest 
palindromic substring.
*/ 

function longestPalindromicSubstring(string) {
    if (string.length === 1 || !string.length) return string;
    let count = 0;
    let palindrome = '';
  
    for (let i = 0; i < string.length; i++) {
      let left = i - 1;
      let right = i + 1;
      let temp = 1;
      let curPal = string[i]
      while (left >= 0 && right < string.length) {
        if (string[left] === string[right]) {
          curPal = string[left] + curPal + string[right];
          temp += 2;
          ++right;
          --left;
        } else break;
      }
      if (temp > count) {
        palindrome = curPal;
        count = temp;
      }
  
      left = i;
      right = i + 1;
      temp = 0;
      curPal = '';
  
      while (left >= 0 && right < string.length) {
        if (string[left] === string[right]) {
          curPal = string[left] + curPal + string[right];
          temp += 2;
          ++right;
          --left;
        } else break;
      }
      if (temp > count) {
        palindrome = curPal;
        count = temp;
      }
    }
    return palindrome
  }
  

console.log('')