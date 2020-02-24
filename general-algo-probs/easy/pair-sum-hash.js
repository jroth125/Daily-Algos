function pairSum (array, target) {
    let hash = {}

    for (let i = 0; i < array.length; i++) {
        let num = array[i]

        if (hash[num]) return true
        else {
            hash[target - num] = true
        }
    }
    return false
}


console.log(pairSum([1, 1, 2, 3, 4, 5], 7) ) //true
console.log(pairSum([1, 2, 3, 4, 5], 10) ) //false
console.log(pairSum([1, 2, 3, 7, 8], 7) ) //false
console.log(pairSum([1, 2, 3, 4, 5], 2) ) //false