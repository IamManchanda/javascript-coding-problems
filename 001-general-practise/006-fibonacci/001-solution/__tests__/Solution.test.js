import Solution from "../Solution";
import { sharedTests } from "../../__shared__/shared.test";

describe('fibonacci (recursion)', () => {
  sharedTests(() => new Solution(), false);
});
