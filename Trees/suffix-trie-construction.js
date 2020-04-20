class SuffixTrie {
    constructor(string) {
      this.root = {};
      this.endSymbol = '*';
      this.populateSuffixTrieFrom(string);
    }
  
    populateSuffixTrieFrom(string) {
          for (let start = 0; start < string.length; start++) {
              let j = start
              let curNode = this.root
              while (j < string.length) {
                  let curChar = string[j]
                  if (!curNode[curChar]) {
                      curNode[curChar] = {}
                  } 
                  curNode = curNode[curChar]
                  ++j
              }
              curNode[this.endSymbol] = true
          }
          
    }
  
    contains(string) {
          let curNode = this.root
          let i = 0
          while (i < string.length) {
                  let char = string[i]
                  if (!curNode[char]) return false
                  curNode = curNode[char]
                  i++
          }
          return !!curNode[this.endSymbol]
      }
  }