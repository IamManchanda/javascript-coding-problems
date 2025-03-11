import Solution from "../Solution";
import { sharedTests } from "../../__shared__/shared.test";

describe('bubbleSort (optimized)', () => {
  sharedTests(() => new Solution(), false);
});
