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
    return minArray[n]
  }
  

console.log(minNumberOfCoinsForChange(12, [2, 5, 10]))