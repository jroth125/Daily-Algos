// O(n * m) complexity
// This is a dynamic programming approach
/*
Here are my steps:
1. initialize an array that's the size of the target number with one extra index for zero
2. Make every element in that array equal to Infinity (because no amount is greater than that - for your comparisons later)
but set the first index equal to 0
3. go through the array with the first coin. If that coin 
*/

function minNumberOfCoinsForChange(n, denoms) {
    if (n === 0) return 0
    const minArray = Array(n + 1).fill(Infinity)
    minArray[0] = 0

    minArray.forEach((amt, i) => {
        if (i % denoms[0] === 0) {
            minArray[i] = i / denoms[0]
        } 
    })


    for (let i = 1; i < denoms.length; i++) {
        let coin = denoms[i]
        for (let j = coin; j < minArray.length; j++) {
            minArray[j] = Math.min(minArray[j], minArray[j - coin] + 1)
        }
    }
		
    if (minArray[n] === Infinity) return -1
		else return minArray[n]
  }
  

console.log(minNumberOfCoinsForChange(12, [2, 5, 10]))