/**
 * Nth Fibonacci
 * https://www.algoexpert.io/questions/nth-fibonacci
 * 
 * Approach: Recursion
 * Time complexity: O(2^n)
 * Space complexity: O(n)
 */

class Solution {
  getNthFib(n) {
    if (n === 1 || n === 2) {
      return n - 1;
    }

    return this.getNthFib(n - 1) + this.getNthFib(n - 2);
  }
}

export default Solution;
