function minNumberOfJumps(array) {
	let jumps = Array(array.length).fill(Infinity)
	jumps[0] = 0
	
	array.forEach((num, i) => {
		for (let j = i + 1; j <= i + num && j < array.length; j++) {
			let curJump = jumps[i] + 1
			jumps[j] = Math.min(curJump, jumps[j])
		}
	})
	return jumps[array.length - 1]
}

// this solution is n^2