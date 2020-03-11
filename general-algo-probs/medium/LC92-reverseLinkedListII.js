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

    if (chunkOneEnd) chunkOneEnd.next = null
    curNode = chunkTwoStart.next
    let reverseHead = chunkTwoStart
    reverseHead.next = null
    let newCount = 0
    // traverse and reverse the middle chunk
    while (newCount <= (n - m)) {
        let newNode = curNode.next ? curNode.next : null
        curNode.next = reverseHead
        reverseHead = curNode
        curNode = newNode ? newNode : null
        ++newCount
    }
    if (chunkOneEnd) chunkOneEnd.next = chunkTwoEnd
    if (chunkThreeStart) chunkTwoStart.next = chunkThreeStart
    return head
}

function reverseList(curNode, lastNode) {
    lastNode.next = null

}