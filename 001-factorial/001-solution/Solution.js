import { validateInput } from "../helpers/validateInput";

/**
 * Get the factorial of a number
 * Approach: Recursion
 * 
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

class Solution {
  factorial(n) {
    validateInput(n);

    if (n === 0) {
      return 1;
    }

    return n * this.factorial(n - 1);
  }
}

export default Solution;
