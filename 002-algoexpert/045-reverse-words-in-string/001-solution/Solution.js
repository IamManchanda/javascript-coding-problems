/**
 * Reverse Words in String
 * https://www.algoexpert.io/questions/reverse-words-in-string
 * 
 * Approach: Split Segments and Reverse
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

class Solution {
  reverseWordsInString(string) {
    const n = string.length, words = [];

    let i = 0;
    for (let j = 0; j <= n - 1; j++) {
      if (string[j] === " ") {
        const prevWord = string.slice(i, j);
        words.push(prevWord); // Push the previous word
        i = j;
      } else if (string[i] === " ") {
        words.push(" "); // Push the space
        i = j;
      }
    }
    
    words.push(string.slice(i)); // Push the last word

    this.reverseList(words); // Reverse the list in-place

    return words.join("");
  }

  reverseList(list) {
    let l = 0, r = list.length - 1;
    while (l < r) {
      [list[l], list[r]] = [list[r], list[l]];
      l++; r--; // Shift pointers
    }
  }
}

export default Solution;
