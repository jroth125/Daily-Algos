//More optimized solution O(n) time and space (can actually do O(1) space, but I'll get to that soon)
function maxSubsetSumNoAdjacent(array) {
    if (!array.length) return 0;
    if (array.length < 3) return Math.max(...array);
    let newArr = [array[0], Math.max(array[0], array[1])];
    for (let i = 2; i < array.length; i++) {
      let newSum =
        newArr[i - 1] > newArr[i - 2] + array[i]
          ? newArr[i - 1]
          : newArr[i - 2] + array[i];
      newArr.push(newSum);
    }
  
    return Math.max(...newArr);
  }
  

function maxSubsetSumNoAdjacent(array) {
  // Write your code here.
  if (array.length === 0) return 0;
  let newArr = [];
  array.forEach((el, i) => {
    if (i === 0 || i === 1) newArr.push(el);
    else {
      let shorterNewArr = newArr.slice(0, i - 1);
      newArr.push(Math.max(...shorterNewArr) + el);
    }
  });
  return Math.max(...newArr);
}

