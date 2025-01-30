import { validateInput } from "../helpers/validateInput";

/**
 * Minimum coin sum problem
 * Approach: Dynamic Programming (Iterative / Bottom-Up / Tabulation)
 * 
 * Time complexity: O(n * m)
 * Space complexity: O(n)
 * where n = target, m = number of coins
 */

class Solution {
  minCoinSum(target, coins) {
    validateInput(target, coins);

    if (target === 0) return 0;
    if (coins.length === 0 || Math.min(...coins) > target) return -1;

    const dp = new Array(target + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= target; i++) {
      for (const coin of coins) {
        const remainder = i - coin;

        if (remainder >= 0) {
          const remainderCoinsCount = dp[remainder];

          if (remainderCoinsCount !== Infinity) {
            dp[i] = Math.min(dp[i], remainderCoinsCount + 1);
          }
        }
      }
    }

    if (dp[target] === Infinity) {
      dp[target] = -1;
    }

    return dp[target];
  }
}

export default Solution;
