// Provided array will be sorted

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      console.log([arr[left], arr[right]]);
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

let testArr = [-4, -3, -2, -1, 0, 5, 6, 7];

sumZero(testArr);
