import Solution from "./Solution.js";

const solution = new Solution();
const result = solution.minimumCharactersForWords(["this", "that", "did", "deed", "them!", "a"]);
console.log(result); // ["t", "t", "h", "i", "s", "a", "d", "d", "e", "e", "m", "!"]