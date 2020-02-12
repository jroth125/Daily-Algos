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
        
    }

    coins.forEach(coin => {
        if (coin !== 1) {
          for (let i = coin; i < waysArray.length; i++) {
            waysArray[i] = waysArray[i] + waysArray[i - coin];
          }
        }
      });
      return waysArray[amount];
        
};

console.log(waysToMakeChange([1, 5, 10], 10));
