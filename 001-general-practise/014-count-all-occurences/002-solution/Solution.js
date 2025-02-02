import { validateInput } from "../helpers/validateInput";

/**
 * Count all occurences of a given number in a sorted array
 * Approach: Recursion
 * 
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

class Solution {
  countAllOccurences(arr, key) {
    validateInput(arr, key);

    return this.#countAllOccurences(arr, key, 0);
  }

  #countAllOccurences(arr, key, idx) {
    if (idx === arr.length) {
      return 0;
    }
    
    return this.#incrementIfMatch(arr, key, idx)
      + this.#countAllOccurences(arr, key, idx + 1);
  }

  #incrementIfMatch(arr, key, idx) {
    return Number(arr[idx] === key);
  }
}

export default Solution;