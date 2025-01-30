import { validateInput } from "../helpers/validateInput";

/**
 * Power of a number
 * Approach: Recursion
 * 
 * Time complexity: O(n)
 * Space complexity: O(n)
 * where, n is the exponent
 */

class Solution {
  power(b, e) {
    validateInput(b, e);

    if (e === 0) {
      return 1;
    }

    return b * this.power(b, e - 1);
  }
}

export default Solution;
