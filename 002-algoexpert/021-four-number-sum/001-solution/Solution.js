/**
 * Four Number Sum
 * https://www.algoexpert.io/questions/four-number-sum
 * 
 * Approach: Hash Table (using an object)
 * Time Complexity: O(n^2)
 * Space Complexity (Average): O(n^2)
 * Space Complexity (Worst): O(n^3)
 * 
 * Note: The Solution has taken steps to avoid duplicate
 * quadruplets and unnecessary iterations/space usage.
 */

class Solution {
  fourNumberSum(array, targetSum) {
    const n = array.length,
      quadruplets = [],
      allPairSums = {};

    for (let i = 1; i <= n - 2; i++) {
      // for i = 1, not enough previous pairs to form quadruplets
      // so, we skip it

      if (i !== 1) { 
        for (let j = i + 1; j <= n - 1; j++) {
          const currPairSum = array[i] + array[j];
          const complement = targetSum - currPairSum;

          if (complement in allPairSums) {
            const pairGroup = allPairSums[complement];

            for (const pair of pairGroup) {
              const newQuadruplet = [...pair, array[i], array[j]];
              quadruplets.push(newQuadruplet);
            }
          }
        }
      }

      // for i = n - 2, not enough upcoming pairs to form quadruplets
      // so, we break out of the loop
      if (i === n - 2) {
        break;
      }

      for (let k = 0; k <= i - 1; k++) {
        const currPairSum = array[k] + array[i];

        if (!(currPairSum in allPairSums)) {
          allPairSums[currPairSum] = []; // initialize
        }

        allPairSums[currPairSum].push([array[k], array[i]]);
      }
    }

    return quadruplets;
  }
}

export default Solution;
