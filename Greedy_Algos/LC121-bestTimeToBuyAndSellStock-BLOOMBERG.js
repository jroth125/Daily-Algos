const maxProfit = prices => {
  let maxProf = 0;
  for (let i = 0; i < prices.length; i++) {
    let buyPrice = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      let sellPrice = prices[j];
      maxProf = sellPrice - buyPrice > maxProf ? sellPrice - buyPrice : maxProf;
    }
  }
  return maxProf;
};


const betterMaxProfit = prices => {
    let lowest = Infinity
    let maxProf = 0
    prices.forEach(price => {
        maxProf = Math.max(price - lowest, maxProf)
        lowest = Math.min(price, lowest)
    })
    return maxProf
}