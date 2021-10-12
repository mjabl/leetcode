var searchMatrix = function (matrix, target) {
  let low = 0;
  let high = matrix.length * matrix[0].length - 2;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    let val =
      matrix[Math.floor(mid / matrix[0].length)][mid % matrix[0].length];
    if (val === target) return true;
    if (val < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
};

// console.log(
//   searchMatrix(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     3
//   )
// );

console.log(searchMatrix([[1]], 2));
