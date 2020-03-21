/* Given a non-empty string of lowercase letters and a non-negative integer 
 value representing a key, write a function that returns a new string 
 obtained by shifting every letter in the input string by k positions in the 
 alphabet, where k is the key. Note that letters should "wrap" around the 
 alphabet; in other words, the letter "z" shifted by 1 returns the letter "a".*/



//Fast approach - was really proud of this solution
// It's O(n) space and O(N) space for the array I create to store the letters
// of this input
function caesarCipherEncryptor(string, key) {
  let flatStr = string.toLowerCase();
  let idxs = {},
    letts = {};
  'abcdefghijklmnopqrstuvwxyz'.split('').forEach((lett, idx) => {
    idxs[idx] = lett;
    letts[lett] = idx;
  });

  let newString = [];
  for (let i = 0; i < string.length; i++) {
    let curLet = string[i];
    let newIdx;
    if (letts[curLet] + key > 25) {
      newIdx = (letts[curLet] + key) % 26;
    } else {
      newIdx = letts[curLet] + key;
    }

    newString.push(idxs[newIdx]);
  }
  return newString.join('');
}


