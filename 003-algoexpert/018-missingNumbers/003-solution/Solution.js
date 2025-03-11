/**
 * Missing Numbers
 * https://www.algoexpert.io/questions/missingNumbers
 * 
 * Approach: XOR Bit Manipulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

class Solution {
  missingNumbers(nums) {
    const n = nums.length + 2,
      result = [];

    let computedXOR = 0;
    for (let i = 1; i <= n; i++) {
      computedXOR ^= i;

      if (i <= nums.length) {
        const idx = i - 1;
        computedXOR ^= nums[idx];
      }
    }

    const setBit = computedXOR & -computedXOR;

    for (let i = 1; i <= n; i++) {
      if ((i & setBit) === 0) {
        result[0] ^= i; // Within setBit
      } else {
        result[1] ^= i; // Outside setBit
      }

      if (i <= nums.length) {
        const idx = i - 1;
        if ((nums[idx] & setBit) === 0) {
          result[0] ^= nums[idx]; // Within setBit
        } else {
          result[1] ^= nums[idx]; // Outside setBit
        }
      }
    }

    // Sort the two numbers in ascending order without using 
    // array.sort() to avoid time complexity of O(n log(n))
    if (result[0] > result[1]) {
      [result[0], result[1]] = [result[1], result[0]];
    }
    
    return result;
  }
}

export default Solution;
