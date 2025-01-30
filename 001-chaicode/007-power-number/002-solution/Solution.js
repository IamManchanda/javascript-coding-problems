import { validateInput } from "../helpers/validateInput";

/**
 * Power of a number
 * Approach: Iteration
 * 
 * Time complexity: O(n)
 * Space complexity: O(1)
 * where, n is the exponent
 */

class Solution {
  power(b, e) {
    validateInput(b, e);

    let result = 1;

    for (let i = 0; i < e; i++) {
      result *= b;
    }

    return result;
  }
}

export default Solution;
