/**
 * Missing Numbers
 * https://www.algoexpert.io/questions/missingNumbers
 * 
 * Approach: Hash Table (using Set)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

class Solution {
  missingNumbers(nums) {
    const n = nums.length + 2,
      missingNums = [],
      numsSet = new Set(nums);

    for (let i = 1; i <= n; i++) {
      if (!numsSet.has(i)) {
        missingNums.push(i);
      }
    }

    return missingNums;
  }
}

export default Solution;
