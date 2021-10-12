/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x < 10) return true;
  if (x % 10 === 0) return false;
  let reverse = 0;
  while (x > reverse) {
    reverse = reverse * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return reverse === x || reverse === Math.floor(x / 10);
};

console.log(isPalindrome(10));
