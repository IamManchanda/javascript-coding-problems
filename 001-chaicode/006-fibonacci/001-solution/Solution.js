import { validateInput } from "../helpers/validateInput";

/**
 * Fibonacci sequence
 * Approach: Recursion
 * 
 * Time complexity: O(2^n)
 * Space complexity: O(n)
 */

class Solution {
  fibonacci(n) {
    validateInput(n);

    if (n === 0 || n === 1) {
      return n;
    }

    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }
}

export default Solution;
