function sameSquaredArray(arr1, arr2) {
  let arr1map = {};
  let arr2map = {};
  if (arr1.length !== arr2.length) {
    console.log(false);
    return false;
  }

  for (let item of arr1) {
    const itemSqr = item * item;
    arr1map[itemSqr] = ++arr1map[itemSqr] || 1;
  }

  for (let item of arr2) {
    arr2map[item] = ++arr2map[item] || 1;
  }

  for (let key in arr1map) {
    if (!(key in arr2map)) {
      console.log(false);
      return false;
    }
    if (arr2map[key] !== arr1map[key]) {
      console.log(false);
      return false;
    }
  }

  console.log(true);
  return true;
}

let arr1 = [1, 2, 3, 2];
let arr2 = [9, 1, 4, 4];

sameSquaredArray(arr1, arr2);
