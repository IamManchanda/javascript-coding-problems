/**
 * Bubble Sort
 * https://www.algoexpert.io/questions/bubble-sort
 * 
 * Approach: Optimized
 * Time complexity:
 *  => O(n), best case
 *  => O(n^2), average case and worst case
 * Space complexity: O(1)
 */

class Solution {
  bubbleSort(array) {
    const n = array.length;
    let isSwapDone = false, counter = 0;

    while (!isSwapDone) {
      isSwapDone = true; // assume swap is done

      for (let i = 0; i <= n - 2 - counter; i++) {
        if (array[i] > array[i + 1]) {
          isSwapDone = false; // assumption incorrect, swapping is needed
          [array[i], array[i + 1]] = [array[i + 1], array[i]];
        }
      }

      counter++;
    }

    return array;
  }
}

export default Solution;
