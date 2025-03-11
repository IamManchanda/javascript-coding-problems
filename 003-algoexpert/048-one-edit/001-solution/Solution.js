/**
 * One Edit
 * https://www.algoexpert.io/questions/one-edit
 * 
 * Approach: Substring Comparison
 * Time complexity: O(n + m)
 * Space complexity: O(n + m)
 * where, n is the length of stringOne 
 * and, m is the length of stringTwo
 */

class Solution {
  oneEdit(stringOne, stringTwo) {
    const n1 = stringOne.length, n2 = stringTwo.length;
    if (Math.abs(n1 - n2) > 1) return false;

    for (let i = 0; i <= Math.min(n1, n2) - 1; i++) {
      if (stringOne[i] !== stringTwo[i]) {
        if (n1 > n2) {
          // fromNextCharStringOne === fromCurrCharStringTwo
          return stringOne.slice(i + 1) === stringTwo.slice(i);
        } else if (n1 < n2) {
          // fromCurrCharStringOne === fromNextCharStringTwo
          return stringOne.slice(i) === stringTwo.slice(i + 1);
        } else { // n1 === n2
          // fromNextCharStringOne === fromNextCharStringTwo
          return stringOne.slice(i + 1) === stringTwo.slice(i + 1);
        }
      }
    }

    return true;
  }
}

export default Solution;
