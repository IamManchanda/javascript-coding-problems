/**
 * Move Element To End
 * https://www.algoexpert.io/questions/move-element-to-end
 * 
 * Approach: Two Pointers
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

class Solution {
  moveElementToEnd(array, toMove) {
    let l = 0, r = array.length - 1;

    while (l < r) {
      if (array[l] === toMove && array[r] !== toMove) {
        [array[r], array[l]] = [array[l], array[r]];
      }

      if (array[l] !== toMove) {
        l++;
      }

      if (array[r] === toMove) {
        r--;
      }
    }

    return array;
  }
}

export default Solution;
