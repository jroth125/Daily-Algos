/*
BLOOMBERG Q
430. Flatten a Multilevel Doubly Linked List

You are given a doubly linked list which in addition to the next and previous pointers, 
it could have a child pointer, which may or may not point to a separate doubly linked list.
 These child lists may have one or more children of their own, and so on, to produce a 
 multilevel data structure, as shown in the example below.

Flatten the list so that all the nodes appear in a single-level, doubly linked list. You 
are given the head of the first level of the list.

Example 1:

Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
Output: [1,2,3,7,8,11,12,9,10,4,5,6]
Explanation:

The multilevel linked list in the input is as follows:
*/

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */


//APPROACH
/*
Base case: If there are no child nodes, then just iterate to the tail (to actually make sure of that), and then return the head
Recursive case: If there is a child node, recurse, and return the head of the list. 
                Then connect the tail of the current list to the head of the nested list. 
                Use the goToEnd(head) helper function to get to the new tail
*/
 
const betterFlatten = (head) => {
    let curNode = head
    while (curNode) {
        if (curNode.child) {
            let oldNext = curNode.next
            let newHead = flatten(curNode.child)
            curNode.child = null
            curNode.next = newHead
            newHead.prev = curNode
            let lastOfTheNewNodes = goToEnd(curNode.next)
            if (oldNext) {
                lastOfTheNewNodes.next = oldNext
                oldNext.prev = lastOfTheNewNodes
            }
        } 
        curNode = curNode.next

    }
    return head
}

const goToEnd = (head) => {
    let curNode = head
    while (curNode.next) {
        curNode = curNode.next
    }
    return curNode
}






const flatten = (head, parent = null) => {
    let curNode = head
    let tail;
    
    while (curNode) {
        if (!curNode.next) tail = curNode
        if (!curNode.child) {
            curNode = curNode.next
        } else {
            let afterNode = curNode.next
            let lastNode = flatten(curNode.child, curNode)
            if (afterNode) {
            lastNode.next = afterNode
            afterNode.prev = lastNode
            }
            curNode.next = curNode.child
            curNode.next.prev = curNode
            curNode.child = null
            curNode = curNode.next
        }
    }
    if (parent) return tail
    else return head
};