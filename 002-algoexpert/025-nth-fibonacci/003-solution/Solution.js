/**
 * Nth Fibonacci
 * https://www.algoexpert.io/questions/nth-fibonacci
 * 
 * Approach: Dynamic Programming (Tabulation)
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

class Solution {
  getNthFib(n) {
    const table = new Map();
    table.set(1, 0);
    table.set(2, 1);

    // If n <= 2, this loop will not run
    for (let i = 3; i <= n; i++) {
      // Compute and store the values from 3 to n
      table.set(i, table.get(i - 1) + table.get(i - 2));
    }

    return table.get(n); // Return the value of n
  }
}

export default Solution;
