/**
 * Semordnilap
 * https://www.algoexpert.io/questions/semordnilap
 * 
 * Approach: Hash Table (using Set)
 * Time complexity: O(n * m)
 * Space complexity: O(n)
 * where, n is the number of words 
 * and, m is the length of the longest word
 */

class Solution {
  semordnilap(words) {
    const result = [], wordsSet = new Set(words);

    for (const word of words) {
      if (!wordsSet.has(word)) continue;

      const reversedWord = word.split('').reverse().join('');

      if (reversedWord === word) {
        wordsSet.delete(word);
        continue;
      }

      if (wordsSet.has(reversedWord)) {
        result.push([word, reversedWord]);
        wordsSet.delete(word);
        wordsSet.delete(reversedWord);
      }
    }

    return result;
  }
}

export default Solution;
