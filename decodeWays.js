/**
 * @param {string} s
 * @return {number}
 */
var numDecodingsRecursive = function (s, memo = {}) {
  if (s === "0") return 0;
  if (s === "") return 1;
  if (s in memo) return memo[s];

  let ways = 0;
  for (let i = 1; i <= 26; i++) {
    if (s.startsWith(i.toString())) {
      const remainder = s.slice(i.toString().length);
      ways += numDecodingsRecursive(remainder, memo);
    }
  }
  memo[s] = ways;
  return ways;
};

var numDecodingsIterative = function (s) {
  const table = Array(s.length + 1).fill(0);
  table[0] = 1;
  for (let i = 0; i <= s.length; i++) {
    for (let j = 1; j <= 26; j++) {
      num = j.toString();
      if (s.slice(i).startsWith(num)) table[i + num.length] += table[i];
    }
  }
  return table[s.length];
};

console.log(numDecodingsIterative("226"));
