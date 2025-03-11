/**
 * Caesar Cipher Encryptor
 * https://www.algoexpert.io/questions/caesar-cipher-encryptor
 * 
 * Approach: Alphabet Index-based Transformation
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

class Solution {
  caesarCipherEncryptor(string, key) {
    const newLetters = [], keyMod = key % 26,
      alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (const letter of string) {
      newLetters.push(this.getNewLetter(letter, keyMod, alphabets));
    }
    
    return newLetters.join('');
  }

  getNewLetter(letter, key, alphabets) {
    const newLetterIndex = (alphabets.indexOf(letter) + key) % 26;
    return alphabets[newLetterIndex];
  }
}

export default Solution;
