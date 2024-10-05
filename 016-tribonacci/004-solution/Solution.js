import { validateInput } from "../helpers/validateInput";

/**
 * Tribonacci sequence
 * Approach: Iteration
 * 
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

class Solution {
  tribonacci(n) {
    validateInput(n);

    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    let x = 0, y = 1, z = 1;

    for (let i = 3; i <= n; i++) {
      [x, y, z] = [y, z, x + y + z];
    }

    return z;
  }
}

export default Solution;
