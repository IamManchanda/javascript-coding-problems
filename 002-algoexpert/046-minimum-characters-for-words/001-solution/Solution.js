/**
 * Minimum Characters For Words
 * https://www.algoexpert.io/questions/minimum-characters-for-words
 * 
 * Approach: Hash Table (using Map)
 * Time complexity: O(n * m)
 * Space complexity: O(c)
 * where, n is the number of words, 
 * and, m is the length of the longest word
 * also, c is the number of unique characters across all words
 */

class Solution {
  minimumCharactersForWords(words) {
    const result = [], maxFreqByChar = new Map(), wordFreqByChar = new Map();

    for (const word of words) {
      for (const char of word) {
        const currCharWordFreq = this.getOrDefault(wordFreqByChar, char, 0);
        wordFreqByChar.set(char, currCharWordFreq + 1);
      }

      for (const [char, currCharWordFreq] of wordFreqByChar) {
        const currCharMaxFreq = this.getOrDefault(maxFreqByChar, char, 0);
        maxFreqByChar.set(char, Math.max(currCharWordFreq, currCharMaxFreq));
      }

      wordFreqByChar.clear(); // Reset wordFreqByChar for next upcoming word
    }

    for (const [k, v] of maxFreqByChar) {
      for (let i = 0; i <= v - 1; i++) result.push(k);
    }

    return result;
  }

  getOrDefault(map, key, defaultValue) {
    return map.has(key) ? map.get(key) : defaultValue;
  }
}

export default Solution;
