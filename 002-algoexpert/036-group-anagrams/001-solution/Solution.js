/**
 * Group Anagrams
 * https://www.algoexpert.io/questions/group-anagrams
 * 
 * Approach: Hash Table (using object)
 * Time complexity: O(w * n * log(n))
 * Space complexity: O(wn)
 * where, w is the number of words 
 * and, n is the length of the longest word
 */

class Solution {
  groupAnagrams(words) {
    const anagrams = {};

    for (const word of words) {
      const sortedWord = word.split('').sort().join('');
      
      if (sortedWord in anagrams) {
        anagrams[sortedWord].push(word);
      } else {
        anagrams[sortedWord] = [word];
      }
    }

    return Object.values(anagrams);
  }
}

export default Solution;
