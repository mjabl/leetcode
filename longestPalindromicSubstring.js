/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let found = "";
  let dp = Array.from(Array(s.length), () => new Array(s.length));
  for (let offset = 0; offset < s.length; offset++) {
    for (let start = 0; start + offset < s.length; start++) {
      const end = start + offset;
      let palindrome;
      if (offset === 0) {
        palindrome = true;
      } else if (offset === 1) {
        palindrome = s[start] === s[end];
      } else {
        const palindromeInside = dp[start + 1][end - 1];
        palindrome = palindromeInside && s[start] === s[end];
      }
      dp[start][end] = palindrome;
      if (palindrome && offset + 1 > found.length) {
        found = s.slice(start, end + 1);
      }
    }
  }
  return found;
};

console.log(longestPalindrome("cbbd"));
