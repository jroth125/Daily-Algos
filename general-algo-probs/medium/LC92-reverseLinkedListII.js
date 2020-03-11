const reverseLinkedList = (head, m, n) => {
    let curNode = head, counter = 0
    let chunkOneEnd, chunkTwoStart, chunkTwoEnd, chunkThreeStart;
    while (curNode) {
        ++counter
        if (counter === m - 1) chunkOneEnd = curNode
        if (counter === m) chunkTwoStart = curNode
        if (counter === n) chunkTwoEnd = curNode
        if (counter === n + 1) chunkThreeStart = curNode
        curNode = curNode.next 
    }

    chunkOneEnd.next = null
    curNode = chunkTwoStart.next
    let lastNode = chunkTwoStart
    let newCount = 0
    // traverse and reverse the middle chunk
    while (newCount < (n - m) + 1) {
        ++newCount
        console.log(curNode)
        let newNode = curNode.next
        curNode.next = lastNode
        lastNode = curNode
        curNode = newNode
    }
    chunkTwoStart.next = chunkThreeStart
    chunkOneEnd.next = chunkTwoEnd

    return head
}

function reverseList(curNode, lastNode) {
    lastNode.next = null

}