/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  for (var i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      let x = triangle[i - 1][j - 1];
      if (x === undefined) x = 10000;
      let y = triangle[i - 1][j];
      if (y === undefined) y = 10000;
      triangle[i][j] = triangle[i][j] + Math.min(x, y);
    }
  }
  return Math.min(...triangle[i - 1]);
};

console.log(minimumTotal([[1], [-5, -2], [3, 6, 1], [-1, 2, 4, -3]]));
