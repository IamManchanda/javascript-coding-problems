import { validateInput } from "../helpers/validateInput";

/**
 * Count vowels in a string
 * Approach: Recursion
 * 
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

class Solution {
  countVowels(str) {
    validateInput(str);

    const strLen = str.length;
    
    switch (strLen) {
      case 0:
        return 0;
      case 1:
        return this.#incrementIfVowel(str[0]);
      default:
        return this.countVowels(str.slice(0, -1))
          + this.#incrementIfVowel(str[strLen - 1]);
    }
  }

  #incrementIfVowel(char) {
    let lowerChar = char.toLowerCase();
    let vowels = 'aeiou';
    return Number(vowels.includes(lowerChar));
  }
}

export default Solution;
