/*
406. Queue Reconstruction by Height
Medium

Suppose you have a random list of people standing in a queue. Each person is 
described by a pair of integers (h, k), where h is the height of the person and k 
is the number of people in front of this person who have a height greater than or equal 
to h. Write an algorithm to reconstruct the queue.

Note:
The number of people is less than 1,100.

 
Example

Input:
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

Output:
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
*/


const reconstructQueue = (people) => {
    if (!people.length) return []
    people.sort((a, b) => {
        if (a[0] === b[0]) return b[1] - a[1]
        else return a[0] - b[0]
    })
    let newOrder = [people[people.length - 1]]

    for (let i = people.length - 2; i >= 0; i--) {
        let [personHeight, numInFront] = people[i]
        let count = 0
        if (numInFront === newOrder.length) {
            newOrder.push(people[i])
            continue;
        }
        loop2:
        for (let j = 0; j < newOrder.length; j++) {
            if (count === numInFront){
                newOrder.splice(j, 0, people[i])
                break loop2;
            } 
            count++
        }
    }
    return newOrder
};