
// This naive solution runs on O(n * m) time and constant ( O(1) )space
// To me, it felt like an elegant, easy thing to write, but obviously,
// is not optimal. The optimal solution is below!
function smallestDifferenceNaiveSolution (arr1, arr2) {
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

// This solution is the more complex and time efficient way to solve the problem
// Here, I first sort both arrays, and then iterate through them both
// depending on which element is biggest (if the element in one array is bigger
// than the element in the other, than I know I should increment the pointer in the second
// one, because the difference will only get bigger the other way around)

// This is O(log(n) * n) time complexity
function smallestDifference (arr1, arr2) {

    const arr1Sorted = arr1.sort((a, b) => a - b)
    const arr2Sorted = arr2.sort((a, b) => a - b)
    let a1P = 0
    let a2P = 0
    let minDif = Infinity
    let currentPair;


    while (a1P < arr1.length && a2P < arr2.length) {
        let curAr1Val = arr1Sorted[a1P]
        let curAr2Val = arr2Sorted[a2P]
        if (curAr1Val === curAr2Val) return [curAr1Val, curAr2Val]
        if (Math.abs(curAr1Val - curAr2Val) < minDif) {
            minDif = Math.abs(curAr1Val - curAr2Val)
            currentPair = [curAr1Val, curAr2Val]
        }
        if (curAr2Val < curAr1Val) {
            a2P++
        } else {
            a1P++
        }
    }

    return currentPair

}