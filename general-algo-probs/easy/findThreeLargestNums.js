/* Write a function that takes in an array of integers and 
returns a sorted array of the three largest integers in the 
input array. Note that the function should return 
duplicate integers if necessary; for example, it should 
return [10, 10, 12] for an input array of [10, 5, 9, 10, 12]. 
*/

//This is my solution with O(n) time and constant space!

function findThreeLargestNums (array) {
    debugger;
    const largestNums = Array(3).fill(-Infinity)

    array.forEach(num => {
        let idxToSub;
        for (let i = 0; i < largestNums.length; i++) {
            let curLargestNum = largestNums[i]
            
            if (num > curLargestNum) {
                idxToSub = i + 1
            } 
            // else break
        }

        if (idxToSub !== undefined) {
            largestNums.splice(idxToSub, 0, num)
            largestNums.shift()
        }
    })

    return largestNums
}
