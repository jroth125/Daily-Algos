class LRUCache {
    constructor(maxSize) {
      this.maxSize = maxSize || 1;
          this.hash = {}
          this.queue = null
    }
  
    insertKeyValuePair(key, value) {
      // Write your code here.
          if (!this.queue) {
              this.queue = new Queue(value, key, this.maxSize)
              this.hash[key] = this.queue.head
          } else {
              if (!this.hash[key]) {
                  this.hash[key] = new Node(value, key)
                  let addNodeReturn = this.queue.addNode(this.hash[key], true)
                  if (addNodeReturn) delete this.hash[addNodeReturn]
              } else {
                  let node = this.hash[key]
                  node.value = value
                  this.queue.moveNodeToTail(node)
              }
          }
    }
  
    getValueFromKey(key) {
      // Write your code here.
          if (!this.hash[key]) return null
          else if (this.queue.count === 1){
              return this.hash[key].value
          }else{
              let node = this.hash[key]
              this.queue.moveNodeToTail(node)
              return node.value
          }
    }
  
    getMostRecentKey() {
      // Write your code here.
          return this.queue.tail.key
    }
  }
  
  class Queue {
      constructor(value, key, length) {
          this.head = new Node(value, key);
          this.tail = this.head
          this.count = 1
          this.length = length
      }
      addNode(newNode, isNodeNew) {
          newNode.prev = this.tail
          this.tail.next = newNode
          this.tail = newNode
          
          if (isNodeNew) {
              if (this.count === this.length) {
                  let deletedHead = this.deleteHead()
                  return deletedHead.key
              } else {
                  ++this.count
              }
          }
      }
      
      moveNodeToTail(node) {
          if (node === this.head && this.count > 1) {
              node.next.prev = null
              this.head = node.next
              node.next = null
              this.addNode(node, false)
          } else if (node !== this.tail && this.count > 1) {
              console.log(node)
              node.prev.next = node.next
              node.next.prev = node.prev
              this.addNode(node, false)
              node.next = null
          }
  
      }
      
      deleteHead() {
          let newHead = this.head.next
          this.head.next = null
          newHead.prev = null
          let oldHead = this.head
          this.head = newHead
          return oldHead
      }
  }
  
  class Node {
      constructor(value, key) {
          this.key = key
          this.value = value
          this.next = null
          this.prev = null
      }
  }


//   let testCache1 = new LRUCache(1)
  
//   testCache1.insertKeyValuePair('a', 1)
//   testCache1.insertKeyValuePair('b', 2)
//   testCache1.insertKeyValuePair('c', 23)
//   console.log(testCache1.getValueFromKey('b'))
//   console.log(testCache1.getMostRecentKey())


  let testCache2 = new LRUCache(4)

  testCache2.insertKeyValuePair('a', 1)
  testCache2.insertKeyValuePair('a', 2)
  console.log('queue is  ',testCache2.queue.head)


