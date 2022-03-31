const test1 = [1, 7, 3, 6, 5, 6];

var pivotIndex = function (nums) {
  if (nums.length === 1) return 0;

  let left = 0;
  let index = 0;
  let right = nums.slice(1).reduce((a, b) => a + b);

  while (index < nums.length) {
    if (left === right) {
      return index;
    }
    left += nums[index++];
    right -= nums[index];
  }

  return -1;
};

pivotIndex(test1);
