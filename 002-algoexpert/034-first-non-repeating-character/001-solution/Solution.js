/**
 * First Non-Repeating Character
 * https://www.algoexpert.io/questions/first-non-repeating-character
 * 
 * Approach: Brute Force
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */

class Solution {
  firstNonRepeatingCharacter(string) {
    const n = string.length;

    for (let i = 0; i <= n - 1; i++) {
      let foundDuplicate = false;      

      for (let j = 0; j <= n - 1; j++) {
        if (i !== j && string[i] === string[j]) {
          foundDuplicate = true;
          break;
        }
      }

      if (!foundDuplicate) {
        return i;
      }
    }

    return -1;
  }
}

export default Solution;
