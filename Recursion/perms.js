/* 
Given an array of integers, write a function that 
returns an array of all the possible permutations
*/

// My solution has a time complexity of O(n! * n^2) where n is the number
//  of integers in the original array
// It also has a space complexity of O(n! * n)

function getPermutations(ints, permutations = [], currPerm = []) {
  if (!ints.length && !currPerm.length) return [];
  else if (!ints.length) permutations.push(currPerm);
  else {
    for (let i = 0; i < ints.length; i++) {
      let newPerm = currPerm.concat(ints[i]);
      let newInts = removeInt(ints, i);
      getPermutations(newInts, permutations, newPerm);
    }
  }
  return permutations;
}

function removeInt(array, idx) {
  let newArr = array.slice();
  newArr.splice(idx, 1);
  return newArr;
}

