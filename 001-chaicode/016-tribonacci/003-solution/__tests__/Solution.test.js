import Solution from "../Solution";
import { sharedTests } from "../../__shared__/shared.test";

describe('tribonacci (dp-iteration)', () => {
  sharedTests(() => new Solution(), true);
});
