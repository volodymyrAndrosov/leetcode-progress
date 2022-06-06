/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const numItem = nums[i];
    for (let j = 0; j < nums.length; j++) {
      const innerNumItem = nums[j];

      if (numItem + innerNumItem === target && i != j) {
        return [i, j];
      }
    }
  }
};

twoSum([1, 2, 3, 4, 5]);

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
