// PROMPT: Implement a depth first search and push the name (i.e. value) 
// of each node into an array.


class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array = []) {
        array.push(this.name)
        if (!this.children.length) return;
        this.children.forEach(child => {
            child.depthFirstSearch(array)
        })
        return array
    }
  }
  