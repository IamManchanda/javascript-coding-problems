/**
 * First Duplicate Value
 * https://www.algoexpert.io/questions/first-duplicate-value
 * 
 * Approach: Brute Force
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

class Solution {
  firstDuplicateValue(array) {
    const n = array.length;
    let firstDupeIdx = n;

    for (let i = 0; i <= n - 1; i++) {
      for (let j = i + 1; j <= n - 1; j++) {
        if (array[i] === array[j]) {
          firstDupeIdx = Math.min(firstDupeIdx, j);
        }
      }
    }

    return firstDupeIdx === n ? -1 : array[firstDupeIdx];
  }
}

export default Solution;
