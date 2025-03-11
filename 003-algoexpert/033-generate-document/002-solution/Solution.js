/**
 * Generate Document
 * https://www.algoexpert.io/questions/generate-document
 * 
 * Approach: Hash Table (Set) - Unique chars in Document
 * Time complexity: O(d * (n + m))
 * Space complexity: O(d)
 * 
 * where, n is the length of the characters string
 * and, m is the length of the document string
 * also, d is the number of unique chars in the document string
 */

class Solution {
  generateDocument(characters, document) {
    const alreadyCounted = new Set();

    for (const char of document) {
      if (alreadyCounted.has(char)) continue;

      const charFreqDocument = this.countCharFreq(char, document);
      const charFreqCharacters = this.countCharFreq(char, characters);
      if (charFreqDocument > charFreqCharacters) return false;

      alreadyCounted.add(char);
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
