var wordBreak = function (s, wordDict) {
  const dp = Array(s.length + 1);
  dp[0] = true;
  for (var i = 0; i < dp.length; i++) {
    if (dp[i] === true) {
      for (word of wordDict) {
        if (s.slice(i).startsWith(word)) dp[i + word.length] = true;
      }
    }
  }
  return dp[i - 1];
};

console.log(wordBreak("leetcode", ["leet", "code"]));
