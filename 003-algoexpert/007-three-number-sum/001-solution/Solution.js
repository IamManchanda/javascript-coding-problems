/**
 * Three Number Sum
 * https://www.algoexpert.io/questions/three-number-sum
 * 
 * Approach: Sorting + Two Pointers
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 */

class Solution {
  threeNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);

    const triplets = [], n = array.length;

    for (let i = 0; i <= n - 3; i++) {
      let l = i + 1, r = n - 1;

      while (l < r) {
        const currentSum = array[i] + array[l] + array[r];

        if (currentSum === targetSum) {
          triplets.push([array[i], array[l], array[r]]);
          l++;
          r--;
        } else if (currentSum < targetSum) {
          l++;
        } else { // currentSum > targetSum
          r--;
        }
      }
    }

    return triplets;
  }
}

export default Solution;
