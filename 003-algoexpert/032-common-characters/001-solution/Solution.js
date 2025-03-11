/**
 * Common Characters
 * https://www.algoexpert.io/questions/common-characters
 * 
 * Approach: Hash Table (using Map & Set)
 * Time Complexity: O(n * m)
 * Space Complexity:
 *  => O(1), if the alphabet is fixed (e.g. lowercase English letters)
 *  => O(c), if the alphabet is not fixed, which can be as high as O(n * m)
 * 
 * where, n is the number of strings
 * and, m is the length of the longest string
 * also, c is the number of unique characters across all strings
 */

class Solution {
  commonCharacters(strings) {
    const n = strings.length,
      result = [], 
      charCounts = new Map();

    for (const string of strings) {
      const uniqStrChars = new Set(string);

      for (const char of uniqStrChars) {
        if (!charCounts.has(char)) {
          charCounts.set(char, 1);
        } else {
          charCounts.set(char, charCounts.get(char) + 1);
        }
      }
    }

    for (const [char, count] of charCounts) {
      if (count === n) {
        result.push(char);
      }
    }

    return result;
  }
}

export default Solution;
