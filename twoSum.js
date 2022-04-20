// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function (nums, target) {
  let vals = {};

  for (pos in nums) {
    vals[nums[pos]] = pos;
  }

  for (pos in nums) {
    let comp = target - nums[pos];

    if (vals[comp] && vals[comp] !== pos) {
      return [pos, vals[comp]];
    }
  }
};

twoSum([2, 7, 11, 15], 9);
twoSum([3, 2, 4], 6);
twoSum([3, 3], 6);
