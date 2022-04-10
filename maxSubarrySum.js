function maxSubarraySum(arr, l) {
  if (arr.length < l) {
    return null;
  }

  let sum = 0;
  let currentMax = 0;

  for (let i = 0; i < l; i++) {
    sum += arr[i];
  }

  for (let j = l; j < arr.length; j++) {
    sum = sum - arr[j - l] + arr[j];
    currentMax = Math.max(currentMax, sum);
  }

  return;
}

maxSubarraySum([100, 200, 300, 400], 2);
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2);
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2);
maxSubarraySum([2, 3], 3);
