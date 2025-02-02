import { validateInput } from "../helpers/validateInput";

/**
 * Tribonacci sequence
 * Approach: Dynamic Programming (Recursive / Top-Down / Memoization)
 * 
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

class Solution {
  tribonacci(n) {
    validateInput(n);

    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    const t = [0, 1, 1];
    return this.#tribonacci(n, t);
  }

  #tribonacci(n, t) {
    if (t[n] !== undefined) {
      return t[n];
    }

    t[n] = this.#tribonacci(n - 1, t) 
      + this.#tribonacci(n - 2, t) 
      + this.#tribonacci(n - 3, t);
    
    return t[n];
  }
}

export default Solution;
