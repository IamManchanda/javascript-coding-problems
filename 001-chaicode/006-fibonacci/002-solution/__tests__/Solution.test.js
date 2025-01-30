import Solution from "../Solution";
import { sharedTests } from "../../__shared__/shared.test";

describe('fibonacci (dp-recursion)', () => {
  sharedTests(() => new Solution(), true);
});
