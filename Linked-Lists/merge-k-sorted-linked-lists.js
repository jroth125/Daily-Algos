const mergeKLists = (lists) => {
    if (!lists || !lists.length) return null
    if (lists.length === 1) return lists[0]
    let nulls = 0
    let newListCurNode;
    let headOfNewList;
    
    for (let list of lists) {
        if (!list) nulls++
    }
    if (nulls === lists.length) return null
    
    while(nulls !== lists.length) {
        nulls = 0
        let min = Infinity
        let minIdx;
        for (let i = 0; i < lists.length; i++) {
            let curList = lists[i]
            if (!curList) {
                nulls++
            } else {
                if (curList.val < min) {
                    min = curList.val
                    minIdx = i
                }
            }
        }
        if (nulls === lists.length) continue;
            const headWereTaking = lists[minIdx]
            lists[minIdx] = headWereTaking.next
            headWereTaking.next = null
        if (!headOfNewList) {
            newListCurNode = headWereTaking
            headOfNewList = newListCurNode
        } else {
            newListCurNode.next = headWereTaking
            newListCurNode = newListCurNode.next
        }
        
    }
    return headOfNewList
};