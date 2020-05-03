const minRemoveToMakeValid = function(s) {
    let newString = Array(s.length).fill(0)
    let count = 0
    for (let i = 0; i < s.length; i++){
        let char = s[i]
        if (char === ')') {
            if (count === 0) {
                newString[i] = false
            } else {
                count--
                newString[i] = true
            }
        } else if (char === '(') {
            count++
            newString[i] = true
        } else {
            newString[i] = true
        }
    }
    console.log(newString)
    
    let newCount = 0
    for (let i = s.length - 1; i >= 0; i--) {
        let char = s[i]
        if (char === '(') {
            if (newCount === 0) newString[i] = false
            else {
                newCount--
            }
        } else if (char === ')') {
            newCount++
        } 
    }
    let answer = ''
    for (let i = 0; i < s.length; i++) {
        if (newString[i]) answer += s[i]
    }
    return answer
    
};



console.log(cleanerRemoveToMakevalid("lee(t(c)o)de)"))