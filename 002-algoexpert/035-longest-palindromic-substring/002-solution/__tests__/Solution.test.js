import Solution from "../Solution";
import { sharedTests } from "../../__shared__/shared.test";

describe('longestPalindromicSubstring (expand-around-center)', () => {
  sharedTests(() => new Solution(), false);
});
