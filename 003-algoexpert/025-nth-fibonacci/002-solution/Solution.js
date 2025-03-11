/**
 * Nth Fibonacci
 * https://www.algoexpert.io/questions/nth-fibonacci
 * 
 * Approach: Dynamic Programming (Memoization)
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

class Solution {
  getNthFib(n) {
    const memo = new Map();
    memo.set(1, 0);
    memo.set(2, 1);

    return this.fib(n, memo);
  }

  fib(n, memo) {
    // If set already, return it
    if (memo.has(n)) return memo.get(n);

    // If not set yet, compute and store it, then return it
    memo.set(n, this.fib(n - 1, memo) + this.fib(n - 2, memo));
    return memo.get(n);
  }
}

export default Solution;
