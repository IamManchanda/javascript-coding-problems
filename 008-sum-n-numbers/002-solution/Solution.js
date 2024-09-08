import { validateInput } from "../helpers/validateInput";

/**
 * Sum of n numbers
 * Approach: Iteration
 * 
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

class Solution {
  sum(n) {
    validateInput(n);

    let result = 0;

    for (let i = 1; i <= n; i++) {
      result += i;
    }

    return result;
  }
}

export default Solution;
