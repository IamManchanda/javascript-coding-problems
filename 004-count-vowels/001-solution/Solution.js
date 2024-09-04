import { validateInput } from "../helpers/validateInput";

/**
 * Count vowels in a string
 * Approach: Iteration
 * 
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

class Solution {
  countVowels(str) {
    validateInput(str);

    let count = 0;

    for (let char of str) {
      count += this.#incrementIfVowel(char);
    }

    return count;
  }

  #incrementIfVowel(char) {
    let lowerChar = char.toLowerCase();
    let vowels = 'aeiou';
    return Number(vowels.includes(lowerChar));
  }
}

export default Solution;
