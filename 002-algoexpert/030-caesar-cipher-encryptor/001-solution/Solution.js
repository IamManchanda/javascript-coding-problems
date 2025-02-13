/**
 * Caesar Cipher Encryptor
 * https://www.algoexpert.io/questions/caesar-cipher-encryptor
 * 
 * Approach: ASCII-based Transformation
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

class Solution {
  caesarCipherEncryptor(string, key) {
    const newLetters = [], keyMod = key % 26;

    for (const letter of string) {
      newLetters.push(this.getNewLetter(letter, keyMod));
    }

    return newLetters.join('');
  }

  getNewLetter(letter, key) {
    const asciiA = 97, asciiZ = 122;
    
    let newLetterCode = letter.charCodeAt() + key;
    if (newLetterCode > asciiZ) {
      newLetterCode = (asciiA - 1) + (newLetterCode % asciiZ);
    }

    return String.fromCharCode(newLetterCode);
  }
}

export default Solution;
