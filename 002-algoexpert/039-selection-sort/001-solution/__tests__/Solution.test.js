import Solution from "../Solution";
import { sharedTests } from "../../__shared__/shared.test";

describe('selectionSort (optimized)', () => {
  sharedTests(() => new Solution(), false);
});
