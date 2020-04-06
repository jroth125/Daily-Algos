
class MinHeap {
    constructor(array) {
      this.heap = this.buildHeap(array);
    }
  
    buildHeap(array) {
      // Write your code here.
      let lastIdx = array.length - 1;
      let curPar = Math.floor((lastIdx - 1) / 2);
      while (curPar >= 0) {
        this.siftDown(curPar, lastIdx, array);
        curPar--;
      }
      return array;
    }
  
    siftDown(curIdx, endIdx, heap) {
      let left = curIdx * 2 + 1;
      let right = curIdx * 2 + 2;
  
      while (
        curIdx < endIdx 
        &&
        (heap[curIdx] > heap[left] || heap[curIdx] > heap[right]) 
        && 
        left <= endIdx //If the parent idx is before the last idx, then it must at least have a left node (which is why we don't care about the right node here)
      ) {
        let childToSwap = heap[right] < heap[left] ? right : left; //and this ordering is crucial: number < undefined is always false
              //that's because a number < undefined is always FALSE, meaning that 
              // if right doesn't exist, or if left is less than right, we set childToSwap to left			
        this.swap(curIdx, childToSwap, heap);
        curIdx = childToSwap;
        left = curIdx * 2 + 1;
        right = curIdx * 2 + 2;
      }
    //       let left = curIdx * 2 + 1
    //       while (left <= endIdx) {
    //           const right = curIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1
    //           let idxToSwap;
    //           if (right !== -1 && heap[right] < heap[left]) {
    //               idxToSwap = right
    //           } else {
    //               idxToSwap = left
    //           }
    //           if (heap[idxToSwap] < heap[curIdx]) {
    //               this.swap(curIdx, idxToSwap, heap)
    //               curIdx = idxToSwap
    //               left = curIdx * 2 + 1
    //       } else return;
  
    // }
}
  
    siftUp(curIdx, heap) {
      let parentIdx = Math.floor((curIdx - 1) / 2);
      while (curIdx > 0 && heap[parentIdx] > heap[curIdx]) {
        this.swap(curIdx, parentIdx, heap);
        curIdx = parentIdx;
        parentIdx = Math.floor((curIdx - 1) / 2);
      }
    }
  
    peek() {
      return this.heap[0];
    }
  
    remove() {
      this.swap(0, this.heap.length - 1, this.heap);
      let valToRemove = this.heap.pop();
      this.siftDown(0, this.heap.length - 1, this.heap);
      return valToRemove;
    }
  
    insert(value) {
      this.heap.push(value);
      this.siftUp(this.heap.length - 1, this.heap);
    }
    swap(i, j, heap) {
      const temp = heap[j];
      heap[j] = heap[i];
      heap[i] = temp;
    }
  }
  