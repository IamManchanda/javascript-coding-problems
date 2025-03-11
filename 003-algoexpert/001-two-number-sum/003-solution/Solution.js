/**
 * Two Number Sum
 * https://www.algoexpert.io/questions/two-number-sum
 * 
 * Approach: Sorting + Two Pointers
 * Time Complexity: O(n log(n))
 * Space Complexity: O(1)
 */

class Solution {
  twoNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);

    let left = 0, right = array.length - 1;

    while (left < right) {
      const currentSum = array[left] + array[right];

      if (currentSum === targetSum) {
        return [array[left], array[right]];
      } else if (currentSum < targetSum) {
        left++;
      } else { // currentSum > targetSum
        right--;
      }
    }

    return [];
  }
}

export default Solution;
