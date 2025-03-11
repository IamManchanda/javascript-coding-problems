/**
 * Majority Element
 * https://www.algoexpert.io/questions/majority-element
 * 
 * Approach: Boyer-Moore Voting Algorithm
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

class Solution {
  majorityElement(array) {
    let count = 0,
      result = 0;

    for (const value of array) {
      if (count === 0) {
        result = value;
      }

      if (value === result) {
        count++;
      } else {
        count--;
      }
    }

    return result;
  }
}

export default Solution;
