/**
 * Run-Length Encoding
 * https://www.algoexpert.io/questions/run-length-encoding
 * 
 * Approach: Iterative
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

class Solution {
  runLengthEncoding(string) {
    const n = string.length, encodedChars = [];
    let currRunLength = 1; // as input string is non-empty

    // Handle from first character to second-to-last character
    for (let i = 0; i <= n - 2; i++) {
      const currChar = string[i], nextChar = string[i + 1];

      if (currChar !== nextChar || currRunLength === 9) {
        encodedChars.push(`${currRunLength}`);
        encodedChars.push(currChar);
        currRunLength = 0;
      }

      currRunLength++;
    }

    // Handle the last character
    encodedChars.push(`${currRunLength}`);
    encodedChars.push(string[n - 1]);

    return encodedChars.join('');
  }
}

export default Solution;
