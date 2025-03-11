import Solution from "../Solution";
import { sharedTests } from "../../__shared__/shared.test";

describe('mergeSort (divide-and-conquer)', () => {
  sharedTests(() => new Solution(), false);
});
