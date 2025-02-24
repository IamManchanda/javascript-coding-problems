import Solution from "./Solution.js";

const solution = new Solution();
const result = solution.moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2);
console.log(result); // [1, 3, 4, 2, 2, 2, 2, 2]