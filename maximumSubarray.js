var maxSubArray = function (nums) {
  const maxSums = Array(nums.lenght);
  let max = (currentSum = nums[0]);
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(currentSum + nums[i], nums[i]);
    max = Math.max(max, currentSum);
  }
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
