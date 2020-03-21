

const mySqrt = function(num) {
    if (num === 1 || num === 0) return num
    for (let i = 2; i <= num; i++) {
        let before = (i - 1) * (i - 1)
        let current = i * i
        if (num === current) return i
        if (num < current && num > before) return i - 1
    }
};