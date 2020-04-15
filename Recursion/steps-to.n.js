

const stepsToN = (n, curLoc = 0, counter = {ways: 0}) => {
    if (curLoc === n) ++counter.ways
    else {
        for (let newStep = 1; newStep < 4; newStep++) {
            if (curLoc + newStep > n) break;
            stepsToN(n, curLoc + newStep, counter)
        }
    }
    return counter.ways
}


const betterStepsToN = (n, curLoc = 0, ways = 0, fromHere = {}) => {
    if (curLoc === n) return 1
    if (fromHere[curLoc] !== undefined) return fromHere[curLoc]
    for (let i = 1; i < 4; i++) {
        if (curLoc + i > n) break;
        else ways += betterStepsToN(n, curLoc + i, ways, fromHere)
    }
    fromHere[curLoc] = ways
    return fromHere[curLoc]
}


console.log(betterStepsToN(50))