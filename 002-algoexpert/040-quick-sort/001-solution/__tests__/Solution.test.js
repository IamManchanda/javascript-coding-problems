import Solution from "../Solution";
import { sharedTests } from "../../__shared__/shared.test";

describe('quickSort (pivot-first-element)', () => {
  sharedTests(() => new Solution(), false);
});
