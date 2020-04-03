
/*
Leetcode: 200. Number of Islands
Medium

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
An island is surrounded by water and is formed by connecting adjacent lands horizontally 
or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:
Input:
11110
11010
11000
00000

Output: 1


Example 2:
Input:
11000
11000
00100
00011

Output: 3
*/
const numIslands = (grid) => {
    //make another array called visited, where we set all cells to false initially
    // make it this way, because if you use too much of the Array.fill() method, you can run into weird bugs
  let visited = Array(grid.length).fill(1);
  visited.forEach((cell, i) => {
      visited[i] = Array(grid[0].length).fill(false)
  })
//   set the count of islands at 0
  let count = 0;
//   traverse through the rows/cells of the array
  for (let r = 0; r < grid.length; r++) {
    let curRow = grid[r];
    for (let c = 0; c < curRow.length; c++) {
      let curCell = curRow[c];
    //   if the cell has not been visited and it is 1 (land)
    // then call our helper function "explore" on it
    // explore will explore the surround cells for 1's that haven't been visited
      if (!visited[r][c] && curCell === '1') {
        explore(grid, visited, r, c);
        // we have visited a 1 that wasn't visited yet, then add to the count. Otherwise, our explore 
        // function will have visited it
        ++count
      }
    }
  }
  return count;
};

function explore(matrix, visited, r, c) {
//   this if statement checks if the cell/row doesn't exist, if it's zero, or if it's been visited
// and just returns and ends the function call if any of those conditions are satisfied
    if (
    !matrix[r] ||
    !matrix[r][c] ||
    matrix[r][c] === '0' ||
    visited[r][c] === true
  ) return;
  else if (matrix[r][c] === '1' && visited[r][c] === false){
    //   else, we set visited to true and recurse to the adjacent cells
    visited[r][c] = true;
    explore(matrix, visited, r - 1, c);
    explore(matrix, visited, r + 1, c);
    explore(matrix, visited, r, c + 1);
    explore(matrix, visited, r, c - 1);
  }
}

