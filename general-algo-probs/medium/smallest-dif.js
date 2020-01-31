function smallestDifference (arr1, arr2) {
    const least = Infinity
    const pair = []
    arr1.forEach(num1 => {
        arr2.forEach(num2 => {
            if (Math.abs(num1 - num2) < least) {
                least = Math.abs(num1 - num2)
                pair = [num1, num2]
            } 
        })
    })
    return pair
}