import { validateInput } from "../helpers/validateInput";

/**
 * Greatest Common Divisor / Highest Common Factor
 * Approach: Recursion
 * 
 * Time complexity: O(min(m, n))
 * Space complexity: O(min(m, n))
 * where, m and n are the two input numbers
 */

class Solution {
  gcd(m, n) {
    validateInput(m, n);

    if (m === n) {
      return m; // or n
    }

    if (m > n) {
      return this.gcd(m - n, n);
    }

    // if we reach here, then m < n
    return this.gcd(m, n - m);
  }
}

export default Solution;
