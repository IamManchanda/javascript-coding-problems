import { validateInput } from "../helpers/validateInput";

/**
 * Coin sum problem (Bottom-Up Approach)
 * Approach: Dynamic Programming (Iterative / Bottom-Up / Tabulation)
 * 
 * Time complexity: O(n * m)
 * Space complexity: O(n)
 * where, n = target, m = number of coins
 */
class Solution {
  coinSum(target, coins) {
    validateInput(target, coins);

    if (target === 0) return true;
    if (coins.length === 0 || Math.min(...coins) > target) return false;

    const dp = new Array(target + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= target; i++) {
      for (const coin of coins) {
        const remainder = i - coin;
        if (remainder >= 0 && dp[remainder]) {
          dp[i] = true;
          break;
        }
      }
    }

    return dp[target];
  }
}

export default Solution;
