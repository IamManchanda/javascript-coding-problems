import Solution from "../Solution";
import { sharedTests } from "../../__shared__/shared.test";

describe('isPalindrome (recursive-tail-recursion)', () => {
  sharedTests(() => new Solution(), false);
});
