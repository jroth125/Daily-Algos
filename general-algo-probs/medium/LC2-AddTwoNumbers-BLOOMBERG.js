/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let num1 = getReverseDigitsOfList(l1)
    let num2 = getReverseDigitsOfList(l2)
    // let sumNum = Number(num1) + Number(num2)
    let stringSum = sumTwoStrings(num1, num2)
    console.log(stringSum)
    let newList = new ListNode(+stringSum[stringSum.length - 1])
    let curNode = newList
    for (let i = stringSum.length - 2; i >= 0; i--) {
        let curChar = +stringSum[i]
        curNode.next = new ListNode(curChar)
        curNode = curNode.next
    }
    return newList
};

function getReverseDigitsOfList(thelist) {
    let curNode = thelist
    let strNums = ''
    //
    while (curNode) {
        strNums = String(curNode.val) + strNums
        curNode = curNode.next
    }
    console.log(strNums)
    return strNums
}

function sumTwoStrings(str1, str2) {
    let i = str1.length - 1
    let j = str2.length - 1
    let overallSum = ''
    let addOverDig = 0
    while (i >= 0 && j >=0) {
        let char1 = str1[i]
        let char2 = str2[j]
        let sum = Number(char1) + Number(char2) + Number(addOverDig)
        sum = String(sum)
        if (sum.length < 2) {
            overallSum = sum + overallSum
            addOverDig = 0
        } else {
            overallSum = sum[sum.length - 1] + overallSum
            addOverDig = sum[0]
        }
        --i
        --j
        
    }
    if (i >= 0) {
        overallSum = str1.slice(0, i + 1) + overallSum
    } 
    if (j >= 0) overallSum = str2.slice(0, j + 1) + overallSum
    return overallSum
    
}