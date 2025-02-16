import Solution from "../Solution";
import { sharedTests } from "../../__shared__/shared.test";

describe('insertionSort (optimized)', () => {
  sharedTests(() => new Solution(), false);
});
