import { validateInput } from "../helpers/validateInput";

/**
 * Kids With the Greatest Number of Candies
 * https://leetcode.com/problems/kids-with-the-greatest-number-of-candies
 * 
 * Approach: Math.max() and Array.prototype.map()
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

class Solution {
  kidsWithCandies(candies, extraCandies) {
    validateInput(candies, extraCandies);

    const maxCandies = Math.max(...candies);
    return candies.map((candy) => candy + extraCandies >= maxCandies);
  }
}

export default Solution;
