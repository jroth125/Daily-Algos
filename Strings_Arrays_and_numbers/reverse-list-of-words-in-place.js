// From Interview Cake:
/*
Your team is scrambling to decipher a recent message, worried it's a plot to break into 
a major European National Cake Vault. The message has been mostly deciphered, but all 
the words are backward! Your colleagues have handed off the last step to you.

Write a function reverse_words() that takes a message as a list of characters and 
reverses the order of the words in place. 


For example:

  message = [ 'c', 'a', 'k', 'e', ' ',
            'p', 'o', 'u', 'n', 'd', ' ',
            's', 't', 'e', 'a', 'l' ]

reverse_words(message)

# Prints: 'steal pound cake'
print ''.join(message)
*/


const reverseWords = (arrOfWords) => {
    reverse(arrOfWords, 0, arrOfWords.length - 1)
    let start = 0
    for (let i = 0; i < arrOfWords.length; i++) {
        if (arrOfWords[i] === ' ') {
            reverse(arrOfWords, start, i - 1)
            start = i + 1
        }
        
    }
    reverse(arrOfWords, start, arrOfWords.length - 1)
    return arrOfWords
}

function reverse(array, startIdx, endIdx) {
    while (startIdx < endIdx) {
        let temp = array[startIdx]
        array[startIdx] = array[endIdx]
        array[endIdx] = temp
        startIdx++; endIdx--;
    }
}

console.log(reverseWords([ 'c', 'a', 'k', 'e', ' ',
'p', 'o', 'u', 'n', 'd', ' ',
's', 't', 'e', 'a', 'l' ]))