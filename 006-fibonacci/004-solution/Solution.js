import { validateInput } from "../helpers/validateInput";

/**
 * Fibonacci sequence
 * Approach: Iteration
 * 
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

class Solution {
  fibonacci(n) {
    validateInput(n);

    if (n === 0 || n === 1) {
      return n;
    }

    let x = 0, y = 1;

    for (let i = 2; i <= n; i++) {
      [y, x] = [x + y, y];
    }

    return y;
  }
}

export default Solution;
