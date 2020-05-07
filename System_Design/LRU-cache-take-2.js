class LRUCache {
    constructor(maxSize) {
      this.maxSize = maxSize || 1;
          this.cache = {}
          this.length = 0
          this.list = new DoublyLinkedList
          
    }
  
    insertKeyValuePair(key, value) {
      // Write your code here.
          //check if in cache already
          if (!this.cache[key]) {
              let node = this.list.insertNewNode(key, value)
              this.cache[key] = node
              this.length++
          } else {
              this.list.moveToHead(this.cache[key], value)
          }
          if (this.length > this.maxSize) this.list.evict()
    }
  
    getValueFromKey(key) {
      // Write your code here.
          return this.cache[key] ? this.cache[key].value : null
    }
  
    getMostRecentKey() {
      // Write your code here.
          return this.list.head ? this.list.head.key : null
    }
  }
      
  class DoublyLinkedList {
      constructor(){
          this.head = null
          this.tail = null
      }
      insertNewNode(key, value) {
          let node = new Node(key, value)
          if (!this.head) {
              this.head = node
              this.tail = node
          } else {
              this.head.prev = node
              node.next = this.head
              this.head = node
          }
          return node
      }
      
      evict() {
          if (this.head === this.tail) {
              this.head = null
              this.tail = null
          } else {
              const prevNode = this.tail.prev
              prevNode.next = null
              this.tail = prevNode
          }
      }
      moveToHead(node, newValue){
          //first edge case (if the node is the tail but NOT head --> if its the head we don't do anything right?)
          node.value = newValue
          if (node === this.tail && node !== this.head) {
              let prevNode = this.tail.prev
              prevNode.next = null
              this.tail = prevNode
              node.prev = null
              
              this.head.prev = node
              node.next = this.head
              this.head = node
          } else if (node !==this.head) {
              node.prev.next = node.next
              node.next.prev = node.prev
              node.next = this.head
              this.head.prev = node
              this.head = node
          }
      }
  }
  
  class Node {
      constructor(key, value) {
          this.value = value
          this.key = key
          this.next = null
          this.prev = null
      }
  }

  let testCache2 = new LRUCache(4)

  testCache2.insertKeyValuePair('a', 1)
  testCache2.insertKeyValuePair('a', 2)
  testCache2.insertKeyValuePair('b', 2)
  testCache2.insertKeyValuePair('c', 3)
  testCache2.insertKeyValuePair('d', 4)
  testCache2.insertKeyValuePair('e', 5)
  console.log(testCache2.list.head.next.next)