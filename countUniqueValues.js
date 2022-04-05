// Accept sorted array
// Return all unique numbers
// If

function countUniqueValues(arr) {
  // Create 2 Pointers
  let left = 0;
  let right = 1;
  let total = 0;

  if (arr.length === 0) {
    console.log(total);
    return total;
  }

  while (left < arr.length) {
    // Check if left pointer === right pointer
    if (arr[left] !== arr[right]) {
      // If not, add 1.
      total++;
    }
    // Move both pointers
    left++;
    right++;
  }
  // Return final value
  console.log(total);
  return total;
}

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4
