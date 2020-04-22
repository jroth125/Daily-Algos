/*
Leetcode 380: Insert Delete GetRandom O(1)
Medium

Design a data structure that supports all following operations in average O(1) time.

insert(val): Inserts an item val to the set if not already present.
remove(val): Removes an item val from the set if present.
getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.
Example:

// Init an empty set.
RandomizedSet randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomSet.insert(1);

// Returns false as 2 does not exist in the set.
randomSet.remove(2);

// Inserts 2 to the set, returns true. Set now contains [1,2].
randomSet.insert(2);

// getRandom should return either 1 or 2 randomly.
randomSet.getRandom();

// Removes 1 from the set, returns true. Set now contains [2].
randomSet.remove(1);

// 2 was already in the set, so return false.
randomSet.insert(2);

// Since 2 is the only number in the set, getRandom always return 2.
randomSet.getRandom();
*/

class RandomizedSet {
    constructor() {
        this.set = {}
        this.length = 0
        this.list = null
    }

    insert(val) {
        if (!this.set[val]) {
            let newNode = new Node(val)
            this.set[val] = newNode
            if (!this.list) this.list = new DoublyLinkedList
            this.list.insertNode(newNode)
            this.length++
            return true
        } else return false
    }

    remove(val) {
        if (!this.list || this.set[val] === undefined) return false
        else {
            this.list.deleteNode(this.set[val])
            this.length--
            delete this.set[val]
            return true
        }
    }

    getRandom() {
        let setArray = Object.keys(this.set)
        let randIdx = Math.floor(Math.random() * this.length)
        return setArray[randIdx]
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    
    deleteNode(node) {
        if (node.prev && node.next) {
            node.prev.next = node.next
            node.next.prev = node.prev
        } else if (node.prev) {
            this.tail = node.prev
            node.prev.next = null
        } else if (node.next) {
            this.head = node.next
            node.next.prev = null
        } else {
            this.head = null
            this.tail = null
        }
    }

    insertNode(node) {
        if (!this.tail) {
            this.tail = node
            this.head = node
        } else {
            this.tail.next = node
            this.tail = node
        }
    }
    
}

class Node {
    constructor(val, prev, next) {
        this.val = val
        this.prev = prev || null
        this.next = next || null
    }
}
