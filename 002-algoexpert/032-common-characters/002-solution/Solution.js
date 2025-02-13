/**
 * Common Characters
 * https://www.algoexpert.io/questions/common-characters
 *
 * Approach: Smallest String + Hash Table (using Set)
 * Time Complexity: O(n * m)
 * Space Complexity:
 *  => O(1), if the alphabet is fixed (e.g. lowercase English letters)
 *  => O(max(m, k)), if the alphabet is not fixed
 *
 * where, n is the number of strings
 * and, m is the length of the longest string
 * also, k is the length of the smallest string
 */

class Solution {
  commonCharacters(strings) {
    const smallestString = strings.reduce(
        (a, b) => (a.length <= b.length ? a : b),
        strings[0],
      ),
      potentialCommonChars = new Set(smallestString);

    for (const string of strings) {
      const uniqStrChars = new Set(string);

      for (const char of potentialCommonChars) {
        if (!uniqStrChars.has(char)) {
          potentialCommonChars.delete(char);
        }
      }
    }

    return Array.from(potentialCommonChars);
  }
}

export default Solution;
