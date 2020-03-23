const pascalsTriangle = (numRows) => {
    let triangle = []
    for (let i = 1; i <= numRows; i++) {
        triangle.push(Array(i).fill(1))
    }
    for (let i = 1; i < triangle.length; i++) {
        let curArr = triangle[i]
        for (let j = 0; j < curArr.length; j++) {
            if (j > 0 && j < curArr.length - 1) {
                curArr[j] = triangle[i - 1][j] + triangle[i - 1][j - 1]
            }
        }
    }
    return triangle
};