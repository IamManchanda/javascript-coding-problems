import { validateInput } from "../helpers/validateInput";

/**
 * Fibonacci sequence
 * Approach: Dynamic Programming (Recursive / Top-Down / Memoization)
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
    return this.#fibonacciMemo(n, f);
  }

  #fibonacciMemo(n, f) {
    if (f[n] !== undefined) {
      return f[n];
    }

    f[n] = this.#fibonacciMemo(n - 1, f) + this.#fibonacciMemo(n - 2, f);
    return f[n];
  }
}

export default Solution;
