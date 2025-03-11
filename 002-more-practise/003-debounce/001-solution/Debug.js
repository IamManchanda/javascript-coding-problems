import Solution from "./Solution.js";
import { sleep } from "../helpers/sleep.js";

const solution = new Solution();

const search = (query) => {
  console.log('Searching for:', query);
};

const debouncedSearch = solution.debounce(search, 300);

(async function() {
  await sleep(0, debouncedSearch, 'H');
  await sleep(100, debouncedSearch, 'Har');
  await sleep(200, debouncedSearch, 'Hard');
  await sleep(400, debouncedSearch, 'Hard J');
  await sleep(500, debouncedSearch, 'Hard JS');
})();





