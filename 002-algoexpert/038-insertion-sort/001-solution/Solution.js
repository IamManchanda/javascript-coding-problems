/**
 * Insertion Sort
 * https://www.algoexpert.io/questions/bubble-sort
 * 
 * Approach: Optimized
 * Time complexity:
 *  => O(n), best case
 *  => O(n^2), average case and worst case
 * Space complexity: O(1)
 */

class Solution {
  insertionSort(array) {
    const n = array.length;

    for (let i = 1; i <= n - 1; i++) {
      let j = i;

      while (j >= 1 && array[j] < array[j - 1]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
        j--;
      }
    }

    return array;
  }
}

export default Solution;
