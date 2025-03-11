/**
 * Generate Document
 * https://www.algoexpert.io/questions/generate-document
 * 
 * Approach: Brute Force
 * Time complexity: O(m * (n + m))
 * Space complexity: O(1)
 * 
 * where, n is the length of the characters string
 * and, m is the length of the document string
 */

class Solution {
  generateDocument(characters, document) {
    for (const char of document) {
      const charFreqDocument = this.countCharFreq(char, document);
      const charFreqCharacters = this.countCharFreq(char, characters);
      if (charFreqDocument > charFreqCharacters) return false;
    }

    return true;
  }

  countCharFreq(char, target) {
    let freq = 0;
    for (const c of target) if (c === char) freq++;
    return freq;
  }
}

export default Solution;
