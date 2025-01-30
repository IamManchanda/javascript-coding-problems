import Solution from "../Solution";
import { sharedTests } from "../../__shared__/shared.test";

describe('tribonacci (recursion)', () => {
  sharedTests(() => new Solution(), false);
});
