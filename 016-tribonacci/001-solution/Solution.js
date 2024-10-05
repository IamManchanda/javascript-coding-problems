import { validateInput } from "../helpers/validateInput";

/**
 * Tribonacci sequence
 * Approach: Recursion
 * 
 * Time complexity: O(3^n)
 * Space complexity: O(n)
 */

class Solution {
  tribonacci(n) {
    validateInput(n);

    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    return this.tribonacci(n - 1) 
      + this.tribonacci(n - 2) 
      + this.tribonacci(n - 3);
  }
}

export default Solution;
