/**
 * Nth Fibonacci
 * https://www.algoexpert.io/questions/nth-fibonacci
 * 
 * Approach: Iteration (Optimal)
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

class Solution {
  getNthFib(n) {
    if (n === 1 || n === 2) {
      return n - 1;
    }

    let x = 0, y = 1;
    for (let i = 3; i <= n; i++) {
      [y, x] = [x + y, y];
    }

    return y;
  }
}

export default Solution;
