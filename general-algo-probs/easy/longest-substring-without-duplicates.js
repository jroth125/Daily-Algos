// function longestSubstringWithoutDuplication(string) {

// 	let pastChars = {[string[0]]: true}
// 	let lengths = [1]
	
// 	for (let i = 1; i < string.length; i++) {
// 		let curChar = string[i]
// 		if (!pastChars[curChar]) {
// 			pastChars[curChar] = true
// 			lengths.push(lengths[lengths.length - 1] + 1)
// 		} else {
//             lengths.push(1)
//             pastChars = {[string[i]]: true}
// 		}
//     }
//     let largestIdx = Math.max(...lengths)
//     // return string.slice(largestIdx - lengths[largestIdx], largestIdx + 1)
//     return lengths
// }
function longestSubstringWithoutDuplication(string) {
	let amt = Array(string.length).fill(1)
	let hash = {[string[0]]: 0}
	for (let i = 1; i < string.length; i++) {
		let curChar = string[i]
		if (hash[curChar] === undefined) {
			amt[i] = amt[i - 1] + 1
			hash[curChar] = i
		} else {
			amt[i] = amt[i-1] - hash[curChar] > 0 ? amt[i-1] - hash[curChar] : i - hash[curChar]
			hash[curChar] = i
		}
	}
	let maxAmt = Math.max(...amt)
	let idxOfMax = amt.indexOf(maxAmt)
	console.log(idxOfMax, amt)

	return string.slice(idxOfMax - 1 - amt[idxOfMax], idxOfMax)
}

console.log(longestSubstringWithoutDuplication('clementisacap'))