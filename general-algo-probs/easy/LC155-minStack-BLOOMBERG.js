/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
 

Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
*/
class MinStack {
    constructor () {
        this.stack = []
        this.mins = [Infinity]
    }
}

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(num) {
    let lastMin = this.getMin()
    this.stack.push(num)
    this.mins.push(Math.min(num, lastMin))
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.mins.pop()
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.mins[this.mins.length - 1]
};

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin())
minStack.pop();
console.log(minStack.top())   
console.log(minStack.getMin())