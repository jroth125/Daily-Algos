
/*
Write a function that, given a string, returns its longest palindromic 
substring.

Example input: abaxyzzyxf
Example output: xyzzyx
*/ 

// This is my O(n^2) solution. It iterates through each letter in the string, and then
// does two different palindrome checks, each with a different middle.
// The first has a middle of the letter itself. 
// The second check has a middle of between the current letter and the next letter.


function longestPalindromicSubstring(string) {
    if (string.length === 1 || !string.length) return string;
    let count = 0;
    let palindrome = '';
  
    for (let i = 0; i < string.length; i++) {

    // First while loop, with current letter as the middle
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
  
    //   Second while loop scenario, with between i and i+1 as the middle
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