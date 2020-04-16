const split = (array) => {
    let mid = Math.floor(array.length / 2)
    let arrLeft = array.slice(0, mid)
    let arrRight = array.slice(mid, array.length)
    return [arrLeft, arrRight]
}

const merge = (left, right) => {
    let merged = []
    let L = 0
    let R = 0
    while (L < left.length && R < right.length) {
        if (left[L] < right[R]) {
            merged.push(left[L])
            L++
        } else {
            merged.push(right[R])
            R++
        }
    }
    return [...merged, ...left.slice(L, left.length), ...right.slice(R, right.length)]
}

const mergeSort = (array) => {
    if (array.length <= 1) return array
    let [leftArr, rightArr] = split(array)
    let left = mergeSort(leftArr)
    let right = mergeSort(rightArr)
    return merge(left, right)
}
console.log(mergeSort([4,2,3,7,5,3,2]))