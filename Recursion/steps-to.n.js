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

console.log(stepsToN(4))