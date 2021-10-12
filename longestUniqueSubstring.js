/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s) return 0;
  let processed = {};
  let max = 0;
  let currentChar;
  for (let i = 0, j = 0; i < s.length; i++) {
    currentChar = s[i];
    if (currentChar in processed) {
      j = Math.max(j, processed[currentChar] + 1);
    }
    processed[currentChar] = i;
    max = Math.max(i - j + 1, max);
  }
  return max;
};
