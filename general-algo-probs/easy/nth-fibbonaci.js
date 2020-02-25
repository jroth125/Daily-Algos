
// function getNthFib(n) {
// 	if (n === 1 || n === 2) return n - 1
// 	let lastTwo = [0, 1]
// 	for (let i = 3; i <= n; i++) {
// 		let newNum = lastTwo[0] + lastTwo[1]
// 		lastTwo[0] = lastTwo[1]
// 		lastTwo[1] = newNum
// 	}
// 	return lastTwo[1]
// }

// function getNthFib(n) {
// 	if (n === 1) return 0
// 	if (n === 2) return 1
// 	return getNthFib(n - 2) + getNthFib(n - 1)
// }

function getNthFib (n, memoize = {1: 0, 2: 1, 3: 1, 4: 2}) {
    if (memoize[n] !== undefined) return memoize[n]
    memoize[n] = getNthFib(n - 2, memoize) + getNthFib(n - 1, memoize)
    return memoize[n]
}



