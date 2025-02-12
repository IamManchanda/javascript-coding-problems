import Solution from "../Solution";
import { sharedTests } from "../../__shared__/shared.test";

describe('isPalindrome (iterative-reverse)', () => {
  sharedTests(() => new Solution(), false);
});
