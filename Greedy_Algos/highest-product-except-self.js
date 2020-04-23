function getProductsOfAllIntsExceptAtIndex(array) {
    // Make a list of the products
    if (array.length === 1) return array
    if (array.length < 2) throw new Error('Need more than one!')
    let newArr = []
    let afterProd = 1
    for (let i = array.length - 1; i >= 0; i--) {
      newArr[i] = afterProd
      afterProd *= array[i]
    }
    let beforeProd = 1
    for (let i = 0; i < array.length; i++) {
      newArr[i] *= beforeProd
      beforeProd *= array[i]
    }
    return newArr
  }
  