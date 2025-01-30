import { validateInput } from "../helpers/validateInput";

/**
 * Get the factorial of a number
 * Approach: Iteration
 * 
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

class Solution {
  factorial(n) {
    validateInput(n);

    let result = 1;

    for (let i = 1; i <= n; i++) {
      // if n = 0, this loop will not run
      result *= i;
    }

    return result;
  }
}

export default Solution;
