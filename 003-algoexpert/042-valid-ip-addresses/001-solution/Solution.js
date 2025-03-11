/**
 * Valid IP Addresses
 * https://www.algoexpert.io/questions/valid-ip-addresses
 * 
 * Approach: Traverse and Validate
 * Time complexity: O(1)
 * Space complexity: O(1)
 * 
 * Note: This solution has constant time and space complexity because
 * the upper bound is known and fixed. It doesn't grow with the input size.
 */

class Solution {
  validIPAddresses(string) {
    const n = string.length, result = [];

    for (let i = 0; i <= Math.min(n - 1, 3); i++) {
      const current = new Array(4).fill("");
      current[0] = string.slice(0, i);

      if (!this.isValidPart(current[0])) continue;

      for (let j = i + 1; j <= i + Math.min(n - i - 1, 3); j++) {
        current[1] = string.slice(i, j);

        if (!this.isValidPart(current[1])) continue;

        for (let k = j + 1; k <= j + Math.min(n - j - 1, 3); k++) {
          current[2] = string.slice(j, k);
          current[3] = string.slice(k);

          if (this.isValidPart(current[2]) && this.isValidPart(current[3])) {
            result.push(current.join("."));
          }
        }
      }
    }

    return result;
  }

  isValidPart(string) {
    const stringAsInt = parseInt(string, 10);
    if (stringAsInt > 255) return false;
    return string.length === stringAsInt.toString().length;
  }
}

export default Solution;
