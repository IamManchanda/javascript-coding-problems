/**
 * Selection Sort
 * https://www.algoexpert.io/questions/selection-sort
 * 
 * Approach: Optimized
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */

class Solution {
  selectionSort(array) {
    const n = array.length;

    for (let i = 0; i <= n - 2; i++) {
      let minIdx = i;

      for (let j = i + 1; j <= n - 1; j++) {
        if (array[minIdx] > array[j]) minIdx = j;
      }

      if (minIdx !== i) {
        [array[i], array[minIdx]] = [array[minIdx], array[i]];
      }
    }

    return array;
  }
}

export default Solution;
