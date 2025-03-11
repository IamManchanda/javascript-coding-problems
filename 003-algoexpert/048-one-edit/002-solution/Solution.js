/**
 * One Edit
 * https://www.algoexpert.io/questions/one-edit
 * 
 * Approach: Two Pointers
 * Time complexity: O(n)
 * Space complexity: O(1)
 * where, n is the length of the shorter string
 */

class Solution {
  oneEdit(stringOne, stringTwo) {
    const n1 = stringOne.length, n2 = stringTwo.length;
    if (Math.abs(n1 - n2) > 1) return false;

    let isCompared = false, idx1 = 0, idx2 = 0;

    while (idx1 <= n1 - 1 && idx2 <= n2 - 1) {
      if (stringOne[idx1] !== stringTwo[idx2]) {
        if (isCompared) return false; // more than one diff

        if (n1 > n2) {
          idx1++; // Move only idx1 pointer
        } else if (n1 < n2) {
          idx2++; // Move only idx2 pointer
        } else { // n1 === n2
          idx1++; idx2++; // Move both pointers
        }

        isCompared = true;
      } else {
        idx1++; idx2++; // Move both pointers
      }
    }

    return true;
  }
}

export default Solution;
