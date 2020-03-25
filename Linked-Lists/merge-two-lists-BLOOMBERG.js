/* 
LeetCode 21: Merge Two Sorted Lists
Merge two sorted linked lists and return it as a new list. The new list should be made by 
splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

const mergeTwoLists =(l1, l2) => {
    let cur1 = l1
    let cur2 = l2
    let newList;
    if (!cur1) return cur2
    if (!cur2) return cur1
    
    if (cur1.val <= cur2.val) {
        newList = cur1
        cur1 = cur1.next
    } else {
        newList = cur2
        cur2 = cur2.next
    }
    newList.next = null
    let newCur = newList
    while (cur1 && cur2) {
        if (cur1.val <= cur2.val) {
            newCur.next = cur1
            cur1 = cur1.next
        } else {
            newCur.next = cur2
            cur2 = cur2.next
        }
        newCur = newCur.next
        newCur.next = null
    }
    if (cur1) newCur.next = cur1
    else if (cur2) newCur.next = cur2
    return newList
    
};
