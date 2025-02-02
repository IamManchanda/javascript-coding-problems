import { validateInput } from "../helpers/validateInput";

/**
 * Find first occurence of a number
 * Approach: Recursive
 * 
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

class Solution {
  findFirstOccurence(arr, findMe, currIndex = 0) {
    validateInput(arr, findMe, currIndex);

    if (arr[currIndex] === findMe) {
      return currIndex;
    }

    if (currIndex === arr.length - 1) {
      return -1;
    }

    return this.findFirstOccurence(arr, findMe, currIndex + 1);
  }
}

export default Solution;
