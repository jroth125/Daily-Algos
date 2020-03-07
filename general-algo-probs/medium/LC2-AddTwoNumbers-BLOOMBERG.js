
const addTwoNumbers = (l1, l2) => {
    debugger;
    let newListHead = new ListNode
    let curNewNode = newListHead

    let carry = 0

    while (l1 || l2) {
        let sum = carry
        if (l1) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }

        carry = sum > 9 ? 1 : 0
        curNewNode.val = carry ? 10 - sum : sum
        if (l1 || l2) {
            curNewNode.next = new ListNode
            curNewNode = curNewNode.next
        }

    }
    if (carry) {
        curNewNode.next = new ListNode(carry)
    }
    return newListHead
}


//test case
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let l1 = new ListNode(5)
l1.next = new ListNode(5)
l1.next.next = new ListNode(9)

let l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(8)

let myList = addTwoNumbers(l1, l2)

// super naive way!
// var addTwoNumbers = function(l1, l2) {
//     let num1 = getReverseDigitsOfList(l1)
//     let num2 = getReverseDigitsOfList(l2)
//     // let sumNum = Number(num1) + Number(num2)
//     let stringSum = sumTwoStrings(num1, num2)
//     console.log(stringSum)
//     let newList = new ListNode(+stringSum[stringSum.length - 1])
//     let curNode = newList
//     for (let i = stringSum.length - 2; i >= 0; i--) {
//         let curChar = +stringSum[i]
//         curNode.next = new ListNode(curChar)
//         curNode = curNode.next
//     }
//     return newList
// };

// function getReverseDigitsOfList(thelist) {
//     let curNode = thelist
//     let strNums = ''
//     //
//     while (curNode) {
//         strNums = String(curNode.val) + strNums
//         curNode = curNode.next
//     }
//     console.log(strNums)
//     return strNums
// }

// function sumTwoStrings(str1, str2) {
//     let i = str1.length - 1
//     let j = str2.length - 1
//     let overallSum = ''
//     let addOverDig = 0
//     while (i >= 0 && j >=0) {
//         let char1 = str1[i]
//         let char2 = str2[j]
//         let sum = Number(char1) + Number(char2) + Number(addOverDig)
//         sum = String(sum)
//         if (sum.length < 2) {
//             overallSum = sum + overallSum
//             addOverDig = 0
//         } else {
//             overallSum = sum[sum.length - 1] + overallSum
//             addOverDig = sum[0]
//         }
//         --i
//         --j
        
//     }
//     if (i >= 0) {
//         overallSum = str1.slice(0, i + 1) + overallSum
//     } 
//     if (j >= 0) overallSum = str2.slice(0, j + 1) + overallSum
//     return overallSum
    
// }




// const addTwoNumbers = (l1, l2) => {
//     let cur1 = l1
//     let cur2 = l2
//     let carry = 0
//     let newList = new ListNode
//     newList.yo = 'Im hereee'
//     let curNew = newList

//     while (cur1 || cur2) {
//         let sum;
//         if (cur1 && cur2) {
//             sum = cur1.val + cur2.val + carry
//         } else if (cur1) {
//             sum = cur1.val + carry
//         } else {
//             sum = cur2.val + carry
//         }
//         console.log('sum is', sum)
//         carry = sum > 10 ? 1 : 0
//         curNew.val = carry ? 10 - sum : sum
//         if (cur1) cur1 = cur1.next
//         if (cur2) cur2 = cur2.next
//         if (cur2 || cur1) curNew.next = new ListNode
//     }
//     return newList
// }












