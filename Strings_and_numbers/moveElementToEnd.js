
//Given an array of integers and a target number to move
// move all instances of the target number to the end of the array
// Also, do this in place!

// EXAMPLE: moveElementToEnd([1, 3, 2, 3, 4, 5, 3, 9], 3)
// WILL RETURN => [1, 2, 4, 5, 9, 3, 3, 3]

// OPTIMAL SOLUTION: This is O(n) time and O(1) space
function moveElementToEnd (array, toMove) {
	let left = 0
	let right = array.length - 1
	
	while (left < right) {
		if (array[right] === toMove) {
			--right
		} else if (array[left] !== toMove) {
			++left
		} else if (array[left] === toMove) {
			let oldLeft = array[left]
			array[left] = array[right]
			array[right] = oldLeft
			--right
			++left
		}
	}
	return array
}

// This solution is O(n^2) - it's a naive solution that swaps with a 
// while-loop nested in a for-loop
function moveElementToEndNaive(array, toMove) {
  // Write your code here.
	for (let i = array.length - 1; i >= 0; i--) {
		if (array[i] === toMove) {
			let point = i
			while (point < array.length - 1 && array[point + 1] !== toMove) {
					let toSwap = array[point + 1]
					array[point + 1] = array[point]
					array[point] = toSwap
				  point++
			}
		}
	}
	return array
}