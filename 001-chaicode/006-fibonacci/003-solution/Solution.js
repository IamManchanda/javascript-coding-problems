import { validateInput } from "../helpers/validateInput";

/**
 * Fibonacci sequence
 * Approach: Dynamic Programming (Iterative / Bottom-Up / Tabulation)
 * 
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

class Solution {
  fibonacci(n) {
    validateInput(n);

    if (n === 0 || n === 1) {
      return n;
    }

    const f = [0, 1];

    for (let i = 2; i <= n; i++) {
      f[i] = f[i - 1] + f[i - 2];
    }

    return f[n];
  }
}

export default Solution;
