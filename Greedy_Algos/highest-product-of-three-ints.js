function highestProductOf3(array) {
  let maxNum = Math.max(array[0], array[1]);
  let lowestNum = Math.min(array[0], array[1]);
  let highestProduct = Math.max(array[0] * array[1]);
  let lowestProduct = Math.min(array[0] * array[1]);
  let max = -Infinity;
  for (let i = 2; i < array.length; i++) {
    let num = array[i];
    max = Math.max(max, highestProduct * num, lowestProduct * num);
    highestProduct = Math.max(highestProduct, maxNum * num, lowestNum * num);
    lowestProduct = Math.min(lowestNum * num, lowestProduct, maxNum * num);
    maxNum = Math.max(num, maxNum);
    lowestNum = Math.min(num, lowestNum);
  }
  return max;
}

const highestProductOf3NonOptimal = (array) => {
  if (array.length < 3) throw new Error('not enough numbers');
  array.sort((a, b) => a - b);
  if (array[0] > -1 || (array[0] < 0 && array[array.length - 1] < 0)) {
    return (
      array[array.length - 1] *
      array[array.length - 2] *
      array[array.length - 3]
    );
  }

  if (array[1] >= 0 || (array[1] < 0 && array.length === 3))
    return (
      array[array.length - 1] *
      array[array.length - 2] *
      array[array.length - 3]
    );

  let negProd = array[0] * array[1] * array[array.length - 1];
  let regularProd =
    array[array.length - 1] * array[array.length - 2] * array[array.length - 3];

  return Math.max(negProd, regularProd);
};

console.log(highestProductOf3([5, 20, 10, 12, -3]));
