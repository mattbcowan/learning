// Understand the problem
// Given a list of operations either add or subtract from X based on each item in the list.

// Explore concrete examples
// ["--x", "x++", "x++"] => 1
// --x decrements by 1 => X = -1
// x++ increments by 1 => X = 0
// x++ increments by 1 => X = 1

// ["++X","++X","X++"] => 3
// ++x increments by 1 => X = 1
// ++x increments by 1 => X = 2
// x++ increments by 1 => X = 3

// Operations will always have 1 or more items in list.
// X will always start at 0

// Break it down
// Solve/Simplify

// Look back and refactor

var finalValueAfterOperations = function (operations) {
  let start = Date.now();
  let X = 0;

  for (let val in operations) {
    if (operations[val] === "X++" || operations[val] === "++X") {
      X++;
    } else {
      X--;
    }
  }
  let end = Date.now();
  console.log(`Execution time: ${end - start}ms`);
  return X;
};

let values = ["--X", "X++", "X++", "--X", "X++", "X++", "--X"];

finalValueAfterOperations(values);

// Time complexity O(n)
// Space complexity O(n)?
