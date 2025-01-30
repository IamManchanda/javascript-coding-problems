import { validateInput } from "../helpers/validateInput";

/**
 * Find first occurence of a number
 * Approach: Iterative
 * 
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

class Solution {
  findFirstOccurence(arr, findMe, currIndex = 0) {
    validateInput(arr, findMe, currIndex);

    while (currIndex < arr.length) {
      if (arr[currIndex] === findMe) {
        return currIndex;
      }

      currIndex++;
    }

    return -1;
  }
}

export default Solution;
