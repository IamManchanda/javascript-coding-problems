/**
 * Next Permutation
 * https://leetcode.com/problems/next-permutation
 *
 * Approach: Optimized
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

class Solution {
  nextPermutation(nums) {
    const n = nums.length;
    let bp = -1; // breaking point

    for (let i = n - 2; i >= 0; i--) {
      if (nums[i] < nums[i + 1]) {
        bp = i;
        break;
      }
    }

    if (bp === -1) {
      nums.reverse();
      return nums;
    }

    const np = bp + 1; // next point to breaking point

    for (let i = n - 1; i >= np; i--) {
      if (nums[i] > nums[bp]) {
        [nums[i], nums[bp]] = [nums[bp], nums[i]];
        break;
      }
    }

    nums.splice(np, n - np, ...nums.slice(np).reverse());

    return nums;
  }
}

export default Solution;
