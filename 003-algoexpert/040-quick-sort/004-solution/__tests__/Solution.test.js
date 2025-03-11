import Solution from "../Solution";
import { sharedTests } from "../../__shared__/shared.test";

describe('quickSort (pivot-last-element)', () => {
  sharedTests(() => new Solution(), false);
});
