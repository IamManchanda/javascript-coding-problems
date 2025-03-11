import Solution from "./Solution.js";

const solution = new Solution();
const result = solution.groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]);
console.log(result); // [["yo", "oy"], ["act", "tac", "cat"], ["flop", "olfp"], ["foo"]]