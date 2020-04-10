class MaxHeap {
  constructor() {
    this.heap = [];
  }
  swap(node1Idx, node2Idx, heap) {
    let temp = heap[node1Idx];
    heap[node1Idx] = heap[node2Idx];
    heap[node2Idx] = temp;
  }
  siftUp(curIdx, heap) {
    let parentIdx = Math.floor((curIdx - 1) / 2);
    while (parentIdx >= 0 && heap[curIdx] > heap[parentIdx]) {
      this.swap(curIdx, parentIdx, heap);
      curIdx = parentIdx;
      parentIdx = Math.floor((curIdx - 1) / 2);
    }
  }
  siftDown(curIdx, heap) {
    let lastIdx = heap.length - 1;
    let left = curIdx * 2 + 1;
    let right = curIdx * 2 + 2;

    while (
      left <= lastIdx 
      &&
      (heap[curIdx] < heap[left] || heap[curIdx] < heap[right])
    ) {
        let childIdxToSwap = heap[left] > heap[right] ? left : right
        this.swap(curIdx, childIdxToSwap, heap)
        curIdx = childIdxToSwap
        left = curIdx * 2 + 1
        right = curIdx * 2 + 2
    }
  }

  insert(value) {
    this.heap.push(value)
    this.siftUp(this.heap.length - 1, this.heap)
  }

  remove() {
      if (!this.heap.length) return null
      let topVal = this.heap[0]
      this.swap(0, this.heap.length - 1, this.heap)
      this.heap.pop()
      this.siftDown(0, this.heap)
      return topVal
  }

  peak() {
      return this.heap[0]
  }
}

let maxHeap = new MaxHeap

maxHeap.insert(4)
maxHeap.insert(5)
maxHeap.insert(3)
maxHeap.insert(20)
maxHeap.insert(10)
console.log('heap is now', maxHeap.heap)
maxHeap.remove()
maxHeap.insert(20)
maxHeap.insert(25)
maxHeap.insert(30)
console.log('after removals: ', maxHeap.heap)
