// function pairSum (array, target) {
//     let hash = {}

//     for (let i = 0; i < array.length; i++) {
//         let num = array[i]
//         if (hash[num]) return true
//         else {
//             hash[target - num] = true
//         }
//     }
//     return false
// }




function pairSum (array, target) {
    let left = 0
    let right = array.length - 1

    while (left < right) {
        if (array[left] + array[right] === target) {
            return true
        } else if (array[left] + array[right] < target){
            left++
        } else {
            right--
        }
    }
    return false
}








console.log(pairSum([1, 1, 2, 3, 4, 5], 7) ) //true


console.log(pairSum([1, 2, 3, 4, 5, 7, 11], 10) ) //true



console.log(pairSum([1, 2, 3, 7, 8], 7) ) //false
console.log(pairSum([1, 2, 3, 4, 5], 2) ) //false