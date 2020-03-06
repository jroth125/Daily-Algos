/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
*/

//Aproach: 
// 1.get a hashmap of all the characters' amt of occurence
// 2.Loop over again and return the first character with an occurence of less than 2

const firstUniqChar = string => {
  let hash = {};
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (!hash[char]) hash[char] = 1;
    else ++hash[char];
  }

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (hash[char] < 2) return i;
  }
  return -1;
};
