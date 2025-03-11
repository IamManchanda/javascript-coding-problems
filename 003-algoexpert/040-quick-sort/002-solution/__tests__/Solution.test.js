import Solution from "../Solution";
import { sharedTests } from "../../__shared__/shared.test";

describe('quickSort (pivot-middle-element)', () => {
  sharedTests(() => new Solution(), false);
});
