import { validateInput } from "../helpers/validateInput";

/**
 * Balance Parenthesis
 * Given a array of parenthesis, write a function to determine 
 * if the parenthesis () are balanced or not.
 * Approach: Recursion
 * 
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

class Solution {
  balanceParenthesis(arr) {
    validateInput(arr);

    if (arr.length === 0) {
      return true;
    }

    return this.#balanceParenthesis(arr, 0, 0);
  }

  #balanceParenthesis(arr, idx, counter) {
    if (arr.length === idx) {
      return counter === 0;
    }

    if (counter < 0) {
      return false;
    }

    if (arr[idx] === "(") {
      return this.#balanceParenthesis(arr, idx + 1, counter + 1);
    } else if (arr[idx] === ")") {
      return this.#balanceParenthesis(arr, idx + 1, counter - 1);
    }

    return false;
  }
}

export default Solution;