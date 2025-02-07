/**
 * Majority Element
 * https://www.algoexpert.io/questions/majority-element
 * 
 * Approach: Bit Manipulation
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

class Solution {
  majorityElement(array) {
    let result = 0;

    for (let cb = 0; cb < 32; cb++) {
      const cbVal = 1 << cb;
      let onesCount = 0;

      for (const num of array) {
        if ((num & cbVal) !== 0) {
          onesCount++
        }
      }

      if (onesCount > array.length / 2) {
        result += cbVal;
      }
    }

    return result;
  }
}

export default Solution;
