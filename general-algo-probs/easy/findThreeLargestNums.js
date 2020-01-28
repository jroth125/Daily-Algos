// Prompt: find the three largest numbers in an array and sort them!

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
        }

        if (idxToSub !== undefined) {
            largestNums.splice(idxToSub, 0, num)
            largestNums.shift()
        }
    })

    return largestNums
}
