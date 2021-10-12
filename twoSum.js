/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let processed = {};
  for (let i = 0; i < nums.length; i++) {
    complement = target - nums[i];
    if (complement in processed) {
      return [processed[complement], i];
    }
    processed[nums[i]] = i;
  }
  throw new Error("Solution not found");
};
