import Solution from "../Solution";
import { sharedTests } from "../../__shared__/shared.test";

describe('tribonacci (dp-recursion)', () => {
  sharedTests(() => new Solution(), true);
});
