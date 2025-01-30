import { validateInput } from "../helpers/validateInput";

/**
 * Sum of n numbers
 * Approach: Recursion
 * 
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

class Solution {
  sum(n) {
    validateInput(n);

    if (n === 0 || n === 1) {
      return n;
    }

    return n + this.sum(n - 1);
  }
}

export default Solution;
