const intToRoman = (num) => {
  let amts = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romans = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'XD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I',
  };
  let romanString = '';
  let curRemainder = num;
  for (let i = 0; i < amts.length; i++) {
      let curAmt = amts[i]
    if (curRemainder >= amts[i]) {
      let stringAmt = Math.floor(curRemainder / amts[i]);
      for (let j = 0; j < stringAmt; j++) {
        romanString += romans[amts[i]];
      }
      curRemainder = curRemainder % amts[i];
    }
  }
  return romanString;
};

console.log(intToRoman(4419))