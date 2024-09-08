import { validateInput } from "../helpers/validateInput";

/**
 * Greatest Common Divisor / Highest Common Factor
 * Approach: Iteration
 */

class Solution {
  gcd(m, n) {
    validateInput(m, n);

    while (m !== n) {
      if (m > n) {
        m -= n;
      } else { // m < n
        n -= m;
      }
    }

    // if we reach here, then m === n
    return m; // or n
  }
}

export default Solution;
