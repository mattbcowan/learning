function averagePair(arr, average) {
  if (arr.length === 0) {
    console.log(false);
    return false;
  }

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let current = (arr[left] + arr[right]) / 2;
    console.log(current);
    if (current === average) {
      console.log(true);
      return true;
    }
    if (current > average) {
      right--;
    } else {
      left++;
    }
  }
  console.log(false);
  return false;
}

averagePair([1, 2, 3], 2.5); // True
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // True
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // False
averagePair([], 4); // False
