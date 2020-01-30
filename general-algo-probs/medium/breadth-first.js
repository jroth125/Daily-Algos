
class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    breadthFirstSearch(array = []) {
      // Write your code here.
      let currNode;
      let queue = [this];
      while (queue.length) {
              currNode = queue.shift()
              array.push(currNode.name)
              queue.push(...currNode.children)
        
      }
      return array
    }
  }