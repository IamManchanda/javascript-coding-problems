/**
 * Missing Numbers
 * https://www.algoexpert.io/questions/missingNumbers
 * 
 * Approach: Maths
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

class Solution {
  missingNumbers(nums) {
    const n = nums.length + 2,
      average = this.averageMissingValue(nums, n);

    let numsFirstHalfSum = 0, numsSecondHalfSum = 0;
    for (const num of nums) {
      if (num <= average) {
        numsFirstHalfSum += num;
      } else {
        numsSecondHalfSum += num;
      }
    }

    const rangeFirstHalfSum = this.sumRange(1, average),
      rangeSecondHalfSum = this.sumRange(average + 1, n);
    
    return [
      rangeFirstHalfSum - numsFirstHalfSum,
      rangeSecondHalfSum - numsSecondHalfSum,
    ];
  }

  averageMissingValue(nums, range) {
    const totalExpectedSum = this.sumRange(1, range);

    let missingSum = 0;
    missingSum += totalExpectedSum;
    for (const num of nums) {
      missingSum -= num;
    }

    return Math.floor(missingSum / 2);
  }

  sumRange(s, n) {
    if (s === 1) {
      return (n * (n + 1)) / 2;
    }
    
    return (n * (n + 1)) / 2 - (s * (s - 1)) / 2;
  }
}

export default Solution;
