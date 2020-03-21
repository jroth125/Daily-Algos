// Given and array of coins and and a target amount, return the maximum amount of 
// coins you can have to make that target amount
// Ex: waysToMakeChange([2, 5, 10], 12) => 6

const waysToMakeChange = (coins, amount) => {
    const waysArray = Array(amount + 1).fill(1);
	
    waysArray.forEach((amt, i) => {
        if (i % coins[0] === 0) {
            waysArray[i] = 1
        } else {
            waysArray[i] = 0
        }
    })

    for (let i = 1; i < coins.length; i++) {
        for (let j = coin; j < waysArray.length; j++) {
            waysArray[j] += waysArray[j] + waysArray[j - coin]
        }
    }

    return waysArray[amount]

        
};

console.log(waysToMakeChange([1, 5, 10], 10));
