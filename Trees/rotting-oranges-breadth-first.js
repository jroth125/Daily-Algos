/*
Leetcode 994: Rotting Oranges
Medium

In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

 

Example 1:



Input: [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
Example 2:

Input: [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
Example 3:

Input: [[0,2]]
Output: 0
Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.
 

Note:

1 <= grid.length <= 10
1 <= grid[0].length <= 10
grid[i][j] is only 0, 1, or 2.
*/

const orangesRotting = (grid) => {
  const rottens = [];
  for (let row = 0; row < grid.length; row++) {
    let curRow = grid[row];
    for (let col = 0; col < curRow.length; col++) {
      if (curRow[col] === 2) rottens.push([row, col]);
    }
  }
  rottens.push(-1);
  let nextTomato = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let minutes = 0;
  while (rottens.length) {
      let 
    if (rottens[0] === -1) {
      rottens.shift();
      if (rottens.length) {
        ++minutes;
        rottens.push(-1);
      } else break;
    } else {
      let [row, col] = rottens.shift();
      nextTomato.forEach((next) => {
        let [rowChange, colChange] = next;
        if (
          grid[row + rowChange] &&
          grid[row + rowChange][col + colChange] === 1
        ) {
          rottens.push([row + rowChange, col + colChange]);
          grid[row + rowChange][col + colChange] = 2;
        }
      });
    }
  }
  for (let row = 0; row < grid.length; row++) {
    let curRow = grid[row];
    for (let col = 0; col < curRow.length; col++) {
      if (curRow[col] === 1) return -1;
    }
  }
  return minutes;
};
