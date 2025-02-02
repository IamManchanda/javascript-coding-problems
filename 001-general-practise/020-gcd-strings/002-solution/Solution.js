import { validateInput } from "../helpers/validateInput";

/**
 * Greatest Common Divisor of Strings
 * https://leetcode.com/problems/greatest-common-divisor-of-strings/
 * 
 * Approach: Euclidean Algorithm (GCD) - Iterative
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

class Solution {
  gcdOfStrings(str1, str2) {
    validateInput(str1, str2);

    if (str1 + str2 !== str2 + str1) {
      return "";
    }

    let a = str1.length, b = str2.length;

    while (b !== 0) {
      // gcd(a, b) = gcd(b, a % b)
      [a, b] = [b, a % b];
    }

    return str1.slice(0, a);
  }
}

export default Solution;