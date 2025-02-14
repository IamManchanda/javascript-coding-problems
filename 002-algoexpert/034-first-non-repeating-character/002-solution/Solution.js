/**
 * First Non-Repeating Character
 * https://www.algoexpert.io/questions/first-non-repeating-character
 * 
 * Approach: Hash Table (Array)
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

class Solution {
  firstNonRepeatingCharacter(string) {
    const n = string.length,
      charFreqs = new Array(26).fill(0),
      asciiA = 'a'.charCodeAt(); // 97

    for (const char of string) {
      const charCode = char.charCodeAt() - asciiA;
      charFreqs[charCode]++;
    }

    for (let i = 0; i <= n - 1; i++) {
      const charCode = string[i].charCodeAt() - asciiA;
      if (charFreqs[charCode] === 1) return i;
    }

    return -1;
  }
}

export default Solution;
