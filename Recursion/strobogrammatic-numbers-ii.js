
/*
Leetcode 247. Strobogrammatic Number II
Medium 

A strobogrammatic number is a number that looks the same when rotated 180 degrees 
(looked at upside down).

Find all strobogrammatic numbers that are of length = n.

Example:

Input:  n = 2
Output: ["11","69","88","96"]*/

const findStrobogrammatic = (n, strob = '', answers = []) => {
    if (strob.length === n) {
        answers.push(strob)
        return;
    }
    const choices = ['0','1', '6', '8', "9"]
    const firstChoices = ['1', '8', '0']
    if (n % 2 !== 0 && !strob.length) {
        for (let num of firstChoices){
            findStrobogrammatic(n, num, answers)
        }
    } else {
        for (let num of choices) {
            if (num === '6') {
                findStrobogrammatic(n, num + strob + '9', answers)
            } else if (num === '9') findStrobogrammatic(n, num + strob + '6', answers)
            else if (num === '0') {
                if (n - strob.length === 2) continue;
                else findStrobogrammatic(n, num + strob + num, answers)
            }
            else findStrobogrammatic(n, num + strob + num, answers)
        }
    }
    return answers
};

console.log(findStrobogrammatic(5))