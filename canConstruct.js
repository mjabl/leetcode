function canConstruct(target, parts, memo = {}) {
  if (target === "") return true;
  if (target in memo) return memo[target];
  for (let part of parts) {
    if (target.startsWith(part)) {
      const remainder = target.substr(part.length);
      if (canConstruct(remainder, parts)) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "sk", "boar"]));
