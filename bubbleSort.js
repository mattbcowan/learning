// How does Bubble Sort work?

// Start at index 0 and compare current index and next index.
// If the first index is more than the second swap them
// If not, do nothing

// Once you have gone through the entire array, do it again but
// ignore the last number in the array because it's guaranteed
// the highest in the array.

// Keep going until all numbers are taken care of.

const bubbleSort = (arr) => {
  // Iteration number (i is the number of index's from the last to start.)
  for (let i = 0; i < arr.length; i++) {
    // Iterate over the array and get first and second index to compare
    for (let j = 0; j < arr.length - i - 1; j++) {
      // Check if the first index is greater than the second index
      if (arr[j] > arr[j + 1]) {
        // if it is then swap the 2 items
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  // This is just to see it in the console.
  console.log(arr);
  return arr;
};

let arr = [
  234, 458, 34, 23, 68, 29, 394, 583, 284, 20, 349, 333, 192, 849, 10, 25, 66,
];

bubbleSort(arr);
