import Solution from "../Solution";
import { sharedTests } from "../../__shared__/shared.test";

describe('longestPalindromicSubstring (brute-force)', () => {
  sharedTests(() => new Solution(), false);
});
