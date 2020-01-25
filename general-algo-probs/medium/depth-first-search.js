// Feel free to add new properties
// and methods to the class.
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
    let currNode = this;
    let queue = [this];
    while (queue.length) {
      queue.push(...currNode.children);
      currNode = queue.shift
      array.push(currNode.value)
    }
    return array
  }
}
