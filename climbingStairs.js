// ------------------------------------------------------------------
// Description
// ------------------------------------------------------------------
// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct
// ways can you climb to the top?
// ------------------------------------------------------------------
// EXPLANATION
// ------------------------------------------------------------------
// There are two ways of solving. Either using a depth first search
// and returning the results or a bottom up dynamic programming
// approach using the fibonacci sequence.
//
// Bottom Up Explanation:
// Start with base case of n in an array. We will use 5
// [?, ?, ?, ?, ?]
// Set n[4] (fifth area in array) = 1. This is because
// There is only 1 way to get to 5 currently because
// it is our goal.
// [?, ?, ?, ?, 1]
// There's only 1 way to get from n[3] to n[4] so
// n[3] = 1
// [?, ?, ?, 1, 1]
// There's two ways to get to n[4] from n[2].
// (Using 1 step and 1 step or a single 2 step)
// This makes n[2] = 2
// [?, ?, 2, 1, 1]
// For n[1] you can do 3 different ways =>
// 1 + 1 + 1 || 1 + 2 || 2 + 1
// so n[1] = 3. And now we have a pattern of the previous
// 2 results = the new result.
// n[2] = n[3] + n[4]
// n[1] = n[2] + n[3]
// so n[0] should = n[1] + n[2] and it does so we can use a loop
// keeping track of the results n - 1 times.

// Bottom Up Dynamic Approach
// Fibonacci sequence

const climbStairs = (n) => {
  let oneStep = 1;
  let twoStep = 1;

  for (let i = 0; i < n - 1; i++) {
    let tmp = twoStep;
    twoStep = oneStep + twoStep;
    oneStep = tmp;
  }

  return twoStep;
};

// Expected Output: 2
climbStairs(2);

// Expected Output: 3
climbStairs(3);

// Expected Output: 8
climbStairs(5);

// Expected Output: 89
climbStairs(10);
