// Feel free to add new properties and methods to the class.
class MinMaxStack {
    constructor() {
        this.minMax = []
        this.stack = []
    }
	
    peek() {
      return this.minMax[this.minMax.length - 1]
    }
  
    pop() {
      // Write your code here.
      this.minMax.pop()
      this.stack.pop()
    }
  
    push(number) {
      // Write your code here.
      this.stack.push(number)
      let curMinMax = this.minMax[this.minMax.length - 1]
      if (number < curMinMax[0]) {
          this.minMax.push([number, curMinMax[1]])
      } else if (number > curMinMax[1]) {
          this.minMax.push([curMinMax[0], number])
      } else {
          this.minMax.push([...curMinMax])
      }

    }
  
    getMin() {
      // Write your code here.
    }
  
    getMax() {
      // Write your code here.
    }
  }