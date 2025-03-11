/**
 * Two Number Sum
 * https://www.algoexpert.io/questions/two-number-sum
 * 
 * Approach: Brute Force
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

class Solution {
  twoNumberSum(array, targetSum) {
    const n = array.length;

    for (let i = 0; i <= n - 1; i++) {
      const firstNum = array[i];

      for (let j = i + 1; j <= n - 1; j++) {
        const secondNum = array[j];

        if (firstNum + secondNum === targetSum) {
          return [firstNum, secondNum];
        }
      }
    }

    return [];
  }
}

export default Solution;
