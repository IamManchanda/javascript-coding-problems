import { validateInput } from "../helpers/validateInput";

/**
 * Greatest Common Divisor of Strings
 * https://leetcode.com/problems/greatest-common-divisor-of-strings/
 * 
 * Approach: Euclidean Algorithm (GCD) - Recursive
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

class Solution {
  gcdOfStrings(str1, str2) {
    validateInput(str1, str2);

    if (str1 + str2 !== str2 + str1) {
      return "";
    }

    return this.#gcd(str1, str2);
  }

  #gcd(a, b) {
    if (b.length === 0) {
      return a;
    }

    // gcd(a, b) = gcd(b, a % b)
    return this.#gcd(b, a.slice(0, a.length % b.length));
  }
}

export default Solution;