/* 
Leetcode 1169: Invalid Transactions
Medium

A transaction is possibly invalid if:

the amount exceeds $1000, or;
if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
Each transaction string transactions[i] consists of comma separated values representing the name, time (in minutes), amount, and city of the transaction.

Given a list of transactions, return a list of transactions that are possibly invalid.  You may return the answer in any order.

 

Example 1:

Input: transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
Output: ["alice,20,800,mtv","alice,50,100,beijing"]
Explanation: The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, have the same name and is in a different city. Similarly the second one is invalid too.
Example 2:

Input: transactions = ["alice,20,800,mtv","alice,50,1200,mtv"]
Output: ["alice,50,1200,mtv"]
Example 3:

Input: transactions = ["alice,20,800,mtv","bob,50,1200,mtv"]
Output: ["bob,50,1200,mtv"]
 

Constraints:

transactions.length <= 1000
Each transactions[i] takes the form "{name},{time},{amount},{city}"
Each {name} and {city} consist of lowercase English letters, and have lengths between 1 and 10.
Each {time} consist of digits, and represent an integer between 0 and 1000.
Each {amount} consist of digits, and represent an integer between 0 and 2000.
*/

const invalidTransactions = (transactions) => {
    let invalids = new Set();
    let arrayOfTrans = transactions.map((payment) => {
      let paymentArray = payment.split(',');
      if (+paymentArray[2] > 1000) invalids.add(payment);
      return paymentArray;
    });
    arrayOfTrans.sort(sortTransactions);
  
    for (let i = 0; i < arrayOfTrans.length; i++) {
      const transaction = arrayOfTrans[i];
      const [person, time, _, city] = transaction
      for (let j = i + 1; j < arrayOfTrans.length; j++) {
        let curTrans = arrayOfTrans[j];
        if (person !== curTrans[0]) break;
        if (city !== curTrans[3] && Math.abs(time - curTrans[1]) <= 60) {
          invalids.add(curTrans.join(','));
          invalids.add(transaction.join(','));
        }
      }
    }
    return [...invalids];
  };
  
  
  function sortTransactions(a,b) {
      if (a[0] > b[0]) return 1;
      else if (a[0] === b[0]) {
        if (a[1] > b[1]) return 1;
        else if (a[1] === b[1]) return 0;
        else return -1;
      } else return -1;
  }