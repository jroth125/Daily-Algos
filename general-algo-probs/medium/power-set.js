function powerset(array) {
    let set = [[]]
    let setLength = 1
    for (let i = 0; i < array.length; i++) {
        let num = array[i]
        for (let j = 0; j < setLength; j++) {
            let newSetElement = set[j].concat(num)
            set.push(newSetElement)
        }
        setLength = set.length
    }
    console.log('set length is:', set.length)
    return set
  }

powerset([1, 2, 3, 4, 5, 6, 7, 8])