import Solution from "../Solution";
import { sharedTests } from "../../__shared__/shared.test";

describe('isPalindrome (inbuilt-reverse-method)', () => {
  sharedTests(() => new Solution(), false);
});
