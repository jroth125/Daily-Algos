var candyCrush = function(board) {
  let scanCandy = true;
  while (scanCandy) {
      let vertical = markCandyVertical(board)
      let horizontal = markCandyHorizontal(board)
      scanCandy = vertical || horizontal
      collapseCandy(board)
  }
  return board;
};

function markCandyVertical(board) {
  let scanCandy = false;
  for (let col = 0; col < board[0].length; col++) {
    let amt = 0;
    let lastNum;
    for (let row = 0; row < board.length; row++) {
      let curNum = board[row][col];
      if (lastNum !== Math.abs(curNum)) {
        amt = 1;
        lastNum = Math.abs(curNum);
      } else if (curNum) {
        ++amt;
        if (amt === 3) {
          scanCandy = true;
          board[row - 1][col] = -Math.abs(board[row - 1][col]);
          board[row - 2][col] = -Math.abs(board[row - 2][col]);
        }
        if (amt >= 3) board[row][col] = -Math.abs(board[row][col]);
      }
    }
  }
  return scanCandy;
}

function markCandyHorizontal(board) {
  debugger;
  let scanCandy = false;
  for (let row = 0; row < board.length; row++) {
    let amt = 0;
    let lastNum;
    for (let col = 0; col < board[row].length; col++) {
      let curNum = board[row][col];
      if (lastNum !== Math.abs(curNum)) {
        amt = 1;
        lastNum = Math.abs(curNum);
      } else if (curNum){
        ++amt;
        if (amt === 3) {
          scanCandy = true;
          board[row][col - 1] = -Math.abs(board[row][col - 1]);
          board[row][col - 2] = -Math.abs(board[row][col - 2]);
        }
        if (amt >= 3) board[row][col] = -Math.abs(board[row][col]);
      }
    }
  }
  return scanCandy;
}

function collapseCandy(board) {
  for (let col = 0; col < board[0].length; col++) {
    let stack = [];
    for (let row = 0; row < board.length; row++) {
      if (Math.sign(board[row][col]) === 1) stack.push(board[row][col]);
    }
    for (let row = board.length - 1; row >= 0; row--) {
      if (stack.length) board[row][col] = stack.pop();
      else board[row][col] = 0;
    }
  }
}

console.log(
  candyCrush([
    [110, 5, 112, 113, 114],
    [210, 211, 5, 213, 214],
    [310, 311, 3, 313, 314],
    [410, 411, 412, 5, 414],
    [5, 1, 512, 3, 3],
    [610, 4, 1, 613, 614],
    [710, 1, 2, 713, 714],
    [810, 1, 2, 1, 1],
    [1, 1, 2, 2, 2],
    [4, 1, 4, 4, 1014],
  ])
);
