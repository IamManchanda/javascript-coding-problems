/**
 * Generate Document
 * https://www.algoexpert.io/questions/generate-document
 * 
 * Approach: Hash Table (Map) - Unique chars in Characters
 * Time complexity: O(n + m)
 * Space complexity: O(c)
 * 
 * where, n is the length of the characters string
 * and, m is the length of the document string
 * also, c is the number of unique chars in the characters string
 */

class Solution {
  generateDocument(characters, document) {
    const charCounts = new Map();

    for (const char of characters) {
      if (!charCounts.has(char)) {
        charCounts.set(char, 0);
      }

      charCounts.set(char, charCounts.get(char) + 1);
    }

    for (const char of document) {
      if (!charCounts.has(char) || charCounts.get(char) === 0) {
        return false;
      }

      charCounts.set(char, charCounts.get(char) - 1);
    }

    return true;
  }
}

export default Solution;
