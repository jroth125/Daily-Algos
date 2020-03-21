function balancedBrackets(string) {
      const stack = []
      const bracks = {
          '}': '{',
          ']': '[',
          ')': '(',
          '(': 'push',
          '{': 'push',
          '[': 'push'
      }
      for (let i = 0; i < string.length; i++) {
          if (bracks[string[i]] === 'push') {
              stack.push(string[i])
          } else if (string[i] === ']' || string[i] === '}' || string[i] === ')') {
                  if (bracks[string[i]] !== stack[stack.length - 1]) return false
                  else {
                      stack.pop()
                  }
          }
          else {
              if (bracks[string[i + 1]] === 'push') return false
          }
      }
      if (stack.length) return false
      return true
  }