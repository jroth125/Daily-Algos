const generateParenthesis = require('../Recursion/generate-parentheses')

const smallArray = Array(100).map((_, i) => i * 2)
const mediumArray = Array(100000).map((_, i) => i * 2)
const largeArray = Array(100000000).map((_, i) => i)

const smallSet = new Set(smallArray)
const mediumSet = new Set(mediumArray)
const largeSet = new Set(largeArray)

function simpleSetLookup(set, num) {
    return set.has(num)
}

const measureTime = (callback, ...funcArgs) => {
    const timeBefore = Date.now()
    console.log(callback(...funcArgs))
    console.log((Date.now() - timeBefore) / 1000)
}

measureTime(simpleSetLookup, largeSet, 1000453)