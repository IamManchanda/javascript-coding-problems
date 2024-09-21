import { validateInput } from "../helpers/validateInput";

/**
 * Count all occurences of a given number in a sorted array
 * Approach: Iteration
 * 
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

class Solution {
  countAllOccurences(arr, key) {
    validateInput(arr, key);

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === key) {
        count++;
      }
    }

    return count;
  }
}

export default Solution;