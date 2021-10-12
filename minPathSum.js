/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  for (let i = 1; i < grid.length; i++) {
    grid[i][0] += grid[i - 1][0];
  }

  for (var j = 1; j < grid[0].length; j++) {
    grid[0][j] += grid[0][j - 1];
  }

  for (var i = 1; i < grid.length; i++) {
    for (var j = 1; j < grid[0].length; j++) {
      let currentMin = Math.min(grid[i][j - 1], grid[i - 1][j]);
      grid[i][j] += currentMin;
    }
  }
  return grid[i - 1][j - 1];
};

console.log(
  minPathSum([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
