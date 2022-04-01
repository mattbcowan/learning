let numberList = [3, 6, 1, 0];

var dominantIndex = function (nums) {
  if (nums.length === 1) return 0;
  let largest = [0, 0];
  let second = [0, 0];

  for (let n in nums) {
    if (nums[n] > largest[0]) {
      largest = [nums[n], n];
    }
  }

  for (let n in nums) {
    if (nums[n] > second[0] && n !== largest[1]) {
      second = [nums[n], n];
    }
  }

  return largest[0] >= second[0] * 2 ? largest[1] : -1;
};

dominantIndex(numberList);
